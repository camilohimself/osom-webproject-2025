'use client'

import { useState, useCallback } from 'react'

export interface CompetitorInsight {
  url: string
  title?: string
  description?: string
  technologies: string[]
  seoScore: number
  loadTime: number
  mobileOptimized: boolean
  hasSSL: boolean
  socialPresence: {
    facebook?: string
    linkedin?: string
    instagram?: string
  }
  estimatedTraffic: string
  strengths: string[]
  weaknesses: string[]
  recommendations: string[]
}

export interface SEOAnalysis {
  keywordDensity: { [key: string]: number }
  metaOptimization: number
  headingStructure: number
  imageOptimization: number
  overallScore: number
  improvements: string[]
}

export const useCompetitorAnalysis = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResults, setAnalysisResults] = useState<CompetitorInsight[]>([])

  // Simulation d'analyse concurrentielle (en production, utiliserait APIs externes)
  const analyzeCompetitor = useCallback(async (url: string): Promise<CompetitorInsight> => {
    // Simulation de latence API
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000))

    const domain = new URL(url).hostname
    
    // Analyse simulée basée sur patterns réalistes
    const mockInsight: CompetitorInsight = {
      url,
      title: `${domain.split('.')[0].toUpperCase()} - Solution Web`,
      description: 'Solutions digitales innovantes pour entreprises modernes',
      technologies: generateTechStack(),
      seoScore: Math.floor(Math.random() * 40) + 60, // 60-100
      loadTime: Math.random() * 3 + 1, // 1-4 secondes
      mobileOptimized: Math.random() > 0.2, // 80% chance
      hasSSL: Math.random() > 0.1, // 90% chance
      socialPresence: generateSocialPresence(),
      estimatedTraffic: generateTrafficEstimate(),
      strengths: generateStrengths(),
      weaknesses: generateWeaknesses(),
      recommendations: generateRecommendations()
    }

    return mockInsight
  }, [])

  const analyzeMultipleCompetitors = useCallback(async (urls: string[]) => {
    if (urls.length === 0) return

    setIsAnalyzing(true)
    const results: CompetitorInsight[] = []

    for (const url of urls) {
      try {
        const insight = await analyzeCompetitor(url)
        results.push(insight)
      } catch (error) {
        console.error(`Erreur analyse ${url}:`, error)
        // Ajouter un résultat d'erreur
        results.push({
          url,
          title: 'Analyse échouée',
          technologies: [],
          seoScore: 0,
          loadTime: 0,
          mobileOptimized: false,
          hasSSL: false,
          socialPresence: {},
          estimatedTraffic: 'Indisponible',
          strengths: [],
          weaknesses: ['URL inaccessible ou invalide'],
          recommendations: ['Vérifier l\'URL et réessayer']
        })
      }
    }

    setAnalysisResults(results)
    setIsAnalyzing(false)
  }, [analyzeCompetitor])

  const analyzeSEOKeywords = useCallback((keywords: any[]): SEOAnalysis => {
    if (keywords.length === 0) {
      return {
        keywordDensity: {},
        metaOptimization: 0,
        headingStructure: 0,
        imageOptimization: 0,
        overallScore: 0,
        improvements: ['Aucun mot-clé fourni pour l\'analyse']
      }
    }

    // Simulation analyse SEO
    const keywordDensity: { [key: string]: number } = {}
    keywords.forEach(kw => {
      if (kw.keyword) {
        keywordDensity[kw.keyword] = Math.random() * 5 + 0.5 // 0.5-5.5%
      }
    })

    const metaOptimization = Math.floor(Math.random() * 30) + 70 // 70-100
    const headingStructure = Math.floor(Math.random() * 25) + 75 // 75-100
    const imageOptimization = Math.floor(Math.random() * 40) + 60 // 60-100
    
    const overallScore = Math.floor((metaOptimization + headingStructure + imageOptimization) / 3)

    const improvements = [
      ...(metaOptimization < 80 ? ['Optimiser les meta descriptions'] : []),
      ...(headingStructure < 85 ? ['Améliorer la structure H1-H6'] : []),
      ...(imageOptimization < 70 ? ['Ajouter alt-text aux images'] : []),
      ...(overallScore > 90 ? ['Excellent travail SEO !'] : [])
    ]

    return {
      keywordDensity,
      metaOptimization,
      headingStructure,
      imageOptimization,
      overallScore,
      improvements: improvements.length > 0 ? improvements : ['Optimisation SEO solide']
    }
  }, [])

  return {
    isAnalyzing,
    analysisResults,
    analyzeMultipleCompetitors,
    analyzeSEOKeywords
  }
}

// Fonctions utilitaires pour génération de données réalistes

function generateTechStack(): string[] {
  const allTech = [
    'WordPress', 'React', 'Next.js', 'Vue.js', 'Angular', 'PHP', 'Laravel',
    'Shopify', 'Wix', 'Squarespace', 'Custom HTML/CSS', 'Bootstrap', 'Tailwind'
  ]
  const count = Math.floor(Math.random() * 3) + 2 // 2-4 technologies
  return allTech.sort(() => 0.5 - Math.random()).slice(0, count)
}

function generateSocialPresence() {
  return {
    ...(Math.random() > 0.3 ? { facebook: 'facebook.com/exemple' } : {}),
    ...(Math.random() > 0.4 ? { linkedin: 'linkedin.com/company/exemple' } : {}),
    ...(Math.random() > 0.6 ? { instagram: 'instagram.com/exemple' } : {}),
  }
}

function generateTrafficEstimate(): string {
  const ranges = [
    '1K-5K visites/mois',
    '5K-15K visites/mois', 
    '15K-50K visites/mois',
    '50K+ visites/mois'
  ]
  return ranges[Math.floor(Math.random() * ranges.length)]
}

function generateStrengths(): string[] {
  const allStrengths = [
    'Design moderne et épuré',
    'Temps de chargement rapide',
    'Optimisation mobile excellente',
    'Contenu de qualité',
    'Bonne structure SEO',
    'Interface utilisateur intuitive',
    'Portfolio client impressionnant',
    'Présence sociale active',
    'Certificats SSL configurés',
    'Analytics bien intégrés'
  ]
  const count = Math.floor(Math.random() * 3) + 2 // 2-4 forces
  return allStrengths.sort(() => 0.5 - Math.random()).slice(0, count)
}

function generateWeaknesses(): string[] {
  const allWeaknesses = [
    'Pas d\'optimisation mobile',
    'Temps de chargement lent',
    'Contenu peu actualisé',
    'Structure SEO défaillante',
    'Navigation confuse',
    'Design daté',
    'Manque de call-to-action clairs',
    'Peu de présence sociale',
    'Formulaires de contact basiques',
    'Pas de chat en ligne'
  ]
  const count = Math.floor(Math.random() * 2) + 1 // 1-2 faiblesses
  return allWeaknesses.sort(() => 0.5 - Math.random()).slice(0, count)
}

function generateRecommendations(): string[] {
  const allRecommendations = [
    'Améliorer la vitesse de chargement',
    'Optimiser pour mobile-first',
    'Renforcer la stratégie de contenu',
    'Implémenter des CTA plus visibles',
    'Développer la présence sociale',
    'Ajouter des témoignages clients',
    'Créer un blog pour le SEO',
    'Intégrer un système de chat',
    'Optimiser les images',
    'Améliorer l\'accessibilité'
  ]
  const count = Math.floor(Math.random() * 2) + 2 // 2-3 recommandations
  return allRecommendations.sort(() => 0.5 - Math.random()).slice(0, count)
}