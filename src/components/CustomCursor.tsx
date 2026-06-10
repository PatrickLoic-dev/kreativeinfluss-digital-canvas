import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-hidden");

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let rx = x, ry = y;
    let raf = 0;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      const target = e.target as HTMLElement | null;
      const hov = !!target?.closest("a, button, [data-cursor='hover'], input, textarea, select, label");
      setHovering(hov);
    };

    const loop = () => {
      rx += (x - rx) * 0.18;
      ry += (y - ry) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-hidden");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-1.5 w-1.5 rounded-full bg-primary mix-blend-difference"
        style={{ transition: "width 0.25s, height 0.25s" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] rounded-full border border-foreground mix-blend-difference"
        style={{
          width: hovering ? 64 : 32,
          height: hovering ? 64 : 32,
          transition: "width 0.3s cubic-bezier(0.2,0.7,0.2,1), height 0.3s cubic-bezier(0.2,0.7,0.2,1), border-color 0.3s",
        }}
      />
    </>
  );
}
