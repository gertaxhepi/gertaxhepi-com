import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { caseStudies } from "@/data/case-studies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gerta Xhepi — Product Manager" },
      { name: "description", content: "Product Manager building AI, platform and B2B SaaS products with structured thinking and close engineering collaboration." },
      { property: "og:title", content: "Gerta Xhepi — Product Manager" },
      { property: "og:description", content: "Building AI, platform and B2B SaaS products with structured thinking." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const profile = [
  { label: "Experience", value: "5+ years building digital products" },
  { label: "Domains", value: "B2B \u00b7 B2C \u00b7 SaaS \u00b7 AI \u00b7 Marketplaces" },
  { label: "Background", value: "Software Engineering \u2192 Product Management" },
  { label: "Current Focus", value: "AI Products \u00b7 Platform Products \u00b7 Decision Support Systems" },
];

const whatIBuild = [
  { n: "01", title: "AI Products", desc: "Designing practical AI experiences that solve real customer problems." },
  { n: "02", title: "Platform Products", desc: "Building internal capabilities that help engineering teams move faster." },
  { n: "03", title: "Marketplace Systems", desc: "Improving trust, data quality and discoverability across complex marketplaces." },
  { n: "04", title: "Workflow Automation", desc: "Simplifying operational processes with intuitive product experiences." },
];

const principles = [
  { n: "01", title: "Start with the problem", desc: "Great products begin with understanding users before discussing solutions." },
  { n: "02", title: "Think in systems", desc: "Products exist within larger ecosystems of people, technology and business constraints." },
  { n: "03", title: "Use data with context", desc: "Analytics explain what happened. Customer conversations explain why." },
  { n: "04", title: "Ship, learn and improve", desc: "Validate assumptions quickly and continuously iterate based on outcomes." },
];

const timeline = [
  { role: "Software Engineer", org: "Early career" },
  { role: "Co-Founder", org: "Builtin" },
  { role: "Product Manager", org: "New Work SE / XING" },
  { role: "Product Manager", org: "jacando" },
  { role: "Founder & Product Builder", org: "PeakProfile" },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="container-page pt-24 md:pt-40 pb-20 md:pb-32">
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
            className="text-[44px] sm:text-6xl md:text-7xl lg:text-[96px] font-bold tracking-[-0.04em] leading-[0.98] text-balance max-w-5xl"
          >
            Product Manager building products at the intersection of AI, platform and B2B.
          </h1>

          <p
            data-reveal-item
            className="mt-12 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            I turn complex systems into products that help people make better decisions
            through customer discovery, structured thinking and close collaboration with
            engineering teams.
          </p>

          <div data-reveal-item className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4">
            <Link
              to="/case-studies"
              className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
            >
              View my work
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Get in touch
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* PROFILE */}
      <Section spacing="tight">
        <Reveal>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-12"
          >
            Profile
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {profile.map((item) => (
              <div data-reveal-item key={item.label}>
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-4">
                  {item.label}
                </div>
                <div className="text-base md:text-[17px] font-medium text-foreground leading-snug text-balance">
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* WHAT I BUILD */}
      <Section>
        <SectionHeading
          eyebrow="Focus"
          title="Products at the intersection of AI, platform and B2B."
          description="A focused practice shaped by years of working on data-intensive systems and AI-assisted experiences."
        />
        <div className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-16">
          {whatIBuild.map(({ n, title, desc }) => (
            <div data-reveal-item key={title} className="grid grid-cols-[auto_1fr] gap-8">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground pt-1.5">
                {n}
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 text-[15px] md:text-base text-muted-foreground leading-relaxed max-w-md">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FEATURED CASE STUDIES */}
      <Section>
        <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured case studies."
            description="A closer look at how I approach discovery, strategy and delivery in real teams."
          />
          <Link
            to="/case-studies"
            className="group text-sm font-medium inline-flex items-center gap-2 border-b border-foreground pb-1 transition-opacity hover:opacity-60"
          >
            All case studies
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <Reveal className="divide-y divide-border">
          {caseStudies.map((c, i) => (
            <Link
              key={c.slug}
              to="/case-studies/$slug"
              params={{ slug: c.slug }}
              data-reveal-item
              className="group grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-12 py-10 md:py-14 transition-opacity hover:opacity-60"
            >
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground md:pt-2">
                0{i + 1}
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  {c.context}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{c.title}</h3>
                <p className="mt-4 text-[15px] md:text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {c.summary}
                </p>
              </div>
              <div className="md:pt-2">
                <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </Link>
          ))}
        </Reveal>
      </Section>

      {/* PRINCIPLES */}
      <Section>
        <SectionHeading
          eyebrow="Product principles"
          title="How I think."
          description="A small set of beliefs that guide most of my decisions."
        />
        <div className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-16">
          {principles.map((p) => (
            <div data-reveal-item key={p.n} className="grid grid-cols-[auto_1fr] gap-8">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground pt-1.5">
                {p.n}
              </div>
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-3 text-[15px] md:text-base text-muted-foreground leading-relaxed max-w-md">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TIMELINE */}
      <Section>
        <SectionHeading eyebrow="Path so far" title="A career across building and shipping." />
        <Reveal className="mt-20 max-w-3xl divide-y divide-border">
          {timeline.map((t, i) => (
            <div
              key={t.role + i}
              data-reveal-item
              className="grid grid-cols-[auto_1fr] gap-8 py-6"
            >
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground pt-1">
                0{i + 1}
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <div className="text-lg font-medium">{t.role}</div>
                <div className="text-sm text-muted-foreground">{t.org}</div>
              </div>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* CTA */}
      <Section spacing="loose">
        <Reveal className="max-w-4xl">
          <div data-reveal-item className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10">
            Get in touch
          </div>
          <h2
            data-reveal-item
            className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] text-balance"
          >
            Let's build products that matter.
          </h2>
          <p
            data-reveal-item
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Open to PM roles in B2B, B2C and SaaS, and to thoughtful conversations with founders and leaders.
          </p>
          <div data-reveal-item className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
            >
              Get in touch
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              More about me
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
