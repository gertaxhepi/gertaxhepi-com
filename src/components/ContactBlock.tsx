import { Link } from "@tanstack/react-router";
import { ExternalLink, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";

type Channel = {
  label: string;
  href: string;
  icon: LucideIcon;
  ariaLabel: string;
  external?: boolean;
  internal?: boolean;
};

const channels: Channel[] = [
  {
    label: "xhepigerta@gmail.com",
    href: "mailto:xhepigerta@gmail.com",
    icon: Mail,
    ariaLabel: "Email Gerta Xhepi",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/gerta-xhepi-94853289/",
    icon: Linkedin,
    ariaLabel: "Visit Gerta Xhepi on LinkedIn",
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/gertaxhepi",
    icon: Github,
    ariaLabel: "Visit Gerta Xhepi on GitHub",
    external: true,
  },
  { label: "Resume", href: "/resume", icon: FileText, ariaLabel: "View Gerta Xhepi's resume", internal: true },
];

export function ContactBlock() {
  return (
    <section className="container-page pt-20 md:pt-28 pb-6 md:pb-8">
      <Reveal className="grid grid-cols-1 lg:grid-cols-[2.1fr_1fr] gap-x-10 lg:gap-x-16 gap-y-12 lg:gap-y-16 items-start">
        <h2
          data-reveal-item
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.02] text-balance"
        >
          Let's get in touch.
        </h2>

        <div
          data-reveal-item
          className="flex flex-col items-start gap-4 lg:row-start-2"
        >
          {channels.map((c) => {
            const Icon = c.icon;
            const className =
              "group inline-flex items-center gap-2 text-lg md:text-xl font-medium text-foreground transition-opacity hover:opacity-60";
            const inner = (
              <>
                <Icon className="size-[18px] shrink-0 text-foreground" strokeWidth={1.75} aria-hidden="true" />
                {c.label}
                <ExternalLink className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </>
            );
            return (
              <div key={c.label}>
                {c.internal ? (
                  <Link to={c.href} className={className} aria-label={c.ariaLabel}>
                    {inner}
                  </Link>
                ) : (
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className={className}
                    aria-label={c.ariaLabel}
                  >
                    {inner}
                  </a>
                )}
              </div>
            );
          })}
        </div>

        <div
          data-reveal-item
          className="lg:col-start-2 lg:row-start-2 lg:text-right lg:justify-self-end"
        >
          <div className="flex items-center gap-2 lg:justify-end text-sm md:text-base font-medium text-foreground">
            <MapPin className="size-[18px] shrink-0 text-foreground" strokeWidth={1.75} aria-hidden="true" />
            Based in Germany
          </div>
          <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed max-w-xs lg:ml-auto">
            Open to remote opportunities across Germany &amp; Europe.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
