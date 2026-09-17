import { Link } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export const primaryActionButtonClassName = cn(
  "group inline-flex min-h-[52px] w-fit items-center justify-center gap-3 rounded-[8px]",
  "border-0 bg-foreground px-6 text-base font-semibold text-background shadow-none",
  "transition-colors duration-200 hover:bg-terracotta hover:text-background",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

type PrimaryActionButtonProps = {
  children: ReactNode;
  className?: string;
  ariaLabel: string;
} & (
  | { to: "/work"; href?: never; download?: never }
  | ({ to?: never; href: string } & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "download">)
);

export function PrimaryActionButton({
  children,
  className,
  ariaLabel,
  ...destination
}: PrimaryActionButtonProps) {
  const classes = cn(primaryActionButtonClassName, className);

  if ("to" in destination && destination.to) {
    return (
      <Link to={destination.to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={destination.href}
      download={destination.download}
      className={classes}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}