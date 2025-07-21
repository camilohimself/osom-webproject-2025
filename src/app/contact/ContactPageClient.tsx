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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
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
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Consultation Stratégie{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">
                Digitale Gratuite
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              30 minutes pour analyser votre potentiel de croissance
            </motion.p>

            <motion.button
              onClick={() => setShowCalendly(true)}
              className="bg-[#ffd507] hover:bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Réserver ma consultation
            </motion.button>
          </motion.section>

          {/* 2. KPI Sobre */}
          <motion.section 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-8 max-w-2xl mx-auto">
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
                  className="text-3xl md:text-4xl font-bold text-yellow-400"
                />
              </motion.div>
              <p className="text-gray-300 text-lg">que la concurrence</p>
              <div className="mt-4 text-sm text-gray-400">
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
                  className="bg-slate-800/40 backdrop-blur-sm border border-teal-400/20 rounded-xl p-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, backgroundColor: 'rgba(20, 184, 166, 0.1)' }}
                >
                  <p className="text-white text-lg font-medium">{benefit}</p>
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
              <h2 className="text-3xl font-bold text-white mb-4">Votre Parcours vers le Succès</h2>
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
                  className="relative bg-gradient-to-r from-slate-700 to-slate-600 rounded-t-3xl p-8 border-4 border-yellow-400/30 mb-4"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(255, 213, 7, 0.5)' }}
                >
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-white mb-2">Votre Situation Actuelle</h3>
                    <p className="text-gray-300">Défis, objectifs, opportunités manquées</p>
                  </div>
                  
                  {/* Floating particles */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full"
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
                  className="relative bg-gradient-to-r from-teal-600 to-teal-500 rounded-2xl p-6 border-4 border-teal-400/30 mb-4 mx-8"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0, duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(20, 184, 166, 0.5)' }}
                >
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-white mb-2">Analyse & Stratégie</h3>
                    <p className="text-teal-100">Plan d'action personnalisé</p>
                  </div>
                  
                  <motion.div
                    className="absolute -top-1 -left-1 w-2 h-2 bg-teal-200 rounded-full"
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
                  className="relative bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-b-3xl p-4 border-4 border-yellow-300 mx-16"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(255, 213, 7, 0.8)' }}
                >
                  <div className="text-center">
                    <h3 className="text-lg font-bold text-black mb-2">Résultats Mesurables</h3>
                    <p className="text-yellow-900">ROI transparent et croissance</p>
                  </div>
                  
                  <motion.div
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-600 rounded-full"
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
                        <stop offset="0%" style={{ stopColor: '#ffd507', stopOpacity: 0.6 }} />
                        <stop offset="100%" style={{ stopColor: '#14b8a6', stopOpacity: 0.6 }} />
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
                  className="bg-slate-800/40 backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.6, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mb-4">
                    <div className="flex text-yellow-400 mb-2">★★★★★</div>
                    <p className="text-gray-300 italic">
                      "Le diagnostic osom a révélé 14,171 sessions perdues dans nos données. 
                      Exactement ce dont nous avions besoin."
                    </p>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <p className="text-white font-semibold">Dr. Sarah M.</p>
                    <p className="text-gray-400 text-sm">Clinique Médicale, Lausanne</p>
                  </div>
                </motion.div>

                {/* Témoignage 2 */}
                <motion.div
                  className="bg-slate-800/40 backdrop-blur-sm border border-teal-400/20 rounded-2xl p-6"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.8, duration: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mb-4">
                    <div className="flex text-yellow-400 mb-2">★★★★★</div>
                    <p className="text-gray-300 italic">
                      "Leur approche data-driven nous a permis de multiplier nos conversions par 4. 
                      Professionnalisme exemplaire."
                    </p>
                  </div>
                  <div className="border-t border-gray-600 pt-4">
                    <p className="text-white font-semibold">Me Jean-Paul R.</p>
                    <p className="text-gray-400 text-sm">Cabinet Juridique, Genève</p>
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
              <div className="bg-gradient-to-r from-slate-800 to-slate-700 border border-yellow-400/30 rounded-3xl p-8 text-center">
                
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.2, duration: 0.6 }}
                >
                  <p className="text-yellow-400 font-semibold mb-2">⏰ Disponibilités limitées cette semaine</p>
                  <h3 className="text-2xl font-bold text-white mb-4">Consultation Stratégique Gratuite</h3>
                </motion.div>

                {showCalendly ? (
                  <motion.div
                    className="h-96 rounded-2xl overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 384 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div id="calendly-inline-widget" className="w-full h-full"></div>
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
                          className="bg-slate-700 border border-gray-600 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          required
                        />
                        <input
                          type="email"
                          placeholder="Email professionnel"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-slate-700 border border-gray-600 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="tel"
                          placeholder="Téléphone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="bg-slate-700 border border-gray-600 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                        <input
                          type="text"
                          placeholder="Entreprise"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="bg-slate-700 border border-gray-600 text-white px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400"
                        />
                      </div>
                      
                      <motion.button
                        type="submit"
                        className="w-full bg-[#ffd507] hover:bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-lg shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Programmer ma consultation gratuite
                      </motion.button>
                    </form>
                    
                    <p className="text-gray-400 text-sm mt-4">
                      ✅ Sans engagement • ✅ 100% confidentiel • ✅ Résultats garantis
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