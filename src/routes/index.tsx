import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const OG_IMAGE = "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/5e5a77b8-fdcf-4df7-92f9-1cada506e97a";
const ACCENT = "#8A5A5A";

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
          sameAs: ["https://www.linkedin.com/in/gerta-xhepi-94853289/"],
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
      className="group block border-t border-border/60 first:border-t-0 py-8 md:py-10 lg:py-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
    >
      <div className="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[auto_1fr_1.5fr_auto] items-start gap-x-4 lg:gap-x-6">
        <span className="row-start-1 col-start-1 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground pt-2 lg:pt-3">
          {number}
        </span>
        <h2
          data-reveal-item
          className="row-start-1 col-start-2 text-3xl md:text-4xl lg:text-[44px] xl:text-[52px] font-semibold tracking-tight leading-[0.95]"
        >
          {title}
        </h2>
        <ArrowUpRight
          className="row-start-1 col-start-3 lg:col-start-4 size-5 text-foreground mt-2 lg:mt-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          strokeWidth={1.5}
        />
        <div className="col-start-1 col-span-3 lg:col-start-3 lg:col-span-1 lg:row-start-1 mt-5 lg:mt-0 space-y-2">
          <p data-reveal-item className="text-base md:text-lg text-foreground leading-snug">
            {description}
          </p>
          <p data-reveal-item className="text-sm text-muted-foreground">
            {supportingText}
          </p>
          <span
            data-reveal-item
            className="inline-block text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground border-b border-foreground pb-0.5 pt-1 transition-colors group-hover:text-foreground"
          >
            {cta}
          </span>
        </div>
      </div>
    </Link>
  );
}

function Home() {
  return (
    <section className="container-page min-h-[calc(100vh-72px)] flex flex-col">
      <Reveal className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 xl:gap-16 py-12 md:py-16 lg:py-14">
        {/* Left column */}
        <div className="flex flex-col justify-between min-w-0">
          <div className="space-y-8 md:space-y-10">
            <h1
              data-reveal-item
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[80px] xl:text-[96px] 2xl:text-[112px] font-bold tracking-[-0.04em] leading-[0.92] text-balance"
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
              className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              I’m Gerta, a Product Manager with an engineering background. I work across B2C and
              B2B SaaS, marketplaces, structured data and AI.
            </p>

            <Link
              data-reveal-item
              to="/about"
              className="group inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground border-b border-foreground pb-1 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-sm"
            >
              Read more about me
              <ArrowUpRight
                className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.5}
              />
            </Link>
          </div>

          <div
            data-reveal-item
            className="hidden lg:block text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mt-10"
          >
            Based in Germany
          </div>
        </div>

        {/* Right column */}
        <div className="flex flex-col justify-between min-w-0">
          <div className="flex flex-col justify-center flex-1">
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

          <div
            data-reveal-item
            className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground text-left lg:text-right mt-10"
          >
            Open to remote opportunities across Europe
          </div>
        </div>
      </Reveal>

      {/* Mobile bottom labels */}
      <div className="lg:hidden flex items-center justify-between pb-8 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
        <span>Based in Germany</span>
        <span className="text-right">Open to remote opportunities across Europe</span>
      </div>
    </section>
  );
}
