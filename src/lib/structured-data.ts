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