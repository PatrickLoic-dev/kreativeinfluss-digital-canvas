import { useEffect, useState, type ReactNode } from "react";
import { useRouterState } from "@tanstack/react-router";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [key, setKey] = useState(pathname);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    setShown(false);
    setKey(pathname);
    const id = window.requestAnimationFrame(() => {
      // double rAF ensures the initial hidden state is committed before the transition
      window.requestAnimationFrame(() => setShown(true));
    });
    return () => window.cancelAnimationFrame(id);
  }, [pathname]);

  return (
    <div
      key={key}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(18px)",
        transition:
          "opacity 0.7s cubic-bezier(0.2,0.7,0.2,1), transform 0.7s cubic-bezier(0.2,0.7,0.2,1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
