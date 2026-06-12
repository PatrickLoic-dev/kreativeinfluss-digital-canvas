import { Outlet, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Home as HomeIcon,
  Briefcase,
  Layers,
  Users,
  Mail,
  type LucideIcon,
} from "lucide-react";

type RouteMeta = { icon: LucideIcon; label: string };

const routeMap: Record<string, RouteMeta> = {
  "/": { icon: HomeIcon, label: "Home" },
  "/work": { icon: Briefcase, label: "Work" },
  "/services": { icon: Layers, label: "Services" },
  "/about": { icon: Users, label: "Studio" },
  "/contact": { icon: Mail, label: "Contact" },
};

function getMeta(pathname: string): RouteMeta {
  const base = "/" + (pathname.split("/")[1] || "");
  return routeMap[base] ?? routeMap["/"];
}

export function RouteTransition() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [displayPath, setDisplayPath] = useState(pathname);
  const [phase, setPhase] = useState<"idle" | "out" | "in">("idle");

  useEffect(() => {
    if (pathname === displayPath) return;
    setPhase("out");
    const t1 = setTimeout(() => {
      setDisplayPath(pathname);
      setPhase("in");
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, 480);
    const t2 = setTimeout(() => setPhase("idle"), 1100);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [pathname, displayPath]);

  const meta = getMeta(pathname);
  const Icon = meta.icon;
  const visible = phase !== "idle";

  // Deterministic positions so SSR/CSR match
  const dots = Array.from({ length: 18 }).map((_, i) => ({
    top: (i * 53) % 95 + 2,
    left: (i * 37) % 95 + 2,
    size: 32 + ((i * 13) % 4) * 14,
    rot: (i * 47) % 360,
    op: 0.04 + ((i * 7) % 5) * 0.012,
  }));

  return (
    <>
      <div
        key={displayPath}
        className="animate-page-in"
        style={{ minHeight: "60vh" }}
      >
        <Outlet />
      </div>

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[180] flex items-center justify-center overflow-hidden bg-background transition-opacity duration-500"
        style={{
          opacity: visible ? 1 : 0,
          transform: phase === "out" ? "translateY(0)" : phase === "in" ? "translateY(0)" : "translateY(0)",
        }}
      >
        {/* floating background icons */}
        <div className="absolute inset-0">
          {dots.map((d, i) => (
            <Icon
              key={i}
              size={d.size}
              strokeWidth={1}
              className="absolute text-foreground"
              style={{
                top: `${d.top}%`,
                left: `${d.left}%`,
                opacity: visible ? d.op : 0,
                transform: `rotate(${d.rot}deg)`,
                transition: "opacity 600ms ease",
              }}
            />
          ))}
        </div>

        {/* centerpiece */}
        <div className="relative flex flex-col items-center gap-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-hairline">
            <Icon size={34} strokeWidth={1.25} className="text-primary" />
          </div>
          <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-px w-8 bg-muted-foreground" />
            <span className="font-display text-foreground">{meta.label}</span>
            <span className="h-px w-8 bg-muted-foreground" />
          </div>
        </div>
      </div>
    </>
  );
}
