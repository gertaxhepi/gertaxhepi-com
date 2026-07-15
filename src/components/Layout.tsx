import { Outlet, useLocation, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { ContactBlock } from "./ContactBlock";

type NavItem = { label: string; to: string };

const navItems: readonly NavItem[] = [
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Writing", to: "/writing" },
] as const;

const ACCENT = "#8A5A5A";
const RESUME_URL = "/resume";
const LINKEDIN_URL = "https://www.linkedin.com/in/gerta-xhepi-94853289/";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (to: string) => {
    if (to === "/writing") return pathname === "/writing";
    if (to === "/work") return pathname === "/work";
    if (to === "/about") return pathname === "/about";
    return false;
  };

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
          className="text-sm font-bold uppercase tracking-[0.2em] text-foreground transition-opacity duration-300 hover:opacity-70"
        >
          Gerta Xhepi
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <nav className="flex items-center gap-8">
            {navItems.map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="nav-link text-sm font-bold transition-colors duration-300"
                  style={{ color: active ? ACCENT : undefined }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div>
            <ThemeToggle />
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button
            className="grid h-10 w-10 place-items-center nav-link transition-colors"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-background/85 backdrop-blur-md">
          <nav className="container-page flex flex-col py-4 gap-1">
            {navItems.map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="nav-link px-1 py-3 text-sm font-bold transition-colors"
                  style={{ color: active ? ACCENT : undefined }}
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
    <footer>
      <div className="container-page">
        <div className="border-t border-border/40" />
        <div className="flex items-center justify-between py-8 md:py-10 text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground">
          <span>© {new Date().getFullYear()} Gerta Xhepi</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 pt-[72px]">{children}</main>
      {!isHome && (
        <>
          <ContactBlock />
          <SiteFooter />
        </>
      )}
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
