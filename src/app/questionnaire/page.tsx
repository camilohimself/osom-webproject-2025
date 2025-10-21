'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { trackEvent, trackLead } from '@/lib/analytics'

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
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
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
        { value: 'seo-only', label: 'SEO & Référencement uniquement', desc: 'Optimiser la visibilité Google', icon: '📈' },
        { value: 'marketing', label: 'Marketing Digital', desc: 'Stratégie Facebook/Instagram', icon: '📱' },
        { value: 'complete', label: 'Solution complète', desc: 'Site + SEO + Marketing', icon: '💎' },
        { value: 'not-sure', label: 'Je ne sais pas encore', desc: 'Besoin de conseils', icon: '💭' }
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
        { value: '1-month', label: 'D\'ici 1 mois', desc: 'Préparation soignée', icon: '🗓️' },
        { value: '3-months', label: 'Dans 2-3 mois', desc: 'Planification stratégique', icon: '📊' },
        { value: 'flexible', label: 'Je suis flexible', desc: 'Quand c\'est optimal', icon: '🎯' }
      ]
    },
    {
      id: 'budget',
      title: 'Quel est votre budget envisagé ?',
      subtitle: 'Pour vous proposer la solution la plus adaptée',
      type: 'choice',
      options: [
        { value: '1500-3000', label: '1 500 - 3 000 CHF', desc: 'OSOM Web Formula', icon: '💰' },
        { value: '3000-5000', label: '3 000 - 5 000 CHF', desc: 'Site premium + SEO', icon: '💎' },
        { value: '5000-10000', label: '5 000 - 10 000 CHF', desc: 'Solution complète', icon: '👑' },
        { value: '10000+', label: '10 000+ CHF', desc: 'Projet sur mesure', icon: '🚀' },
        { value: 'not-defined', label: 'Budget à définir', desc: 'Conseils personnalisés', icon: '📋' }
      ]
    },
    {
      id: 'currentSituation',
      title: 'Quelle est votre situation actuelle ?',
      subtitle: 'Pour comprendre vos besoins spécifiques',
      type: 'choice',
      options: [
        { value: 'no-website', label: 'Pas de site web', desc: 'Création from scratch', icon: '🔨' },
        { value: 'old-website', label: 'Site web obsolète', desc: 'Besoin de modernisation', icon: '🔧' },
        { value: 'low-traffic', label: 'Site actuel, peu de trafic', desc: 'Optimisation SEO', icon: '📈' },
        { value: 'no-conversions', label: 'Du trafic mais pas de ventes', desc: 'Optimisation conversion', icon: '🎯' },
        { value: 'manual-work', label: 'Tout en manuel actuellement', desc: 'Automatisation nécessaire', icon: '⚙️' },
        { value: 'competitor-behind', label: 'En retard sur la concurrence', desc: 'Rattrapage stratégique', icon: '🏃‍♂️' }
      ]
    },
    {
      id: 'mainGoal',
      title: 'Quel est votre objectif principal ?',
      subtitle: 'Pour mesurer le succès de votre projet',
      type: 'choice',
      options: [
        { value: 'increase-sales', label: 'Augmenter les ventes', desc: 'ROI et conversions', icon: '💹' },
        { value: 'get-leads', label: 'Générer des prospects', desc: 'Contacts qualifiés', icon: '🎣' },
        { value: 'brand-awareness', label: 'Notoriété de marque', desc: 'Visibilité et reconnaissance', icon: '🌟' },
        { value: 'save-time', label: 'Automatiser et gagner du temps', desc: 'Efficacité opérationnelle', icon: '⏰' },
        { value: 'compete', label: 'Rattraper la concurrence', desc: 'Avantage compétitif', icon: '🏆' },
        { value: 'all-above', label: 'Tous ces objectifs', desc: 'Transformation globale', icon: '🎪' }
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
    setIsSubmitting(true)

    try {
      // Send questionnaire data to API
      const response = await fetch('/api/contact-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.contactInfo.name,
          email: formData.contactInfo.email,
          phone: formData.contactInfo.phone,
          company: formData.contactInfo.company,
          source: 'questionnaire',
          questionnaire: {
            projectType: formData.projectType,
            timeline: formData.timeline,
            budget: formData.budget,
            currentSituation: formData.currentSituation,
            mainGoal: formData.mainGoal,
            targetAudience: formData.targetAudience
          }
        }),
      })

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi')
      }

      // Track Questionnaire Lead conversion (Ultra qualified)
      trackLead({
        email: formData.contactInfo.email,
        source: 'questionnaire_complete',
        intent_score: 10, // Ultra qualified - answered full questionnaire
        business_size: formData.projectType,
        budget_range: formData.budget
      })

      // Track conversion event
      trackEvent({
        action: 'questionnaire_completed',
        category: 'conversion',
        label: 'questionnaire_form_submit',
        value: 10,
        custom_parameters: {
          project_type: formData.projectType,
          timeline: formData.timeline,
          budget: formData.budget,
          has_phone: !!formData.contactInfo.phone,
          has_company: !!formData.contactInfo.company
        }
      })

      // Show success state
      setIsSubmitted(true)

    } catch (error) {
      console.error('❌ Erreur soumission questionnaire:', error)
      alert('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  // Success Screen
  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl w-full text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </motion.div>

          {/* Success Message */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-5xl md:text-6xl font-light text-white mb-6"
            style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
          >
            Merci <span className="text-green-400">beaucoup</span> !
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-gray-300 mb-8"
            style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
          >
            Votre demande a été envoyée avec succès.<br/>
            Nous vous contactons sous <span className="text-yellow-400 font-semibold">24h</span> avec votre devis personnalisé.
          </motion.p>

          {/* Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
          >
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl mb-2">📧</div>
              <div className="text-gray-300 text-sm">Vérifiez votre email</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl mb-2">⏰</div>
              <div className="text-gray-300 text-sm">Réponse sous 24h</div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="text-2xl mb-2">🎯</div>
              <div className="text-gray-300 text-sm">Devis personnalisé</div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <motion.button
                className="bg-purple-400 hover:bg-purple-500 text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300"
                style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Retour à l'accueil
              </motion.button>
            </Link>

            <motion.a
              href="https://wa.me/41791289549"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center space-x-2"
              style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
              </svg>
              <span>Nous contacter sur WhatsApp</span>
            </motion.a>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8 text-gray-400 text-sm"
          >
            <p>📞 +41 79 128 95 49 • 📧 hello@osom.ch</p>
          </motion.div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Clean Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/90 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div 
                className="h-8 w-auto transition-transform group-hover:scale-105" 
                whileHover={{ scale: 1.05 }}
              >
                <Image 
                  src="/logo-white.jpg" 
                  alt="OSOM" 
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </motion.div>
            </Link>
            <motion.div className="text-white text-sm font-medium">
              {currentStep + 1} / {questions.length}
            </motion.div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-3 w-full bg-white/10 rounded-full h-2">
            <motion.div 
              className="bg-purple-400 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </header>

      {/* ZERO FRICTION CONTENT */}
      <main className="max-w-4xl mx-auto px-4 pt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            {/* Question Header */}
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-light text-white mb-4 leading-tight" 
                style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
              >
                {currentQuestion.title.split(' ').map((word, index) => {
                  const isHighlight = word.includes('?') || word.includes('votre') || word.includes('Quel')
                  return (
                    <motion.span
                      key={index}
                      className={isHighlight ? 'text-purple-400' : ''}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: index * 0.1 + 0.2
                      }}
                    >
                      {word}{' '}
                    </motion.span>
                  )
                })}
              </motion.h1>

              <motion.p 
                className="text-xl text-gray-300 max-w-2xl mx-auto" 
                style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                {currentQuestion.subtitle}
              </motion.p>
            </motion.div>

            {/* Choice Grid */}
            {currentQuestion.type === 'choice' && (
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-4xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={option.value}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: index * 0.05 + 0.1,
                      duration: 0.3
                    }}
                    onClick={() => handleChoice(option.value)}
                    className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                      formData[currentQuestion.id as keyof FormData] === option.value
                        ? 'border-purple-400 bg-purple-400/10' 
                        : 'border-white/20 bg-white/5 hover:border-purple-400/60 hover:bg-purple-400/5'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl flex-shrink-0">
                        {option.icon}
                      </div>
                      
                      <div className="flex-1">
                        <div 
                          className="text-lg font-medium text-white mb-2 group-hover:text-purple-200" 
                          style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                        >
                          {option.label}
                        </div>
                        
                        <div 
                          className="text-gray-400 text-sm group-hover:text-gray-300" 
                          style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                        >
                          {option.desc}
                        </div>
                      </div>

                      {/* Selection indicator */}
                      <div 
                        className={`w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                          formData[currentQuestion.id as keyof FormData] === option.value
                            ? 'border-purple-400 bg-purple-400'
                            : 'border-white/30 group-hover:border-purple-400/60'
                        }`}
                      >
                        {formData[currentQuestion.id as keyof FormData] === option.value && (
                          <motion.div
                            className="w-2 h-2 bg-white rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                        )}
                      </div>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}

            {/* Contact Form */}
            {currentQuestion.type === 'form' && (
              <motion.form 
                onSubmit={handleContactSubmit} 
                className="max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Nom & Prénom *</label>
                      <input
                        type="text"
                        required
                        value={formData.contactInfo.name}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          contactInfo: { ...prev.contactInfo, name: e.target.value }
                        }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                        placeholder="Jean Dupont"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Entreprise</label>
                      <input
                        type="text"
                        value={formData.contactInfo.company}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          contactInfo: { ...prev.contactInfo, company: e.target.value }
                        }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                        placeholder="Mon Entreprise SA"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.contactInfo.email}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        contactInfo: { ...prev.contactInfo, email: e.target.value }
                      }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                      placeholder="jean@monentreprise.ch"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">Téléphone</label>
                    <input
                      type="tel"
                      value={formData.contactInfo.phone}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        contactInfo: { ...prev.contactInfo, phone: e.target.value }
                      }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none"
                      placeholder="+41 79 123 45 67"
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-purple-400 hover:bg-purple-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-black font-semibold py-4 px-6 rounded-xl transition-all duration-300"
                    style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      'Envoyer ma demande'
                    )}
                  </motion.button>
                </div>
                
                <div className="text-center mt-4 text-gray-400 text-sm">
                  Devis personnalisé sous 24h • 100% confidentiel
                </div>
              </motion.form>
            )}

            {/* Navigation */}
            <motion.div 
              className="flex justify-between items-center mt-12"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <motion.button
                onClick={goBack}
                disabled={currentStep === 0}
                className="flex items-center space-x-2 px-6 py-3 text-gray-400 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={currentStep > 0 ? { x: -3 } : {}}
              >
                <span>‹</span>
                <span>Précédent</span>
              </motion.button>
              
              {currentQuestion.type === 'choice' && formData[currentQuestion.id as keyof FormData] && currentStep < questions.length - 1 && (
                <motion.button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="flex items-center space-x-2 px-6 py-3 bg-purple-400 text-black rounded-xl font-medium"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span>Suivant</span>
                  <span>›</span>
                </motion.button>
              )}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default QuestionnairePage