import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Primitives";

/** Shared end-of-case-study CTA linking back to the Work page. */
export function AllProjectsCTA() {
  return (
    <Section spacing="tight">
      <Link to="/work" aria-label="View all projects" className="group block py-12 md:py-16">
        <div className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
          Back to Work
        </div>
        <div className="mt-6 flex items-start justify-between gap-8">
          <div className="text-3xl md:text-5xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[var(--terracotta)]">
            All projects
          </div>
          <ArrowUpRight className="size-6 shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--terracotta)]" />
        </div>
      </Link>
    </Section>
  );
}
