import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { scrollToSection } from "@/components/Layout";

import profileAsset from "@/assets/profile.png.asset.json";

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
    outcome: "20 early users · 30+ discovery interviews · MVP in development",
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

const profile = [
  { label: "Experience", value: "5+ years building digital products" },
  { label: "Domains", value: "B2B · B2C · SaaS · AI · Marketplaces" },
  { label: "Background", value: "Software Engineering → Product Management" },
  { label: "Current Focus", value: "AI Products · Platform Products · Decision Support Systems" },
];

const whatIWorkOn = [
  { n: "01", title: "AI Products", desc: "Designing practical AI experiences grounded in evaluation and real customer problems." },
  { n: "02", title: "Platform Products", desc: "Building internal capabilities that help engineering teams move faster with less friction." },
  { n: "03", title: "Marketplace Systems", desc: "Improving trust, data quality and discoverability across complex two-sided marketplaces." },
  { n: "04", title: "Workflow Automation", desc: "Simplifying operational processes with focused, well-scoped product experiences." },
];

type Channel = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  internal?: boolean;
};

const channels: Channel[] = [
  { label: "Email", value: "xhepigerta@gmail.com", href: "mailto:xhepigerta@gmail.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gerta-xhepi",
    href: "https://www.linkedin.com/in/gerta-xhepi-94853289/",
    external: true,
  },
  { label: "Resume", value: "View resume", href: "/resume", internal: true },
  { label: "Location", value: "Germany" },
];

function Home() {
  // On mount, if URL has a hash, scroll to it smoothly (covers cross-route nav like /about → /#work).
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace("#", "");
    if (!hash) return;
    const el = document.getElementById(hash);
    if (el) {
      requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth", block: "start" }));
    }
  }, []);

  return (
    <>
      {/* HERO */}
      <section id="home" className="container-page pt-24 md:pt-40 pb-24 md:pb-40">
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
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("work");
              }}
              className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
            >
              View My Work
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              About Me
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

          </div>
        </Reveal>
      </section>

      {/* SELECTED WORK */}
      <Section id="work" spacing="tight">
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
                {c.slug === "product-thinking" ? (
                  <Link
                    to="/product-thinking"
                    aria-label={`Read case study: ${c.title}`}
                    className="group inline-flex transition-opacity hover:opacity-60"
                  >
                    <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                ) : (
                  <Link
                    to="/case-studies/$slug"
                    params={{ slug: c.slug }}
                    aria-label={`Read case study: ${c.title}`}
                    className="group inline-flex transition-opacity hover:opacity-60"
                  >
                    <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </Reveal>

      </Section>

      {/* ABOUT */}
      <Section id="about" spacing="tight">
        <Reveal>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10"
          >
            About Me
          </div>
          <h2
            data-reveal-item
            className="text-4xl md:text-6xl font-semibold tracking-tight text-balance leading-[1.02] max-w-4xl"
          >
            Building products at the intersection of technology, business and people.
          </h2>
        </Reveal>

        <div className="mt-20 grid md:grid-cols-[1.6fr_1fr] gap-16 md:gap-24">
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
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </Section>

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

      <Section>
        <SectionHeading eyebrow="What I work on" title="Where I do my best product work." />
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

      {/* CONTACT */}
      <Section id="contact" spacing="tight">
        <Reveal>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10"
          >
            Contact
          </div>
          <h2
            data-reveal-item
            className="text-4xl md:text-6xl lg:text-[72px] font-semibold tracking-tight leading-[1.02] text-balance max-w-4xl"
          >
            Let's build thoughtful products.
          </h2>
          <p
            data-reveal-item
            className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Open to PM roles and conversations with founders and product leaders. The best ways to reach me are below.
          </p>
        </Reveal>

        <Reveal className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-14 max-w-3xl">
          {channels.map((c) => (
            <div data-reveal-item key={c.label}>
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-4">
                {c.label}
              </div>
              {c.href ? (
                c.internal ? (
                  <Link
                    to={c.href}
                    className="group inline-flex items-center gap-2 text-lg md:text-xl font-medium text-foreground transition-opacity hover:opacity-60"
                  >
                    {c.value}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ) : (
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noreferrer" : undefined}
                    className="group inline-flex items-center gap-2 text-lg md:text-xl font-medium text-foreground transition-opacity hover:opacity-60"
                  >
                    {c.value}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )
              ) : (
                <div className="text-lg md:text-xl font-medium">{c.value}</div>
              )}
            </div>
          ))}
        </Reveal>
      </Section>
    </>
  );
}
