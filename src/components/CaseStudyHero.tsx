import { Breadcrumb } from "./Breadcrumb";
import { Section } from "./Primitives";
import { Reveal } from "./Reveal";

export function CaseStudyHero({
  role,
  title,
  summary,
}: {
  role: string;
  title: string;
  summary: string;
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
      </Reveal>
    </Section>
  );
}