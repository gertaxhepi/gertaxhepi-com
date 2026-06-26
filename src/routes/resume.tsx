import { createFileRoute } from "@tanstack/react-router";
import { Card, Pill, Section } from "@/components/Primitives";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail, Phone, MapPin } from "lucide-react";

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
  { title: "Master of Business Administration (MBA)", org: "ThePowerMBA", dates: "" },
  { title: "Bachelor of Computer Science", org: "University Polytechnic of Bucharest", dates: "" },
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

function Resume() {
  return (
    <Section className="pt-16 md:pt-24">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-primary/80 mb-3">Resume</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Gerta Xhepi</h1>
          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <a href="mailto:xhepigerta@gmail.com" className="inline-flex items-center gap-1.5 hover:text-foreground transition-colors">
              <Mail className="size-3.5" /> xhepigerta@gmail.com
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="size-3.5" /> +49 152 1022 3821
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5" /> Germany
            </span>
          </div>
        </div>
        <div className="flex gap-3">
          <Button asChild className="rounded-full">
            <a href="/resume.pdf" download>
              <Download className="mr-1" /> Download PDF
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <a href="https://www.linkedin.com/in/gerta-xhepi-94853289/" target="_blank" rel="noreferrer">
              <Linkedin className="mr-1" /> LinkedIn
            </a>
          </Button>
        </div>
      </div>

      <Card className="p-8 md:p-10 mb-10" interactive={false}>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Summary</div>
        <p className="mt-3 text-base md:text-lg text-foreground/85 leading-relaxed">
          Product Manager with 5+ years of experience and an MBA, building data-intensive SaaS products across marketplace and workflow-driven environments. Strong focus on product discovery, OKR execution, and structured data systems that improve decision-making, compliance, and operational efficiency. Experienced in translating complex user needs and regulatory constraints into scalable product solutions. Proven ability to align engineering, data science, legal, and business stakeholders around measurable outcomes in high-complexity environments. Strong software engineering background with hands-on product ownership in product-led organizations.
        </p>
      </Card>

      <div className="grid md:grid-cols-[1.6fr_1fr] gap-10">
        <div>
          <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Experience</h2>
          <div className="space-y-4">
            {experience.map((e) => (
              <Card key={e.role + e.org}>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <div>
                    <div className="text-lg font-medium">{e.role}</div>
                    <div className="text-sm text-muted-foreground">{e.org}</div>
                  </div>
                  <div className="text-xs text-muted-foreground font-mono">{e.dates}</div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                  {e.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="mt-2 size-1 rounded-full bg-primary shrink-0" />{b}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Education</h2>
            <div className="space-y-3">
              {education.map((e) => (
                <Card key={e.title} className="p-5" interactive={false}>
                  <div className="text-base font-medium">{e.title}</div>
                  <div className="text-sm text-muted-foreground">{e.org}</div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Skills</h2>
            <Card className="p-5" interactive={false}>
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Licenses & Certifications</h2>
            <Card className="p-5" interactive={false}>
              <ul className="space-y-2 text-sm">
                {certificates.map((c, i) => (
                  <li key={i} className="flex gap-2.5">
                    <span className="mt-2 size-1 rounded-full bg-primary shrink-0" />{c}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
