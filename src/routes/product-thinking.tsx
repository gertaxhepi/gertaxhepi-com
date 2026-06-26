import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/product-thinking")({
  head: () => ({
    meta: [
      { title: "Product Discovery & Decision Making — Gerta Xhepi" },
      {
        name: "description",
        content:
          "How I approach product management — from customer discovery and prioritization to working with engineers and validating assumptions.",
      },
      {
        property: "og:title",
        content: "Product Discovery & Decision Making — Gerta Xhepi",
      },
      {
        property: "og:description",
        content:
          "How I approach product management — from customer discovery and prioritization to working with engineers and validating assumptions.",
      },
      { property: "og:url", content: "/product-thinking" },
    ],
    links: [{ rel: "canonical", href: "/product-thinking" }],
  }),
  component: ProductThinking,
});

function Block({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      data-reveal-item
      className="grid md:grid-cols-[1fr_2.4fr] gap-6 md:gap-16 py-12 md:py-16"
    >
      <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground md:pt-2">
        {title}
      </div>
      <div className="text-[15px] md:text-base text-foreground/90 leading-relaxed max-w-3xl">
        {children}
      </div>
    </div>
  );
}

function ProductThinking() {
  return (
    <>
      <Section className="pt-12 md:pt-20" spacing="tight">
        <Reveal>
          <Link
            to="/case-studies"
            data-reveal-item
            className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-2 transition-colors"
          >
            <ArrowLeft className="size-4" /> All work
          </Link>
          <div
            data-reveal-item
            className="mt-14 text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground"
          >
            Approach
          </div>
          <h1
            data-reveal-item
            className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-balance leading-[1.02] max-w-4xl"
          >
            Product Discovery & Decision Making
          </h1>
          <p
            data-reveal-item
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            My approach to understanding complex product problems through
            customer discovery, structured thinking and evidence-based decision
            making.
          </p>
        </Reveal>
      </Section>

      <Section spacing="tight">
        <Reveal>
          <Block title="Product discovery">
            <p>
              I spend most of my time understanding the problem before defining
              the solution. Discovery is not a phase — it is a habit. I talk to
              users until the patterns repeat, map the current workflow in
              detail, and look for the gap between what people say and what they
              do. The best product ideas usually come from watching someone work
              around a broken system, not from asking what they want.
            </p>
          </Block>
          <Block title="Customer research">
            <p>
              Research is only useful when it changes a decision. I design
              research to answer specific questions, not to collect general
              insights. I mix methods — interviews, diary studies, funnel
              analysis, shadowing — depending on what I need to validate. I share
              raw quotes and video clips with the team because nothing builds
              empathy faster than hearing the actual words.
            </p>
          </Block>
          <Block title="Working with engineers">
            <p>
              I treat engineers as creative partners, not implementers. I bring
              them into discovery early, share context on constraints and
              trade-offs, and write requirements that explain the why, not just
              the what. The best products I have shipped came from teams where
              engineers felt ownership over the user outcome, not just the
              technical delivery.
            </p>
          </Block>
          <Block title="Prioritization">
            <p>
              Everything cannot be important. I use frameworks lightly — they are
              scaffolding, not architecture. The real work is understanding what
              moves the outcome, what unlocks the team, and what removes risk. I
              prefer small bets with clear validation criteria over large
              initiatives with ambiguous success metrics.
            </p>
          </Block>
          <Block title="Decision making">
            <p>
              Good decisions come from clear thinking under uncertainty, not from
              having perfect data. I document the assumptions behind every major
              decision, define what would prove me wrong, and set review points
              before committing further. Being wrong is fine; staying wrong is
              expensive.
            </p>
          </Block>
          <Block title="Product principles">
            <div className="space-y-4">
              <p>These are the principles I return to when the path is unclear:</p>
              <ul className="space-y-3">
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="text-muted-foreground font-mono text-xs pt-1.5">
                    —
                  </span>
                  <span>Start with the user, not the feature</span>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="text-muted-foreground font-mono text-xs pt-1.5">
                    —
                  </span>
                  <span>Ship to learn, not to finish</span>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="text-muted-foreground font-mono text-xs pt-1.5">
                    —
                  </span>
                  <span>Measure what matters, not what is easy</span>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="text-muted-foreground font-mono text-xs pt-1.5">
                    —
                  </span>
                  <span>Simple is hard; complexity is the default</span>
                </li>
                <li className="grid grid-cols-[auto_1fr] gap-4">
                  <span className="text-muted-foreground font-mono text-xs pt-1.5">
                    —
                  </span>
                  <span>Trust is built through consistency, not promises</span>
                </li>
              </ul>
            </div>
          </Block>
          <Block title="Validating assumptions">
            <p>
              I assume I am wrong until evidence says otherwise. Every
              assumption gets a test — a prototype, a conversation, a data
              query. The goal is not to prove the idea works; it is to find the
              failure modes early, when they are cheap to fix.
            </p>
          </Block>
          <Block title="Lessons learned">
            <p>
              Across B2B, B2C, marketplaces and AI products, a few patterns keep
              repeating:
            </p>
            <ul className="space-y-3 mt-4">
              <li className="grid grid-cols-[auto_1fr] gap-4">
                <span className="text-muted-foreground font-mono text-xs pt-1.5">
                  —
                </span>
                <span>The problem is rarely what users first describe</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-4">
                <span className="text-muted-foreground font-mono text-xs pt-1.5">
                  —
                </span>
                <span>The best teams argue about the right things</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-4">
                <span className="text-muted-foreground font-mono text-xs pt-1.5">
                  —
                </span>
                <span>Speed comes from clarity, not from rushing</span>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-4">
                <span className="text-muted-foreground font-mono text-xs pt-1.5">
                  —
                </span>
                <span>
                  AI products need evaluation infrastructure before they need
                  more features
                </span>
              </li>
              <li className="grid grid-cols-[auto_1fr] gap-4">
                <span className="text-muted-foreground font-mono text-xs pt-1.5">
                  —
                </span>
                <span>Internal products need real product management too</span>
              </li>
            </ul>
          </Block>
        </Reveal>
      </Section>
    </>
  );
}
