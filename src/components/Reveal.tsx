import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveal — fades + lifts children into view as they enter the viewport.
 * Children with the `data-reveal-item` attribute are staggered.
 */
export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  delay = 0,
  stagger = 80,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "ul" | "ol" | "header" | "footer";
  delay?: number;
  stagger?: number;
  once?: boolean;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) io.disconnect();
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [once]);

  useEffect(() => {
    if (!visible || !ref.current) return;
    const items = ref.current.querySelectorAll<HTMLElement>("[data-reveal-item]");
    items.forEach((el, i) => {
      el.style.transitionDelay = `${delay + i * stagger}ms`;
    });
  }, [visible, delay, stagger]);

  const Comp = Tag as React.ElementType;
  return (
    <Comp
      ref={ref as never}
      data-reveal-root
      data-revealed={visible ? "true" : "false"}
      className={className}
      style={{ ["--reveal-delay" as never]: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}
