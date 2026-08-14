import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { AnimatedSmiley } from "@/components/AnimatedSmiley";


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

function Home() {
  return (
    <section className="container-page pt-16 md:pt-28 2xl:pt-24 pb-20 md:pb-28">
      <Reveal>
        <div
          data-reveal-item
          className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-8 flex items-center gap-3"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-50" />
            <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
          </span>
          AI Product Manager • Based in Germany • Open to remote opportunities across Europe
        </div>

        <h1
          data-reveal-item
          className="text-[44px] sm:text-6xl md:text-7xl lg:text-[112px] 2xl:text-[124px] font-bold tracking-[-0.04em] leading-[0.95] text-balance"
        >
          Hi, I'm Gerta <AnimatedSmiley />

        </h1>

        <p
          data-reveal-item
          className="mt-8 text-2xl md:text-3xl lg:text-[34px] 2xl:text-[38px] font-medium tracking-tight text-foreground leading-[1.2] max-w-4xl 2xl:max-w-[56rem] text-balance"
        >
          I build products where technology, data and customer needs come together.
        </p>

        <p
          data-reveal-item
          className="mt-6 text-lg md:text-xl 2xl:text-[21px] text-muted-foreground max-w-2xl 2xl:max-w-[40rem] leading-relaxed"
        >
          This is a collection of my work, my journey into Product Management, and a few ideas that continue to shape
          how I think.
        </p>

        <div data-reveal-item className="mt-10 2xl:mt-8 flex flex-wrap items-center gap-x-10 gap-y-4">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
          >
            Explore my work
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About Me
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/writing"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Read my writing
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/resume"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            View my resume
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
