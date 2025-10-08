import { NextRequest, NextResponse } from 'next/server'
import * as cheerio from 'cheerio'

interface SEOAuditResult {
  score: number
  url: string
  title: {
    exists: boolean
    content: string
    length: number
    optimal: boolean
  }
  description: {
    exists: boolean
    content: string
    length: number
    optimal: boolean
  }
  headings: {
    h1: string[]
    h1Count: number
    h2Count: number
    h3Count: number
    structure: 'good' | 'fair' | 'poor'
  }
  images: {
    total: number
    withAlt: number
    withoutAlt: string[]
    altOptimization: number
  }
  performance: {
    mobile: number | null
    desktop: number | null
    loadTime: number | null
    recommendations: string[]
  }
  technical: {
    httpsEnabled: boolean
    hasCanonical: boolean
    hasViewport: boolean
    hasLangTag: boolean
  }
  recommendations: string[]
}

// PageSpeed Insights API (Google - gratuite)
async function getPageSpeedScore(url: string): Promise<{ mobile: number | null; desktop: number | null; recommendations: string[] }> {
  const API_KEY = process.env.GOOGLE_PAGESPEED_API_KEY || ''

  if (!API_KEY) {
    console.warn('⚠️ GOOGLE_PAGESPEED_API_KEY not set - skipping PageSpeed check')
    return { mobile: null, desktop: null, recommendations: [] }
  }

  try {
    // Mobile score
    const mobileUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&key=${API_KEY}`
    const mobileRes = await fetch(mobileUrl, { next: { revalidate: 3600 } })
    const mobileData = await mobileRes.json()

    const mobileScore = mobileData?.lighthouseResult?.categories?.performance?.score
      ? Math.round(mobileData.lighthouseResult.categories.performance.score * 100)
      : null

    // Desktop score
    const desktopUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=desktop&key=${API_KEY}`
    const desktopRes = await fetch(desktopUrl, { next: { revalidate: 3600 } })
    const desktopData = await desktopRes.json()

    const desktopScore = desktopData?.lighthouseResult?.categories?.performance?.score
      ? Math.round(desktopData.lighthouseResult.categories.performance.score * 100)
      : null

    // Extract recommendations
    const recommendations: string[] = []
    const audits = mobileData?.lighthouseResult?.audits || {}

    if (audits['first-contentful-paint']?.score < 0.9) {
      recommendations.push('Améliorer le First Contentful Paint (FCP)')
    }
    if (audits['largest-contentful-paint']?.score < 0.9) {
      recommendations.push('Optimiser le Largest Contentful Paint (LCP)')
    }
    if (audits['cumulative-layout-shift']?.score < 0.9) {
      recommendations.push('Réduire le Cumulative Layout Shift (CLS)')
    }

    return { mobile: mobileScore, desktop: desktopScore, recommendations }
  } catch (error) {
    console.error('PageSpeed API error:', error)
    return { mobile: null, desktop: null, recommendations: [] }
  }
}

