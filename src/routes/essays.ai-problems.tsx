import { createFileRoute } from "@tanstack/react-router";
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
      <Section className="pt-12 md:pt-20" spacing="tight">
        <Reveal>
          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground"
          >
            Essay 01 · June 2026
          </div>
          <h1
            data-reveal-item
            className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.05] max-w-4xl"
          >
            Working with AI Is Teaching Me to Understand Problems More Deeply
          </h1>
          <p
            data-reveal-item
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            A reflection on mentorship, AI and why understanding a problem
            matters more than writing better prompts.
          </p>
        </Reveal>
      </Section>

      {/* Body */}
      <Section spacing="tight">
        <Reveal className="max-w-2xl">
          <article className="space-y-6 text-base md:text-[17px] text-foreground/90 leading-[1.75]">
            <p>Over the past couple of years, I've watched countless conversations about AI.</p>

            <p>Some were exciting. Some were intimidating. Some were incredibly practical.</p>

            <p>I found myself reading, listening and experimenting, but after a while I realised something.</p>

            <p>I didn't want to build my understanding from other people's conclusions.</p>

            <p>I wanted to take my time, build products with AI, make mistakes and form my own opinion.</p>

            <p>This essay is simply a reflection on one of those observations.</p>

            <p>When I transitioned from software engineering into Product Management, I was incredibly fortunate.</p>

            <p>I had a mentor who invested a lot of time in helping me grow.</p>

            <p>Looking back, I realise he wasn't just teaching me Product Management.</p>

            <p>He was teaching me how to think.</p>

            <p>I wasn't naturally good at structuring my thoughts. Like many people early in their careers, I was eager to jump into solving problems before fully understanding them.</p>

            <p>He noticed that.</p>

            <p>Instead of simply correcting me, he patiently helped me slow down.</p>

            <p>Before we talked about features, we talked about users.</p>

            <p>Before discussing solutions, we tried to understand why the problem existed in the first place.</p>

            <p>Before making decisions, we explored constraints, trade-offs and previous decisions.</p>

            <p>
              One day he handed me a copy of <em>The Pyramid Principle</em>.
            </p>

            <p>At the time, I thought it was just another business book.</p>

            <p>Only years later did I realise why he had chosen it.</p>

            <p>It wasn't really teaching me how to communicate.</p>

            <p>It was teaching me how to organise my thinking.</p>

            <p>The better I understood a problem, the easier it became to explain it.</p>

            <p>I still find myself coming back to that lesson.</p>

            <p>When AI became part of my daily work, I approached it like many people probably did.</p>

            <p>I learned prompting.</p>

            <p>I experimented with different tools.</p>

            <p>I tried different techniques.</p>

            <p>Some worked better than others.</p>

            <p>But after a while, I found myself asking a different question.</p>

            <p>
              <em>Is this really the skill I'm trying to develop?</em>
            </p>

            <p>The more I worked with AI, the more I noticed a pattern.</p>

            <p>Whenever I wasn't happy with the output, I rarely blamed the model.</p>

            <p>More often, I realised I hadn't given it enough to work with.</p>

            <p>Not because the prompt was bad.</p>

            <p>Because my own understanding of the problem wasn't complete.</p>

            <p>I experienced this while working on a personal project exploring how AI could help people make better decisions in mountaineering.</p>

            <p>I wanted AI to help me understand a completely new domain.</p>

            <p>Naturally, I started asking questions.</p>

            <p>The answers were interesting, but they rarely took me very far.</p>

            <p>After a while, I stepped back and wondered whether I was approaching the problem in the wrong way.</p>

            <p>Instead of asking AI to research the market, I started helping it understand the domain.</p>

            <p>I shared documentation from alpine organisations, accident reports, competitor products, my product vision and the type of decisions I wanted to help climbers make.</p>

            <p>The conversations became much richer.</p>

            <p>Not overnight.</p>

            <p>Gradually.</p>

            <p>I realised I wasn't giving AI more instructions.</p>

            <p>I was giving it more understanding.</p>

            <p>Looking back, I realised I'd seen this pattern before.</p>

            <p>It reminded me of my mentor.</p>

            <p>He never expected me to make good decisions on my first day.</p>

            <p>He first helped me understand the world I was stepping into.</p>

            <p>Working with AI has brought me back to that lesson.</p>

            <p>It has reminded me that understanding a problem is often harder than solving it.</p>

            <p>And maybe that's why I've become less interested in finding the perfect prompt and more interested in understanding the problem well enough that I can explain it clearly—to another person or to an AI.</p>

            <p>I'm still exploring this idea.</p>

            <p>I don't know if it's the right conclusion, and I'm sure my thinking will continue to evolve.</p>

            <p>But it's one thought I keep coming back to.</p>

            <p>Working with AI hasn't changed how I think about Product Management.</p>

            <p>If anything, it has reinforced one of the most valuable lessons I learned early in my career:</p>

            <p>Good solutions begin with good understanding.</p>
          </article>
        </Reveal>
      </Section>
    </>
  );
}
