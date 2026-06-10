import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { cases } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Portfolio — Kreativstudio Einfluss™" },
      { name: "description", content: "Sélection de projets — client, problème, analyse, processus, solution." },
      { property: "og:title", content: "Portfolio — Kreativstudio Einfluss™" },
      { property: "og:description", content: "Sélection de projets — client, problème, analyse, processus, solution." },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  const { t, lang } = useI18n();
  return (
    <>
      <section className="container-x pt-24 pb-16">
        <p className="eyebrow">{t("portfolio.eyebrow")}</p>
        <h1 className="font-display text-display-1 mt-6 max-w-5xl">{t("portfolio.title")}</h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">{t("portfolio.sub")}</p>
      </section>

      <section className="container-x pb-28 hairline-t pt-16">
        <ul className="grid md:grid-cols-2 gap-12 md:gap-16">
          {cases.map((c, i) => (
            <Reveal key={c.slug} delay={i * 60}>
              <li>
                <Link to="/work/$slug" params={{ slug: c.slug }} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden border border-hairline bg-surface mb-6">
                    <Visual i={i} />
                    <span className="absolute top-4 left-4 text-xs uppercase tracking-[0.2em]">{c.year}</span>
                    <span className="absolute bottom-4 right-4 inline-flex items-center justify-center h-10 w-10 rounded-full bg-background/70 backdrop-blur opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between gap-6">
                    <h2 className="font-display text-3xl md:text-4xl">{c.client}</h2>
                    <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{c.scope[lang]}</span>
                  </div>
                  <p className="mt-3 text-muted-foreground">{c.title[lang]}</p>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}

function Visual({ i }: { i: number }) {
  const v = [
    <div key="a" className="absolute inset-0 grid grid-cols-8">{Array.from({length:8}).map((_,k)=>(<div key={k} className="border-r border-hairline" style={{background: k===4?"var(--color-primary)":"transparent"}}/>))}</div>,
    <div key="b" className="absolute inset-0 flex items-end p-8"><span className="font-display text-[18vw] md:text-[10vw] leading-[0.8] tracking-tighter text-foreground/95">{["A","L","K","F"][i % 4]}.</span></div>,
    <div key="c" className="absolute inset-0 flex items-center justify-center"><div className="h-1/2 w-1/2 border border-foreground/40 rounded-full" /><div className="absolute h-1/4 w-1/4 bg-primary rounded-full" /></div>,
    <div key="d" className="absolute inset-0 grid grid-cols-3 grid-rows-3">{Array.from({length:9}).map((_,k)=>(<div key={k} className="border border-hairline" style={{background: k===0||k===4||k===8?"oklch(0.25 0 0)":"transparent"}}/>))}</div>,
  ];
  return v[i % v.length];
}
