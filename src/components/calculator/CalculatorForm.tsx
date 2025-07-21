'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui'
import { ScrollAnimations } from '@/components/animations'
import type { CalculatorInputs, CalculatorResults } from '@/types/calculator'

interface CalculatorFormProps {
  onResults: (results: CalculatorResults) => void
  onLoading: (loading: boolean) => void
}

export default function CalculatorForm({ onResults, onLoading }: CalculatorFormProps) {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    companySize: 'small',
    industry: 'services',
    currentWebsite: 'basic',
    monthlyBudget: 3000,
    primaryGoal: 'leads',
    timeline: '12months',
    hasInternalTeam: false,
    currentMonthlyVisitors: 500,
    currentConversionRate: 2.5,
    averageOrderValue: 1200
  })

  const [currentStep, setCurrentStep] = useState(1)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const steps = [
    {
      title: 'Votre Entreprise',
      description: 'Parlez-nous de votre entreprise'
    },
    {
      title: 'Situation Actuelle',
      description: 'Votre présence web actuelle'
    },
    {
      title: 'Objectifs & Budget',
      description: 'Vos objectifs et investissement'
    },
    {
      title: 'Données Métier',
      description: 'Vos performances actuelles'
    }
  ]

  const handleInputChange = (field: keyof CalculatorInputs, value: any) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }))
    
    // Clear error for this field
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }))
    }
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!inputs.companySize) newErrors.companySize = 'Veuillez sélectionner une taille d&apos;entreprise'
        if (!inputs.industry) newErrors.industry = 'Veuillez sélectionner un secteur'
        break
      case 2:
        if (!inputs.currentWebsite) newErrors.currentWebsite = 'Veuillez sélectionner le type de site actuel'
        break
      case 3:
        if (inputs.monthlyBudget < 500) newErrors.monthlyBudget = 'Le budget minimum est de 500 CHF'
        if (!inputs.primaryGoal) newErrors.primaryGoal = 'Veuillez sélectionner un objectif principal'
        if (!inputs.timeline) newErrors.timeline = 'Veuillez sélectionner une période'
        break
      case 4:
        if (inputs.currentMonthlyVisitors < 0) newErrors.currentMonthlyVisitors = 'Le nombre de visiteurs doit être positif'
        if (inputs.currentConversionRate < 0 || inputs.currentConversionRate > 100) {
          newErrors.currentConversionRate = 'Le taux de conversion doit être entre 0 et 100%'
        }
        if (inputs.averageOrderValue < 0) newErrors.averageOrderValue = 'La valeur moyenne doit être positive'
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length))
    }
  }

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return

    onLoading(true)

    try {
      const response = await fetch('/api/calculator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputs)
      })

      if (!response.ok) {
        throw new Error('Erreur lors du calcul')
      }

      const data = await response.json()
      onResults(data.data)
    } catch (error) {
      console.error('Calculator error:', error)
      setErrors({ general: 'Une erreur est survenue lors du calcul' })
    } finally {
      onLoading(false)
    }
  }

  // Premium animation variants matching homepage
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const stepVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 }
  }

  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Premium Progress Bar */}
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-between items-center mb-8 relative">
          {/* Connection line */}
          <div className="absolute top-4 left-8 right-8 h-px bg-gradient-to-r from-yellow-400/30 via-green-400/30 via-cyan-400/30 to-purple-400/30" />
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center relative z-10"
              whileHover={{ scale: index + 1 <= currentStep ? 1.1 : 1 }}
            >
              <motion.div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                  index + 1 <= currentStep
                    ? 'bg-yellow-400 border-yellow-400 text-black shadow-lg shadow-yellow-400/30'
                    : index + 1 === currentStep + 1 
                    ? 'bg-yellow-400/20 border-yellow-400/60 text-yellow-400'
                    : 'bg-white/10 border-white/30 text-gray-400'
                }`}
                animate={{
                  scale: index + 1 === currentStep ? [1, 1.1, 1] : 1,
                  boxShadow: index + 1 === currentStep ? [
                    '0 0 0px rgba(255, 221, 0, 0)',
                    '0 0 20px rgba(255, 221, 0, 0.4)',
                    '0 0 0px rgba(255, 221, 0, 0)'
                  ] : 'none'
                }}
                transition={{ duration: 2, repeat: index + 1 === currentStep ? Infinity : 0 }}
              >
                {index + 1 < currentStep ? (
                  <motion.svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </motion.svg>
                ) : (
                  <span style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>{index + 1}</span>
                )}
              </motion.div>
              
              <motion.div 
                className="text-center mt-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: index + 1 <= currentStep + 1 ? 1 : 0.5 }}
                transition={{ delay: 0.2 }}
              >
                <p className={`text-sm font-medium ${
                  index + 1 === currentStep ? 'text-yellow-400' : 
                  index + 1 < currentStep ? 'text-green-400' : 'text-gray-400'
                }`} style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {step.title}
                </p>
                <p className="text-xs text-gray-400 mt-1" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Premium Step Content */}
      <motion.div 
        className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl border border-white/20 p-8 relative overflow-hidden"
        layout
      >
        {/* Background accent based on step */}
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full opacity-10 blur-3xl"
          style={{ 
            backgroundColor: currentStep === 1 ? '#FFDD00' : 
                           currentStep === 2 ? '#10B981' : 
                           currentStep === 3 ? '#06B6D4' : '#8B5CF6' 
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <AnimatePresence mode="wait">
        {currentStep === 1 && (
          <motion.div
            key="step1"
            variants={stepVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="space-y-8 relative z-10"
          >
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-center mb-4">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-yellow-400 mr-3"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-yellow-400 text-sm font-medium tracking-wide" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  ÉTAPE 1/4 • VOTRE ENTREPRISE
                </span>
              </div>
              <h3 className="text-2xl font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Parlez-nous de <span className="text-yellow-400 font-bold">votre entreprise</span>
              </h3>
              <p className="text-gray-300" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Ces informations nous aident à personnaliser vos projections ROI
              </p>
            </motion.div>

            {/* Premium Form Fields */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label className="block text-sm font-medium text-white mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  🏢 Taille de votre entreprise
                </label>
                <motion.select
                  value={inputs.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 backdrop-blur-sm"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="startup" className="bg-gray-900 text-white">Startup (1-10 employés)</option>
                  <option value="small" className="bg-gray-900 text-white">Petite entreprise (11-50 employés)</option>
                  <option value="medium" className="bg-gray-900 text-white">Moyenne entreprise (51-200 employés)</option>
                  <option value="large" className="bg-gray-900 text-white">Grande entreprise (200+ employés)</option>
                </motion.select>
                {errors.companySize && (
                  <motion.p 
                    className="text-red-400 text-sm mt-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    ⚠️ {errors.companySize}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label className="block text-sm font-medium text-white mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  🎯 Secteur d&apos;activité
                </label>
                <motion.select
                  value={inputs.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all duration-300 backdrop-blur-sm"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="ecommerce" className="bg-gray-900 text-white">E-commerce</option>
                  <option value="services" className="bg-gray-900 text-white">Services</option>
                  <option value="saas" className="bg-gray-900 text-white">SaaS / Logiciel</option>
                  <option value="manufacturing" className="bg-gray-900 text-white">Manufacturing</option>
                  <option value="healthcare" className="bg-gray-900 text-white">Santé</option>
                  <option value="finance" className="bg-gray-900 text-white">Finance</option>
                  <option value="other" className="bg-gray-900 text-white">Autre</option>
                </motion.select>
                {errors.industry && (
                  <motion.p 
                    className="text-red-400 text-sm mt-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    ⚠️ {errors.industry}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-sm font-medium text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  👥 Avez-vous une équipe marketing interne ?
                </label>
                <div className="flex gap-4">
                  {[{value: true, label: 'Oui', icon: '✅'}, {value: false, label: 'Non', icon: '❌'}].map((option) => (
                    <motion.label 
                      key={option.label}
                      className={`flex-1 flex items-center justify-center p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                        inputs.hasInternalTeam === option.value
                          ? 'border-yellow-400 bg-yellow-400/10 text-yellow-400'
                          : 'border-white/20 bg-white/5 text-white hover:border-white/40'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <input
                        type="radio"
                        name="hasInternalTeam"
                        checked={inputs.hasInternalTeam === option.value}
                        onChange={() => handleInputChange('hasInternalTeam', option.value)}
                        className="sr-only"
                      />
                      <span className="text-lg mr-3">{option.icon}</span>
                      <span className="font-medium" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>{option.label}</span>
                    </motion.label>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}

        {currentStep === 2 && (
          <ScrollAnimations animation="fadeIn">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-osom-black mb-2">
                  Type de site web actuel
                </label>
                <select
                  value={inputs.currentWebsite}
                  onChange={(e) => handleInputChange('currentWebsite', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="none">Aucun site web</option>
                  <option value="basic">Site basique (vitrine simple)</option>
                  <option value="professional">Site professionnel (optimisé)</option>
                  <option value="advanced">Site avancé (e-commerce, CRM)</option>
                </select>
                {errors.currentWebsite && (
                  <p className="text-brand-accent text-sm mt-1">{errors.currentWebsite}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-osom-black mb-2">
                  Visiteurs mensuels actuels
                </label>
                <input
                  type="number"
                  value={inputs.currentMonthlyVisitors}
                  onChange={(e) => handleInputChange('currentMonthlyVisitors', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  placeholder="Ex: 500"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Si vous n&apos;avez pas de site, indiquez 0
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-osom-black mb-2">
                  Taux de conversion actuel (%)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={inputs.currentConversionRate}
                  onChange={(e) => handleInputChange('currentConversionRate', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  placeholder="Ex: 2.5"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Pourcentage de visiteurs qui deviennent clients
                </p>
                {errors.currentConversionRate && (
                  <p className="text-brand-accent text-sm mt-1">{errors.currentConversionRate}</p>
                )}
              </div>
            </div>
          </ScrollAnimations>
        )}

        {currentStep === 3 && (
          <ScrollAnimations animation="fadeIn">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-osom-black mb-2">
                  Budget marketing mensuel (CHF)
                </label>
                <input
                  type="number"
                  value={inputs.monthlyBudget}
                  onChange={(e) => handleInputChange('monthlyBudget', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  placeholder="Ex: 3000"
                />
                {errors.monthlyBudget && (
                  <p className="text-brand-accent text-sm mt-1">{errors.monthlyBudget}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-osom-black mb-2">
                  Objectif principal
                </label>
                <select
                  value={inputs.primaryGoal}
                  onChange={(e) => handleInputChange('primaryGoal', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="traffic">Augmenter le trafic</option>
                  <option value="leads">Générer des leads</option>
                  <option value="sales">Augmenter les ventes</option>
                  <option value="brand">Renforcer la marque</option>
                  <option value="engagement">Améliorer l'engagement</option>
                </select>
                {errors.primaryGoal && (
                  <p className="text-brand-accent text-sm mt-1">{errors.primaryGoal}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-osom-black mb-2">
                  Période d'évaluation
                </label>
                <select
                  value={inputs.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="3months">3 mois</option>
                  <option value="6months">6 mois</option>
                  <option value="12months">12 mois</option>
                  <option value="24months">24 mois</option>
                </select>
                {errors.timeline && (
                  <p className="text-brand-accent text-sm mt-1">{errors.timeline}</p>
                )}
              </div>
            </div>
          </ScrollAnimations>
        )}

        {currentStep === 4 && (
          <ScrollAnimations animation="fadeIn">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-osom-black mb-2">
                  Valeur moyenne d&apos;une commande/contrat (CHF)
                </label>
                <input
                  type="number"
                  value={inputs.averageOrderValue}
                  onChange={(e) => handleInputChange('averageOrderValue', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  placeholder="Ex: 1200"
                />
                <p className="text-sm text-gray-500 mt-1">
                  Montant moyen généré par client
                </p>
                {errors.averageOrderValue && (
                  <p className="text-brand-accent text-sm mt-1">{errors.averageOrderValue}</p>
                )}
              </div>

              <div className="bg-brand-light/20 p-4 rounded-lg">
                <h4 className="font-semibold text-osom-black mb-2">Récapitulatif</h4>
                <div className="space-y-1 text-sm">
                  <p><strong>Entreprise:</strong> {inputs.companySize} - {inputs.industry}</p>
                  <p><strong>Site actuel:</strong> {inputs.currentWebsite}</p>
                  <p><strong>Budget:</strong> {inputs.monthlyBudget} CHF/mois</p>
                  <p><strong>Objectif:</strong> {inputs.primaryGoal}</p>
                  <p><strong>Période:</strong> {inputs.timeline}</p>
                </div>
              </div>

              {errors.general && (
                <p className="text-brand-accent text-sm">{errors.general}</p>
              )}
            </div>
          </ScrollAnimations>
        )}

        </AnimatePresence>
        
        {/* Premium Navigation */}
        <motion.div 
          className="flex justify-between items-center mt-12 pt-8 border-t border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 ${
              currentStep === 1 
                ? 'text-gray-500 cursor-not-allowed opacity-50' 
                : 'text-white border-2 border-white/30 hover:border-white/60 hover:bg-white/10'
            }`}
            style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            whileHover={currentStep === 1 ? {} : { scale: 1.05 }}
            whileTap={currentStep === 1 ? {} : { scale: 0.95 }}
          >
            ← Précédent
          </motion.button>
          
          {currentStep < steps.length ? (
            <motion.button
              onClick={handleNext}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255, 221, 0, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Suivant →
            </motion.button>
          ) : (
            <motion.button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-green-400 to-green-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(16, 185, 129, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              🚀 Calculer le ROI
            </motion.button>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}