import { Link, Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", sectionId: "home" },
  { label: "Work", sectionId: "work" },
  { label: "About", sectionId: "about" },
  { label: "Contact", sectionId: "contact" },
] as const;


const ACCENT = "#9A6A64";

function useActiveSection(pathname: string) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    setActiveSection(null);
    if (typeof window === "undefined") return;

    const ids = navItems.map((i) => i.sectionId);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => !!n);

    if (nodes.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        // pick the entry closest to the top that is intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        // viewport band where a section is considered "current"
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0,
      },
    );

    nodes.forEach((n) => io.observe(n));
    return () => io.disconnect();
  }, [pathname]);

  return activeSection;
}

function navLinkStyle(isActive: boolean): React.CSSProperties {
  return {
    color: isActive ? ACCENT : undefined,
  };
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const activeSection = useActiveSection(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeTo = useMemo(() => {
    if (pathname === "/" && activeSection) {
      const match = navItems.find((n) => n.sectionId === activeSection);
      if (match) return match.to;
    }
    // exact route match — fall back to longest prefix for nested routes
    const exact = navItems.find((n) => n.to === pathname);
    if (exact) return exact.to;
    const prefix = [...navItems]
      .filter((n) => n.to !== "/" && pathname.startsWith(n.to))
      .sort((a, b) => b.to.length - a.to.length)[0];
    return prefix?.to ?? "/";
  }, [pathname, activeSection]);

  return (
    <header
      className={[
        "fixed top-0 z-40 w-full transition-[background-color,backdrop-filter] duration-500 ease-out",
        scrolled
          ? "bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/55"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link
          to="/"
          className="text-sm font-bold uppercase tracking-[0.2em] nav-link"
          style={{ color: activeTo === "/" ? ACCENT : undefined }}
        >
          Gerta Xhepi
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTo === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="nav-link text-sm font-bold transition-colors duration-300"
                style={navLinkStyle(isActive)}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden grid h-10 w-10 place-items-center nav-link transition-colors"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/85 backdrop-blur-md">
          <nav className="container-page flex flex-col py-4 gap-1">
            {navItems.map((item) => {
              const isActive = activeTo === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="nav-link px-1 py-3 text-sm font-bold transition-colors"
                  style={navLinkStyle(isActive)}
                >
                  {item.label}
                </Link>
              );
            })}
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
      <main className="flex-1 pt-[72px]">{children}</main>
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
