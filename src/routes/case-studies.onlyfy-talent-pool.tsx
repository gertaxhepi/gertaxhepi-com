import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { CaseSection, CaseText } from "@/components/CaseSection";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { AllProjectsCTA } from "@/components/AllProjectsCTA";

export const Route = createFileRoute("/case-studies/onlyfy-talent-pool")({
  head: () => {
    const title = "onlyfy Talent Pool — Case Study";
    const description =
      "Supported the migration into the XING Talent Pool and helped roughly 40% of contacted users join.";
    const url = "https://gertaproduct.com/case-studies/onlyfy-talent-pool";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: "onlyfy Talent Pool",
            description,
            author: { "@type": "Person", name: "Gerta Xhepi" },
            url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://gertaproduct.com/" },
              { "@type": "ListItem", position: 2, name: "Work", item: "https://gertaproduct.com/work" },
              { "@type": "ListItem", position: 3, name: "onlyfy Talent Pool", item: url },
            ],
          }),
        },
      ],
    };
  },
  component: OnlyfyTalentPoolPage,
});

function OnlyfyTalentPoolPage() {
  return (
    <>
      <CaseStudyHero
        role="XING • Product Manager"
        title="onlyfy Talent Pool"
        summary="Supported the migration into the XING Talent Pool and helped roughly 40% of contacted users join."
      />

      <Section className="case-study-content" spacing="none">
        <Reveal>
          <div className="case-study-sections">
            <CaseSection number="01" title="Discovery">
              <CaseText>
                The migration from onlyfy into the XING Talent Pool required a clear opt-in
                journey. Candidates needed to understand the value of joining without introducing
                unnecessary friction into their job-search experience.
              </CaseText>
            </CaseSection>
            <CaseSection number="02" title="Actions">
              <CaseText>
                We combined email communication with in-product prompts and tested different
                moments in the journey. We later introduced the opt-in opportunity after job
                applications, when the value of joining the Talent Pool was more relevant.
              </CaseText>
            </CaseSection>
            <CaseSection number="03" title="Results" soft>
              <CaseText>Around 40% of contacted users joined the XING Talent Pool.</CaseText>
            </CaseSection>
            <CaseSection number="04" title="Working together">
              <CaseText>
                I worked with engineering, design, CRM and marketplace stakeholders to coordinate
                the migration journey and ensure the communication remained clear across channels.
              </CaseText>
            </CaseSection>
          </div>
        </Reveal>
      </Section>

      <AllProjectsCTA />
    </>
  );
}
