import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "./Logo";
import { useI18n } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

export function Header() {
  const { t, lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const nav = [
    { to: "/work", label: t("nav.work") },
    { to: "/services", label: t("nav.services") },
    { to: "/about", label: t("nav.about") },
    { to: "/contact", label: t("nav.contact") },
  ] as const;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 hairline-b bg-background/70 backdrop-blur-xl">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="text-foreground" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[0.78rem] uppercase tracking-[0.18em] font-medium">
          {nav.map((n) => {
            const active = pathname.startsWith(n.to);
            return (
              <Link
                key={n.to}
                to={n.to}
                className={"link-underline transition-colors " + (active ? "text-primary" : "text-foreground hover:text-primary")}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4 text-[0.78rem] uppercase tracking-[0.18em] font-medium">
          <button
            onClick={() => setLang("fr")}
            className={lang === "fr" ? "text-primary" : "text-muted-foreground hover:text-foreground transition-colors"}
          >
            FR
          </button>
          <span className="text-hairline">/</span>
          <button
            onClick={() => setLang("en")}
            className={lang === "en" ? "text-primary" : "text-muted-foreground hover:text-foreground transition-colors"}
          >
            EN
          </button>
        </div>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden hairline-t bg-background">
          <nav className="container-x flex flex-col gap-1 py-6 text-2xl font-display">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 hairline-b"
              >
                {n.label}
              </Link>
            ))}
            <div className="flex gap-4 pt-4 text-sm uppercase tracking-[0.18em]">
              <button onClick={() => setLang("fr")} className={lang === "fr" ? "text-primary" : "text-muted-foreground"}>FR</button>
              <button onClick={() => setLang("en")} className={lang === "en" ? "text-primary" : "text-muted-foreground"}>EN</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
