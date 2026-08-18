import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Download, Linkedin, Mail, MapPin } from "lucide-react";
import resumePdf from "@/assets/gerta_xhepi-resume.pdf.asset.json";

const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/5e5a77b8-fdcf-4df7-92f9-1cada506e97a";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume | Product Manager" },
      { name: "description", content: "View and download my Product Manager resume." },
      { property: "og:title", content: "Resume | Product Manager" },
      { property: "og:description", content: "View and download my Product Manager resume." },
      { property: "og:url", content: "https://gertaproduct.com/resume" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://gertaproduct.com/resume" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://gertaproduct.com/" },
            { "@type": "ListItem", position: 2, name: "Resume", item: "https://gertaproduct.com/resume" },
          ],
        }),
      },
    ],
  }),
  component: Resume,
});

type ExperienceRole = {
  role: string;
  period: string;
  description: string;
};

type ExperienceGroup = {
  number: string;
  company: string;
  roles: ExperienceRole[];
};

const careerGroups: ExperienceGroup[] = [
  {
    number: "01",
    company: "PeakProfile",
    roles: [
      {
        role: "Founder / Product Builder",
        period: "2025 — NOW",
        description:
          "Building an AI-native decision-support product for mountaineers and guides.",
      },
    ],
  },
  {
    number: "02",
    company: "jacando AG",
    roles: [
      {
        role: "Product Manager",
        period: "2024 — 2025",
        description: "Led enterprise workflow products from discovery through launch.",
      },
    ],
  },
  {
    number: "03",
    company: "New Work SE · XING / onlyfy",
    roles: [
      {
        role: "Product Manager",
        period: "2021 — 2024",
        description:
          "Owned products across marketplaces, structured data, salary transparency, and ML-powered experiences.",
      },
      {
        role: "Software Engineer",
        period: "2017 — 2021",
        description:
          "Built platform and frontend products, including the design system used by more than 150 engineers.",
      },
    ],
  },
  {
    number: "04",
    company: "Software Engineering & Early Product Building",
    roles: [
      {
        role: "Software Engineer & Founder",
        period: "2013 — 2017",
        description:
          "Worked across established companies and early-stage products, including Microsoft and my own consumer product.",
      },
    ],
  },
];

