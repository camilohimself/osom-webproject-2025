import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(sanityConfig)

const builder = imageUrlBuilder(sanityClient)

export const urlFor = (source: any) => builder.image(source)

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  alt?: string
}

export interface SanityDocument {
  _id: string
  _type: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

export interface LocalizedString {
  _type: 'localizedString'
  fr?: string
  en?: string
  de?: string
}

export interface LocalizedText {
  _type: 'localizedText'
  fr?: any[]
  en?: any[]
  de?: any[]
}

export interface Service extends SanityDocument {
  _type: 'service'
  title: LocalizedString
  slug: {
    _type: 'slug'
    current: string
  }
  description: LocalizedText
  shortDescription: LocalizedString
  icon: string
  image: SanityImage
  features: LocalizedText
  price: {
    starting: number
    currency: string
  }
  seo: {
    title: LocalizedString
    description: LocalizedString
    keywords: LocalizedString
  }
}

export interface CaseStudy extends SanityDocument {
  _type: 'caseStudy'
  title: LocalizedString
  slug: {
    _type: 'slug'
    current: string
  }
  client: string
  category: string
  year: number
  description: LocalizedText
  image: SanityImage
  gallery: SanityImage[]
  results: {
    metric: LocalizedString
    value: string
    improvement: string
  }[]
  technologies: string[]
  url?: string
  featured: boolean
}

export interface BlogPost extends SanityDocument {
  _type: 'blogPost'
  title: LocalizedString
  slug: {
    _type: 'slug'
    current: string
  }
  author: string
  publishedAt: string
  excerpt: LocalizedString
  content: LocalizedText
  image: SanityImage
  category: string
  tags: string[]
  seo: {
    title: LocalizedString
    description: LocalizedString
    keywords: LocalizedString
  }
}

export interface Page extends SanityDocument {
  _type: 'page'
  title: LocalizedString
  slug: {
    _type: 'slug'
    current: string
  }
  content: LocalizedText
  seo: {
    title: LocalizedString
    description: LocalizedString
    keywords: LocalizedString
  }
}