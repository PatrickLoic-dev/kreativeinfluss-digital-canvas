import { useEffect, useState } from "react";

export function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("ke-loaded")) {
      setHidden(true);
      setGone(true);
      return;
    }
    const t1 = setTimeout(() => setHidden(true), 2600);
    const t2 = setTimeout(() => {
      setGone(true);
      sessionStorage.setItem("ke-loaded", "1");
    }, 3400);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background transition-transform duration-700 ease-[cubic-bezier(0.7,0,0.2,1)]"
      style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 140"
        className="w-[88vw] max-w-[1100px]"
        fill="none"
      >
        <text
          x="600"
          y="108"
          textAnchor="middle"
          fontFamily="Space Grotesk, sans-serif"
          fontSize="120"
          fontWeight="500"
          letterSpacing="-4"
          stroke="currentColor"
          strokeWidth="1"
          className="draw-path text-foreground"
          style={{ fill: "transparent" }}
        >
          KREATIVEINFLUSS
        </text>
      </svg>
      <div className="mt-10 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
        <span className="h-px w-8 bg-muted-foreground" />
        <span>Studio · Loading</span>
        <span className="animate-blink text-primary">●</span>
      </div>
    </div>
  );
}
