import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Crumb = {
  label: string;
  to?: string;
};

export function Breadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-[11px] font-mono uppercase tracking-[0.22em] text-muted-foreground"
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        const node: ReactNode = item.to ? (
          <Link
            to={item.to}
            className="transition-opacity hover:opacity-60 hover:text-foreground"
          >
            {item.label}
          </Link>
        ) : (
          <span>{item.label}</span>
        );
        return (
          <span key={i}>
            {node}
            {!isLast && <span className="mx-2 opacity-50">/</span>}
          </span>
        );
      })}
    </nav>
  );
}
