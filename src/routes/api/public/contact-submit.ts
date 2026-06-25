import { createFileRoute } from "@tanstack/react-router";
import { createHash } from "crypto";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().max(200).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Message is too short").max(5000),
  // Honeypot — must be empty
  website: z.string().max(0).optional().or(z.literal("")),
  // Min time-to-fill in ms — bots submit instantly
  elapsedMs: z.number().int().min(2500, "Submitted too fast"),
});

const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 3;

function getClientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return (
    request.headers.get("cf-connecting-ip") ??
    request.headers.get("x-real-ip") ??
    "unknown"
  );
}

function hashIp(ip: string): string {
  const salt = process.env.SUPABASE_URL ?? "lovable";
  return createHash("sha256").update(`${salt}:${ip}`).digest("hex");
}

export const Route = createFileRoute("/api/public/contact-submit")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let json: unknown;
        try {
          json = await request.json();
        } catch {
          return Response.json({ error: "Invalid request" }, { status: 400 });
        }

        const parsed = ContactSchema.safeParse(json);
        if (!parsed.success) {
          // Generic message so bots don't learn which field failed
          return Response.json(
            { error: "Please check the form and try again." },
            { status: 400 },
          );
        }

        const { name, email, subject, message } = parsed.data;
        const ip = getClientIp(request);
        const ipHash = hashIp(ip);
        const userAgent = request.headers.get("user-agent")?.slice(0, 500) ?? null;

        const { supabaseAdmin } = await import(
          "@/integrations/supabase/client.server"
        );

        // Rate limit: max N submissions per IP per window
        const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MS).toISOString();
        const { count, error: rateErr } = await supabaseAdmin
          .from("contact_submissions")
          .select("id", { count: "exact", head: true })
          .eq("ip_hash", ipHash)
          .gte("created_at", since);

        if (rateErr) {
          console.error("rate limit check failed", rateErr);
          return Response.json({ error: "Server error" }, { status: 500 });
        }

        if ((count ?? 0) >= RATE_LIMIT_MAX) {
          return Response.json(
            { error: "You've sent several messages recently. Please try again later." },
            { status: 429 },
          );
        }

        const { data: inserted, error: insertErr } = await supabaseAdmin
          .from("contact_submissions")
          .insert({
            name,
            email,
            subject: subject || null,
            message,
            ip_hash: ipHash,
            user_agent: userAgent,
            status: "received",
          })
          .select("id")
          .single();

        if (insertErr) {
          console.error("contact insert failed", insertErr);
          return Response.json({ error: "Could not save message" }, { status: 500 });
        }

        // Best-effort email notification — only fires once the email
        // infrastructure (domain + transactional templates) is configured.
        try {
          const sendUrl = new URL(
            "/lovable/email/transactional/send",
            new URL(request.url).origin,
          ).toString();

          const idempotencyKey = `contact-${inserted.id}`;

          const res = await fetch(sendUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-internal-trigger": "1",
            },
            body: JSON.stringify({
              templateName: "contact-notification",
              recipientEmail: "xhepigerta@gmail.com",
              idempotencyKey,
              templateData: { name, email, subject: subject || "", message },
            }),
          });
          if (!res.ok && res.status !== 404) {
            console.warn("contact email send failed", res.status, await res.text());
          }
        } catch (e) {
          console.warn("contact email send threw", e);
        }

        return Response.json({ ok: true });
      },

      OPTIONS: async () =>
        new Response(null, {
          status: 204,
          headers: { "Cache-Control": "no-store" },
        }),
    },
  },
});
