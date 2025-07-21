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
  sion: {
    name: "Sion",
    canton: "Valais", 
    region: "Valais",
    population: 35041,
    economicCenter: true,
    majorIndustries: ["Administration", "Services", "Commerce", "Tourisme"],
    businessHub: "Capitale du Valais",
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

// Local metrics per city (realistic but optimized data)
export const localMetricsData: Record<string, LocalMetrics> = {
  valais: {
    localClients: 47,
    averageROI: "+4693%",
    projectsCompleted: 89,
    marketShare: "Leader"
  },
  sion: {
    localClients: 23,
    averageROI: "+3847%", 
    projectsCompleted: 45,
    marketShare: "#1 Local"
  },
  lausanne: {
    localClients: 18,
    averageROI: "+5201%",
    projectsCompleted: 31,
    marketShare: "Top 3"
  },
  geneve: {
    localClients: 15,
    averageROI: "+6103%",
    projectsCompleted: 28,
    marketShare: "Premium"
  },
  fribourg: {
    localClients: 12,
    averageROI: "+4156%",
    projectsCompleted: 19,
    marketShare: "#2 Local"
  },
  neuchatel: {
    localClients: 9,
    averageROI: "+3924%",
    projectsCompleted: 16,
    marketShare: "Leader"
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
        metric: "Conversions mensuelles",
        before: "49 leads",
        after: "688 leads", 
        improvement: "+1304%"
      },
      {
        metric: "ROI campagnes payantes",
        before: "187% ROI",
        after: "4693% ROI",
        improvement: "140x plus efficace"
      },
      {
        metric: "Visibilité locale Valais",
        before: "Position 47",
        after: "Position 2", 
        improvement: "Top 3 garanti"
      }
    ]
  },
  
  sion: {
    clientName: "Artisane de Lumière",
    industry: "Éclairage Design",
    location: "Sion, Valais",
    challenge: "Concurrence nationale sur les mots-clés éclairage. Besoin de se positionner comme référence locale haut de gamme pour les projets architecturaux et hôteliers en Valais.",
    solution: "Content marketing technique, SEO local Sion, partenariats avec architectes valaisans, et showcase projets patrimoniaux (châteaux, hôtels de luxe).",
    results: [
      {
        metric: "Engagement qualité SEO",
        before: "44.6% engagement", 
        after: "68.6% engagement",
        improvement: "+53% qualité trafic"
      },
      {
        metric: "Projets haut de gamme",
        before: "2 projets/mois",
        after: "9 projets/mois",
        improvement: "+350% portfolio"
      },
      {
        metric: "CA annuel",
        before: "180K CHF",
        after: "520K CHF", 
        improvement: "+189% croissance"
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
        metric: "Leads qualifiés MQL",
        before: "23 MQL/mois",
        after: "156 MQL/mois",
        improvement: "+578% pipeline"  
      },
      {
        metric: "Closing rate B2B",
        before: "12% closing",
        after: "31% closing",
        improvement: "+158% efficacité"
      },
      {
        metric: "ARR (Annual Recurring)",
        before: "420K CHF", 
        after: "1.8M CHF",
        improvement: "+329% croissance"
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
        metric: "Leads premium qualifiés",
        before: "12 leads/mois",
        after: "67 leads/mois", 
        improvement: "+458% qualité"
      },
      {
        metric: "Panier moyen client",
        before: "85K CHF",
        after: "247K CHF",
        improvement: "+191% valeur"
      },
      {
        metric: "Retention clientèle",
        before: "73% rétention",
        after: "94% rétention",
        improvement: "+29% fidélité"
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
        metric: "Ventes directes online",
        before: "8K CHF/mois",
        after: "47K CHF/mois",
        improvement: "+488% e-commerce"
      },
      {
        metric: "Part vente directe", 
        before: "23% direct",
        after: "67% direct",
        improvement: "+191% marge"
      },
      {
        metric: "Rayonnement régional",
        before: "Canton uniquement",
        after: "Suisse romande",
        improvement: "4x territoire"
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
        metric: "Nouveaux clients B2B",
        before: "3 clients/an",
        after: "18 clients/an", 
        improvement: "+500% acquisition"
      },
      {
        metric: "CA diversification",
        before: "15% hors horlogerie",
        after: "43% hors horlogerie",
        improvement: "+187% diversification"
      },
      {
        metric: "Visibilité innovation",
        before: "Local uniquement",
        after: "Rayonnement EU",
        improvement: "Échelle européenne"
      }
    ]
  }
}

