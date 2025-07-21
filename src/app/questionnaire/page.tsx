'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface FormData {
  projectType: string
  timeline: string
  budget: string
  currentSituation: string
  mainGoal: string
  targetAudience: string
  contactInfo: {
    name: string
    email: string
    phone: string
    company: string
  }
}

const QuestionnairePage = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    timeline: '',
    budget: '',
    currentSituation: '',
    mainGoal: '',
    targetAudience: '',
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      company: ''
    }
  })

  const questions = [
    {
      id: 'projectType',
      title: 'Quel est votre projet ?',
      subtitle: 'Sélectionnez le type de projet qui vous intéresse',
      type: 'choice',
      options: [
        { value: 'new-website', label: 'Nouveau site web', desc: 'Création complète d\'un nouveau site', icon: '🌐' },
        { value: 'redesign', label: 'Refonte de site existant', desc: 'Améliorer un site actuel', icon: '🔄' },
        { value: 'seo-only', label: 'SEO & Référencement uniquement', desc: 'Optimiser la visibilité Google', icon: '🚀' },
        { value: 'marketing', label: 'Marketing Digital', desc: 'Stratégie Facebook/Instagram', icon: '📈' },
        { value: 'complete', label: 'Solution complète', desc: 'Site + SEO + Marketing', icon: '⭐' },
        { value: 'not-sure', label: 'Je ne sais pas encore', desc: 'Besoin de conseils', icon: '💡' }
      ]
    },
    {
      id: 'timeline',
      title: 'Quand souhaitez-vous commencer ?',
      subtitle: 'Choisissez votre urgence pour adapter notre approche',
      type: 'choice',
      options: [
        { value: 'asap', label: 'Le plus vite possible', desc: 'Démarrage immédiat', icon: '⚡' },
        { value: '2-weeks', label: 'Dans 2 semaines', desc: 'Planning optimal', icon: '📅' },
        { value: '1-month', label: 'D\'ici 1 mois', desc: 'Préparation soignée', icon: '🎯' },
        { value: '3-months', label: 'Dans 2-3 mois', desc: 'Planification stratégique', icon: '📋' },
        { value: 'flexible', label: 'Je suis flexible', desc: 'Quand c\'est optimal', icon: '🤝' }
      ]
    },
    {
      id: 'budget',
      title: 'Quel est votre budget envisagé ?',
      subtitle: 'Pour vous proposer la solution la plus adaptée',
      type: 'choice',
      options: [
        { value: '1500-3000', label: '1 500 - 3 000 CHF', desc: 'OSOM Web Formula', icon: '🎯' },
        { value: '3000-5000', label: '3 000 - 5 000 CHF', desc: 'Site premium + SEO', icon: '🚀' },
        { value: '5000-10000', label: '5 000 - 10 000 CHF', desc: 'Solution complète', icon: '⭐' },
        { value: '10000+', label: '10 000+ CHF', desc: 'Projet sur mesure', icon: '💎' },
        { value: 'not-defined', label: 'Budget à définir', desc: 'Conseils personnalisés', icon: '💡' }
      ]
    },
    {
      id: 'currentSituation',
      title: 'Quelle est votre situation actuelle ?',
      subtitle: 'Pour comprendre vos besoins spécifiques',
      type: 'choice',
      options: [
        { value: 'no-website', label: 'Pas de site web', desc: 'Création from scratch', icon: '🆕' },
        { value: 'old-website', label: 'Site web obsolète', desc: 'Besoin de modernisation', icon: '🔧' },
        { value: 'low-traffic', label: 'Site actuel, peu de trafic', desc: 'Optimisation SEO', icon: '📊' },
        { value: 'no-conversions', label: 'Du trafic mais pas de ventes', desc: 'Optimisation conversion', icon: '🎯' },
        { value: 'manual-work', label: 'Tout en manuel actuellement', desc: 'Automatisation nécessaire', icon: '⚙️' },
        { value: 'competitor-behind', label: 'En retard sur la concurrence', desc: 'Rattrapage stratégique', icon: '🏃' }
      ]
    },
    {
      id: 'mainGoal',
      title: 'Quel est votre objectif principal ?',
      subtitle: 'Pour mesurer le succès de votre projet',
      type: 'choice',
      options: [
        { value: 'increase-sales', label: 'Augmenter les ventes', desc: 'ROI et conversions', icon: '💰' },
        { value: 'get-leads', label: 'Générer des prospects', desc: 'Contacts qualifiés', icon: '🎯' },
        { value: 'brand-awareness', label: 'Notoriété de marque', desc: 'Visibilité et reconnaissance', icon: '🌟' },
        { value: 'save-time', label: 'Automatiser et gagner du temps', desc: 'Efficacité opérationnelle', icon: '⏰' },
        { value: 'compete', label: 'Rattraper la concurrence', desc: 'Avantage compétitif', icon: '🏆' },
        { value: 'all-above', label: 'Tous ces objectifs', desc: 'Transformation globale', icon: '🚀' }
      ]
    },
    {
      id: 'targetAudience',
      title: 'Qui est votre clientèle cible ?',
      subtitle: 'Pour adapter notre stratégie marketing',
      type: 'choice',
      options: [
        { value: 'b2b-local', label: 'Entreprises locales (Valais)', desc: 'B2B proximité', icon: '🏢' },
        { value: 'b2b-national', label: 'Entreprises Suisse', desc: 'B2B national', icon: '🇨🇭' },
        { value: 'b2c-local', label: 'Particuliers locaux', desc: 'B2C proximité', icon: '👥' },
        { value: 'b2c-national', label: 'Particuliers Suisse', desc: 'B2C national', icon: '🌍' },
        { value: 'seniors', label: 'Clientèle 50+ ans', desc: 'Audience senior', icon: '👴' },
        { value: 'mixed', label: 'Clientèle mixte', desc: 'B2B + B2C', icon: '🎭' }
      ]
    },
    {
      id: 'contact',
      title: 'Vos coordonnées',
      subtitle: 'Pour vous envoyer votre devis personnalisé sous 24h',
      type: 'form',
      options: []
    }
  ]

  const currentQuestion = questions[currentStep]
  const progress = ((currentStep + 1) / questions.length) * 100

  const handleChoice = (value: string) => {
    setFormData(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }))
    
    // Auto-advance after selection
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1)
      }
    }, 500)
  }

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData)
    
    // Show success message or redirect
    alert('Merci ! Votre demande a été envoyée. Nous vous contactons sous 24h avec votre devis personnalisé.')
  }

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/logo-white.jpg" alt="OSOM" className="h-8 w-auto" />
            </Link>
            <div className="text-gray-400 text-sm">
              Étape {currentStep + 1} sur {questions.length}
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4 w-full bg-gray-800 rounded-full h-2">
            <motion.div 
              className="bg-yellow-400 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </header>

      {/* Hero Section SEO - Valeur du Questionnaire */}
      <section className="py-20 bg-black relative overflow-hidden">
        {/* Background Pattern Linear */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-purple-400 mr-3"></div>
              <span className="text-purple-400 text-sm font-medium tracking-wide">QUESTIONNAIRE STRATÉGIQUE</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Diagnostic <span className="text-purple-400 font-bold">gratuit</span><br />
              de votre potentiel digital
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              7 questions stratégiques pour identifier vos <span className="text-purple-400 font-semibold">opportunités de croissance</span> et 
              recevoir un plan d'action personnalisé basé sur vos réponses.
            </p>
          </div>

          {/* Bénéfices du Questionnaire */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-white/5 to-black/40 text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-lg">🎯</span>
              </div>
              <h3 className="text-lg font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Diagnostic Personnalisé
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Analyse précise de votre situation actuelle et identificaction des axes d'amélioration prioritaires
              </p>
            </div>

            <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-white/5 to-black/40 text-center">
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-lg">📊</span>
              </div>
              <h3 className="text-lg font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Stratégie Sur Mesure
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Recommandations adaptées à votre secteur, budget et objectifs de croissance
              </p>
            </div>

            <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-white/5 to-black/40 text-center">
              <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold text-lg">⚡</span>
              </div>
              <h3 className="text-lg font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Actions Concrètes
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Plan d'action détaillé avec étapes prioritaires pour maximiser votre ROI digital
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="backdrop-blur-sm border border-purple-400/30 rounded-2xl p-6 bg-gradient-to-br from-purple-400/10 to-black/60 inline-block">
              <p className="text-purple-400 text-sm font-medium mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                ⏱️ Temps estimé : 3-5 minutes
              </p>
              <p className="text-gray-300 text-sm" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Réponses 100% confidentielles • Analyse gratuite • Sans engagement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
                {currentQuestion.title}
              </h1>
              <p className="text-xl text-gray-300">
                {currentQuestion.subtitle}
              </p>
            </div>

            {currentQuestion.type === 'choice' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={option.value}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleChoice(option.value)}
                    className={`p-6 rounded-xl border-2 transition-all duration-300 text-left hover:scale-105 ${
                      formData[currentQuestion.id as keyof FormData] === option.value
                        ? 'border-yellow-400 bg-yellow-400/10' 
                        : 'border-gray-700 bg-gray-900/50 hover:border-yellow-400/50'
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{option.icon}</div>
                      <div className="flex-1">
                        <div className="text-xl font-medium text-white mb-2">
                          {option.label}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {option.desc}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            )}

            {currentQuestion.type === 'form' && (
              <form onSubmit={handleContactSubmit} className="max-w-2xl mx-auto space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Prénom et nom *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactInfo.name}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        contactInfo: { ...prev.contactInfo, name: e.target.value }
                      }))}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      placeholder="Jean Dupont"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      value={formData.contactInfo.company}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        contactInfo: { ...prev.contactInfo, company: e.target.value }
                      }))}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      placeholder="Mon Entreprise SA"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.contactInfo.email}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      contactInfo: { ...prev.contactInfo, email: e.target.value }
                    }))}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="jean@monentreprise.ch"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.contactInfo.phone}
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      contactInfo: { ...prev.contactInfo, phone: e.target.value }
                    }))}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                    placeholder="+41 79 123 45 67"
                  />
                </div>

                {/* Summary */}
                <div className="mt-8 p-6 bg-gray-900 rounded-xl border border-gray-700">
                  <h3 className="text-white text-lg font-medium mb-4">Résumé de votre projet</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div><span className="text-yellow-400">Projet :</span> {questions[0].options.find(o => o.value === formData.projectType)?.label}</div>
                    <div><span className="text-yellow-400">Timeline :</span> {questions[1].options.find(o => o.value === formData.timeline)?.label}</div>
                    <div><span className="text-yellow-400">Budget :</span> {questions[2].options.find(o => o.value === formData.budget)?.label}</div>
                    <div><span className="text-yellow-400">Objectif :</span> {questions[4].options.find(o => o.value === formData.mainGoal)?.label}</div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-4 px-8 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors"
                >
                  Envoyer ma demande → Devis sous 24h
                </button>
              </form>
            )}

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">
              <button
                onClick={goBack}
                disabled={currentStep === 0}
                className="px-6 py-3 text-gray-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                ← Précédent
              </button>
              
              {currentQuestion.type === 'choice' && formData[currentQuestion.id as keyof FormData] && (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition-colors"
                >
                  Suivant →
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default QuestionnairePage