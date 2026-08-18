import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Primitives";
import { cn } from "@/lib/utils";

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
    role: "Product Manager",
    period: "2021–2024",
    projects: [
      {
        slug: "salary-transparency",
        title: "Salary Transparency & Structured Job Data",
        description:
          "Salary estimates are only as reliable as the data behind them. I rebuilt the structured data pipeline powering millions of salary predictions, improving model quality and increasing user trust.",
        featured: true,
      },
      {
        slug: "notifications",
        title: "Notifications",
        description:
          "Improved targeting, segmentation and content relevance, increasing notification open rates by 40%.",
        featured: false,
      },
      {
        slug: "onlyfy-talent-pool",
        title: "onlyfy Talent Pool",
        description:
          "Supported the migration into the XING Talent Pool and helped roughly 40% of contacted users join.",
        featured: false,
      },
    ],
  },
  {
    number: "02",
    company: "Jacando",
    role: "Product Manager",
    period: "2024–2025",
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
    company: "Founder Project",
    role: "Product Builder",
    period: "Currently",
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
          <article
            key={group.number}
            className="grid items-start gap-10 lg:grid-cols-[minmax(0,38%)_minmax(0,1fr)] lg:gap-16"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-baseline lg:flex-col lg:items-start">
              <span className="text-5xl font-semibold leading-none tracking-tight text-[var(--terracotta)]/30 md:text-6xl lg:text-8xl">
                {group.number}
              </span>
              <div className="min-w-0">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                  {group.company}
                </h2>
                <p className="mt-1 text-sm font-mono uppercase tracking-[0.18em] text-muted-foreground md:text-base">
                  {group.role} · {group.period}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              {group.projects.map((project) => (
                <Link
                  key={project.slug}
                  to="/case-studies/$slug"
                  params={{ slug: project.slug }}
                  className={cn(
                    "group relative block cursor-pointer rounded-2xl transition-colors duration-300",
                    project.featured
                      ? "bg-[var(--terracotta)]/[0.06]"
                      : "hover:bg-[var(--terracotta)]/5"
                  )}
                >
                  <div className="grid grid-cols-1 items-start gap-4 px-4 py-6 transition-transform duration-300 group-hover:translate-x-1 md:px-6 md:py-8 lg:grid-cols-[minmax(0,40%)_minmax(0,1fr)_auto]">
                    <div className="min-w-0 pr-8 lg:pr-0">
                      {project.featured && (
                        <div className="mb-2 text-[11px] font-mono uppercase tracking-[0.22em] text-[var(--terracotta)]">
                          Featured Project
                        </div>
                      )}
                      <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                        {project.title}
                      </h3>
                    </div>
                    <p className="min-w-0 text-base leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="absolute top-6 right-4 lg:static lg:top-auto lg:right-auto lg:pt-1">
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
