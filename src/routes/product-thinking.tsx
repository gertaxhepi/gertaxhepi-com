import { createFileRoute } from "@tanstack/react-router";
import { Card, Pill, Section, SectionHeading } from "@/components/Primitives";
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
    <Section className="pt-16 md:pt-24">
      <SectionHeading
        eyebrow="Product thinking"
        title="Notes on how I work."
        description="A growing collection of evergreen pieces — written slowly, edited often. New articles are added under each topic."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {topics.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="flex flex-col">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent text-accent-foreground">
              <Icon className="size-5" />
            </div>
            <h2 className="mt-5 text-lg font-medium">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground flex-1">{desc}</p>
            <div className="mt-5 pt-4 border-t border-border">
              <Pill>Articles coming soon</Pill>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
