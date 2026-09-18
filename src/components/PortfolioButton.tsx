import { Link } from "@tanstack/react-router";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type PortfolioButtonVariant = "primary" | "secondary" | "tertiary";

const baseClassName = cn(
  "group inline-flex w-fit items-center justify-center font-semibold shadow-none",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2 focus-visible:ring-offset-background",
);

const variantClassNames: Record<PortfolioButtonVariant, string> = {
  primary: cn(
    "min-h-[52px] gap-3 rounded-[14px] border-0 bg-foreground px-6 text-base text-background",
    "transition-colors duration-200",
  ),
  secondary: cn(
    "portfolio-button-secondary min-h-[52px] gap-3 rounded-[14px] border-0 bg-secondary px-6 text-base text-secondary-foreground",
    "transition-colors duration-200",
  ),
  tertiary: cn(
    "gap-2 rounded-none border-0 bg-transparent px-0 py-2 text-base text-foreground",
  ),
};

type SharedProps = {
  children: ReactNode;
  className?: string;
  ariaLabel: string;
  variant?: PortfolioButtonVariant;
};

type PortfolioButtonProps =
  | (SharedProps & { to: string; href?: never; download?: never })
  | (SharedProps & { to?: never; href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href" | "aria-label">);

export function PortfolioButton({
  children,
  className,
  ariaLabel,
  variant = "primary",
  ...destination
}: PortfolioButtonProps) {
  const classes = cn(baseClassName, variantClassNames[variant], className);

  if ("to" in destination && destination.to) {
    return (
      <Link to={destination.to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  const { href, ...anchorProps } = destination;
  return (
    <a href={href} {...anchorProps} className={classes} aria-label={ariaLabel}>
      {children}
    </a>
  );
}