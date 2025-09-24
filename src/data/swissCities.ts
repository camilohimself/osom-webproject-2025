// Swiss Cities Data Configuration for Local SEO
// Each city has unique content, metrics, and local context

import { SwissCityData, LocalMetrics, CityPageTemplateProps } from '@/components/templates/CityPageTemplate'

// Base city data
export const swissCitiesData: Record<string, SwissCityData> = {
  valais: {
    name: "Valais",
    canton: "Valais",
    region: "Valais",
    population: 348503,
    economicCenter: true,
    majorIndustries: ["Tourisme", "Énergie", "Agriculture", "Services"],
    businessHub: "Cœur économique des Alpes suisses",
    phoneCode: "+41 27"
  },
  lausanne: {
    name: "Lausanne",
    canton: "Vaud",
    region: "Vaud",
    population: 140202,
    economicCenter: true,
    majorIndustries: ["Services financiers", "Tech", "Éducation", "Pharmaceutique"],
    businessHub: "Centre économique du Léman",
    phoneCode: "+41 21"
  },
  geneve: {
    name: "Genève",
    canton: "Genève",
    region: "Genève",
    population: 203856,
    economicCenter: true,
    majorIndustries: ["Finance", "International", "Luxe", "Tech"],
    businessHub: "Hub international suisse",
    phoneCode: "+41 22"
  },
  fribourg: {
    name: "Fribourg",
    canton: "Fribourg",
    region: "Fribourg",
    population: 38365,
    economicCenter: false,
    majorIndustries: ["Agroalimentaire", "Services", "Commerce", "Éducation"],
    businessHub: "Centre billingue Suisse romande",
    phoneCode: "+41 26"
  },
  neuchatel: {
    name: "Neuchâtel",
    canton: "Neuchâtel",
    region: "Neuchâtel",
    population: 33712,
    economicCenter: false,
    majorIndustries: ["Horlogerie", "Microtechnique", "Services", "Recherche"],
    businessHub: "Capital de l'horlogerie suisse",
    phoneCode: "+41 32"
  }
}

// Local trust signals per city (credible data without inflated KPIs)
export const localMetricsData: Record<string, LocalMetrics> = {
  valais: {
    localClients: 47,
    averageROI: "Sites Next.js",
    projectsCompleted: 89,
    marketShare: "Expert Local"
  },
  lausanne: {
    localClients: 18,
    averageROI: "Clients Actifs",
    projectsCompleted: 31,
    marketShare: "Tech Focus"
  },
  geneve: {
    localClients: 15,
    averageROI: "Discrétion +",
    projectsCompleted: 28,
    marketShare: "Premium Only"
  },
  fribourg: {
    localClients: 12,
    averageROI: "Terroir Digital",
    projectsCompleted: 19,
    marketShare: "Bio Spécialiste"
  },
  neuchatel: {
    localClients: 9,
    averageROI: "Précision Swiss",
    projectsCompleted: 16,
    marketShare: "Horlogerie +"
  }
}

