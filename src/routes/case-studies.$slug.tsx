import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/data/case-studies";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

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
    <div data-reveal-item className="grid md:grid-cols-[1fr_2.4fr] gap-6 md:gap-16 py-12 md:py-16">
      <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground md:pt-2">
        {title}
      </div>
      <div className="text-[15px] md:text-base text-foreground/90 leading-relaxed max-w-3xl">
        {children}
      </div>
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((d) => (
        <li key={d} className="grid grid-cols-[auto_1fr] gap-4">
          <span className="text-muted-foreground font-mono text-xs pt-1.5">—</span>
          <span>{d}</span>
        </li>
      ))}
    </ul>
  );
}

function CaseStudyPage() {
  const { study } = Route.useLoaderData() as { study: CaseStudy };
  const s = study;
  const idx = caseStudies.findIndex((c) => c.slug === s.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <Section className="pt-12 md:pt-20" spacing="tight">
        <Reveal>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground"
          >
            {s.context}
          </div>
          </div>
          <h1
            data-reveal-item
            className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-balance leading-[1.02] max-w-4xl"
          >
            {s.title}
          </h1>
          <p
            data-reveal-item
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            {s.summary}
          </p>
          <div
            data-reveal-item
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground"
          >
            {s.technologies.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Metrics — editorial strip */}
      <Section spacing="tight">
        <Reveal>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10"
          >
            At a glance
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
            {s.metrics.map((m) => (
              <div data-reveal-item key={m.label}>
                <div className="text-3xl md:text-4xl font-semibold tracking-tight">{m.value}</div>
                <div className="mt-3 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <Reveal>
          <Block title="Overview">{s.overview}</Block>
          <Block title="Problem">{s.problem}</Block>
          <Block title="Discovery"><Bullets items={s.discovery} /></Block>
          <Block title="Constraints"><Bullets items={s.constraints} /></Block>
          <Block title="Product strategy"><Bullets items={s.strategy} /></Block>
          <Block title="Solution">
            <div className="space-y-8">
              {s.solution.map((d, i) => (
                <div key={d} className="grid grid-cols-[auto_1fr] gap-6">
                  <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground pt-1.5">
                    0{i + 1}
                  </span>
                  <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{d}</p>
                </div>
              ))}
            </div>
          </Block>
          <Block title="Engineering">{s.engineering}</Block>
          <Block title="Lessons learned"><Bullets items={s.lessons} /></Block>
          <Block title="Reflection">
            <p className="text-2xl md:text-3xl font-medium leading-[1.25] tracking-tight text-foreground text-balance">
              "{s.reflection}"
            </p>
          </Block>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <Link
          to="/case-studies/$slug"
          params={{ slug: next.slug }}
          className="group block py-12 md:py-16"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
            Next case study
          </div>
          <div className="mt-6 flex items-start justify-between gap-8">
            <div>
              <div className="text-3xl md:text-5xl font-semibold tracking-tight transition-opacity group-hover:opacity-60">
                {next.title}
              </div>
              <p className="mt-4 text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed">
                {next.summary}
              </p>
            </div>
            <ArrowUpRight className="size-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </Link>
      </Section>
    </>
  );
}
