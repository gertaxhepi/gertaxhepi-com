import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gerta Xhepi — Product Manager" },
      { name: "description", content: "Product Manager building thoughtful digital products across B2B, B2C, SaaS, AI and marketplaces." },
      { property: "og:title", content: "Gerta Xhepi — Product Manager" },
      { property: "og:description", content: "Product Manager building thoughtful digital products across B2B, B2C, SaaS, AI and marketplaces." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const selectedWork = [
  {
    slug: "salary-transparency",
    title: "Salary Transparency & Structured Job Data",
    description:
      "Improving salary transparency by building better structured job data. Salary ranges shown to job seekers depended on the quality of employer-provided job data. My work focused on improving taxonomy, structured attributes and data quality so salary estimates became more reliable.",
    role: "Product Manager",
    domain: "Marketplace · Data Products",
    outcome: "Estimation error −28% · Salary coverage 94%",
  },
  {
    slug: "electronic-signature",
    title: "Electronic Signature MVP",
    description:
      "Launching an end-to-end e-signature experience that simplified hiring workflows for HR teams.",
    role: "Product Manager",
    domain: "HR SaaS",
    outcome: "MVP shipped in 7 weeks · 200+ companies adopted",
  },
  {
    slug: "peakprofile",
    title: "PeakProfile",
    description:
      "Building an AI-powered product that helps mountaineers make better decisions through structured experience data.",
    role: "Founder",
    domain: "AI Product",
    outcome: "Closed alpha · 4.6/5 usefulness rating",
  },
  {
    slug: "product-thinking",
    title: "Product Discovery & Decision Making",
    description:
      "My approach to understanding complex product problems through customer discovery, structured thinking and evidence-based decision making.",
    role: "Product Management",
    domain: "",
    outcome: "How I approach product work",
  },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container-page pt-24 md:pt-40 pb-24 md:pb-40">
        <Reveal>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10 flex items-center gap-3"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-50" />
              <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
            </span>
            Available for PM roles
          </div>

          <h1
            data-reveal-item
            className="text-[44px] sm:text-6xl md:text-7xl lg:text-[112px] font-bold tracking-[-0.04em] leading-[0.95] text-balance"
          >
            Gerta Xhepi
          </h1>

          <p
            data-reveal-item
            className="mt-10 text-2xl md:text-3xl lg:text-[34px] font-medium tracking-tight text-foreground leading-[1.2] max-w-4xl text-balance"
          >
            Product Manager building thoughtful digital products across B2B, B2C, SaaS, AI and marketplaces.
          </p>

          <p
            data-reveal-item
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            I work on complex product problems where customer needs, data and technology meet — from marketplace systems and workflow automation to AI-powered decision support.
          </p>

          <div data-reveal-item className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4">
            <Link
              to="/case-studies"
              className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About Me
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* SELECTED WORK */}
      <Section spacing="tight">
        <Reveal>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10"
          >
            Selected Work
          </div>
          <h2
            data-reveal-item
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02] max-w-3xl text-balance"
          >
            A closer look at recent product work.
          </h2>
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
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                  {c.title}
                </h3>
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

                {c.slug === "product-thinking" ? (
                  <Link
                    to="/product-thinking"
                    className="group mt-10 inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
                  >
                    Read case study
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: c.slug }}
                    className="group mt-10 inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
                  >
                    Read case study
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                )}
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

        <Reveal className="mt-16">
          <Link
            data-reveal-item
            to="/case-studies"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            See all work
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </Reveal>
      </Section>
    </>
  );
}
