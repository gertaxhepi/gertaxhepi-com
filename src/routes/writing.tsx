import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Gerta Xhepi" },
      {
        name: "description",
        content:
          "Personal essays and reflections about building products, learning, technology and the experiences that shape how I think.",
      },
      { property: "og:title", content: "Writing — Gerta Xhepi" },
      {
        property: "og:description",
        content:
          "Thoughts worth keeping. Personal essays on product, technology and the experiences that shape how I think.",
      },
      { property: "og:url", content: "/writing" },
    ],
    links: [{ rel: "canonical", href: "/writing" }],
  }),
  component: WritingPage,
});

type Essay = {
  number: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  to: "/essays/ai-problems";
};

const essays: Essay[] = [
  {
    number: "Essay 01",
    date: "June 2026",
    readTime: "6 min read",
    title: "Working with AI Is Teaching Me to Understand Problems More Deeply",
    description:
      "A reflection on mentorship, AI and why understanding a problem matters more than writing better prompts.",
    to: "/essays/ai-problems",
  },
];

function WritingPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-16 md:pt-28 pb-12 md:pb-20" spacing="none">
        <Reveal>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground"
          >
            Writing
          </div>
          <h1
            data-reveal-item
            className="mt-6 text-5xl md:text-7xl lg:text-[88px] font-semibold tracking-tight leading-[1.02] text-balance max-w-4xl"
          >
            Thoughts Worth Keeping
          </h1>
          <p
            data-reveal-item
            className="mt-10 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            Sometimes I come across an idea, experience or question that stays
            with me long after the project is finished. This is where I write
            about those moments—not because I have the answers, but because
            writing helps me understand them better.
          </p>
        </Reveal>
      </Section>

      {/* Essays list */}
      <Section className="pt-8 md:pt-16 pb-32 md:pb-48" spacing="none">
        <Reveal className="max-w-3xl space-y-24 md:space-y-32">
          {essays.map((essay) => (
            <article key={essay.to} data-reveal-item>
              <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-6">
                {essay.number} · {essay.date} · {essay.readTime}
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight leading-[1.15] text-balance">
                {essay.title}
              </h2>
              <p className="mt-6 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {essay.description}
              </p>
              <Link
                to={essay.to}
                className="group inline-flex items-center gap-2 text-sm font-medium mt-8 border-b border-foreground pb-1 transition-opacity hover:opacity-60"
              >
                Read essay
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </article>
          ))}
        </Reveal>
      </Section>
    </>
  );
}
