// Structured Data optimisé pour SEO - Externalisé pour performance

// LocalBusiness Schema pour SEO local (Bramois, Valais) - Données GMB exactes
export const getLocalBusinessStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.osom.ch/#organization',
  name: 'OSOM - Agence Marketing',
  alternateName: ['OSOM Digital Agency', 'OSOM Agence Web Valais'],
  description: 'Chez OSOM, nous rendons votre présence en ligne aussi brillante que votre entreprise. Basés en Valais et actifs dans toute la Suisse Romande, nous créons des sites internet sur mesure, optimisons votre référencement SEO pour vous propulser en tête des recherches, et gérons vos campagnes SEA avec expertise.',
  url: 'https://www.osom.ch',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.osom.ch/osom-logo.svg',
    width: '250',
    height: '60'
  },
  image: 'https://www.osom.ch/osom-og-image.jpg',
  email: 'hello@osom.ch',
  telephone: '+41791289549',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rue de Clodevis 13, 1e étage',
    addressLocality: 'Bramois',
    addressRegion: 'Valais',
    postalCode: '1967',
    addressCountry: 'CH'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '46.2276',
    longitude: '7.3588'
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Valais',
      '@id': 'https://www.wikidata.org/wiki/Q834'
    },
    {
      '@type': 'State',
      name: 'Vaud'
    },
    {
      '@type': 'City',
      name: 'Geneva'
    },
    {
      '@type': 'City',
      name: 'Basel'
    },
    {
      '@type': 'City',
      name: 'Zürich'
    },
    {
      '@type': 'City',
      name: 'Fribourg'
    },
    {
      '@type': 'City',
      name: 'Lausanne'
    }
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+41791289549',
      contactType: 'Customer Service',
      areaServed: 'CH',
      availableLanguage: ['French', 'German', 'English'],
      contactOption: 'TollFree'
    },
    {
      '@type': 'ContactPoint',
      telephone: '+41791289549',
      contactType: 'Sales',
      areaServed: 'CH-VS',
      availableLanguage: ['French']
    }
  ],
  sameAs: [
    'https://www.linkedin.com/company/104685960/',
    'https://www.facebook.com/profile.php?id=61562483814741',
    'https://www.youtube.com/@OsomCreativeMarketing',
    'https://www.tiktok.com/@osom.ch',
    'https://www.instagram.com/osom.ch/',
    'https://x.com/osom_ch'
  ],
  priceRange: '5000-100000 CHF',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      opens: '08:30',
      closes: '18:30'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Friday',
      opens: '08:30',
      closes: '20:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '14:00'
    }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Packages Développement Web Valais',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Package Essentiel',
        description: 'Sites professionnels 15-25 pages avec accompagnement dev actif',
        price: '5000-9000',
        priceCurrency: 'CHF',
        availability: 'https://schema.org/InStock',
        url: 'https://www.osom.ch/services/essentiel',
        itemOffered: {
          '@type': 'Service',
          name: 'Développement Web Essentiel',
          serviceType: 'Web Development'
        }
      },
      {
        '@type': 'Offer',
        name: 'Package Performance',
        description: 'Projets complexes 30-60 pages + API + SEO stratégique continu',
        price: '10000-18000',
        priceCurrency: 'CHF',
        availability: 'https://schema.org/InStock',
        url: 'https://www.osom.ch/services/performance',
        itemOffered: {
          '@type': 'Service',
          name: 'Développement Web Performance',
          serviceType: 'Web Development & SEO'
        }
      },
      {
        '@type': 'Offer',
        name: 'Package Sur Mesure',
        description: 'Architecture entreprise + garanties contractuelles + consultant dédié',
        price: '20000+',
        priceCurrency: 'CHF',
        availability: 'https://schema.org/InStock',
        url: 'https://www.osom.ch/services/sur-mesure',
        itemOffered: {
          '@type': 'Service',
          name: 'Développement Web Sur Mesure Enterprise',
          serviceType: 'Enterprise Web Development'
        }
      }
    ]
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '3',
    bestRating: '5',
    worstRating: '1'
  }
})

// Organization Schema pour Homepage
export const getHomepageStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OSOM',
  description: 'Première agence VALAIS spécialisée dans le Marketing Humain × Intelligence Artificielle. Résultats 12x supérieurs à la publicité classique.',
  url: 'https://www.osom.ch',
  logo: 'https://www.osom.ch/osom-logo.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'hello@osom.ch',
    contactType: 'Customer Service',
    areaServed: 'CH-VS',
    availableLanguage: ['French', 'German', 'English']
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bramois',
    addressRegion: 'Valais',
    postalCode: '1967',
    addressCountry: 'CH'
  },
  sameAs: [
    'https://linkedin.com/company/osom-ch',
    'https://instagram.com/osom.ch'
  ],
  serviceArea: {
    '@type': 'State',
    name: 'Valais'
  }
})

