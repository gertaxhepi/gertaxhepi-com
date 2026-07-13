import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";

type Channel = {
  label: string;
  href: string;
  external?: boolean;
  internal?: boolean;
};

const channels: Channel[] = [
  { label: "xhepigerta@gmail.com", href: "mailto:xhepigerta@gmail.com" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gerta-xhepi-94853289/",
    external: true,
  },
  { label: "View resume", href: "/resume", internal: true },
];

export function ContactBlock() {
  return (
    <section className="container-page pt-20 md:pt-28 pb-6 md:pb-8">
      <Reveal className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr] gap-10 md:gap-16 items-start">
        <h2
          data-reveal-item
          className="text-4xl md:text-6xl lg:text-[72px] font-semibold tracking-tight leading-[1.02] text-balance"
        >
          Let's get in touch.
        </h2>
        <div data-reveal-item className="md:pt-3">
          <div className="flex items-center gap-2 text-sm md:text-base font-medium text-foreground">
            <MapPin className="size-4" strokeWidth={1.75} />
            Based in Germany
          </div>
          <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
            Open to remote opportunities across Germany &amp; Europe.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-14 md:mt-20 flex flex-wrap items-center gap-x-12 md:gap-x-20 gap-y-4">
        {channels.map((c) => {
          const className =
            "group inline-flex items-center gap-2 text-lg md:text-xl font-medium text-foreground transition-opacity hover:opacity-60";
          const inner = (
            <>
              {c.label}
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          );
          return (
            <div data-reveal-item key={c.label}>
              {c.internal ? (
                <Link to={c.href} className={className}>
                  {inner}
                </Link>
              ) : (
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noopener noreferrer" : undefined}
                  className={className}
                >
                  {inner}
                </a>
              )}
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}
