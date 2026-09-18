import { Outlet, useLocation, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { ContactBlock } from "./ContactBlock";

type NavItem = { label: string; to: string };

const navItems: readonly NavItem[] = [
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Resume", to: "/resume" },
  { label: "Writing", to: "/writing" },
] as const;

const ACCENT = "#8A5A5A";
const RESUME_URL = "/resume";

export function SiteHeader({ staticOnHome = false }: { staticOnHome?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const scrollDistance = useRef(0);
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    const threshold = 10;
    let frame = 0;

    lastScrollY.current = window.scrollY;

    const updateHeader = () => {
      const currentScrollY = Math.max(window.scrollY, 0);
      const delta = currentScrollY - lastScrollY.current;

      setScrolled(currentScrollY > 8);

      if (currentScrollY <= 8) {
        setHidden(false);
        scrollDistance.current = 0;
      } else if (!open && delta !== 0) {
        const sameDirection =
          (delta > 0 && scrollDistance.current >= 0) ||
          (delta < 0 && scrollDistance.current <= 0);

        scrollDistance.current = sameDirection ? scrollDistance.current + delta : delta;

        if (scrollDistance.current >= threshold) {
          setHidden(true);
          scrollDistance.current = 0;
        } else if (scrollDistance.current <= -threshold) {
          setHidden(false);
          scrollDistance.current = 0;
        }
      }

      lastScrollY.current = currentScrollY;
      frame = 0;
    };

    const onScroll = () => {
      if (frame === 0) frame = window.requestAnimationFrame(updateHeader);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== 0) window.cancelAnimationFrame(frame);
    };
  }, [open]);

  useEffect(() => {
    setHidden(false);
    scrollDistance.current = 0;
    lastScrollY.current = window.scrollY;
  }, [pathname]);

  const isActive = (to: string) => {
    if (to === "/writing") return pathname === "/writing";
    if (to === "/work") return pathname === "/work";
    if (to === "/resume") return pathname === "/resume";
    if (to === "/about") return pathname === "/about";
    return false;
  };

  return (
    <header
      className={[
        "site-header-smart top-0 z-40 w-full",
        staticOnHome ? "sticky" : "fixed",
        hidden && !open ? "site-header-hidden" : "",
        scrolled
          ? "bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/55"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-page flex h-[72px] items-center justify-between">
        <Link
          to="/"
          className="flex flex-col leading-none transition-opacity duration-300 hover:opacity-70"
        >
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
            Gerta Xhepi
          </span>
          <span className="mt-1 text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
            Product Manager
          </span>
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
                  <span className="nav-roll">
                    <span className="nav-roll-inner">
                      <span className="nav-roll-label">{item.label}</span>
                      <span className="nav-roll-clone" aria-hidden="true">
                        {item.label}
                      </span>
                    </span>
                  </span>
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

export function PageShell({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className={isHome ? "home-page-shell" : "flex min-h-screen flex-col"}>
      <SiteHeader staticOnHome={isHome} />
      <main className={isHome ? "home-page-main" : "flex-1 pt-[72px]"}>{children}</main>
      {!isHome && <ContactBlock />}
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