// FAQ Schema pour Package Essentiel - Optimisé featured snippets
export const getFAQSchemaEssentiel = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte un site web professionnel en Valais avec le Package Essentiel ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Package Essentiel OSOM coûte entre 5,000 et 9,000 CHF selon la durée. Pour 3 mois: 1,667 CHF/mois (5,000 CHF total). Pour 6 mois: 1,500 CHF/mois (9,000 CHF total, option POPULAIRE). Ce prix inclut 15-25 pages sur mesure, design responsive premium, SEO de base, accompagnement dev actif chaque mois, formation 2h, et CMS simple.'
      }
    },
    {
      '@type': 'Question',
      name: 'Combien de temps faut-il pour créer un site web avec OSOM ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Package Essentiel prend 3 à 6 mois selon vos besoins. Cette durée inclut la conception, le développement de 15-25 pages, les optimisations SEO, les tests, et la formation. Le paiement mensuel signifie que votre développeur est actif chaque mois, pas un site livré puis abandonné.'
      }
    },
    {
      '@type': 'Question',
      name: 'Le Package Essentiel inclut-il le référencement SEO ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, le Package Essentiel inclut le SEO de base: optimisation des balises meta, structure HTML sémantique, performance mobile, sitemap XML, et indexation Google. Pour un SEO stratégique mensuel continu, consultez notre Package Performance.'
      }
    },
    {
      '@type': 'Question',
      name: 'Pour qui est fait le Package Essentiel OSOM ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Package Essentiel est idéal pour les professionnels indépendants, artisans, PME, cabinets (avocats, notaires), médecins, et prestataires de services qui ont besoin d\'un site professionnel de 15-25 pages avec accompagnement mensuel actif.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre le Package Essentiel et Performance ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Package Essentiel (5,000-9,000 CHF) convient pour sites 15-25 pages avec SEO de base. Le Package Performance (27,000-48,000 CHF) est pour projets complexes 30-60 pages avec API, intégrations CRM, dashboard personnalisé, SEO stratégique mensuel continu, et support premium 48h. Choisissez Essentiel pour présence pro, Performance pour transformation digitale complète.'
      }
    }
  ]
})

// FAQ Schema pour Package Performance - Optimisé featured snippets
export const getFAQSchemaPerformance = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte le Package Performance OSOM pour un site web complexe ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Package Performance coûte entre 27,000 et 48,000 CHF selon la durée. Pour 6 mois: 4,500 CHF/mois (27,000 CHF total). Pour 12 mois: 4,000 CHF/mois (48,000 CHF total, MEILLEUR PRIX). Ce partenariat mensuel actif inclut 30-60 pages complexes, API & intégrations, Dashboard personnalisé, SEO stratégique mensuel continu, et support premium 48h.'
      }
    },
    {
      '@type': 'Question',
      name: 'Qu\'est-ce qu\'un partenariat Performance OSOM ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Package Performance n\'est PAS un site livré puis un support vendu séparément. C\'est un partenariat mensuel tout compris: développement + SEO + support premium + optimisations INCLUS chaque mois. Par exemple, H-Séchement paie 4,000 CHF/mois pendant 6 mois pour développement + SEO + dashboard + support premium, le tout actif mensuellement.'
      }
    },
    {
      '@type': 'Question',
      name: 'Le Package Performance inclut-il des intégrations API ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Oui, le Package Performance inclut API & intégrations: CRM (Salesforce, HubSpot), systèmes de paiement (Stripe, PayPal), calendriers (Google Calendar), outils marketing (Mailchimp, ActiveCampaign), et analytics avancés. Intégrations personnalisées selon vos besoins métier.'
      }
    },
    {
      '@type': 'Question',
      name: 'Pour quelles entreprises est fait le Package Performance ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Package Performance est idéal pour PME B2B nécessitant outils métier complexes, e-commerce premium avec gestion catalogue avancée, SaaS/tech startups avec dashboards, et institutions culturelles avec calendriers événements. Exemples réels: H-Séchement (B2B technique), Maîtrise Cathédrale (culturel).'
      }
    },
    {
      '@type': 'Question',
      name: 'Quelle est la différence entre Performance et Sur Mesure ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Package Performance (27,000-48,000 CHF, 6-12 mois) convient pour projets 30-60 pages avec API et SEO stratégique. Le Package Sur Mesure (20,000-100,000+ CHF, 12-24 mois) est pour architecture entreprise complète, consultant dédié, support 24/7 SLA, et garanties contractuelles (performance 90+ PageSpeed, top 5 SEO mois 6). Performance = partenariat actif, Sur Mesure = conquête digitale avec garanties.'
      }
    }
  ]
})

