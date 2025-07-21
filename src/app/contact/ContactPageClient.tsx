'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import InteractiveBenefitCards from '@/components/contact/InteractiveBenefitCards'

interface ContactDictionary {
  title: string
  subtitle: string
  cta_schedule: string
  cta_questionnaire: string
  form_name: string
  form_email: string
  form_phone: string
  form_company: string
  step_of: string
  next: string
  previous: string
  submit: string
}

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

interface ContactPageClientProps {
  dictionary: ContactDictionary
}

const ContactPageClient = ({ dictionary }: ContactPageClientProps) => {
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
        { value: 'more-leads', label: 'Plus de prospects qualifiés', desc: 'Génération de leads B2B', icon: '📈' },
        { value: 'more-sales', label: 'Augmenter les ventes', desc: 'ROI et conversions', icon: '💰' },
        { value: 'brand-awareness', label: 'Notoriété de marque', desc: 'Visibilité et reconnaissance', icon: '✨' },
        { value: 'compete-better', label: 'Mieux concurrencer', desc: 'Avantage concurrentiel', icon: '🏆' },
        { value: 'save-time', label: 'Gagner du temps', desc: 'Automatisation processus', icon: '⏰' },
        { value: 'credibility', label: 'Crédibilité professionnelle', desc: 'Image de marque', icon: '👔' }
      ]
    },
    {
      id: 'targetAudience',
      title: 'Qui est votre cible principale ?',
      subtitle: 'Pour adapter notre stratégie marketing',
      type: 'choice',
      options: [
        { value: 'b2b-local', label: 'Entreprises locales (Valais)', desc: 'B2B proximité', icon: '🏢' },
        { value: 'b2b-swiss', label: 'Entreprises suisses', desc: 'B2B national', icon: '🇨🇭' },
        { value: 'professionals', label: 'Professionnels spécialisés', desc: 'Médecins, avocats, etc.', icon: '👨‍💼' },
        { value: 'consumers', label: 'Particuliers/Consommateurs', desc: 'B2C local', icon: '👥' },
        { value: 'mixed', label: 'Mixte B2B + B2C', desc: 'Double cible', icon: '🎯' },
        { value: 'international', label: 'Marché international', desc: 'Export/e-commerce', icon: '🌍' }
      ]
    }
  ]

  const currentQuestion = questions[currentStep]
  const totalSteps = questions.length + 1

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setShowCalendly(true)
  }

  const scheduleConsultation = () => {
    setShowCalendly(true)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              {dictionary.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              {dictionary.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={scheduleConsultation}
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold text-lg shadow-lg"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                {dictionary.cta_schedule} ⚡
              </button>
              
              <div className="text-gray-400">ou</div>
              
              <Link
                href="#questionnaire"
                className="border-2 border-yellow-400/50 text-yellow-400 px-8 py-4 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors font-medium backdrop-blur-sm"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                {dictionary.cta_questionnaire} 📝
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Benefits */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveBenefitCards />
        </div>
      </section>

      {/* Questionnaire */}
      <main id="questionnaire" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900/50 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-800"
          >
            {/* Progress */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-yellow-400 font-medium">
                  {dictionary.step_of.replace('{current}', String(currentStep + 1)).replace('{total}', String(totalSteps))}
                </span>
                <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Question Content */}
            {currentStep < questions.length && (
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {currentQuestion.title}
                </h2>
                <p className="text-gray-300 text-lg mb-8">
                  {currentQuestion.subtitle}
                </p>

                {currentQuestion.type === 'choice' && (
                  <div className="grid gap-4 md:grid-cols-2">
                    {currentQuestion.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          const newFormData = { ...formData, [currentQuestion.id]: option.value }
                          setFormData(newFormData)
                          
                          setTimeout(() => {
                            setCurrentStep(currentStep + 1)
                          }, 200)
                        }}
                        className={`group p-6 rounded-xl border transition-all duration-200 text-left ${
                          formData[currentQuestion.id as keyof FormData] === option.value
                            ? 'border-yellow-400 bg-yellow-400/10'
                            : 'border-gray-700 bg-gray-800/50 hover:border-gray-600 hover:bg-gray-800/70'
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <span className="text-2xl">{option.icon}</span>
                          <div className="flex-1">
                            <div className="font-semibold text-white mb-2">{option.label}</div>
                            <div className="text-gray-400 text-sm">{option.desc}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Final Form */}
            {currentStep === questions.length && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Parfait ! Planifions votre consultation
                  </h2>
                  <p className="text-gray-300">
                    Dernière étape pour réserver votre consultation gratuite de 30 minutes
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2">{dictionary.form_name}</label>
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
                    <label className="block text-gray-300 mb-2">{dictionary.form_company}</label>
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

                  <div>
                    <label className="block text-gray-300 mb-2">{dictionary.form_email}</label>
                    <input
                      type="email"
                      required
                      value={formData.contactInfo.email}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        contactInfo: { ...prev.contactInfo, email: e.target.value }
                      }))}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-yellow-400 focus:outline-none"
                      placeholder="jean@entreprise.ch"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-300 mb-2">{dictionary.form_phone}</label>
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
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 text-black py-4 px-8 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-colors"
                >
                  {dictionary.submit} →
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
                ← {dictionary.previous}
              </button>
              
              {currentQuestion?.type === 'choice' && formData[currentQuestion.id as keyof FormData] && (
                <button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition-colors"
                >
                  {dictionary.next} →
                </button>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Calendly Integration */}
      {showCalendly && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-4xl h-5/6 relative">
            <button
              onClick={() => setShowCalendly(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors flex items-center justify-center"
            >
              ✕
            </button>
            <div 
              className="w-full h-full rounded-2xl" 
              dangerouslySetInnerHTML={{
                __html: `
                  <div class="calendly-inline-widget" data-url="https://calendly.com/osom-consult/30min-consultation" style="min-width:320px;height:100%;"></div>
                  <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
                `
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactPageClient