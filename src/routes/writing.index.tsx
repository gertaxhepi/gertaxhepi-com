import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";

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
      "A reflection on mentorship, AI and why understanding a problem matters more than writing better prompts.",
    type: "Reflection",
    readTime: "7 min",
  },
  {
    number: "02",
    to: "/writing/product-discovery-software-engineering",
    title: "How My Software Engineering Background Shaped My Approach to Product Discovery",
    description:
      "A reflection on how moving from software engineering to product management changed the way I think about product discovery and decision making.",
    type: "Reflection",
    readTime: "8 min",
  },
] as const;

function Writing() {
  return (
    <Section className="pt-16 md:pt-28" spacing="tight">
      <Reveal>
        <div
          data-reveal-item
          className="text-[11px] font-mono uppercase tracking-[0.22em] mb-10"
          style={{ color: "#8A5A5A" }}
        >
          WRITING
        </div>
        <h1
          data-reveal-item
          className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02] max-w-3xl text-balance"
        >
          How I Think
        </h1>
        <p data-reveal-item className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Products are only part of the story. The other part is how our thinking evolves while building them. This is
          where I collect the ideas, questions and experiences that continue to shape mine.
        </p>
      </Reveal>

      <Reveal className="mt-20 border-t border-border">
        {essays.map((essay) => (
          <Link
            key={essay.number}
            to={essay.to}
            data-reveal-item
            className="group block cursor-pointer border-b border-border"
          >
            <div className="grid grid-cols-[40px_1fr_40px] gap-x-4 md:gap-x-6 py-14 md:py-20 items-start">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground pt-1">
                {essay.number}
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight transition-opacity group-hover:opacity-60">
                  {essay.title}
                </h2>
                <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl">
                  {essay.description}
                </p>

                <dl className="mt-8 grid grid-cols-2 gap-x-12 gap-y-6 max-w-xs sm:max-w-sm">
                  <div>
                    <dt className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">Type</dt>
                    <dd className="text-sm md:text-[15px] font-medium">{essay.type}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
                      Read time
                    </dt>
                    <dd className="text-sm md:text-[15px] font-medium">{essay.readTime}</dd>
                  </div>
                </dl>

                <span className="mt-10 inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1">
                  Read essay
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
              <div className="pt-1">
                <span aria-label={`Read essay: ${essay.title}`} className="inline-flex">
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
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
