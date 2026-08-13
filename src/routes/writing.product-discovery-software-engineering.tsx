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
            Essay 02 · August 2026 · 6 min read
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
              learning new frameworks and techniques. Looking back, the frameworks were the easy part. What really shaped
              my approach was learning how to make decisions when there was never enough information to be completely
              certain.
            </p>

            <p>
              One thing that made the transition feel natural was that I had always enjoyed challenging solutions. Even
              as a software engineer, I was rarely the person who simply implemented what landed in my backlog. I wanted
              to understand why we were building something before thinking about how to build it. That curiosity was one
              of the reasons I moved into product management.
            </p>

            <p>What surprised me was how different it feels when the problem belongs to your users instead of your colleagues.</p>

            <p>
              As an engineer, most of my stakeholders were internal. Even when I worked on our Design System, our users
              were developers who shared similar context and whose needs were easier to validate.
            </p>

            <p>Product discovery felt different.</p>

            <p>
              Users don't always describe their problems clearly. What they say doesn't always match what they do, and
              unlike software engineering, there isn't a compiler waiting to tell you whether your thinking is correct.
            </p>

            <PullQuote>
              The frameworks were the easy part.
              <br />
              The difficult part was deciding what to believe when every piece of evidence seemed to tell a slightly different story.
            </PullQuote>

            <p>While working on Salary Transparency at XING, I experienced this firsthand.</p>

            <p>
              We were building a feature that displayed salary information on job postings to help job seekers make better informed decisions.
            </p>

            <p>The goal sounded simple.</p>

            <p>The questions weren't.</p>

            <p>Should we show a predicted salary range?</p>

            <p>Should we communicate how confident the prediction was?</p>

            <p>Would users trust an estimate?</p>

            <p>Was an estimated range better than showing nothing at all?</p>

            <p>There were no obvious answers.</p>

            <p>So we started learning.</p>

            <p>
              We interviewed job seekers. We worked closely with our Data Scientists to understand the reliability of our
              salary predictions. We analyzed user behavior, looked at competitors, and challenged different ideas across
              the team.
            </p>

            <p>I found myself constantly moving between customer interviews and dashboards.</p>

            <p>
              When users told us salary transparency mattered, I wanted to know whether their behavior reflected what
              they were saying. When the analytics showed a pattern, I wanted to understand the story behind it.
            </p>

            <p>For a while, my engineering instinct took over.</p>

            <p>If the answer wasn't obvious, maybe the evidence wasn't good enough.</p>

            <p>Maybe we needed better interviews.</p>

            <p>Better analytics.</p>

            <p>Better questions.</p>

            <p>
              Looking back, I don't think that instinct was wrong. Better evidence leads to better conversations, better
              insights, and ultimately better decisions.
            </p>

            <PullQuote>
              Learning how to collect reliable evidence is one of the most important parts of product discovery.
            </PullQuote>

            <p>What changed wasn't my focus on evidence.</p>

            <p>It was my expectation of what that evidence could do.</p>

            <p>I had been treating research as a way to uncover the right answer.</p>

            <p>Then I realized what I was really searching for.</p>

            <PullQuote>
              I wasn't looking for better evidence.
              <br />
              I was looking for certainty.
            </PullQuote>

            <p>That shift completely changed how I approached discovery.</p>

            <p>
              Instead of asking whether we had found the right solution, I started asking what uncertainty we were
              actually trying to reduce.
            </p>

            <p>Sometimes the uncertainty was about whether users really had the problem.</p>

            <p>Sometimes it was about whether our data was reliable enough.</p>

            <p>Sometimes it was about understanding the trade-offs between different solutions.</p>

            <p>
              Once we had reduced the biggest uncertainty, the next step wasn't more research. It was making a decision
              and continuing to learn after shipping.
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
              The goal of product discovery isn't to eliminate uncertainty.
              <br />
              It's to reduce it enough to make a thoughtful decision.
            </PullQuote>
          </article>
        </Reveal>
      </Section>
    </>
  );
}
