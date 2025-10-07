'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CSVUploader from './CSVUploader'
import ImageUploader from './ImageUploader'
import BriefGenerator from './BriefGenerator'
import CSVTemplateDownloader from './CSVTemplateDownloader'
import CompetitorAnalysisPanel from './CompetitorAnalysisPanel'
import ProjectHistoryPanel from './ProjectHistoryPanel'
import { useProjectHistory } from '@/hooks/useProjectHistory'

interface ProjectData {
  // Contexte Client
  clientName: string
  projectName: string
  sector: string
  companySize: 'startup' | 'pme' | 'corporate'
  budget: string
  deadline: string
  
  // Analyse Marketing
  targetAudience: string
  keyMessage: string
  competitors: string[]
  conversionGoal: 'lead' | 'sale' | 'branding'
  
  // Données CSV
  competitorsData: any[]
  personasData: any[]
  keywordsData: any[]
  
  // Références Visuelles
  screenshots: File[]
  inspiringSites: string[]
  animationRefs: string
  visualStyle: 'corporate' | 'modern' | 'creative' | 'minimal'
  
  // Spécifications Techniques
  multilingual: boolean
  ecommerce: boolean
  crmIntegration: boolean
  maintenance: 'client' | 'osom'
}

const initialData: ProjectData = {
  clientName: '',
  projectName: '',
  sector: '',
  companySize: 'pme',
  budget: '',
  deadline: '',
  targetAudience: '',
  keyMessage: '',
  competitors: [],
  conversionGoal: 'lead',
  competitorsData: [],
  personasData: [],
  keywordsData: [],
  screenshots: [],
  inspiringSites: [],
  animationRefs: '',
  visualStyle: 'modern',
  multilingual: false,
  ecommerce: false,
  crmIntegration: false,
  maintenance: 'osom'
}

