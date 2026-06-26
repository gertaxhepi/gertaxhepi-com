import { Link, Outlet } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-40 w-full transition-[background-color,backdrop-filter] duration-500 ease-out",
        scrolled
          ? "bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link
          to="/"
          className="text-sm font-bold uppercase tracking-[0.2em]"
        >
          Gerta Xhepi
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-bold text-muted-foreground transition-colors duration-300 hover:text-foreground"
              activeProps={{
                className: "text-sm font-bold text-foreground",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden grid h-10 w-10 place-items-center transition-colors hover:text-foreground text-muted-foreground"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl">
          <nav className="container-page flex flex-col py-4 gap-1">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-1 py-3 text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
                activeProps={{
                  className: "px-1 py-3 text-sm font-bold text-foreground",
                }}
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
    <footer className="mt-40">
      <div className="container-page py-20 grid gap-16 md:grid-cols-3 text-sm">
        <div>
          <div className="text-sm font-bold uppercase tracking-[0.2em]">Gerta Xhepi</div>
          <p className="mt-6 text-muted-foreground max-w-xs leading-relaxed">
            Product Manager working at the intersection of AI, platform and B2B SaaS.
          </p>
        </div>
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            Explore
          </div>
          <ul className="mt-6 space-y-3">
            {navItems.slice(1).map((i) => (
              <li key={i.to}>
                <Link
                  to={i.to}
                  className="text-foreground/85 transition-colors hover:text-foreground"
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
            Elsewhere
          </div>
          <ul className="mt-6 space-y-3">
            <li>
              <a
                href="https://www.linkedin.com/in/gerta-xhepi-94853289/"
                className="transition-colors hover:text-foreground text-foreground/85"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:xhepigerta@gmail.com"
                className="transition-colors hover:text-foreground text-foreground/85"
              >
                xhepigerta@gmail.com
              </a>
            </li>
            <li>
              <span className="text-muted-foreground">Germany</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-page pb-12 flex items-center justify-between text-xs font-mono uppercase tracking-[0.14em] text-muted-foreground">
        <span>© {new Date().getFullYear()} Gerta Xhepi</span>
        <span className="hidden sm:inline">Made in Germany</span>
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