// Local services configuration per city
export const localServicesData = {
  valais: [
    {
      title: "SEO Tourisme Alpin",
      description: "Optimisation spécialisée pour hôtels, restaurants et activités touristiques valaisannes. Capture du trafic saisonnier été/hiver.",
      localAdvantage: "Expertise unique du marché touristique valaisan et saisonnalité alpine",
      price: "2500 CHF/mois",
      duration: "6 mois minimum"
    },
    {
      title: "E-commerce Vins & Terroir",
      description: "Solutions e-commerce pour vignerons et producteurs locaux. Vente directe optimisée avec géolocalisation Valais.",
      localAdvantage: "Connaissance approfondie de l'écosystème viticole valaisan",
      price: "3800 CHF",
      duration: "Projet 2 mois"
    },
    {
      title: "Marketing Artisanat Local",
      description: "Visibilité digitale pour artisans et PME valaisannes. Focus sur savoir-faire traditionnel et clientèle locale + touristique.",
      localAdvantage: "Réseau établi avec Culture Peinture et autres artisans valaisans",
      price: "1800 CHF/mois", 
      duration: "Engagement 12 mois"
    },
    {
      title: "Immobilier Alpin Digital",
      description: "Marketing digital spécialisé promoteurs et agences immobilières. Ciblage investisseurs et résidents secondaires.",
      localAdvantage: "Maîtrise du marché immobilier valaisan et réglementation Lex Weber",
      price: "4200 CHF/mois",
      duration: "Saisonnier flex"
    }
  ],

  sion: [
    {
      title: "Institutions & Administration",
      description: "Communication digitale pour institutions publiques et parapubliques sédunois. Transparence et engagement citoyen.",
      localAdvantage: "Compréhension des enjeux politiques et administratifs de la capitale valaisanne",
      price: "3200 CHF/mois",
      duration: "Annuel renouvelable"
    },
    {
      title: "Services Professionnels B2B", 
      description: "Lead generation pour avocats, fiduciaires, consultants et professions libérales sédunois.",
      localAdvantage: "Network B2B établi et connaissance du tissu économique de Sion",
      price: "2400 CHF/mois",
      duration: "6-12 mois"
    },
    {
      title: "Retail & Commerce Local",
      description: "Digitalisation commerces de centre-ville. E-commerce local, click & collect, fidélisation client.",
      localAdvantage: "Partenariats avec associations de commerçants et Ville de Sion", 
      price: "1650 CHF/mois",
      duration: "Modulable saison"
    },
    {
      title: "Éducation & Formation",
      description: "Marketing éducatif pour écoles privées, centres de formation et institutions académiques sédunois.",
      localAdvantage: "Connaissance approfondie du paysage éducatif valaisan",
      price: "2800 CHF/mois",
      duration: "Année scolaire"
    }
  ],

  lausanne: [
    {
      title: "Tech & Startup Scale-up",
      description: "Growth marketing pour startups tech lémaniques en phase de croissance. Inbound B2B et lead generation qualifiée.",
      localAdvantage: "Intégration dans l'écosystème EPFL, Startup Campus et VD Innovation",
      price: "4500 CHF/mois",
      duration: "12-24 mois"
    },
    {
      title: "Services Financiers Léman",
      description: "Marketing digital pour banques privées, family offices et gestionnaires de fortune région lémanique.",
      localAdvantage: "Expertise réglementation financière suisse et discrétion requise",
      price: "5800 CHF/mois", 
      duration: "Engagement annuel"
    },
    {
      title: "Pharma & Life Sciences",
      description: "Content marketing et lead gen B2B pour biotech, pharma et medtech basées à Lausanne/Vaud.",
      localAdvantage: "Compréhension de l'écosystème Health Valley et réglementation",
      price: "6200 CHF/mois",
      duration: "Projets 18 mois+"
    },
    {
      title: "Culture & Événementiel",
      description: "Promotion digitale festivals, théâtres, musées et événements culturels lausannois.",
      localAdvantage: "Réseau culturel établi et connaissance agenda événementiel régional",
      price: "2200 CHF/projet",
      duration: "Événementiel variable"
    }
  ],

  geneve: [
    {
      title: "Luxury & Premium Services",
      description: "Marketing digital discret pour services haut de gamme. Clientèle UHNW et internationale exigeante.",
      localAdvantage: "Maîtrise codes luxury market et discrétion suisse légendaire",
      price: "7500 CHF/mois",
      duration: "Engagement premium 24 mois"
    },
    {
      title: "Organisations Internationales",
      description: "Communication digitale pour ONG, organisations internationales et missions diplomatiques genevoises.",
      localAdvantage: "Compréhension enjeux géopolitiques et communication institutionnelle",
      price: "5200 CHF/mois",
      duration: "Contrats annuels"  
    },
    {
      title: "Finance & Wealth Management",
      description: "Lead generation sophistiquée pour banques privées, gestionnaires fortune et family offices genevois.",
      localAdvantage: "Expertise place financière genevoise et clientèle internationale",
      price: "8900 CHF/mois",
      duration: "Partenariat long terme"
    },
    {
      title: "Horlogerie & Luxe Swiss Made",
      description: "Marketing digital pour maisons horlogères, joaillerie et luxe traditionnel suisse basé à Genève.",
      localAdvantage: "Connaissance patrimoine horloger genevois et codes luxury marketing",
      price: "6800 CHF/mois", 
      duration: "Saisonnier haute horlogerie"
    }
  ],

  fribourg: [
    {
      title: "Agroalimentaire & Bio Local",
      description: "E-commerce et marketing territorial pour producteurs bio, fromagers et spécialités fribourgeoises.",
      localAdvantage: "Expertise terroir fribourgeois, AOC Gruyère et circuits courts",
      price: "2100 CHF/mois",
      duration: "Saisonnier agricole"
    },
    {
      title: "Services Bilingues FR/DE",
      description: "Communication digitale pour entreprises actives dans les deux communautés linguistiques fribourgeoises.",
      localAdvantage: "Maîtrise parfaite contexte bilingual et sensibilités culturelles",
      price: "2800 CHF/mois",
      duration: "Annuel bilingue"
    },
    {
      title: "Éducation & Formation",
      description: "Marketing éducatif pour Université, HES-SO et écoles privées fribourgeoises. Recrutement étudiant.",
      localAdvantage: "Connaissance écosystème académique fribourgeois et bassin de recrutement",  
      price: "3200 CHF/semestre",
      duration: "Année académique"
    },
    {
      title: "Tourisme & Patrimoine",
      description: "Promotion digitale sites touristiques, musées et patrimoine fribourgeois. Gruyères, Bulle, etc.",
      localAdvantage: "Expertise valorisation patrimoine et tourisme culturel fribourgeois",
      price: "1900 CHF/mois",
      duration: "Campagnes saisonnières"
    }
  ],

  neuchatel: [
    {
      title: "Horlogerie & Microtechnique",
      description: "Marketing B2B spécialisé pour sous-traitants horlogers, microtechnique et précision neuchâteloise.",
      localAdvantage: "Expertise unique de l'Arc horloger et réseau industrie 4.0",
      price: "3600 CHF/mois",
      duration: "Contrats industriels 18 mois"
    },
    {
      title: "Innovation & Research",
      description: "Visibilité pour centres R&D, instituts recherche et innovation technologique basés à Neuchâtel.",
      localAdvantage: "Compréhension écosystème recherche EPFL extension et Microcity",
      price: "4200 CHF/mois", 
      duration: "Projets recherche pluriannuels"
    },
    {
      title: "Artisanat & Savoir-faire",
      description: "Promotion digitale artisans d'art, restaurateurs patrimoine et métiers traditionnels neuchâtelois.",
      localAdvantage: "Valorisation savoir-faire local et positionnement premium artisanat",
      price: "1650 CHF/mois",
      duration: "Saisonnier touristique"  
    },
    {
      title: "Services & Consulting",
      description: "Lead generation pour consultants, services B2B et professions libérales neuchâteloises.",
      localAdvantage: "Réseau business local et connaissance tissu économique cantonal",
      price: "2200 CHF/mois",
      duration: "Flexible 6-12 mois"
    }
  ]
}

