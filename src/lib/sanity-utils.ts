import type { Locale } from './i18n'
import type { LocalizedString, LocalizedText } from './sanity'

export function getLocalizedValue(
  localizedField: LocalizedString | LocalizedText | undefined,
  locale: Locale,
  fallback?: string
): string {
  if (!localizedField) return fallback || ''
  
  // Pour les champs simples (LocalizedString)
  if (typeof localizedField === 'object' && localizedField !== null) {
    const value = localizedField[locale] || localizedField.fr || localizedField.en || localizedField.de
    return (typeof value === 'string' ? value : fallback) || ''
  }
  
  return fallback || ''
}

export function getLocalizedArray(
  localizedField: LocalizedText | undefined,
  locale: Locale
): any[] {
  if (!localizedField) return []
  
  if (typeof localizedField === 'object' && localizedField !== null) {
    return localizedField[locale] || localizedField.fr || localizedField.en || localizedField.de || []
  }
  
  return []
}

export function formatDate(dateString: string, locale: Locale): string {
  const date = new Date(dateString)
  
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  
  switch (locale) {
    case 'fr':
      return date.toLocaleDateString('fr-FR', options)
    case 'en':
      return date.toLocaleDateString('en-US', options)
    case 'de':
      return date.toLocaleDateString('de-DE', options)
    default:
      return date.toLocaleDateString('fr-FR', options)
  }
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[àáâäã]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôöõ]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ñ]/g, 'n')
    .replace(/[ý]/g, 'y')
    .replace(/[ß]/g, 'ss')
    .replace(/[ä]/g, 'ae')
    .replace(/[ö]/g, 'oe')
    .replace(/[ü]/g, 'ue')
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).replace(/\s+\S*$/, '') + '...'
}

export function getExcerpt(content: any[], maxLength: number = 160): string {
  if (!content || !Array.isArray(content)) return ''
  
  const textContent = content
    .filter(block => block._type === 'block')
    .map(block => 
      block.children
        ?.filter((child: any) => child._type === 'span')
        ?.map((span: any) => span.text)
        ?.join('') || ''
    )
    .join(' ')
  
  return truncateText(textContent, maxLength)
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[\+]?[0-9\s\-\(\)]+$/
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10
}

export function formatPrice(price: number, currency: string = 'CHF'): string {
  return new Intl.NumberFormat('fr-CH', {
    style: 'currency',
    currency: currency === 'CHF' ? 'CHF' : 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price)
}

export function getMetaTitle(title: string, locale: Locale): string {
  const siteName = 'OSOM'
  const separator = ' | '
  
  switch (locale) {
    case 'en':
      return `${title}${separator}${siteName} - Digital Web Agency Valais`
    case 'de':
      return `${title}${separator}${siteName} - Digitale Webagentur Wallis`
    default:
      return `${title}${separator}${siteName} - Agence Web Digitale Valais`
  }
}

export function getMetaDescription(description: string, locale: Locale): string {
  const maxLength = 160
  
  if (description.length <= maxLength) return description
  
  const truncated = truncateText(description, maxLength)
  
  switch (locale) {
    case 'en':
      return `${truncated} - OSOM, your digital partner in Valais.`
    case 'de':
      return `${truncated} - OSOM, Ihr digitaler Partner im Wallis.`
    default:
      return `${truncated} - OSOM, votre partenaire digital en Valais.`
  }
}