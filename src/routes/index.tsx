import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Gerta Xhepi — Product Manager" },
      {
        name: "description",
        content: "Product Manager building thoughtful digital products across B2B, B2C, SaaS, AI and marketplaces.",
      },
      { property: "og:title", content: "Gerta Xhepi — Product Manager" },
      {
        property: "og:description",
        content: "Product Manager building thoughtful digital products across B2B, B2C, SaaS, AI and marketplaces.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <section className="container-page pt-20 md:pt-36 pb-20 md:pb-28">
      <Reveal>
        <div
          data-reveal-item
          className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground mb-8 flex items-center gap-3"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-50" />
            <span className="relative inline-flex size-1.5 rounded-full bg-foreground" />
          </span>
          Available for PM roles
        </div>

        <h1
          data-reveal-item
          className="text-[44px] sm:text-6xl md:text-7xl lg:text-[112px] font-bold tracking-[-0.04em] leading-[0.95] text-balance"
        >
          Hi, I'm Gerta.
        </h1>

        <p
          data-reveal-item
          className="mt-8 text-2xl md:text-3xl lg:text-[34px] font-medium tracking-tight text-foreground leading-[1.2] max-w-4xl text-balance"
        >
          I build products by first understanding the problems they're trying to solve.
        </p>

        <p data-reveal-item className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          Product Manager with a background in Software Engineering, currently exploring how AI and structured data can
          help people make better decisions.
        </p>

        <div data-reveal-item className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4">
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-1 transition-opacity hover:opacity-60"
          >
            View My Work
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About Me
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
