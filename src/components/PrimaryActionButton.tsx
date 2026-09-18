import type { ReactNode } from "react";
import { PortfolioButton } from "@/components/PortfolioButton";

type SharedProps = {
  children: ReactNode;
  className?: string;
  ariaLabel: string;
};

type PrimaryActionButtonProps = SharedProps & { to: string };

export function PrimaryActionButton({
  children,
  className,
  ariaLabel,
  to,
}: PrimaryActionButtonProps) {
  return (
    <PortfolioButton
      to={to}
      variant="primary"
      className={className}
      ariaLabel={ariaLabel}
    >
      {children}
    </PortfolioButton>
  );
}