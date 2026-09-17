import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
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

const outsideStories = [
  {
    number: "01",
    category: "Yoga",
    theme: "Building communities",
    lesson: "Community taught me that trust is built through consistency.",
    body: "Teaching yoga inspired me to create Hima Yoga, a community built around movement and nature. As it grew, I found myself applying many of the same principles I use in product management: understanding people's needs, experimenting with new ideas, and continuously refining the experience based on what I learned.",
    image: yogaAsset.url,
    alt: "Gerta teaching a yoga class",
  },
  {
    number: "02",
    category: "Rock Climbing",
    theme: "Trust & teamwork",
    lesson: "Trusting the team starts with trusting each other.",
    body: "Rock climbing reminded me that progress isn't just about strength. Every climb depends on trust, encouragement, and supporting one another through difficult moves. The strongest teams aren't built by individuals\u2014they grow by helping each other succeed.",
    image: climbingAsset.url,
    alt: "Rock climbing on a limestone wall",
  },
  {
    number: "03",
    category: "Mountaineering",
    theme: "Humility & perspective",
    lesson: "The mountains taught me that confidence should never replace respect.",
    body: "Every expedition reminds me that nature is always bigger than us. No matter how much we prepare, there are risks we can't control. Reaching the summit never feels like a victory over the mountain, but a privilege. Every climb leaves me a little more humble, a little more grateful, and with a deeper respect for the people who shared the journey.",
    image: mountaineeringAsset.url,
    alt: "Mountaineering on a snowy alpine ridge",
  },
  {
    number: "04",
    category: "Marathon",
    theme: "Consistency & discipline",
    lesson: "Progress comes from consistency.",
    body: "Marathon running has taught me that sustainable progress isn't built through intensity but through consistency. Every training run is a reminder that meaningful results come from showing up, trusting the process, and continuing even when progress isn't immediately visible.",
    image: marathonAsset.url,
    alt: "Running the Amsterdam marathon",
  },
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

      {/* OUTSIDE WORK — editorial story */}
      <Section spacing="tight">
        <Reveal>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10"
          >
            Outside Work
          </div>
          <h2
            data-reveal-item
            className="text-4xl md:text-6xl lg:text-[72px] font-semibold tracking-tight leading-[1.02] text-balance max-w-4xl"
          >
            The experiences that shape how I work.
          </h2>
          <p data-reveal-item className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Work and life are rarely separate. Building communities, navigating uncertainty, solving problems, and
            staying committed to long-term goals are experiences I've found both in product management and beyond.
          </p>
        </Reveal>

        <div className="mt-24 space-y-20 md:space-y-24">
          {outsideStories.map((s, i) => {
            const imageRight = i % 2 === 0;
            return (
              <Reveal key={s.number} className="grid grid-cols-1 md:grid-cols-[42fr_52fr] gap-8 md:gap-10 items-start">
                <div data-reveal-item className={imageRight ? "md:order-1" : "md:order-2"}>
                  <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground/60 mb-6">
                    {s.number}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">{s.category}</h3>
                  <div className="mt-3 text-sm md:text-base text-muted-foreground">{s.theme}</div>
                  <p className="mt-8 text-lg md:text-xl font-semibold text-foreground leading-snug text-balance">
                    {s.lesson}
                  </p>
                  <p className="mt-6 text-base md:text-[17px] text-muted-foreground leading-[1.75]">{s.body}</p>
                </div>
                <div
                  data-reveal-item
                  className={cn("overflow-hidden rounded-[30px]", imageRight ? "md:order-2" : "md:order-1")}
                >
                  <img
                    src={s.image}
                    alt={s.alt}
                    loading="lazy"
                    className="w-full h-[380px] md:h-[420px] object-cover"
                  />
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

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
    </>
  );
}
