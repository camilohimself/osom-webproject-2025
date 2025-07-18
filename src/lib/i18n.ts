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
  '/services/identite-design': {
    fr: '/services/identite-design',
    en: '/services/brand-design',
    de: '/dienstleistungen/markendesign'
  },
  '/services/seo-content-marketing': {
    fr: '/services/seo-content-marketing',
    en: '/services/seo-content-marketing',
    de: '/dienstleistungen/seo-content-marketing'
  },
  '/services/paid-media-growth': {
    fr: '/services/paid-media-growth',
    en: '/services/paid-media-growth',
    de: '/dienstleistungen/paid-media-growth'
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
  }
} as const

export const localeNames = {
  fr: 'Français',
  en: 'English',
  de: 'Deutsch'
} as const