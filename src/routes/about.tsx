import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { ExternalLink, FileText, Github, Linkedin } from "lucide-react";
import profileAsset from "@/assets/profile.png.asset.json";
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

const howIThink = [
  "How I approach Product Discovery",
  "Why better data leads to better decisions",
  "What building an AI product taught me",
  "Teaching Hatha Yoga changed how I think about Product Management",
  "Books that shaped my thinking",
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
      {/* About Me */}
      <Section spacing="tight">
        <SectionHeading eyebrow="My Story" title="About Me" />
        <div className="mt-16 grid md:grid-cols-[1.6fr_1fr] gap-16 md:gap-24">
          <Reveal className="space-y-7 text-lg md:text-xl text-foreground/90 leading-relaxed">
            <p data-reveal-item>
              I began my career as a software engineer, where I learned how products are built. Even then, I was always
              drawn to understanding problems and finding better ways to solve them. That curiosity, alongside building
              products of my own, eventually led me into Product Management.
            </p>
            <p data-reveal-item>
              Since then, I've worked on products used by millions of people, including at XING, building marketplace
              systems, workflow tools and AI-powered features.
            </p>
            <p data-reveal-item>
              Currently, I'm building a personal AI product for mountaineers, exploring how structured data can help
              people make better decisions in high-risk environments. I call it{" "}
              <Link
                to="/case-studies/$slug"
                params={{ slug: "peakprofile" }}
                className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors"
              >
                PeakProfile.
              </Link>
            </p>
            <p data-reveal-item>
              Building PeakProfile has reinforced how much I enjoy product management. While I love exploring ideas
              independently, what motivates me most is collaborating with talented teams to solve complex problems and
              build products that make a real difference.
            </p>
            <p data-reveal-item className="pt-4">
              I'm fascinated by products that help people make better decisions. Whether through better data, thoughtful
              workflows or AI, that's the thread connecting nearly everything I've built.
            </p>
          </Reveal>

          <Reveal className="space-y-10">
            <div data-reveal-item>
              <img src={profileAsset.url} alt="Gerta Xhepi" className="w-full grayscale" loading="eager" />
            </div>
            <div data-reveal-item className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link
                to="/resume"
                className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
                aria-label="View Gerta Xhepi's resume"
              >
                <FileText className="size-[18px] shrink-0 text-foreground" strokeWidth={1.75} aria-hidden="true" />
                View Resume
                <ExternalLink className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </Link>
              <a
                href="https://www.linkedin.com/in/gerta-xhepi-94853289/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
                aria-label="Visit Gerta Xhepi on LinkedIn"
              >
                <Linkedin className="size-[18px] shrink-0 text-foreground" strokeWidth={1.75} aria-hidden="true" />
                LinkedIn
                <ExternalLink className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
              <a
                href="https://github.com/gertaxhepi"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
                aria-label="Visit Gerta Xhepi on GitHub"
              >
                <Github className="size-[18px] shrink-0 text-foreground" strokeWidth={1.75} aria-hidden="true" />
                GitHub
                <ExternalLink className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

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
