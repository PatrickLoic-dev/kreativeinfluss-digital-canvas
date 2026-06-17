import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — Kreativstudio Einfluss™" },
      { name: "description", content: "Studio créatif-tech : designers, développeurs et stratèges au service de marques ambitieuses." },
      { property: "og:title", content: "À propos — Kreativstudio Einfluss™" },
      { property: "og:description", content: "Studio créatif-tech : designers, développeurs et stratèges au service de marques ambitieuses." },
    ],
  }),
  component: About,
});

const team = [
  { name: "Kangue Loïc", role: { fr: "Fondateur & Direction Créative", en: "Founder & Creative Director" } },
  { name: "Naomi Ekoume", role: { fr: "Lead UI/UX Designer", en: "Lead UI/UX Designer" } },
  { name: "Idris Tchoumi", role: { fr: "Lead Engineer", en: "Lead Engineer" } },
  { name: "Maëlys Bekolo", role: { fr: "Brand & Graphic Designer", en: "Brand & Graphic Designer" } },
  { name: "Samuel Nguini", role: { fr: "Stratégie & Communication", en: "Strategy & Communication" } },
  { name: "Linda Owono", role: { fr: "Community & Content", en: "Community & Content" } },
];

function About() {
  const { t, lang } = useI18n();
  return (
    <>
      <section className="container-x pt-24 pb-20">
        <p className="eyebrow">{t("about.eyebrow")}</p>
        <h1 className="font-display text-display-1 mt-6 max-w-5xl">{t("about.title")}</h1>
      </section>

      <section className="container-x pb-28 grid md:grid-cols-12 gap-10 hairline-t pt-16">
        <p className="md:col-span-4 eyebrow">— {lang === "fr" ? "Studio" : "Studio"}</p>
        <p className="md:col-span-8 text-xl md:text-2xl leading-snug font-display max-w-3xl">
          {t("about.body")}
        </p>
      </section>

      <section className="bg-surface hairline-t">
        <div className="container-x py-24 grid md:grid-cols-2 gap-px bg-hairline">
          <div className="bg-surface p-10 md:p-14">
            <p className="eyebrow">— {t("about.mission.title")}</p>
            <h2 className="font-display text-3xl md:text-4xl mt-6">{t("about.mission.title")}</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{t("about.mission.body")}</p>
          </div>
          <div className="bg-surface p-10 md:p-14">
            <p className="eyebrow">— {t("about.vision.title")}</p>
            <h2 className="font-display text-3xl md:text-4xl mt-6">{t("about.vision.title")}</h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{t("about.vision.body")}</p>
          </div>
        </div>
      </section>

      <section className="container-x py-28">
        <div className="flex items-end justify-between mb-12 hairline-b pb-6">
          <h2 className="font-display text-display-3">{t("about.team.title")}</h2>
          <p className="hidden md:block text-sm text-muted-foreground max-w-xs text-right">{t("about.team.sub")}</p>
        </div>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-hairline">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 60}>
              <li className="bg-background p-8 h-full flex flex-col justify-between min-h-[220px] group">
                <div className="aspect-square w-16 rounded-full border border-hairline flex items-center justify-center font-display text-sm text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                  {m.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                </div>
                <div>
                  <h3 className="font-display text-2xl mt-10">{m.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{m.role[lang]}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section className="container-x pb-28 text-center">
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 rounded-full border border-foreground px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
        >
          {t("cta.start")}
        </Link>
      </section>
    </>
  );
}
