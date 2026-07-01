import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

function applyTheme(theme: "light" | "dark") {
  const root = document.documentElement;
  root.classList.add("theme-transition");
  if (theme === "dark") root.classList.add("dark");
  else root.classList.remove("dark");
  window.setTimeout(() => root.classList.remove("theme-transition"), 320);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [spin, setSpin] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem(STORAGE_KEY) as "light" | "dark" | null);
    const initial = stored ?? "light";
    setTheme(initial);
    if (initial === "dark") document.documentElement.classList.add("dark");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
    setSpin(true);
    window.setTimeout(() => setSpin(false), 300);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="ml-3 inline-flex items-center justify-center leading-none text-foreground opacity-80 hover:opacity-100 transition-opacity"
      style={{
        fontSize: "19px",
        width: "22px",
        height: "22px",
        transform: spin ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 280ms cubic-bezier(0.22,1,0.36,1), opacity 250ms ease, color 280ms ease",
      }}
    >
      ◐
    </button>
  );
}
