import { useEffect, useState } from "react";

type ViewportDiagnostics = {
  innerWidth: number;
  clientWidth: number;
  innerHeight: number;
  devicePixelRatio: number;
  minWidth768: boolean;
  minWidth1024: boolean;
  userAgent: string;
};

function readViewportDiagnostics(): ViewportDiagnostics {
  return {
    innerWidth: window.innerWidth,
    clientWidth: document.documentElement.clientWidth,
    innerHeight: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio,
    minWidth768: window.matchMedia("(min-width: 768px)").matches,
    minWidth1024: window.matchMedia("(min-width: 1024px)").matches,
    userAgent: window.navigator.userAgent,
  };
}

export function ViewportDebugPanel() {
  const [diagnostics, setDiagnostics] = useState<ViewportDiagnostics | null>(null);

  useEffect(() => {
    const updateDiagnostics = () => setDiagnostics(readViewportDiagnostics());
    const media768 = window.matchMedia("(min-width: 768px)");
    const media1024 = window.matchMedia("(min-width: 1024px)");

    updateDiagnostics();
    window.addEventListener("resize", updateDiagnostics);
    media768.addEventListener("change", updateDiagnostics);
    media1024.addEventListener("change", updateDiagnostics);

    return () => {
      window.removeEventListener("resize", updateDiagnostics);
      media768.removeEventListener("change", updateDiagnostics);
      media1024.removeEventListener("change", updateDiagnostics);
    };
  }, []);

  if (!diagnostics) return null;

  return (
    <aside
      aria-label="Viewport diagnostics"
      className="fixed bottom-3 left-3 z-[100] max-h-[calc(100dvh-1.5rem)] w-[min(420px,calc(100vw-1.5rem))] overflow-auto border border-foreground bg-background p-3 font-mono text-[12px] leading-relaxed text-foreground shadow-lg"
    >
      <div>window.innerWidth: {diagnostics.innerWidth}</div>
      <div>document.documentElement.clientWidth: {diagnostics.clientWidth}</div>
      <div>window.innerHeight: {diagnostics.innerHeight}</div>
      <div>window.devicePixelRatio: {diagnostics.devicePixelRatio}</div>
      <div>matchMedia min-width 768px: {String(diagnostics.minWidth768)}</div>
      <div>matchMedia min-width 1024px: {String(diagnostics.minWidth1024)}</div>
      <div className="mt-2 break-words">userAgent: {diagnostics.userAgent}</div>
    </aside>
  );
}