export default function InternalProjectBrief() {
  const [currentStep, setCurrentStep] = useState(1)
  const [projectData, setProjectData] = useState<ProjectData>(initialData)
  const [isGenerating, setIsGenerating] = useState(false)

  const steps = [
    { id: 1, title: 'Historique & Templates', icon: '📚' },
    { id: 2, title: 'Contexte Client', icon: '👤' },
    { id: 3, title: 'Analyse Marketing', icon: '🎯' },
    { id: 4, title: 'Données CSV', icon: '📊' },
    { id: 5, title: 'Références Visuelles', icon: '🎨' },
    { id: 6, title: 'Spécifications Tech', icon: '⚙️' },
    { id: 7, title: 'Analyse Concurrence', icon: '🔬' },
    { id: 8, title: 'Génération Brief', icon: '📋' }
  ]

  // Intégration historique projets
  const { addProject, markBriefGenerated } = useProjectHistory()

  const updateProjectData = useCallback((updates: Partial<ProjectData>) => {
    setProjectData(prev => ({ ...prev, ...updates }))
  }, [])

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const generateBrief = async () => {
    setIsGenerating(true)
    
    // Sauvegarder le projet dans l'historique
    const projectId = addProject(projectData)
    
    // Logic de génération brief
    setTimeout(() => {
      // Marquer le brief comme généré
      markBriefGenerated(projectId)
      setIsGenerating(false)
    }, 2000)
  }

  const loadProjectData = useCallback((project: any) => {
    setProjectData({
      ...initialData,
      clientName: project.clientName,
      projectName: project.projectName,
      sector: project.sector,
      budget: project.budget,
      deadline: project.deadline,
      // Vous pouvez ajouter d'autres champs selon vos besoins
    })
    setCurrentStep(2) // Aller à l'étape Contexte Client
  }, [])

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Progress Steps */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <motion.div
                className={`w-12 h-12 rounded-full flex items-center justify-center border-2 cursor-pointer ${
                  currentStep >= step.id
                    ? 'bg-yellow-400 border-yellow-400 text-black'
                    : 'border-gray-600 text-gray-400 hover:border-yellow-400/50'
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setCurrentStep(step.id)}
              >
                <span className="text-lg">{step.icon}</span>
              </motion.div>
              <div className="ml-3">
                <div className={`font-semibold text-sm ${
                  currentStep >= step.id ? 'text-yellow-400' : 'text-gray-400'
                }`}>
                  {step.title}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className={`mx-6 h-0.5 w-16 ${
                  currentStep > step.id ? 'bg-yellow-400' : 'bg-gray-600'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-8 min-h-[500px]"
        >
          {/* Étape 1: Historique & Templates */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                📚 Historique & Templates
              </h2>
              
              <div className="space-y-8">
                {/* Templates CSV */}
                <CSVTemplateDownloader />
                
                {/* Historique des projets */}
                <ProjectHistoryPanel 
                  currentProjectData={projectData}
                  onLoadProject={loadProjectData}
                />
              </div>
            </div>
          )}

          {/* Étape 2: Contexte Client */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                👤 Contexte Client
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nom Client
                  </label>
                  <input
                    type="text"
                    value={projectData.clientName}
                    onChange={(e) => updateProjectData({ clientName: e.target.value })}
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="Ex: Entreprise ABC SA"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nom Projet
                  </label>
                  <input
                    type="text"
                    value={projectData.projectName}
                    onChange={(e) => updateProjectData({ projectName: e.target.value })}
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="Ex: Refonte site corporate"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Secteur d'activité
                  </label>
                  <input
                    type="text"
                    value={projectData.sector}
                    onChange={(e) => updateProjectData({ sector: e.target.value })}
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="Ex: Services B2B, E-commerce, SaaS"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Taille entreprise
                  </label>
                  <select
                    value={projectData.companySize}
                    onChange={(e) => updateProjectData({ companySize: e.target.value as any })}
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                  >
                    <option value="startup">Startup (1-10 employés)</option>
                    <option value="pme">PME (11-250 employés)</option>
                    <option value="corporate">Corporate (250+ employés)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Budget estimé (CHF)
                  </label>
                  <input
                    type="text"
                    value={projectData.budget}
                    onChange={(e) => updateProjectData({ budget: e.target.value })}
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="Ex: 5000-15000 CHF"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Deadline souhaitée
                  </label>
                  <input
                    type="date"
                    value={projectData.deadline}
                    onChange={(e) => updateProjectData({ deadline: e.target.value })}
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Étape 3 : Analyse Marketing */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                🎯 Analyse Marketing
              </h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Cible principale (personas)
                  </label>
                  <textarea
                    value={projectData.targetAudience}
                    onChange={(e) => updateProjectData({ targetAudience: e.target.value })}
                    rows={4}
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="Ex: PDG PME Valais, 35-55 ans, secteur services, budget 50K+, cherche croissance digitale..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message clé (UVP - Unique Value Proposition)
                  </label>
                  <textarea
                    value={projectData.keyMessage}
                    onChange={(e) => updateProjectData({ keyMessage: e.target.value })}
                    rows={3}
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="Ex: 'Le seul X qui garantit Y en Z jours ou remboursé'"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Objectif de conversion
                  </label>
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { value: 'lead', label: 'Génération Leads', desc: 'Formulaires, contacts' },
                      { value: 'sale', label: 'Ventes Directes', desc: 'E-commerce, booking' },
                      { value: 'branding', label: 'Notoriété', desc: 'Engagement, partages' }
                    ].map((goal) => (
                      <motion.div
                        key={goal.value}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          projectData.conversionGoal === goal.value
                            ? 'border-yellow-400 bg-yellow-400/10'
                            : 'border-gray-600 hover:border-yellow-400/50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => updateProjectData({ conversionGoal: goal.value as any })}
                      >
                        <div className="font-semibold text-white mb-1">{goal.label}</div>
                        <div className="text-xs text-gray-400">{goal.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Étape 4: Données CSV */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                📊 Données CSV
              </h2>
              <div className="space-y-8">
                <CSVUploader
                  title="Données Concurrents"
                  description="URLs, trafic estimé, mots-clés principaux"
                  onDataLoaded={(data) => updateProjectData({ competitorsData: data })}
                  expectedColumns={['url', 'traffic', 'keywords', 'strengths']}
                />
                <CSVUploader
                  title="Personas Détaillés"
                  description="Âge, secteur, budget, besoins, objections"
                  onDataLoaded={(data) => updateProjectData({ personasData: data })}
                  expectedColumns={['name', 'age', 'sector', 'budget', 'needs', 'objections']}
                />
                <CSVUploader
                  title="Recherche Mots-clés"
                  description="Volume, difficulté, intention, CPC"
                  onDataLoaded={(data) => updateProjectData({ keywordsData: data })}
                  expectedColumns={['keyword', 'volume', 'difficulty', 'intent', 'cpc']}
                />
              </div>
            </div>
          )}

          {/* Étape 5: Références Visuelles */}
          {currentStep === 5 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                🎨 Références Visuelles
              </h2>
              <div className="space-y-8">
                <ImageUploader
                  title="Captures d'écran inspirantes"
                  description="Screenshots de sites, animations, interfaces"
                  onFilesUploaded={(files) => updateProjectData({ screenshots: files })}
                  maxFiles={10}
                />
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Sites inspirants (URLs)
                  </label>
                  <textarea
                    value={projectData.inspiringSites.join('\n')}
                    onChange={(e) => updateProjectData({ inspiringSites: e.target.value.split('\n').filter(url => url.trim()) })}
                    rows={4}
                    className="w-full bg-black/50 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="https://exemple1.com&#10;https://exemple2.com&#10;https://exemple3.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Style visuel souhaité
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { value: 'corporate', label: 'Corporate', desc: 'Professionnel, sobre' },
                      { value: 'modern', label: 'Moderne', desc: 'Tendance, épuré' },
                      { value: 'creative', label: 'Créatif', desc: 'Audacieux, original' },
                      { value: 'minimal', label: 'Minimal', desc: 'Simple, essentiel' }
                    ].map((style) => (
                      <motion.div
                        key={style.value}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          projectData.visualStyle === style.value
                            ? 'border-yellow-400 bg-yellow-400/10'
                            : 'border-gray-600 hover:border-yellow-400/50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => updateProjectData({ visualStyle: style.value as any })}
                      >
                        <div className="font-semibold text-white mb-1">{style.label}</div>
                        <div className="text-xs text-gray-400">{style.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Étape 6: Spécifications Techniques */}
          {currentStep === 6 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                ⚙️ Spécifications Techniques
              </h2>
              <div className="space-y-6">
                {[
                  { key: 'multilingual', label: 'Site multilingue', desc: 'FR/DE/EN/IT' },
                  { key: 'ecommerce', label: 'E-commerce intégré', desc: 'Boutique en ligne' },
                  { key: 'crmIntegration', label: 'Intégration CRM', desc: 'HubSpot, Salesforce' }
                ].map((spec) => (
                  <div key={spec.key} className="flex items-center justify-between p-4 bg-black/30 rounded-lg border border-gray-700">
                    <div>
                      <div className="font-semibold text-white">{spec.label}</div>
                      <div className="text-sm text-gray-400">{spec.desc}</div>
                    </div>
                    <button
                      onClick={() => updateProjectData({ [spec.key]: !projectData[spec.key as keyof ProjectData] })}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        projectData[spec.key as keyof ProjectData] ? 'bg-yellow-400' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          projectData[spec.key as keyof ProjectData] ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Maintenance
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { value: 'client', label: 'Client autonome', desc: 'Formation + documentation' },
                      { value: 'osom', label: 'Maintenance OSOM', desc: 'Forfait mensuel' }
                    ].map((maintenance) => (
                      <motion.div
                        key={maintenance.value}
                        className={`p-4 rounded-lg border cursor-pointer transition-all ${
                          projectData.maintenance === maintenance.value
                            ? 'border-yellow-400 bg-yellow-400/10'
                            : 'border-gray-600 hover:border-yellow-400/50'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        onClick={() => updateProjectData({ maintenance: maintenance.value as any })}
                      >
                        <div className="font-semibold text-white mb-1">{maintenance.label}</div>
                        <div className="text-xs text-gray-400">{maintenance.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Étape 7: Analyse Concurrence */}
          {currentStep === 7 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                🔬 Analyse Concurrentielle Automatique
              </h2>
              <CompetitorAnalysisPanel
                competitorsData={projectData.competitorsData}
                keywordsData={projectData.keywordsData}
                inspiringSites={projectData.inspiringSites}
              />
            </div>
          )}

          {/* Étape 8: Génération Brief */}
          {currentStep === 8 && (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                📋 Génération Brief Technique
              </h2>
              <BriefGenerator 
                projectData={projectData}
                onGenerate={generateBrief}
                isGenerating={isGenerating}
              />
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="px-6 py-3 bg-gray-700 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-600 transition-colors"
        >
          ← Précédent
        </button>
        
        {currentStep < steps.length ? (
          <button
            onClick={nextStep}
            className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
          >
            Suivant →
          </button>
        ) : (
          <button
            onClick={generateBrief}
            disabled={isGenerating}
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-400 transition-colors disabled:opacity-50"
          >
            {isGenerating ? '⏳ Génération...' : '🚀 Générer Brief'}
          </button>
        )}
      </div>
    </div>
  )
}