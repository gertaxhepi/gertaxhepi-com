import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Card, Pill, Section } from "@/components/Primitives";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/data/case-studies";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.study;
    const title = s ? `${s.title} — Case Study` : "Case Study";
    return {
      meta: [
        { title },
        { name: "description", content: s?.summary ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: s?.summary ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/case-studies/${s?.slug ?? ""}` },
      ],
      links: [{ rel: "canonical", href: `/case-studies/${s?.slug ?? ""}` }],
    };
  },
  notFoundComponent: () => (
    <Section><p>Case study not found.</p></Section>
  ),
  errorComponent: ({ error }) => (
    <Section><p className="text-muted-foreground">{error.message}</p></Section>
  ),
  component: CaseStudyPage,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-10 border-t border-border">
      <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground pt-1">{title}</div>
      <div className="text-base text-foreground/90 leading-relaxed">{children}</div>
    </div>
  );
}

function CaseStudyPage() {
  const { study } = Route.useLoaderData() as { study: CaseStudy };
  const s = study;
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <Section className="pt-12 md:pt-16 pb-8">
        <Link to="/case-studies" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1">
          <ArrowLeft className="size-4" /> All case studies
        </Link>
        <div className="mt-8 text-xs uppercase tracking-[0.18em] text-primary/80">{s.context}</div>
        <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-balance">{s.title}</h1>
        <p className="mt-5 text-lg text-muted-foreground max-w-2xl">{s.summary}</p>
        <div className="mt-6 flex flex-wrap gap-1.5">
          {s.technologies.map((t) => <Pill key={t}>{t}</Pill>)}
        </div>
      </Section>

      {/* Metrics */}
      <Section className="py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {s.metrics.map((m) => (
            <div key={m.label} className="bg-card p-6">
              <div className="text-2xl md:text-3xl font-semibold tracking-tight">{m.value}</div>
              <div className="mt-1.5 text-xs text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Body */}
      <Section className="py-8">
        <div className="max-w-4xl mx-auto">
          <Block title="Overview">{s.overview}</Block>
          <Block title="Problem">{s.problem}</Block>
          <Block title="Discovery">
            <ul className="space-y-2">
              {s.discovery.map((d) => (
                <li key={d} className="flex gap-3"><span className="mt-2 size-1 rounded-full bg-primary shrink-0" />{d}</li>
              ))}
            </ul>
          </Block>
          <Block title="Constraints">
            <ul className="space-y-2">
              {s.constraints.map((d) => (
                <li key={d} className="flex gap-3"><span className="mt-2 size-1 rounded-full bg-primary shrink-0" />{d}</li>
              ))}
            </ul>
          </Block>
          <Block title="Product strategy">
            <ul className="space-y-2">
              {s.strategy.map((d) => (
                <li key={d} className="flex gap-3"><span className="mt-2 size-1 rounded-full bg-primary shrink-0" />{d}</li>
              ))}
            </ul>
          </Block>
          <Block title="Solution">
            <div className="grid sm:grid-cols-2 gap-4">
              {s.solution.map((d, i) => (
                <Card key={d} className="p-5">
                  <div className="font-display text-2xl italic text-primary/70">0{i + 1}</div>
                  <p className="mt-2 text-sm text-foreground/90">{d}</p>
                </Card>
              ))}
            </div>
          </Block>
          <Block title="Engineering collaboration">{s.engineering}</Block>
          <Block title="Metrics">
            <div className="grid grid-cols-2 gap-3">
              {s.metrics.map((m) => (
                <Card key={m.label} className="p-5">
                  <div className="text-2xl font-semibold tracking-tight">{m.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{m.label}</div>
                </Card>
              ))}
            </div>
          </Block>
          <Block title="Lessons learned">
            <ul className="space-y-2">
              {s.lessons.map((d) => (
                <li key={d} className="flex gap-3"><span className="mt-2 size-1 rounded-full bg-primary shrink-0" />{d}</li>
              ))}
            </ul>
          </Block>
          <Block title="Reflection">
            <p className="font-display text-2xl md:text-3xl italic leading-relaxed text-foreground/90">"{s.reflection}"</p>
          </Block>
        </div>
      </Section>

      <Section className="pt-4">
        <Link
          to="/case-studies/$slug"
          params={{ slug: next.slug }}
          className="block rounded-3xl border border-border bg-card p-8 md:p-10 hover:border-primary/30 transition-colors"
        >
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Next case study</div>
          <div className="mt-3 flex items-center justify-between gap-6">
            <div>
              <div className="text-2xl md:text-3xl font-semibold tracking-tight">{next.title}</div>
              <p className="mt-2 text-muted-foreground max-w-xl text-sm">{next.summary}</p>
            </div>
            <ArrowRight className="size-6 text-primary shrink-0" />
          </div>
        </Link>
      </Section>
    </>
  );
}
