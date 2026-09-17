import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/Primitives";
import { cn } from "@/lib/utils";
import { ArrowRight, Laptop, Mountain, Network, Users } from "lucide-react";
import profileAsset from "@/assets/profile.png.asset.json";
import resumePdf from "@/assets/gerta-xhepi-product-manager-resume.pdf.asset.json";
import yogaAsset from "@/assets/yoga.png.asset.json";
import climbingAsset from "@/assets/climbing.png.asset.json";
import mountaineeringAsset from "@/assets/mountenaring.png.asset.json";
import marathonAsset from "@/assets/marathon.png.asset.json";

const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/5e5a77b8-fdcf-4df7-92f9-1cada506e97a";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Product Manager" },
      {
        name: "description",
        content: "Learn more about my journey from Software Engineer to Product Manager and the products I've built.",
      },
      { property: "og:title", content: "About | Product Manager" },
      {
        property: "og:description",
        content: "Learn more about my journey from Software Engineer to Product Manager and the products I've built.",
      },
      { property: "og:url", content: "https://gertaproduct.com/about" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://gertaproduct.com/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://gertaproduct.com/" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://gertaproduct.com/about" },
          ],
        }),
      },
    ],
  }),
  component: About,
});

const strengths = [
  {
    shape: "circle",
    title: "Clarify ambiguity",
    description:
      "I turn complex problems into clear opportunities by asking the right questions and finding a practical way forward.",
  },
  {
    shape: "triangle",
    title: "Connect technology and people",
    description: "I bridge technical depth and human needs, translating between users, business and engineering.",
  },
  {
    shape: "square",
    title: "Build trusted products",
    description: "I turn ideas into products people can understand, trust and use—with a focus on real impact.",
  },
];

const careerStages = [
  { title: "Software Engineer", company: "Microsoft + XING", description: "Learned how products and platforms are built at scale.", icon: Laptop },
  { title: "Product Manager", company: "XING + onlyfy", description: "Built B2C, B2B and data products used by millions.", icon: Users },
  { title: "Product Manager", company: "Jacando", description: "Shipped workflow automation and e-signature for HR teams.", icon: Network },
  { title: "Founder / Product Builder", company: "PeakProfile", description: "Building AI-assisted decision support for mountaineers.", icon: Mountain },
];

const supportingRecommendations = [
  {
    initials: "LV",
    name: "Leonardo Vides",
    role: "Network Engineer",
    relationship: "Former colleague at Jacando",
    quote:
      "One of her greatest strengths is her ability to balance strategic thinking with a genuine commitment to customer needs and business goals.",
  },
  {
    initials: "MC",
    name: "Mike Czech",
    role: "Senior Machine Learning Engineer",
    relationship: "Former teammate at XING",
    quote: "Her ability to analyze and apply data insights has been a key contributor to our team’s achievements.",
  },
  {
    initials: "IZ",
    name: "Inga Zager",
    role: "Data Strategist & Product Manager",
    relationship: "Former colleague at XING",
    quote:
      "If you are looking for a smart, dedicated and motivated PO with background in data products… Loved working with her very much!",
  },
  {
    initials: "PA",
    name: "Pedro Almeida",
    role: "Agile Coach",
    relationship: "Former teammate at XING",
    quote: "Working with Gerta was really a pleasure and she brings good value to a product driven organisation!",
  },
];

const beyondWorkActivities = [
  {
    number: "01",
    title: "Yoga",
    theme: "Building communities",
    description:
      "Teaching yoga and creating Hima Yoga taught me that trust grows through consistency, listening and continually improving the experience.",
    image: yogaAsset.url,
    alt: "Gerta practicing yoga",
  },
  {
    number: "02",
    title: "Rock Climbing",
    theme: "Trust & teamwork",
    description: "Progress depends on trust, encouragement and helping one another through difficult moves.",
    image: climbingAsset.url,
    alt: "Gerta rock climbing",
  },
  {
    number: "03",
    title: "Mountaineering",
    theme: "Humility & perspective",
    description:
      "The mountains remind me that preparation matters, uncertainty is real and confidence should never replace respect.",
    image: mountaineeringAsset.url,
    alt: "Gerta mountaineering",
  },
  {
    number: "04",
    title: "Marathon",
    theme: "Consistency & discipline",
    description:
      "Long-term progress comes from showing up, trusting the process and continuing even when results aren’t immediately visible.",
    image: marathonAsset.url,
    alt: "Gerta running a marathon",
  },
];

