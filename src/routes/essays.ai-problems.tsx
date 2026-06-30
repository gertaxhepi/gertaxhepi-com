import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";


export const Route = createFileRoute("/essays/ai-problems")({
  head: () => ({
    meta: [
      {
        title:
          "Working with AI Is Teaching Me to Understand Problems More Deeply — Gerta Xhepi",
      },
      {
        name: "description",
        content:
          "A reflection on mentorship, AI and why understanding a problem matters more than writing better prompts.",
      },
      {
        property: "og:title",
        content:
          "Working with AI Is Teaching Me to Understand Problems More Deeply — Gerta Xhepi",
      },
      {
        property: "og:description",
        content:
          "A reflection on mentorship, AI and why understanding a problem matters more than writing better prompts.",
      },
      { property: "og:url", content: "/essays/ai-problems" },
    ],
    links: [{ rel: "canonical", href: "/essays/ai-problems" }],
  }),
  component: EssayPage,
});

function EssayPage() {
  return (
    <>
      {/* Header */}
      <Section className="pt-12 md:pt-20 pb-8 md:pb-10" spacing="none">
        <Reveal>
          <nav
            data-reveal-item
            aria-label="Breadcrumb"
            className="mb-8 text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground"
          >
            <Link to="/" className="transition-opacity hover:opacity-60 hover:text-foreground">
              Home
            </Link>
            <span className="mx-2 opacity-50">/</span>
            <Link to="/writing" className="transition-opacity hover:opacity-60 hover:text-foreground">
              Writing
            </Link>
          </nav>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground"
          >
            Essay 01 · June 2026 · 6 min read
          </div>
          <h1
            data-reveal-item
            className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.05] max-w-4xl"
          >
            Working with AI Is Teaching Me to Understand Problems More Deeply
          </h1>
          <p
            data-reveal-item
            className="mt-5 text-base md:text-[17px] text-muted-foreground max-w-2xl leading-relaxed"
          >
            A reflection on mentorship, AI and why understanding a problem
            matters more than writing better prompts.
          </p>
          <div
            data-reveal-item
            className="mt-8 h-px bg-foreground/[0.06] max-w-[45rem]"
          />
        </Reveal>
      </Section>

      {/* Body */}
      <Section className="pt-4 md:pt-6" spacing="none">
        <Reveal className="max-w-[45rem]">
          <article className="space-y-8 text-base md:text-[17px] text-foreground/90 leading-[1.75]">
            <p>
              Over the past couple of years, I've watched countless conversations about AI. Some were exciting. Some were intimidating. Some were incredibly practical.
            </p>

            <p>
              I found myself reading, listening and experimenting, but after a while I realised something. I didn't want to build my understanding from other people's conclusions. I wanted to take my time, build products with AI, make mistakes and form my own opinion.
            </p>

            <p>
              This essay is simply a reflection on one of those observations.
            </p>

            <p>
              When I transitioned from software engineering into Product Management, I was incredibly fortunate. I had a mentor who invested a lot of time in helping me grow. Looking back, I realise he wasn't just teaching me Product Management. He was teaching me how to think. I wasn't naturally good at structuring my thoughts. Like many people early in their careers, I was eager to jump into solving problems before fully understanding them. He noticed that. Instead of simply correcting me, he patiently helped me slow down. Before we talked about features, we talked about users. Before discussing solutions, we tried to understand why the problem existed in the first place. Before making decisions, we explored constraints, trade-offs and previous decisions.
            </p>

            <p>
              One day he handed me a copy of <em>The Pyramid Principle</em>. At the time, I thought it was just another business book. Only years later did I realise why he had chosen it. It wasn't really teaching me how to communicate. It was teaching me how to organise my thinking. The better I understood a problem, the easier it became to explain it. I still find myself coming back to that lesson.
            </p>

            <p>
              When AI became part of my daily work, I approached it like many people probably did. I learned prompting. I experimented with different tools. I tried different techniques. Some worked better than others.
            </p>

            <p>
              But after a while, I found myself asking a different question.
            </p>

            <p className="text-center italic text-foreground/80 my-4">
              Is this really the skill I'm trying to develop?
            </p>

            <p>
              The more I worked with AI, the more I noticed a pattern. Whenever I wasn't happy with the output, I rarely blamed the model. More often, I realised I hadn't given it enough to work with. Not because the prompt was bad. Because my own understanding of the problem wasn't complete.
            </p>

            <p>
              I experienced this while working on a personal project exploring how AI could help people make better decisions in mountaineering. I wanted AI to help me understand a completely new domain. Naturally, I started asking questions.
            </p>

            <p>
              The answers were interesting, but they rarely took me very far. After a while, I stepped back and wondered whether I was approaching the problem in the wrong way.
            </p>

            <p>
              Instead of asking AI to research the market, I started helping it understand the domain. I shared documentation from alpine organisations, accident reports, competitor products, my product vision and the type of decisions I wanted to help climbers make.
            </p>

            <p>
              The conversations became much richer. Not overnight. Gradually.
            </p>

            <p className="text-xl md:text-2xl font-medium leading-snug text-foreground tracking-tight my-4">
              I realised I wasn't giving AI more instructions. I was giving it more understanding.
            </p>

            <p>
              Looking back, I realised I'd seen this pattern before. It reminded me of my mentor. He never expected me to make good decisions on my first day. He first helped me understand the world I was stepping into. Working with AI has brought me back to that lesson. It has reminded me that understanding a problem is often harder than solving it. And maybe that's why I've become less interested in finding the perfect prompt and more interested in understanding the problem well enough that I can explain it clearly—to another person or to an AI.
            </p>

            <p>
              I'm still exploring this idea. I don't know if it's the right conclusion, and I'm sure my thinking will continue to evolve. But it's one thought I keep coming back to. Working with AI hasn't changed how I think about Product Management. If anything, it has reinforced one of the most valuable lessons I learned early in my career.
            </p>

            <p className="mt-16 md:mt-20 text-xl md:text-2xl font-semibold tracking-tight text-foreground leading-snug">
              Good solutions begin with good understanding.
            </p>
          </article>
        </Reveal>
      </Section>
    </>
  );
}
