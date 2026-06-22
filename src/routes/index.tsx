import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { services, cases } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kreativstudio Einfluss™ · Studio Créatif & Tech" },
      { name: "description", content: "Studio créatif et technologique. Design, développement et stratégie pour marques ambitieuses." },
      { property: "og:title", content: "Kreativstudio Einfluss™ · Studio Créatif & Tech" },
      { property: "og:description", content: "Studio créatif et technologique. Design, développement et stratégie pour marques ambitieuses." },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, lang } = useI18n();
  const values = [
    { n: "01", k: lang === "fr" ? "Design intentionnel" : "Intentional design", v: lang === "fr" ? "Aucune décoration. Chaque élément a une fonction." : "No decoration. Every element has a function." },
    { n: "02", k: lang === "fr" ? "Conscience culturelle" : "Cultural awareness", v: lang === "fr" ? "Le contexte façonne le travail. Toujours." : "Context shapes the work. Always." },
    { n: "03", k: lang === "fr" ? "Craft & précision" : "Craft & precision", v: lang === "fr" ? "De la typographie au code, l'exécution est reine." : "From typography to code, execution is king." },
    { n: "04", k: lang === "fr" ? "Pensée d'impact" : "Impact-driven thinking", v: lang === "fr" ? "Le résultat compte plus que l'esthétique seule." : "Outcome matters more than aesthetics alone." },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex flex-col container-x pt-16">
        <div className="flex items-center justify-between gap-6 hairline-b pb-6">
          <p className="eyebrow">{t("home.eyebrow")}</p>
          <p className="eyebrow hidden md:block">· France / Remote / Globe</p>
        </div>

        <div className="flex-1 flex flex-col justify-center py-12">
          <h1 className="font-display text-display-1 font-medium">
            <span className="block animate-rise" style={{ animationDelay: "0.05s" }}>{t("home.hero.l1")}</span>
            <span className="block animate-rise" style={{ animationDelay: "0.15s" }}>
              {t("home.hero.l2")} <span className="text-primary italic font-normal">—</span>
            </span>
            <span className="block animate-rise" style={{ animationDelay: "0.25s" }}>{t("home.hero.l3")}</span>
            <span className="block animate-rise" style={{ animationDelay: "0.35s" }}>{t("home.hero.l4")}</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-12 gap-8 pb-10">
          <p className="md:col-span-5 md:col-start-7 text-base text-muted-foreground leading-relaxed animate-rise" style={{ animationDelay: "0.5s" }}>
            {t("home.hero.sub")}
          </p>
        </div>

        <div className="hairline-t py-5 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span>{t("home.scroll")} ↓</span>
          <span>{new Date().getFullYear()} ©</span>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="hairline-y py-10 overflow-hidden hairline-b">
        <div className="marquee">
          {[0, 1].map((i) => (
            <div className="marquee-track" key={i}>
              {["WEB", "MOBILE", "UI / UX", "BRANDING", "STRATEGY", "COMMUNITY", "MOTION", "SYSTEMS"].map((w) => (
                <span key={w} className="font-display text-[8vw] md:text-[6vw] leading-none tracking-tighter text-foreground/90">
                  {w} <span className="text-primary">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section className="container-x py-28 md:py-40">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow">· {lang === "fr" ? "Studio" : "Studio"}</p>
          </div>
          <div className="md:col-span-8 space-y-10">
            <Reveal>
              <h2 className="font-display text-display-2">{t("home.intro.title")}</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">{t("home.intro.body")}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="hairline-t bg-surface">
        <div className="container-x py-20 md:py-28">
          <div className="flex items-end justify-between mb-12 hairline-b pb-6">
            <h2 className="font-display text-display-3">{t("home.services.title")}</h2>
            <Link to="/services" className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] link-underline">
              {t("cta.viewAll")} <ArrowUpRight size={14} />
            </Link>
          </div>
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group flex items-center justify-between gap-8 hairline-b py-8 md:py-10 transition-colors hover:bg-foreground/[0.02]"
                >
                  <div className="flex items-baseline gap-6 md:gap-12 min-w-0">
                    <span className="font-display text-sm text-muted-foreground tabular-nums">{s.number}</span>
                    <span className="font-display text-3xl md:text-5xl tracking-tight truncate group-hover:text-primary transition-colors">
                      {s.title[lang]}
                    </span>
                  </div>
                  <span className="hidden md:block max-w-xs text-sm text-muted-foreground text-right">{s.short[lang]}</span>
                  <ArrowUpRight size={28} className="text-foreground/60 group-hover:text-primary group-hover:rotate-12 transition-transform shrink-0" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WORK */}
      <section className="container-x py-28">
        <div className="flex items-end justify-between mb-12 hairline-b pb-6">
          <h2 className="font-display text-display-3">{t("home.work.title")}</h2>
          <Link to="/work" className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] link-underline">
            {t("cta.viewAll")} <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          {cases.map((c, i) => (
            <Reveal key={c.slug} delay={i * 80}>
              <Link
                to="/work/$slug"
                params={{ slug: c.slug }}
                className="group block"
              >
                <div className="relative aspect-[4/3] overflow-hidden hairline bg-surface mb-5 border border-hairline">
                  <CaseVisual index={i} />
                  <span className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em] text-foreground/80">{c.year}</span>
                  <span className="absolute top-4 right-4 inline-flex items-center justify-center h-9 w-9 rounded-full bg-background/70 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="flex items-baseline justify-between gap-6">
                  <h3 className="font-display text-2xl md:text-3xl">{c.client}</h3>
                  <span className="text-xs text-muted-foreground uppercase tracking-[0.18em]">{c.scope[lang]}</span>
                </div>
                <p className="mt-2 text-muted-foreground">{c.title[lang]}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="hairline-t bg-surface">
        <div className="container-x py-24">
          <h2 className="font-display text-display-3 mb-12">{t("home.values.title")}</h2>
          <div className="grid md:grid-cols-4 gap-px bg-hairline">
            {values.map((v) => (
              <div key={v.n} className="bg-surface p-8">
                <p className="text-xs text-muted-foreground tabular-nums">{v.n}</p>
                <h3 className="mt-6 font-display text-xl">{v.k}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-x py-28 md:py-40 text-center">
        <p className="eyebrow">· {lang === "fr" ? "Démarrer" : "Begin"}</p>
        <h2 className="font-display text-display-2 mt-6">{t("home.cta.title")}</h2>
        <p className="text-muted-foreground mt-6 max-w-xl mx-auto">{t("home.cta.sub")}</p>
        <Link
          to="/contact"
          className="mt-10 inline-flex items-center gap-3 rounded-full border border-foreground px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
        >
          {t("cta.start")} <ArrowUpRight size={16} />
        </Link>
      </section>
    </>
  );
}

function CaseVisual({ index }: { index: number }) {
  const variants = [
    <div key="a" className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-foreground/5 to-foreground/[0.02]">
      <svg viewBox="0 0 200 200" className="w-2/3 h-2/3 text-foreground/90">
        <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="1" />
        <circle cx="100" cy="100" r="40" fill="currentColor" />
      </svg>
    </div>,
    <div key="b" className="absolute inset-0 grid grid-cols-6 grid-rows-6">
      {Array.from({ length: 36 }).map((_, i) => (
        <div key={i} className="border border-hairline" style={{ background: i % 7 === 0 ? "var(--color-primary)" : "transparent" }} />
      ))}
    </div>,
    <div key="c" className="absolute inset-0 flex items-end p-8">
      <span className="font-display text-[28vw] md:text-[12vw] leading-[0.8] tracking-tighter text-foreground/95">K.</span>
    </div>,
    <div key="d" className="absolute inset-0 flex items-center justify-center bg-primary/10">
      <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 text-primary">
        <path d="M20 180 L100 20 L180 180 Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M60 130 L140 130" stroke="currentColor" strokeWidth="1" />
      </svg>
    </div>,
  ];
  return variants[index % variants.length];
}
