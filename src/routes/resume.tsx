import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Download, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Gerta Xhepi" },
      { name: "description", content: "Resume of Gerta Xhepi: Product Manager with 5+ years of experience, MBA, and software engineering background." },
      { property: "og:title", content: "Resume — Gerta Xhepi" },
      { property: "og:description", content: "Experience, education, skills and certifications of Gerta Xhepi." },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: Resume,
});

const experience = [
  {
    role: "Founder / Product Builder",
    org: "Building PeakProfile",
    dates: "Jan 2025 — Present",
    bullets: [
      "Building early-stage product addressing trust, risk, and decision-making in high-stakes environments (mountaineering expeditions)",
      "Designed structured profile system to transform fragmented self-reported experience into standardized, comparable data models",
      "Exploring AI-driven scoring systems to assess readiness and improve matching between guides and participants",
      "Focused on improving decision quality by reducing reliance on unstructured or unreliable data inputs",
    ],
  },
  {
    role: "Product Manager",
    org: "jacando AG",
    dates: "Aug 2024 — Jan 2025",
    bullets: [
      "Led product discovery for secure e-signature workflows in enterprise HR SaaS through user interviews, process mapping, and competitor analysis",
      "Designed and shipped end-to-end e-signature product integrated into HR workflows, reducing process execution time by 20%",
      "Iterated on MVP based on customer feedback and usage insights, increasing product adoption by 20%",
      "Mapped and optimized complex multi-step HR workflows with engineering and customers, improving user satisfaction by 30%",
      "Prioritized roadmap based on user value, business impact, and technical feasibility",
    ],
  },
  {
    role: "Product Manager",
    org: "New Work SE (XING / onlyfy Marketplace)",
    dates: "Jul 2021 — Jul 2024",
    bullets: [
      "Led product discovery for job listing creation and structured data workflows using user research, behavioral analysis, and continuous feedback loops",
      "Improved taxonomy and structured job data quality, increasing consistency, discoverability, and marketplace efficiency by 30%",
      "Defined and owned product OKRs across listing quality, compliance, and monetization, aligning engineering, data science, and legal teams",
      "Led regulatory-driven initiative on salary transparency, improving model accuracy by 60% and expanding salary coverage by 80%, protecting ~€50M+ revenue",
      "Built data-driven decision-making frameworks using Adobe Analytics and Tableau to validate hypotheses and guide roadmap prioritization",
      "Translated complex regulatory, legal, and business constraints into scalable product and data solutions under tight deadlines",
    ],
  },
  {
    role: "Software Engineer",
    org: "New Work SE",
    dates: "Jul 2017 — Jul 2021",
    bullets: [
      "Built and scaled XING design system used by 150+ engineers, enabling consistent UI and faster product delivery",
      "Collaborated with product managers and designers to translate user needs into scalable frontend architecture (React, GraphQL)",
      "Improved system consistency and development efficiency through reusable component architecture",
      "Contributed to engineering standards and cross-team technical alignment",
    ],
  },
  {
    role: "Co-Founder",
    org: "TechFabric Creative (Buletin Buletin)",
    dates: "Dec 2014 — Apr 2017",
    bullets: [
      "Co-founded Buletin Buletin, a personalized news aggregation product built on structured data, taxonomy, and ranking logic",
      "Designed content categorization and personalization mechanisms to improve relevance and engagement",
      "Led product discovery, feature development, and growth experiments, increasing user satisfaction by 50%",
      "Owned product and technical strategy for a scalable content platform",
    ],
  },
  {
    role: "Software Developer Intern",
    org: "Microsoft",
    dates: "Jun 2013 — Sep 2013",
    bullets: [
      "Delivered features for internal HR systems, improving workflow efficiency by 30%",
      "Collaborated cross-functionally with engineering, data, and operations teams to translate requirements into product improvements",
      "Supported deployment and iteration of internal tools, improving user satisfaction by 20%",
    ],
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
          <div data-reveal-item className="mb-8">
            <Breadcrumb items={[{ label: "Home", to: "/" }]} />
          </div>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10"
          >
            Resume
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
            <MetaLink href="tel:+4915210223821" icon={Phone}>+49 152 1022 3821</MetaLink>
            <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-3.5" /> Germany
            </span>
            <MetaLink href="https://www.linkedin.com/in/gerta-xhepi-94853289/" icon={Linkedin} external>LinkedIn</MetaLink>
          </div>

          <div data-reveal-item className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
            >
              <Download className="size-4" /> Download PDF
            </a>
            <a
              href="https://www.linkedin.com/in/gerta-xhepi-94853289/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              View on LinkedIn
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
