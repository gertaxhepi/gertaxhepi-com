import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Primitives";

const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/5e5a77b8-fdcf-4df7-92f9-1cada506e97a";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Product Case Studies | AI, Marketplace & SaaS" },
      { name: "description", content: "Case studies covering AI products, marketplaces, workflow tools and data-driven product development." },
      { property: "og:title", content: "Product Case Studies | AI, Marketplace & SaaS" },
      { property: "og:description", content: "Case studies covering AI products, marketplaces, workflow tools and data-driven product development." },
      { property: "og:url", content: "https://gertaproduct.com/work" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://gertaproduct.com/work" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://gertaproduct.com/" },
            { "@type": "ListItem", position: 2, name: "Work", item: "https://gertaproduct.com/work" },
          ],
        }),
      },
    ],
  }),
  component: Work,
});

const workGroups = [
  {
    number: "01",
    company: "XING / onlyfy · New Work SE",
    period: "2021 — 2024",
    projects: [
      {
        slug: "salary-transparency",
        title: "Salary Transparency & Structured Job Data",
        description:
          "Salary estimates are only as reliable as the data behind them. I rebuilt the structured data pipeline powering millions of salary predictions, improving model quality and increasing user trust.",
        featured: true,
      },
    ],
  },
  {
    number: "02",
    company: "jacando AG",
    period: "2024 — 2025",
    projects: [
      {
        slug: "electronic-signature",
        title: "Electronic Signature MVP",
        description:
          "Built and launched an MVP that digitized document signing for HR teams, reducing manual workflows and enabling faster hiring.",
        featured: false,
      },
    ],
  },
  {
    number: "03",
    company: "PeakProfile",
    period: "2025 — NOW",
    projects: [
      {
        slug: "peakprofile",
        title: "PeakProfile",
        description:
          "Building an AI-powered product that helps mountaineers make better decisions through structured experience data.",
        featured: false,
      },
    ],
  },
];

function Work() {
  return (
    <Section className="pt-16 md:pt-28" spacing="tight">
      <div data-reveal-item className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10">
        Selected Work
      </div>
      <h1
        data-reveal-item
        className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02] max-w-3xl text-balance"
      >
        A closer look at recent product work.
      </h1>

      <div data-reveal-item className="mt-20 md:mt-28 space-y-20 md:space-y-28">
        {workGroups.map((group) => (
          <article key={group.number}>
            <div className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-baseline mb-12 md:mb-16">
              <span className="text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[var(--terracotta)]/30 leading-none">
                {group.number}
              </span>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-foreground">
                  {group.company}
                </h2>
                <p className="mt-1 text-sm md:text-base font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  {group.period}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {group.projects.map((project) => (
                <Link
                  key={project.slug}
                  to="/case-studies/$slug"
                  params={{ slug: project.slug }}
                  className="group block cursor-pointer rounded-2xl transition-colors duration-300 hover:bg-[var(--terracotta)]/5"
                >
                  <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-12 items-start py-8 md:py-10 transition-transform duration-300 group-hover:translate-x-1">
                    <div className="max-w-2xl">
                      {project.featured && (
                        <div className="text-[11px] font-mono uppercase tracking-[0.22em] mb-3 text-[var(--terracotta)]">
                          Featured Project
                        </div>
                      )}
                      <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="pt-1">
                      <ArrowUpRight
                        className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                        style={{ color: project.featured ? "var(--terracotta)" : undefined }}
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
