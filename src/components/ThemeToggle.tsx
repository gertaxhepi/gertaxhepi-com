import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";



const STORAGE_KEY = "theme";
const ACCENT = "#8A5A5A";

function applyThemeClass(theme: "light" | "dark") {
  const root = document.documentElement;
  root.classList.add("theme-transition");
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  window.setTimeout(() => root.classList.remove("theme-transition"), 520);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [flip, setFlip] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as "light" | "dark" | null;
    let initial: "light" | "dark";
    if (stored === "light" || stored === "dark") {
      initial = stored;
    } else {
      initial =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
    }
    setTheme(initial);
    if (initial === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    setFlip((f) => !f);
    window.setTimeout(() => {
      setTheme(next);
      applyThemeClass(next);
    }, 220);
  };

  return (
    <span className="relative inline-flex items-center">
      <button
        type="button"
        onClick={toggle}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
        aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={theme === "dark"}
        className="inline-flex cursor-pointer items-center justify-center leading-none"
        style={{
          width: "22px",
          height: "22px",
          color: hover ? ACCENT : "var(--color-foreground)",
          transition: "color 250ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <span
          style={{
            position: "relative",
            display: "inline-block",
            width: "20px",
            height: "20px",
          }}
        >
          <Sun
            size={20}
            strokeWidth={1.5}
            style={{
              position: "absolute",
              inset: 0,
              opacity: theme === "dark" ? 1 : 0,
              transform: `rotate(${theme === "dark" ? 0 : 90}deg) scale(${flip ? 0.85 : 1})`,
              transition:
                "opacity 250ms cubic-bezier(0.22, 1, 0.36, 1), transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
          <Moon
            size={20}
            strokeWidth={1.5}
            style={{
              position: "absolute",
              inset: 0,
              opacity: theme === "dark" ? 0 : 1,
              transform: `rotate(${theme === "dark" ? -90 : 0}deg) scale(${flip ? 0.85 : 1})`,
              transition:
                "opacity 250ms cubic-bezier(0.22, 1, 0.36, 1), transform 300ms cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        </span>

      </button>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-full hidden -translate-x-1/2 translate-y-2 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] md:inline-block"
        style={{
          color: "var(--color-muted-foreground)",
          opacity: hover ? 1 : 0,
          transition: "opacity 200ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        Appearance
      </span>
    </span>
  );
}
