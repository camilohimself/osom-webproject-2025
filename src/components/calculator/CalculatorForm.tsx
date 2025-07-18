'use client'

import { useState } from 'react'
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

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex items-center ${index < steps.length - 1 ? 'flex-1' : ''}`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  index + 1 <= currentStep
                    ? 'bg-brand-primary text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 mx-2 ${
                    index + 1 < currentStep ? 'bg-brand-primary' : 'bg-gray-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="text-center">
          <h3 className="text-lg font-semibold text-osom-black">
            {steps[currentStep - 1].title}
          </h3>
          <p className="text-brand-dark text-sm">
            {steps[currentStep - 1].description}
          </p>
        </div>
      </div>

      {/* Step Content */}
      <div className="bg-white rounded-lg shadow-brand-lg p-6">
        {currentStep === 1 && (
          <ScrollAnimations animation="fadeIn">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-osom-black mb-2">
                  Taille de votre entreprise
                </label>
                <select
                  value={inputs.companySize}
                  onChange={(e) => handleInputChange('companySize', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="startup">Startup (1-10 employés)</option>
                  <option value="small">Petite entreprise (11-50 employés)</option>
                  <option value="medium">Moyenne entreprise (51-200 employés)</option>
                  <option value="large">Grande entreprise (200+ employés)</option>
                </select>
                {errors.companySize && (
                  <p className="text-brand-accent text-sm mt-1">{errors.companySize}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-osom-black mb-2">
                  Secteur d&apos;activité
                </label>
                <select
                  value={inputs.industry}
                  onChange={(e) => handleInputChange('industry', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-primary"
                >
                  <option value="ecommerce">E-commerce</option>
                  <option value="services">Services</option>
                  <option value="saas">SaaS / Logiciel</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="healthcare">Santé</option>
                  <option value="finance">Finance</option>
                  <option value="other">Autre</option>
                </select>
                {errors.industry && (
                  <p className="text-brand-accent text-sm mt-1">{errors.industry}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-osom-black mb-2">
                  Avez-vous une équipe marketing interne ?
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasInternalTeam"
                      checked={inputs.hasInternalTeam === true}
                      onChange={() => handleInputChange('hasInternalTeam', true)}
                      className="mr-2"
                    />
                    Oui
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasInternalTeam"
                      checked={inputs.hasInternalTeam === false}
                      onChange={() => handleInputChange('hasInternalTeam', false)}
                      className="mr-2"
                    />
                    Non
                  </label>
                </div>
              </div>
            </div>
          </ScrollAnimations>
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

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="px-6"
          >
            Précédent
          </Button>
          
          {currentStep < steps.length ? (
            <Button
              variant="primary"
              onClick={handleNext}
              className="px-6"
            >
              Suivant
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={handleSubmit}
              className="px-6"
            >
              Calculer le ROI
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}