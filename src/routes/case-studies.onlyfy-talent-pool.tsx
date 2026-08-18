import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb } from "@/components/Breadcrumb";

export const Route = createFileRoute("/case-studies/onlyfy-talent-pool")({
  head: () => {
    const title = "onlyfy Talent Pool — Case Study";
    const description =
      "Supported the migration into the XING Talent Pool and helped roughly 40% of contacted users join.";
    const url = "https://gertaproduct.com/case-studies/onlyfy-talent-pool";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "onlyfy Talent Pool",
            description,
            author: { "@type": "Person", name: "Gerta Xhepi" },
            url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://gertaproduct.com/" },
              { "@type": "ListItem", position: 2, name: "Work", item: "https://gertaproduct.com/work" },
              { "@type": "ListItem", position: 3, name: "onlyfy Talent Pool", item: url },
            ],
          }),
        },
      ],
    };
  },
  component: OnlyfyTalentPoolPage,
});

function OnlyfyTalentPoolPage() {
  return (
    <>
      <Section className="pt-12 md:pt-20" spacing="tight">
        <Reveal>
          <div data-reveal-item className="mb-8">
            <Breadcrumb
              items={[
                { label: "Home", to: "/" },
                { label: "Work", to: "/work" },
              ]}
            />
          </div>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground"
          >
            XING • Product Manager
          </div>
          <h1
            data-reveal-item
            className="mt-5 text-5xl md:text-7xl font-semibold tracking-tight text-balance leading-[1.02] max-w-4xl"
          >
            onlyfy Talent Pool
          </h1>
          <p
            data-reveal-item
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Supported the migration into the XING Talent Pool and helped roughly 40% of contacted users join.
          </p>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <Link to="/work" className="group block py-12 md:py-16">
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
            Back to Work
          </div>
          <div className="mt-6 flex items-start justify-between gap-8">
            <div className="text-3xl md:text-5xl font-semibold tracking-tight transition-opacity group-hover:opacity-60">
              All projects
            </div>
            <ArrowUpRight className="size-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </Link>
      </Section>
    </>
  );
}
