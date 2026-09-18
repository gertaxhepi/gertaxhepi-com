import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Primitives";
import { PrimaryActionButton } from "@/components/PrimaryActionButton";

const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/5e5a77b8-fdcf-4df7-92f9-1cada506e97a";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Product Case Studies | AI, Marketplace & SaaS" },
      { name: "description", content: "Case studies covering AI products, marketplaces, workflow tools and data-driven product development." },
      { property: "og:title", content: "Product Case Studies | AI, Marketplace & SaaS" },
      { property: "og:description", content: "Case studies covering AI products, marketplaces, workflow tools and data-driven product development." },
      { property: "og:type", content: "website" },
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

const projects = [
  {
    number: "01",
    slug: "salary-transparency",
    title: "Salary Transparency & Structured Job Data",
    context: "XING · 2021–2024",
    outcome: "−28% estimation error · 94% coverage · +11% applications",
  },
  {
    number: "02",
    slug: "notifications",
    title: "Notifications",
    context: "XING · B2C",
    outcome: "+40% notification open rate through better targeting and segmentation",
  },
  {
    number: "03",
    slug: "onlyfy-talent-pool",
    title: "onlyfy Talent Pool",
    context: "XING · B2B",
    outcome: "Approximately 40% of contacted users joined the migrated talent pool",
  },
  {
    number: "04",
    slug: "electronic-signature",
    title: "Electronic Signature MVP",
    context: "Jacando · 2024–2025",
    outcome: "Shipped in under two months · process time −20%",
  },
  {
    number: "05",
    slug: "peakprofile",
    title: "PeakProfile",
    context: "Founder project · Current",
    outcome: "AI-assisted mountaineering readiness and decision support",
  },
];

function Work() {
  return (
    <Section className="work-index pb-4" spacing="tight">
      <section className="page-title-hero work-index-intro">
        <h1>Selected product work.</h1>
      </section>

      <div data-reveal-item className="work-project-list">
        {projects.map((project) => (
          <Link
            key={project.number}
            to="/case-studies/$slug"
            params={{ slug: project.slug }}
            className="work-project-row"
            aria-label={`View ${project.title} case study`}
          >
            <span className="work-project-number">{project.number}</span>
            <div className="work-project-main">
              <h2 className="work-project-title">{project.title}</h2>
              <p className="work-project-context">{project.context}</p>
            </div>
            <p className="work-project-outcome">{project.outcome}</p>
            <ArrowUpRight className="work-project-arrow" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </Section>
  );
}
