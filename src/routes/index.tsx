import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Download, Sparkles, Layers, Network, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, Pill, Section, SectionHeading } from "@/components/Primitives";
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

const impact = [
  { value: "5+", label: "Years building SaaS products" },
  { value: "€50M+", label: "Marketplace revenue protected" },
  { value: "200+", label: "Companies using products I launched" },
  { value: "Engineering", label: "Background + MBA" },
];

const whatIBuild = [
  { icon: Sparkles, title: "AI Products", desc: "Designing practical AI experiences that solve real customer problems." },
  { icon: Layers, title: "Platform Products", desc: "Building internal capabilities that help engineering teams move faster." },
  { icon: Network, title: "Marketplace Systems", desc: "Improving trust, data quality and discoverability across complex marketplaces." },
  { icon: Workflow, title: "Workflow Automation", desc: "Simplifying operational processes with intuitive product experiences." },
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
      <Section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12 md:gap-16 items-center">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-subtle px-3 py-1 text-xs text-muted-foreground mb-6">
              <span className="size-1.5 rounded-full bg-primary" />
              Available for senior PM roles
            </div>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.02] text-balance">
              Gerta <span className="font-display italic font-normal text-primary">Xhepi</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl text-balance">
              Product Manager building AI, Platform and B2B SaaS products.
            </p>
            <p className="mt-5 text-base text-muted-foreground max-w-xl">
              I enjoy turning complex systems into products that help people make better decisions through customer discovery, structured thinking and close collaboration with engineering teams.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-6">
                <Link to="/case-studies">
                  View Case Studies <ArrowRight className="ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                <Link to="/resume">
                  <Download className="mr-1" /> Download Resume
                </Link>
              </Button>
            </div>
          </div>
          <div className="fade-up">
            <PortraitCard />
          </div>
        </div>
      </Section>

      {/* IMPACT */}
      <Section className="py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-border bg-border">
          {impact.map((m) => (
            <div key={m.label} className="bg-card p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-semibold tracking-tight">{m.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{m.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* WHAT I BUILD */}
      <Section>
        <SectionHeading
          eyebrow="What I build"
          title="Products at the intersection of AI, platform and B2B."
          description="A focused practice shaped by years of working on data-intensive systems and AI-assisted experiences."
        />
        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {whatIBuild.map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Icon className="size-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* FEATURED CASE STUDIES */}
      <Section>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <SectionHeading
            eyebrow="Selected work"
            title="Featured case studies"
            description="A closer look at how I approach discovery, strategy and delivery in real teams."
          />
          <Link to="/case-studies" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
            All case studies <ArrowUpRight className="size-4" />
          </Link>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-5">
          {caseStudies.map((c) => (
            <Card key={c.slug} className="group flex flex-col">
              <div className="text-xs text-muted-foreground">{c.context}</div>
              <h3 className="mt-2 text-xl font-medium">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.summary}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.technologies.slice(0, 4).map((t) => (
                  <Pill key={t}>{t}</Pill>
                ))}
              </div>
              <div className="mt-5 border-t border-border pt-4">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">Outcomes</div>
                <ul className="space-y-1.5 text-sm text-foreground/85">
                  {c.outcomes.slice(0, 2).map((o) => (
                    <li key={o} className="flex gap-2">
                      <span className="text-primary mt-1.5 size-1 rounded-full bg-primary shrink-0" />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-2">
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

      {/* PRINCIPLES */}
      <Section>
        <SectionHeading
          eyebrow="Product principles"
          title="How I think."
          description="A small set of beliefs that guide most of my decisions."
        />
        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          {principles.map((p) => (
            <Card key={p.n}>
              <div className="font-display text-3xl text-primary/70 italic">{p.n}</div>
              <h3 className="mt-3 text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* TIMELINE */}
      <Section>
        <SectionHeading eyebrow="Path so far" title="A career across building and shipping." />
        <div className="mt-12 mx-auto max-w-2xl">
          <ol className="relative border-l border-border ml-2">
            {timeline.map((t, i) => (
              <li key={t.role + i} className="ml-6 pb-8 last:pb-0">
                <span className="absolute -left-[7px] grid size-3.5 place-items-center rounded-full border border-primary/30 bg-background">
                  <span className="size-1.5 rounded-full bg-primary" />
                </span>
                <div className="text-sm text-muted-foreground">{t.org}</div>
                <div className="text-base font-medium">{t.role}</div>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* CTA */}
      <Section className="pb-28">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-accent/40 via-card to-card p-10 md:p-16 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-balance">
            Let's build products that <span className="font-display italic text-primary">matter</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Open to senior PM roles in AI, platform and B2B SaaS, and to thoughtful conversations with founders and leaders.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Button asChild size="lg" className="rounded-full px-6">
              <Link to="/contact">Get in touch <ArrowRight className="ml-1" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-6">
              <Link to="/about">More about me</Link>
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}

function PortraitCard() {
  return (
    <div className="relative aspect-[4/5] w-full max-w-sm mx-auto">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent via-card to-subtle border border-border" />
      <svg viewBox="0 0 200 250" className="absolute inset-0 w-full h-full p-8" aria-hidden>
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="oklch(0.52 0.21 295)" stopOpacity="0.18" />
            <stop offset="1" stopColor="oklch(0.52 0.21 295)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="95" r="38" fill="url(#g1)" stroke="oklch(0.52 0.21 295 / 0.4)" strokeWidth="0.8" />
        <path d="M40 200 C40 160, 70 145, 100 145 C130 145, 160 160, 160 200 L160 230 L40 230 Z" fill="url(#g1)" stroke="oklch(0.52 0.21 295 / 0.4)" strokeWidth="0.8" />
        <g stroke="oklch(0.52 0.21 295 / 0.25)" strokeWidth="0.5" fill="none">
          <circle cx="100" cy="125" r="70" />
          <circle cx="100" cy="125" r="95" />
        </g>
      </svg>
      <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-card/95 backdrop-blur border border-border px-4 py-3">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Currently</div>
        <div className="text-sm font-medium">Building PeakProfile · Berlin</div>
      </div>
    </div>
  );
}
