import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/Primitives";
import { Reveal } from "@/components/Reveal";
import { DownloadResumeButton } from "@/components/DownloadResumeButton";
import { PortfolioButton } from "@/components/PortfolioButton";

const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/5e5a77b8-fdcf-4df7-92f9-1cada506e97a";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Career | Gerta Xhepi" },
      { name: "description", content: "Gerta Xhepi’s career journey from software engineer to product manager and founder." },
      { property: "og:title", content: "Career | Gerta Xhepi" },
      { property: "og:description", content: "A career journey across software engineering, product management, and AI product building." },
      { property: "og:url", content: "https://gertaproduct.com/resume" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://gertaproduct.com/resume" }],
  }),
  component: Career,
});

const linkedinUrl = "https://www.linkedin.com/in/gerta-xhepi-94853289/";
const githubUrl = "https://github.com/gertaxhepi";

function ExternalTextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 py-2 font-medium text-foreground outline-none transition-colors hover:text-terracotta focus-visible:text-terracotta">
      <span>{children}</span>
      <ArrowUpRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" aria-hidden="true" />
    </a>
  );
}

function TimelineMarker() {
  return <span className="absolute left-0 top-[0.55rem] hidden size-2 -translate-x-1/2 rounded-full bg-terracotta md:block" aria-hidden="true" />;
}

