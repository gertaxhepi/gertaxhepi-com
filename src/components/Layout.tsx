import { Outlet, useLocation, useNavigate } from "@tanstack/react-router";
import type { ReactNode, MouseEvent } from "react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

type NavItem = { label: string; sectionId: string };

const navItems: readonly NavItem[] = [
  { label: "Work", sectionId: "work" },
  { label: "About", sectionId: "about" },
  { label: "Contact", sectionId: "contact" },
] as const;

const ACCENT = "#8A5A5A";

// Shared helper: smooth-scroll to a homepage section and update the URL hash.
export function scrollToSection(sectionId: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(sectionId);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  if (sectionId === "home") {
    history.replaceState(null, "", "/");
  } else {
    history.replaceState(null, "", `#${sectionId}`);
  }
  // Notify scroll-spy so the nav highlights immediately,
  // before IntersectionObserver catches up during the smooth scroll.
  window.dispatchEvent(
    new CustomEvent("lovable:section-intent", { detail: { sectionId } }),
  );
}

function useActiveSection(pathname: string) {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    setActiveSection(null);
    if (typeof window === "undefined") return;
    if (pathname !== "/") return;

    const ids = navItems.map((i) => i.sectionId);
    let lockUntil = 0;
    let lockedId: string | null = null;
    const NAV_OFFSET = 88; // ~72px header + breathing room

    const compute = (): string | null => {
      const scrollY = window.scrollY;
      const viewportH = window.innerHeight;
      const docH = document.documentElement.scrollHeight;

      // Top of page → hero, no highlight.
      if (scrollY < 120) return null;

      // Bottom of page → last section (handles short final sections).
      if (scrollY + viewportH >= docH - 4) {
        return ids[ids.length - 1] ?? null;
      }

      const probe = scrollY + NAV_OFFSET + 1;
      let current: string | null = null;
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + scrollY;
        if (top <= probe) current = id;
        else break;
      }
      return current;
    };

    const update = () => {
      if (Date.now() < lockUntil && lockedId) {
        setActiveSection(lockedId);
        return;
      }
      setActiveSection(compute());
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    const onIntent = (e: Event) => {
      const detail = (e as CustomEvent<{ sectionId: string }>).detail;
      if (!detail) return;
      if (detail.sectionId === "home") {
        lockedId = null;
        lockUntil = 0;
        setActiveSection(null);
        return;
      }
      if (ids.includes(detail.sectionId)) {
        lockedId = detail.sectionId;
        // Hold the clicked section through the smooth-scroll animation
        // so transient passes don't steal the highlight.
        lockUntil = Date.now() + 1200;
        setActiveSection(detail.sectionId);
      }
    };
    window.addEventListener("lovable:section-intent", onIntent);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("lovable:section-intent", onIntent);
    };
  }, [pathname]);

  return activeSection;
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;
  const isResume = pathname.startsWith("/resume");
  const isCaseStudy =
    pathname.startsWith("/case-studies/") &&
    pathname.length > "/case-studies/".length;
  const isFocusedDoc = isResume || isCaseStudy;
  const activeSection = useActiveSection(pathname);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeId = useMemo(() => {
    if (pathname === "/") return activeSection;
    return null;
  }, [pathname, activeSection]);

  const handleNavClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      setOpen(false);
      if (pathname === "/") {
        e.preventDefault();
        scrollToSection(sectionId);
        return;
      }
      e.preventDefault();
      navigate({ to: "/", hash: sectionId === "home" ? undefined : sectionId });
    },
    [pathname, navigate],
  );

  const handleBackToWork = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      navigate({ to: "/", hash: "work" });
    },
    [navigate],
  );

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
        {isCaseStudy ? (
          <a
            href="/#work"
            onClick={handleBackToWork}
            className="text-sm font-medium text-foreground transition-opacity duration-300 hover:opacity-60"
          >
            ← Back to Home
          </a>
        ) : (
          <a
            href="/#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="text-sm font-bold uppercase tracking-[0.2em] text-foreground transition-opacity duration-300 hover:opacity-70"
          >
            Gerta Xhepi
          </a>
        )}

        {isFocusedDoc ? (
          isResume ? (
            <nav className="flex items-center gap-8">
              <a
                href="/"
                onClick={handleBackToWork}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                ← Back to Home
              </a>
            </nav>
          ) : null
        ) : (
          <>
            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => {
                const isActive = activeId === item.sectionId;
                return (
                  <a
                    key={item.sectionId}
                    href={`/#${item.sectionId}`}
                    onClick={(e) => handleNavClick(e, item.sectionId)}
                    className="nav-link text-sm font-bold transition-colors duration-300"
                    style={{ color: isActive ? ACCENT : undefined }}
                  >
                    {item.label}
                  </a>
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
          </>
        )}
      </div>

      {!isFocusedDoc && open && (
        <div className="md:hidden bg-background/85 backdrop-blur-md">
          <nav className="container-page flex flex-col py-4 gap-1">
            {navItems.map((item) => {
              const isActive = activeId === item.sectionId;
              return (
                <a
                  key={item.sectionId}
                  href={`/#${item.sectionId}`}
                  onClick={(e) => handleNavClick(e, item.sectionId)}
                  className="nav-link px-1 py-3 text-sm font-bold transition-colors"
                  style={{ color: isActive ? ACCENT : undefined }}
                >
                  {item.label}
                </a>
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
            {navItems.map((i) => (
              <li key={i.sectionId}>
                <a
                  href={`/#${i.sectionId}`}
                  className="text-foreground/85 transition-colors hover:text-foreground"
                >
                  {i.label}
                </a>
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
