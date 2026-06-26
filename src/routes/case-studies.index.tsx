import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/data/case-studies";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — Gerta Xhepi" },
      { name: "description", content: "Selected product work across AI, platform, marketplace and workflow products." },
      { property: "og:title", content: "Case Studies — Gerta Xhepi" },
      { property: "og:description", content: "Selected product work across AI, platform, marketplace and workflow products." },
      { property: "og:url", content: "/case-studies" },
    ],
    links: [{ rel: "canonical", href: "/case-studies" }],
  }),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  return (
    <>
      <Section className="pt-16 md:pt-28" spacing="tight">
        <SectionHeading
          eyebrow="Case studies"
          title="Selected product work."
          description="A closer look at how I work on complex product problems."
        />
      </Section>

      <Section spacing="tight">
        <Reveal className="divide-y divide-border">
          {caseStudies.map((c, i) => (
            <Link
              key={c.slug}
              to="/case-studies/$slug"
              params={{ slug: c.slug }}
              data-reveal-item
              className="group grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-16 py-12 md:py-16 transition-opacity hover:opacity-60"
            >
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground md:pt-3">
                0{i + 1}
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  {c.context}
                </div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                  {c.title}
                </h2>
                <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                  {c.summary}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">
                  {c.technologies.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
              <div className="md:pt-3">
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          ))}
        </Reveal>
      </Section>
    </>
  );
}
