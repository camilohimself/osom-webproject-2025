import { groq } from 'next-sanity'
import type { Locale } from './i18n'

export const getServices = (locale: Locale) => groq`
  *[_type == "service"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    shortDescription,
    description,
    icon,
    image {
      asset->,
      alt
    },
    features,
    price,
    seo
  }
`

export const getServiceBySlug = (slug: string, locale: Locale) => groq`
  *[_type == "service" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    shortDescription,
    description,
    icon,
    image {
      asset->,
      alt
    },
    features,
    price,
    seo
  }
`

export const getCaseStudies = (locale: Locale) => groq`
  *[_type == "caseStudy"] | order(year desc) {
    _id,
    title,
    slug,
    client,
    category,
    year,
    description,
    image {
      asset->,
      alt
    },
    results,
    technologies,
    url,
    featured
  }
`

export const getFeaturedCaseStudies = (locale: Locale) => groq`
  *[_type == "caseStudy" && featured == true] | order(year desc) [0...3] {
    _id,
    title,
    slug,
    client,
    category,
    year,
    description,
    image {
      asset->,
      alt
    },
    results,
    technologies,
    url,
    featured
  }
`

export const getCaseStudyBySlug = (slug: string, locale: Locale) => groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    client,
    category,
    year,
    description,
    image {
      asset->,
      alt
    },
    gallery[] {
      asset->,
      alt
    },
    results,
    technologies,
    url,
    featured
  }
`

export const getBlogPosts = (locale: Locale) => groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    image {
      asset->,
      alt
    },
    category,
    tags,
    seo
  }
`

export const getLatestBlogPosts = (locale: Locale, limit: number = 3) => groq`
  *[_type == "blogPost"] | order(publishedAt desc) [0...${limit}] {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    image {
      asset->,
      alt
    },
    category,
    tags
  }
`

export const getBlogPostBySlug = (slug: string, locale: Locale) => groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author,
    publishedAt,
    excerpt,
    content,
    image {
      asset->,
      alt
    },
    category,
    tags,
    seo
  }
`

export const getPageBySlug = (slug: string, locale: Locale) => groq`
  *[_type == "page" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    content,
    seo
  }
`

export const getHomePageData = (locale: Locale) => groq`
  {
    "services": *[_type == "service"] | order(_createdAt desc) [0...3] {
      _id,
      title,
      slug,
      shortDescription,
      icon,
      image {
        asset->,
        alt
      }
    },
    "featuredCaseStudies": *[_type == "caseStudy" && featured == true] | order(year desc) [0...3] {
      _id,
      title,
      slug,
      client,
      category,
      year,
      image {
        asset->,
        alt
      }
    },
    "latestBlogPosts": *[_type == "blogPost"] | order(publishedAt desc) [0...2] {
      _id,
      title,
      slug,
      author,
      publishedAt,
      excerpt,
      image {
        asset->,
        alt
      },
      category
    }
  }
`