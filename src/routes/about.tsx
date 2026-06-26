import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Gerta Xhepi" },
      { name: "description", content: "Product Manager with 5+ years building data-intensive SaaS products. Engineering background, MBA, founder of PeakProfile." },
      { property: "og:title", content: "About — Gerta Xhepi" },
      { property: "og:description", content: "Product Manager with an engineering background and an MBA, working at the intersection of AI, platform and B2B SaaS." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const meta = [
  { label: "Focus", value: "AI \u00b7 Platform \u00b7 Marketplaces \u00b7 Workflow automation" },
  { label: "Currently", value: "Founder, PeakProfile \u2014 AI for safer mountaineering" },
  { label: "Based in", value: "Germany \u00b7 Open to remote" },
];

const values = [
  { t: "Clarity over cleverness", d: "Plain words and simple diagrams help teams move faster than impressive frameworks." },
  { t: "Closeness to engineering", d: "I do my best work when I sit with engineers and understand the system we're shaping." },
  { t: "Respect for users", d: "Real conversations with real people are non-negotiable, no matter how senior the role." },
  { t: "Long-term thinking", d: "Most product wins are quiet and compounding. I try to optimise for the next two years, not the next quarter." },
  { t: "Honest measurement", d: "Metrics should help us decide, not help us look good." },
  { t: "Calm execution", d: "Steady weekly progress beats heroic sprints almost every time." },
];

function About() {
  return (
    <>
      <Section className="pt-16 md:pt-28" spacing="tight">
        <Reveal>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10"
          >
            About
          </div>
          <h1
            data-reveal-item
            className="text-5xl md:text-7xl font-semibold tracking-tight text-balance leading-[1.02] max-w-4xl"
          >
            Building products at the intersection of technology, business and people.
          </h1>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-16 md:gap-24">
          <Reveal className="space-y-7 text-lg md:text-xl text-foreground/90 leading-relaxed">
            <p data-reveal-item>
              I'm a Product Manager with over five years of experience building data-intensive SaaS products. My background is in software engineering and I hold an MBA, which together shape how I approach product work — close to the system, close to the customer, and close to the business.
            </p>
            <p data-reveal-item>
              I've built and shipped marketplaces, workflow automation, AI products and structured data systems. Across all of them, I enjoy solving technically complex problems where customer needs, business goals and engineering reality intersect.
            </p>
            <p data-reveal-item>
              These days, much of my energy goes into{" "}
              <Link to="/case-studies/$slug" params={{ slug: "peakprofile" }} className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors">
                PeakProfile
              </Link>
              , my own AI product exploring trust, risk and decision-making in mountaineering. It's where I get to practise discovery, model behaviour and evaluation end-to-end.
            </p>
            <p data-reveal-item>
              Outside of product, I spend a lot of time in the mountains. Mountaineering taught me how to plan under uncertainty, take responsibility for decisions and respect systems I don't fully control. PeakProfile exists because of those hours on rock and snow.
            </p>
          </Reveal>

          <Reveal className="space-y-10">
            {meta.map((m) => (
              <div data-reveal-item key={m.label}>
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  {m.label}
                </div>
                <div className="text-base font-medium leading-snug">{m.value}</div>
              </div>
            ))}
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

      <Section>
        <SectionHeading eyebrow="What I value" title="A few things I care about deeply." />
        <div className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-14">
          {values.map((v, i) => (
            <div data-reveal-item key={v.t} className="grid grid-cols-[auto_1fr] gap-8">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground pt-1.5">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{v.t}</h3>
                <p className="mt-3 text-[15px] md:text-base text-muted-foreground leading-relaxed max-w-md">
                  {v.d}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