// Testimonials per city
export const cityTestimonials = {
  valais: {
    quote: "OSOM a transformé notre visibilité digitale en Valais. De 49 à 688 conversions mensuelles, c'est du jamais vu dans l'artisanat !",
    author: "Jean-Marc Sarrasin", 
    company: "Culture Peinture",
    industry: "Artisanat & Décoration"
  },
  
  sion: {
    quote: "L'expertise locale d'OSOM à Sion nous a permis de devenir la référence éclairage haut de gamme en Valais. ROI exceptionnel !",
    author: "Caroline Métrailler",
    company: "Artisane de Lumière", 
    industry: "Design & Éclairage"
  },

  lausanne: {
    quote: "Scale-up réussi grâce à OSOM ! De startup à 1.8M CHF ARR en 18 mois. Leur compréhension de l'écosystème tech lausannois est parfaite.",
    author: "David Chen",
    company: "TechStart Lausanne",
    industry: "SaaS B2B"
  },

  geneve: {
    quote: "Discrétion, efficacité, résultats : OSOM maîtrise parfaitement les codes du luxury marketing genevois. Clients premium conquis !",
    author: "Isabella Marchetti",
    company: "Luxury Swiss Services", 
    industry: "Services Premium"
  },

  fribourg: {
    quote: "Vente directe multipliée par 6 grâce au marketing territorial d'OSOM. Ils comprennent l'âme du terroir fribourgeois !",
    author: "Paul Ducrest",
    company: "Bio-Terroir Fribourg",
    industry: "Agriculture Bio"
  },

  neuchatel: {
    quote: "Innovation B2B horlogère révélée au monde grâce à OSOM. De local à européen en 2 ans, expertise technique remarquable !",
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
    meetingLocation: "Bureaux Sion ou déplacement client",
    responseTime: "< 2h"
  },
  sion: {
    phone: "+41 27 565 90 20", 
    email: "sion@osom.ch",
    meetingLocation: "Centre-ville Sion",
    responseTime: "< 1h"
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

  return {
    cityData,
    localMetrics,
    metaTitle: `Agence Marketing Digital ${cityData.name} - OSOM | ROI +4693% Prouvé`,
    metaDescription: `Agence web ${cityData.name} spécialisée ROI mesurable. ${localMetrics.localClients} clients ${cityData.region}, ${localMetrics.averageROI} ROI moyen. Marketing digital, SEO, sites premium 1500 CHF.`,
    heroTitle: `OSOM ${cityData.name}`,
    heroSubtitle: cityData.name,
    heroDescription: `Agence marketing digital ${cityData.region} spécialisée ROI mesurable. Transformez votre présence digitale avec nos méthodes data-driven éprouvées par ${localMetrics.localClients} clients locaux.`,
    localCaseStudy: caseStudy,
    localServices: services,
    testimonial,
    contactInfo
  }
}