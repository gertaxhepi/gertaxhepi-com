import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function applyThemeClass(theme: "light" | "dark") {
  const root = document.documentElement;
  root.classList.add("theme-transition");
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  window.setTimeout(() => root.classList.remove("theme-transition"), 320);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as "light" | "dark" | null;
    const initial = stored ?? "light";
    setTheme(initial);
    if (initial === "dark") document.documentElement.classList.add("dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    setFlip((f) => !f);
    // Swap the theme halfway through the 300ms flip
    window.setTimeout(() => {
      setTheme(next);
      applyThemeClass(next);
    }, 150);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={theme === "dark"}
      className="ml-3 inline-flex items-center justify-center leading-none text-foreground opacity-80 hover:opacity-100"
      style={{
        fontSize: "19px",
        width: "22px",
        height: "22px",
        perspective: "400px",
        transition: "opacity 250ms ease, color 280ms ease",
      }}
    >
      <span
        style={{
          display: "inline-block",
          lineHeight: 1,
          transform: `rotateY(${flip ? 180 : 0}deg)`,
          transition: "transform 300ms cubic-bezier(0.65, 0, 0.35, 1)",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        ◐
      </span>
    </button>
  );
}
