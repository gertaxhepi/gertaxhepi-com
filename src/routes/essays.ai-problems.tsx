import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/Primitives";
import { PullQuote } from "@/components/PullQuote";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/essays/ai-problems")({
  head: () => ({
    meta: [
      {
        title: "Understanding Before Solving — Gerta Xhepi",
      },
      {
        name: "description",
        content: "A personal reflection on AI, mentorship, and the timeless value of understanding before solving.",
      },
      {
        property: "og:title",
        content: "Understanding Before Solving — Gerta Xhepi",
      },
      {
        property: "og:description",
        content: "A personal reflection on AI, mentorship, and the timeless value of understanding before solving.",
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

          <div data-reveal-item className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
            Essay 01 · June 2026 · 7 min read
          </div>

          <h1
            data-reveal-item
            className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.05] max-w-4xl"
          >
            Understanding Before Solving
          </h1>

          <p data-reveal-item className="mt-5 text-base md:text-[17px] text-muted-foreground max-w-2xl leading-relaxed">
            Has AI really changed the skill that matters?
          </p>

          <div data-reveal-item className="mt-8 h-px bg-foreground/[0.06] max-w-[45rem]" />
        </Reveal>
      </Section>

      {/* Body */}
      <Section className="pt-4 md:pt-6" spacing="none">
        <Reveal className="max-w-[45rem]">
          <article className="space-y-8 text-base md:text-[17px] text-foreground/90 leading-[1.75]">
            <p>
              Over the past couple of years, I've watched countless conversations about AI. Some were exciting. Some
              were intimidating. Some were incredibly practical.
            </p>

            <p>
              But after a while, I realised I didn't want to build my understanding from other people's conclusions. I
              wanted to take my time, build products with AI, make mistakes and form my own opinion.
            </p>

            <p>This essay is simply a reflection on one of those observations.</p>

            <p>
              Looking back, I realise I've been incredibly fortunate throughout my career. I've had managers, team leads
              and mentors who invested a lot of time in helping me grow. More than anything, they challenged how I
              thought. They encouraged me to question my assumptions, structure my thinking and understand problems
              before trying to solve them.
            </p>

            <p>
              One of those mentors had a particularly lasting impact on me after I transitioned into Product Management.
            </p>

            <p>
              I wasn't naturally good at structuring my thoughts. Like many people early in their careers, I was eager
              to jump into solving problems before fully understanding them. He noticed that. Instead of simply
              correcting me, he patiently helped me slow down.
            </p>

            <p>
              Before we talked about features, we talked about users. Before discussing solutions, we tried to
              understand why the problem existed in the first place. Before making decisions, we explored constraints,
              trade-offs and previous decisions.
            </p>

            <p>
              One day he handed me a copy of <em>The Pyramid Principle</em>. At the time, I thought it was just another
              business book. Only years later did I realise why he had chosen it. It wasn't really teaching me how to
              communicate. It was teaching me how to organise my thinking.
            </p>

            <p>The better I understood a problem, the easier it became to explain it.</p>

            <p>I still find myself coming back to that lesson.</p>

            <p>
              When AI became part of my daily work, I approached it like many people probably did. I learned prompting.
              I experimented with different tools. I tried different techniques. Some worked better than others.
            </p>

            <p>But after a while, I found myself asking a different question.</p>

            <PullQuote>Is this really the skill I'm trying to develop?</PullQuote>

            <p>
              The more I worked with AI, the more I noticed a pattern. Whenever I wasn't happy with the output, I rarely
              blamed the model. More often, I realised I hadn't given it enough to work with. Not because I had written
              a poor prompt, but because I hadn't yet understood the problem well enough to explain it.
            </p>

            <p>
              I experienced this while working on a personal project exploring how AI could help people make better
              decisions in mountaineering.
            </p>

            <p>
              At first, I asked AI questions that seemed reasonable. What features should a mountaineering product have?
              How do other products approach this problem? What should I build?
            </p>

            <p>
              The answers weren't wrong, but they felt familiar. Route planning. Weather forecasts. GPS tracking.
              Equipment checklists. Features that almost every outdoor app already offers.
            </p>

            <p>Then I realised I was asking AI to solve a problem that I hadn't fully defined myself.</p>

            <p>
              Instead of asking AI to research the market, I started helping it understand the domain. I shared
              documentation from alpine organisations, accident reports, competitor products, my product vision and the
              type of decisions I wanted to help climbers make.
            </p>

            <p>The conversation changed.</p>

            <p>
              Instead of discussing features, we started exploring why climbers continue despite warning signs, how
              accident reports reveal recurring patterns in decision-making, where human judgement tends to fail, and
              how a product could help someone recognise risk before committing to a climb rather than simply helping
              them navigate once they were already on the mountain.
            </p>

            <p>That's when something clicked.</p>

            <PullQuote>
              I realised I wasn't giving AI better prompts. I was giving it better understanding.
            </PullQuote>

            <p>Looking back, I realised I'd seen this pattern before.</p>

            <p>
              My mentors never expected me to have the right answers from the start. Before they challenged my
              solutions, they helped me understand the world I was stepping into. They gave me context. They asked
              better questions. They encouraged me to slow down before moving forward.
            </p>

            <p>Working with AI has brought me back to those lessons.</p>

            <p>
              It has reminded me that understanding a problem is often harder than solving it. And maybe that's why I've
              become less interested in finding the perfect prompt and more interested in understanding a problem well
              enough that I can explain it clearly, whether to another person or to an AI.
            </p>

            <p>
              I'm still exploring this idea, and I'm sure my thinking will continue to evolve. But it's one observation
              I keep coming back to.
            </p>

            <p>AI has undoubtedly changed the way I work.</p>

            <p>
              It has changed how I research, how I prototype, how I write and even how I learn. It has made me faster in
              ways I couldn't have imagined a few years ago.
            </p>

            <p>
              But beneath all of that, I've found myself relying on the same lessons my mentors taught me years ago.
            </p>

            <PullQuote>Understanding before solving.</PullQuote>

            <p>Asking better questions.</p>

            <p>Taking the time to understand the problem before searching for an answer.</p>

            <p>Maybe that's what surprised me most.</p>

            <p>Technology changes the way we work.</p>

            <p>But it doesn't change the value of understanding.</p>
          </article>
        </Reveal>
      </Section>
    </>
  );
}
