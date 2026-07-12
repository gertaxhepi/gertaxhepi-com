import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

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
];

export function ContactBlock() {
  return (
    <section className="container-page pt-20 md:pt-28 pb-8 md:pb-10">
      <Reveal>
        <div
          data-reveal-item
          className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10"
        >
          Contact
        </div>
        <h2
          data-reveal-item
          className="text-4xl md:text-6xl lg:text-[72px] font-semibold tracking-tight leading-[1.02] text-balance max-w-4xl"
        >
          Let's get in touch.
        </h2>
        <p data-reveal-item className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          I'm always happy to talk about product, AI, marketplaces, or new opportunities. If you're
          looking for someone to help build thoughtful products, I'd love to connect.
        </p>
      </Reveal>

      <Reveal className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-14 max-w-3xl">
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
                  rel={c.external ? "noopener noreferrer" : undefined}
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
    </section>
  );
}
