import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Download, Linkedin, Mail, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
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

type CareerStage = {
  type: "stage";
  yearRange: string;
  role: string;
  org: string;
  description: string;
  highlight?: boolean;
};

type TransitionMarker = {
  type: "transition";
  label: string;
};

const careerTimeline: (CareerStage | TransitionMarker)[] = [
  {
    type: "stage",
    yearRange: "2025 — NOW",
    role: "Founder / Product Builder",
    org: "PeakProfile",
    description:
      "Building an AI-native decision-support product for mountaineers and guides.",
  },
  {
    type: "stage",
    yearRange: "2024 — 2025",
    role: "Product Manager",
    org: "jacando AG",
    description: "Led enterprise workflow products from discovery through launch.",
  },
  {
    type: "stage",
    yearRange: "2021 — 2024",
    role: "Product Manager",
    org: "XING / onlyfy · New Work SE",
    description:
      "Owned products across marketplaces, structured data, salary transparency, and ML-powered experiences.",
    highlight: true,
  },
  {
    type: "transition",
    label: "Internal transition to Product Management",
  },
  {
    type: "stage",
    yearRange: "2017 — 2021",
    role: "Software Engineer",
    org: "XING · New Work SE",
    description:
      "Built platform and frontend products, including the design system used by more than 150 engineers.",
  },
  {
    type: "stage",
    yearRange: "2013 — 2017",
    role: "Software Engineering & Early Product Building",
    org: "",
    description:
      "Worked across established companies and early-stage products, including Microsoft and my own consumer product.",
  },
];

function CareerTimeline() {
  return (
    <>
      {/* Desktop: year-led three-column timeline */}
      <div className="hidden md:block">
        {careerTimeline.map((item) => {
          const key = item.type === "transition" ? item.label : item.yearRange;

          if (item.type === "transition") {
            return (
              <div
                key={key}
                data-reveal-item
                className="flex gap-12 py-3"
              >
                <div className="w-[300px] shrink-0" />
                <div className="w-[80px] shrink-0 flex justify-center relative">
                  <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-border" />
                  <div className="size-3 rounded-full bg-primary ring-4 ring-background" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="inline-flex items-center text-[11px] font-mono uppercase tracking-[0.18em] text-primary bg-secondary px-3 py-1.5 rounded-full">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          }

          return (
            <div
              key={key}
              data-reveal-item
              className="flex gap-12 py-10 md:py-12 border-t border-border first:border-t-0"
            >
              <div className="w-[300px] shrink-0 text-5xl lg:text-[52px] xl:text-[56px] font-bold tracking-tight text-foreground leading-none whitespace-nowrap">
                {item.yearRange}
              </div>
              <div className="w-[80px] shrink-0 flex justify-center relative pt-3">
                <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-border" />
                <div
                  className={cn(
                    "rounded-full border-2 border-background bg-foreground transition-all",
                    item.highlight ? "size-4" : "size-2.5"
                  )}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl lg:text-[28px] font-semibold tracking-tight text-foreground">
                  {item.role}
                </h3>
                {item.org && (
                  <div className="mt-1 text-lg text-muted-foreground">
                    {item.org}
                  </div>
                )}
                <p className="mt-4 text-lg text-foreground/80 leading-relaxed max-w-2xl">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: stacked timeline with line on the left edge */}
      <div className="md:hidden relative">
        <div className="absolute top-0 bottom-0 left-[15px] w-px bg-border" />

        {careerTimeline.map((item) => {
          const key = item.type === "transition" ? item.label : item.yearRange;

          if (item.type === "transition") {
            return (
              <div
                key={key}
                data-reveal-item
                className="relative py-5 pl-10"
              >
                <div className="absolute left-[15px] top-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-primary ring-4 ring-background" />
                <span className="inline-flex items-center text-[11px] font-mono uppercase tracking-[0.18em] text-primary bg-secondary px-3 py-1.5 rounded-full">
                  {item.label}
                </span>
              </div>
            );
          }

          return (
            <div
              key={key}
              data-reveal-item
              className="relative py-8 border-t border-border first:border-t-0"
            >
              <div className="text-4xl font-bold tracking-tight text-foreground leading-none mb-5">
                {item.yearRange}
              </div>
              <div className="relative pl-10">
                <div
                  className={cn(
                    "absolute left-[15px] top-1.5 -translate-x-1/2 rounded-full border-2 border-background bg-foreground",
                    item.highlight ? "size-4" : "size-2.5"
                  )}
                />
                <h3 className="text-xl font-semibold tracking-tight text-foreground">
                  {item.role}
                </h3>
                {item.org && (
                  <div className="mt-1 text-base text-muted-foreground">
                    {item.org}
                  </div>
                )}
                <p className="mt-4 text-base text-foreground/80 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
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
