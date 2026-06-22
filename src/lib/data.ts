export type Service = {
  slug: string;
  number: string;
  title: { fr: string; en: string };
  short: { fr: string; en: string };
  long: { fr: string; en: string };
  process: { fr: string[]; en: string[] };
  deliverables: { fr: string[]; en: string[] };
};

export const services: Service[] = [
  {
    slug: "web-mobile",
    number: "01",
    title: { fr: "Développement Web & Mobile", en: "Web & Mobile Development" },
    short: {
      fr: "Plateformes performantes, scalables et accessibles.",
      en: "Performant, scalable, accessible platforms.",
    },
    long: {
      fr: "Nous concevons et développons des sites, applications et plateformes sur-mesure · du marketing site à la SaaS complexe, en passant par les applications mobiles natives et hybrides.",
      en: "We design and build custom websites, applications and platforms · from marketing sites to complex SaaS, including native and hybrid mobile apps.",
    },
    process: {
      fr: ["Audit & spécifications techniques", "Architecture & choix de stack", "Développement itératif", "QA, performance & SEO", "Déploiement & monitoring"],
      en: ["Audit & technical specs", "Architecture & stack choices", "Iterative development", "QA, performance & SEO", "Deployment & monitoring"],
    },
    deliverables: {
      fr: ["Code source documenté", "Design system intégré", "Pipeline CI/CD", "Documentation technique", "Support post-lancement"],
      en: ["Documented source code", "Integrated design system", "CI/CD pipeline", "Technical documentation", "Post-launch support"],
    },
  },
  {
    slug: "ui-ux",
    number: "02",
    title: { fr: "Design UI/UX", en: "UI/UX Design" },
    short: {
      fr: "Interfaces claires, parcours intentionnels.",
      en: "Clear interfaces, intentional flows.",
    },
    long: {
      fr: "De la recherche utilisateur au design system, nous construisons des produits digitaux pensés pour la clarté, la conversion et l'usage réel.",
      en: "From user research to design systems, we craft digital products built for clarity, conversion and real-world use.",
    },
    process: {
      fr: ["Recherche & cadrage", "Wireframes & flows", "Maquettes haute-fidélité", "Prototypage & tests", "Design system"],
      en: ["Research & framing", "Wireframes & flows", "High-fidelity mockups", "Prototyping & testing", "Design system"],
    },
    deliverables: {
      fr: ["Maquettes Figma", "Design tokens", "Composants documentés", "Prototypes interactifs", "Guidelines d'usage"],
      en: ["Figma mockups", "Design tokens", "Documented components", "Interactive prototypes", "Usage guidelines"],
    },
  },
  {
    slug: "graphic-design",
    number: "03",
    title: { fr: "Graphic Design & Identité", en: "Graphic Design & Identity" },
    short: {
      fr: "Identités visuelles et systèmes graphiques cohérents.",
      en: "Visual identities and coherent graphic systems.",
    },
    long: {
      fr: "Logos, chartes, supports print et digitaux : nous construisons des systèmes visuels qui se déclinent avec rigueur sur tous les points de contact.",
      en: "Logos, guidelines, print and digital assets: we build visual systems that scale with rigor across every touchpoint.",
    },
    process: {
      fr: ["Discovery & moodboard", "Conception du logo", "Système graphique", "Application sur supports", "Brand book"],
      en: ["Discovery & moodboard", "Logo design", "Graphic system", "Application on assets", "Brand book"],
    },
    deliverables: {
      fr: ["Logo & déclinaisons", "Palette & typographie", "Templates print/digital", "Brand guidelines", "Assets sources"],
      en: ["Logo & variations", "Palette & typography", "Print/digital templates", "Brand guidelines", "Source assets"],
    },
  },
  {
    slug: "strategy",
    number: "04",
    title: { fr: "Stratégie de Communication & Marketing", en: "Communication & Marketing Strategy" },
    short: {
      fr: "Positionnement, narratif et plan d'action.",
      en: "Positioning, narrative and action plan.",
    },
    long: {
      fr: "Nous structurons votre prise de parole : audit, positionnement, messaging, plan éditorial et roadmap de campagnes alignées sur vos objectifs business.",
      en: "We structure your voice: audit, positioning, messaging, editorial plan and campaign roadmap aligned with business goals.",
    },
    process: {
      fr: ["Audit marque & marché", "Positionnement & messaging", "Plan stratégique 360", "Roadmap éditoriale", "KPI & suivi"],
      en: ["Brand & market audit", "Positioning & messaging", "360 strategic plan", "Editorial roadmap", "KPIs & tracking"],
    },
    deliverables: {
      fr: ["Brand strategy doc", "Tone of voice", "Plan éditorial", "Calendrier de campagnes", "Tableau de bord KPI"],
      en: ["Brand strategy doc", "Tone of voice", "Editorial plan", "Campaign calendar", "KPI dashboard"],
    },
  },
  {
    slug: "community",
    number: "05",
    title: { fr: "Community Management", en: "Community Management" },
    short: {
      fr: "Présence sociale rigoureuse et engagée.",
      en: "Rigorous, engaged social presence.",
    },
    long: {
      fr: "Gestion quotidienne de vos réseaux sociaux : création de contenus, modération, animation de communauté et reporting de performance.",
      en: "Day-to-day management of your social channels: content creation, moderation, community animation and performance reporting.",
    },
    process: {
      fr: ["Audit social & benchmark", "Stratégie de contenu", "Production & publication", "Modération & engagement", "Reporting mensuel"],
      en: ["Social audit & benchmark", "Content strategy", "Production & publication", "Moderation & engagement", "Monthly reporting"],
    },
    deliverables: {
      fr: ["Calendrier éditorial", "Contenus visuels & copy", "Modération quotidienne", "Reporting & insights", "Veille concurrentielle"],
      en: ["Editorial calendar", "Visual content & copy", "Daily moderation", "Reporting & insights", "Competitive watch"],
    },
  },
];

