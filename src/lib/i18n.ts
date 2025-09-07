export const locales = ['fr', 'en', 'de'] as const
export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'fr'

export const pathnames = {
  '/': '/',
  '/services': {
    fr: '/services',
    en: '/services',
    de: '/dienstleistungen'
  },
  '/services/creation-site-web': {
    fr: '/services/creation-site-web',
    en: '/services/web-development',
    de: '/dienstleistungen/webentwicklung'
  },
  '/services/programmation-ia': {
    fr: '/services/programmation-ia',
    en: '/services/programming-ai',
    de: '/dienstleistungen/programmierung-ki'
  },
  '/services/seo-content-marketing': {
    fr: '/services/seo-content-marketing',
    en: '/services/seo-content-marketing',
    de: '/dienstleistungen/seo-content-marketing'
  },
  '/services/marketing-automation-crm': {
    fr: '/services/marketing-automation-crm',
    en: '/services/marketing-automation-crm',
    de: '/dienstleistungen/marketing-automation-crm'
  },
  '/services/tracking-data': {
    fr: '/services/tracking-data',
    en: '/services/tracking-data',
    de: '/dienstleistungen/tracking-data'
  },
  '/realisations': {
    fr: '/realisations',
    en: '/portfolio',
    de: '/referenzen'
  },
  '/blog': {
    fr: '/blog',
    en: '/blog',
    de: '/blog'
  },
  '/agence': {
    fr: '/agence',
    en: '/agency',
    de: '/agentur'
  },
  '/contact': {
    fr: '/contact',
    en: '/contact',
    de: '/kontakt'
  },
  '/local': {
    fr: '/local',
    en: '/local',
    de: '/lokal'
  },
  '/outils': {
    fr: '/outils',
    en: '/tools',
    de: '/werkzeuge'
  }
} as const

export const localeNames = {
  fr: 'Français',
  en: 'English',
  de: 'Deutsch'
} as const