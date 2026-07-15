import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";



const STORAGE_KEY = "theme";

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
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={theme === "dark"}
      className="inline-flex cursor-pointer items-center justify-center leading-none opacity-80 transition-all ease-out hover:opacity-100 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      style={{
        width: "40px",
        height: "40px",
        color: "var(--color-foreground)",
        transitionDuration: "250ms",
      }}
    >
      <span
        style={{
          position: "relative",
          display: "inline-block",
          width: "20px",
          height: "20px",
          transform: "translateY(-1.5px)",
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
  );
}
