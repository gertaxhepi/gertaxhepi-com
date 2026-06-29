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

const profile = [
  { label: "Experience", value: "5+ years building digital products" },
  { label: "Domains", value: "B2B · B2C · SaaS · AI · Marketplaces" },
  { label: "Background", value: "Software Engineering → Product Management" },
  { label: "Today", value: "AI Products · Platform Products · Decision Support Systems" },
];

const howIThink = [
  "How I approach Product Discovery",
  "Why better data leads to better decisions",
  "What building an AI product taught me",
  "Teaching Hatha Yoga changed how I think about Product Management",
  "Books that shaped my thinking",
];

const outsideWork = [
  { number: "01", title: "Traditional Hatha Yoga Teacher", subtitle: "Founder · Hima Yoga" },
  { number: "02", title: "Outdoor Sports", subtitle: "Marathon Running · Mountaineering · Rock Climbing" },
  { number: "03", title: "Culture", subtitle: "Philosophy · Art · Music" },
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
      <section id="home" className="container-page pt-20 md:pt-36 pb-20 md:pb-28">
        <Reveal>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-8 flex items-center gap-3"
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
            className="mt-8 text-2xl md:text-3xl lg:text-[34px] font-medium tracking-tight text-foreground leading-[1.2] max-w-4xl text-balance"
          >
            Building AI, marketplace and workflow products where customer needs, technology and business meet.
          </p>

          <p
            data-reveal-item
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            I work on complex product problems where customer needs, data and technology meet — from marketplace systems and workflow automation to AI-powered decision support.
          </p>

          <div data-reveal-item className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
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
                {c.slug === "salary-transparency" && (
                  <div className="text-[11px] font-mono uppercase tracking-[0.22em] mb-3" style={{ color: '#8A5A5A' }}>
                    Featured Project
                  </div>
                )}
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

      {/* A SHORT SNAPSHOT */}
      <Section id="about" spacing="tight">
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

      {/* HOW I GOT HERE */}
      <Section spacing="tight">
        <SectionHeading eyebrow="My Story" title="How I Got Here." />
        <div className="mt-16 grid md:grid-cols-[1.6fr_1fr] gap-16 md:gap-24">
          <Reveal className="space-y-7 text-lg md:text-xl text-foreground/90 leading-relaxed">
            <p data-reveal-item>
              I began my career as a software engineer, where I learned how products are built. Even then, I was always drawn to understanding problems and finding better ways to solve them. That curiosity, alongside building products of my own, eventually led me into Product Management.
            </p>
            <p data-reveal-item>
              Since then, I've worked on products used by millions of people, including at XING, building marketplace systems, workflow tools and AI-powered features.
            </p>
            <p data-reveal-item>
              Today, I'm building{" "}
              <Link to="/case-studies/$slug" params={{ slug: "peakprofile" }} className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors">
                PeakProfile
              </Link>
              , where I'm exploring how AI and structured data can support better decision-making in high-risk environments.
            </p>
            <p data-reveal-item className="pt-4">
              I'm fascinated by products that help people make better decisions. Whether through better data, thoughtful workflows or AI, that's the thread connecting nearly everything I've built.
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

      {/* HOW I THINK */}
      <Section>
        <SectionHeading eyebrow="How I Think" title="Ideas That Shape My Work." />
        <p
          data-reveal-item
          className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          My work is shaped by a few recurring ideas. These essays are reflections on the people, experiences and questions that continue to influence how I build products.
        </p>
        <Reveal className="mt-20 max-w-3xl">
          <div data-reveal-item>
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-5">
              Essay 01 · June 2026
            </div>
            <h3 className="text-2xl md:text-3xl font-medium tracking-tight leading-snug">
              Working with AI Is Teaching Me to Understand Problems More Deeply
            </h3>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A reflection on mentorship, AI and why understanding a problem matters more than writing better prompts.
            </p>
            <Link
              to="/essays/ai-problems"
              className="group inline-flex items-center gap-2 text-sm font-medium mt-8 border-b border-foreground pb-1 transition-opacity hover:opacity-60"
            >
              Read essay
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* OUTSIDE OF WORK */}
      <Section>
        <SectionHeading eyebrow="Outside of Work" title="The person behind the product." />
        <Reveal className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 max-w-4xl">
          {outsideWork.map((item) => (
            <div
              key={item.number}
              data-reveal-item
            >
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-4">
                {item.number}
              </div>
              <div className="text-base md:text-[17px] font-medium text-foreground leading-snug text-balance">
                {item.title}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">
                {item.subtitle}
              </div>
            </div>
          ))}
        </Reveal>
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
            Let's build products people actually want to use.
          </h2>
          <p
            data-reveal-item
            className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            I'm always happy to talk about product, AI, marketplaces or interesting opportunities.
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
