import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import profileAsset from "@/assets/profile.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me — Gerta Xhepi" },
      {
        name: "description",
        content:
          "Product Manager with 5+ years building digital products across B2B, B2C, SaaS, AI and marketplaces. Background in software engineering.",
      },
      { property: "og:title", content: "About Me — Gerta Xhepi" },
      {
        property: "og:description",
        content: "Product Manager working at the intersection of customer needs, data, business and engineering.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const howIThink = [
  "How I approach Product Discovery",
  "Why better data leads to better decisions",
  "What building an AI product taught me",
  "Teaching Hatha Yoga changed how I think about Product Management",
  "Books that shaped my thinking",
];

const outsideWork = [
  { number: "01", title: "Traditional Hatha Yoga Teacher", subtitle: "Founder \u00b7 Hima Yoga" },
  { number: "02", title: "Outdoor Sports", subtitle: "Marathon Running \u00b7 Mountaineering \u00b7 Rock Climbing" },
  { number: "03", title: "Culture", subtitle: "Philosophy \u00b7 Art \u00b7 Music" },
];

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

function About() {
  return (
    <>
      {/* About Me */}
      <Section spacing="tight">
        <SectionHeading eyebrow="My Story" title="How I Got Here." />
        <div className="mt-16 grid md:grid-cols-[1.6fr_1fr] gap-16 md:gap-24">
          <Reveal className="space-y-7 text-lg md:text-xl text-foreground/90 leading-relaxed">
            <p data-reveal-item>
              I began my career as a software engineer, where I learned how products are built. Even then, I was always
              drawn to understanding problems and finding better ways to solve them. That curiosity, alongside building
              products of my own, eventually led me into Product Management.
            </p>
            <p data-reveal-item>
              Since then, I've worked on products used by millions of people, including at XING, building marketplace
              systems, workflow tools and AI-powered features.
            </p>
            <p data-reveal-item>
              Today, I'm building{" "}
              <Link
                to="/case-studies/$slug"
                params={{ slug: "peakprofile" }}
                className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
              >
                PeakProfile
              </Link>
              , where I'm exploring how AI and structured data can support better decision-making in high-risk
              environments.
            </p>
            <p data-reveal-item className="pt-4">
              I'm fascinated by products that help people make better decisions. Whether through better data, thoughtful
              workflows or AI, that's the thread connecting nearly everything I've built.
            </p>
          </Reveal>

          <Reveal className="space-y-10">
            <div data-reveal-item>
              <img src={profileAsset.url} alt="Gerta Xhepi" className="w-full grayscale" loading="eager" />
            </div>
            <div data-reveal-item>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
              >
                Get in touch
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* OUTSIDE OF WORK */}
      <Section>
        <SectionHeading eyebrow="Outside of Work" title="The person behind the product." />
        <Reveal className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-4xl">
          {outsideWork.map((item) => (
            <div data-reveal-item key={item.number}>
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-4">
                {item.number}
              </div>
              <div className="text-base md:text-[17px] font-medium text-foreground leading-snug text-balance">
                {item.title}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{item.subtitle}</div>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* CONTACT */}
      <Section spacing="tight">
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
            Let's build products people actually want to use.
          </h2>
          <p data-reveal-item className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I'm always happy to talk about product, AI, marketplaces or interesting opportunities.
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
