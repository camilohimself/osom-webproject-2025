'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
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

interface ContactPageClientProps {
  dictionary: ContactDictionary
}

const ContactPageClient = ({ dictionary }: ContactPageClientProps) => {
  const [showCalendly, setShowCalendly] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  })

  // Load Calendly script
  useEffect(() => {
    if (showCalendly && typeof window !== 'undefined') {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      document.body.appendChild(script)
      
      script.onload = () => {
        if ((window as any).Calendly) {
          (window as any).Calendly.initInlineWidget({
            url: 'https://calendly.com/osom-consultation/30min',
            parentElement: document.getElementById('calendly-inline-widget'),
            prefill: {},
            utm: {}
          })
        }
      }
    }
  }, [showCalendly])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setShowCalendly(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 relative overflow-hidden">
      {/* Background Elements Premium Jaune */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-300/20 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 right-20 w-6 h-6 bg-white/40 rounded-full"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-40 left-20 w-4 h-4 bg-orange-300/60 rotate-45"
          animate={{ 
            rotate: [45, 405],
            y: [0, 15, 0] 
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute top-1/3 left-10 w-8 h-1 bg-white/50 rounded-full"
          animate={{ 
            scaleX: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5] 
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-4">
          
          {/* 1. Hero Professionnel */}
          <motion.section 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold lowercase mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="text-black">consultation stratégie</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-800">
                digitale gratuite
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-slate-800 font-semibold mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              30 minutes pour révéler votre potentiel de croissance caché
            </motion.p>

            <motion.button
              onClick={() => setShowCalendly(true)}
              className="group relative bg-black hover:bg-slate-900 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-black/50 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-slate-800 to-black"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center gap-3">
                📅 Réserver ma consultation SPECTACULAIRE
              </span>
              
              {/* Glow effect */}
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl blur opacity-20 group-hover:opacity-40"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2] 
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.section>

          {/* 2. KPI Sobre */}
          <motion.section 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="bg-white/20 backdrop-blur-sm border border-black/20 rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl">
              <motion.div 
                className="flex items-center justify-center mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.0, type: "spring", stiffness: 200 }}
              >
                <AnimatedCounter 
                  from={0}
                  to={140} 
                  suffix="x plus efficace"
                  className="text-3xl md:text-4xl font-bold text-black"
                />
              </motion.div>
              <p className="text-slate-800 text-lg font-semibold">que la concurrence</p>
              <div className="mt-4 text-sm text-slate-700">
                Données vérifiées GA4 • 200+ jours d'analyses
              </div>
            </div>
          </motion.section>

          {/* 3. Bénéfices Clairs */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                '✅ Analyse gratuite et sans engagement',
                '✅ Stratégie personnalisée',
                '✅ Résultats mesurables',
                '✅ Accompagnement expert'
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="bg-white/30 backdrop-blur-sm border border-black/20 rounded-xl p-6 shadow-lg"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
                >
                  <p className="text-black text-lg font-semibold">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* 4. 🎯 FUNNEL VISUEL (NOUVEAU) */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl font-bold text-black mb-4 lowercase">votre parcours vers le succès</h2>
            </div>
            
            <div className="relative max-w-2xl mx-auto">
              {/* Funnel Visual Container */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.8, type: "spring", stiffness: 100 }}
              >
                {/* Top Level - Large */}
                <motion.div
                  className="relative bg-white/40 backdrop-blur-sm rounded-t-3xl p-8 border-4 border-black/20 mb-4 shadow-xl"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(0, 0, 0, 0.4)' }}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-black mb-2">Votre Situation Actuelle</h3>
                    <p className="text-slate-800">Défis, objectifs, opportunités manquées</p>
                  </div>
                  
                  {/* Floating particles */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-3 h-3 bg-black rounded-full"
                    animate={{ 
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Middle Level - Medium */}
                <motion.div
                  className="relative bg-white/50 backdrop-blur-sm rounded-2xl p-6 border-4 border-black/30 mb-4 mx-8 shadow-xl"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0, duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(0, 0, 0, 0.5)' }}
                >
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-black mb-2">Analyse & Stratégie</h3>
                    <p className="text-slate-800">Plan d'action personnalisé</p>
                  </div>
                  
                  <motion.div
                    className="absolute -top-1 -left-1 w-2 h-2 bg-slate-700 rounded-full"
                    animate={{ 
                      y: [0, 20, 40],
                      opacity: [1, 0.5, 0]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeIn"
                    }}
                  />
                </motion.div>

                {/* Bottom Level - Narrow */}
                <motion.div
                  className="relative bg-black rounded-b-3xl p-4 border-4 border-slate-800 mx-16 shadow-2xl"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(0, 0, 0, 0.8)' }}
                >
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Résultats Mesurables</h3>
                    <p className="text-yellow-300">ROI transparent et croissance</p>
                  </div>
                  
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full"
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ 
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>

                {/* Connecting Flow Lines */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.svg
                    className="w-full h-full"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 2.5, duration: 1.5 }}
                  >
                    <defs>
                      <linearGradient id="flowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#000000', stopOpacity: 0.8 }} />
                        <stop offset="100%" style={{ stopColor: '#ffd507', stopOpacity: 0.6 }} />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 100 120 Q 100 180 100 240"
                      stroke="url(#flowGradient)"
                      strokeWidth="2"
                      fill="none"
                      strokeDasharray="5,5"
                    />
                  </motion.svg>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* 🎯 SECTION CTA TRIPLE SPECTACULAIRE */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
          >
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-4xl font-bold text-black text-center mb-12 lowercase"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.6, duration: 0.6 }}
              >
                3 façons spectaculaires de nous contacter
              </motion.h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* CTA 1: RDV CALENDLY */}
                <motion.div
                  className="group relative bg-white/40 backdrop-blur-sm border border-black/30 rounded-3xl p-8 shadow-2xl cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 2.8, duration: 0.6, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05, y: -10, rotateX: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowCalendly(true)}
                >
                  {/* Animated background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10 text-center">
                    <motion.div 
                      className="text-6xl mb-4"
                      animate={{ 
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.1, 1] 
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      📅
                    </motion.div>
                    <h3 className="text-2xl font-bold text-black mb-4 lowercase">rdv immédiat</h3>
                    <p className="text-slate-800 text-sm mb-6">
                      Calendrier en temps réel
                      <br />Choisissez votre créneau
                    </p>
                    
                    <motion.div 
                      className="bg-black text-yellow-400 px-6 py-3 rounded-xl font-bold"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Réserver maintenant
                    </motion.div>
                  </div>
                  
                  {/* Glow effect */}
                  <motion.div 
                    className="absolute -inset-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl blur opacity-20 group-hover:opacity-40 -z-10"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                {/* CTA 2: EMAIL DIRECT */}
                <motion.div
                  className="group relative bg-white/40 backdrop-blur-sm border border-black/30 rounded-3xl p-8 shadow-2xl cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 3.0, duration: 0.6, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05, y: -10, rotateX: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = 'mailto:contact@osom.ch?subject=Demande de consultation&body=Bonjour OSOM,%0D%0A%0D%0AJe souhaite discuter de mon projet...'}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10 text-center">
                    <motion.div 
                      className="text-6xl mb-4"
                      animate={{ 
                        y: [0, -5, 0],
                        rotate: [0, 5, -5, 0] 
                      }}
                      transition={{ 
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ✉️
                    </motion.div>
                    <h3 className="text-2xl font-bold text-black mb-4 lowercase">email direct</h3>
                    <p className="text-slate-800 text-sm mb-6">
                      Réponse sous 2h garanti
                      <br />contact@osom.ch
                    </p>
                    
                    <motion.div 
                      className="bg-black text-yellow-400 px-6 py-3 rounded-xl font-bold"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Écrire maintenant
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur opacity-20 group-hover:opacity-40 -z-10"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
                
                {/* CTA 3: QUESTIONNAIRE INTELLIGENT */}
                <motion.div
                  className="group relative bg-white/40 backdrop-blur-sm border border-black/30 rounded-3xl p-8 shadow-2xl cursor-pointer overflow-hidden"
                  initial={{ opacity: 0, y: 30, rotateX: -15 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ delay: 3.2, duration: 0.6, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.05, y: -10, rotateX: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.open('https://forms.gle/your-form-id', '_blank')}
                >
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-500/20 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  <div className="relative z-10 text-center">
                    <motion.div 
                      className="text-6xl mb-4"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 360] 
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      🧠
                    </motion.div>
                    <h3 className="text-2xl font-bold text-black mb-4 lowercase">questionnaire IA</h3>
                    <p className="text-slate-800 text-sm mb-6">
                      Diagnostic automatisé
                      <br />Résultats en 5min
                    </p>
                    
                    <motion.div 
                      className="bg-black text-yellow-400 px-6 py-3 rounded-xl font-bold"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Commencer le test
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    className="absolute -inset-2 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl blur opacity-20 group-hover:opacity-40 -z-10"
                    animate={{ 
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* 5. Témoignages Sélectionnés */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Témoignage 1 */}
                <motion.div
                  className="bg-white/30 backdrop-blur-sm border border-black/20 rounded-2xl p-6 shadow-xl"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.6, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mb-4">
                    <div className="flex text-orange-600 mb-2">★★★★★</div>
                    <p className="text-black italic font-medium">
                      "Le diagnostic osom a révélé 14,171 sessions perdues dans nos données. 
                      Exactement ce dont nous avions besoin."
                    </p>
                  </div>
                  <div className="border-t border-black/20 pt-4">
                    <p className="text-black font-bold">Dr. Sarah M.</p>
                    <p className="text-slate-700 text-sm">Clinique Médicale, Lausanne</p>
                  </div>
                </motion.div>

                {/* Témoignage 2 */}
                <motion.div
                  className="bg-white/30 backdrop-blur-sm border border-black/20 rounded-2xl p-6 shadow-xl"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.8, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mb-4">
                    <div className="flex text-orange-600 mb-2">★★★★★</div>
                    <p className="text-black italic font-medium">
                      "Leur approche data-driven nous a permis de multiplier nos conversions par 4. 
                      Professionnalisme exemplaire."
                    </p>
                  </div>
                  <div className="border-t border-black/20 pt-4">
                    <p className="text-black font-bold">Me Jean-Paul R.</p>
                    <p className="text-slate-700 text-sm">Cabinet Juridique, Genève</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* 6. CTA Final Professionnel */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.8 }}
          >
            <div className="max-w-2xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm border border-black/30 rounded-3xl p-8 text-center shadow-2xl">
                
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.2, duration: 0.6 }}
                >
                  <p className="text-black font-semibold mb-2">⏰ Disponibilités limitées cette semaine</p>
                  <h3 className="text-2xl font-bold text-black mb-4 lowercase">consultation stratégique gratuite</h3>
                </motion.div>

                {showCalendly ? (
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                  >
                    {/* SPECTACULAIRE Header */}
                    <motion.div 
                      className="bg-black text-yellow-400 p-4 rounded-t-2xl text-center font-bold text-lg mb-4"
                      initial={{ y: -50, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.6 }}
                    >
                      🎯 CALENDRIER CONSULTATION SPECTACULAIRE 🎯
                    </motion.div>
                    
                    {/* Animated border */}
                    <motion.div 
                      className="absolute inset-0 rounded-2xl border-4 border-yellow-400 opacity-50"
                      animate={{ 
                        borderColor: ['#ffd507', '#ff6b35', '#ffd507'],
                        scale: [1, 1.02, 1] 
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Calendly Widget avec style premium */}
                    <motion.div
                      className="h-96 rounded-b-2xl overflow-hidden bg-white shadow-2xl"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 384 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <div id="calendly-inline-widget" className="w-full h-full"></div>
                    </motion.div>
                    
                    {/* Floating success indicators */}
                    <motion.div
                      className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
                      animate={{ 
                        scale: [1, 1.3, 1],
                        rotate: [0, 180, 360] 
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ✅
                    </motion.div>
                    
                    <motion.div
                      className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xs"
                      animate={{ 
                        y: [0, -10, 0],
                        opacity: [0.7, 1, 0.7] 
                      }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      🚀
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.4, duration: 0.6 }}
                  >
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Nom & Prénom"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-white/40 backdrop-blur-sm border border-black/30 text-black placeholder-slate-700 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black shadow-inner"
                          required
                        />
                        <input
                          type="email"
                          placeholder="Email professionnel"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-white/40 backdrop-blur-sm border border-black/30 text-black placeholder-slate-700 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black shadow-inner"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="tel"
                          placeholder="Téléphone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="bg-white/40 backdrop-blur-sm border border-black/30 text-black placeholder-slate-700 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black shadow-inner"
                        />
                        <input
                          type="text"
                          placeholder="Entreprise"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="bg-white/40 backdrop-blur-sm border border-black/30 text-black placeholder-slate-700 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black shadow-inner"
                        />
                      </div>
                      
                      <motion.button
                        type="submit"
                        className="group relative w-full bg-black hover:bg-slate-900 text-yellow-400 px-8 py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-black/50 transition-all duration-300 overflow-hidden"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Animated background pulse */}
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-yellow-600 to-orange-600 opacity-0 group-hover:opacity-20"
                          animate={{ 
                            x: ['-100%', '100%'],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                        
                        <span className="relative z-10 flex items-center justify-center gap-3">
                          🎆 Programmer ma consultation SPECTACULAIRE
                          <motion.span
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            ⚡
                          </motion.span>
                        </span>
                        
                        {/* Glow effect */}
                        <motion.div 
                          className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-xl blur opacity-30 group-hover:opacity-50 -z-10"
                          animate={{ 
                            scale: [1, 1.1, 1],
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </motion.button>
                    </form>
                    
                    <motion.p 
                      className="text-slate-700 text-sm mt-4 font-medium"
                      animate={{ 
                        opacity: [0.7, 1, 0.7] 
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ✅ Sans engagement • ✅ 100% confidentiel • ✅ Résultats SPECTACULAIRES garantis 🎆
                    </motion.p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </div>
  )
}


export default ContactPageClient