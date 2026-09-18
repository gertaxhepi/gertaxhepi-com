import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Primitives";

const projects = [
  {
    slug: "peakprofile",
    title: "PeakProfile",
    metadata: "Founder project · Current",
  },
  {
    slug: "electronic-signature",
    title: "Electronic Signature MVP",
    metadata: "Jacando · 2024–2025",
  },
  {
    slug: "salary-transparency",
    title: "Salary Transparency & Structured Job Data",
    metadata: "XING · 2023–2024",
  },
  {
    slug: "onlyfy-talent-pool",
    title: "onlyfy Talent Pool",
    metadata: "XING · 2022",
  },
  {
    slug: "notifications",
    title: "Notifications",
    metadata: "XING · 2021–2022",
  },
] as const;

export type CaseStudySlug = (typeof projects)[number]["slug"];

export function NextProjectNavigation({ currentSlug }: { currentSlug: CaseStudySlug }) {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  if (!nextProject) return null;

  return (
    <Section className="case-study-next" spacing="none">
      <Link
        to="/case-studies/$slug"
        params={{ slug: nextProject.slug }}
        className="case-study-next-row"
        aria-label={`View next project: ${nextProject.title}`}
      >
        <span className="case-study-next-label">Next project</span>
        <span className="case-study-next-title">{nextProject.title}</span>
        <span className="case-study-next-metadata">{nextProject.metadata}</span>
        <ArrowUpRight className="case-study-next-arrow" aria-hidden="true" />
      </Link>

      <Link to="/work" className="case-study-all-projects">
        <span aria-hidden="true">←</span>
        <span>All projects</span>
      </Link>
    </Section>
  );
}