// Scraper HTML pour vraies meta tags + structure
async function scrapeHTMLMetadata(url: string) {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; OSOMBot/1.0; +https://osom.ch)'
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`)
    }

    const html = await response.text()
    const $ = cheerio.load(html)

    // Meta tags
    const title = $('title').text() || $('meta[property="og:title"]').attr('content') || ''
    const description = $('meta[name="description"]').attr('content') ||
                       $('meta[property="og:description"]').attr('content') || ''

    // Headings
    const h1Elements = $('h1').toArray().map(el => $(el).text().trim())
    const h2Count = $('h2').length
    const h3Count = $('h3').length

    // Images
    const images = $('img').toArray()
    const imagesWithoutAlt: string[] = []
    let imagesWithAlt = 0

    images.forEach(img => {
      const alt = $(img).attr('alt')
      const src = $(img).attr('src') || 'unknown'

      if (!alt || alt.trim() === '') {
        imagesWithoutAlt.push(src)
      } else {
        imagesWithAlt++
      }
    })

    // Technical
    const canonical = $('link[rel="canonical"]').attr('href')
    const viewport = $('meta[name="viewport"]').attr('content')
    const htmlLang = $('html').attr('lang')

    return {
      title,
      description,
      h1: h1Elements,
      h2Count,
      h3Count,
      images: {
        total: images.length,
        withAlt: imagesWithAlt,
        withoutAlt: imagesWithoutAlt.slice(0, 5) // Max 5 exemples
      },
      technical: {
        hasCanonical: !!canonical,
        hasViewport: !!viewport,
        hasLangTag: !!htmlLang
      }
    }
  } catch (error) {
    console.error('HTML scraping error:', error)
    throw error
  }
}

// Calcul score SEO réel
function calculateSEOScore(data: Partial<SEOAuditResult>): number {
  let score = 0

  // Title (20 points max)
  if (data.title?.optimal) score += 20
  else if (data.title?.exists && data.title.length > 0) score += 10

  // Description (20 points max)
  if (data.description?.optimal) score += 20
  else if (data.description?.exists && data.description.length > 0) score += 10

  // Headings (15 points max)
  if (data.headings?.structure === 'good') score += 15
  else if (data.headings?.structure === 'fair') score += 8

  // Images ALT (15 points max)
  if (data.images && data.images.total > 0) {
    score += Math.min((data.images.altOptimization / 100) * 15, 15)
  }

  // Performance (20 points max)
  if (data.performance?.mobile && data.performance.mobile >= 90) score += 10
  else if (data.performance?.mobile && data.performance.mobile >= 50) score += 5

  if (data.performance?.desktop && data.performance.desktop >= 90) score += 10
  else if (data.performance?.desktop && data.performance.desktop >= 50) score += 5

  // Technical (10 points max)
  if (data.technical?.httpsEnabled) score += 4
  if (data.technical?.hasCanonical) score += 3
  if (data.technical?.hasViewport) score += 2
  if (data.technical?.hasLangTag) score += 1

  return Math.min(Math.round(score), 100)
}

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json()

    if (!url || typeof url !== 'string') {
      return NextResponse.json({ error: 'URL invalide' }, { status: 400 })
    }

    // Validate URL
    let targetUrl = url.trim()
    if (!/^https?:\/\//i.test(targetUrl)) {
      targetUrl = `https://${targetUrl}`
    }

    try {
      new URL(targetUrl)
    } catch {
      return NextResponse.json({ error: 'Format URL invalide' }, { status: 400 })
    }

    // 1. Scrape HTML metadata
    const htmlData = await scrapeHTMLMetadata(targetUrl)

    // 2. Get PageSpeed scores (peut échouer sans API key)
    const perfData = await getPageSpeedScore(targetUrl)

    // 3. Build result object
    const result: SEOAuditResult = {
      score: 0, // Calculated below
      url: targetUrl,
      title: {
        exists: htmlData.title.length > 0,
        content: htmlData.title,
        length: htmlData.title.length,
        optimal: htmlData.title.length >= 30 && htmlData.title.length <= 60
      },
      description: {
        exists: htmlData.description.length > 0,
        content: htmlData.description,
        length: htmlData.description.length,
        optimal: htmlData.description.length >= 120 && htmlData.description.length <= 160
      },
      headings: {
        h1: htmlData.h1,
        h1Count: htmlData.h1.length,
        h2Count: htmlData.h2Count,
        h3Count: htmlData.h3Count,
        structure: htmlData.h1.length === 1 && htmlData.h2Count >= 2 ? 'good' :
                  htmlData.h1.length <= 2 && htmlData.h2Count >= 1 ? 'fair' : 'poor'
      },
      images: {
        total: htmlData.images.total,
        withAlt: htmlData.images.withAlt,
        withoutAlt: htmlData.images.withoutAlt,
        altOptimization: htmlData.images.total > 0
          ? Math.round((htmlData.images.withAlt / htmlData.images.total) * 100)
          : 100
      },
      performance: {
        mobile: perfData.mobile,
        desktop: perfData.desktop,
        loadTime: null, // Could add with Lighthouse if needed
        recommendations: perfData.recommendations
      },
      technical: {
        httpsEnabled: targetUrl.startsWith('https://'),
        hasCanonical: htmlData.technical.hasCanonical,
        hasViewport: htmlData.technical.hasViewport,
        hasLangTag: htmlData.technical.hasLangTag
      },
      recommendations: []
    }

    // Generate recommendations
    if (!result.title.optimal) {
      result.recommendations.push(
        result.title.length < 30
          ? 'Allonger le titre (optimal: 50-60 caractères)'
          : 'Raccourcir le titre (optimal: 50-60 caractères)'
      )
    }

    if (!result.description.optimal) {
      result.recommendations.push(
        result.description.length < 120
          ? 'Étoffer la meta description (optimal: 140-160 caractères)'
          : 'Raccourcir la meta description (optimal: 140-160 caractères)'
      )
    }

    if (result.headings.h1Count !== 1) {
      result.recommendations.push('Utiliser exactement 1 balise H1 par page')
    }

    if (result.images.altOptimization < 80) {
      result.recommendations.push(`Ajouter attribut ALT à ${result.images.withoutAlt.length} images`)
    }

    if (!result.technical.hasCanonical) {
      result.recommendations.push('Ajouter balise canonical pour éviter contenu dupliqué')
    }

    if (result.performance.mobile && result.performance.mobile < 50) {
      result.recommendations.push('Performance mobile critique - optimiser images et scripts')
    }

    // Add PageSpeed recommendations
    result.recommendations.push(...perfData.recommendations)

    // Calculate final score
    result.score = calculateSEOScore(result)

    return NextResponse.json(result)

  } catch (error) {
    console.error('SEO Audit error:', error)
    return NextResponse.json(
      { error: 'Erreur lors de l\'analyse. Vérifiez que le site est accessible.' },
      { status: 500 }
    )
  }
}
