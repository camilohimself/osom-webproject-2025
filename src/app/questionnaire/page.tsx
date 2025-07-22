'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

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
      {/* Clean Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/90 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.img 
                src="/logo-white.jpg" 
                alt="OSOM" 
                className="h-8 w-auto transition-transform group-hover:scale-105" 
                whileHover={{ scale: 1.05 }}
              />
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
                    className="w-full bg-purple-400 hover:bg-purple-500 text-black font-semibold py-4 px-6 rounded-xl transition-all duration-300"
                    style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Envoyer ma demande
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