function Career() {
  return (
    <>
      <Section className="pb-10 pt-12 md:pb-14 md:pt-20" spacing="none">
        <Reveal>
          <p data-reveal-item className="font-mono text-[11px] uppercase tracking-[0.22em] text-terracotta">Career</p>
          <h1 data-reveal-item className="mt-5 max-w-5xl text-[clamp(2.75rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.045em] text-foreground">
            From software engineer to product builder
          </h1>
          <p data-reveal-item className="mt-7 max-w-3xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            I spent seven years building software before moving into product management. Today, I work where technology, product strategy and complex user problems meet.
          </p>
          <div data-reveal-item className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
            <DownloadResumeButton />
            <ExternalTextLink href={linkedinUrl}>LinkedIn</ExternalTextLink>
            <ExternalTextLink href={githubUrl}>GitHub</ExternalTextLink>
          </div>
        </Reveal>
      </Section>

      <Section className="py-0" spacing="none">
        <Reveal>
          <div className="border-t border-border">
            <p data-reveal-item className="pb-5 pt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Career journey</p>

            <article data-reveal-item className="grid border-b border-border py-8 md:grid-cols-[150px_minmax(0,1fr)] md:py-10">
              <div className="pb-4 text-sm tabular-nums text-muted-foreground md:pb-0">2025 — Now</div>
              <div className="relative md:border-l md:border-border md:pl-12">
                <TimelineMarker />
                <h2 className="text-2xl font-semibold tracking-tight">PeakProfile</h2>
                <p className="mt-1 text-lg text-foreground/85">Founder / Product Builder</p>
                <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Building an AI-assisted decision-support product for mountaineers and guides.</p>
                <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed text-foreground/80 marker:text-terracotta">
                  <li>Designed a hybrid rules-and-LLM readiness model</li>
                  <li>Validated the concept with climbers and mountain guides</li>
                  <li>Defined the B2B guide and B2C mountaineer experience</li>
                </ul>
                <Link to="/case-studies/peakprofile" className="group mt-4 inline-flex items-center gap-2 font-medium text-terracotta outline-none focus-visible:underline">
                  View project
                  <ArrowUpRight className="size-4 transition-transform duration-200 ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" aria-hidden="true" />
                </Link>
              </div>
            </article>

            <article data-reveal-item className="grid border-b border-border py-8 md:grid-cols-[150px_minmax(0,1fr)] md:py-10">
              <div className="pb-4 text-sm tabular-nums text-muted-foreground md:pb-0">2024 — 2025</div>
              <div className="relative md:border-l md:border-border md:pl-12">
                <TimelineMarker />
                <h2 className="text-2xl font-semibold tracking-tight">jacando AG</h2>
                <p className="mt-1 text-lg text-foreground/85">Product Manager</p>
                <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Led enterprise workflow products from discovery through launch.</p>
                <ul className="mt-4 max-w-3xl list-disc space-y-2 pl-5 leading-relaxed text-foreground/80 marker:text-terracotta">
                  <li>Shipped an electronic-signature MVP in under two months</li>
                  <li>Reduced process time by 20%</li>
                  <li>Supported more than 200 customers</li>
                </ul>
              </div>
            </article>

            <article data-reveal-item className="grid border-b border-border py-8 md:grid-cols-[150px_minmax(0,1fr)] md:py-10">
              <div className="pb-4 text-sm tabular-nums text-muted-foreground md:pb-0">2017 — 2024</div>
              <div className="relative md:border-l md:border-border md:pl-12">
                <TimelineMarker />
                <h2 className="text-2xl font-semibold tracking-tight">New Work SE · XING / onlyfy</h2>
                <div className="mt-7 border-l border-border pl-7">
                  <div className="relative">
                    <span className="absolute -left-[1.97rem] top-2 size-2 rounded-full border border-terracotta bg-background" aria-hidden="true" />
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="text-lg font-semibold">Product Manager</h3>
                      <span className="text-sm tabular-nums text-muted-foreground">2021 — 2024</span>
                    </div>
                    <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-foreground/80 marker:text-terracotta">
                      <li>Salary transparency: −28% estimation error, 94% coverage and +11% applications</li>
                      <li>Notifications: +40% open rate</li>
                      <li>Structured job data and B2B talent-pool products</li>
                    </ul>
                  </div>
                  <div className="relative mt-8">
                    <span className="absolute -left-[1.97rem] top-2 size-2 rounded-full border border-terracotta bg-background" aria-hidden="true" />
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="text-lg font-semibold">Software Engineer</h3>
                      <span className="text-sm tabular-nums text-muted-foreground">2017 — 2021</span>
                    </div>
                    <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-foreground/80 marker:text-terracotta">
                      <li>Built platform and frontend products</li>
                      <li>Contributed to the design system used by more than 150 engineers</li>
                      <li>Developed the technical foundation that later shaped my PM approach</li>
                    </ul>
                  </div>
                </div>
              </div>
            </article>

            <article data-reveal-item className="grid border-b border-border py-8 md:grid-cols-[150px_minmax(0,1fr)] md:py-10">
              <div className="pb-4 text-sm tabular-nums text-muted-foreground md:pb-0">2013 — 2017</div>
              <div className="relative md:border-l md:border-border md:pl-12">
                <TimelineMarker />
                <h2 className="text-xl font-semibold tracking-tight">Microsoft &amp; early-stage products</h2>
                <p className="mt-1 text-base text-foreground/85">Software Engineer &amp; Founder</p>
                <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">Worked across established companies and early-stage products, including Microsoft and my own consumer product.</p>
              </div>
            </article>
          </div>
        </Reveal>
      </Section>

      <Section className="py-0" spacing="none">
        <Reveal>
          <div data-reveal-item className="border-b border-border py-9 md:py-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Capabilities</p>
            <div className="mt-6 grid gap-7 md:grid-cols-3 md:gap-0">
              <div className="md:pr-10"><h2 className="font-semibold">Product strategy</h2><p className="mt-2 leading-relaxed text-muted-foreground">Discovery, prioritisation, roadmaps and launch</p></div>
              <div className="border-t border-border pt-7 md:border-l md:border-t-0 md:px-10 md:pt-0"><h2 className="font-semibold">Technical products</h2><p className="mt-2 leading-relaxed text-muted-foreground">APIs, platforms, structured data and AI workflows</p></div>
              <div className="border-t border-border pt-7 md:border-l md:border-t-0 md:pl-10 md:pt-0"><h2 className="font-semibold">Product execution</h2><p className="mt-2 leading-relaxed text-muted-foreground">Analytics, experimentation and cross-functional delivery</p></div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="py-0" spacing="none">
        <Reveal>
          <div data-reveal-item className="border-b border-border py-9 md:py-12">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Education</p>
            <div className="mt-6 space-y-5">
              <div className="grid gap-1 md:grid-cols-[150px_220px_1fr] md:gap-8"><span className="text-sm tabular-nums text-muted-foreground">2020 — 2022</span><strong>MBA</strong><span className="text-muted-foreground">ThePowerMBA</span></div>
              <div className="grid gap-1 md:grid-cols-[150px_220px_1fr] md:gap-8"><span className="text-sm tabular-nums text-muted-foreground">2011 — 2014</span><strong>Computer Science</strong><span className="text-muted-foreground">Politehnica University of Bucharest</span></div>
            </div>
          </div>
          <div data-reveal-item className="grid border-b border-border py-7 md:grid-cols-[200px_1fr] md:gap-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Selected learning</p>
            <p className="mt-4 leading-relaxed text-foreground/80 md:mt-0">AI Product Management <span className="mx-2 text-border">·</span> Product Analytics <span className="mx-2 text-border">·</span> Product Strategy <span className="mx-2 text-border">·</span> Google Project Management</p>
          </div>
        </Reveal>
      </Section>

      <Section className="pb-16 pt-12 md:pb-24 md:pt-20" spacing="none">
        <Reveal>
          <p data-reveal-item className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Next steps</p>
          <h2 data-reveal-item className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">Want the complete version?</h2>
          <p data-reveal-item className="mt-4 text-lg text-muted-foreground">View the full résumé or get in touch.</p>
          <div data-reveal-item className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
            <DownloadResumeButton />
            <PortfolioButton href="mailto:xhepigerta@gmail.com?subject=Let%27s%20talk" variant="tertiary" ariaLabel="Email Gerta Xhepi">
              <span>Let’s talk</span><ArrowUpRight className="size-4" aria-hidden="true" />
            </PortfolioButton>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
