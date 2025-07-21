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
        { value: 'new-website', label: 'Nouveau site web', desc: 'Création complète d\'un nouveau site', icon: '' },
        { value: 'redesign', label: 'Refonte de site existant', desc: 'Améliorer un site actuel', icon: '' },
        { value: 'seo-only', label: 'SEO & Référencement uniquement', desc: 'Optimiser la visibilité Google', icon: '' },
        { value: 'marketing', label: 'Marketing Digital', desc: 'Stratégie Facebook/Instagram', icon: '' },
        { value: 'complete', label: 'Solution complète', desc: 'Site + SEO + Marketing', icon: '' },
        { value: 'not-sure', label: 'Je ne sais pas encore', desc: 'Besoin de conseils', icon: '' }
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
        { value: 'not-defined', label: 'Budget à définir', desc: 'Conseils personnalisés', icon: '' }
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
        { value: 'increase-sales', label: 'Augmenter les ventes', desc: 'ROI et conversions', icon: '' },
        { value: 'get-leads', label: 'Générer des prospects', desc: 'Contacts qualifiés', icon: '' },
        { value: 'brand-awareness', label: 'Notoriété de marque', desc: 'Visibilité et reconnaissance', icon: '' },
        { value: 'save-time', label: 'Automatiser et gagner du temps', desc: 'Efficacité opérationnelle', icon: '' },
        { value: 'compete', label: 'Rattraper la concurrence', desc: 'Avantage compétitif', icon: '' },
        { value: 'all-above', label: 'Tous ces objectifs', desc: 'Transformation globale', icon: '' }
      ]
    },
    {
      id: 'targetAudience',
      title: 'Qui est votre clientèle cible ?',
      subtitle: 'Pour adapter notre stratégie marketing',
      type: 'choice',
      options: [
        { value: 'b2b-local', label: 'Entreprises locales (Valais)', desc: 'B2B proximité', icon: '' },
        { value: 'b2b-national', label: 'Entreprises Suisse', desc: 'B2B national', icon: '' },
        { value: 'b2c-local', label: 'Particuliers locaux', desc: 'B2C proximité', icon: '' },
        { value: 'b2c-national', label: 'Particuliers Suisse', desc: 'B2C national', icon: '' },
        { value: 'seniors', label: 'Clientèle 50+ ans', desc: 'Audience senior', icon: '' },
        { value: 'mixed', label: 'Clientèle mixte', desc: 'B2B + B2C', icon: '' }
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

  // Premium animation variants (homepage level)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

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
      {/* Premium Header */}
      <header className="border-b border-white/10 backdrop-blur-sm bg-black/90 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.img 
                src="/logo-white.jpg" 
                alt="OSOM" 
                className="h-8 w-auto transition-transform group-hover:scale-105" 
                whileHover={{ scale: 1.05 }}
              />
            </Link>
            <motion.div 
              className="text-purple-400 text-sm font-medium"
              animate={{ 
                opacity: [0.7, 1, 0.7],
                scale: [1, 1.02, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Étape <AnimatedCounter from={0} to={currentStep + 1} duration={0.5} /> sur {questions.length}
            </motion.div>
          </div>
          
          {/* Premium Progress Bar */}
          <div className="mt-4 w-full bg-white/10 rounded-full h-3 overflow-hidden backdrop-blur-sm">
            <motion.div 
              className="bg-gradient-to-r from-purple-400 to-purple-500 h-3 rounded-full relative overflow-hidden"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              {/* Progress bar glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: [-100, 300] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </header>

      {/* Ultra-Premium Hero Section - Homepage Level */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Multi-layered Background System */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B5CF6' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Premium Gradient Animation */}
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 25% 25%, #8b5cf615, transparent 50%)",
              "radial-gradient(circle at 75% 75%, #8b5cf620, transparent 50%)",
              "radial-gradient(circle at 25% 25%, #8b5cf615, transparent 50%)"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Accent Elements */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: "#8B5CF6" }}
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

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Premium Badge with Pulse Animation */}
            <motion.div 
              className="flex items-center justify-center mb-8"
              variants={itemVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <motion.div 
                className="w-2 h-2 rounded-full bg-purple-400 mr-3"
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
              <span className="text-purple-400 text-sm font-medium tracking-wide">
                DIAGNOSTIC GRATUIT • STRATÉGIE PERSONNALISÉE
              </span>
            </motion.div>
            
            {/* Premium Title with Word-by-Word Animation */}
            <motion.h1 
              className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight tracking-tight" 
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              variants={itemVariants}
              transition={{ duration: 1, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              {'Diagnostic Digital Gratuit'.split(' ').map((word, index) => {
                const isHighlight = word === 'Digital' || word === 'Gratuit'
                return (
                  <motion.span
                    key={index}
                    className={isHighlight ? 'text-purple-400 font-bold' : ''}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.8, 
                      delay: index * 0.2 + 0.3,
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
              className="text-2xl text-gray-300 mb-12 leading-relaxed max-w-5xl mx-auto" 
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              variants={itemVariants}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              7 questions stratégiques pour identifier vos 
              <span className="text-purple-400 font-semibold"> opportunités de croissance</span>
              <br />et recevoir une 
              <span className="text-yellow-400 font-semibold">stratégie personnalisée</span> sous 24h.
            </motion.p>

            {/* Ultra-Premium Animated Stats Grid */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto"
              variants={itemVariants}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { value: 5, suffix: " min", label: "Temps requis", color: "#8B5CF6", icon: "" },
                { value: 100, suffix: "%", label: "Gratuit", color: "#10B981", icon: "" },
                { value: 24, suffix: "h", label: "Réponse garantie", color: "#FFDD00", icon: "" },
                { value: 0, suffix: "", label: "Engagement", color: "#06B6D4", icon: "" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-purple-400/40 transition-all duration-500 group cursor-pointer"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: `0 20px 40px ${stat.color}20`,
                    y: -5
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 1 }}
                >
                  <div className="text-center">
                    <motion.div
                      className="text-3xl mb-3"
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
                      {stat.icon}
                    </motion.div>
                    
                    <div className="text-3xl font-bold mb-2" style={{ color: stat.color, fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                      {stat.label === "Engagement" ? (
                        "0"
                      ) : (
                        <><AnimatedCounter from={0} to={stat.value} duration={2.5} />{stat.suffix}</>
                      )}
                    </div>
                    
                    <p className="text-white font-medium text-sm" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>{stat.label}</p>
                    <p className="text-gray-400 text-xs">Garantie OSOM</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Premium Benefits Cards with Enhanced Animations */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  icon: "",
                  title: "Diagnostic Personnalisé",
                  desc: "Analyse précise de votre situation et identification des axes prioritaires",
                  color: "#FFDD00"
                },
                {
                  icon: "", 
                  title: "Stratégie Sur Mesure",
                  desc: "Recommandations adaptées à votre secteur et objectifs",
                  color: "#10B981"
                },
                {
                  icon: "",
                  title: "Actions Concrètes", 
                  desc: "Plan détaillé avec étapes pour maximiser votre ROI",
                  color: "#06B6D4"
                }
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-purple-400/40 transition-all duration-500 group text-center"
                  variants={itemVariants}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -8,
                    boxShadow: `0 20px 40px ${benefit.color}15`
                  }}
                >
                  <motion.div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden"
                    style={{ backgroundColor: benefit.color }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: `0 10px 20px ${benefit.color}40`
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-black font-bold text-2xl relative z-10">
                      {benefit.icon}
                    </span>
                    
                    {/* Animated glow effect */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ 
                        background: `radial-gradient(circle at center, ${benefit.color}40, transparent 70%)`
                      }}
                    />
                  </motion.div>
                  
                  <h3 className="text-xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {benefit.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {benefit.desc}
                  </p>
                  
                  {/* Progress indicator */}
                  <motion.div 
                    className="h-1 rounded-full mt-6 mx-auto" 
                    style={{ backgroundColor: benefit.color }}
                    initial={{ width: 0 }}
                    whileInView={{ width: 48 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Premium Call to Action with Enhanced Design */}
            <motion.div 
              className="text-center"
              variants={itemVariants}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.div 
                className="bg-gradient-to-br from-purple-400/20 via-white/10 to-transparent backdrop-blur-xl rounded-3xl p-8 border border-purple-400/30 inline-block relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)"
                }}
              >
                {/* Animated background glow */}
                <motion.div
                  className="absolute inset-0 opacity-20"
                  style={{ 
                    background: "radial-gradient(circle at center, #8b5cf640, transparent 70%)"
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.3, 0.1]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                <div className="relative z-10">
                  <motion.p 
                    className="text-purple-400 text-lg font-medium mb-3" 
                    style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                    animate={{ 
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    Diagnostic complet en 3-5 minutes
                  </motion.p>
                  
                  <p className="text-gray-300 text-lg mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    <span className="text-green-400 font-semibold">100% confidentiel</span> • 
                    <span className="text-yellow-400 font-semibold"> Analyse gratuite</span> • 
                    <span className="text-cyan-400 font-semibold"> Sans engagement</span>
                  </p>
                  
                  {/* Trust indicators */}
                  <div className="flex justify-center items-center space-x-6 text-sm text-gray-400">
                    {[
                      { icon: "", text: "Sécurisé" },
                      { icon: "", text: "Rapide" },
                      { icon: "", text: "Précis" }
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center space-x-1"
                        animate={{ 
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          delay: index * 0.7 
                        }}
                      >
                        <span>{item.icon}</span>
                        <span>{item.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Premium Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5, ease: [0.25, 0.25, 0.25, 0.75] }}
            className="relative"
          >
            {/* Premium Question Header */}
            <motion.div 
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.div 
                className="flex items-center justify-center mb-6"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.div 
                  className="w-3 h-3 rounded-full bg-purple-400 mr-3"
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
                <span className="text-purple-400 text-sm font-medium tracking-wide uppercase">
                  Question {currentStep + 1} sur {questions.length}
                </span>
              </motion.div>

              <motion.h1 
                className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight tracking-tight max-w-4xl mx-auto" 
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
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
                        duration: 0.6, 
                        delay: index * 0.1 + 0.5
                      }}
                    >
                      {word}{' '}
                    </motion.span>
                  )
                })}
              </motion.h1>

              <motion.p 
                className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed" 
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {currentQuestion.subtitle}
              </motion.p>
            </motion.div>

            {/* Premium Choice Grid */}
            {currentQuestion.type === 'choice' && (
              <motion.div 
                className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={option.value}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      delay: index * 0.1 + 0.2,
                      duration: 0.6,
                      ease: [0.25, 0.25, 0.25, 0.75]
                    }}
                    onClick={() => handleChoice(option.value)}
                    className={`group relative overflow-hidden p-8 rounded-3xl border-2 transition-all duration-500 text-left ${
                      formData[currentQuestion.id as keyof FormData] === option.value
                        ? 'border-purple-400 bg-gradient-to-br from-purple-400/20 via-white/10 to-transparent backdrop-blur-xl' 
                        : 'border-white/20 bg-gradient-to-br from-white/5 via-white/2 to-transparent backdrop-blur-xl hover:border-purple-400/60 hover:bg-gradient-to-br hover:from-purple-400/10 hover:to-white/5'
                    }`}
                    whileHover={{ 
                      scale: 1.02,
                      y: -5,
                      boxShadow: "0 20px 40px rgba(139, 92, 246, 0.15)"
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Selection glow effect */}
                    {formData[currentQuestion.id as keyof FormData] === option.value && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-transparent"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}

                    {/* Content */}
                    <div className="flex items-start space-x-6 relative z-10">
                      <motion.div 
                        className="text-4xl flex-shrink-0 transition-transform duration-300"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        {option.icon}
                      </motion.div>
                      
                      <div className="flex-1">
                        <motion.div 
                          className="text-xl font-light text-white mb-3 group-hover:text-purple-200 transition-colors" 
                          style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                        >
                          {option.label}
                        </motion.div>
                        
                        <motion.div 
                          className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors" 
                          style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                        >
                          {option.desc}
                        </motion.div>
                      </div>

                      {/* Selection indicator */}
                      <motion.div 
                        className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                          formData[currentQuestion.id as keyof FormData] === option.value
                            ? 'border-purple-400 bg-purple-400'
                            : 'border-white/30 group-hover:border-purple-400/60'
                        }`}
                        animate={formData[currentQuestion.id as keyof FormData] === option.value ? {
                          scale: [1, 1.2, 1]
                        } : {}}
                        transition={{ duration: 0.3 }}
                      >
                        {formData[currentQuestion.id as keyof FormData] === option.value && (
                          <motion.div
                            className="w-2 h-2 bg-white rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.2, delay: 0.1 }}
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* Hover effect overlay */}
                    <motion.div
                      className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                      style={{ 
                        background: "radial-gradient(circle at center, #8b5cf640, transparent 70%)"
                      }}
                    />
                  </motion.button>
                ))}
              </motion.div>
            )}

            {/* Premium Contact Form */}
            {currentQuestion.type === 'form' && (
              <motion.form 
                onSubmit={handleContactSubmit} 
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left Column - Form Fields */}
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        <label className="block text-white text-sm font-medium mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                          Prénom et nom *
                        </label>
                        <motion.input
                          type="text"
                          required
                          value={formData.contactInfo.name}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            contactInfo: { ...prev.contactInfo, name: e.target.value }
                          }))}
                          className="w-full px-6 py-4 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-all duration-300"
                          style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                          placeholder="Jean Dupont"
                          whileFocus={{ 
                            scale: 1.02,
                            boxShadow: "0 10px 20px rgba(139, 92, 246, 0.2)"
                          }}
                        />
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        <label className="block text-white text-sm font-medium mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                          Entreprise
                        </label>
                        <motion.input
                          type="text"
                          value={formData.contactInfo.company}
                          onChange={(e) => setFormData(prev => ({
                            ...prev,
                            contactInfo: { ...prev.contactInfo, company: e.target.value }
                          }))}
                          className="w-full px-6 py-4 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-all duration-300"
                          style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                          placeholder="Mon Entreprise SA"
                          whileFocus={{ 
                            scale: 1.02,
                            boxShadow: "0 10px 20px rgba(139, 92, 246, 0.2)"
                          }}
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <label className="block text-white text-sm font-medium mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        Email *
                      </label>
                      <motion.input
                        type="email"
                        required
                        value={formData.contactInfo.email}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          contactInfo: { ...prev.contactInfo, email: e.target.value }
                        }))}
                        className="w-full px-6 py-4 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-all duration-300"
                        style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                        placeholder="jean@monentreprise.ch"
                        whileFocus={{ 
                          scale: 1.02,
                          boxShadow: "0 10px 20px rgba(139, 92, 246, 0.2)"
                        }}
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                    >
                      <label className="block text-white text-sm font-medium mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        Téléphone
                      </label>
                      <motion.input
                        type="tel"
                        value={formData.contactInfo.phone}
                        onChange={(e) => setFormData(prev => ({
                          ...prev,
                          contactInfo: { ...prev.contactInfo, phone: e.target.value }
                        }))}
                        className="w-full px-6 py-4 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-400 focus:outline-none transition-all duration-300"
                        style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                        placeholder="+41 79 123 45 67"
                        whileFocus={{ 
                          scale: 1.02,
                          boxShadow: "0 10px 20px rgba(139, 92, 246, 0.2)"
                        }}
                      />
                    </motion.div>

                    {/* Premium Submit Button */}
                    <motion.button
                      type="submit"
                      className="w-full relative overflow-hidden bg-gradient-to-r from-purple-500 to-purple-600 text-white py-6 px-8 rounded-2xl font-bold text-lg shadow-2xl group"
                      style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Button glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      />
                      
                      <span className="relative z-10 flex items-center justify-center">
                        Envoyer ma demande
                        <motion.span
                          className="ml-3"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </span>
                      
                      <div className="text-sm font-normal opacity-80 mt-1">
                        Devis personnalisé sous 24h garantie
                      </div>
                    </motion.button>
                  </div>

                  {/* Right Column - Enhanced Summary */}
                  <motion.div 
                    className="lg:sticky lg:top-8"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl p-8 border border-white/20 relative overflow-hidden">
                      {/* Background glow effect */}
                      <motion.div
                        className="absolute inset-0 opacity-20"
                        style={{ 
                          background: "radial-gradient(circle at top right, #8b5cf640, transparent 70%)"
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.1, 0.3, 0.1]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />

                      <div className="relative z-10">
                        <motion.h3 
                          className="text-2xl font-light text-white mb-8" 
                          style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.5 }}
                        >
                          Résumé de votre projet
                        </motion.h3>
                        
                        <div className="space-y-6">
                          {[
                            { label: "Projet", value: questions[0].options.find(o => o.value === formData.projectType)?.label, icon: "", color: "#8B5CF6" },
                            { label: "Timeline", value: questions[1].options.find(o => o.value === formData.timeline)?.label, icon: "", color: "#FFDD00" },
                            { label: "Budget", value: questions[2].options.find(o => o.value === formData.budget)?.label, icon: "", color: "#10B981" },
                            { label: "Objectif", value: questions[4].options.find(o => o.value === formData.mainGoal)?.label, icon: "", color: "#06B6D4" }
                          ].map((item, index) => (
                            <motion.div 
                              key={item.label}
                              className="flex items-start space-x-4 p-4 rounded-2xl bg-white/5 border border-white/10"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                              whileHover={{ scale: 1.02 }}
                            >
                              <div className="text-xl">{item.icon}</div>
                              <div className="flex-1">
                                <div className="text-sm font-medium" style={{ color: item.color, fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                                  {item.label}
                                </div>
                                <div className="text-white text-sm leading-relaxed mt-1" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                                  {item.value}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Trust indicators */}
                        <motion.div 
                          className="mt-8 pt-8 border-t border-white/20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.6, delay: 1 }}
                        >
                          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                            {[
                              { icon: "", text: "100% sécurisé" },
                              { icon: "", text: "Réponse 24h" },
                              { icon: "", text: "Analyse gratuite" }
                            ].map((item, index) => (
                              <motion.div 
                                key={index}
                                className="flex items-center space-x-1"
                                animate={{ 
                                  opacity: [0.7, 1, 0.7]
                                }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity, 
                                  delay: index * 0.7 
                                }}
                              >
                                <span>{item.icon}</span>
                                <span style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>{item.text}</span>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.form>
            )}

            {/* Premium Navigation */}
            <motion.div 
              className="flex justify-between items-center mt-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button
                onClick={goBack}
                disabled={currentStep === 0}
                className="flex items-center space-x-3 px-8 py-4 rounded-2xl text-gray-400 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-br from-white/5 via-white/2 to-transparent backdrop-blur-xl border border-white/20 hover:border-white/40"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                whileHover={currentStep > 0 ? { 
                  scale: 1.02,
                  x: -3,
                  boxShadow: "0 10px 20px rgba(255, 255, 255, 0.1)"
                } : {}}
                whileTap={{ scale: 0.98 }}
              >
                <motion.span
                  animate={currentStep > 0 ? { x: [-2, 2, -2] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ←
                </motion.span>
                <span>Précédent</span>
              </motion.button>
              
              {currentQuestion.type === 'choice' && formData[currentQuestion.id as keyof FormData] && (
                <motion.button
                  onClick={() => setCurrentStep(currentStep + 1)}
                  className="flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-2xl font-medium shadow-2xl relative overflow-hidden group"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 15px 30px rgba(139, 92, 246, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button glow effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  <span className="relative z-10">Suivant</span>
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
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