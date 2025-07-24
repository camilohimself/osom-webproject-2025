'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useCompetitorAnalysis, type CompetitorInsight, type SEOAnalysis } from '@/hooks/useCompetitorAnalysis'

interface CompetitorAnalysisPanelProps {
  competitorsData: any[]
  keywordsData: any[]
  inspiringSites: string[]
}

export default function CompetitorAnalysisPanel({ 
  competitorsData, 
  keywordsData, 
  inspiringSites 
}: CompetitorAnalysisPanelProps) {
  const { isAnalyzing, analysisResults, analyzeMultipleCompetitors, analyzeSEOKeywords } = useCompetitorAnalysis()
  const [seoAnalysis, setSeoAnalysis] = useState<SEOAnalysis | null>(null)
  const [showDetailedAnalysis, setShowDetailedAnalysis] = useState(false)

  // URLs à analyser (de CSV + sites inspirants)
  const urlsToAnalyze = [
    ...competitorsData.map(comp => comp.url).filter(Boolean),
    ...inspiringSites.filter(url => url.trim())
  ].slice(0, 5) // Limite à 5 pour éviter surcharge

  const startAnalysis = async () => {
    if (urlsToAnalyze.length > 0) {
      await analyzeMultipleCompetitors(urlsToAnalyze)
    }
    
    if (keywordsData.length > 0) {
      const seo = analyzeSEOKeywords(keywordsData)
      setSeoAnalysis(seo)
    }
    
    setShowDetailedAnalysis(true)
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400'
    if (score >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getScoreBgColor = (score: number) => {
    if (score >= 80) return 'bg-green-500/20 border-green-500/50'
    if (score >= 60) return 'bg-yellow-500/20 border-yellow-500/50'
    return 'bg-red-500/20 border-red-500/50'
  }

  return (
    <div className="space-y-6">
      {/* Résumé des données disponibles */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/20">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center">
          🔬 Analyse Automatique Disponible
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">{urlsToAnalyze.length}</div>
            <div className="text-sm text-gray-300">URLs à analyser</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">{keywordsData.length}</div>
            <div className="text-sm text-gray-300">Mots-clés SEO</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-400">{competitorsData.length}</div>
            <div className="text-sm text-gray-300">Concurrents identifiés</div>
          </div>
        </div>

        <motion.button
          onClick={startAnalysis}
          disabled={isAnalyzing || (urlsToAnalyze.length === 0 && keywordsData.length === 0)}
          className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all disabled:cursor-not-allowed"
          whileHover={{ scale: isAnalyzing ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isAnalyzing ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
              Analyse en cours... ({analysisResults.length}/{urlsToAnalyze.length})
            </div>
          ) : (
            '🚀 Lancer Analyse Concurrentielle'
          )}
        </motion.button>
      </div>

      {/* Résultats d'analyse */}
      <AnimatePresence>
        {showDetailedAnalysis && (analysisResults.length > 0 || seoAnalysis) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="space-y-6"
          >
            {/* Analyse SEO Globale */}
            {seoAnalysis && (
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg p-6 border border-green-500/20">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  📊 Score SEO Global
                </h4>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${getScoreColor(seoAnalysis.overallScore)}`}>
                      {seoAnalysis.overallScore}/100
                    </div>
                    <div className="text-xs text-gray-400">Score Global</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-semibold ${getScoreColor(seoAnalysis.metaOptimization)}`}>
                      {seoAnalysis.metaOptimization}/100
                    </div>
                    <div className="text-xs text-gray-400">Meta Tags</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-semibold ${getScoreColor(seoAnalysis.headingStructure)}`}>
                      {seoAnalysis.headingStructure}/100
                    </div>
                    <div className="text-xs text-gray-400">Structure H1-H6</div>
                  </div>
                  <div className="text-center">
                    <div className={`text-lg font-semibold ${getScoreColor(seoAnalysis.imageOptimization)}`}>
                      {seoAnalysis.imageOptimization}/100
                    </div>
                    <div className="text-xs text-gray-400">Images</div>
                  </div>
                </div>

                {/* Améliorations recommandées */}
                <div className="mt-4">
                  <div className="text-sm font-semibold text-gray-300 mb-2">Recommandations:</div>
                  <div className="space-y-1">
                    {seoAnalysis.improvements.map((improvement, index) => (
                      <div key={index} className="text-sm text-gray-300 flex items-center">
                        <span className="text-green-400 mr-2">→</span>
                        {improvement}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Analyse Concurrents */}
            {analysisResults.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-white flex items-center">
                  🏢 Analyse Concurrentielle Détaillée
                </h4>
                
                {analysisResults.map((competitor, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-black/30 rounded-lg p-6 border border-gray-700"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h5 className="text-white font-semibold text-lg">{competitor.title}</h5>
                        <a 
                          href={competitor.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 text-sm underline"
                        >
                          {competitor.url}
                        </a>
                      </div>
                      <div className={`px-3 py-1 rounded-full border text-sm font-semibold ${getScoreBgColor(competitor.seoScore)}`}>
                        SEO: {competitor.seoScore}/100
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* Métriques techniques */}
                      <div>
                        <div className="text-sm font-semibold text-gray-300 mb-2">Métriques Techniques</div>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-400">Temps de chargement:</span>
                            <span className={competitor.loadTime < 2 ? 'text-green-400' : competitor.loadTime < 3 ? 'text-yellow-400' : 'text-red-400'}>
                              {competitor.loadTime.toFixed(1)}s
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Mobile-friendly:</span>
                            <span className={competitor.mobileOptimized ? 'text-green-400' : 'text-red-400'}>
                              {competitor.mobileOptimized ? '✓' : '✗'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">SSL:</span>
                            <span className={competitor.hasSSL ? 'text-green-400' : 'text-red-400'}>
                              {competitor.hasSSL ? '✓' : '✗'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-400">Trafic estimé:</span>
                            <span className="text-gray-300">{competitor.estimatedTraffic}</span>
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <div className="text-sm font-semibold text-gray-300 mb-2">Stack Technique</div>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {competitor.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="px-2 py-1 bg-blue-500/20 text-blue-300 text-xs rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                        
                        {/* Réseaux sociaux */}
                        {Object.keys(competitor.socialPresence).length > 0 && (
                          <div>
                            <div className="text-xs text-gray-400 mb-1">Présence sociale:</div>
                            <div className="flex space-x-2">
                              {Object.keys(competitor.socialPresence).map((platform) => (
                                <span key={platform} className="text-xs text-gray-500 capitalize">{platform}</span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Forces & Faiblesses */}
                      <div>
                        <div className="mb-3">
                          <div className="text-sm font-semibold text-green-400 mb-1">Forces</div>
                          <div className="space-y-1">
                            {competitor.strengths.map((strength, sIndex) => (
                              <div key={sIndex} className="text-xs text-gray-300 flex items-start">
                                <span className="text-green-400 mr-1 mt-0.5">+</span>
                                {strength}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <div className="text-sm font-semibold text-red-400 mb-1">Faiblesses</div>
                          <div className="space-y-1">
                            {competitor.weaknesses.map((weakness, wIndex) => (
                              <div key={wIndex} className="text-xs text-gray-300 flex items-start">
                                <span className="text-red-400 mr-1 mt-0.5">-</span>
                                {weakness}  
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Recommandations */}
                    {competitor.recommendations.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <div className="text-sm font-semibold text-yellow-400 mb-2">💡 Opportunités identifiées</div>
                        <div className="space-y-1">
                          {competitor.recommendations.map((rec, rIndex) => (
                            <div key={rIndex} className="text-xs text-gray-300 flex items-start">
                              <span className="text-yellow-400 mr-1 mt-0.5">→</span>
                              {rec}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}