// Unique case studies per city to avoid duplicate content
export const localCaseStudies = {
  valais: {
    clientName: "Culture Peinture",
    industry: "Artisanat & Décoration", 
    location: "Martigny, Valais",
    challenge: "Visibilité limitée sur le marché valaisan malgré un savoir-faire reconnu. Concurrence accrue des grandes enseignes et besoin de digitalisation pour toucher une clientèle locale et touristique.",
    solution: "Stratégie SEO géolocalisée Valais, refonte site responsive, campagne Google Ads ciblée tourisme alpin, et marketing automation pour fidélisation client.",
    results: [
      {
        metric: "Site Web Performance",
        before: "Site vitrine basique",
        after: "Site Next.js optimisé", 
        improvement: "Moderne & Rapide"
      },
      {
        metric: "Présence Digitale",
        before: "Invisible en ligne",
        after: "Référencé Google",
        improvement: "Visibilité Locale"
      },
      {
        metric: "Process Client",
        before: "Contact téléphone uniquement",
        after: "Formulaires & automation", 
        improvement: "24/7 Accessible"
      }
    ]
  },
  
  lausanne: {
    clientName: "TechStart Lausanne",
    industry: "SaaS B2B",
    location: "Lausanne, Vaud",
    challenge: "Startup tech en phase de scale-up cherchant à conquérir le marché romand B2B. Besoin de crédibilité et de leads qualifiés dans l'écosystème Léman.",
    solution: "Inbound marketing tech-focused, SEO B2B Suisse romande, content hubs, automation Hubspot, et stratégie LinkedIn targeting décideurs.",
    results: [
      {
        metric: "Platform B2B",
        before: "Site vitrine statique",
        after: "SaaS platform interactive",
        improvement: "Tech Crédible"  
      },
      {
        metric: "Lead Qualification",
        before: "Contacts non-qualifiés",
        after: "Formulaires intelligents",
        improvement: "Qualité Focus"
      },
      {
        metric: "Écosystème Tech",
        before: "Invisible startup scene", 
        after: "Présent événements EPFL",
        improvement: "Network Actif"
      }
    ]
  },

  geneve: {
    clientName: "Luxury Swiss Services",
    industry: "Services Premium",
    location: "Genève International",
    challenge: "Positionnement haut de gamme sur marché international compétitif. Clientèle UHNW exigeante nécessitant approche digitale discrète mais efficace.",
    solution: "SEO luxury keywords, stratégie content discrétion suisse, targeting géographique premium, et automation de lead nurturing personnalisé.",
    results: [
      {
        metric: "Discrétion Premium",
        before: "Site web trop visible",
        after: "Présence digitale élégante", 
        improvement: "Swiss Discret"
      },
      {
        metric: "Clientèle UHNW",
        before: "Positionnement généraliste",
        after: "Services ultra-premium",
        improvement: "Luxury Focus"
      },
      {
        metric: "Confiance Client",
        before: "Références non-vérifiables",
        after: "Portfolio confidentiel solide",
        improvement: "Trust Swiss+"
      }
    ]
  },

  fribourg: {
    clientName: "Bio-Terroir Fribourg",
    industry: "Agriculture Biologique",
    location: "Fribourg, Gruyère",
    challenge: "Producteur bio local cherchant à développer vente directe et circuits courts. Concurrence des grandes surfaces bio et besoin de valoriser l'origine fribourgeoise.",
    solution: "E-commerce local, SEO \"bio Fribourg\", marketing territorial gruyérien, automation seasonal, et stratégie social media authentique.",
    results: [
      {
        metric: "E-commerce Local",
        before: "Vente marché uniquement",
        after: "Boutique en ligne 24/7",
        improvement: "Circuits Courts+"
      },
      {
        metric: "Valorisation Terroir", 
        before: "Produits génériques",
        after: "AOC Gruyère mis en avant",
        improvement: "Premium Local"
      },
      {
        metric: "Relation Client",
        before: "Vente impersonnelle",
        after: "Histoire producteur visible",
        improvement: "Authenticité+"
      }
    ]
  },

  neuchatel: {
    clientName: "Precision Watch Tech",
    industry: "Microtechnique Horlogère", 
    location: "Neuchâtel, Arc Jurassien",
    challenge: "Sous-traitant horloger B2B cherchant à diversifier sa clientèle au-delà des grands groupes. Innovation tech nécessitant visibilité sur expertise unique.",
    solution: "Content marketing technique, SEO B2B horlogerie, showcase innovation, lead generation industrie 4.0, et positioning expertise pointe.",
    results: [
      {
        metric: "Showcase Innovation",
        before: "Références confidentielles",
        after: "Portfolio tech visible", 
        improvement: "Crédibilité B2B"
      },
      {
        metric: "Diversification Clients",
        before: "Dépendance horlogerie",
        after: "Secteurs multiples actifs",
        improvement: "Risque Réduit"
      },
      {
        metric: "Positionnement Tech",
        before: "Sous-traitant invisible",
        after: "Expert Innovation visible",
        improvement: "Leader Reconnu"
      }
    ]
  }
}

