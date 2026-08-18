import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/5e5a77b8-fdcf-4df7-92f9-1cada506e97a";

export const Route = createFileRoute("/writing/")({
  head: () => ({
    meta: [
      { title: "Product Essays | AI, Product Strategy & Discovery" },
      { name: "description", content: "Essays about AI product management, discovery, strategy and building thoughtful products." },
      { property: "og:title", content: "Product Essays | AI, Product Strategy & Discovery" },
      { property: "og:description", content: "Essays about AI product management, discovery, strategy and building thoughtful products." },
      { property: "og:url", content: "https://gertaproduct.com/writing" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://gertaproduct.com/writing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://gertaproduct.com/" },
            { "@type": "ListItem", position: 2, name: "Writing", item: "https://gertaproduct.com/writing" },
          ],
        }),
      },
    ],
  }),
  component: Writing,
});

const essays = [
  {
    number: "01",
    to: "/essays/ai-problems",
    title: "Understanding Before Solving",
    description:
      "A reflection on mentorship, AI and why understanding the problem matters more than writing better prompts.",
    type: "Reflection",
    readTime: "7 min",
    featured: true,
  },
  {
    number: "02",
    to: "/writing/product-discovery-software-engineering",
    title: "How My Software Engineering Background Shaped My Approach to Product Discovery",
    description:
      "How moving from software engineering into product management changed the way I approach discovery.",
    type: "Essay",
    readTime: "6 min",
    featured: false,
  },
] as const;

function Writing() {
  return (
    <Section className="pt-16 md:pt-24 pb-4" spacing="tight">
      {/* Hero */}
      <div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-12 lg:items-start">
        <div data-reveal-item className="lg:col-span-2">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-[var(--terracotta)]">
            Selected Writing
          </div>
        </div>
        <div data-reveal-item className="lg:col-span-7">
          <h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight leading-[1.02] text-foreground">
            <span className="block">Thoughts that</span>
            <span className="block">shape my thinking.</span>
          </h1>
        </div>
        <div data-reveal-item className="lg:col-span-3 lg:self-end">
          <p className="text-base leading-relaxed text-muted-foreground max-w-sm">
            Notes on product, technology, discovery and building software.
          </p>
        </div>
      </div>

      {/* Article list */}
      <Reveal className="mt-12 md:mt-16 space-y-2">
        {essays.map((essay) => (
          <Link
            key={essay.number}
            to={essay.to}
            data-reveal-item
            className={cn(
              "group relative block cursor-pointer rounded-2xl transition-colors duration-300",
              essay.featured
                ? "bg-[var(--terracotta)]/[0.06]"
                : "hover:bg-[var(--terracotta)]/5"
            )}
          >
            {/* Mobile layout */}
            <div className="grid grid-cols-[auto_1fr_auto] gap-3 px-4 py-6 md:px-6 md:py-8 lg:hidden transition-transform duration-300 group-hover:translate-x-1">
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--terracotta)]/70 pt-1.5">
                {essay.number}
              </span>
              <h2 className="text-lg md:text-xl font-semibold tracking-tight">
                {essay.title}
              </h2>
              <div className="pt-1.5">
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div className="col-span-3">
                <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                  {essay.description}
                </p>
                <p className="mt-3 text-[11px] font-mono uppercase tracking-[0.14em] text-muted-foreground">
                  {essay.type} · {essay.readTime}
                </p>
              </div>
            </div>

            {/* Desktop layout */}
            <div className="hidden lg:grid lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,35%)_auto_auto] lg:items-start lg:gap-6 lg:px-6 lg:py-8 transition-transform duration-300 group-hover:translate-x-1">
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--terracotta)]/70 pt-1.5 w-8">
                {essay.number}
              </span>
              <h2 className="text-xl md:text-2xl font-semibold tracking-tight pr-4">
                {essay.title}
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground">
                {essay.description}
              </p>
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-muted-foreground pt-2 whitespace-nowrap">
                {essay.type} · {essay.readTime}
              </span>
              <div className="pt-1.5">
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </Link>
        ))}
      </Reveal>

      <Reveal>
        <p data-reveal-item className="mt-16 text-sm text-muted-foreground leading-relaxed">
          More essays will appear here whenever I discover something worth writing about.
        </p>
      </Reveal>
    </Section>
  );
}
