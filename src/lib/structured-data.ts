// Structured Data optimisé pour SEO - Externalisé pour performance

// LocalBusiness Schema pour SEO local (Bramois, Valais)
export const getLocalBusinessStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.osom.ch/#organization',
  name: 'OSOM - Agence Web & Marketing IA Valais',
  alternateName: 'OSOM Digital Agency',
  description: 'Développeur web Valais spécialisé projets sur mesure. Sites Next.js 60+ pages, API, dashboards, SEO local. Marketing Humain × IA.',
  url: 'https://www.osom.ch',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.osom.ch/osom-logo.svg',
    width: '250',
    height: '60'
  },
  image: 'https://www.osom.ch/osom-og-image.jpg',
  email: 'hello@osom.ch',
  address: {
    '@type': 'PostalAddress',
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
      '@type': 'City',
      name: 'Sion',
      '@id': 'https://www.wikidata.org/wiki/Q68135'
    },
    {
      '@type': 'State',
      name: 'Valais',
      '@id': 'https://www.wikidata.org/wiki/Q834'
    },
    {
      '@type': 'City',
      name: 'Lausanne'
    },
    {
      '@type': 'City',
      name: 'Genève'
    },
    {
      '@type': 'City',
      name: 'Fribourg'
    },
    {
      '@type': 'City',
      name: 'Neuchâtel'
    }
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      email: 'hello@osom.ch',
      contactType: 'Customer Service',
      areaServed: 'CH',
      availableLanguage: ['French', 'German', 'English']
    },
    {
      '@type': 'ContactPoint',
      email: 'hello@osom.ch',
      contactType: 'Sales',
      areaServed: 'CH-VS',
      availableLanguage: ['French']
    }
  ],
  sameAs: [
    'https://linkedin.com/company/osom-ch',
    'https://instagram.com/osom.ch',
    'https://github.com/camilohimself'
  ],
  priceRange: '5000-100000 CHF',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00'
  },
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