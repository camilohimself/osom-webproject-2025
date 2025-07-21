'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import InteractiveBenefitCards from '@/components/contact/InteractiveBenefitCards'

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
  const [isConsultationScheduled, setIsConsultationScheduled] = useState(false)
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

            {/* Animation de Succès */}
            <div className="mt-16 relative">
              {/* Container principal avec effet glow */}
              <div className="relative max-w-5xl mx-auto">
                
                {/* Background avec dégradé animé */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-purple-500/20 to-cyan-400/20 rounded-3xl blur-xl animate-pulse"></div>
                
                {/* Contenu principal */}
                <div className="relative bg-black/60 backdrop-blur-xl rounded-3xl border border-yellow-400/40 p-12 overflow-hidden">
                  
                  {/* Particles flottantes */}
                  <div className="absolute top-4 left-4 w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="absolute top-8 right-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce delay-300"></div>
                  <div className="absolute bottom-6 left-12 w-1 h-1 bg-cyan-400 rounded-full animate-bounce delay-700"></div>
                  <div className="absolute bottom-4 right-4 w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>
                  
                  {/* Message central avec animation */}
                  <div className="text-center">
                    
                    {/* Icon principal avec scaling */}
                    <div className="mb-8 relative">
                      <div className="w-32 h-32 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl animate-pulse">
                        <span className="text-black text-6xl animate-bounce">🎯</span>
                      </div>
                      
                      {/* Cercles concentriques animés */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-40 h-40 border-2 border-yellow-400/30 rounded-full animate-ping"></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 border border-yellow-400/20 rounded-full animate-ping delay-500"></div>
                      </div>
                    </div>
                    
                    {/* Titre principal animé */}
                    <div className="mb-8">
                      <h2 className="text-5xl md:text-6xl font-light text-white mb-4 animate-fade-in">
                        Vous y êtes <span className="text-yellow-400">presque</span> !
                      </h2>
                      <p className="text-2xl text-gray-300 font-light animate-fade-in delay-300">
                        Une consultation vous sépare de la <span className="text-purple-400">transformation</span> de votre business
                      </p>
                    </div>
                    
                    {/* Progress steps avec animations */}
                    <div id="progress-section" className="flex items-center justify-center mb-12 max-w-3xl mx-auto">
                      
                      {/* Step 1 - Complété */}
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                          <span className="text-white text-xl">✓</span>
                        </div>
                        <div className="ml-4 text-left">
                          <div className="text-green-400 font-semibold">Questionnaire</div>
                          <div className="text-gray-400 text-sm">Complété</div>
                        </div>
                      </div>
                      
                      {/* Connexion animée */}
                      <div className="flex-1 mx-8">
                        <motion.div 
                          className={`h-1 rounded-full ${
                            isConsultationScheduled 
                              ? 'bg-gradient-to-r from-green-500 to-green-400' 
                              : 'bg-gradient-to-r from-green-500 to-yellow-400'
                          }`}
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                        />
                      </div>
                      
                      {/* Step 2 - Consultation */}
                      <div className="flex items-center">
                        <motion.div 
                          className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                            isConsultationScheduled 
                              ? 'bg-green-500 animate-bounce' 
                              : 'bg-yellow-400 animate-pulse'
                          }`}
                          animate={isConsultationScheduled ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 0.5 }}
                        >
                          <span className={`text-xl ${
                            isConsultationScheduled ? 'text-white' : 'text-black'
                          }`}>
                            {isConsultationScheduled ? '✓' : '📅'}
                          </span>
                        </motion.div>
                        <div className="ml-4 text-left">
                          <div className={`font-semibold ${
                            isConsultationScheduled ? 'text-green-400' : 'text-yellow-400'
                          }`}>
                            Consultation
                          </div>
                          <div className="text-gray-300 text-sm">
                            {isConsultationScheduled ? 'Planifiée !' : 'En cours...'}
                          </div>
                        </div>
                      </div>
                      
                      {/* Connexion future */}
                      <div className="flex-1 mx-8">
                        <motion.div 
                          className={`h-1 rounded-full ${
                            isConsultationScheduled 
                              ? 'bg-gradient-to-r from-green-400 to-purple-500' 
                              : 'bg-gray-600'
                          }`}
                          initial={{ width: '0%' }}
                          animate={{ width: isConsultationScheduled ? '100%' : '0%' }}
                          transition={{ delay: isConsultationScheduled ? 1 : 0, duration: 2 }}
                        />
                      </div>
                      
                      {/* Step 3 - Transformation */}
                      <div className="flex items-center">
                        <motion.div 
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            isConsultationScheduled 
                              ? 'bg-purple-500 animate-pulse' 
                              : 'bg-gray-600'
                          }`}
                          animate={isConsultationScheduled ? { scale: [1, 1.1, 1] } : {}}
                          transition={{ delay: 2, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                        >
                          <span className="text-white text-xl">🚀</span>
                        </motion.div>
                        <div className="ml-4 text-left">
                          <div className={`font-semibold ${
                            isConsultationScheduled ? 'text-purple-400' : 'text-gray-500'
                          }`}>
                            Transformation
                          </div>
                          <div className="text-gray-400 text-sm">
                            {isConsultationScheduled ? 'Préparée...' : 'Bientôt...'}
                          </div>
                        </div>
                      </div>
                      
                    </div>
                    
                    {/* Message motivant */}
                    <div className={`rounded-xl p-6 border transition-all duration-1000 ${
                      isConsultationScheduled 
                        ? 'bg-gradient-to-r from-green-400/20 to-purple-500/20 border-green-400/50' 
                        : 'bg-gradient-to-r from-yellow-400/10 to-purple-500/10 border-yellow-400/30'
                    }`}>
                      {isConsultationScheduled ? (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.8 }}
                        >
                          <p className="text-white text-lg mb-2">
                            <span className="text-green-400 font-bold">🎉 Parfait !</span> Votre consultation est planifiée !
                          </p>
                          <p className="text-gray-300">
                            Nous préparons déjà votre analyse personnalisée pour découvrir comment multiplier votre ROI par <span className="text-green-400 font-bold">140x</span>
                          </p>
                        </motion.div>
                      ) : (
                        <div>
                          <p className="text-white text-lg mb-2">
                            <span className="text-yellow-400 font-bold">Félicitations !</span> Vous avez franchi la première étape.
                          </p>
                          <p className="text-gray-300">
                            Planifiez maintenant votre consultation pour découvrir comment multiplier votre ROI par <span className="text-yellow-400 font-bold">140x</span>
                          </p>
                        </div>
                      )}
                    </div>
                    
                  </div>
                </div>
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
          
          <InteractiveBenefitCards 
            onCalendlyEvent={(eventName, eventData) => {
              if (eventName === 'event_scheduled') {
                console.log('RDV planifié détecté!', eventData)
                setIsConsultationScheduled(true)
                // Optionnel : faire défiler vers la barre de progression
                setTimeout(() => {
                  const progressSection = document.getElementById('progress-section')
                  if (progressSection) {
                    progressSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }, 1000)
              }
            }}
          />
        </div>
      </section>

      {/* Certifications & Expertise Section - SEO Boost */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
              <span className="text-green-400 text-sm font-medium tracking-wide">EXPERTISE CERTIFIÉE</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Expert <span className="text-green-400 font-bold">certifié</span> marketing digital
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Formations officielles reconnues + expertise terrain sur 200+ projets réalisés.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Brevet Fédéral Marketing */}
            <div className="backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-green-400/30 transition-all duration-500 bg-gradient-to-br from-white/5 to-black/40 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <span className="text-green-400 font-bold text-lg">🏆</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Brevet Fédéral Marketing
                  </h3>
                  <div className="w-12 h-1 rounded-full bg-green-400"></div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Formation officielle suisse en marketing stratégique et opérationnel. Expertise reconnue par la Confédération.
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-xs text-gray-400 font-medium">Certification Officielle</span>
                </div>
                <div className="text-xs font-medium text-green-400">SAWI Certified →</div>
              </div>
            </div>

            {/* Google Data Analyst */}
            <div className="backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-cyan-400/30 transition-all duration-500 bg-gradient-to-br from-white/5 to-black/40 group">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center group-hover:animate-pulse">
                  <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-lg">📊</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    Google Data Analyst
                  </h3>
                  <div className="w-12 h-1 rounded-full bg-cyan-400"></div>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Certification professionnelle Google en analyse de données. Maîtrise GA4, tracking avancé et data-driven marketing.
              </p>
              
              <div className="flex items-center justify-between pt-6 border-t border-white/10">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                  <span className="text-xs text-gray-400 font-medium">Google Certified</span>
                </div>
                <div className="text-xs font-medium text-cyan-400">Data Expert →</div>
              </div>
            </div>
          </div>

          {/* Statistiques Expertise */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-white/5 to-black/40">
              <div className="text-3xl font-light text-yellow-400 mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>200+</div>
              <div className="text-gray-300 text-sm" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Projets Réalisés</div>
            </div>
            <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-white/5 to-black/40">
              <div className="text-3xl font-light text-green-400 mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>5+</div>
              <div className="text-gray-300 text-sm" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Années Expérience</div>
            </div>
            <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-white/5 to-black/40">
              <div className="text-3xl font-light text-cyan-400 mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>140x</div>
              <div className="text-gray-300 text-sm" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>ROI Maximum</div>
            </div>
            <div className="backdrop-blur-sm border border-white/10 rounded-2xl p-6 bg-gradient-to-br from-white/5 to-black/40">
              <div className="text-3xl font-light text-purple-400 mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>100%</div>
              <div className="text-gray-300 text-sm" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Satisfaction</div>
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