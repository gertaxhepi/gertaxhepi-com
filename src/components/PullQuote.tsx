import { type ReactNode } from "react";

export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <p className="my-28 md:my-32 text-center text-foreground font-semibold text-3xl md:text-[2.125rem] leading-snug tracking-tight max-w-[36rem] mx-auto">
      {children}
    </p>
  );
}
