import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { cases, type CaseStudy } from "@/lib/data";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const c = cases.find((x) => x.slug === params.slug);
    if (!c) throw notFound();
    const idx = cases.indexOf(c);
    const next = cases[(idx + 1) % cases.length];
    return { c, next };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.c;
    return {
      meta: [
        { title: `${c?.client ?? "Case"} — Kreativstudio Einfluss™` },
        { name: "description", content: c?.title.fr ?? "" },
        { property: "og:title", content: `${c?.client ?? "Case"} — Kreativstudio Einfluss™` },
        { property: "og:description", content: c?.title.fr ?? "" },
      ],
    };
  },
  component: CaseDetail,
  notFoundComponent: () => (
    <div className="container-x py-40 text-center">
      <p className="eyebrow">404</p>
      <h1 className="font-display text-4xl mt-4">Projet introuvable</h1>
    </div>
  ),
});

function CaseDetail() {
  const data = Route.useLoaderData() as { c: CaseStudy; next: CaseStudy };
  const { c, next } = data;
  const { t, lang } = useI18n();

  const sections = [
    { label: t("case.problem"), body: c.problem[lang] },
    { label: t("case.analysis"), body: c.analysis[lang] },
    { label: t("case.process"), body: c.process[lang] },
    { label: t("case.solution"), body: c.solution[lang] },
  ];

  return (
    <>
      <section className="container-x pt-20 pb-10">
        <Link to="/work" className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft size={14} /> {t("nav.work")}
        </Link>
      </section>

      <section className="container-x pb-12">
        <p className="eyebrow">{c.client} · {c.year}</p>
        <h1 className="font-display text-display-1 mt-6 max-w-6xl">{c.title[lang]}</h1>
        <p className="mt-8 max-w-2xl text-xl text-muted-foreground leading-snug">{c.tagline[lang]}</p>
      </section>

      <section className="container-x pb-20">
        <div className="aspect-[16/9] border border-hairline bg-surface relative overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-12">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-hairline" />
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[18vw] md:text-[14vw] leading-none tracking-tighter text-foreground/90">{c.client.charAt(0)}.</span>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span>● {c.client}</span>
            <span>{c.scope[lang]}</span>
          </div>
        </div>
      </section>

      <section className="container-x pb-20 grid md:grid-cols-3 gap-px bg-hairline hairline-y">
        <Reveal delay={0}><Meta label={t("case.client")} value={c.client} /></Reveal>
        <Reveal delay={60}><Meta label={t("case.year")} value={c.year} /></Reveal>
        <Reveal delay={120}><Meta label={t("case.scope")} value={c.scope[lang]} /></Reveal>
      </section>

      <section className="container-x py-20 space-y-20">
        {sections.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <div className="grid md:grid-cols-12 gap-8 hairline-b pb-16">
              <div className="md:col-span-4">
                <p className="eyebrow">— 0{i + 1}</p>
                <h2 className="font-display text-3xl md:text-5xl mt-4">{s.label}</h2>
              </div>
              <p className="md:col-span-7 md:col-start-6 text-lg text-foreground/90 leading-relaxed">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="hairline-t bg-surface">
        <Link to="/work/$slug" params={{ slug: next.slug }} className="group block container-x py-20 md:py-28">
          <p className="eyebrow">— {t("case.next")}</p>
          <div className="mt-6 flex items-center justify-between gap-6">
            <h2 className="font-display text-display-2 group-hover:text-primary transition-colors">{next.client}</h2>
            <ArrowRight size={48} className="text-foreground/60 group-hover:text-primary group-hover:translate-x-2 transition-transform shrink-0" />
          </div>
          <p className="mt-4 text-muted-foreground max-w-xl">{next.title[lang]}</p>
        </Link>
      </section>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background p-8">
      <p className="eyebrow">— {label}</p>
      <p className="font-display text-2xl mt-4">{value}</p>
    </div>
  );
}