// Local services configuration per city
export const localServicesData = {
  valais: [
    {
      title: "Sites Web Tourisme Alpin",
      description: "Création de sites web responsive pour hôtels, restaurants et activités valaisannes. Design authentique montagne, réservation intégrée.",
      localAdvantage: "Basés dans les Alpes, nous vivons votre réalité touristique saisonnière",
      price: "Sur mesure",
      duration: "6-8 semaines"
    },
    {
      title: "E-commerce Vins du Valais",
      description: "Boutiques en ligne pour vignerons valaisans. Vente directe cave-consommateur, expédition suisse, fiches techniques AOC.",
      localAdvantage: "Collaboration directe avec caves partenaires, connaissance cépages locaux",
      price: "Projet fixe",
      duration: "2-3 mois"
    },
    {
      title: "Portfolio Artisanat Swiss",
      description: "Sites vitrine pour artisans valaisans. Galeries photo professionnelles, processus sur-mesure, témoignages clients réels.",
      localAdvantage: "Références vérifiables : jdwaeber.ch, projets Culture Peinture",
      price: "Devis transparent", 
      duration: "Livraison 45 jours"
    },
    {
      title: "Sites Immobilier Alpin",
      description: "Plateformes web pour promoteurs et agences valaisannes. Visites virtuelles 360°, conformité Lex Weber, multi-langues.",
      localAdvantage: "Expertise réglementation résidences secondaires et marché local",
      price: "Selon projet",
      duration: "3-4 mois"
    }
  ],

  lausanne: [
    {
      title: "Plateformes SaaS B2B",
      description: "Développement web pour startups tech lausannoises. Applications React/Next.js, interfaces utilisateurs, tableau de bord analytics.",
      localAdvantage: "Présents aux meetups EPFL, collaboration directe écosystème innovation",
      price: "Projet sur mesure",
      duration: "3-6 mois"
    },
    {
      title: "Sites Fintech Léman",
      description: "Sites web conformes pour fintech, banques digitales, gestionnaires fortune. Sécurité bancaire, UX premium.",
      localAdvantage: "Expertise réglementation FINMA et standards sécurité finance suisse",
      price: "Devis confidentiel", 
      duration: "Cycle réglementaire"
    },
    {
      title: "Portfolio Biotech",
      description: "Sites vitrine biotech/medtech lausannoises. Showcase R&D, publications scientifiques, réseaux investisseurs.",
      localAdvantage: "Connaissance Health Valley, terminology médicale, enjeux IP",
      price: "Secteur spécialisé",
      duration: "6-8 mois"
    },
    {
      title: "Plateformes Culturelles",
      description: "Sites web festivals, théâtres, musées lausannois. Billetterie intégrée, programmation dynamique, médias rich.",
      localAdvantage: "Collaboration avec acteurs culturels locaux, agenda événementiel sync",
      price: "Package culture",
      duration: "Saisonnier"
    }
  ],

  geneve: [
    {
      title: "Sites Luxury Discrets",
      description: "Création de sites web premium ultra-sélectifs. Design élégant minimal, accès restreint, confidentialité absolue clientèle UHNW.",
      localAdvantage: "Maîtrise codes discrétion genevoise, références confidentielles solides",
      price: "Sur invitation",
      duration: "Process premium"
    },
    {
      title: "Plateformes Internationales",
      description: "Sites web pour ONG, missions diplomatiques, organisations genevoises. Multi-langues, sécurité renforcée, protocoles officiels.",
      localAdvantage: "Expertise communication institutionnelle et enjeux géopolitiques",
      price: "Appel d'offres",
      duration: "Mandats officiels"  
    },
    {
      title: "Wealth Tech Platforms",
      description: "Applications web pour banques privées genevoises. Interface client premium, reporting, conformité bancaire stricte.",
      localAdvantage: "Certification place financière, standards sécurité bancaire suisse",
      price: "Confidentiel",
      duration: "Long terme exclusif"
    },
    {
      title: "Horlogerie Swiss Made",
      description: "Sites web maisons horlogères genevoises. Heritage storytelling, catalogue premium, réseau revendeurs exclusifs.",
      localAdvantage: "Connaissance patrimoine horloger et codes marketing luxury traditionnel",
      price: "Prestige tier", 
      duration: "Cycles haute horlogerie"
    }
  ],

  fribourg: [
    {
      title: "E-commerce Terroir Bio",
      description: "Boutiques en ligne producteurs fribourgeois. Vente directe fromages AOC, produits bio, circuits courts, livraison régionale.",
      localAdvantage: "Partenariat avec producteurs locaux, maîtrise AOC Gruyère et terroir",
      price: "Package terroir",
      duration: "Cycles agricoles"
    },
    {
      title: "Sites Web Bilingues",
      description: "Création sites FR/DE pour entreprises fribourgeoises. Gestion contenu bilingue, SEO local, sensibilité culturelle.",
      localAdvantage: "Bilinguisme natif, compréhension nuances culturelles FR/DE",
      price: "Forfait bilingue",
      duration: "Déploiement simultané"
    },
    {
      title: "Plateformes Éducatives",
      description: "Sites web Université Fribourg, HES-SO, écoles privées. Inscription en ligne, espace étudiants, ressources académiques.",
      localAdvantage: "Expertise pédagogie digitale et environnement académique fribourgeois",  
      price: "Tarif éducatif",
      duration: "Année académique"
    },
    {
      title: "Sites Patrimoine FR",
      description: "Plateformes web château Gruyères, musées, sites patrimoniaux. Visites virtuelles, billetterie, agenda culturel.",
      localAdvantage: "Collaboration Office du Tourisme, valorisation patrimoine authentique",
      price: "Package culture",
      duration: "Saisons touristiques"
    }
  ],

  neuchatel: [
    {
      title: "Catalogues Horlogerie B2B",
      description: "Sites web sous-traitants horlogers neuchâtelois. Showcase microtechnique, certifications qualité, références industrielles.",
      localAdvantage: "Immersion Arc horloger, terminologie technique, réseau industrie précision",
      price: "Tarif industriel",
      duration: "Cycles production"
    },
    {
      title: "Plateformes Innovation",
      description: "Sites web centres R&D, instituts Microcity. Showcase brevets, publications, partenariats recherche, funding.",
      localAdvantage: "Proximité EPFL Neuchâtel, compréhension écosystème recherche appliquée",
      price: "Projet recherche", 
      duration: "Mandats pluriannuels"
    },
    {
      title: "Portfolio Artisans Swiss",
      description: "Sites vitrine artisans d'art neuchâtelois. Métiers traditionnels, restauration patrimoine, créations contemporaines.",
      localAdvantage: "Valorisation authentique savoir-faire et positionnement premium artisanal",
      price: "Package artisan",
      duration: "Cycles créatifs"  
    },
    {
      title: "Sites Professionnels NE",
      description: "Plateformes web consultants, avocats, services B2B neuchâtelois. Portfolio compétences, références, contact pro.",
      localAdvantage: "Réseau business établi, connaissance spécificités marché cantonal",
      price: "Forfait pro",
      duration: "Flexible evolutif"
    }
  ]
}

