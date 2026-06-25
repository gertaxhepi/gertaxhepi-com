import { type ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={align === "center" ? "text-center max-w-3xl mx-auto" : "max-w-3xl"}
    >
      {eyebrow && (
        <div
          data-reveal-item
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground font-medium mb-5"
        >
          <span className="size-1 rounded-full bg-primary/70" />
          {eyebrow}
        </div>
      )}
      <h2
        data-reveal-item
        className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.05]"
      >
        {title}
      </h2>
      {description && (
        <p
          data-reveal-item
          className="mt-6 text-lg md:text-xl text-muted-foreground text-balance max-w-2xl"
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

export function Card({
  children,
  className = "",
  interactive = true,
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div
      data-reveal-item
      className={[
        "group/card relative rounded-2xl border border-border/80 bg-card p-7 md:p-8",
        "transition-[transform,box-shadow,border-color] duration-500 ease-out will-change-transform",
        interactive
          ? "hover:-translate-y-1 hover:scale-[1.005] hover:border-foreground/15 hover:shadow-floating"
          : "",
        className,
      ].join(" ")}
    >
      {/* Top hairline highlight */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent opacity-0 transition-opacity duration-500 group-hover/card:opacity-100"
      />
      {children}
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
  spacing = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  spacing?: "default" | "tight" | "loose" | "none";
}) {
  const pad =
    spacing === "none"
      ? ""
      : spacing === "tight"
      ? "py-16 md:py-20"
      : spacing === "loose"
      ? "py-28 md:py-40"
      : "py-24 md:py-32";
  return (
    <Reveal as="section" className={`container-page ${pad} ${className}`}>
      <div id={id} className="scroll-mt-24">
        {children}
      </div>
    </Reveal>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/80 bg-subtle/70 backdrop-blur-sm px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground">
      {children}
    </span>
  );
}
