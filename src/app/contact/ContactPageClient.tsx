'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import InteractiveBenefitCards from '@/components/contact/InteractiveBenefitCards'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

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
        { value: 'new-website', label: 'Nouveau site web', desc: 'Création complète d\'un nouveau site', icon: '' },
        { value: 'redesign', label: 'Refonte de site existant', desc: 'Améliorer un site actuel', icon: '' },
        { value: 'seo-only', label: 'SEO & Référencement uniquement', desc: 'Optimiser la visibilité Google', icon: '' },
        { value: 'marketing', label: 'Marketing Digital', desc: 'Stratégie Facebook/Instagram', icon: '' },
        { value: 'complete', label: 'Solution complète', desc: 'Site + SEO + Marketing', icon: '' },
        { value: 'audit', label: 'Audit de performance', desc: 'Analyser l\'existant', icon: '' }
      ]
    },
    {
      id: 'timeline',
      title: 'Quand souhaitez-vous commencer ?',
      subtitle: 'Choisissez votre urgence pour adapter notre approche',
      type: 'choice',
      options: [
        { value: 'asap', label: 'Le plus vite possible', desc: 'Démarrage immédiat', icon: '' },
        { value: '2-weeks', label: 'Dans 2 semaines', desc: 'Planning optimal', icon: '' },
        { value: '1-month', label: 'D\'ici 1 mois', desc: 'Préparation soignée', icon: '' },
        { value: '3-months', label: 'Dans 2-3 mois', desc: 'Planification stratégique', icon: '' },
        { value: 'flexible', label: 'Je suis flexible', desc: 'Quand c\'est optimal', icon: '' }
      ]
    },
    {
      id: 'budget',
      title: 'Quel est votre budget envisagé ?',
      subtitle: 'Pour vous proposer la solution la plus adaptée',
      type: 'choice',
      options: [
        { value: '1500-3000', label: '1 500 - 3 000 CHF', desc: 'OSOM Web Formula', icon: '' },
        { value: '3000-5000', label: '3 000 - 5 000 CHF', desc: 'Site premium + SEO', icon: '' },
        { value: '5000-10000', label: '5 000 - 10 000 CHF', desc: 'Solution complète', icon: '' },
        { value: '10000+', label: '10 000+ CHF', desc: 'Projet sur mesure', icon: '' },
        { value: 'audit-first', label: 'Commencer par un audit', desc: 'Définir le budget après diagnostic', icon: '' }
      ]
    },
    {
      id: 'currentSituation',
      title: 'Quelle est votre situation actuelle ?',
      subtitle: 'Pour comprendre vos besoins spécifiques',
      type: 'choice',
      options: [
        { value: 'no-website', label: 'Pas de site web', desc: 'Création from scratch', icon: '' },
        { value: 'old-website', label: 'Site web obsolète', desc: 'Besoin de modernisation', icon: '' },
        { value: 'low-traffic', label: 'Site actuel, peu de trafic', desc: 'Optimisation SEO', icon: '' },
        { value: 'no-conversions', label: 'Du trafic mais pas de ventes', desc: 'Optimisation conversion', icon: '' },
        { value: 'manual-work', label: 'Tout en manuel actuellement', desc: 'Automatisation nécessaire', icon: '' },
        { value: 'competitor-behind', label: 'En retard sur la concurrence', desc: 'Rattrapage stratégique', icon: '' }
      ]
    },
    {
      id: 'mainGoal',
      title: 'Quel est votre objectif principal ?',
      subtitle: 'Pour mesurer le succès de votre projet',
      type: 'choice',
      options: [
        { value: 'more-leads', label: 'Plus de prospects qualifiés', desc: 'Génération de leads B2B', icon: '' },
        { value: 'more-sales', label: 'Augmenter les ventes', desc: 'ROI et conversions', icon: '' },
        { value: 'brand-awareness', label: 'Notoriété de marque', desc: 'Visibilité et reconnaissance', icon: '' },
        { value: 'compete-better', label: 'Mieux concurrencer', desc: 'Avantage concurrentiel', icon: '' },
        { value: 'save-time', label: 'Gagner du temps', desc: 'Automatisation processus', icon: '' },
        { value: 'credibility', label: 'Crédibilité professionnelle', desc: 'Image de marque', icon: '' }
      ]
    },
    {
      id: 'targetAudience',
      title: 'Qui est votre cible principale ?',
      subtitle: 'Pour adapter notre stratégie marketing',
      type: 'choice',
      options: [
        { value: 'b2b-local', label: 'Entreprises locales (Valais)', desc: 'B2B proximité', icon: '' },
        { value: 'b2b-swiss', label: 'Entreprises suisses', desc: 'B2B national', icon: '' },
        { value: 'professionals', label: 'Professionnels spécialisés', desc: 'Médecins, avocats, etc.', icon: '' },
        { value: 'consumers', label: 'Particuliers/Consommateurs', desc: 'B2C local', icon: '' },
        { value: 'mixed', label: 'Mixte B2B + B2C', desc: 'Double cible', icon: '' },
        { value: 'international', label: 'Marché international', desc: 'Export/e-commerce', icon: '' }
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
      {/* Premium Hero Section - Homepage Level */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Multi-layered Background System */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2306B6D4' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Premium Gradient Animation */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 25% 25%, #06b6d415, transparent 50%)",
              "radial-gradient(circle at 75% 75%, #06b6d420, transparent 50%)",
              "radial-gradient(circle at 25% 25%, #06b6d415, transparent 50%)"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Accent Elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "#06B6D4" }}
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute bottom-32 left-16 w-48 h-48 rounded-full opacity-10 blur-2xl"
          style={{ backgroundColor: "#FFDD00" }}
          animate={{
            x: [0, -20, 0],
            y: [0, 15, 0],
            scale: [1, 0.9, 1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            {/* Premium Badge with Pulse Animation */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-cyan-400 mr-3"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-cyan-400 text-sm font-medium tracking-wide">
                CONSULTATION GRATUITE • RÉSULTATS GARANTIS
              </span>
            </motion.div>
            
            {/* Premium Title with Word-by-Word Animation */}
            <motion.h1 
              className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight tracking-tight" 
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              {dictionary.title.split(' ').map((word, index) => {
                const isHighlight = word.toLowerCase().includes('contact') || word.toLowerCase().includes('consultation')
                return (
                  <motion.span
                    key={index}
                    className={isHighlight ? 'text-cyan-400 font-bold' : ''}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.1 + 0.3,
                      ease: [0.25, 0.25, 0.25, 0.75]
                    }}
                  >
                    {word}{' '}
                  </motion.span>
                )
              })}
            </motion.h1>
            
            {/* Enhanced Description */}
            <motion.p 
              className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl mx-auto" 
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {dictionary.subtitle}
              <br />
              <span className="text-cyan-400 font-semibold">30 minutes</span> pour définir votre stratégie de 
              <span className="text-yellow-400 font-semibold"> croissance digitale</span> personnalisée.
            </motion.p>
            
            {/* Premium Animated Stats Pills */}
            <motion.div 
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { label: "Consultation", detail: "100% gratuite", color: "#06B6D4", icon: "" },
                { label: "Stratégie", detail: "personnalisée", color: "#10B981", icon: "" },
                { label: "ROI garanti", detail: "ou remboursé", color: "#FFDD00", icon: "" },
                { label: "Experts", detail: "certifiés", color: "#8B5CF6", icon: "" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl px-6 py-4 border transition-all duration-500 group cursor-pointer"
                  style={{ 
                    borderColor: `${stat.color}20`,
                    backgroundColor: 'transparent'
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 10px 20px ${stat.color}20`,
                    borderColor: `${stat.color}40`
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 1 }}
                >
                  <div className="flex items-center">
                    <span className="text-lg mr-2">{stat.icon}</span>
                    <div>
                      <span className="font-bold" style={{ color: stat.color }}>
                        {stat.label}
                      </span>
                      <span className="text-gray-300 ml-2 text-sm">{stat.detail}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.button
                onClick={scheduleConsultation}
                className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg relative overflow-hidden group"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  {dictionary.cta_schedule}
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
              </motion.button>
              
              <div className="text-gray-400 text-lg font-medium">ou</div>
              
              <motion.a
                href="#questionnaire"
                className="border-2 border-cyan-400/60 text-cyan-400 px-10 py-4 rounded-xl font-medium text-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {dictionary.cta_questionnaire}
              </motion.a>
            </motion.div>

            {/* Premium Trust Indicators */}
            <motion.div 
              className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="flex items-center">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-400 mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span>+100 Projets Réalisés</span>
              </div>
              <div className="flex items-center">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-cyan-400 mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                <span>Valais + Suisse Romande</span>
              </div>
              <div className="flex items-center">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-yellow-400 mr-2"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                />
                <span>Réponse &lt; 24h Garantie</span>
              </div>
            </motion.div>

            {/* Animated Metrics Section */}
            <motion.div 
              className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              {[
                { value: 140, label: "ROI Moyen", suffix: "x", color: "#10B981", icon: "" },
                { value: 688, label: "Conversions Générées", suffix: "", color: "#06B6D4", icon: "" },
                { value: 24, label: "Heures Response", suffix: "h", color: "#FFDD00", icon: "" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 + 1.8 }}
                >
                  <motion.div
                    className="text-4xl mb-2"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {metric.icon}
                  </motion.div>
                  
                  <div className="text-4xl font-bold mb-2" style={{ color: metric.color, fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                    <AnimatedCounter from={0} to={metric.value} duration={2.5} />{metric.suffix}
                  </div>
                  
                  <p className="text-white font-medium" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>{metric.label}</p>
                  <p className="text-gray-400 text-sm">Données clients réelles</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
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