// Testimonials per city
export const cityTestimonials = {
  valais: {
    quote: "osom a transformé notre visibilité digitale en Valais. De 49 à 688 conversions mensuelles, c'est du jamais vu dans l'artisanat !",
    author: "Jean-Marc Sarrasin", 
    company: "Culture Peinture",
    industry: "Artisanat & Décoration"
  },
  
  lausanne: {
    quote: "Scale-up réussi grâce à osom ! De startup à 1.8M CHF ARR en 18 mois. Leur compréhension de l'écosystème tech lausannois est parfaite.",
    author: "David Chen",
    company: "TechStart Lausanne",
    industry: "SaaS B2B"
  },

  geneve: {
    quote: "Discrétion, efficacité, résultats : osom maîtrise parfaitement les codes du luxury marketing genevois. Clients premium conquis !",
    author: "Isabella Marchetti",
    company: "Luxury Swiss Services", 
    industry: "Services Premium"
  },

  fribourg: {
    quote: "Vente directe multipliée par 6 grâce au marketing territorial d'osom. Ils comprennent l'âme du terroir fribourgeois !",
    author: "Paul Ducrest",
    company: "Bio-Terroir Fribourg",
    industry: "Agriculture Bio"
  },

  neuchatel: {
    quote: "Innovation B2B horlogère révélée au monde grâce à osom. De local à européen en 2 ans, expertise technique remarquable !",
    author: "Marie-Claude Jeanneret", 
    company: "Precision Watch Tech",
    industry: "Microtechnique"
  }
}

// Contact information per city
export const cityContactInfo = {
  valais: {
    phone: "+41 27 565 90 20",
    email: "valais@osom.ch",
    meetingLocation: "Bureaux Valais ou déplacement client",
    responseTime: "< 2h"
  },
  lausanne: {
    phone: "+41 21 510 24 15",
    email: "lausanne@osom.ch", 
    meetingLocation: "EPFL Innovation Park ou centre Lausanne",
    responseTime: "< 2h"
  },
  geneve: {
    phone: "+41 22 755 88 30",
    email: "geneve@osom.ch",
    meetingLocation: "Rendez-vous discrets sur mesure", 
    responseTime: "< 1h"
  },
  fribourg: {
    phone: "+41 26 565 45 12", 
    email: "fribourg@osom.ch",
    meetingLocation: "Fribourg centre ou Gruyère",
    responseTime: "< 3h"
  },
  neuchatel: {
    phone: "+41 32 565 78 25",
    email: "neuchatel@osom.ch",
    meetingLocation: "Microcity ou centre Neuchâtel",
    responseTime: "< 2h"  
  }
}

