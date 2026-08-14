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
    yearRange: "2013 — 2017",
    role: "Software Engineering",
    org: "",
    description:
      "Worked across established companies and early-stage products, including Microsoft and my own consumer product.",
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
    type: "transition",
    label: "ENGINEERING → PRODUCT",
  },
  {
    type: "stage",
    yearRange: "2021 — 2024",
    role: "Product Manager",
    org: "XING / onlyfy · New Work SE",
    description:
      "Transitioned internally from software engineering into product management.",
    highlight: true,
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
    yearRange: "2025 — NOW",
    role: "Founder / Product Builder",
    org: "PeakProfile",
    description:
      "Building an AI-native decision-support product for mountaineers and guides.",
  },
];

function CareerTimeline() {
  const totalRows = careerTimeline.length;

  return (
    <>
      {/* Desktop: year-led three-column timeline */}
      <div className="relative hidden md:grid md:grid-cols-[300px_80px_1fr] md:gap-x-12">
        {/* Continuous vertical line in the timeline column */}
        <div
          className="col-start-2 col-end-3 relative z-0"
          style={{ gridRow: `1 / span ${totalRows}` }}
        >
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-border" />
        </div>

        {careerTimeline.map((item, i) => {
          const key = item.type === "transition" ? item.label : item.yearRange;

          return (
            <div
              key={key}
              data-reveal-item
              className="col-span-3 relative z-10 py-10 md:py-16 border-t border-border first:border-t-0"
              style={{ gridRowStart: i + 1 }}
            >
              <div className="md:grid md:grid-cols-[220px_80px_1fr] md:gap-x-12">
                {item.type === "transition" ? (
                  <>
                    <div /> {/* year column empty */}
                    <div className="flex justify-center items-center">
                      <div className="size-3 rounded-full bg-primary ring-4 ring-background" />
                    </div>
                    <div>
                      <span className="inline-flex items-center text-[11px] font-mono uppercase tracking-[0.18em] text-primary bg-secondary px-3 py-1.5 rounded-full">
                        {item.label}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-5xl lg:text-[56px] xl:text-[64px] font-bold tracking-tight text-foreground leading-none">
                      {item.yearRange}
                    </div>
                    <div className="flex justify-center pt-3">
                      <div
                        className={cn(
                          "rounded-full border-2 border-background bg-foreground transition-all",
                          item.highlight ? "size-4" : "size-2.5"
                        )}
                      />
                    </div>
                    <div>
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
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile: stacked timeline with line on the left edge */}
      <div className="md:hidden relative">
        <div className="absolute top-0 bottom-0 left-[15px] w-px bg-border" />

        {careerTimeline.map((item, i) => {
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
              className="relative py-10 border-t border-border first:border-t-0"
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
  { title: "Master of Business Administration (MBA)", org: "ThePowerMBA" },
  { title: "Bachelor of Computer Science", org: "University Polytechnic of Bucharest" },
];

const skills = [
  "Effective Communication",
  "Collaboration",
  "Data-driven Decision Making",
  "Product Visioning",
  "User-Centric Mindset",
  "Stakeholder Management",
  "User Research",
  "Market Analysis",
  "Product Strategy",
  "Analytical Skills",
  "Leadership and Team",
];

const certificates = [
  "Artificial Intelligence — Product School",
  "Product Analytics — Product School",
  "Product Strategy — Product School",
  "Product Launches — Product School",
  "Project Manager — Google",
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
      <Section className="pt-16 md:pt-28" spacing="tight">
        <Reveal>
          <div data-reveal-item className="mb-10">
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
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
          >
            <MetaLink href="mailto:xhepigerta@gmail.com" icon={Mail}>xhepigerta@gmail.com</MetaLink>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-3.5" /> Germany
            </span>
            <MetaLink href="https://www.linkedin.com/in/gerta-xhepi-94853289/" icon={Linkedin} external>LinkedIn</MetaLink>
          </div>

          <div data-reveal-item className="mt-10">
            <a
              href={resumePdf.url}
              download="gerta_xhepi-resume.pdf"
              className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
            >
              <Download className="size-4" /> Download PDF
            </a>
          </div>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <Reveal className="grid md:grid-cols-[1fr_2.4fr] gap-8 md:gap-16">
          <div data-reveal-item className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            Summary
          </div>
          <p data-reveal-item className="text-lg md:text-xl text-foreground/90 leading-relaxed max-w-3xl">
            Product Manager with 5+ years of experience and an MBA, building data-intensive SaaS products across marketplace and workflow-driven environments. Strong focus on product discovery, OKR execution, and structured data systems that improve decision-making, compliance, and operational efficiency. Experienced in translating complex user needs and regulatory constraints into scalable product solutions. Proven ability to align engineering, data science, legal, and business stakeholders around measurable outcomes in high-complexity environments. Strong software engineering background with hands-on product ownership in product-led organizations.
          </p>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <Reveal className="grid md:grid-cols-[1fr_2.4fr] gap-8 md:gap-16">
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
          <div className="space-y-10">
            {education.map((e) => (
              <div data-reveal-item key={e.title}>
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{e.title}</h3>
                <div className="text-sm text-muted-foreground mt-1">{e.org}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <Reveal className="grid md:grid-cols-[1fr_2.4fr] gap-8 md:gap-16">
          <div data-reveal-item className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            Skills
          </div>
          <div data-reveal-item className="flex flex-wrap gap-x-8 gap-y-3 max-w-3xl text-base md:text-lg">
            {skills.map((s, i) => (
              <span key={s} className="text-foreground/90">
                {s}
                {i < skills.length - 1 && (
                  <span className="text-muted-foreground/50 ml-8 font-mono">·</span>
                )}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <Reveal className="grid md:grid-cols-[1fr_2.4fr] gap-8 md:gap-16">
          <div data-reveal-item className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            Licenses & Certifications
          </div>
          <ul className="space-y-4 text-[15px] md:text-base text-foreground/90">
            {certificates.map((c, i) => (
              <li data-reveal-item key={i} className="grid grid-cols-[auto_1fr] gap-6">
                <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground pt-1">
                  0{i + 1}
                </span>
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>
    </>
  );
}