function About() {
  return (
    <>
      <div className="about-overview container-page py-16 md:py-20 lg:py-24">
        <section className="about-hero">
          <div className="min-w-0">
            <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-terracotta">About</div>
            <h1 className="mt-7 max-w-3xl text-4xl font-semibold leading-[1.04] text-balance md:text-5xl lg:text-6xl">
              I turn complex systems into clear, useful products.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              I’m an engineer-turned-Product Manager working across B2C, B2B SaaS, marketplaces, structured data and AI.
              I’m strongest where technical complexity, user needs and business outcomes meet.
            </p>
          </div>
          <img src={profileAsset.url} alt="Gerta Xhepi" className="about-portrait w-full grayscale" loading="eager" />
        </section>

        <section className="mt-24 md:mt-28" aria-labelledby="what-i-do-title">
          <h2 id="what-i-do-title" className="text-[11px] font-mono uppercase tracking-[0.18em] text-terracotta">What I Do</h2>
          <div className="about-strengths mt-8">
            {strengths.map((strength) => (
              <article key={strength.title} className="about-strength">
                <span className={cn("about-shape block bg-terracotta/45", `about-shape-${strength.shape}`)} aria-hidden="true" />
                <h3 className="mt-6 text-xl font-semibold leading-tight text-foreground md:text-2xl">{strength.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[17px]">{strength.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-24 md:mt-28" aria-labelledby="career-title">
          <h2 id="career-title" className="text-[11px] font-mono uppercase tracking-[0.18em] text-terracotta">Career at a Glance</h2>
          <ol className="about-timeline mt-9">
            {careerStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <li key={stage.company} className="about-stage">
                  <div className="about-stage-marker flex items-center justify-center rounded-full bg-secondary text-foreground">
                    <Icon className="size-5 md:size-6" strokeWidth={1.7} aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold leading-tight text-foreground md:mt-5">{stage.title}</h3>
                  <p className="mt-1 text-sm text-foreground/80 md:text-base">{stage.company}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:pr-4 md:text-base">{stage.description}</p>
                </li>
              );
            })}
          </ol>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link to="/work" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] bg-terracotta px-[22px] py-[14px] text-sm font-semibold text-background transition-colors hover:bg-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-background" aria-label="View selected work">
              View selected work <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <a href={resumePdf.url} download="Gerta_Xhepi_Product_Manager_Resume.pdf" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] border border-foreground bg-transparent px-[22px] py-[14px] text-sm font-semibold text-foreground transition-colors hover:bg-foreground hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background" aria-label="Download Gerta Xhepi's resume">
              Download resume <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </section>
      </div>

      {/* LinkedIn recommendations */}
      <Section spacing="tight">
        <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-terracotta mb-7" data-reveal-item>
          LinkedIn Recommendations
        </div>
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.05]"
          data-reveal-item
        >
          Kind Words
        </h2>

        <article className="mt-14 md:mt-20 pb-12 md:pb-16" data-reveal-item>
          <div className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-5 md:grid-cols-[4rem_minmax(0,1fr)] md:gap-x-7">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-sm font-semibold text-terracotta md:size-16">
              TR
            </div>
            <div className="min-w-0 self-center">
              <h3 className="text-lg font-semibold leading-tight text-foreground">Tom Raab</h3>
              <p className="mt-1 text-sm leading-snug text-foreground/85">Founder, Urban Friends</p>
              <p className="mt-0.5 text-sm leading-snug text-muted-foreground">Former senior colleague at XING</p>
            </div>
          </div>
          <div className="mt-8 space-y-6 text-base leading-[1.75] text-foreground/85 md:ml-[5.75rem] md:text-[17px]">
            <p>
              I had the pleasure of helping Gerta’s transition from a developer to a product manager position. Her deep
              technical background, coupled with a keen understanding of the product landscape, has brought a unique
              perspective to our team. Gerta consistently leverages this dual skill set to drive innovative solutions and
              make informed decisions.
            </p>
            <p>
              One of Gerta’s standout qualities is her eagerness to take on responsibility. From the outset, Gerta
              demonstrated a proactive approach to ownership, consistently going above and beyond.
            </p>
            <p>
              Her proactive communication style ensures that all team members are well-informed, aligned, and can
              contribute effectively. Gerta’s collaborative spirit is particularly noteworthy. She works seamlessly with
              both designers and developers.
            </p>
            <p>
              I am also impressed by Gerta’s learner mentality. Her curiosity and commitment to personal and professional
              growth are evident in her continuous pursuit of knowledge. Gerta not only embraces challenges but actively
              seeks them out, demonstrating a genuine desire to push boundaries and explore new opportunities.
            </p>
          </div>
        </article>

        <div className="border-t border-border md:grid md:grid-cols-2" data-reveal-item>
          {supportingRecommendations.map((recommendation, index) => (
            <article
              key={recommendation.name}
              className={cn(
                "py-10 md:py-12",
                index > 0 && "border-t border-border",
                index === 1 && "md:border-t-0 md:pl-10 lg:pl-14",
                index === 0 && "md:border-r md:pr-10 lg:pr-14",
                index === 2 && "md:border-r md:pr-10 lg:pr-14",
                index === 3 && "md:pl-10 lg:pl-14",
              )}
            >
              <div className="grid grid-cols-[3.25rem_minmax(0,1fr)] gap-x-5 md:grid-cols-[3.5rem_minmax(0,1fr)] md:gap-x-6">
                <div className="flex size-13 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-sm font-semibold text-terracotta md:size-14">
                  {recommendation.initials}
                </div>
                <div className="min-w-0 self-center">
                  <h3 className="text-lg font-semibold leading-tight text-foreground">{recommendation.name}</h3>
                  <p className="mt-1 text-sm leading-snug text-foreground/85">{recommendation.role}</p>
                  <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{recommendation.relationship}</p>
                </div>
              </div>
              <p className="mt-7 text-base leading-[1.7] text-foreground/85 md:ml-20">{recommendation.quote}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section spacing="tight">
        <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-terracotta mb-7">
          Beyond Work
        </div>
        <h2 className="max-w-4xl text-4xl font-semibold leading-[1.05] text-balance md:text-5xl lg:text-6xl">
          The things that keep me grounded.
        </h2>

        <div className="beyond-work-grid mt-12 md:mt-16">
          {beyondWorkActivities.map((activity) => (
            <article key={activity.number} className="beyond-work-item">
              <img
                src={activity.image}
                alt={activity.alt}
                className="beyond-work-image"
                loading="lazy"
              />
              <div className="mt-6 grid grid-cols-[2.5rem_minmax(0,1fr)] gap-x-4 md:mt-7">
                <span className="font-mono text-xs text-terracotta" aria-hidden="true">
                  {activity.number}
                </span>
                <div className="min-w-0">
                  <h3 className="text-xl font-semibold leading-tight text-foreground md:text-2xl">{activity.title}</h3>
                  <p className="mt-2 text-[11px] font-mono uppercase tracking-[0.14em] text-terracotta">{activity.theme}</p>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">{activity.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
