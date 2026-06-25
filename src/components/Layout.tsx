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
        "sticky top-0 z-40 w-full transition-[background-color,backdrop-filter,border-color,box-shadow] duration-500 ease-out",
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55 shadow-[0_1px_0_0_rgb(15_15_25/0.02),0_8px_24px_-20px_rgb(15_15_25/0.15)]"
          : "border-b border-transparent bg-transparent",
      ].join(" ")}
    >
      <div className="container-page flex h-[68px] items-center justify-between">
        <Link
          to="/"
          className="group flex items-center gap-2.5 font-medium tracking-tight"
        >
          <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background text-[11px] font-semibold tracking-tight transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-[1.04]">
            GX
            <span className="pointer-events-none absolute inset-0 rounded-lg ring-1 ring-inset ring-white/10" />
          </span>
          <span className="text-sm">Gerta Xhepi</span>
        </Link>

        <nav className="hidden md:flex items-center gap-0.5 rounded-full border border-border/0 px-1 py-1 transition-colors duration-500">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
              activeProps={{
                className:
                  "relative rounded-full px-3.5 py-1.5 text-sm text-foreground bg-foreground/[0.04]",
              }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-border/80 bg-background/60 backdrop-blur transition-colors hover:bg-accent/40"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/90 backdrop-blur-xl">
          <nav className="container-page flex flex-col py-2">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground hover:bg-accent/40"
                activeProps={{
                  className:
                    "rounded-md px-3 py-3 text-sm text-foreground bg-accent/40",
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
    <footer className="relative mt-32 border-t border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-foreground/15 to-transparent"
      />
      <div className="container-page py-16 grid gap-10 md:grid-cols-3 text-sm">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-foreground text-background text-[11px] font-semibold">
              GX
            </span>
            <span className="font-medium tracking-tight">Gerta Xhepi</span>
          </div>
          <p className="mt-4 text-muted-foreground max-w-xs leading-relaxed">
            Product Manager working at the intersection of AI, platform and B2B SaaS.
          </p>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Explore
          </div>
          <ul className="mt-4 space-y-2.5">
            {navItems.slice(1).map((i) => (
              <li key={i.to}>
                <Link
                  to={i.to}
                  className="text-foreground/80 transition-colors hover:text-foreground"
                >
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Elsewhere
          </div>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href="https://www.linkedin.com/in/gertaxhepi"
                className="transition-colors hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:xhepigerta@gmail.com"
                className="transition-colors hover:text-foreground"
              >
                Email
              </a>
            </li>
            <li>
              <span className="text-muted-foreground">Germany</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-page pb-10 flex items-center justify-between text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Gerta Xhepi. Crafted with care.</span>
        <span className="hidden sm:inline">Built in Berlin.</span>
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
