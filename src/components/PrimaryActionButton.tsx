import type { AnchorHTMLAttributes, ReactNode } from "react";
import { PortfolioButton } from "@/components/PortfolioButton";

type SharedProps = {
  children: ReactNode;
  className?: string;
  ariaLabel: string;
};

type PrimaryActionButtonProps =
  | (SharedProps & { to: string; href?: never; download?: never })
  | (SharedProps & { to?: never; href: string } & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "href" | "aria-label">);

export function PrimaryActionButton({
  children,
  className,
  ariaLabel,
  ...destination
}: PrimaryActionButtonProps) {
  if ("href" in destination && destination.href) {
    const { href, ...anchorProps } = destination;
    return (
      <PortfolioButton
        href={href}
        {...anchorProps}
        variant="primary"
        className={className}
        ariaLabel={ariaLabel}
      >
        {children}
      </PortfolioButton>
    );
  }

  return (
    <PortfolioButton
      to={destination.to}
      variant="primary"
      className={className}
      ariaLabel={ariaLabel}
    >
      {children}
    </PortfolioButton>
  );
}