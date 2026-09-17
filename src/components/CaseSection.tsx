import type { ReactNode } from "react";

/**
 * CaseSection — numbered, divider-free case-study section.
 * Desktop: faded dusty-red number left, content right. Mobile: stacked.
 */
export function CaseSection({
  number,
  title,
  children,
  soft = false,
}: {
  number: string;
  title: string;
  children: ReactNode;
  soft?: boolean;
}) {
  return (
    <section
      data-reveal-item
      className={
        soft
          ? "case-study-section case-study-section-soft rounded-[28px] bg-[var(--terracotta)]/[0.06] px-6 md:px-14"
          : "case-study-section"
      }
    >
      <div className="case-study-section-grid">
        <div className="case-study-section-number">
          {number}
        </div>
        <div className="min-w-0">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-balance">
            {title}
          </h2>
          <div className="mt-6 md:mt-8 max-w-2xl space-y-5">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function CaseText({ children }: { children: ReactNode }) {
  return (
    <p className="text-base md:text-lg text-foreground/90 leading-relaxed">{children}</p>
  );
}
