'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'
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

  // Timeline state
  const timelineRef = useRef<HTMLDivElement>(null)
  const [currentTimelineStep, setCurrentTimelineStep] = useState(0)
  
  const timelineSteps = [
    { title: "Audit & Stratégie", time: "Semaine 1", value: "Analyse complète", color: "yellow", description: "Diagnostic approfondi de votre écosystème digital actuel" },
    { title: "Optimisation Tech", time: "Semaine 2-3", value: "Site + Analytics", color: "white", description: "Mise en place des fondations techniques solides" },
    { title: "Campagnes Lancées", time: "Semaine 4", value: "SEO + Ads", color: "yellow", description: "Déploiement des premières actions marketing" },
    { title: "Premiers Résultats", time: "Mois 2", value: "+150% leads", color: "white", description: "Métriques positives et ajustements en temps réel" },
    { title: "Scaling & Growth", time: "Mois 3+", value: "ROI optimisé", color: "yellow", description: "Accélération et expansion vers de nouveaux canaux" }
  ]

  // Simple scroll tracking for timeline
  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) return

    const handleScroll = () => {
      const scrollTop = timeline.scrollTop
      const scrollHeight = timeline.scrollHeight - timeline.clientHeight
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      
      const newStep = Math.floor((progress / 100) * timelineSteps.length)
      setCurrentTimelineStep(Math.min(newStep, timelineSteps.length - 1))
    }

    timeline.addEventListener('scroll', handleScroll)
    return () => timeline.removeEventListener('scroll', handleScroll)
  }, [timelineSteps.length])

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
              
              {/* Left: Timeline Interactive */}
              <motion.div 
                className="text-left relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {/* Timeline Component */}
                <div className="relative w-full bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-3xl p-8 border border-green-500/20 h-96 overflow-y-auto scrollbar-hide"
                  style={{
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                  ref={timelineRef}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-green-400 font-bold text-lg">Votre Parcours Growth</h3>
                  </div>
                  
                  {/* Timeline Container */}
                  <div className="relative">
                    {/* Timeline Line - OSOM Colors */}
                    <motion.div 
                      className="absolute left-4 top-0 w-1 rounded-full overflow-hidden bg-black/60 border border-gray-700/20"
                      initial={{ height: 0 }}
                      animate={{ height: '280px' }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    >
                      {/* Progression OSOM Jaune */}
                      <motion.div 
                        className="w-full bg-gradient-to-b from-yellow-400 via-yellow-300 to-white rounded-full"
                        initial={{ height: '0%' }}
                        style={{
                          height: `${((currentTimelineStep + 1) / timelineSteps.length) * 100}%`,
                          boxShadow: '0 0 15px rgba(255, 221, 0, 0.8), 0 0 30px rgba(255, 221, 0, 0.4)'
                        }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    </motion.div>
                    
                    {/* Timeline Steps */}
                    <div className="space-y-6">
                      {timelineSteps.map((step, i) => (
                        <motion.div
                          key={i}
                          className="relative flex items-center"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ 
                            opacity: i <= currentTimelineStep ? 1 : 0.3, 
                            x: 0,
                            scale: i === currentTimelineStep ? 1.05 : 1
                          }}
                          transition={{ 
                            opacity: { duration: 0.5 },
                            x: { delay: i * 0.2, duration: 0.6 },
                            scale: { duration: 0.3 }
                          }}
                        >
                          {/* Step Circle */}
                          <motion.div 
                            className={`w-8 h-8 rounded-full flex items-center justify-center text-black font-bold text-sm z-10 border-2 ${
                              step.color === 'yellow' 
                                ? 'bg-yellow-400 border-yellow-300'
                                : 'bg-white border-gray-200'
                            } ${
                              i === currentTimelineStep 
                                ? step.color === 'yellow'
                                  ? 'shadow-lg shadow-yellow-400/50'
                                  : 'shadow-lg shadow-white/50'
                                : ''
                            }`}
                            initial={{ scale: 0 }}
                            animate={{ 
                              scale: 1,
                            }}
                            transition={{ 
                              scale: { delay: i * 0.2 + 0.2, duration: 0.4, type: "spring" },
                            }}
                          >
                            {i < currentTimelineStep ? '✓' : i + 1}
                          </motion.div>
                          
                          {/* Step Content */}
                          <motion.div 
                            className={`ml-4 bg-black/20 rounded-lg p-4 flex-1 border border-gray-700/30 ${
                              i === currentTimelineStep 
                                ? step.color === 'yellow' 
                                  ? 'border-yellow-400/50 bg-yellow-400/5' 
                                  : 'border-white/50 bg-white/5'
                                : ''
                            }`}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="text-white font-semibold text-lg">{step.title}</div>
                            <div className="text-gray-300 text-sm mb-2">{step.time}</div>
                            <div className={`${step.color === 'yellow' ? 'text-yellow-400' : 'text-white'} text-sm font-mono mb-2`}>
                              {step.value}
                            </div>
                            
                            {/* Description visible sur étape active */}
                            <AnimatePresence>
                              {i === currentTimelineStep && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: 'auto' }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="text-gray-300 text-sm italic border-t border-gray-600/30 pt-2 mt-2"
                                >
                                  {step.description}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
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
                  30 minutes pour découvrir votre
                  <span className="block text-yellow-400 font-bold">
                    potentiel de croissance digitale
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  Échangeons sur vos défis business et découvrons ensemble 
                  comment notre expertise peut transformer votre présence en ligne en véritable machine à prospects.
                </p>


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
                
                {/* Carte 1: Contact WhatsApp Direct */}
                <motion.div
                  className="bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-400/40 rounded-2xl p-8 hover:border-green-400/60 transition-all duration-500 cursor-pointer group min-h-[400px] flex flex-col justify-between"
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => window.open('https://wa.me/41791289549', '_blank')}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  <div className="flex-1 flex flex-col justify-center text-center">
                    {/* WhatsApp Icon */}
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488"/>
                        </svg>
                      </div>
                    </div>
                    
                    <motion.h3 
                      className="text-2xl font-light text-white mb-4"
                      style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                    >
                      Contact WhatsApp Direct
                    </motion.h3>
                    
                    <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-md mx-auto">
                      Échangez directement avec nous sur WhatsApp pour une réponse rapide et personnalisée.
                    </p>
                    
                    <div className="bg-green-500/20 rounded-lg p-3 mb-4">
                      <p className="text-green-400 font-mono text-lg">
                        +41 79 128 95 49
                      </p>
                      <p className="text-green-300/70 text-xs mt-1">
                        Réponse en 1h selon horaires d'ouverture
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <motion.div 
                      className="text-green-400 font-semibold text-sm tracking-wide uppercase"
                      whileHover={{ scale: 1.02 }}
                      style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                    >
                      Ouvrir WhatsApp
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Carte 2: Kit de Contact */}
                <motion.div
                  className="bg-cyan-400/5 border border-cyan-400/30 rounded-2xl p-8 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all duration-500 cursor-pointer group min-h-[400px] flex flex-col justify-between"
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => setShowEmailModal(true)}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  <div className="flex-1 flex flex-col justify-center text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </div>
                    </div>
                    
                    <motion.h3 
                      className="text-2xl font-light text-white mb-4"
                      style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                    >
                      Kit de Contact
                    </motion.h3>
                    
                    <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-md mx-auto">
                      Documents et ressources pour préparer efficacement notre rencontre stratégique.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <motion.div 
                      className="text-cyan-400 font-semibold text-sm tracking-wide uppercase"
                      whileHover={{ scale: 1.02 }}
                      style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                    >
                      Recevoir mon kit
                    </motion.div>
                  </div>
                </motion.div>
                
                {/* Carte 3: Questionnaire intelligent */}
                <motion.div
                  className="bg-purple-400/5 border border-purple-400/30 rounded-2xl p-8 hover:bg-purple-400/10 hover:border-purple-400/50 transition-all duration-500 cursor-pointer group min-h-[400px] flex flex-col justify-between"
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => window.open('/questionnaire', '_blank')}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <div className="flex-1 flex flex-col justify-center text-center">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                    </div>
                    
                    <motion.h3 
                      className="text-2xl font-light text-white mb-4"
                      style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                    >
                      Questionnaire intelligent
                    </motion.h3>
                    
                    <p className="text-gray-300 text-base leading-relaxed mb-6 max-w-md mx-auto">
                      Outil avancé pour analyser vos besoins digitaux en quelques minutes seulement.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <motion.div 
                      className="text-purple-400 font-semibold text-sm tracking-wide uppercase"
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