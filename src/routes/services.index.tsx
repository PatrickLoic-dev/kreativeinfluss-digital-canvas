import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { services } from "@/lib/data";
import { Reveal } from "@/components/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services · Kreativstudio Einfluss™" },
      { name: "description", content: "Cinq disciplines : Web & Mobile, UI/UX, Graphic Design, Stratégie, Community Management." },
      { property: "og:title", content: "Services · Kreativstudio Einfluss™" },
      { property: "og:description", content: "Cinq disciplines : Web & Mobile, UI/UX, Graphic Design, Stratégie, Community Management." },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  const { t, lang } = useI18n();
  return (
    <>
      <section className="container-x pt-24 pb-16">
        <p className="eyebrow">{t("services.eyebrow")}</p>
        <h1 className="font-display text-display-1 mt-6 max-w-5xl">{t("services.title")}</h1>
        <Reveal>
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">{t("services.sub")}</p>
        </Reveal>
      </section>

      <section className="hairline-t">
        <ul>
          {services.map((s, i) => (
            <li key={s.slug} className="hairline-b">
              <Reveal delay={i * 60}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="group container-x flex items-center justify-between gap-8 py-10 md:py-14 transition-colors hover:bg-surface"
                >
                  <div className="flex items-baseline gap-6 md:gap-12 min-w-0">
                    <span className="font-display text-sm text-muted-foreground tabular-nums shrink-0">{s.number}</span>
                    <div className="min-w-0">
                      <span className="font-display text-3xl md:text-6xl tracking-tight group-hover:text-primary transition-colors block">
                        {s.title[lang]}
                      </span>
                      <p className="mt-3 text-sm text-muted-foreground max-w-xl">{s.short[lang]}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={32} className="text-foreground/60 group-hover:text-primary group-hover:rotate-12 transition-transform shrink-0" />
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