// FAQ Schema pour Package Sur Mesure - Optimisé featured snippets
export const getFAQSchemaSurMesure = () => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Combien coûte un projet web sur mesure avec garanties contractuelles ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Package Sur Mesure OSOM coûte entre 20,000 et 100,000+ CHF selon l\'ambition, facturé dès 2,000 CHF/mois sur 12-24 mois. Exemples: Site corporate 40 pages = 24,000 CHF (2,000 CHF/mois × 12 mois). E-commerce scaling 80+ pages = 60,000 CHF (2,500 CHF/mois × 24 mois). Le prix inclut architecture entreprise, consultant dédié, SEO domination locale, support 24/7 SLA, et garanties contractuelles performance.'
      }
    },
    {
      '@type': 'Question',
      name: 'Quelles garanties contractuelles offre le Package Sur Mesure ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Package Sur Mesure inclut garanties contractuelles écrites: Performance 90+ sur Google PageSpeed Mobile et Desktop, Positionnement top 5 Google pour mots-clés cibles au mois 6, Uptime 99.9% avec monitoring 24/7, et Support avec SLA (réponse < 2h, résolution < 24h). Si non atteint, pénalités contractuelles appliquées.'
      }
    },
    {
      '@type': 'Question',
      name: 'Pour quelles entreprises est fait le Package Sur Mesure ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le Package Sur Mesure est idéal pour Finance/Banque privée nécessitant sécurité renforcée, Corporate international avec sites multilingues, E-commerce scaling avec gestion stocks avancée, et Startup série A+ avec dashboards temps réel. Exemples secteurs: Nowssen (finance), projets corporate multilingues, plateformes SaaS.'
      }
    },
    {
      '@type': 'Question',
      name: 'Qu\'est-ce que le SEO domination locale inclus ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Le SEO domination locale du Package Sur Mesure vise le positionnement top 5 Google pour vos mots-clés cibles (ex: "avocat genève", "banque privée lausanne") au mois 6, garanti contractuellement. Inclut: audit SEO approfondi, stratégie mots-clés ultra-ciblée, création contenu optimisé mensuel, netlinking qualité, et rapports performance mensuels.'
      }
    },
    {
      '@type': 'Question',
      name: 'La différence entre Package Performance et Sur Mesure ?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Package Performance (27,000-48,000 CHF): Partenariat 6-12 mois, projets 30-60 pages, API & dashboard, SEO stratégique, support 48h. Package Sur Mesure (20,000-100,000+ CHF): Conquête 12-24 mois, architecture entreprise complète, consultant dédié, support 24/7 SLA, garanties contractuelles performance et SEO top 5. Sur Mesure = Performance + garanties + échelle entreprise.'
      }
    }
  ]
})

// BreadcrumbList Schema pour navigation - Boost SEO
export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
})

// Service Schema détaillé par package - Enhance SEO visibility
export const getServiceSchemaEssentiel = () => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Package Essentiel - Site Web Professionnel Valais',
  provider: {
    '@type': 'Organization',
    name: 'OSOM',
    url: 'https://www.osom.ch'
  },
  serviceType: 'Web Development & Design',
  areaServed: {
    '@type': 'State',
    name: 'Valais'
  },
  offers: {
    '@type': 'Offer',
    price: '5000-9000',
    priceCurrency: 'CHF',
    url: 'https://www.osom.ch/services/essentiel'
  },
  description: 'Sites professionnels 15-25 pages avec design responsive premium, SEO de base, accompagnement dev actif mensuel, formation 2h, et CMS simple. Idéal pour professionnels, artisans, PME, cabinets.'
})

export const getServiceSchemaPerformance = () => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Package Performance - Transformation Digitale Complète Valais',
  provider: {
    '@type': 'Organization',
    name: 'OSOM',
    url: 'https://www.osom.ch'
  },
  serviceType: 'Enterprise Web Development & SEO Strategy',
  areaServed: [
    {
      '@type': 'State',
      name: 'Valais'
    },
    {
      '@type': 'City',
      name: 'Lausanne'
    },
    {
      '@type': 'City',
      name: 'Geneva'
    }
  ],
  offers: {
    '@type': 'Offer',
    price: '27000-48000',
    priceCurrency: 'CHF',
    url: 'https://www.osom.ch/services/performance'
  },
  description: 'Partenariat mensuel actif 30-60 pages complexes avec API & intégrations CRM, Dashboard personnalisé, SEO stratégique mensuel continu, support premium 48h. Idéal PME B2B, e-commerce premium, SaaS.'
})

export const getServiceSchemaSurMesure = () => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Package Sur Mesure - Conquête Digitale Entreprise avec Garanties',
  provider: {
    '@type': 'Organization',
    name: 'OSOM',
    url: 'https://www.osom.ch'
  },
  serviceType: 'Enterprise Architecture & SEO Domination',
  areaServed: 'CH',
  offers: {
    '@type': 'Offer',
    price: '20000+',
    priceCurrency: 'CHF',
    url: 'https://www.osom.ch/services/sur-mesure'
  },
  description: 'Architecture entreprise complète avec consultant dédié, SEO domination locale (top 5 garanti mois 6), support 24/7 SLA, garanties contractuelles performance 90+ PageSpeed. Idéal finance, corporate international, e-commerce scaling.'
})