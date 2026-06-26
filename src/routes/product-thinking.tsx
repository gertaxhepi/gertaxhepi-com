import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { Compass, Scale, Sparkles, Layers, Network, BarChart3, Users } from "lucide-react";

export const Route = createFileRoute("/product-thinking")({
  head: () => ({
    meta: [
      { title: "Product Thinking — Gerta Xhepi" },
      { name: "description", content: "Evergreen notes on product discovery, prioritization, AI products, platform PM, marketplace thinking and more." },
      { property: "og:title", content: "Product Thinking — Gerta Xhepi" },
      { property: "og:description", content: "Evergreen notes on product discovery, prioritization, AI products, platform PM and more." },
      { property: "og:url", content: "/product-thinking" },
    ],
    links: [{ rel: "canonical", href: "/product-thinking" }],
  }),
  component: ProductThinking,
});

const topics = [
  { icon: Compass, title: "Product Discovery", desc: "Frameworks and field notes on how I learn about users before writing a single ticket." },
  { icon: Scale, title: "Prioritization", desc: "Making honest trade-offs when everything looks important and the team is finite." },
  { icon: Sparkles, title: "Building AI Products", desc: "Evaluation, grounding and restraint — what it actually takes to ship AI features people trust." },
  { icon: Layers, title: "Platform Product Management", desc: "Treating internal tools as real products, with users, releases and a roadmap." },
  { icon: Network, title: "Marketplace Thinking", desc: "Supply, demand, data and trust — the loops that make or break a marketplace." },
  { icon: BarChart3, title: "Product Metrics", desc: "Choosing metrics that move decisions, and avoiding the ones that quietly mislead." },
  { icon: Users, title: "Stakeholder Management", desc: "Working with leaders, engineering and design without losing the user in the room." },
];

function ProductThinking() {
  return (
    <>
      <Section className="pt-16 md:pt-28" spacing="tight">
        <SectionHeading
          eyebrow="Product thinking"
          title="Notes on how I work."
          description="A growing collection of evergreen pieces — written slowly, edited often. New articles are added under each topic."
        />
      </Section>

      <Section spacing="tight">
        <Reveal className="divide-y divide-border">
          {topics.map(({ icon: Icon, title, desc }, i) => (
            <div
              data-reveal-item
              key={title}
              className="grid md:grid-cols-[auto_auto_1fr_auto] gap-6 md:gap-12 items-start py-10 md:py-14"
            >
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground md:pt-3">
                0{i + 1}
              </div>
              <div className="md:pt-1">
                <Icon className="size-5 stroke-[1.5]" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
                <p className="mt-3 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {desc}
                </p>
              </div>
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground md:pt-3">
                Coming soon
              </div>
            </div>
          ))}
        </Reveal>
      </Section>
    </>
  );
}
