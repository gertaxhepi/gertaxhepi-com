import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Gerta Xhepi" },
      { name: "description", content: "Essays and reflections on product, AI and decision-making." },
      { property: "og:title", content: "Writing — Gerta Xhepi" },
      { property: "og:description", content: "Essays and reflections on product, AI and decision-making." },
      { property: "og:url", content: "/writing" },
    ],
    links: [{ rel: "canonical", href: "/writing" }],
  }),
  component: Writing,
});

function Writing() {
  return (
    <Section className="pt-16 md:pt-28" spacing="tight">
      <Reveal>
        <div
          data-reveal-item
          className="text-[11px] font-mono uppercase tracking-[0.22em] mb-10"
          style={{ color: '#8A5A5A' }}
        >
          Writing
        </div>
        <h1
          data-reveal-item
          className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02] max-w-3xl text-balance"
        >
          Thoughts Worth Keeping
        </h1>
        <p
          data-reveal-item
          className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
        >
          I write from time to time when an idea, experience or question stays with me after the work is done. These essays are not meant to teach or provide final answers. They are simply reflections on ideas that continue to shape how I think about building products.
        </p>
      </Reveal>

      <Reveal className="mt-20 divide-y divide-border">
        <div
          data-reveal-item
          className="grid md:grid-cols-[auto_1fr_auto] gap-6 md:gap-16 py-14 md:py-16"
        >
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground md:pt-3">
            01
          </div>
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
              <Link
                to="/essays/ai-problems"
                className="transition-opacity hover:opacity-60"
              >
                Working with AI Is Teaching Me to Understand Problems More Deeply
              </Link>
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              A reflection on mentorship, AI and why understanding a problem matters more than writing better prompts.
            </p>

            <dl className="mt-8 grid sm:grid-cols-2 gap-x-12 gap-y-6">
              <div>
                <dt className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Type
                </dt>
                <dd className="text-sm md:text-[15px] font-medium">Reflection</dd>
              </div>
              <div>
                <dt className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-2">
                  Read time
                </dt>
                <dd className="text-sm md:text-[15px] font-medium">6 min</dd>
              </div>
            </dl>

            <Link
              to="/essays/ai-problems"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
            >
              Read essay
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="hidden md:block md:pt-3">
            <Link
              to="/essays/ai-problems"
              aria-label="Read essay: Working with AI Is Teaching Me to Understand Problems More Deeply"
              className="group inline-flex transition-opacity hover:opacity-60"
            >
              <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <p data-reveal-item className="mt-16 text-sm text-muted-foreground leading-relaxed">
          More essays will appear here whenever I discover something worth writing about.
        </p>
      </Reveal>
    </Section>
  );
}
