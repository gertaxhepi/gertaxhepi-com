import { Link, Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/product-thinking", label: "Product Thinking" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-medium tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground text-xs font-semibold">GX</span>
          <span className="text-sm">Gerta Xhepi</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "rounded-md px-3 py-1.5 text-sm text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden grid h-9 w-9 place-items-center rounded-md border border-border"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-page flex flex-col py-2">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground"
                activeProps={{ className: "rounded-md px-3 py-2.5 text-sm text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="container-page py-12 grid gap-8 md:grid-cols-3 text-sm">
        <div>
          <div className="font-medium tracking-tight">Gerta Xhepi</div>
          <p className="mt-2 text-muted-foreground max-w-xs">
            Product Manager working at the intersection of AI, platform and B2B SaaS.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Explore</div>
          <ul className="mt-3 space-y-2">
            {navItems.slice(1).map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="text-foreground/80 hover:text-foreground">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-muted-foreground">Elsewhere</div>
          <ul className="mt-3 space-y-2">
            <li><a href="https://www.linkedin.com/" className="hover:text-foreground" target="_blank" rel="noreferrer">LinkedIn</a></li>
            <li><a href="mailto:hello@gertaxhepi.com" className="hover:text-foreground">Email</a></li>
            <li><span className="text-muted-foreground">Germany</span></li>
          </ul>
        </div>
      </div>
      <div className="container-page pb-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Gerta Xhepi. Crafted with care.
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function SiteLayout() {
  return (
    <PageShell>
      <Outlet />
    </PageShell>
  );
}
