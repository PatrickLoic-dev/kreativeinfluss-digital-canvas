export type Service = {
  slug: string;
  number: string;
  title: { fr: string; en: string };
  short: { fr: string; en: string };
  long: { fr: string; en: string };
  process: { fr: string[]; en: string[] };
  processDescriptions: { fr: string[]; en: string[] };
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
    processDescriptions: {
      fr: [
        "Nous analysons en profondeur vos besoins métier, auditons votre infrastructure existante et formalisons les spécifications techniques et fonctionnelles de votre projet.",
        "Nous définissons l'architecture technique adaptée à vos contraintes de performance, scalabilité et budget, et sélectionnons la stack technologique optimale.",
        "Nous développons votre solution par itérations courtes avec des revues régulières, assurant transparence et capacité d'ajustement tout au long du projet.",
        "Nous réalisons des tests approfondis sur tous les devices, optimisons les performances et mettons en place les bonnes pratiques SEO techniques.",
        "Nous déployons votre solution en production avec une pipeline CI/CD robuste, configurons le monitoring et assurons un support post-lancement.",
      ],
      en: [
        "We deeply analyze your business needs, audit your existing infrastructure and formalize the technical and functional specifications of your project.",
        "We define the technical architecture suited to your performance, scalability and budget constraints, and select the optimal technology stack.",
        "We develop your solution through short iterations with regular reviews, ensuring transparency and adjustability throughout the project.",
        "We carry out thorough testing on all devices, optimize performance and implement technical SEO best practices.",
        "We deploy your solution to production with a robust CI/CD pipeline, configure monitoring and provide post-launch support.",
      ],
    },
    deliverables: {
      fr: [
        "Rapport d'audit technique · Cahier des charges fonctionnel",
        "Architecture technique documentée · Stack & outils validés",
        "Code source versionné · Sprints review & démo",
        "Rapport de tests · Audit Lighthouse · Optimisations SEO",
        "Environnement de production · Monitoring & alertes · Support post-lancement",
      ],
      en: [
        "Technical audit report · Functional requirements document",
        "Documented technical architecture · Validated stack & tools",
        "Versioned source code · Sprint reviews & demos",
        "Test report · Lighthouse audit · SEO optimizations",
        "Production environment · Monitoring & alerts · Post-launch support",
      ],
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
    processDescriptions: {
      fr: [
        "Nous menons des entretiens utilisateurs, analysons les parcours existants et cadrons les enjeux métier pour orienter le design.",
        "Nous structurons l'information et prototypons les parcours clés pour valider l'architecture de votre produit avant le design visuel.",
        "Nous concevons les interfaces finales avec un niveau de détail pixel-perfect, en veillant à la cohérence visuelle et à l'accessibilité.",
        "Nous créons des prototypes interactifs et menons des tests utilisateurs pour valider les choix d'interface avant le développement.",
        "Nous construisons un design system complet et documenté pour garantir la scalabilité et la cohérence de votre produit sur le long terme.",
      ],
      en: [
        "We conduct user interviews, analyze existing journeys and frame business challenges to guide the design.",
        "We structure information and prototype key journeys to validate your product's architecture before visual design.",
        "We design the final interfaces with pixel-perfect detail, ensuring visual consistency and accessibility.",
        "We create interactive prototypes and run user tests to validate interface choices before development.",
        "We build a complete, documented design system to ensure the scalability and consistency of your product in the long term.",
      ],
    },
    deliverables: {
      fr: [
        "Rapport de recherche utilisateur · Matrice de priorisation",
        "Wireframes validés · User flows documentés",
        "Maquettes finales Figma · Spécifications de design",
        "Prototype interactif · Rapport de tests utilisateurs",
        "Design system documenté · Composants réutilisables · Design tokens",
      ],
      en: [
        "User research report · Prioritization matrix",
        "Validated wireframes · Documented user flows",
        "Final Figma mockups · Design specifications",
        "Interactive prototype · User test report",
        "Documented design system · Reusable components · Design tokens",
      ],
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
    processDescriptions: {
      fr: [
        "Nous explorons votre univers, vos valeurs et votre audience pour définir la direction créative et établir un moodboard directionnel.",
        "Nous concevons votre logo et ses déclinaisons en veillant à sa lisibilité, sa mémorabilité et sa capacité à se décliner sur tous les supports.",
        "Nous construisons un système graphique cohérent incluant palette, typographies, pictogrammes et règles de composition.",
        "Nous appliquons l'identité sur l'ensemble de vos supports de communication print et digitaux avec rigueur et précision.",
        "Nous rédigons un brand book complet formalisant l'usage de votre identité pour garantir sa pérennité et sa cohérence.",
      ],
      en: [
        "We explore your universe, values and audience to define the creative direction and establish a directional moodboard.",
        "We design your logo and its variations, ensuring its readability, memorability and ability to adapt across all media.",
        "We build a coherent graphic system including palette, typography, iconography and composition rules.",
        "We apply the identity across all your print and digital communication materials with rigor and precision.",
        "We write a complete brand book formalizing the use of your identity to ensure its longevity and consistency.",
      ],
    },
    deliverables: {
      fr: [
        "Moodboard validé · Direction créative approuvée",
        "Logo & déclinaisons · Fichiers sources vectoriels",
        "Palette de couleurs · Typographies · Grille graphique",
        "Templates print & digital · Mockups réalistes",
        "Brand book complet · Guidelines d'utilisation",
      ],
      en: [
        "Validated moodboard · Approved creative direction",
        "Logo & variations · Vector source files",
        "Color palette · Typography · Graphic grid",
        "Print & digital templates · Realistic mockups",
        "Complete brand book · Usage guidelines",
      ],
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
    processDescriptions: {
      fr: [
        "Nous réalisons un audit approfondi de votre marque, de votre positionnement actuel et de votre environnement concurrentiel.",
        "Nous définissons votre positionnement différenciant, votre promesse de marque et votre tone of voice.",
        "Nous élaborons un plan d'action intégré couvrant l'ensemble de vos canaux de communication et de vos publics cibles.",
        "Nous structurons votre calendrier de publications et définissons les lignes éditoriales adaptées à chaque canal.",
        "Nous mettons en place des indicateurs de performance et un tableau de bord pour suivre l'efficacité de vos actions de communication.",
      ],
      en: [
        "We carry out an in-depth audit of your brand, current positioning and competitive environment.",
        "We define your differentiating positioning, brand promise and tone of voice.",
        "We develop an integrated action plan covering all your communication channels and target audiences.",
        "We structure your publication calendar and define editorial lines suited to each channel.",
        "We set up performance indicators and a dashboard to track the effectiveness of your communication actions.",
      ],
    },
    deliverables: {
      fr: [
        "Rapport d'audit · Analyse concurrentielle",
        "Positionnement stratégique · Messaging framework",
        "Plan d'action 360° · Roadmap stratégique",
        "Calendrier éditorial · Lignes éditoriales",
        "Tableau de bord KPI · Rapport de suivi mensuel",
      ],
      en: [
        "Audit report · Competitive analysis",
        "Strategic positioning · Messaging framework",
        "360° action plan · Strategic roadmap",
        "Editorial calendar · Editorial lines",
        "KPI dashboard · Monthly tracking report",
      ],
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
    processDescriptions: {
      fr: [
        "Nous analysons votre présence actuelle sur les réseaux sociaux et celle de vos concurrents pour identifier les opportunités.",
        "Nous définissons votre stratégie de contenu, vos thématiques prioritaires et les formats adaptés à chaque plateforme.",
        "Nous produisons les visuels et rédigeons les copies pour chaque publication selon le calendrier éditorial établi.",
        "Nous animons votre communauté au quotidien, répondons aux commentaires et messages et assurons la modération.",
        "Nous vous fournissons un rapport mensuel détaillé avec les performances, les insights et nos recommandations stratégiques.",
      ],
      en: [
        "We analyze your current social media presence and that of your competitors to identify opportunities.",
        "We define your content strategy, priority themes and formats suited to each platform.",
        "We produce the visuals and write the copy for each publication according to the established editorial calendar.",
        "We animate your community daily, respond to comments and messages and ensure moderation.",
        "We provide you with a detailed monthly report with performance, insights and our strategic recommendations.",
      ],
    },
    deliverables: {
      fr: [
        "Audit social media · Benchmark concurrentiel",
        "Stratégie de contenu · Lignes éditoriales",
        "Contenus visuels & copy · Calendrier éditorial",
        "Rapport d'engagement · Veille & réponses",
        "Reporting mensuel · Insights & recommandations",
      ],
      en: [
        "Social media audit · Competitive benchmark",
        "Content strategy · Editorial lines",
        "Visual content & copy · Editorial calendar",
        "Engagement report · Watch & replies",
        "Monthly report · Insights & recommendations",
      ],
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