export type CaseStudy = {
  slug: string;
  client: string;
  year: string;
  scope: { fr: string; en: string };
  title: { fr: string; en: string };
  tagline: { fr: string; en: string };
  problem: { fr: string; en: string };
  analysis: { fr: string; en: string };
  process: { fr: string; en: string };
  solution: { fr: string; en: string };
};

export const cases: CaseStudy[] = [
  {
    slug: "atelier-noma",
    client: "Atelier Noma",
    year: "2025",
    scope: { fr: "Identité · Site e-commerce", en: "Identity · E-commerce site" },
    title: {
      fr: "Repositionnement d'une maison de mobilier d'auteur.",
      en: "Repositioning a contemporary furniture house.",
    },
    tagline: { fr: "De l'artisan local au studio international.", en: "From local craft to international studio." },
    problem: {
      fr: "Atelier Noma souffrait d'une identité fragmentée et d'un site dépassé qui ne reflétait pas la qualité de ses pièces ni n'absorbait sa croissance internationale.",
      en: "Atelier Noma had a fragmented identity and an outdated site that neither reflected the quality of its pieces nor supported its international growth.",
    },
    analysis: {
      fr: "Audit de marque, entretiens clients et benchmark sur 20 maisons concurrentes ont révélé un besoin de clarté typographique, d'une narration produit éditoriale et d'une expérience d'achat sans friction.",
      en: "Brand audit, customer interviews and a benchmark across 20 competing houses revealed a need for typographic clarity, editorial product storytelling and a frictionless purchase journey.",
    },
    process: {
      fr: "Refonte du système de marque (logo, palette, typographies), création d'un design system modulaire, développement headless sur stack moderne et migration de 400 références produits.",
      en: "Brand system redesign (logo, palette, typography), modular design system, headless development on a modern stack and migration of 400 product references.",
    },
    solution: {
      fr: "Un site éditorial-commerce qui place chaque pièce dans son contexte. +62% de conversion, panier moyen ×1.4, durée de session triplée dans les six mois suivant le lancement.",
      en: "An editorial-commerce site that places every piece in context. +62% conversion, average cart ×1.4, session duration tripled within six months after launch.",
    },
  },
  {
    slug: "lumen-analytics",
    client: "Lumen Analytics",
    year: "2024",
    scope: { fr: "Produit SaaS · Design System", en: "SaaS product · Design System" },
    title: {
      fr: "Une plateforme analytics lisible, sans compromis.",
      en: "A readable analytics platform, without compromise.",
    },
    tagline: { fr: "Simplifier sans appauvrir.", en: "Simplify without flattening." },
    problem: {
      fr: "L'outil offrait une puissance analytique reconnue mais souffrait d'une interface dense et intimidante qui freinait l'adoption par les profils non-techniques.",
      en: "The tool offered renowned analytical power but suffered from a dense, intimidating UI that slowed adoption among non-technical users.",
    },
    analysis: {
      fr: "Tests utilisateurs sur 18 profils, mapping des parcours critiques et hiérarchisation des informations à l'aide de heatmaps. 70% des actions étaient concentrées sur 4 écrans.",
      en: "User tests on 18 profiles, mapping of critical journeys and information prioritisation via heatmaps. 70% of actions were concentrated on 4 screens.",
    },
    process: {
      fr: "Refonte de l'architecture de l'information, création d'un design system documenté en 120 composants et accompagnement de l'équipe produit pendant 6 mois.",
      en: "Information architecture redesign, 120-component documented design system and 6 months of product team coaching.",
    },
    solution: {
      fr: "Une interface respirée qui rend la donnée lisible au premier regard. Le NPS produit passe de 22 à 47 et le temps moyen d'onboarding est divisé par trois.",
      en: "A breathing interface that makes data readable at first glance. Product NPS rose from 22 to 47 and average onboarding time was divided by three.",
    },
  },
  {
    slug: "kintela",
    client: "Kintela",
    year: "2024",
    scope: { fr: "Identité · Stratégie · Site", en: "Identity · Strategy · Site" },
    title: {
      fr: "Lancer une marque de café spécialty avec une voix propre.",
      en: "Launching a specialty coffee brand with its own voice.",
    },
    tagline: { fr: "Du grain à la marque.", en: "From bean to brand." },
    problem: {
      fr: "Une jeune marque sans identité, sans positionnement clair et sans présence digitale, à lancer en 12 semaines avant l'ouverture de son flagship store.",
      en: "A young brand with no identity, no clear positioning and no digital presence, to launch within 12 weeks before its flagship opening.",
    },
    analysis: {
      fr: "Étude du marché specialty, identification d'un angle culturel singulier (croisement Afrique de l'Est × Japon) et structuration d'un univers visuel monochrome ponctué d'un accent vif.",
      en: "Specialty market study, identification of a singular cultural angle (East Africa × Japan) and a monochrome visual world punctuated by a vivid accent.",
    },
    process: {
      fr: "Naming, identité visuelle complète, déclinaisons packaging, site vitrine et e-shop, accompagnement éditorial Instagram pendant la phase de lancement.",
      en: "Naming, full visual identity, packaging variations, brand site and e-shop, Instagram editorial support during launch phase.",
    },
    solution: {
      fr: "Une marque immédiatement reconnaissable. Pré-commandes épuisées en 9 jours, +18k abonnés en 3 mois, ouverture du flagship store accueillie par la presse locale et internationale.",
      en: "An instantly recognisable brand. Pre-orders sold out in 9 days, +18k followers in 3 months, flagship opening covered by local and international press.",
    },
  },
  {
    slug: "fjord-bank",
    client: "Fjord Bank",
    year: "2025",
    scope: { fr: "Produit · Design System", en: "Product · Design System" },
    title: {
      fr: "Repenser l'app bancaire d'une néo-banque européenne.",
      en: "Rethinking the mobile app of a European neo-bank.",
    },
    tagline: { fr: "Calme, clair, gouvernable.", en: "Calm, clear, governable." },
    problem: {
      fr: "L'application accumulait des fonctionnalités sans architecture claire et le NPS stagnait depuis 18 mois autour de la moyenne du secteur.",
      en: "The app accumulated features with no clear architecture and NPS had plateaued for 18 months around the sector average.",
    },
    analysis: {
      fr: "Atelier de priorisation produit, simplification du modèle de comptes, refonte de la hiérarchie typographique et test de 4 directions d'interface auprès d'utilisateurs réels.",
      en: "Product prioritisation workshop, account model simplification, typographic hierarchy redesign and 4 UI directions tested with real users.",
    },
    process: {
      fr: "Design system mobile complet, refonte de 38 écrans clés, design tokens partagés iOS/Android et release pilotée sur 8 semaines.",
      en: "Full mobile design system, 38 key screens redesigned, shared iOS/Android tokens and a pilot release rolled out over 8 weeks.",
    },
    solution: {
      fr: "Une expérience plus calme, plus rapide et plus accessible. +14 points de NPS, -23% de tickets support et adoption de la nouvelle home par 92% de la base en 30 jours.",
      en: "A calmer, faster, more accessible experience. +14 NPS points, -23% support tickets and 92% adoption of the new home in 30 days.",
    },
  },
];
