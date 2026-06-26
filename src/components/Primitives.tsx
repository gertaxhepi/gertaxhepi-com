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
          className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground mb-8"
        >
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
          className="mt-8 text-lg md:text-xl text-muted-foreground text-balance max-w-2xl leading-relaxed"
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

/**
 * Card — borderless editorial content block.
 * No borders, no shadows, no background. Just spacing + reveal hook.
 */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
}) {
  return (
    <div data-reveal-item className={["relative", className].join(" ")}>
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
      ? "py-20 md:py-28"
      : spacing === "loose"
      ? "py-32 md:py-48"
      : "py-28 md:py-40";
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
    <span className="inline-flex items-center text-xs font-mono uppercase tracking-[0.12em] text-muted-foreground">
      {children}
    </span>
  );
}
