import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, Section, SectionHeading } from "@/components/Primitives";
import { Button } from "@/components/ui/button";
import { Mountain } from "lucide-react";

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

function About() {
  return (
    <>
      <Section className="pt-16 md:pt-24 pb-8">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.18em] text-primary/80 mb-4">About</div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">
            Building products at the <span className="font-display italic text-primary">intersection</span> of technology, business and people.
          </h1>
        </div>
      </Section>

      <Section className="py-8">
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-12">
          <div className="space-y-6 text-base md:text-lg text-foreground/85 leading-relaxed">
            <p>
              I'm a Product Manager with over five years of experience building data-intensive SaaS products. My background is in software engineering and I hold an MBA, which together shape how I approach product work — close to the system, close to the customer, and close to the business.
            </p>
            <p>
              I've built and shipped marketplaces, workflow automation, AI products and structured data systems. Across all of them, I enjoy solving technically complex problems where customer needs, business goals and engineering reality intersect.
            </p>
            <p>
              These days, much of my energy goes into <Link to="/case-studies/$slug" params={{ slug: "peakprofile" }} className="text-primary hover:underline">PeakProfile</Link>, my own AI product exploring trust, risk and decision-making in mountaineering. It's where I get to practise discovery, model behaviour and evaluation end-to-end.
            </p>
            <p>
              Outside of product, I spend a lot of time in the mountains. Mountaineering taught me how to plan under uncertainty, take responsibility for decisions and respect systems I don't fully control. PeakProfile exists because of those hours on rock and snow.
            </p>
          </div>
          <div className="space-y-4">
            <Card>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Focus</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li>AI products</li>
                <li>Platform product management</li>
                <li>Marketplaces and data systems</li>
                <li>Workflow automation</li>
              </ul>
            </Card>
            <Card>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Currently</div>
              <div className="mt-3 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Mountain className="size-4" />
                </div>
                <div className="text-sm">
                  <div className="font-medium">Founder, PeakProfile</div>
                  <div className="text-muted-foreground">AI for safer mountaineering</div>
                </div>
              </div>
            </Card>
            <Card>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Based in</div>
              <div className="mt-2 text-sm">Germany · Open to remote</div>
              <div className="mt-4">
                <Button asChild variant="outline" size="sm" className="rounded-full">
                  <Link to="/contact">Get in touch</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What I value" title="A few things I care about deeply." />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { t: "Clarity over cleverness", d: "Plain words and simple diagrams help teams move faster than impressive frameworks." },
            { t: "Closeness to engineering", d: "I do my best work when I sit with engineers and understand the system we're shaping." },
            { t: "Respect for users", d: "Real conversations with real people are non-negotiable, no matter how senior the role." },
            { t: "Long-term thinking", d: "Most product wins are quiet and compounding. I try to optimise for the next two years, not the next quarter." },
            { t: "Honest measurement", d: "Metrics should help us decide, not help us look good." },
            { t: "Calm execution", d: "Steady weekly progress beats heroic sprints almost every time." },
          ].map((v) => (
            <Card key={v.t}>
              <h3 className="text-lg font-medium">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
