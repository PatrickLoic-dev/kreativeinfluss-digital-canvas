import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "fr" | "en";

type Dict = Record<string, string>;

const fr: Dict = {
  "nav.work": "Portfolio",
  "nav.services": "Services",
  "nav.about": "À propos",
  "nav.contact": "Contact",
  "cta.start": "Démarrer un projet",
  "cta.viewAll": "Voir tout",
  "cta.viewWork": "Voir le projet",
  "cta.viewService": "Détails du service",
  "cta.back": "Retour",
  "footer.tagline": "Studio créatif & technologique. Conçu avec intention.",
  "footer.rights": "Tous droits réservés.",
  "footer.based": "Basé en France, livré globalement.",

  "home.eyebrow": "Studio Créatif & Tech — Depuis 2025",
  "home.hero.l1": "Idées",
  "home.hero.l2": "structurées,",
  "home.hero.l3": "impact",
  "home.hero.l4": "mesurable.",
  "home.hero.sub": "Kreativstudio Einfluss conçoit et développe des expériences digitales sur-mesure — design, code et stratégie au service de marques ambitieuses.",
  "home.scroll": "Faites défiler",
  "home.intro.title": "Nous fabriquons des systèmes — pas des décorations.",
  "home.intro.body": "Chaque décision visuelle existe pour clarifier, guider, ou renforcer le message. Nous traduisons des ambitions stratégiques en interfaces, identités et plateformes qui tiennent dans le temps.",
  "home.services.title": "Services",
  "home.work.title": "Sélection récente",
  "home.values.title": "Nos principes",
  "home.cta.title": "Un projet en tête ?",
  "home.cta.sub": "Nous travaillons avec un nombre limité de partenaires chaque trimestre.",

  "about.eyebrow": "À propos",
  "about.title": "Une équipe créative-tech, méthodique et humaine.",
  "about.body": "Kreativstudio Einfluss réunit designers, développeurs et stratèges autour d'une même conviction : la qualité naît de la discipline. Nous combinons design, ingénierie et pensée stratégique pour livrer des produits performants, centrés utilisateurs, et porteurs de sens.",
  "about.mission.title": "Mission",
  "about.mission.body": "Concevoir et construire des solutions digitales sur-mesure qui dépassent les attentes — alliant esthétique et performance pour un impact réel.",
  "about.vision.title": "Vision",
  "about.vision.body": "Devenir un studio créatif-tech de référence, façonnant le futur du web et du design UI/UX par l'innovation et la conscience culturelle.",
  "about.team.title": "L'équipe",
  "about.team.sub": "Une cellule restreinte, multidisciplinaire et engagée.",

  "services.eyebrow": "Services",
  "services.title": "Cinq disciplines, un système.",
  "services.sub": "Chaque expertise est conçue pour s'articuler aux autres — du premier wireframe au déploiement, de l'identité visuelle à la communauté.",
  "service.process": "Processus",
  "service.deliverables": "Livrables",
  "service.related": "Services liés",

  "portfolio.eyebrow": "Portfolio",
  "portfolio.title": "Une sélection de projets récents.",
  "portfolio.sub": "Chaque collaboration est documentée : client, problème, analyse, processus, solution.",
  "case.client": "Client",
  "case.year": "Année",
  "case.scope": "Périmètre",
  "case.problem": "Problème",
  "case.analysis": "Analyse",
  "case.process": "Processus",
  "case.solution": "Solution",
  "case.next": "Projet suivant",

  "contact.eyebrow": "Contact",
  "contact.title": "Parlons de votre projet.",
  "contact.sub": "Décrivez-nous votre ambition. Nous revenons vers vous sous 48h.",
  "contact.form.name": "Nom complet",
  "contact.form.email": "Email",
  "contact.form.company": "Entreprise (optionnel)",
  "contact.form.budget": "Budget estimé",
  "contact.form.message": "Votre projet",
  "contact.form.submit": "Envoyer la demande",
  "contact.form.sent": "Message envoyé. Nous revenons vers vous très vite.",
  "contact.info.title": "Coordonnées",
  "contact.info.hours": "Lun — Ven · 9h — 19h",
};

