import { createFileRoute } from "@tanstack/react-router";
import { Card, Pill, Section } from "@/components/Primitives";
import { Button } from "@/components/ui/button";
import { Download, Linkedin } from "lucide-react";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Gerta Xhepi" },
      { name: "description", content: "Resume of Gerta Xhepi: Product Manager, software engineering background, MBA." },
      { property: "og:title", content: "Resume — Gerta Xhepi" },
      { property: "og:description", content: "Experience, education, skills and certificates." },
      { property: "og:url", content: "/resume" },
    ],
    links: [{ rel: "canonical", href: "/resume" }],
  }),
  component: Resume,
});

const experience = [
  {
    role: "Founder & Product Builder",
    org: "PeakProfile",
    dates: "2024 — present",
    bullets: [
      "Founded an AI-powered decision support product for mountaineers",
      "Designed evaluation pipeline for grounded LLM responses",
      "Closed alpha with 80 users, 4.6/5 usefulness rating",
    ],
  },
  {
    role: "Product Manager",
    org: "jacando",
    dates: "2022 — 2024",
    bullets: [
      "Shipped electronic-signature MVP in 7 weeks, adopted by 200+ orgs",
      "Owned workflow automation across hiring and onboarding",
      "Partnered with engineering to modernise the contract pipeline",
    ],
  },
  {
    role: "Product Manager",
    org: "New Work SE / XING",
    dates: "2020 — 2022",
    bullets: [
      "Led salary transparency program protecting €50M+ in marketplace revenue",
      "Improved estimation accuracy by 28% and coverage to 94%",
      "Aligned product roadmap with EU pay-transparency regulation",
    ],
  },
  {
    role: "Co-Founder",
    org: "Builtin",
    dates: "2018 — 2020",
    bullets: [
      "Built early product from zero in a B2B niche",
      "Ran discovery, design and engineering hand-in-hand",
    ],
  },
  {
    role: "Software Engineer",
    org: "Early career",
    dates: "2016 — 2018",
    bullets: [
      "Backend and data engineering on production systems",
      "Foundation for how I work with engineering teams today",
    ],
  },
];

const education = [
  { title: "MBA", org: "Business school", dates: "" },
  { title: "B.Sc. Software Engineering", org: "University", dates: "" },
];

const skills = [
  "Product discovery", "Roadmapping", "AI product strategy", "Evaluation harnesses",
  "Marketplace dynamics", "Platform PM", "SQL & analytics", "A/B testing",
  "Stakeholder management", "Technical scoping", "PRD writing", "Workshop facilitation",
];

const certificates = [
  "Reforge — AI for Product Managers",
  "Mind the Product — Advanced PM",
  "Coursera — Deep Learning Specialization",
];

function Resume() {
  return (
    <Section className="pt-16 md:pt-24">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
        <div className="max-w-2xl">
          <div className="text-xs uppercase tracking-[0.18em] text-primary/80 mb-3">Resume</div>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Gerta Xhepi</h1>
          <p className="mt-3 text-muted-foreground">Product Manager · Germany</p>
        </div>
        <div className="flex gap-3">
          <Button asChild className="rounded-full">
            <a href="/resume.pdf" download>
              <Download className="mr-1" /> Download PDF
            </a>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <Linkedin className="mr-1" /> LinkedIn
            </a>
          </Button>
        </div>
      </div>

      <Card className="p-8 md:p-10 mb-10">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">Summary</div>
        <p className="mt-3 text-base md:text-lg text-foreground/85 leading-relaxed">
          Product Manager with 5+ years building data-intensive SaaS products across marketplaces, workflow automation and AI. Engineering background and an MBA. Known for structured thinking, calm execution and a close working relationship with engineering teams.
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
                  <div className="text-xs text-muted-foreground">{e.dates}</div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-foreground/85">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5">
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
                <Card key={e.title} className="p-5">
                  <div className="text-base font-medium">{e.title}</div>
                  <div className="text-sm text-muted-foreground">{e.org}</div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Skills</h2>
            <Card className="p-5">
              <div className="flex flex-wrap gap-1.5">
                {skills.map((s) => <Pill key={s}>{s}</Pill>)}
              </div>
            </Card>
          </div>

          <div>
            <h2 className="text-xs uppercase tracking-wider text-muted-foreground mb-4">Certificates</h2>
            <Card className="p-5">
              <ul className="space-y-2 text-sm">
                {certificates.map((c) => (
                  <li key={c} className="flex gap-2.5">
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
