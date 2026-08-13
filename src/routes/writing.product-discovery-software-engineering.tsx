import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";

const TITLE = "How My Software Engineering Background Shaped My Approach to Product Discovery";
const DESCRIPTION =
  "A reflection on how moving from software engineering to product management changed the way I think about product discovery and decision making.";
const URL = "https://gertaproduct.com/writing/product-discovery-software-engineering";

export const Route = createFileRoute("/writing/product-discovery-software-engineering")({
  head: () => ({
    meta: [
      { title: `${TITLE} — Gerta Xhepi` },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: `${TITLE} — Gerta Xhepi` },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: URL }],
  }),
  component: EssayPage,
});

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <p className="my-16 md:my-20 border-l-2 border-foreground/20 pl-6 md:pl-8 text-xl md:text-2xl font-medium leading-snug tracking-tight text-foreground">
      {children}
    </p>
  );
}

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
            Essay 02 · August 2026 · 8 min read
          </div>

          <h1
            data-reveal-item
            className="mt-5 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.05] max-w-4xl"
          >
            {TITLE}
          </h1>

          <p data-reveal-item className="mt-5 text-base md:text-[17px] text-muted-foreground max-w-2xl leading-relaxed">
            Every customer interview answered one question. It also uncovered three more.
          </p>

          <div data-reveal-item className="mt-8 h-px bg-foreground/[0.06] max-w-[45rem]" />
        </Reveal>
      </Section>

      {/* Body */}
      <Section className="pt-4 md:pt-6" spacing="none">
        <Reveal className="max-w-[45rem]">
          <article className="space-y-8 text-base md:text-[17px] text-foreground/90 leading-[1.75]">
            <p>
              When I moved from software engineering into product management, I expected product discovery to be about
              learning new frameworks and techniques.
            </p>

            <p>
              Looking back, the frameworks were the easy part. What really shaped my approach was learning how to make
              decisions when there was never enough information to be completely certain.
            </p>

            <p>
              One thing that made the transition feel natural was that I had always enjoyed challenging solutions. Even
              as a software engineer, I was rarely the person who simply implemented what landed in my backlog.
            </p>

            <p>
              I wanted to understand why we were building something before thinking about how to build it. I enjoyed
              discussing trade-offs, questioning assumptions, and understanding the problem behind the feature.
            </p>

            <p>That curiosity was one of the reasons I moved into product management in the first place.</p>

            <p>
              What I underestimated was how different it feels when the problem you're trying to understand belongs to
              your users instead of your colleagues.
            </p>

            <p>
              As an engineer, most of my stakeholders were internal: Product Managers, designers, and other engineers.
              Later, working on our Design System, our users were developers across the company. They had real problems,
              but they also spoke the same language, shared similar context, and success was often easier to measure.
            </p>

            <p>Product discovery introduced a different kind of stakeholder.</p>

            <p>
              Users don't always describe their problems clearly. They have habits, workarounds, competing priorities,
              and alternatives to your product. Sometimes what they say doesn't match what they do.
            </p>

            <p>
              Unlike software engineering, there isn't a compiler or a test suite waiting to tell you whether your
              thinking is correct.
            </p>

            <p>That uncertainty was new to me.</p>

            <p>
              The discovery frameworks themselves weren't difficult to learn. Talking to users, analyzing behavior, and
              running experiments are all skills that improve with practice.
            </p>

            <PullQuote>
              The frameworks were the easy part. The difficult part was deciding what to believe when every piece of
              evidence seemed to tell a slightly different story.
            </PullQuote>

            <p>I remember experiencing this most clearly while working on Salary Transparency.</p>

            <p>
              Our goal sounded simple: help job seekers make better informed decisions by showing salary information on
              job advertisements.
            </p>

            <p>But what information should we actually show?</p>

            <p>
              Should we display a predicted salary range? Should we communicate how confident the prediction was? Would
              users trust an estimate? Would they rather see an estimated range than no salary information at all?
            </p>

            <p>None of those questions had obvious answers.</p>

            <p>So we started learning.</p>

            <p>
              We interviewed job seekers to understand what information actually influenced their decision to apply. We
              worked closely with our Data Scientists to understand how reliable our salary predictions were. We
              analyzed user behavior, looked at competitors, and discussed different approaches across the team.
            </p>

            <p>I found myself constantly moving between customer interviews and dashboards.</p>

            <p>
              When users told us salary transparency mattered, I wanted to know whether their behavior reflected what
              they were saying. When the analytics showed a pattern, I wanted to understand the story behind it.
            </p>

            <p>For a while, my engineering instinct took over.</p>

            <p>If the answer wasn't obvious, maybe the evidence wasn't good enough.</p>

            <p>Maybe we hadn't interviewed enough users. Maybe we weren't tracking the right events.</p>

            <p>Maybe I had asked leading questions during interviews and introduced bias.</p>

            <p>
              Looking back, I don't think that instinct was wrong. Better interview questions lead to better
              conversations. Better instrumentation leads to better analytics. The quality of our decisions depends on
              the quality of the evidence behind them.
            </p>

            <PullQuote>
              Learning how to collect reliable evidence is one of the most important parts of product discovery.
            </PullQuote>

            <p>What eventually changed wasn't my focus on evidence.</p>

            <p>It was my expectation of what that evidence could do.</p>

            <p>I had been treating research as a way to uncover the right answer.</p>

            <p>Instead, I realized its real purpose was to reduce uncertainty.</p>

            <PullQuote>I wasn't looking for better evidence. I was looking for certainty.</PullQuote>

            <p>That shift changed the questions I started asking.</p>

            <p>
              Instead of wondering whether we had found the right solution, I started asking what uncertainty we were
              actually trying to reduce.
            </p>

            <p>Sometimes the uncertainty was about whether users really had the problem.</p>

            <p>Sometimes it was about whether our data was reliable enough to support a decision.</p>

            <p>Sometimes it was about whether we understood the trade-offs well enough to move forward.</p>

            <p>
              And sometimes, after reducing the uncertainty as much as we reasonably could, the only thing left was to
              make a decision and continue learning once the product was in users' hands.
            </p>

            <p>Looking back, I don't think my software engineering background made product discovery harder.</p>

            <p>
              In many ways, it gave me the curiosity to challenge solutions and the discipline to think critically about
              evidence.
            </p>

            <p>
              What had to change was my expectation that good evidence would eventually remove uncertainty altogether.
            </p>

            <p>It doesn't.</p>

            <p>
              Today, I still care deeply about collecting good evidence. The difference is that I no longer expect it to
              eliminate uncertainty. I expect it to help me make a better decision.
            </p>

            <PullQuote>
              The goal of product discovery isn't to eliminate uncertainty. It's to reduce it enough to make a
              thoughtful decision.
            </PullQuote>

            <p>That, more than any framework, is what has shaped my approach to product discovery.</p>
          </article>
        </Reveal>
      </Section>
    </>
  );
}
