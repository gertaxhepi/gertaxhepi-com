import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Gerta Xhepi" },
      { name: "description", content: "Selected product work across marketplaces, HR SaaS and AI products." },
      { property: "og:title", content: "Work — Gerta Xhepi" },
      { property: "og:description", content: "Selected product work across marketplaces, HR SaaS and AI products." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: Work,
});

const selectedWork = [
  {
    slug: "salary-transparency",
    title: "Salary Transparency & Structured Job Data",
    description:
      "Improving salary transparency through higher-quality structured job data. Salary ranges shown to job seekers depended on the quality of employer-provided job data. My work focused on improving taxonomy, structured attributes and data quality so salary estimates became more reliable.",
    role: "Product Manager",
    domain: "Marketplace · Data Products",
    outcome: "Reduced salary estimation error by 28%",
  },
  {
    slug: "electronic-signature",
    title: "Electronic Signature MVP",
    description:
      "Built and launched an MVP that digitized document signing for HR teams, reducing manual workflows and enabling faster hiring.",
    role: "Product Manager",
    domain: "HR SaaS",
    outcome: "MVP shipped in 7 weeks · 200+ companies adopted",
  },
  {
    slug: "peakprofile",
    title: "PeakProfile",
    description:
      "Building an AI-powered product that helps mountaineers make better decisions through structured experience data.",
    role: "Founder • AI Product",
    domain: "AI Product",
    outcome: "20 early users · 30+ discovery interviews · AI readiness scoring MVP",
  },
];

function Work() {
  return (
    <Section className="pt-16 md:pt-28" spacing="tight">
      <Reveal>
        <div
          data-reveal-item
          className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10"
        >
          Selected Work
        </div>
        <h1
          data-reveal-item
          className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02] max-w-3xl text-balance"
        >
          A closer look at recent product work.
        </h1>
      </Reveal>

      <Reveal className="mt-20 divide-y divide-border">
        {selectedWork.map((c, i) => (
          <div
            key={c.slug}
            data-reveal-item
            className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-16 py-14 md:py-16"
          >
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground md:pt-3">
              0{i + 1}
            </div>
            <div className="max-w-2xl">
              {c.slug === "salary-transparency" && (
                <div className="text-[11px] font-mono uppercase tracking-[0.22em] mb-3" style={{ color: '#8A5A5A' }}>
                  Featured Project
                </div>
              )}
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                {c.title}
              </h2>
              <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
                {c.description}
              </p>

              <dl className="mt-8 grid sm:grid-cols-2 gap-x-12 gap-y-6">
                <div>
                  <dt className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Role / Domain
                  </dt>
                  <dd className="text-sm md:text-[15px] font-medium">
                    {c.domain ? `${c.role} · ${c.domain}` : c.role}
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
                    Outcome
                  </dt>
                  <dd className="text-sm md:text-[15px] font-medium">{c.outcome}</dd>
                </div>
              </dl>

              <Link
                to="/case-studies/$slug"
                params={{ slug: c.slug }}
                className="group mt-10 inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
              >
                Read case study
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="hidden md:block md:pt-3">
              <Link
                to="/case-studies/$slug"
                params={{ slug: c.slug }}
                aria-label={`Read case study: ${c.title}`}
                className="group inline-flex transition-opacity hover:opacity-60"
              >
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
