import { createFileRoute, Link } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";
import profileAsset from "@/assets/profile.png.asset.json";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Me — Gerta Xhepi" },
      { name: "description", content: "Product Manager with 5+ years building digital products across B2B, B2C, SaaS, AI and marketplaces. Background in software engineering." },
      { property: "og:title", content: "About Me — Gerta Xhepi" },
      { property: "og:description", content: "Product Manager working at the intersection of customer needs, data, business and engineering." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const profile = [
  { label: "Experience", value: "5+ years building digital products" },
  { label: "Domains", value: "B2B \u00b7 B2C \u00b7 SaaS \u00b7 AI \u00b7 Marketplaces" },
  { label: "Background", value: "Software Engineering \u2192 Product Management" },
  { label: "Current Focus", value: "AI Products \u00b7 Platform Products \u00b7 Decision Support Systems" },
];

const howIThink = [
  "How I approach Product Discovery",
  "Why better data leads to better decisions",
  "What building an AI product taught me",
  "Teaching Hatha Yoga changed how I think about Product Management",
  "Books that shaped how I think about Product",
];

const outsideWork = [
  "Traditional Hatha Yoga Teacher & Founder of Hima Yoga",
  "Marathon Runner",
  "Mountaineering & Outdoor Adventure",
  "Philosophy, Art & Music",
];

function About() {
  return (
    <>
      <Section className="pt-16 md:pt-28" spacing="tight">
        <Reveal>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-10"
          >
            About Me
          </div>
          <h1
            data-reveal-item
            className="text-5xl md:text-7xl font-semibold tracking-tight text-balance leading-[1.02] max-w-4xl"
          >
            Building products at the intersection of technology, business and people.
          </h1>
        </Reveal>
      </Section>

      {/* A SHORT SNAPSHOT */}
      <Section spacing="tight">
        <SectionHeading eyebrow="Profile" title="A short snapshot." />
        <Reveal className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {profile.map((item) => (
            <div data-reveal-item key={item.label}>
              <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-4">
                {item.label}
              </div>
              <div className="text-base md:text-[17px] font-medium text-foreground leading-snug text-balance">
                {item.value}
              </div>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* MY STORY */}
      <Section spacing="tight">
        <SectionHeading eyebrow="My Story" title="How I got here." />
        <div className="mt-16 grid md:grid-cols-[1.6fr_1fr] gap-16 md:gap-24">
          <Reveal className="space-y-7 text-lg md:text-xl text-foreground/90 leading-relaxed">
            <p data-reveal-item>
              I began my career as a software engineer. Writing code taught me how products are built, but I kept finding myself more interested in why we were building them and for whom. That curiosity led me into product management.
            </p>
            <p data-reveal-item>
              Over the years, I've built products used by millions of people, including at XING, one of Europe's largest professional networks. I've worked on marketplace systems, workflow tools and AI-powered features — always with the same underlying question: how do we help people make better decisions?
            </p>
            <p data-reveal-item>
              Today, I'm also the founder of{" "}
              <Link to="/case-studies/$slug" params={{ slug: "peakprofile" }} className="underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-colors">
                PeakProfile
              </Link>
              , where I'm exploring how AI can help people make better decisions in high-risk environments. It's a space where product discovery, model behaviour and human trust all intersect — and where I get to practise the full product cycle end-to-end.
            </p>
            <p data-reveal-item>
              I'm fascinated by products that help people make better decisions. Whether through better data, thoughtful workflows or AI, that's the thread connecting nearly everything I've built.
            </p>
          </Reveal>

          <Reveal className="space-y-10">
            <div data-reveal-item>
              <img
                src={profileAsset.url}
                alt="Gerta Xhepi"
                className="w-full grayscale"
                loading="eager"
              />
            </div>
            <div data-reveal-item>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
              >
                Get in touch
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* HOW I THINK */}
      <Section>
        <SectionHeading
          eyebrow="How I Think"
          title="Ideas that shape my work."
        />
        <p
          data-reveal-item
          className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          My work is shaped by a few recurring ideas. Over time I'll be writing about the frameworks, books and experiences that have influenced how I build products.
        </p>
        <Reveal className="mt-16 max-w-3xl divide-y divide-border">
          {howIThink.map((title) => (
            <div
              key={title}
              data-reveal-item
              className="flex items-start justify-between gap-6 py-7"
            >
              <h3 className="text-xl md:text-2xl font-medium tracking-tight">
                {title}
              </h3>
              <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground shrink-0 pt-1.5">
                Coming soon
              </span>
            </div>
          ))}
        </Reveal>
      </Section>

      {/* OUTSIDE OF WORK */}
      <Section>
        <SectionHeading eyebrow="Outside of Work" title="The person behind the product." />
        <p
          data-reveal-item
          className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          Outside of product, I enjoy disciplines that require patience, curiosity and continuous learning.
        </p>
        <Reveal className="mt-16 max-w-3xl space-y-8">
          {outsideWork.map((item) => (
            <div
              key={item}
              data-reveal-item
              className="text-lg md:text-xl font-medium text-foreground"
            >
              {item}
            </div>
          ))}
        </Reveal>
      </Section>
    </>
  );
}
