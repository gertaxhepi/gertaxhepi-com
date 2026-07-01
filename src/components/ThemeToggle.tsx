import { useEffect, useState } from "react";

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
    const initial = stored ?? "light";
    setTheme(initial);
    if (initial === "dark") document.documentElement.classList.add("dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, next);
    setFlip((f) => !f);
    // Swap theme at ~40% through the 550ms flip (220ms)
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
      className="ml-3 inline-flex items-center justify-center leading-none text-foreground"
      style={{
        fontSize: "19px",
        width: "22px",
        height: "22px",
        perspective: "600px",
        transition: "color 480ms cubic-bezier(0.22, 1, 0.36, 1)",
      }}
    >
      <span
        style={{
          display: "inline-block",
          lineHeight: 1,
          transform: `rotateY(${flip ? 180 : 0}deg)`,
          transition: "transform 550ms cubic-bezier(0.22, 1, 0.36, 1)",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        ◐
      </span>
    </button>
  );
}
