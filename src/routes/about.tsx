import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import profileAsset from "@/assets/profile.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me — Gerta Xhepi" },
      { name: "description", content: "Product Manager with 5+ years building digital products across B2B, B2C, SaaS, AI and marketplaces. Background in software engineering, early experience at Microsoft." },
      { property: "og:title", content: "About Me — Gerta Xhepi" },
      { property: "og:description", content: "Product Manager working at the intersection of customer needs, data, business and engineering." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const profile = [
  { label: "Experience", value: "5+ years building digital products" },
  { label: "Domains", value: "B2B \u00b7 B2C \u00b7 SaaS \u00b7 AI \u00b7 Marketplaces" },
  { label: "Background", value: "Software Engineering \u2192 Product Management" },
  { label: "Current Focus", value: "AI Products \u00b7 Platform Products \u00b7 Decision Support Systems" },
];

const whatIWorkOn = [
  { n: "01", title: "AI Products", desc: "Designing practical AI experiences grounded in evaluation and real customer problems." },
  { n: "02", title: "Platform Products", desc: "Building internal capabilities that help engineering teams move faster with less friction." },
  { n: "03", title: "Marketplace Systems", desc: "Improving trust, data quality and discoverability across complex two-sided marketplaces." },
  { n: "04", title: "Workflow Automation", desc: "Simplifying operational processes with focused, well-scoped product experiences." },
];

const timeline = [
  { role: "Software Engineer", org: "Microsoft", note: "Early career" },
  { role: "Co-Founder / Product Builder", org: "Builtin" },
  { role: "Product Manager", org: "New Work SE / XING" },
  { role: "Product Manager", org: "jacando" },
  { role: "Founder / Product Builder", org: "PeakProfile", note: "Current" },
];

function About() {
  return (
    <>
      <Section className="pt-16 md:pt-28" spacing="tight">
        <Reveal>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10"
          >
            About Me
          </div>
          <h1
            data-reveal-item
            className="text-5xl md:text-7xl font-semibold tracking-tight text-balance leading-[1.02] max-w-4xl"
          >
            Building products at the intersection of technology, business and people.
          </h1>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-16 md:gap-24">
          <Reveal className="space-y-7 text-lg md:text-xl text-foreground/90 leading-relaxed">
            <p data-reveal-item>
              I'm a Product Manager with 5+ years of experience building digital products across B2B, B2C, SaaS, AI and marketplaces. I started my career in software engineering, including early experience at Microsoft, before moving into product management.
            </p>
            <p data-reveal-item>
              I enjoy working on complex products where customer needs, data, business goals and engineering constraints intersect.
            </p>
            <p data-reveal-item>
              These days, much of my energy goes into{" "}
              <Link to="/case-studies/$slug" params={{ slug: "peakprofile" }} className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors">
                PeakProfile
              </Link>
              , my own AI product exploring trust, risk and decision-making in mountaineering — a place where I get to practise discovery, model behaviour and evaluation end-to-end.
            </p>
          </Reveal>

          <Reveal className="space-y-10">
            <div data-reveal-item>
              <img
                src={profileAsset.url}
                alt="Gerta Xhepi"
                className="w-full grayscale"
                loading="eager"
              />
            </div>
            <div data-reveal-item>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
              >
                Get in touch
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* PROFILE */}
      <Section>
        <SectionHeading eyebrow="Profile" title="A short snapshot." />
        <Reveal className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
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
        </Reveal>
      </Section>

      {/* WHAT I WORK ON */}
      <Section>
        <SectionHeading
          eyebrow="What I work on"
          title="Where I do my best product work."
        />
        <div className="mt-20 grid md:grid-cols-2 gap-x-16 gap-y-14">
          {whatIWorkOn.map(({ n, title, desc }) => (
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

      {/* CAREER TIMELINE */}
      <Section>
        <SectionHeading eyebrow="Career" title="A path across building and shipping." />
        <Reveal className="mt-16 max-w-3xl divide-y divide-border">
          {timeline.map((t, i) => (
            <div
              key={t.role + i}
              data-reveal-item
              className="grid grid-cols-[auto_1fr_auto] gap-6 md:gap-8 py-7"
            >
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground pt-1">
                0{i + 1}
              </div>
              <div>
                <div className="text-lg font-medium">{t.org}</div>
                <div className="text-sm text-muted-foreground mt-1">{t.role}</div>
              </div>
              {t.note && (
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground pt-2 text-right">
                  {t.note}
                </div>
              )}
            </div>
          ))}
        </Reveal>
      </Section>
    </>
  );
}
