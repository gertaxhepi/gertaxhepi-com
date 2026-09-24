import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";

const OG_IMAGE =
  "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/5e5a77b8-fdcf-4df7-92f9-1cada506e97a";

export const Route = createFileRoute("/writing/")({
  head: () => ({
    meta: [
      { title: "Product Essays | AI, Product Strategy & Discovery" },
      {
        name: "description",
        content:
          "Essays about AI product management, discovery, strategy and building thoughtful products.",
      },
      { property: "og:title", content: "Product Essays | AI, Product Strategy & Discovery" },
      {
        property: "og:description",
        content:
          "Essays about AI product management, discovery, strategy and building thoughtful products.",
      },
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
            {
              "@type": "ListItem",
              position: 2,
              name: "Writing",
              item: "https://gertaproduct.com/writing",
            },
          ],
        }),
      },
    ],
  }),
  component: Writing,
});

const essays = [
  {
    to: "/essays/ai-problems",
    category: "Product",
    title: "Understanding Before Solving",
    description:
      "Why the best product decisions begin with curiosity, context, and the right questions.",
    readTime: "7 min",
    year: "2026",
  },
  {
    to: "/writing/product-discovery-software-engineering",
    category: "Career",
    title: "How My Software Engineering Background Shaped My Approach to Product Discovery",
    description:
      "What building software taught me about constraints, collaboration, and finding the real problem.",
    readTime: "6 min",
    year: "2026",
  },
] as const;

function Writing() {
  return (
    <Section className="!pb-4" spacing="tight">
      <section className="px-4 pb-20 pt-[72px] md:px-6 md:pb-24">
        <p className="mb-7 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--terracotta)]">
          Writing
        </p>
        <h1 className="max-w-[900px] text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.04em] text-balance md:text-5xl lg:text-6xl">
          Notes on product, technology, and the work between them.
        </h1>
      </section>

      <Reveal className="border-t border-border">
        {essays.map((essay) => (
          <Link
            key={essay.to}
            to={essay.to}
            data-reveal-item
            className="group grid grid-cols-[minmax(0,1fr)_auto] gap-x-5 gap-y-5 border-b border-border px-4 py-8 transition-colors duration-200 ease-out hover:bg-[var(--terracotta)]/[0.045] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring md:px-6 md:py-10 lg:grid-cols-[minmax(0,1fr)_auto_auto] lg:items-center lg:gap-x-8 lg:py-11"
            aria-label={`Read ${essay.title}`}
          >
            <div className="min-w-0">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--terracotta)]">
                {essay.category}
              </p>
              <h2 className="max-w-5xl text-xl font-semibold leading-tight tracking-tight md:text-2xl">
                {essay.title}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {essay.description}
              </p>
            </div>

            <span className="self-start whitespace-nowrap pt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground lg:self-center lg:pt-0 lg:text-[11px]">
              {essay.readTime} read · {essay.year}
            </span>

            <ArrowUpRight
              className="col-start-2 row-start-2 size-5 self-end justify-self-end transition-transform duration-200 ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px] lg:col-start-3 lg:row-start-1 lg:self-center"
              aria-hidden="true"
            />
          </Link>
        ))}
      </Reveal>
    </Section>
  );
}