function CareerTimeline() {
  return (
    <div className="space-y-14 md:space-y-20">
      {careerGroups.map((group) => (
        <div
          key={group.number}
          data-reveal-item
          className="grid grid-cols-1 gap-4 md:grid-cols-[88px_minmax(0,1fr)_140px] md:gap-10 lg:gap-16"
        >
          {/* Number */}
          <div className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-none text-[var(--terracotta)]/30 tabular-nums">
            {group.number}
          </div>

          {/* Content */}
          <div className="min-w-0">
            <h3 className="text-lg md:text-xl font-mono uppercase tracking-[0.14em] text-muted-foreground">
              {group.company}
            </h3>
            <div className="mt-5 md:mt-6 space-y-8 md:space-y-10">
              {group.roles.map((role) => (
                <div key={role.role + role.period}>
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4">
                    <h4 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
                      {role.role}
                    </h4>
                    <span className="text-sm md:text-base text-muted-foreground tabular-nums shrink-0 md:hidden lg:block">
                      {role.period}
                    </span>
                  </div>
                  <p className="mt-3 md:mt-4 text-base md:text-lg text-foreground/80 leading-relaxed max-w-2xl">
                    {role.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop period */}
          <div className="hidden md:flex flex-col gap-8 md:gap-10 pt-8 md:pt-9 lg:pt-10">
            {group.roles.map((role) => (
              <div key={role.period + role.role} className="min-h-0">
                <span className="text-sm lg:text-base text-muted-foreground tabular-nums leading-relaxed block">
                  {role.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

const education = [
  { yearRange: "2020 — 2022", title: "Master of Business Administration (MBA)", org: "ThePowerMBA" },
  { yearRange: "2011 — 2014", title: "Bachelor of Computer Science", org: "University POLITEHNICA of Bucharest" },
];

const certificates = [
  { year: "2024", title: "Artificial Intelligence — Product School" },
  { year: "2024", title: "Product Analytics — Product School" },
  { year: "2024", title: "Product Strategy — Product School" },
  { year: "2024", title: "Product Launches — Product School" },
  { year: "2023", title: "Product Roadmapping — Product School" },
  { year: "2021", title: "Google Project Management Certificate — Google" },
];

const focusAreas = [
  "B2C Products",
  "B2B SaaS",
  "Product Discovery",
  "AI/ML Products",
  "Workflow Automation",
  "Structured Data",
  "Product Analytics",
];

function MetaLink({ href, icon: Icon, children, external }: { href: string; icon: React.ComponentType<{ className?: string }>; children: React.ReactNode; external?: boolean }) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
    >
      <Icon className="size-3.5" />
      <span>{children}</span>
    </a>
  );
}

function Resume() {
  return (
    <>
      <Section className="pt-10 md:pt-12 pb-3 md:pb-4" spacing="none">
        <Reveal>
          <div data-reveal-item className="mb-4">
            <Breadcrumb items={[{ label: "Home", to: "/" }, { label: "Resume" }]} />
          </div>
          <h1
            data-reveal-item
            className="text-5xl md:text-7xl font-semibold tracking-tight"
          >
            Gerta Xhepi
          </h1>
          <div
            data-reveal-item
            className="mt-4 flex flex-wrap gap-x-8 gap-y-3"
          >
            <MetaLink href="mailto:xhepigerta@gmail.com" icon={Mail}>xhepigerta@gmail.com</MetaLink>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-3.5" /> Germany
            </span>
            <MetaLink href="https://www.linkedin.com/in/gerta-xhepi-94853289/" icon={Linkedin} external>LinkedIn</MetaLink>
          </div>

          <div data-reveal-item className="mt-4">
            <a
              href={resumePdf.url}
              download="Gerta_Xhepi_Resume.pdf"
              className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
            >
              <Download className="size-4" /> Download Resume
            </a>
          </div>
        </Reveal>
      </Section>

      <Section className="py-3 md:py-4" spacing="none">
        <Reveal className="grid md:grid-cols-[1fr_2.4fr] gap-8 md:gap-16">
          <div data-reveal-item className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            Summary
          </div>
          <div data-reveal-item className="max-w-4xl">
            <p className="text-base md:text-lg font-medium text-foreground/90 leading-relaxed">
              Over the past decade, I’ve moved from building software to shaping products. I’ve worked across B2C products, B2B SaaS, marketplaces, workflow automation, structured data, and AI.
            </p>
            <div className="mt-6 md:mt-8">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-3">
                Focus Areas
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                {focusAreas.map((area, i) => (
                  <span key={area} className="inline-flex items-center text-foreground/80">
                    <span className="border border-border/70 rounded-full px-3 py-1">{area}</span>
                    {i < focusAreas.length - 1 && (
                      <span className="text-muted-foreground/40 mx-2 hidden sm:inline">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="py-3 md:py-4" spacing="none">
        <Reveal className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-16">
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground md:sticky md:top-28 md:self-start"
          >
            Career Path
          </div>
          <div data-reveal-item className="min-w-0">
            <CareerTimeline />
          </div>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <Reveal className="grid md:grid-cols-[1fr_2.4fr] gap-8 md:gap-16">
          <div data-reveal-item className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            Education
          </div>
          <div className="space-y-8">
            {education.map((e) => (
              <div data-reveal-item key={e.title} className="grid md:grid-cols-[180px_1fr] gap-3 md:gap-8">
                <div className="text-2xl md:text-3xl font-bold tracking-tight text-foreground leading-none">
                  {e.yearRange}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold tracking-tight">{e.title}</h3>
                  <div className="text-sm text-muted-foreground mt-0.5">{e.org}</div>
                </div>
              </div>
            ))}
            <div data-reveal-item className="pt-6 border-t border-border">
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-5">
                Certifications
              </div>
              <ul className="space-y-3 text-[15px] md:text-base text-foreground/90">
                {certificates.map((c) => (
                  <li key={c.title} className="grid grid-cols-[64px_1fr] md:grid-cols-[80px_1fr] gap-4 md:gap-6">
                    <span className="text-sm text-muted-foreground tabular-nums">{c.year}</span>
                    <span>{c.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
