import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { Instagram, Linkedin, Globe, Mail, Dribbble, Github } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos — Kreativstudio Einfluss™" },
      { name: "description", content: "Studio créatif-tech fondé en 2025, basé en France. Designers, développeurs et stratèges au service de marques ambitieuses." },
      { property: "og:title", content: "À propos — Kreativstudio Einfluss™" },
      { property: "og:description", content: "Studio créatif-tech fondé en 2025, basé en France." },
    ],
  }),
  component: About,
});

type Social = { kind: "instagram" | "linkedin" | "website" | "email" | "dribbble" | "github"; href: string };

type Member = {
  name: string;
  role: { fr: string; en: string };
  photo?: string;
  socials: Social[];
};

const team: Member[] = [
  {
    name: "Kangue Loïc",
    role: { fr: "Fondateur & Direction Créative", en: "Founder & Creative Director" },
    socials: [
      { kind: "linkedin", href: "https://www.linkedin.com/" },
      { kind: "instagram", href: "https://www.instagram.com/" },
      { kind: "email", href: "mailto:loic@kreativeinfluss.com" },
    ],
  },
  {
    name: "Naomi Ekoume",
    role: { fr: "Lead UI/UX Designer", en: "Lead UI/UX Designer" },
    socials: [
      { kind: "linkedin", href: "https://www.linkedin.com/" },
      { kind: "dribbble", href: "https://dribbble.com/" },
    ],
  },
  {
    name: "Idris Tchoumi",
    role: { fr: "Lead Engineer", en: "Lead Engineer" },
    socials: [
      { kind: "github", href: "https://github.com/" },
      { kind: "linkedin", href: "https://www.linkedin.com/" },
    ],
  },
  {
    name: "Maëlys Bekolo",
    role: { fr: "Brand & Graphic Designer", en: "Brand & Graphic Designer" },
    socials: [
      { kind: "instagram", href: "https://www.instagram.com/" },
      { kind: "dribbble", href: "https://dribbble.com/" },
    ],
  },
  {
    name: "Samuel Nguini",
    role: { fr: "Stratégie & Communication", en: "Strategy & Communication" },
    socials: [
      { kind: "linkedin", href: "https://www.linkedin.com/" },
      { kind: "website", href: "https://kreativeinfluss.com" },
    ],
  },
  {
    name: "Linda Owono",
    role: { fr: "Community & Content", en: "Community & Content" },
    socials: [
      { kind: "instagram", href: "https://www.instagram.com/" },
      { kind: "linkedin", href: "https://www.linkedin.com/" },
    ],
  },
];

const socialIcon: Record<Social["kind"], LucideIcon> = {
  instagram: Instagram,
  linkedin: Linkedin,
  website: Globe,
  email: Mail,
  dribbble: Dribbble,
  github: Github,
};

function About() {
  const { t, lang } = useI18n();
  return (
    <>
      <section className="container-x pt-24 pb-20">
        <p className="eyebrow">{t("about.eyebrow")}</p>
        <h1 className="font-display text-display-1 mt-6 max-w-5xl">{t("about.title")}</h1>
      </section>

      <section className="container-x pb-28 grid md:grid-cols-12 gap-10 hairline-t pt-16">
        <p className="md:col-span-4 eyebrow">— {lang === "fr" ? "Studio · France · Depuis 2025" : "Studio · France · Since 2025"}</p>
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
              <li className="bg-background p-8 h-full flex flex-col gap-8 min-h-[320px] group">
                <div className="relative aspect-square w-full overflow-hidden bg-surface border border-hairline">
                  {m.photo ? (
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-[28%] text-foreground/15 tracking-tighter">
                        {m.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                      </span>
                      <span className="absolute bottom-3 left-3 text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
                        — Portrait soon
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl">{m.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1.5">{m.role[lang]}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    {m.socials.map((s) => {
                      const Icon = socialIcon[s.kind];
                      return (
                        <a
                          key={s.kind + s.href}
                          href={s.href}
                          target={s.kind === "email" ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          aria-label={`${m.name} — ${s.kind}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Icon size={16} strokeWidth={1.5} />
                        </a>
                      );
                    })}
                  </div>
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
