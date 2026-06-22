import { useEffect, useRef, useState } from "react";

type BtnRect = { x: number; y: number; w: number; h: number; r: number } | null;

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [btn, setBtn] = useState<BtnRect>(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;
    setEnabled(true);
    document.documentElement.classList.add("cursor-hidden");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx, ry = my, rw = 32, rh = 32, rr = 999;
    let currentBtn: BtnRect = null;
    let raf = 0;

    const computeBtn = (el: HTMLElement | null): BtnRect => {
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const radius = parseFloat(getComputedStyle(el).borderRadius || "8");
      return { x: r.left + r.width / 2, y: r.top + r.height / 2, w: r.width, h: r.height, r: isNaN(radius) ? 8 : radius };
    };

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
      }
      const target = e.target as HTMLElement | null;
      const btnEl = target?.closest("button, [role='button'], [data-cursor='button'], .cursor-btn") as HTMLElement | null;
      currentBtn = computeBtn(btnEl);
      setBtn(currentBtn);
      const hov = !!target?.closest("a, button, [data-cursor='hover'], input, textarea, select, label");
      setHovering(hov);
    };

    const loop = () => {
      const targetX = currentBtn ? currentBtn.x : mx;
      const targetY = currentBtn ? currentBtn.y : my;
      const targetW = currentBtn ? currentBtn.w : (hovering ? 56 : 32);
      const targetH = currentBtn ? currentBtn.h : (hovering ? 56 : 32);
      const targetR = currentBtn ? currentBtn.r : 999;
      const lerp = currentBtn ? 0.28 : 0.18;
      rx += (targetX - rx) * lerp;
      ry += (targetY - ry) * lerp;
      rw += (targetW - rw) * 0.25;
      rh += (targetH - rh) * 0.25;
      rr += (targetR - rr) * 0.25;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
        ringRef.current.style.width = `${rw}px`;
        ringRef.current.style.height = `${rh}px`;
        ringRef.current.style.borderRadius = `${rr}px`;
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
        style={{ opacity: btn ? 0 : 1, transition: "opacity 0.2s" }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] border border-foreground mix-blend-difference"
        style={{ borderColor: hovering ? "var(--color-primary)" : undefined }}
      />
    </>
  );
}
