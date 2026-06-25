import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Card, Pill, Section, SectionHeading } from "@/components/Primitives";
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
    <Section className="pt-16 md:pt-24">
      <SectionHeading
        eyebrow="Case studies"
        title="Selected product work."
        description="Each case study walks through the problem, discovery, strategy and what we shipped — including the parts that didn't work."
      />
      <div className="mt-12 grid md:grid-cols-2 gap-5">
        {caseStudies.map((c) => (
          <Card key={c.slug} className="group flex flex-col">
            <div className="text-xs text-muted-foreground">{c.context}</div>
            <h2 className="mt-2 text-xl font-medium">{c.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{c.summary}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {c.technologies.map((t) => <Pill key={t}>{t}</Pill>)}
            </div>
            <div className="mt-5 border-t border-border pt-4">
              <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Outcomes</div>
              <ul className="space-y-1.5 text-sm text-foreground/85">
                {c.outcomes.map((o) => (
                  <li key={o} className="flex gap-2">
                    <span className="mt-1.5 size-1 rounded-full bg-primary shrink-0" />
                    {o}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6">
              <Link
                to="/case-studies/$slug"
                params={{ slug: c.slug }}
                className="text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all"
              >
                Read more <ArrowRight className="size-4" />
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
