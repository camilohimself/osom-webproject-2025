// Structured Data optimisé pour SEO - Externalisé pour performance
export const getHomepageStructuredData = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'OSOM',
  description: 'Première agence VALAIS spécialisée dans le Marketing Humain × Intelligence Artificielle. Résultats 12x supérieurs à la publicité classique.',
  url: 'https://osom.ch',
  logo: 'https://osom.ch/osom-logo.svg',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+41-XX-XXX-XX-XX',
    contactType: 'Customer Service',
    areaServed: 'CH-VS',
    availableLanguage: ['French', 'German', 'English']
  },
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Valais',
    addressCountry: 'Switzerland'
  },
  sameAs: [
    'https://linkedin.com/company/osom-ch',
    'https://instagram.com/osom.ch'
  ],
  serviceArea: {
    '@type': 'State',
    name: 'Valais'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Services Marketing IA',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Création Site Web IA',
          description: '11.3% conversion vs 2-3% industrie'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'SEO & Marketing IA',
          description: '68.6% vs 44.6% engagement quality'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Tracking & Data IA',
          description: '14,171 sessions récupérées'
        }
      }
    ]
  }
})