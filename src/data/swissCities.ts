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
    clientName: "H-Sechement",
    industry: "B2B Technique Arc Lémanique",
    location: "Valais",
    challenge: "Site lent (11s loading) = 0.84% conversion seulement. Besoin dashboard performance + SEO local compétitif secteur technique.",
    solution: "Migration Next.js + Dashboard performance personnalisé + SEO technique hyper-local + Optimisation conversion continue 6 mois.",
    results: [
      {
        metric: "Performance technique",
        before: "65/100 PageSpeed",
        after: "95+/100 PageSpeed",
        improvement: "< 2s loading garanti"
      },
      {
        metric: "Visibilité Google",
        before: "Page 3+",
        after: "Position #2 'entreprise assèchement arc lémanique'",
        improvement: "+150% visibilité"
      },
      {
        metric: "Trafic organique",
        before: "Invisibilité digitale",
        after: "1,287 impressions/mois",
        improvement: "80.7% engagement"
      }
    ]
  },
  
  lausanne: {
    clientName: "TechStart Lausanne",
    industry: "SaaS B2B",
    location: "Lausanne, Vaud",
    challenge: "Votre startup tech peine à générer des leads qualifiés B2B en Suisse romande ? La crédibilité digitale manque pour convaincre les décideurs.",
    solution: "Notre approche : inbound marketing tech-focused, SEO B2B ciblé, content strategy et automation LinkedIn pour toucher les bonnes personnes.",
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
    challenge: "Votre clientèle UHNW exige discrétion absolue mais vous devez rester visible ? Le digital premium demande une approche sur-mesure.",
    solution: "Nous maîtrisons : SEO luxury discret, content strategy élégant, targeting géographique premium et nurturing ultra-personnalisé.",
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
    challenge: "Vous produisez bio local mais les grandes surfaces captent vos clients ? La vente directe digitale peut transformer votre business.",
    solution: "Nous développons : e-commerce terroir, SEO \"bio Fribourg\", storytelling gruyérien authentique et automation saisonnière.",
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
    challenge: "Votre dépendance aux grands horlogers vous inquiète ? Votre expertise microtechnique mérite une visibilité plus large.",
    solution: "Notre stratégie : content marketing technique, SEO B2B spécialisé, showcase innovation et lead generation industrie 4.0.",
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
    quote: "Besoin de plus de visibilité pour votre artisanat valaisan ? Nous transformons les PME locales avec des résultats mesurables et durables.",
    author: "Expertise Valais",
    company: "OSOM Conseil",
    industry: "Marketing Digital Local"
  },
  
  lausanne: {
    quote: "Votre startup tech stagne dans l'écosystème EPFL ? Nous accélérons la croissance B2B avec une stratégie digitale adaptée au marché romand.",
    author: "Expertise Tech",
    company: "OSOM Growth",
    industry: "Scale-up Consulting"
  },

  geneve: {
    quote: "Clientèle UHNW exigeante ? Nous maîtrisons les codes du luxury marketing genevois : discrétion, élégance et résultats mesurables.",
    author: "Expertise Premium",
    company: "OSOM Luxury",
    industry: "Marketing Haut de Gamme"
  },

  fribourg: {
    quote: "Producteur bio cherchant plus de vente directe ? Nous développons le marketing territorial qui valorise authentiquement votre terroir fribourgeois.",
    author: "Expertise Terroir",
    company: "OSOM Bio",
    industry: "Marketing Agroalimentaire"
  },

  neuchatel: {
    quote: "Sous-traitant horloger cherchant diversification ? Nous révélons votre innovation B2B au-delà de l'Arc jurassien avec une expertise technique pointue.",
    author: "Expertise Horlogère",
    company: "OSOM Precision",
    industry: "B2B Microtechnique"
  }
}

// Contact information per city
export const cityContactInfo = {
  valais: {
    phone: "+41 79 128 95 49",
    email: "hello@osom.ch",
    meetingLocation: "Bureaux Valais ou déplacement client",
    responseTime: "< 2h"
  },
  lausanne: {
    phone: "+41 79 128 95 49",
    email: "hello@osom.ch",
    meetingLocation: "EPFL Innovation Park ou centre Lausanne",
    responseTime: "< 2h"
  },
  geneve: {
    phone: "+41 79 128 95 49",
    email: "hello@osom.ch",
    meetingLocation: "Rendez-vous discrets sur mesure",
    responseTime: "< 1h"
  },
  fribourg: {
    phone: "+41 79 128 95 49",
    email: "hello@osom.ch",
    meetingLocation: "Fribourg centre ou Gruyère",
    responseTime: "< 3h"
  },
  neuchatel: {
    phone: "+41 79 128 95 49",
    email: "hello@osom.ch",
    meetingLocation: "Microcity ou centre Neuchâtel",
    responseTime: "< 2h"
  }
}

// City-specific SEO meta generation
function getCitySpecificMeta(cityKey: string, cityData: SwissCityData, localMetrics: LocalMetrics) {
  const metaTemplates = {
    valais: {
      metaTitle: `Agence web Valais | Création site internet local | osom`,
      metaDescription: `Agence web Valais : création sites internet, SEO local, marketing digital. ${localMetrics.localClients} projets Valais, PME et tourisme. Devis gratuit.`,
      heroTitle: `Agence Web Valais`,
      heroDescription: `Expert digital des Alpes suisses. Nous créons des sites web optimisés pour le marché valaisan : tourisme, artisanat, PME locales. Basés en Valais, nous comprenons vos défis business.`
    },
    lausanne: {
      metaTitle: `Agence web Lausanne | Startups & tech Léman | osom`,
      metaDescription: `Agence web Lausanne pour startups et scale-up. Sites web tech, SaaS B2B, fintech. ${localMetrics.localClients} clients innovation. EPFL ecosystem.`,
      heroTitle: `Tech Web Agency Lausanne`,
      heroDescription: `Partenaire digital de l'écosystème tech lausannois. Sites web pour startups, SaaS B2B, fintech région Léman. Expertise EPFL Innovation Park, growth-focused.`
    },
    geneve: {
      metaTitle: `Agence web Genève | Sites premium & international | osom`,
      metaDescription: `Agence web Genève premium : sites luxury, organisations internationales, finance. ${localMetrics.localClients} clients haut de gamme. Excellence discrète.`,
      heroTitle: `Premium Web Genève`,
      heroDescription: `Agence digitale premium pour Genève internationale. Sites web luxury, wealth management, ONG internationales. Discrétion légendaire suisse, qualité sans compromis.`
    },
    fribourg: {
      metaTitle: `Agence web Fribourg | Sites bilingues FR/DE | osom`,
      metaDescription: `Agence web Fribourg bilingue : sites agroalimentaire, terroir, PME. ${localMetrics.localClients} clients FR/DE. E-commerce local optimisé.`,
      heroTitle: `Digital Fribourg Bilingue`,
      heroDescription: `Expertise digitale bilingue pour Fribourg. Sites web agroalimentaire, terroir AOC, éducation. Communication FR/DE, valorisation savoir-faire fribourgeois traditionnel.`
    },
    neuchatel: {
      metaTitle: `Agence web Neuchâtel | Horlogerie & microtechnique | osom`,
      metaDescription: `Agence web Neuchâtel spécialisée horlogerie et microtechnique. Sites B2B precision, innovation Swiss-made. ${localMetrics.localClients} projets Arc horloger.`,
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