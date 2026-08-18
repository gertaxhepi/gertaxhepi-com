import { createFileRoute, notFound } from "@tanstack/react-router";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AllProjectsCTA } from "@/components/AllProjectsCTA";
import { getCaseStudy, type CaseStudy } from "@/data/case-studies";

export const Route = createFileRoute("/case-studies/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.study;
    const title = s ? `${s.title} — Case Study` : "Case Study";
    const url = `https://gertaproduct.com/case-studies/${s?.slug ?? ""}`;
    return {
      meta: [
        { title },
        { name: "description", content: s?.summary ?? "" },
        { property: "og:title", content: title },
        { property: "og:description", content: s?.summary ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: s
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: s.title,
                description: s.summary,
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
                  { "@type": "ListItem", position: 3, name: s.title, item: url },
                ],
              }),
            },
          ]
        : [],
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

function NumberedSection({
  number,
  title,
  children,
  soft = false,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
  soft?: boolean;
}) {
  return (
    <section
      data-reveal-item
      className={
        soft
          ? "rounded-[28px] bg-[var(--terracotta)]/[0.06] px-6 py-12 md:px-14 md:py-16"
          : "py-12 md:py-20"
      }
    >
      <div className="grid gap-5 md:grid-cols-[minmax(0,120px)_minmax(0,1fr)] md:gap-16">
        <div className="text-3xl md:text-6xl font-semibold tracking-tight leading-none text-[var(--terracotta)]/30 tabular-nums">
          {number}
        </div>
        <div className="min-w-0">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-balance">
            {title}
          </h2>
          <div className="mt-6 md:mt-8 max-w-2xl">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <>
      {items.map((p) => (
        <p key={p} className="text-base md:text-lg text-foreground/90 leading-relaxed">
          {p}
        </p>
      ))}
    </>
  );
}

function Diagram({
  d,
}: {
  d: { src: string; alt: string; label: string; caption: string };
}) {
  return (
    <figure className="pt-2">
      <figcaption className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-4">
        {d.label}
      </figcaption>
      <img src={d.src} alt={d.alt} loading="lazy" className="block w-full h-auto rounded-md" />
      <figcaption className="mt-4 text-sm text-muted-foreground leading-relaxed">
        {d.caption}
      </figcaption>
    </figure>
  );
}

function CaseStudyPage() {
  const { study: s } = Route.useLoaderData() as { study: CaseStudy };

  /** Long-form XING-style studies keep the six-part structure. */
  const isLongForm = s.slug === "salary-transparency" || s.slug === "notifications";

  const challenge = (
    <div className="space-y-6">
      <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{s.challengeLead}</p>
      <Paragraphs items={s.challengeBody} />
      <div className="pt-2">
        <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-4">
          Constraints
        </div>
        <Bullets items={s.constraints} />
      </div>
    </div>
  );

  const discovery = (
    <div className="space-y-6">
      <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{s.discoveryLead}</p>
      <Bullets items={s.discovery} />
      {s.discoveryDiagram && <Diagram d={s.discoveryDiagram} />}
    </div>
  );

  const decisions = (
    <div className="space-y-10">
      {s.keyDecisions.map((d) => (
        <div key={d.title}>
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight mb-3 text-balance">
            {d.title}
          </h3>
          <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{d.description}</p>
        </div>
      ))}
    </div>
  );

  const solution = (
    <div className="space-y-10">
      {s.solutionIntro && (
        <div className="space-y-5">
          <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-balance leading-[1.2]">
            {s.solutionIntro.title}
          </h3>
          <Paragraphs items={s.solutionIntro.paragraphs} />
        </div>
      )}
      {s.solutionDiagram && <Diagram d={s.solutionDiagram} />}
      <div className="space-y-8">
        {s.solutionItems.map((item, i) => (
          <div key={item.title} className="grid grid-cols-[auto_1fr] gap-5 md:gap-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-[var(--terracotta)]/70 pt-1.5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-2">{item.title}</h3>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const results = (
    <div className="space-y-10">
      <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{s.resultsLead}</p>
      <div className="grid grid-cols-2 gap-8 md:gap-12 md:grid-cols-3">
        {s.metrics.map((m) => (
          <div key={m.label}>
            <div className="text-3xl md:text-4xl font-semibold tracking-tight tabular-nums">
              {m.value}
            </div>
            <div className="mt-3 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const sections: { title: string; content: React.ReactNode; soft?: boolean }[] = isLongForm
    ? [
        { title: "The challenge", content: challenge },
        { title: "Discovery", content: discovery },
        { title: "Key decisions", content: decisions },
        { title: "Solution", content: solution },
        { title: "Results", content: results, soft: true },
      ]
    : [
        {
          title: "Discovery",
          content: (
            <div className="space-y-12">
              {challenge}
              {discovery}
            </div>
          ),
        },
        {
          title: "Actions",
          content: (
            <div className="space-y-12">
              {decisions}
              {solution}
            </div>
          ),
        },
        { title: "Results", content: results, soft: true },
      ];

  if (s.learnings && s.learnings.length > 0) {
    sections.push({
      title: "What I learned",
      content: (
        <div className="space-y-10">
          {s.learnings.map((learning) => (
            <div key={learning.title} className="border-l-2 border-[var(--terracotta)]/25 pl-6">
              <h3 className="text-lg md:text-xl font-semibold tracking-tight mb-3 text-balance">
                {learning.title}
              </h3>
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed">
                {learning.description}
              </p>
            </div>
          ))}
        </div>
      ),
    });
  }

  if (s.recommendations && s.recommendations.length > 0) {
    sections.push({
      title: "Working together",
      content: (
        <div className="space-y-12">
          {s.recommendations.map((rec) => (
            <div key={rec.name} className="border-l-2 border-[var(--terracotta)]/25 pl-6">
              <p className="text-base md:text-lg leading-[1.6] text-foreground/90">{rec.quote}</p>
              <div className="mt-6">
                <div className="text-sm font-semibold text-foreground">{rec.name}</div>
                <div className="text-sm text-muted-foreground mt-0.5">{rec.role}</div>
              </div>
            </div>
          ))}
        </div>
      ),
    });
  }

  return (
    <>
      {/* Hero */}
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
            {s.role}
          </div>
          <h1
            data-reveal-item
            className="mt-5 text-5xl md:text-7xl font-semibold tracking-tight text-balance leading-[1.02] max-w-4xl"
          >
            {s.title}
          </h1>
          <p
            data-reveal-item
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            {s.summary}
          </p>
        </Reveal>
      </Section>

      <Section className="pt-6 md:pt-12" spacing="tight">
        <Reveal>
          <div className="space-y-4 md:space-y-10">
            {sections.map((sec, i) => (
              <NumberedSection
                key={sec.title}
                number={String(i + 1).padStart(2, "0")}
                title={sec.title}
                soft={sec.soft}
              >
                {sec.content}
              </NumberedSection>
            ))}
          </div>
        </Reveal>
      </Section>

      <AllProjectsCTA />
    </>
  );
}