const en: Dict = {
  "nav.work": "Work",
  "nav.services": "Services",
  "nav.about": "About",
  "nav.contact": "Contact",
  "cta.start": "Start a project",
  "cta.viewAll": "View all",
  "cta.viewWork": "View case",
  "cta.viewService": "Service details",
  "cta.back": "Back",
  "footer.tagline": "Creative & technology studio. Built with intent.",
  "footer.rights": "All rights reserved.",
  "footer.based": "Based in France, delivered globally.",

  "home.eyebrow": "Creative & Tech Studio — Since 2025",
  "home.hero.l1": "Structured",
  "home.hero.l2": "ideas,",
  "home.hero.l3": "measurable",
  "home.hero.l4": "impact.",
  "home.hero.sub": "Kreativstudio Einfluss designs and builds tailored digital experiences — design, code and strategy for ambitious brands.",
  "home.scroll": "Scroll",
  "home.intro.title": "We build systems — not decoration.",
  "home.intro.body": "Every visual decision exists to clarify, guide or reinforce the message. We translate strategic ambition into interfaces, identities and platforms that last.",
  "home.services.title": "Services",
  "home.work.title": "Recent selection",
  "home.values.title": "Our principles",
  "home.cta.title": "Have a project in mind?",
  "home.cta.sub": "We work with a limited number of partners each quarter.",

  "about.eyebrow": "About",
  "about.title": "A creative-tech team, methodical and human.",
  "about.body": "Kreativstudio Einfluss brings together designers, developers and strategists around one belief: quality is the result of discipline. We combine design, engineering and strategic thinking to deliver performant, user-centered products that mean something.",
  "about.mission.title": "Mission",
  "about.mission.body": "To design and build tailored digital solutions that exceed expectations — pairing aesthetics with performance for real impact.",
  "about.vision.title": "Vision",
  "about.vision.body": "To become a reference creative-tech studio, shaping the future of web and UI/UX through innovation and cultural awareness.",
  "about.team.title": "The team",
  "about.team.sub": "A tight, multidisciplinary, committed cell.",

  "services.eyebrow": "Services",
  "services.title": "Five disciplines, one system.",
  "services.sub": "Each expertise is designed to plug into the others — from first wireframe to deployment, from visual identity to community.",
  "service.process": "Process",
  "service.deliverables": "Deliverables",
  "service.related": "Related services",

  "portfolio.eyebrow": "Work",
  "portfolio.title": "A selection of recent projects.",
  "portfolio.sub": "Every collaboration is documented: client, problem, analysis, process, solution.",
  "case.client": "Client",
  "case.year": "Year",
  "case.scope": "Scope",
  "case.problem": "Problem",
  "case.analysis": "Analysis",
  "case.process": "Process",
  "case.solution": "Solution",
  "case.next": "Next project",

  "contact.eyebrow": "Contact",
  "contact.title": "Let's talk about your project.",
  "contact.sub": "Tell us about your ambition. We'll get back to you within 48 hours.",
  "contact.form.name": "Full name",
  "contact.form.email": "Email",
  "contact.form.company": "Company (optional)",
  "contact.form.budget": "Estimated budget",
  "contact.form.message": "Your project",
  "contact.form.submit": "Send request",
  "contact.form.sent": "Message sent. We'll be in touch shortly.",
  "contact.info.title": "Reach us",
  "contact.info.hours": "Mon — Fri · 9am — 7pm",
};

const dicts: Record<Lang, Dict> = { fr, en };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<Ctx | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("ke-lang") as Lang | null;
    if (stored === "fr" || stored === "en") setLangState(stored);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    if (typeof window !== "undefined") window.localStorage.setItem("ke-lang", l);
  };

  const t = (key: string) => dicts[lang][key] ?? dicts.fr[key] ?? key;

  return <I18nContext.Provider value={{ lang, setLang, t }}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
