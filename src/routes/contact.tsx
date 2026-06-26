import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Gerta Xhepi" },
      { name: "description", content: "Get in touch with Gerta Xhepi — Product Manager based in Germany." },
      { property: "og:title", content: "Contact — Gerta Xhepi" },
      { property: "og:description", content: "Let's build thoughtful products." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

type Channel = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  internal?: boolean;
};

const channels: Channel[] = [
  { label: "Email", value: "xhepigerta@gmail.com", href: "mailto:xhepigerta@gmail.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gerta-xhepi",
    href: "https://www.linkedin.com/in/gerta-xhepi-94853289/",
    external: true,
  },
  { label: "Resume", value: "View resume", href: "/resume", internal: true },
  { label: "Location", value: "Germany" },
];

function Contact() {
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
            Let's build thoughtful products.
          </h1>
          <p
            data-reveal-item
            className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Open to PM roles and conversations with founders and product leaders. The best ways to reach me are below.
          </p>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <Reveal className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-14 max-w-3xl">
          {channels.map((c) => (
            <div data-reveal-item key={c.label}>
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-4">
                {c.label}
              </div>
              {c.href ? (
                c.internal ? (
                  <Link
                    to={c.href}
                    className="group inline-flex items-center gap-2 text-lg md:text-xl font-medium text-foreground transition-opacity hover:opacity-60"
                  >
                    {c.value}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ) : (
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noreferrer" : undefined}
                    className="group inline-flex items-center gap-2 text-lg md:text-xl font-medium text-foreground transition-opacity hover:opacity-60"
                  >
                    {c.value}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )
              ) : (
                <div className="text-lg md:text-xl font-medium">{c.value}</div>
              )}
            </div>
          ))}
        </Reveal>
      </Section>
    </>
  );
}
