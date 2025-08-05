'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { MagneticButton } from '@/components/ui'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import EmailModal from '@/components/contact/EmailModal'

interface ContactDictionary {
  hero?: {
    title: string
    title_highlight: string
    subtitle: string
    visual_alt: string
  }
  process?: {
    title: string
    step1: { title: string; description: string }
    step2: { title: string; description: string }
    step3: { title: string; description: string }
  }
  case_study?: {
    title: string
    company: string
    before: string
    after: string
    testimonial: string
    author: string
  }
  options?: {
    title: string
    direct: { title: string; description: string }
    kit: { title: string; description: string }
    questionnaire: { title: string; description: string }
  }
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
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  })

  // LIQUID CHROME PHYSICS ⚡
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 })
  
  // Transformations liquides
  const liquidRotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const liquidScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 0.9])
  const liquidOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.8, 0.6, 0.9])
  
  // Chrome reflections
  const chromeX = useTransform(smoothMouseX, [-1000, 1000], [-50, 50])
  const chromeY = useTransform(smoothMouseY, [-1000, 1000], [-50, 50])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (rect) {
      mouseX.set(e.clientX - rect.left - rect.width / 2)
      mouseY.set(e.clientY - rect.top - rect.height / 2)
    }
  }

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
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="min-h-screen relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
      }}
    >
      {/* LIQUID CHROME BACKGROUND SYSTEM */}
      <div className="absolute inset-0">
        {/* Base Liquid Flow */}
        <motion.div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at ${chromeX}% ${chromeY}%, 
                rgba(255,255,255,0.2) 0%, 
                rgba(0,200,255,0.15) 25%, 
                rgba(255,0,150,0.1) 50%, 
                rgba(0,255,200,0.05) 75%, 
                transparent 100%
              )
            `,
            transform: `scale(${liquidScale})`,
            rotate: liquidRotate,
          }}
        />
        
        {/* Chrome Reflections */}
        <motion.div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              conic-gradient(from ${liquidRotate}deg at 30% 40%, 
                #ffff0015 0deg, 
                #00ffff25 90deg, 
                #ff00ff20 180deg, 
                #00ff0015 270deg, 
                #ffff0015 360deg
              )
            `,
            filter: 'blur(60px)',
          }}
        />
        
        {/* Data Pattern Overlay + Binary Streams */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          {/* Original Pattern */}
          <div 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
            className="absolute inset-0"
          />
          
          {/* Binary Data Streams */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-yellow-400/10 text-xs font-mono whitespace-nowrap"
              style={{
                left: `${(i * 8.33)}%`,
                top: 0,
                transform: 'rotate(-90deg)',
                transformOrigin: 'left top',
              }}
              animate={{
                y: ['-10%', '110%'],
                opacity: [0, 0.3, 0.8, 0.3, 0],
              }}
              transition={{
                duration: 15 + (i * 2),
                repeat: Infinity,
                delay: i * 1.2,
                ease: 'linear',
              }}
            >
              {Array.from({ length: 200 }, () => {
                const rand = Math.random()
                if (rand > 0.9) return 'GA4 '
                if (rand > 0.8) return 'ROI '
                if (rand > 0.7) return 'SEO '
                return Math.random() > 0.5 ? '1' : '0'
              }).join('')}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* HERO SECTION - Style Homepage */}
          <motion.section 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left: Visuel Métaphorique Consultation */}
              <motion.div 
                className="text-left relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {/* Visuel SVG Consultation Collaborative */}
                <div className="relative w-full h-96 flex items-center justify-center">
                  <svg viewBox="0 0 400 300" className="w-full h-full">
                    <defs>
                      <linearGradient id="consultation-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#FFDD00', stopOpacity: 0.8}} />
                        <stop offset="50%" style={{stopColor: '#00ffff', stopOpacity: 0.6}} />
                        <stop offset="100%" style={{stopColor: '#ff00ff', stopOpacity: 0.4}} />
                      </linearGradient>
                      
                      <radialGradient id="meeting-light" cx="50%" cy="50%">
                        <stop offset="0%" style={{stopColor: '#ffffff', stopOpacity: 0.3}} />
                        <stop offset="100%" style={{stopColor: 'transparent', stopOpacity: 0}} />
                      </radialGradient>
                    </defs>

                    {/* Table de réunion */}
                    <ellipse cx="200" cy="200" rx="120" ry="40" fill="url(#consultation-gradient)" opacity="0.6" />
                    
                    {/* Personnes en consultation */}
                    <g transform="translate(150, 120)">
                      {/* Expert OSOM */}
                      <circle cx="0" cy="0" r="25" fill="#FFDD00" opacity="0.8" />
                      <text x="0" y="5" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">OSOM</text>
                    </g>
                    
                    <g transform="translate(250, 120)">
                      {/* Dirigeant PME */}
                      <circle cx="0" cy="0" r="25" fill="#00ffff" opacity="0.8" />
                      <text x="0" y="5" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">CEO</text>
                    </g>

                    {/* Écrans/Documents partagés */}
                    <rect x="170" y="160" width="60" height="35" fill="url(#meeting-light)" rx="4" />
                    <text x="200" y="180" textAnchor="middle" fill="#FFDD00" fontSize="8">GA4 Data</text>
                    
                    {/* Lignes de connection/dialogue */}
                    <path d="M175,145 Q200,135 225,145" stroke="#FFDD00" strokeWidth="2" fill="none" opacity="0.6">
                      <animate attributeName="stroke-dasharray" values="0,20;10,20;20,20" dur="3s" repeatCount="indefinite"/>
                    </path>
                    
                    {/* Bulles d'idées animées */}
                    <circle cx="180" cy="100" r="6" fill="#00ffff" opacity="0.5">
                      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="220" cy="95" r="4" fill="#FFDD00" opacity="0.6">
                      <animate attributeName="opacity" values="0.5;1;0.5" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="200" cy="85" r="5" fill="#ff00ff" opacity="0.4">
                      <animate attributeName="opacity" values="0.2;0.7;0.2" dur="3s" repeatCount="indefinite"/>
                    </circle>

                    {/* Texte descriptif */}
                    <text x="200" y="270" textAnchor="middle" fill="#ffffff" fontSize="12" opacity="0.8">
                      Consultation collaborative personnalisée
                    </text>
                  </svg>
                </div>
              </motion.div>
              
              {/* Right: Contenu Narratif */}
              <motion.div
                className="text-left space-y-6"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  {dictionary.hero?.title || 'Parlons de votre projet'}
                  <span className="block text-yellow-400 font-bold">
                    {dictionary.hero?.title_highlight || 'digital'}
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  {dictionary.hero?.subtitle || dictionary.subtitle}
                </p>

                {/* Mini Case Study Card */}
                <motion.div 
                  className="bg-yellow-400/10 rounded-xl p-6 border border-yellow-400/30 backdrop-blur-sm mb-8"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  whileHover={{ 
                    borderColor: 'rgba(255,221,0,0.6)',
                    backgroundColor: 'rgba(255,221,0,0.15)',
                    scale: 1.02,
                  }}
                >
                  {dictionary.case_study && (
                    <>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-white font-bold">{dictionary.case_study.company}</span>
                        <motion.div
                          className="w-2 h-2 bg-green-500 rounded-full"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.7, 1, 0.7],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                          }}
                        />
                      </div>
                      
                      <div className="space-y-3 text-sm">
                        <div className="text-red-300">
                          <strong>Avant :</strong> {dictionary.case_study.before}
                        </div>
                        <div className="text-green-300">
                          <strong>Après :</strong> {dictionary.case_study.after}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-yellow-400/20">
                        <div className="text-yellow-400 text-sm italic">
                          "{dictionary.case_study.testimonial}"
                        </div>
                        <div className="text-gray-400 text-xs mt-2">
                          — {dictionary.case_study.author}
                        </div>
                      </div>
                    </>
                  )}
                </motion.div>

                <motion.button
                  onClick={() => setShowCalendly(true)}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/20"
                  style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                  whileHover={{ 
                    scale: 1.02,
                    y: -2,
                  }}
                  whileTap={{ scale: 0.98 }}
                  animate={{
                    boxShadow: [
                      '0 4px 20px rgba(255,221,0,0.3)',
                      '0 8px 30px rgba(255,221,0,0.4)',
                      '0 4px 20px rgba(255,221,0,0.3)'
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  {dictionary.cta_schedule}
                </motion.button>
              </motion.div>
            </div>
          </motion.section>

          {/* PROCESSUS CONSULTATION - Mini-récits */}
          <motion.section 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
                  <span className="text-yellow-400 text-sm font-medium tracking-wide">NOTRE MÉTHODE</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  {dictionary.process?.title || 'Notre Processus de Consultation'}
                </h2>
              </div>
              
              <div className="space-y-8">
                {/* Étape 1: Diagnostic quantitatif */}
                <motion.div
                  className="backdrop-blur-sm border border-cyan-400/20 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-500 relative overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center mb-4 relative z-10">
                    <div className="w-12 h-12 bg-cyan-400 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">01</span>
                    </div>
                    <h3 className="text-2xl font-light text-white" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                      {dictionary.process?.step1.title || 'Diagnostic quantitatif'}
                    </h3>
                  </div>
                  <div className="ml-16 relative">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {dictionary.process?.step1.description || 'Analyse de vos données pour identifier les opportunités.'}
                    </p>
                    <div className="flex gap-4 text-xs">
                      <div className="bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/30">
                        <span className="text-cyan-400">✓ Audit GA4</span>
                      </div>
                      <div className="bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/30">
                        <span className="text-cyan-400">✓ Search Console</span>
                      </div>
                      <div className="bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/30">
                        <span className="text-cyan-400">✓ Opportunités cachées</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Étape 2: Stratégie personnalisée */}
                <motion.div
                  className="backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-8 hover:border-yellow-400/40 transition-all duration-500 ml-8 relative overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center mb-4 relative z-10">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">02</span>
                    </div>
                    <h3 className="text-2xl font-light text-white" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                      {dictionary.process?.step2.title || 'Stratégie personnalisée'}
                    </h3>
                  </div>
                  <div className="ml-16 relative">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {dictionary.process?.step2.description || 'Plan d\'action adapté à votre situation.'}
                    </p>
                    <div className="flex gap-4 text-xs">
                      <div className="bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/30">
                        <span className="text-yellow-400">✓ Priorités ROI</span>
                      </div>
                      <div className="bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/30">
                        <span className="text-yellow-400">✓ Plan sur-mesure</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Étape 3: Performance mesurable */}
                <motion.div
                  className="backdrop-blur-sm border border-green-400/20 rounded-3xl p-8 hover:border-green-400/40 transition-all duration-500 ml-16 relative overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex items-center mb-4 relative z-10">
                    <div className="w-12 h-12 bg-green-400 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">03</span>
                    </div>
                    <h3 className="text-2xl font-light text-white" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                      {dictionary.process?.step3.title || 'Performance mesurable'}
                    </h3>
                  </div>
                  <div className="ml-16 relative">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {dictionary.process?.step3.description || 'Suivi des résultats en temps réel.'}
                    </p>
                    <div className="flex gap-4 text-xs">
                      <div className="bg-green-400/10 px-3 py-1 rounded-full border border-green-400/30">
                        <span className="text-green-400">✓ Dashboard temps réel</span>
                      </div>
                      <div className="bg-green-400/10 px-3 py-1 rounded-full border border-green-400/30">
                        <span className="text-green-400">✓ Transparence totale</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* CONTACT OPTIONS - Style Homepage Cards */}
          <motion.section 
            className="mb-20"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <motion.h2 
                  className="mb-16 leading-none text-center"
                  style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {/* Cascade d'animation avec chaque mot */}
                  <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
                    <motion.span 
                      className="text-3xl md:text-5xl text-cyan-400 font-light"
                      initial={{ opacity: 0, y: -50, rotate: -15 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        rotate: 0,
                        scale: [1, 1.05, 1]
                      }}
                      transition={{
                        opacity: { duration: 0.6, delay: 0.2 },
                        y: { duration: 0.8, delay: 0.2, type: 'spring', stiffness: 100 },
                        rotate: { duration: 0.8, delay: 0.2 },
                        scale: { 
                          duration: 4, 
                          repeat: Infinity, 
                          ease: 'easeInOut',
                          delay: 2
                        }
                      }}
                    >
                      c'est
                    </motion.span>
                    
                    <motion.span 
                      className="text-6xl md:text-9xl font-black text-yellow-400"
                      style={{
                        background: 'linear-gradient(135deg, #FFDD00 0%, #ffffff 40%, #00ffff 80%, #FFDD00 100%)',
                        backgroundSize: '400% 400%',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        filter: 'drop-shadow(0 0 30px rgba(255,221,0,0.7)) drop-shadow(0 0 50px rgba(0,255,255,0.4))',
                      }}
                      initial={{ opacity: 0, y: 50, scale: 0.5 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0, 
                        scale: 1,
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                      }}
                      transition={{
                        opacity: { duration: 0.6, delay: 0.6 },
                        y: { duration: 1, delay: 0.6, type: 'spring', stiffness: 80 },
                        scale: { duration: 1, delay: 0.6, type: 'spring', stiffness: 120 },
                        backgroundPosition: {
                          duration: 5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 1.5
                        }
                      }}
                    >
                      quoi
                    </motion.span>
                    
                    <motion.span 
                      className="text-4xl md:text-6xl text-purple-400 font-bold"
                      initial={{ opacity: 0, x: -50, rotate: 15 }}
                      animate={{ 
                        opacity: 1, 
                        x: 0, 
                        rotate: 0,
                        y: [0, -10, 0]
                      }}
                      transition={{
                        opacity: { duration: 0.6, delay: 1.0 },
                        x: { duration: 0.8, delay: 1.0, type: 'spring', stiffness: 100 },
                        rotate: { duration: 0.8, delay: 1.0 },
                        y: {
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 2.5
                        }
                      }}
                    >
                      comment
                    </motion.span>
                  </div>
                  
                  <motion.div className="mt-6">
                    <motion.span 
                      className="text-5xl md:text-7xl text-white font-extrabold"
                      style={{
                        filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.6))'
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{
                        opacity: { duration: 0.6, delay: 1.4 },
                        scale: { duration: 1, delay: 1.4, type: 'spring', stiffness: 150, damping: 8 },
                        rotate: {
                          duration: 6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 3
                        }
                      }}
                    >
                      ici ?
                    </motion.span>
                  </motion.div>
                </motion.h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                
                {/* Carte 1: Réserver sur le calendrier - MINIMALISME TOTAL */}
                <motion.div
                  className="bg-yellow-400/5 border border-yellow-400/30 rounded-2xl p-12 hover:bg-yellow-400/10 hover:border-yellow-400/50 transition-all duration-500 cursor-pointer group min-h-[400px] flex flex-col justify-between"
                  whileHover={{ scale: 1.01, y: -8 }}
                  onClick={() => setShowCalendly(true)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="flex-1 flex flex-col justify-center text-center">
                    <motion.h3 
                      className="text-3xl font-light text-white mb-6 leading-tight"
                      style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                    >
                      {dictionary.options?.direct.title || 'Prendre rendez-vous direct'}
                    </motion.h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md mx-auto">
                      {dictionary.options?.direct.description || 'Consultation directe avec un expert.'}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <motion.div 
                      className="text-yellow-400 font-semibold text-lg tracking-wide uppercase"
                      whileHover={{ scale: 1.02 }}
                      style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                    >
                      Voir le calendrier
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Carte 2: Contact par email - MINIMALISME TOTAL */}
                <motion.div
                  className="bg-cyan-400/5 border border-cyan-400/30 rounded-2xl p-12 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer group min-h-[400px] flex flex-col justify-between"
                  whileHover={{ scale: 1.01, y: -8 }}
                  onClick={() => setShowEmailModal(true)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="flex-1 flex flex-col justify-center text-center">
                    <motion.h3 
                      className="text-3xl font-light text-white mb-6 leading-tight"
                      style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                    >
                      {dictionary.options?.kit.title || 'Kit de contact'}
                    </motion.h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md mx-auto">
                      {dictionary.options?.kit.description || 'Documents et ressources pour préparer notre rencontre.'}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <motion.div 
                      className="text-cyan-400 font-semibold text-lg tracking-wide uppercase"
                      whileHover={{ scale: 1.02 }}
                      style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                    >
                      Recevoir mon kit
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Carte 3: Diagnostic automatique - MINIMALISME TOTAL */}
                <motion.div
                  className="bg-purple-400/5 border border-purple-400/30 rounded-2xl p-12 hover:bg-purple-400/10 hover:border-purple-400/50 transition-all duration-500 cursor-pointer group min-h-[400px] flex flex-col justify-between"
                  whileHover={{ scale: 1.01, y: -8 }}
                  onClick={() => window.open('/questionnaire', '_blank')}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <div className="flex-1 flex flex-col justify-center text-center">
                    <motion.h3 
                      className="text-3xl font-light text-white mb-6 leading-tight"
                      style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                    >
                      {dictionary.options?.questionnaire.title || 'Questionnaire automatique'}
                    </motion.h3>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-md mx-auto">
                      {dictionary.options?.questionnaire.description || 'Outil IA pour analyser vos besoins en quelques minutes.'}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <motion.div 
                      className="text-purple-400 font-semibold text-lg tracking-wide uppercase"
                      whileHover={{ scale: 1.02 }}
                      style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                    >
                      Démarrer le diagnostic
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* FORMULAIRE SECTION */}
          <motion.section 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <div className="max-w-2xl mx-auto">
              <div className="backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-8">

                {showCalendly ? (
                  <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
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
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-light text-white mb-2" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                        Prêt pour une consultation <span className="text-yellow-400 font-bold">stratégique</span> ?
                      </h3>
                      <p className="text-gray-400">Renseignez vos informations pour commencer</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                          type="text"
                          placeholder="Nom & Prénom"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                          required
                        />
                        <input
                          type="email"
                          placeholder="Email professionnel"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                          type="tel"
                          placeholder="Téléphone"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                        />
                        <input
                          type="text"
                          placeholder="Entreprise"
                          value={formData.company}
                          onChange={(e) => setFormData({...formData, company: e.target.value})}
                          className="bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-400 px-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300"
                        />
                      </div>
                      
                      <motion.button
                        type="submit"
                        className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/20"
                        style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                        whileHover={{ 
                          scale: 1.02,
                          y: -2,
                        }}
                        whileTap={{ scale: 0.98 }}
                        animate={{
                          boxShadow: [
                            '0 4px 20px rgba(255,221,0,0.3)',
                            '0 8px 30px rgba(255,221,0,0.4)',
                            '0 4px 20px rgba(255,221,0,0.3)'
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut'
                        }}
                      >
                        Programmer ma consultation
                      </motion.button>
                    </form>
                    
                    <div className="text-center mt-6">
                      <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                          <span>Données GA4 vérifiées</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                          <span>Résultats mesurables</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></div>
                          <span>100% confidentiel</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.section>

        </div>
      </div>

      {/* Email Modal */}
      <EmailModal 
        isOpen={showEmailModal} 
        onClose={() => setShowEmailModal(false)} 
      />
    </div>
  )
}

export default ContactPageClient