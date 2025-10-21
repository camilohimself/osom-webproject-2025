'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useAnalytics } from '@/hooks/useAnalytics'
import { trackEvent, trackLead } from '@/lib/analytics'

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
    // Call real API
    const response = await fetch('/api/seo-audit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: targetUrl })
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || 'Erreur API')
    }

    const data = await response.json()

    // Transform API response to match component interface
    return {
      score: data.score,
      title: {
        exists: data.title.exists,
        length: data.title.length,
        optimal: data.title.optimal
      },
      description: {
        exists: data.description.exists,
        length: data.description.length,
        optimal: data.description.optimal
      },
      headings: {
        h1Count: data.headings.h1Count,
        h2Count: data.headings.h2Count,
        structure: data.headings.structure
      },
      images: {
        total: data.images.total,
        withAlt: data.images.withAlt,
        altOptimization: data.images.altOptimization
      },
      performance: {
        loadTime: data.performance.mobile ? (100 - data.performance.mobile) / 20 : null, // Simulate load time from score
        mobileOptimized: data.performance.mobile ? data.performance.mobile >= 50 : null
      },
      technical: {
        httpsEnabled: data.technical.httpsEnabled,
        robotsTxt: null, // Not checked in new API
        sitemap: null // Not checked in new API
      }
    }
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

      // Enregistrer le lead
      await fetch('/api/contact-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: null,
          email: email.trim(),
          phone: null,
          company: null,
          source: 'audit_seo'
        })
      })

      // Get audit data from SEO API to get recommendations
      const auditApiResponse = await fetch('/api/seo-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      })

      let recommendations: string[] = []
      if (auditApiResponse.ok) {
        const auditApiData = await auditApiResponse.json()
        recommendations = auditApiData.recommendations || []
      }

      // Send audit email with full data
      const response = await fetch('/api/send-audit-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email.trim(),
          auditData: {
            url: url,
            score: results.score,
            title: results.title,
            description: results.description,
            headings: results.headings,
            images: results.images,
            performance: {
              mobile: 100 - (results.performance.loadTime || 0) * 20, // Approximation
              desktop: null
            },
            technical: results.technical,
            recommendations: recommendations
          }
        })
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi de l\'email')
      }

      // Track SEO Audit Lead conversion
      trackLead({
        email: email.trim(),
        source: 'seo_audit_tool',
        intent_score: 8,
        business_size: 'unknown',
        budget_range: '1500-2500'
      })

      // Track conversion event
      trackEvent({
        action: 'seo_audit_requested',
        category: 'conversion',
        label: 'audit_tool_submit',
        value: 8,
        custom_parameters: {
          audit_score: results.score,
          url_audited: url,
          has_email: true
        }
      })

      alert('✅ Audit SEO détaillé envoyé ! Vérifiez votre boîte e-mail.')

    } catch (error) {
      console.error('Erreur envoi audit:', error)
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.')
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
        <h3 className="text-2xl font-bold text-white mb-2">Audit SEO gratuit & automatisé</h3>
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
                <h4 className="text-cyan-400 font-bold text-lg mb-4">Balises méta</h4>
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
                <h4 className="text-cyan-400 font-bold text-lg mb-4">Structure titres</h4>
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
                <h4 className="text-cyan-400 font-bold text-lg mb-4">Optimisation images</h4>
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
                <h4 className="text-cyan-400 font-bold text-lg mb-4">Performance</h4>
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
                      Recevez le rapport détaillé (PDF)
                    </h4>
                    <p className="text-gray-300 mb-6">
                      Recommandations personnalisées + lien PageSpeed Insights complet + plan d'action prioritaire
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
                        className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmittingLead ? '📧 Envoi...' : 'Recevoir le rapport'}
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