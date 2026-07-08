import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import profileAsset from "@/assets/profile.png.asset.json";
import yogaAsset from "@/assets/yoga.png.asset.json";
import climbingAsset from "@/assets/climbing.png.asset.json";
import mountaineeringAsset from "@/assets/mountenaring.png.asset.json";
import marathonAsset from "@/assets/marathon.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me — Gerta Xhepi" },
      {
        name: "description",
        content:
          "Product Manager with 5+ years building B2B, B2C, SaaS, AI and marketplace products. Software engineering background.",
      },

      { property: "og:title", content: "About Me — Gerta Xhepi" },
      {
        property: "og:description",
        content: "Product Manager working at the intersection of customer needs, data, business and engineering.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
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

type Channel = {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
  internal?: boolean;
};

const channels: Channel[] = [
  { label: "Email", value: "xhepigerta@gmail.com", href: "mailto:xhepigerta@gmail.com" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/gerta-xhepi",
    href: "https://www.linkedin.com/in/gerta-xhepi-94853289/",
    external: true,
  },
  { label: "Resume", value: "View resume", href: "/resume", internal: true },
  { label: "Location", value: "Germany" },
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
                PeakProfile
              </Link>
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
              >
                View Resume
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <a
                href="https://www.linkedin.com/in/gerta-xhepi-94853289/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
              >
                LinkedIn
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
              <Reveal
                key={s.number}
                className="grid grid-cols-1 md:grid-cols-[42fr_52fr] gap-8 md:gap-10 items-start"
              >
                <div
                  data-reveal-item
                  className={imageRight ? "md:order-1" : "md:order-2"}
                >
                  <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground/60 mb-6">
                    {s.number}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.05]">
                    {s.category}
                  </h3>
                  <div className="mt-3 text-sm md:text-base text-muted-foreground">{s.theme}</div>
                  <p className="mt-8 text-lg md:text-xl font-semibold text-foreground leading-snug text-balance">
                    {s.lesson}
                  </p>
                  <p className="mt-6 text-base md:text-[17px] text-muted-foreground leading-[1.75]">
                    {s.body}
                  </p>
                </div>
                <div
                  data-reveal-item
                  className={cn(
                    "overflow-hidden rounded-[30px]",
                    imageRight ? "md:order-2" : "md:order-1"
                  )}
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


      {/* CONTACT */}
      <Section spacing="tight">
        <Reveal>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10"
          >
            Contact
          </div>
          <h2
            data-reveal-item
            className="text-4xl md:text-6xl lg:text-[72px] font-semibold tracking-tight leading-[1.02] text-balance max-w-4xl"
          >
            Let's build products people actually want to use.
          </h2>
          <p data-reveal-item className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I'm always happy to talk about product, AI, marketplaces or interesting opportunities.
          </p>
        </Reveal>

        <Reveal className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-14 max-w-3xl">
          {channels.map((c) => (
            <div data-reveal-item key={c.label}>
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-4">
                {c.label}
              </div>
              {c.href ? (
                c.internal ? (
                  <Link
                    to={c.href}
                    className="group inline-flex items-center gap-2 text-lg md:text-xl font-medium text-foreground transition-opacity hover:opacity-60"
                  >
                    {c.value}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                ) : (
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center gap-2 text-lg md:text-xl font-medium text-foreground transition-opacity hover:opacity-60"
                  >
                    {c.value}
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )
              ) : (
                <div className="text-lg md:text-xl font-medium">{c.value}</div>
              )}
            </div>
          ))}
        </Reveal>
      </Section>
    </>
  );
}
