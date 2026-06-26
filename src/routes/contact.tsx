import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, ArrowUpRight } from "lucide-react";

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
  { label: "Email", value: "xhepigerta@gmail.com", href: "mailto:xhepigerta@gmail.com" },
  { label: "LinkedIn", value: "linkedin.com/in/gerta-xhepi", href: "https://www.linkedin.com/in/gerta-xhepi-94853289/" },
  { label: "Location", value: "Germany \u00b7 Open to remote" },
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
      website: String(fd.get("website") ?? ""),
      elapsedMs: Date.now() - (mountedAt.current || Date.now()),
    };

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
    <>
      <Section className="pt-16 md:pt-28" spacing="tight">
        <Reveal>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10"
          >
            Contact
          </div>
          <h1
            data-reveal-item
            className="text-5xl md:text-7xl lg:text-[88px] font-semibold tracking-tight leading-[1.02] text-balance max-w-4xl"
          >
            Let's build products that matter.
          </h1>
          <p
            data-reveal-item
            className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Whether it's a PM role, a founding product hire, or simply a conversation about
            how to build well — I'd love to hear from you.
          </p>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <div className="grid md:grid-cols-[1fr_2fr] gap-16 md:gap-24">
          <Reveal className="space-y-12">
            {channels.map((c) => (
              <div data-reveal-item key={c.label}>
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  {c.label}
                </div>
                {c.href ? (
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-base md:text-lg font-medium text-foreground transition-opacity hover:opacity-60"
                  >
                    {c.value}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                ) : (
                  <div className="text-base md:text-lg font-medium">{c.value}</div>
                )}
              </div>
            ))}
          </Reveal>

          <Reveal>
            <div
              data-reveal-item
              className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10"
            >
              Send a message
            </div>

            <form onSubmit={onSubmit} className="space-y-10" noValidate data-reveal-item>
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>
                  Website
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-10">
                <Field label="Name" htmlFor="cf-name" required>
                  <input
                    id="cf-name"
                    name="name"
                    autoComplete="name"
                    required
                    maxLength={100}
                    className="minimal-input"
                  />
                </Field>
                <Field label="Email" htmlFor="cf-email" required>
                  <input
                    id="cf-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    maxLength={255}
                    className="minimal-input"
                  />
                </Field>
              </div>

              <Field label="Subject" htmlFor="cf-subject">
                <input
                  id="cf-subject"
                  name="subject"
                  placeholder="e.g. PM conversation"
                  maxLength={200}
                  className="minimal-input"
                />
              </Field>

              <Field label="Message" htmlFor="cf-message" required>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={5000}
                  rows={5}
                  placeholder="A few lines about what you're working on or what you'd like to chat about."
                  className="minimal-input resize-none"
                />
              </Field>

              <div className="flex items-center justify-between gap-6 flex-wrap pt-2">
                <p className="text-xs text-muted-foreground max-w-xs">
                  Protected by spam checks. Your message isn't shared with anyone.
                </p>
                <button
                  type="submit"
                  disabled={status.kind === "submitting"}
                  className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60 disabled:opacity-40"
                >
                  {status.kind === "submitting" ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> Sending…
                    </>
                  ) : (
                    <>
                      Send message
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </div>

              {status.kind === "success" && (
                <div role="status" className="flex items-start gap-3 pt-4 text-sm">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Message sent.</div>
                    <div className="text-muted-foreground">
                      Thanks for reaching out — I'll be in touch shortly.
                    </div>
                  </div>
                </div>
              )}

              {status.kind === "error" && (
                <div role="alert" className="flex items-start gap-3 pt-4 text-sm">
                  <AlertCircle className="mt-0.5 size-5 text-destructive shrink-0" />
                  <div className="text-foreground">{status.message}</div>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </Section>
    </>
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
    <div className="space-y-3">
      <label
        htmlFor={htmlFor}
        className="block text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground"
      >
        {label}
        {required && <span className="ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}
