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

const ContactPage = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [showCalendly, setShowCalendly] = useState(false)
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
        { value: 'audit', label: 'Audit de performance', desc: 'Analyser l\'existant', icon: '🔍' }
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
        { value: 'audit-first', label: 'Commencer par un audit', desc: 'Définir le budget après diagnostic', icon: '🔍' }
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
        { value: 'understand', label: 'Comprendre mes performances', desc: 'Audit et diagnostic', icon: '📊' }
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
      subtitle: 'Pour préparer votre consultation personnalisée',
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
    
    // Show Calendly after form submission
    setShowCalendly(true)
  }

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (showCalendly) {
    return (
      <div className="min-h-screen bg-black">
        {/* Header */}
        <header className="border-b border-gray-800">
          <div className="max-w-4xl mx-auto px-4 py-6">
            <div className="flex items-center justify-center">
              <Link href="/" className="flex items-center space-x-3">
                <img src="/logo-white.jpg" alt="OSOM" className="h-8 w-auto" />
              </Link>
            </div>
          </div>
        </header>

        {/* Calendly Section */}
        <main className="max-w-6xl mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-light text-white mb-4">
                Parfait ! Planifions votre <span className="text-yellow-400">consultation</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Réservez votre créneau pour une consultation personnalisée. Nous analyserons vos réponses et préparerons des recommandations spécifiques à votre projet.
              </p>
            </div>

            {/* Project Summary */}
            <div className="mb-8 p-6 bg-gray-900 rounded-xl border border-gray-700 max-w-3xl mx-auto">
              <h3 className="text-white text-lg font-medium mb-4">Résumé de votre projet</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div><span className="text-yellow-400">Projet :</span> {questions[0].options.find(o => o.value === formData.projectType)?.label}</div>
                <div><span className="text-yellow-400">Timeline :</span> {questions[1].options.find(o => o.value === formData.timeline)?.label}</div>
                <div><span className="text-yellow-400">Budget :</span> {questions[2].options.find(o => o.value === formData.budget)?.label}</div>
                <div><span className="text-yellow-400">Objectif :</span> {questions[4].options.find(o => o.value === formData.mainGoal)?.label}</div>
              </div>
            </div>

            {/* Calendly Widget */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
              <iframe 
                src="https://calendly.com/osomcreativemarketing"
                width="100%" 
                height="700"
                frameBorder="0"
                title="Planifier une consultation OSOM"
              />
            </div>

            {/* Benefits */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black text-2xl">🎯</span>
                </div>
                <h3 className="text-white font-medium mb-2">Analyse Personnalisée</h3>
                <p className="text-gray-400 text-sm">Diagnostic sur mesure de votre situation actuelle</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black text-2xl">📊</span>
                </div>
                <h3 className="text-white font-medium mb-2">Recommandations Concrètes</h3>
                <p className="text-gray-400 text-sm">Plan d'action basé sur vos objectifs spécifiques</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-black text-2xl">🚀</span>
                </div>
                <h3 className="text-white font-medium mb-2">Devis Détaillé</h3>
                <p className="text-gray-400 text-sm">Proposition adaptée à votre budget et timeline</p>
              </div>
            </div>

            {/* Contact Alternative */}
            <div className="mt-12 text-center">
              <p className="text-gray-400 mb-4">Préférez-vous nous contacter directement ?</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:contact@osom.ch" 
                  className="px-6 py-3 border border-gray-600 text-white rounded-lg hover:border-yellow-400 transition-colors"
                >
                  📧 contact@osom.ch
                </a>
                <a 
                  href="tel:+41799999999" 
                  className="px-6 py-3 border border-gray-600 text-white rounded-lg hover:border-yellow-400 transition-colors"
                >
                  📞 +41 79 999 99 99
                </a>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    )
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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Transformons votre <span className="text-yellow-400">présence digitale</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Quelques questions pour comprendre vos besoins et vous proposer la solution la plus adaptée à votre entreprise.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
            
            {/* Bloc 1 - Diagnostic Gratuit */}
            <div className="group relative overflow-hidden">
              {/* Background avec dégradé */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 via-yellow-400/10 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-black/40 backdrop-blur-lg rounded-2xl border border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-500"></div>
              
              {/* Contenu */}
              <div className="relative z-10 p-8 text-center h-full flex flex-col justify-between min-h-[280px]">
                {/* Icon premium */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <span className="text-black text-3xl font-bold">🎯</span>
                  </div>
                  <div className="text-yellow-400 font-mono text-xs tracking-wider uppercase">GRATUIT</div>
                </div>
                
                {/* Titre principal */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                    Diagnostic
                    <br />
                    <span className="text-yellow-400">Complet</span>
                  </h3>
                </div>
                
                {/* Description */}
                <div className="text-gray-300 leading-relaxed">
                  <p className="text-base mb-3">Analyse approfondie de votre</p>
                  <p className="text-sm text-yellow-400 font-medium">situation digitale actuelle</p>
                </div>
              </div>
            </div>
            
            {/* Bloc 2 - Recommandations */}
            <div className="group relative overflow-hidden">
              {/* Background avec dégradé violet */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-black/40 backdrop-blur-lg rounded-2xl border border-purple-500/30 group-hover:border-purple-500/60 transition-all duration-500"></div>
              
              {/* Contenu */}
              <div className="relative z-10 p-8 text-center h-full flex flex-col justify-between min-h-[280px]">
                {/* Icon premium */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <span className="text-white text-3xl font-bold">📊</span>
                  </div>
                  <div className="text-purple-400 font-mono text-xs tracking-wider uppercase">PERSONNALISÉ</div>
                </div>
                
                {/* Titre principal */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                    Plan d'Action
                    <br />
                    <span className="text-purple-400">Sur Mesure</span>
                  </h3>
                </div>
                
                {/* Description */}
                <div className="text-gray-300 leading-relaxed">
                  <p className="text-base mb-3">Stratégie adaptée à vos</p>
                  <p className="text-sm text-purple-400 font-medium">objectifs & budget spécifique</p>
                </div>
              </div>
            </div>
            
            {/* Bloc 3 - Consultation Rapide */}
            <div className="group relative overflow-hidden">
              {/* Background avec dégradé cyan */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 via-cyan-400/10 to-transparent rounded-2xl"></div>
              <div className="absolute inset-0 bg-black/40 backdrop-blur-lg rounded-2xl border border-cyan-400/30 group-hover:border-cyan-400/60 transition-all duration-500"></div>
              
              {/* Contenu */}
              <div className="relative z-10 p-8 text-center h-full flex flex-col justify-between min-h-[280px]">
                {/* Icon premium */}
                <div className="mb-6">
                  <div className="w-20 h-20 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <span className="text-black text-3xl font-bold">⚡</span>
                  </div>
                  <div className="text-cyan-400 font-mono text-xs tracking-wider uppercase">RAPIDE</div>
                </div>
                
                {/* Titre principal */}
                <div className="mb-4">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                    Consultation
                    <br />
                    <span className="text-cyan-400">Express</span>
                  </h3>
                </div>
                
                {/* Description */}
                <div className="text-gray-300 leading-relaxed">
                  <p className="text-base mb-3">Rendez-vous programmé</p>
                  <p className="text-sm text-cyan-400 font-medium">sous 48h maximum</p>
                </div>
              </div>
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
              <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
                {currentQuestion.title}
              </h2>
              <p className="text-lg text-gray-300">
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

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-4 px-8 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors"
                >
                  Planifier ma consultation gratuite →
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

export default ContactPage