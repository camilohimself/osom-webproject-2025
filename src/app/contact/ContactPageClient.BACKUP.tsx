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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Elements Professionnel */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-slate-600/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-4">
          
          {/* 1. Hero Asymétrique */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: 14x GRAND */}
              <motion.div 
                className="text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="text-8xl md:text-9xl font-bold text-white mb-4">
                  14x
                </div>
                <div className="text-2xl text-gray-300">
                  plus efficace
                </div>
                <div className="text-gray-400 text-sm mt-2">
                  Données vérifiées GA4
                </div>
              </motion.div>
              
              {/* Right: Titre + CTA */}
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold lowercase text-white mb-6">
                  consultation stratégie
                  <span className="block text-gray-300">digitale gratuite</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8">
                  30 minutes pour révéler votre potentiel de croissance
                </p>

                <motion.button
                  onClick={() => setShowCalendly(true)}
                  className="bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Réserver ma consultation
                </motion.button>
              </motion.div>
            </div>
          </motion.section>

          {/* Funnel Section */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
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
                    <h3 className="text-xl font-bold text-black mb-2">Votre situation actuelle</h3>
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
                    <h3 className="text-lg font-bold text-black mb-2">Analyse & stratégie</h3>
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
                    <h3 className="text-lg font-bold text-yellow-400 mb-2">Résultats mesurables</h3>
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

          {/* CTA Section */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* CTA 1: RDV */}
                <motion.div
                  className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setShowCalendly(true)}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-black text-2xl font-bold">RDV</div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Consultation directe</h3>
                    <p className="text-gray-400 text-sm">Calendrier temps réel</p>
                  </div>
                </motion.div>
                
                {/* CTA 2: EMAIL */}
                <motion.div
                  className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => window.location.href = 'mailto:contact@osom.ch?subject=Demande de consultation&body=Bonjour OSOM,%0D%0A%0D%0AJe souhaite discuter de mon projet...'}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-black text-xl">@</div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Email direct</h3>
                    <p className="text-gray-400 text-sm">contact@osom.ch</p>
                  </div>
                </motion.div>
                
                {/* CTA 3: QUESTIONNAIRE */}
                <motion.div
                  className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => window.open('/questionnaire', '_blank')}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-black text-xl">?</div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Questionnaire</h3>
                    <p className="text-gray-400 text-sm">Diagnostic rapide</p>
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
              <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 text-center">

                {showCalendly ? (
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                  >
                    <motion.div
                      className="h-96 rounded-2xl overflow-hidden bg-white"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div id="calendly-inline-widget" className="w-full h-full"></div>
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
                        className="w-full bg-white hover:bg-gray-100 text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Programmer ma consultation
                      </motion.button>
                    </form>
                    
                    <p className="text-gray-400 text-sm mt-4">
                      Sans engagement • 100% confidentiel
                    </p>
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