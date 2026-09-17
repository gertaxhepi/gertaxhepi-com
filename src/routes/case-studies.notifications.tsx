import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { CaseSection, CaseText } from "@/components/CaseSection";
import { CaseStudyHero } from "@/components/CaseStudyHero";
import { AllProjectsCTA } from "@/components/AllProjectsCTA";

export const Route = createFileRoute("/case-studies/notifications")({
  head: () => {
    const title = "Notifications — Case Study";
    const description =
      "Improved targeting, segmentation and content relevance, increasing notification open rates by 40%.";
    const url = "https://gertaproduct.com/case-studies/notifications";
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
            headline: "Notifications",
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
              { "@type": "ListItem", position: 3, name: "Notifications", item: url },
            ],
          }),
        },
      ],
    };
  },
  component: NotificationsPage,
});

function NotificationsPage() {
  return (
    <>
      <CaseStudyHero
        role="XING • Product Manager"
        title="Notifications"
        summary="Improved targeting, segmentation and content relevance, increasing notification open rates by 40%."
      />

      <Section className="case-study-content" spacing="none">
        <Reveal>
          <div className="case-study-sections">
            <CaseSection number="01" title="The challenge">
              <CaseText>
                Generic notifications reached broad audiences but often failed to reflect what
                users needed at that moment. Messages were easy to ignore because targeting and
                content did not account for user intent or recent activity.
              </CaseText>
            </CaseSection>
            <CaseSection number="02" title="Discovery">
              <CaseText>
                I reviewed engagement data and mapped the main notification journeys. The data
                showed clear differences between active job seekers, passive candidates and people
                primarily using XING to maintain their professional network.
              </CaseText>
            </CaseSection>
            <CaseSection number="03" title="Key decisions">
              <CaseText>
                We prioritized relevance over notification volume. Audiences were segmented
                according to intent and recent activity, and each journey received more focused
                timing and content.
              </CaseText>
            </CaseSection>
            <CaseSection number="04" title="Solution">
              <CaseText>
                We improved targeting, timing and messaging across job recommendations, network
                activity and other important notification journeys.
              </CaseText>
            </CaseSection>
            <CaseSection number="05" title="Results" soft>
              <CaseText>Notification open rates increased by 40%.</CaseText>
            </CaseSection>
            <CaseSection number="06" title="Working together">
              <div className="border-l border-foreground/10 pl-6 md:pl-8 max-w-2xl">
                <div className="space-y-4 text-base md:text-lg leading-relaxed text-foreground/90">
                  <p>
                    I had the pleasure of helping Gerta's transition from a developer to a product manager position. Her deep technical background, coupled with a keen understanding of the product landscape, has brought a unique perspective to our team. Gerta consistently leverages this dual skill set to drive innovative solutions and make informed decisions.
                  </p>
                  <p>
                    One of Gerta's standout qualities is her eagerness to take on responsibility. From the outset, Gerta demonstrated a proactive approach to ownership, consistently going above and beyond.
                  </p>
                  <p>
                    Her proactive communication style ensures that all team members are well-informed, aligned, and can contribute effectively. Gerta's collaborative spirit is particularly noteworthy. She works seamlessly with both designers and developers.
                  </p>
                  <p>
                    I am also impressed by Gerta's learner mentality. Her curiosity and commitment to personal and professional growth are evident in her continuous pursuit of knowledge. Gerta not only embraces challenges but actively seeks them out, demonstrating a genuine desire to push boundaries and explore new opportunities.
                  </p>
                </div>
                <div className="mt-8">
                  <p className="font-semibold text-foreground">Tom Raab</p>
                  <p className="text-sm md:text-base text-muted-foreground">Senior Product Manager at XING</p>
                </div>
              </div>
            </CaseSection>
          </div>
        </Reveal>
      </Section>

      <AllProjectsCTA />
    </>
  );
}
