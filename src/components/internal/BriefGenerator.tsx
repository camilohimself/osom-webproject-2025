'use client'

import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'

interface ProjectData {
  clientName: string
  projectName: string
  sector: string
  companySize: 'startup' | 'pme' | 'corporate'
  budget: string
  deadline: string
  targetAudience: string
  keyMessage: string
  competitors: string[]
  conversionGoal: 'lead' | 'sale' | 'branding'
  competitorsData: any[]
  personasData: any[]
  keywordsData: any[]
  screenshots: File[]
  inspiringSites: string[]
  animationRefs: string
  visualStyle: 'corporate' | 'modern' | 'creative' | 'minimal'
  multilingual: boolean
  ecommerce: boolean
  crmIntegration: boolean
  maintenance: 'client' | 'osom'
}

interface BriefGeneratorProps {
  projectData: ProjectData
  onGenerate: () => void
  isGenerating: boolean
}

interface TechnicalRecommendation {
  stack: string
  complexity: 'simple' | 'medium' | 'complex'
  timeline: string
  estimatedHours: number
  features: string[]
  risks: string[]
}

export default function BriefGenerator({ projectData, onGenerate, isGenerating }: BriefGeneratorProps) {
  const [generatedBrief, setGeneratedBrief] = useState<any>(null)
  const [recommendation, setRecommendation] = useState<TechnicalRecommendation>()

  // Génération automatique des recommandations techniques
  const generateTechnicalRecommendation = useCallback((): TechnicalRecommendation => {
    let complexity: 'simple' | 'medium' | 'complex' = 'simple'
    let estimatedHours = 40
    const features: string[] = []
    const risks: string[] = []

    // Analyse de la complexité
    if (projectData.ecommerce) {
      complexity = 'complex'
      estimatedHours += 60
      features.push('E-commerce avec paiements')
      features.push('Gestion produits/stock')
    }

    if (projectData.multilingual) {
      complexity = complexity === 'simple' ? 'medium' : 'complex'
      estimatedHours += 30
      features.push('Interface multilingue (FR/DE/EN/IT)')
      features.push('Gestion contenu traduit')
    }

    if (projectData.crmIntegration) {
      complexity = complexity === 'simple' ? 'medium' : 'complex'
      estimatedHours += 25
      features.push('Intégration CRM automatisée')
      features.push('Synchronisation leads')
    }

    // Recommandations de stack selon complexité
    let stack = 'Next.js 15 + TypeScript + Tailwind CSS'
    if (complexity === 'complex') {
      stack += ' + Prisma + PostgreSQL'
      features.push('Base de données optimisée')
      features.push('Cache Redis')
    }

    // Analyse des risques
    if (projectData.deadline && new Date(projectData.deadline) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)) {
      risks.push('⚠️ Deadline serrée - Risque sur qualité')
    }

    if (projectData.competitorsData.length === 0) {
      risks.push('ℹ️ Manque données concurrence - Analyse limitée')
    }

    if (!projectData.budget || projectData.budget.toLowerCase().includes('faible')) {
      risks.push('💰 Budget serré - Features limitées recommandées')
    }

    // Calcul timeline
    const weeks = Math.ceil(estimatedHours / 40)
    const timeline = `${weeks} semaine${weeks > 1 ? 's' : ''} (${estimatedHours}h)`

    return {
      stack,
      complexity,
      timeline,
      estimatedHours,
      features,
      risks
    }
  }, [projectData])

  // Génération du brief complet
  const handleGenerate = useCallback(() => {
    const techRec = generateTechnicalRecommendation()
    setRecommendation(techRec)

    // Analyse automatique des données CSV
    const competitorAnalysis = projectData.competitorsData.length > 0 
      ? `${projectData.competitorsData.length} concurrents analysés`
      : 'Analyse concurrentielle manquante'

    const personaInsights = projectData.personasData.length > 0
      ? `${projectData.personasData.length} personas détaillés`
      : 'Personas à définir'

    const seoKeywords = projectData.keywordsData.length > 0
      ? `${projectData.keywordsData.length} mots-clés ciblés`
      : 'Recherche mots-clés nécessaire'

    const brief = {
      // Résumé exécutif
      executive: {
        client: projectData.clientName,
        project: projectData.projectName,
        budget: projectData.budget,
        deadline: projectData.deadline,
        objective: projectData.conversionGoal
      },
      
      // Analyse marketing
      marketing: {
        target: projectData.targetAudience,
        message: projectData.keyMessage,
        competitors: competitorAnalysis,
        personas: personaInsights,
        seo: seoKeywords
      },
      
      // Recommandations techniques
      technical: techRec,
      
      // Planning détaillé
      planning: {
        phase1: 'Brief + Wireframes + Design (25%)',
        phase2: 'Développement core (50%)',
        phase3: 'Intégrations + Tests (20%)',
        phase4: 'Déploiement + Formation (5%)'
      },
      
      // Livrables
      deliverables: [
        'Maquettes approuvées',
        'Site responsive (mobile-first)',
        'Interface admin (si requis)',
        'Documentation technique',
        'Formation utilisateur',
        'Suivi post-lancement (1 mois)'
      ]
    }

    setGeneratedBrief(brief)
    onGenerate()
  }, [projectData, generateTechnicalRecommendation, onGenerate])

  // Export CSV
  const exportToCSV = useCallback(() => {
    if (!generatedBrief || !recommendation) return

    const csvData = [
      ['BRIEF TECHNIQUE OSOM'],
      [],
      ['INFORMATIONS CLIENT'],
      ['Client', projectData.clientName],
      ['Projet', projectData.projectName],
      ['Secteur', projectData.sector],
      ['Budget', projectData.budget],
      ['Deadline', projectData.deadline],
      [],
      ['RECOMMANDATIONS TECHNIQUES'],
      ['Stack Technology', recommendation.stack],
      ['Complexité', recommendation.complexity],
      ['Timeline estimé', recommendation.timeline],
      ['Heures estimées', recommendation.estimatedHours.toString()],
      [],
      ['FEATURES PRINCIPALES'],
      ...recommendation.features.map(f => ['Feature', f]),
      [],
      ['RISQUES IDENTIFIÉS'],
      ...recommendation.risks.map(r => ['Risque', r]),
      [],
      ['ANALYSE DONNÉES'],
      ['Concurrents analysés', projectData.competitorsData.length.toString()],
      ['Personas définis', projectData.personasData.length.toString()],
      ['Mots-clés research', projectData.keywordsData.length.toString()],
      ['Screenshots références', projectData.screenshots.length.toString()],
      [],
      ['PLANNING PHASES'],
      ['Phase 1', 'Brief + Design (25%)'],
      ['Phase 2', 'Développement (50%)'],
      ['Phase 3', 'Tests + Intégrations (20%)'],
      ['Phase 4', 'Déploiement (5%)']
    ]

    const csvContent = csvData.map(row => row.join(',')).join('\n')
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `brief-${projectData.clientName?.replace(/\s+/g, '-').toLowerCase()}-${Date.now()}.csv`)
    link.style.visibility = 'hidden'
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }, [generatedBrief, recommendation, projectData])

  return (
    <div className="space-y-6">
      {/* Résumé du projet */}
      <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/20">
        <h3 className="text-xl font-bold text-white mb-4">📊 Résumé du Projet</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div>
            <div className="text-gray-400">Client</div>
            <div className="text-white font-semibold">{projectData.clientName || 'Non défini'}</div>
          </div>
          <div>
            <div className="text-gray-400">Budget</div>
            <div className="text-white font-semibold">{projectData.budget || 'À définir'}</div>
          </div>
          <div>
            <div className="text-gray-400">Objectif</div>
            <div className="text-white font-semibold">
              {projectData.conversionGoal === 'lead' ? 'Génération Leads' :
               projectData.conversionGoal === 'sale' ? 'Ventes Directes' : 'Notoriété'}
            </div>
          </div>
        </div>
      </div>

      {/* Données collectées */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Concurrents', value: projectData.competitorsData.length, icon: '🏢' },
          { label: 'Personas', value: projectData.personasData.length, icon: '👥' },
          { label: 'Mots-clés', value: projectData.keywordsData.length, icon: '🔍' },
          { label: 'Images', value: projectData.screenshots.length, icon: '🖼️' }
        ].map((stat) => (
          <div key={stat.label} className="bg-black/30 rounded-lg p-4 border border-gray-700 text-center">
            <div className="text-2xl mb-1">{stat.icon}</div>
            <div className="text-xl font-bold text-white">{stat.value}</div>
            <div className="text-xs text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Bouton génération */}
      <motion.button
        onClick={handleGenerate}
        disabled={isGenerating || !projectData.clientName}
        className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 disabled:from-gray-600 disabled:to-gray-600 text-white font-bold py-4 px-6 rounded-lg transition-all disabled:cursor-not-allowed"
        whileHover={{ scale: isGenerating ? 1 : 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isGenerating ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
            Génération du brief technique...
          </div>
        ) : (
          '🚀 Générer Brief Technique Complet'
        )}
      </motion.button>

      {/* Brief généré */}
      {generatedBrief && recommendation && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Recommandations techniques */}
          <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-lg p-6 border border-yellow-500/20">
            <h3 className="text-xl font-bold text-white mb-4">⚙️ Recommandations Techniques</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-1">Stack Recommandé</div>
                  <div className="text-white font-semibold">{recommendation.stack}</div>
                </div>
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-1">Complexité</div>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                    recommendation.complexity === 'simple' ? 'bg-green-500/20 text-green-400' :
                    recommendation.complexity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {recommendation.complexity.toUpperCase()}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Timeline Estimé</div>
                  <div className="text-white font-semibold">{recommendation.timeline}</div>
                </div>
              </div>
              
              <div>
                <div className="mb-4">
                  <div className="text-sm text-gray-400 mb-2">Features Principales</div>
                  <div className="space-y-1">
                    {recommendation.features.map((feature, index) => (
                      <div key={index} className="text-sm text-gray-300 flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Risques */}
            {recommendation.risks.length > 0 && (
              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="text-sm text-gray-400 mb-2">Points d'Attention</div>
                <div className="space-y-1">
                  {recommendation.risks.map((risk, index) => (
                    <div key={index} className="text-sm text-orange-300 flex items-start">
                      <span className="mr-2 mt-0.5">⚠️</span>
                      {risk}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Export */}
          <div className="flex space-x-4">
            <button
              onClick={exportToCSV}
              className="flex-1 bg-blue-500 hover:bg-blue-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              📥 Exporter Brief CSV
            </button>
            <button
              onClick={() => window.print()}
              className="flex-1 bg-purple-500 hover:bg-purple-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
            >
              🖨️ Imprimer Brief
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}