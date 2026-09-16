import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Github, Linkedin } from "lucide-react";
import { Reveal } from "@/components/Reveal";


const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/5e5a77b8-fdcf-4df7-92f9-1cada506e97a";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Product Manager Portfolio | AI, Marketplace & SaaS" },
      {
        name: "description",
        content: "Senior Product Manager with experience building AI, marketplace and workflow products. Product case studies, writing and resume.",
      },
      { property: "og:title", content: "Product Manager Portfolio | AI, Marketplace & SaaS" },
      {
        property: "og:description",
        content: "Senior Product Manager with experience building AI, marketplace and workflow products. Product case studies, writing and resume.",
      },
      { property: "og:url", content: "https://gertaproduct.com/" },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: "https://gertaproduct.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Gerta Xhepi",
          jobTitle: "Product Manager",
          description: "Product Manager specializing in AI, marketplaces and workflow products.",
          url: "https://gertaproduct.com",
          address: { "@type": "PostalAddress", addressCountry: "DE" },
          sameAs: [
            "https://www.linkedin.com/in/gerta-xhepi-94853289/",
            "https://github.com/gertaxhepi",
          ],
        }),

      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Gerta Xhepi — Product Manager",
          url: "https://gertaproduct.com",
          description: "Portfolio of Gerta Xhepi, Product Manager specializing in AI, marketplaces and workflow products.",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://gertaproduct.com/" },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

type NavSectionProps = {
  number: string;
  title: string;
  description: string;
  supportingText: string;
  cta: string;
  to: "/work" | "/resume" | "/writing";
};

function NavSection({ number, title, description, supportingText, cta, to }: NavSectionProps) {
  return (
    <Link
      to={to}
      className="hp-row group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
    >
      <span className="hp-cell-num text-[11px] font-mono uppercase tracking-[0.18em] text-terracotta">
        {number}
      </span>
      <h2
        data-reveal-item
        className="hp-cell-title text-3xl md:text-4xl lg:text-[clamp(1.5rem,2.1vw,2.25rem)] font-semibold tracking-tight leading-[1.05]"
      >
        {title}
      </h2>
      <div className="hp-cell-body space-y-2">
        <p data-reveal-item className="text-base md:text-lg lg:text-[clamp(0.875rem,1.9vh,1.125rem)] text-foreground leading-snug">
          {description}
        </p>
        <p data-reveal-item className="text-sm text-muted-foreground">
          {supportingText}
        </p>
        <span
          data-reveal-item
          className="relative inline-block text-[11px] font-mono uppercase tracking-[0.18em] text-terracotta pb-0.5 pt-1"
        >
          {cta}
        </span>
      </div>
      <ArrowUpRight
        className="hp-cell-arrow size-5 text-foreground transition-transform duration-200 ease-out group-hover:translate-x-1 group-hover:-translate-y-1"
        strokeWidth={1.5}
      />
    </Link>
  );
}

function Home() {
  return (
    <section className="hp-page container-page flex flex-col">
      <Reveal className="hp-shell flex-1 min-h-0">
        {/* Left side — hero */}
        <div className="hp-left">
          <div className="hp-hero">
            <div className="space-y-7 md:space-y-9 lg:space-y-[clamp(1rem,3.2vh,2.5rem)]">
              <h1
                data-reveal-item
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[clamp(3rem,8.4vh,7rem)] font-bold tracking-[-0.04em] leading-[0.92] text-balance"
              >
                From building
                <br />
                software
                <br />
                to shaping
                <br />
                products.
              </h1>

              <p
                data-reveal-item
                className="text-lg md:text-xl lg:text-[clamp(0.95rem,2.1vh,1.25rem)] text-muted-foreground max-w-xl leading-relaxed"
              >
                I’m Gerta, a Product Manager with an engineering background. I work across B2C and
                B2B SaaS, marketplaces, structured data and AI.
              </p>

              <div data-reveal-item>
                <Link
                  to="/about"
                  className="group inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-terracotta border-b border-foreground pb-1 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
                >
                  Read more about me
                  <ArrowUpRight
                    className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={1.5}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Right side — three clickable section rows */}
        <div className="hp-right">
          <NavSection
            number="01"
            title="Projects"
            description="Product Manager since 2021"
            supportingText="2021–2024 XING · 2024–2025 Jacando · Now PeakProfile founder"
            cta="View my work"
            to="/work"
          />
          <NavSection
            number="02"
            title="Resume"
            description="Learn more about my career history"
            supportingText="Experience · Education · Certificates"
            cta="View my resume"
            to="/resume"
          />
          <NavSection
            number="03"
            title="Writing"
            description="Thoughts that shape my thinking"
            supportingText="Product discovery · Data · AI"
            cta="Read my writing"
            to="/writing"
          />
        </div>
      </Reveal>


      {/* Homepage footer — neutral, integrated with the page */}
      <footer className="bg-background border-t border-border/40">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-5 lg:py-[clamp(0.5rem,2vh,1.25rem)] text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          <span className="min-w-0">Based in Germany · Open to remote opportunities</span>
          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/gerta-xhepi-94853289/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Gerta Xhepi on LinkedIn"
              className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-foreground"
            >
              <Linkedin className="size-[18px] shrink-0 text-foreground" strokeWidth={1.75} aria-hidden="true" />
              <span>LinkedIn</span>
              <ExternalLink className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href="https://github.com/gertaxhepi"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Gerta Xhepi on GitHub"
              className="group inline-flex items-center gap-2 transition-colors duration-300 hover:text-foreground"
            >
              <Github className="size-[18px] shrink-0 text-foreground" strokeWidth={1.75} aria-hidden="true" />
              <span>GitHub</span>
              <ExternalLink className="size-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}

