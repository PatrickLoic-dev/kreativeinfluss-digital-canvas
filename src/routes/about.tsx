import { createFileRoute, Link } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/Reveal";
import { Linkedin, Instagram, Twitter, Github, Globe, Dribbble } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "À propos · Kreativstudio Einfluss™" },
      { name: "description", content: "Studio créatif-tech basé en France depuis 2025 : designers, développeurs et stratèges au service de marques ambitieuses." },
      { property: "og:title", content: "À propos · Kreativstudio Einfluss™" },
      { property: "og:description", content: "Studio créatif-tech basé en France depuis 2025 : designers, développeurs et stratèges au service de marques ambitieuses." },
    ],
  }),
  component: About,
});

type Social = { type: "linkedin" | "instagram" | "twitter" | "github" | "dribbble" | "website"; href: string };

const team: Array<{
  name: string;
  role: { fr: string; en: string };
  photo?: string;
  socials: Social[];
}> = [
  {
    name: "Kangue Loïc",
    role: { fr: "Co-fondateur · Direction Créative", en: "Co-founder · Creative Director" },
    socials: [
      { type: "linkedin", href: "https://www.linkedin.com/in/kangue-loic" },
      { type: "instagram", href: "https://www.instagram.com/kangue.loic" },
      { type: "website", href: "https://kreativeinfluss.com" },
    ],
  },
  {
    name: "Njoume Eteh Claude Arsene Calvin",
    role: { fr: "Co-fondateur · Graphic Designer & Développeur", en: "Co-founder · Graphic Designer & Developer" },
    socials: [
      { type: "linkedin", href: "https://www.linkedin.com/in/claude-arsene-njoume" },
      { type: "github", href: "https://github.com/claude-arsene" },
      { type: "instagram", href: "https://www.instagram.com/claude.arsene" },
    ],
  },
  {
    name: "Naomi Ekoume",
    role: { fr: "Lead UI/UX Designer", en: "Lead UI/UX Designer" },
    socials: [
      { type: "linkedin", href: "https://www.linkedin.com/in/naomi-ekoume" },
      { type: "dribbble", href: "https://dribbble.com/naomi-ekoume" },
      { type: "instagram", href: "https://www.instagram.com/naomi.ekoume" },
    ],
  },
  {
    name: "Idris Tchoumi",
    role: { fr: "Lead Engineer", en: "Lead Engineer" },
    socials: [
      { type: "linkedin", href: "https://www.linkedin.com/in/idris-tchoumi" },
      { type: "github", href: "https://github.com/idris-tchoumi" },
      { type: "twitter", href: "https://twitter.com/idris_tchoumi" },
    ],
  },
  {
    name: "Maëlys Bekolo",
    role: { fr: "Brand & Graphic Designer", en: "Brand & Graphic Designer" },
    socials: [
      { type: "linkedin", href: "https://www.linkedin.com/in/maelys-bekolo" },
      { type: "instagram", href: "https://www.instagram.com/maelys.bekolo" },
      { type: "dribbble", href: "https://dribbble.com/maelys-bekolo" },
    ],
  },
  {
    name: "Samuel Nguini",
    role: { fr: "Stratégie & Communication", en: "Strategy & Communication" },
    socials: [
      { type: "linkedin", href: "https://www.linkedin.com/in/samuel-nguini" },
      { type: "twitter", href: "https://twitter.com/samuel_nguini" },
    ],
  },
  {
    name: "Linda Owono",
    role: { fr: "Community & Content", en: "Community & Content" },
    socials: [
      { type: "linkedin", href: "https://www.linkedin.com/in/linda-owono" },
      { type: "instagram", href: "https://www.instagram.com/linda.owono" },
      { type: "twitter", href: "https://twitter.com/linda_owono" },
    ],
  },
];

const socialIcon = {
  linkedin: Linkedin,
  instagram: Instagram,
  twitter: Twitter,
  github: Github,
  dribbble: Dribbble,
  website: Globe,
} as const;

function About() {
  const { t, lang } = useI18n();
  return (
    <>
      <section className="container-x pt-24 pb-20">
        <p className="eyebrow">{t("about.eyebrow")}</p>
        <h1 className="font-display text-display-1 mt-6 max-w-5xl">{t("about.title")}</h1>
      </section>

      <section className="container-x pb-28 grid md:grid-cols-12 gap-10 hairline-t pt-16">
        <p className="md:col-span-4 eyebrow">· {lang === "fr" ? "Studio" : "Studio"}</p>
        <Reveal className="md:col-span-8">
          <p className="text-xl md:text-2xl leading-snug font-display max-w-3xl">
            {t("about.body")}
          </p>
        </Reveal>
      </section>

      <section className="bg-surface hairline-t">
        <div className="container-x py-24 grid md:grid-cols-2 gap-px bg-hairline">
          <Reveal delay={0}>
            <div className="bg-surface p-10 md:p-14">
              <p className="eyebrow">· {t("about.mission.title")}</p>
              <h2 className="font-display text-3xl md:text-4xl mt-6">{t("about.mission.title")}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">{t("about.mission.body")}</p>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="bg-surface p-10 md:p-14">
              <p className="eyebrow">· {t("about.vision.title")}</p>
              <h2 className="font-display text-3xl md:text-4xl mt-6">{t("about.vision.title")}</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">{t("about.vision.body")}</p>
            </div>
          </Reveal>
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
              <li className="bg-background p-8 h-full flex flex-col justify-between min-h-[260px] group">
                {m.photo ? (
                  <div className="h-20 w-20 overflow-hidden rounded-full border border-hairline">
                    <img src={m.photo} alt={m.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                ) : (
                  <div className="h-20 w-20 rounded-full border border-hairline flex items-center justify-center font-display text-base text-muted-foreground group-hover:border-primary group-hover:text-primary transition-colors">
                    {m.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                  </div>
                )}
                <div>
                  <h3 className="font-display text-2xl mt-10">{m.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{m.role[lang]}</p>
                  <div className="mt-5 flex items-center gap-3">
                    {m.socials.map((s) => {
                      const Icon = socialIcon[s.type];
                      return (
                        <a
                          key={s.type + s.href}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${m.name} · ${s.type}`}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-hairline text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                        >
                          <Icon size={14} />
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
        <Reveal>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 rounded-full border border-foreground px-7 py-4 text-sm uppercase tracking-[0.2em] hover:bg-primary hover:border-primary hover:text-primary-foreground transition-colors"
          >
            {t("cta.start")}
          </Link>
        </Reveal>
      </section>
    </>
  );
}
