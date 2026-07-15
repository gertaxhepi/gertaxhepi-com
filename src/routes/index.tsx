import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gerta Xhepi — PM Portfolio & Product Case Studies" },
      {
        name: "description",
        content: "Product Manager building thoughtful digital products across B2B, B2C, SaaS, AI and marketplaces.",
      },
      { property: "og:title", content: "Gerta Xhepi — Product Manager Portfolio" },
      {
        property: "og:description",
        content: "Product Manager building thoughtful digital products across B2B, B2C, SaaS, AI and marketplaces.",
      },
      { property: "og:url", content: "https://gertaproduct.com/" },
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
          url: "https://gertaproduct.com/",
          sameAs: ["https://www.linkedin.com/in/gerta-xhepi-94853289/"],
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
          Based in Germany · Open to Remote Product Opportunities Across Europe
        </div>

        <h1
          data-reveal-item
          className="text-[44px] sm:text-6xl md:text-7xl lg:text-[112px] 2xl:text-[124px] font-bold tracking-[-0.04em] leading-[0.95] text-balance"
        >
          Hi, I'm Gerta{" "}
          <svg
            className="hero-smiley inline-block align-baseline"
            viewBox="0 0 160 160"
            role="img"
            aria-label="Smiling face"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "0.85em", height: "0.85em" }}
          >
            <circle
              cx="80"
              cy="80"
              r="66"
              fill="none"
              stroke="currentColor"
              strokeWidth="12"
            />
            <circle
              className="hero-smiley-eye"
              cx="58"
              cy="60"
              r="11"
              fill="currentColor"
            />
            <circle
              className="hero-smiley-eye"
              cx="102"
              cy="60"
              r="11"
              fill="currentColor"
            />
            <path
              d="M44 88 C44 116 62 130 80 130 C98 130 116 116 116 88"
              fill="currentColor"
            />
            <path
              d="M59 88 C60 101 68 107 80 107 C92 107 100 101 101 88"
              fill="var(--background)"
            />
          </svg>
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
        </div>
      </Reveal>
    </section>
  );
}
