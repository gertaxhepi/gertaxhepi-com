import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ExternalLink, Github, Linkedin } from "lucide-react";
import { PrimaryActionButton } from "@/components/PrimaryActionButton";


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
      { property: "og:type", content: "website" },
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

function Home() {
  return (
    <section className="home-intro-page container-page">
      <div className="home-intro-hero">
        <h1 className="home-intro-headline home-intro-reveal">
          I’m a Product<span className="home-desktop-break"><br /></span>{" "}
          Manager who turns<span className="home-desktop-break"><br /></span>{" "}
          complex systems<span className="home-desktop-break"><br /></span>{" "}
          into products people<span className="home-desktop-break"><br /></span>{" "}
          understand and use.
        </h1>
        <div className="home-intro-action home-intro-reveal">
          <PrimaryActionButton to="/work" ariaLabel="View selected work">
            <span>View selected work</span>
            <ArrowUpRight
              className="size-5 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-[3px] group-hover:-translate-y-[3px]"
              aria-hidden="true"
            />
          </PrimaryActionButton>
        </div>
        <aside className="home-sticky-note home-intro-reveal" aria-label="Currently on my desk">
          <p className="home-sticky-note-title">Currently on my desk</p>
          <p className="home-sticky-note-copy">
            Building PeakProfile<br />
            Testing AI-assisted readiness<br />
            Learning from guides and climbers
          </p>
          <a
            href="/case-studies/peakprofile"
            className="home-sticky-note-link"
          >
            View project ↗
          </a>
        </aside>
      </div>

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