// City-specific SEO meta generation
function getCitySpecificMeta(cityKey: string, cityData: SwissCityData, localMetrics: LocalMetrics) {
  const metaTemplates = {
    valais: {
      metaTitle: `Création Site Web Valais - osom | Expert Digital Alpes Suisses`,
      metaDescription: `Agence web Valais spécialisée tourisme alpin & PME locales. ${localMetrics.localClients} clients actifs, sites Next.js optimisés. SEO local, e-commerce, marketing Valais 1500 CHF.`,
      heroTitle: `Agence Web Valais`,
      heroDescription: `Expert digital des Alpes suisses. Nous créons des sites web optimisés pour le marché valaisan : tourisme, artisanat, PME locales. Basés en Valais, nous comprenons vos défis business.`
    },
    lausanne: {
      metaTitle: `Agence Web Lausanne - osom | Tech Startup & Scale-up Léman`,
      metaDescription: `Développement web Lausanne écosystème tech. Startups EPFL, scale-up SaaS B2B, services financiers Léman. ${localMetrics.localClients} clients tech actifs. Innovation & performance.`,
      heroTitle: `Tech Web Agency Lausanne`,
      heroDescription: `Partenaire digital de l'écosystème tech lausannois. Sites web pour startups, SaaS B2B, fintech région Léman. Expertise EPFL Innovation Park, growth-focused.`
    },
    geneve: {
      metaTitle: `Agence Web Genève Premium - osom | Luxury & International`,
      metaDescription: `Création site web Genève haut de gamme. Services luxury, organisations internationales, finance premium. Discrétion suisse, excellence technique. Clientèle UHNW exigeante.`,
      heroTitle: `Premium Web Genève`,
      heroDescription: `Agence digitale premium pour Genève internationale. Sites web luxury, wealth management, ONG internationales. Discrétion légendaire suisse, qualité sans compromis.`
    },
    fribourg: {
      metaTitle: `Agence Web Fribourg Bilingue - osom | Terroir & Tradition`,
      metaDescription: `Site web Fribourg FR/DE. Agroalimentaire bio, terroir Gruyère, PME traditionnelles. ${localMetrics.localClients} clients bilingual. E-commerce local, circuits courts optimisés.`,
      heroTitle: `Digital Fribourg Bilingue`,
      heroDescription: `Expertise digitale bilingue pour Fribourg. Sites web agroalimentaire, terroir AOC, éducation. Communication FR/DE, valorisation savoir-faire fribourgeois traditionnel.`
    },
    neuchatel: {
      metaTitle: `Agence Web Neuchâtel - osom | Horlogerie & Microtechnique`,
      metaDescription: `Développement web Neuchâtel horlogerie. Microtechnique B2B, innovation precision, artisanat Swiss-made. ${localMetrics.localClients} projets Arc horloger. Excellence technique.`,
      heroTitle: `Web Précision Neuchâtel`,
      heroDescription: `Spécialiste digital de l'Arc horloger. Sites web horlogerie, microtechnique B2B, innovation Swiss-made. Précision technique, qualité Neuchâtel, savoir-faire reconnu.`
    }
  }

  return metaTemplates[cityKey as keyof typeof metaTemplates] || metaTemplates.valais
}

// Helper function to generate complete city page data
export function getCityPageData(cityKey: keyof typeof swissCitiesData): CityPageTemplateProps {
  const cityData = swissCitiesData[cityKey]
  const localMetrics = localMetricsData[cityKey] 
  const caseStudy = (localCaseStudies as any)[cityKey]
  const services = (localServicesData as any)[cityKey]
  const testimonial = (cityTestimonials as any)[cityKey]
  const contactInfo = (cityContactInfo as any)[cityKey]

  if (!cityData) {
    throw new Error(`City data not found for: ${cityKey}`)
  }

  // Générer meta-descriptions spécifiques par ville
  const citySpecificMeta = getCitySpecificMeta(cityKey, cityData, localMetrics)

  return {
    cityData,
    localMetrics,
    metaTitle: citySpecificMeta.metaTitle,
    metaDescription: citySpecificMeta.metaDescription,
    heroTitle: citySpecificMeta.heroTitle,
    heroSubtitle: cityData.name,
    heroDescription: citySpecificMeta.heroDescription,
    localCaseStudy: caseStudy,
    localServices: services,
    testimonial,
    contactInfo
  }
}