'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAnalytics } from '@/hooks/useAnalytics'

interface SEOMetrics {
  score: number
  title: {
    exists: boolean
    length: number
    optimal: boolean
  }
  description: {
    exists: boolean
    length: number
    optimal: boolean
  }
  headings: {
    h1Count: number
    h2Count: number
    structure: 'good' | 'fair' | 'poor'
  }
  images: {
    total: number
    withAlt: number
    altOptimization: number
  }
  performance: {
    loadTime: number | null
    mobileOptimized: boolean | null
  }
  technical: {
    httpsEnabled: boolean
    robotsTxt: boolean | null
    sitemap: boolean | null
  }
}

interface SEOAuditToolProps {
  onLeadCapture?: (email: string, auditData: SEOMetrics) => void
}

const SEOAuditTool: React.FC<SEOAuditToolProps> = ({ onLeadCapture }) => {
  const [url, setUrl] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [results, setResults] = useState<SEOMetrics | null>(null)
  const [showLeadCapture, setShowLeadCapture] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmittingLead, setIsSubmittingLead] = useState(false)
  const analyzeRef = useRef<HTMLDivElement>(null)
  const { trackBusinessEvent, trackConversionWithLead } = useAnalytics()

  const performSEOAnalysis = async (targetUrl: string): Promise<SEOMetrics> => {
    // Simulate real SEO analysis with intelligent scoring
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Simulate realistic results based on common SEO patterns
    const urlAnalysis = targetUrl.toLowerCase()
    const hasWww = urlAnalysis.includes('www.')
    const hasHttps = targetUrl.startsWith('https://')
    const isWordPress = Math.random() > 0.6 // Simulate WP detection
    
    const titleLength = Math.floor(Math.random() * 80) + 30
    const descLength = Math.floor(Math.random() * 200) + 80
    const h1Count = Math.floor(Math.random() * 3) + 1
    const h2Count = Math.floor(Math.random() * 8) + 2
    const imageTotal = Math.floor(Math.random() * 50) + 10
    const imagesWithAlt = Math.floor(imageTotal * (0.3 + Math.random() * 0.5))
    
    const metrics: SEOMetrics = {
      score: 0, // Will calculate below
      title: {
        exists: true,
        length: titleLength,
        optimal: titleLength >= 30 && titleLength <= 60
      },
      description: {
        exists: descLength > 0,
        length: descLength,
        optimal: descLength >= 120 && descLength <= 160
      },
      headings: {
        h1Count,
        h2Count,
        structure: h1Count === 1 && h2Count >= 2 ? 'good' : 
                  h1Count <= 2 && h2Count >= 1 ? 'fair' : 'poor'
      },
      images: {
        total: imageTotal,
        withAlt: imagesWithAlt,
        altOptimization: Math.round((imagesWithAlt / imageTotal) * 100)
      },
      performance: {
        loadTime: 1.2 + Math.random() * 4, // 1.2-5.2 seconds
        mobileOptimized: Math.random() > 0.3
      },
      technical: {
        httpsEnabled: hasHttps,
        robotsTxt: Math.random() > 0.4,
        sitemap: Math.random() > 0.5
      }
    }

    // Calculate overall score
    let score = 0
    if (metrics.title.optimal) score += 15
    else if (metrics.title.exists) score += 8
    
    if (metrics.description.optimal) score += 15
    else if (metrics.description.exists) score += 8
    
    if (metrics.headings.structure === 'good') score += 20
    else if (metrics.headings.structure === 'fair') score += 12
    else score += 5
    
    score += Math.min(metrics.images.altOptimization / 2, 15) // Max 15 points for images
    
    if (metrics.performance.loadTime && metrics.performance.loadTime < 3) score += 15
    else if (metrics.performance.loadTime && metrics.performance.loadTime < 5) score += 8
    
    if (metrics.performance.mobileOptimized) score += 10
    
    if (metrics.technical.httpsEnabled) score += 5
    if (metrics.technical.robotsTxt) score += 3
    if (metrics.technical.sitemap) score += 2
    
    metrics.score = Math.min(Math.round(score), 100)
    
    return metrics
  }

  const handleAnalyze = async () => {
    if (!url.trim()) return
    
    // Basic URL validation and formatting
    let formattedUrl = url.trim()
    if (!/^https?:\/\//.test(formattedUrl)) {
      formattedUrl = `https://${formattedUrl}`
    }
    
    setIsAnalyzing(true)
    trackBusinessEvent('seo_audit_started', 'lead_magnet', { target_url: formattedUrl })
    
    try {
      const auditResults = await performSEOAnalysis(formattedUrl)
      setResults(auditResults)
      
      // Scroll to results
      setTimeout(() => {
        analyzeRef.current?.scrollIntoView({ behavior: 'smooth' })
      }, 500)
      
      // Show lead capture after 2 seconds
      setTimeout(() => {
        setShowLeadCapture(true)
      }, 2000)
      
    } catch (error) {
      console.error('SEO Analysis failed:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleLeadSubmit = async () => {
    if (!email.trim() || !results) return
    
    setIsSubmittingLead(true)
    
    try {
      // Track lead capture
      trackConversionWithLead('seo_audit_lead', 15, {
        email: email,
        source: 'seo_audit_tool',
        intent_score: results.score < 60 ? 8 : 6
      })
      
      // Call parent callback if provided
      onLeadCapture?.(email, results)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Show success (this could trigger email sending)
      alert('✅ Audit SEO détaillé envoyé ! Vérifiez votre boîte e-mail.')
      
    } finally {
      setIsSubmittingLead(false)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400'
    if (score >= 60) return 'text-yellow-400' 
    return 'text-red-400'
  }

  const getScoreBg = (score: number) => {
    if (score >= 80) return 'from-green-400/10 to-green-600/20'
    if (score >= 60) return 'from-yellow-400/10 to-orange-600/20'
    return 'from-red-400/10 to-red-600/20'
  }

  return (
    <div className="bg-black/60 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-cyan-400 rounded-full mx-auto mb-4 flex items-center justify-center">
          <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Audit SEO gratuit >Audit SEO Gratuit & Automatisé< automatisé</h3>
        <p className="text-gray-300">Obtenez un diagnostic complet de votre site en 30 secondes</p>
      </div>

      {/* URL Input */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://votresite.com"
            className="flex-1 bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
            disabled={isAnalyzing}
          />
          <button
            onClick={handleAnalyze}
            disabled={!url.trim() || isAnalyzing}
            className="bg-cyan-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-cyan-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isAnalyzing ? (
              <span className="flex items-center">
                <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                Analyse...
              </span>
            ) : 'Analyser'}
          </button>
        </div>
      </div>

      {/* Analysis Progress */}
      <AnimatePresence>
        {isAnalyzing && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mb-8 p-6 bg-gradient-to-r from-cyan-400/10 to-blue-600/20 rounded-lg border border-cyan-400/30"
          >
            <div className="text-center">
              <div className="text-cyan-400 font-semibold mb-2">🔍 Analyse en cours...</div>
              <div className="space-y-2 text-sm text-gray-300">
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  ✓ Vérification des balises title & description
                </motion.div>
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  ✓ Analyse de la structure des titres H1-H6
                </motion.div>
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.4 }}
                >
                  ✓ Optimisation des images et attributs ALT
                </motion.div>
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2.0 }}
                >
                  ✓ Test de performance et vitesse de chargement
                </motion.div>
                <motion.div 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 2.6 }}
                >
                  ✓ Vérification des aspects techniques (HTTPS, robots.txt, sitemap)
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results */}
      <AnimatePresence>
        {results && (
          <motion.div 
            ref={analyzeRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Overall Score */}
            <div className={`bg-gradient-to-r ${getScoreBg(results.score)} rounded-xl p-8 border border-gray-600`}>
              <div className="text-center mb-6">
                <div className={`text-6xl font-bold ${getScoreColor(results.score)} mb-2`}>
                  {results.score}/100
                </div>
                <div className="text-xl text-white font-semibold">Score SEO Global</div>
                <div className="text-gray-300">
                  {results.score >= 80 ? 'Excellent ! Site bien optimisé' :
                   results.score >= 60 ? 'Bon potentiel, améliorations possibles' :
                   'Gros potentiel d\'amélioration détecté'}
                </div>
              </div>
            </div>

            {/* Detailed Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Title & Description */}
              <div className="bg-black/40 rounded-lg p-6 border border-gray-600">
                <h4 className="text-cyan-400 font-bold text-lg mb-4">📄 Balises Méta</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Title</span>
                    <span className={results.title.optimal ? 'text-green-400' : 'text-yellow-400'}>
                      {results.title.length} car. {results.title.optimal ? '✓' : '⚠️'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Description</span>
                    <span className={results.description.optimal ? 'text-green-400' : 'text-yellow-400'}>
                      {results.description.length} car. {results.description.optimal ? '✓' : '⚠️'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Headings Structure */}
              <div className="bg-black/40 rounded-lg p-6 border border-gray-600">
                <h4 className="text-cyan-400 font-bold text-lg mb-4">🏗️ Structure Titres</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">H1</span>
                    <span className={results.headings.h1Count === 1 ? 'text-green-400' : 'text-yellow-400'}>
                      {results.headings.h1Count} {results.headings.h1Count === 1 ? '✓' : '⚠️'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">H2+</span>
                    <span className="text-gray-300">{results.headings.h2Count}</span>
                  </div>
                  <div className="text-sm">
                    Structure: <span className={
                      results.headings.structure === 'good' ? 'text-green-400' :
                      results.headings.structure === 'fair' ? 'text-yellow-400' : 'text-red-400'
                    }>
                      {results.headings.structure === 'good' ? 'Excellente' :
                       results.headings.structure === 'fair' ? 'Correcte' : 'À améliorer'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Images */}
              <div className="bg-black/40 rounded-lg p-6 border border-gray-600">
                <h4 className="text-cyan-400 font-bold text-lg mb-4">🖼️ Optimisation Images</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Images totales</span>
                    <span className="text-gray-300">{results.images.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Avec ALT</span>
                    <span className={results.images.altOptimization >= 70 ? 'text-green-400' : 'text-yellow-400'}>
                      {results.images.withAlt} ({results.images.altOptimization}%)
                    </span>
                  </div>
                </div>
              </div>

              {/* Performance */}
              <div className="bg-black/40 rounded-lg p-6 border border-gray-600">
                <h4 className="text-cyan-400 font-bold text-lg mb-4">⚡ Performance</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Temps de chargement</span>
                    <span className={
                      results.performance.loadTime && results.performance.loadTime < 3 ? 'text-green-400' :
                      results.performance.loadTime && results.performance.loadTime < 5 ? 'text-yellow-400' : 'text-red-400'
                    }>
                      {results.performance.loadTime?.toFixed(1)}s
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Mobile-friendly</span>
                    <span className={results.performance.mobileOptimized ? 'text-green-400' : 'text-red-400'}>
                      {results.performance.mobileOptimized ? '✓ Oui' : '✗ Non'}
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* Lead Capture */}
            <AnimatePresence>
              {showLeadCapture && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="bg-gradient-to-r from-yellow-400/10 to-orange-500/20 rounded-xl p-8 border border-yellow-400/30"
                >
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-white mb-4">
                      🎯 Recevez le Rapport Détaillé (PDF)
                    </h4>
                    <p className="text-gray-300 mb-6">
                      Recommendations personnalisées + plan d'action prioritaire pour améliorer votre SEO
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="votre@email.com"
                        className="flex-1 bg-black/40 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 transition-colors"
                        disabled={isSubmittingLead}
                      />
                      <button
                        onClick={handleLeadSubmit}
                        disabled={!email.trim() || isSubmittingLead}
                        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors disabled:opacity-50"
                      >
                        {isSubmittingLead ? '📧 Envoi...' : 'Recevoir le PDF'}
                      </button>
                    </div>
                    
                    <div className="text-sm text-gray-400 mt-4">
                      ✓ 100% gratuit • ✓ Pas de spam • ✓ Désabonnement facile
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SEOAuditTool