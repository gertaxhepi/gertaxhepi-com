import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Card, Section } from "@/components/Primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, MapPin, ArrowUpRight, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gerta Xhepi" },
      { name: "description", content: "Get in touch with Gerta Xhepi about product roles, collaborations or thoughtful conversations." },
      { property: "og:title", content: "Contact — Gerta Xhepi" },
      { property: "og:description", content: "Let's build products that matter." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const channels = [
  { icon: Mail, label: "Email", value: "xhepigerta@gmail.com", href: "mailto:xhepigerta@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/gertaxhepi", href: "https://www.linkedin.com/in/gertaxhepi" },
  { icon: MapPin, label: "Based in", value: "Germany · Open to remote" },
];

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

function Contact() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const mountedAt = useRef<number>(0);

  useEffect(() => {
    mountedAt.current = Date.now();
  }, []);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status.kind === "submitting") return;

    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      subject: String(fd.get("subject") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      website: String(fd.get("website") ?? ""), // honeypot
      elapsedMs: Date.now() - (mountedAt.current || Date.now()),
    };

    // Lightweight client checks
    if (!payload.name || !payload.email || payload.message.length < 10) {
      setStatus({ kind: "error", message: "Please fill in your name, email, and a short message." });
      return;
    }

    setStatus({ kind: "submitting" });
    try {
      const res = await fetch("/api/public/contact-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => ({}))) as { error?: string };
        setStatus({ kind: "error", message: data.error ?? "Something went wrong. Please try again." });
        return;
      }
      setStatus({ kind: "success" });
      form.reset();
    } catch {
      setStatus({ kind: "error", message: "Network error. Please try again." });
    }
  }

  return (
    <Section className="pt-20 md:pt-28">
      <div className="max-w-3xl">
        <div className="text-xs uppercase tracking-[0.18em] text-primary/80 mb-4">Contact</div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">
          Let's build products that <span className="font-display italic text-primary">matter</span>.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-xl">
          Whether it's a senior PM role, a founding product hire, or simply a conversation about how to build well — I'd love to hear from you.
        </p>
      </div>

      <div className="mt-12 grid lg:grid-cols-5 gap-6">
        <Card className="lg:col-span-3 p-6 md:p-8">
          <h2 className="text-xl font-medium tracking-tight">Send a message</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Goes straight to my inbox. I usually reply within two business days.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
            {/* Honeypot — hidden from humans, visible to bots */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label>
                Website
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <Field label="Name" htmlFor="cf-name" required>
                <Input id="cf-name" name="name" autoComplete="name" required maxLength={100} />
              </Field>
              <Field label="Email" htmlFor="cf-email" required>
                <Input id="cf-email" name="email" type="email" autoComplete="email" required maxLength={255} />
              </Field>
            </div>

            <Field label="Subject" htmlFor="cf-subject">
              <Input id="cf-subject" name="subject" placeholder="e.g. Founding PM conversation" maxLength={200} />
            </Field>

            <Field label="Message" htmlFor="cf-message" required>
              <Textarea
                id="cf-message"
                name="message"
                required
                minLength={10}
                maxLength={5000}
                rows={6}
                placeholder="A few lines about what you're working on or what you'd like to chat about."
              />
            </Field>

            <div className="flex items-center justify-between gap-4 pt-2 flex-wrap">
              <p className="text-xs text-muted-foreground">
                Protected by spam checks. Your message isn't shared with anyone.
              </p>
              <Button
                type="submit"
                disabled={status.kind === "submitting"}
                className="rounded-full"
              >
                {status.kind === "submitting" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" /> Sending…
                  </>
                ) : (
                  "Send message"
                )}
              </Button>
            </div>

            {status.kind === "success" && (
              <div role="status" className="flex items-start gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm">
                <CheckCircle2 className="mt-0.5 size-5 text-primary shrink-0" />
                <div>
                  <div className="font-medium text-foreground">Message sent.</div>
                  <div className="text-muted-foreground">
                    Thanks for reaching out — I'll be in touch shortly.
                  </div>
                </div>
              </div>
            )}

            {status.kind === "error" && (
              <div role="alert" className="flex items-start gap-3 rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-sm">
                <AlertCircle className="mt-0.5 size-5 text-destructive shrink-0" />
                <div className="text-foreground">{status.message}</div>
              </div>
            )}
          </form>
        </Card>

        <div className="lg:col-span-2 grid gap-4 content-start">
          {channels.map(({ icon: Icon, label, value, href }) => {
            const content = (
              <Card className="h-full">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="size-5" />
                </div>
                <div className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                <div className="mt-1.5 text-base font-medium flex items-center gap-1.5 break-all">
                  {value}
                  {href && <ArrowUpRight className="size-4 text-muted-foreground shrink-0" />}
                </div>
              </Card>
            );
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="block"
              >
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

function Field({
  label,
  htmlFor,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={htmlFor} className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}{required && <span className="text-primary"> *</span>}
      </label>
      {children}
    </div>
  );
}
