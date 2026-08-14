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
    yearRange: "2013 — 2017",
    role: "Software Engineering",
    org: "",
    description:
      "Worked across established companies and early-stage products, including Microsoft and my own consumer product.",
  },
  {
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
    yearRange: "2021 — 2024",
    role: "Product Manager",
    org: "XING / onlyfy · New Work SE",
    description:
      "Transitioned internally from software engineering into product management.",
    highlight: true,
  },
  {
    yearRange: "2024 — 2025",
    role: "Product Manager",
    org: "jacando AG",
    description: "Led enterprise workflow products from discovery through launch.",
  },
  {
    yearRange: "2025 — NOW",
    role: "Founder / Product Builder",
    org: "PeakProfile",
    description:
      "Building an AI-native decision-support product for mountaineers and guides.",
  },
];

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
          <div data-reveal-item className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground md:sticky md:top-28 md:self-start">
            Experience
          </div>
          <div className="space-y-16 md:space-y-20">
            {experience.map((e) => (
              <article data-reveal-item key={e.role + e.org}>
                <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-3">
                  {e.dates}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{e.role}</h3>
                <div className="text-base text-muted-foreground mt-1">{e.org}</div>
                <ul className="mt-6 space-y-3 text-[15px] md:text-base text-foreground/85 leading-relaxed max-w-3xl">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="grid grid-cols-[auto_1fr] gap-4">
                      <span className="text-muted-foreground font-mono text-xs pt-1.5">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
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
