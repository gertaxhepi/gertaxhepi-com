import { ArrowUpRight } from "lucide-react";
import { Breadcrumb } from "./Breadcrumb";
import { PortfolioButton } from "./PortfolioButton";
import { Section } from "./Primitives";
import { Reveal } from "./Reveal";

export function CaseStudyHero({
  role,
  title,
  summary,
  website,
}: {
  role: string;
  title: string;
  summary: string;
  website?: { label: string; url: string };
}) {
  return (
    <Section className="case-study-hero" spacing="none">
      <Reveal>
        <div data-reveal-item className="case-study-breadcrumb">
          <Breadcrumb
            items={[
              { label: "Home", to: "/" },
              { label: "Work", to: "/work" },
            ]}
          />
        </div>
        <div data-reveal-item className="case-study-role">
          {role}
        </div>
        <h1 data-reveal-item className="case-study-title">
          {title}
        </h1>
        <p data-reveal-item className="case-study-summary">
          {summary}
        </p>
        {website && (
          <div data-reveal-item className="case-study-hero-action">
            <PortfolioButton
              href={website.url}
              variant="primary"
              ariaLabel={website.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{website.label}</span>
              <ArrowUpRight
                className="size-5 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
                aria-hidden="true"
              />
            </PortfolioButton>
          </div>
        )}
      </Reveal>
    </Section>
  );
}
