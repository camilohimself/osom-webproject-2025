'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { MagneticButton } from '@/components/ui'
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
              
              {/* Left: Métrique 140x - SPECTACULAIRE */}
              <motion.div 
                className="text-left relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                {/* Binary Rain Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-yellow-400/20 text-xs font-mono"
                      style={{
                        left: `${i * 15}%`,
                        top: 0,
                      }}
                      animate={{
                        y: ['0%', '200%'],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: 'linear',
                      }}
                    >
                      {Array.from({ length: 20 }, () => Math.random() > 0.5 ? '1' : '0').join('')}
                    </motion.div>
                  ))}
                </div>

                {/* Main Counter Container */}
                <div className="relative z-10">
                  <motion.div 
                    className="text-8xl md:text-9xl font-bold mb-4 relative"
                    style={{
                      fontFamily: 'Cera PRO, Inter, sans-serif',
                    }}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1, type: 'spring', stiffness: 100 }}
                  >
                    {/* Glowing Background Effect */}
                    <motion.div
                      className="absolute inset-0 blur-3xl opacity-40"
                      style={{
                        background: 'linear-gradient(135deg, #FFDD00, #00ffff, #ff00ff)',
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                    
                    {/* Counter with Spectacular Animation */}
                    <motion.span
                      style={{
                        background: 'linear-gradient(135deg, #FFDD00 0%, #ffffff 50%, #00ffff 100%)',
                        backgroundSize: '300% 300%',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        filter: 'drop-shadow(0 0 30px rgba(255,221,0,0.5)) drop-shadow(0 0 60px rgba(0,255,255,0.3))',
                      }}
                      animate={{
                        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      <AnimatedCounter
                        from={0}
                        to={140}
                        duration={3}
                        delay={1}
                        suffix="x"
                      />
                    </motion.span>
                    
                    {/* Orbit Effects */}
                    <motion.div
                      className="absolute -inset-4 pointer-events-none"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    >
                      <div className="absolute top-0 left-1/2 w-3 h-3 bg-yellow-400 rounded-full opacity-60 blur-sm" />
                      <div className="absolute bottom-0 right-1/4 w-2 h-2 bg-cyan-400 rounded-full opacity-80 blur-sm" />
                      <div className="absolute left-0 top-1/3 w-4 h-4 bg-white rounded-full opacity-40 blur-md" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.div 
                    className="text-2xl mb-4 font-light"
                    style={{ 
                      fontFamily: 'Cera PRO, Inter, sans-serif',
                      background: 'linear-gradient(90deg, #ffffff 0%, #ffdd00 50%, #ffffff 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.2))',
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                  >
                    plus efficace
                  </motion.div>
                  
                  {/* Stats Box with Pulse */}
                  <motion.div 
                    className="bg-yellow-400/10 rounded-xl p-4 border border-yellow-400/30 backdrop-blur-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2, duration: 0.6 }}
                    whileHover={{ 
                      borderColor: 'rgba(255,221,0,0.6)',
                      backgroundColor: 'rgba(255,221,0,0.15)',
                      scale: 1.02,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-bold">Culture Peinture</span>
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
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-yellow-400 font-bold text-lg">
                          <AnimatedCounter from={0} to={688} duration={2} delay={2.5} />
                        </div>
                        <div className="text-gray-300 text-xs">Conversions SEO</div>
                      </div>
                      <div className="text-center">
                        <div className="text-gray-400 font-bold text-lg">
                          <AnimatedCounter from={0} to={49} duration={2} delay={2.7} />
                        </div>
                        <div className="text-gray-300 text-xs">Conversions Payantes</div>
                      </div>
                    </div>
                    <div className="text-center mt-3 pt-3 border-t border-yellow-400/20">
                      <div className="text-yellow-400 text-xs font-medium">✓ Données GA4 vérifiées • 6 mois</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Right: Titre + CTA */}
              <motion.div
                className="text-left"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-light lowercase text-white mb-6 leading-tight" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  consultation stratégie
                  <span className="block text-yellow-400 font-bold">
                    digitale gratuite
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  30 minutes pour révéler votre potentiel de croissance data-driven
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
                  Réserver ma consultation
                </motion.button>
              </motion.div>
            </div>
          </motion.section>

          {/* DATA-DRIVEN FUNNEL - Style Homepage */}
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
                  <span className="text-yellow-400 text-sm font-medium tracking-wide">PROCESSUS DATA-DRIVEN</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  De l'analyse à la <span className="text-yellow-400 font-bold">performance</span>
                </h2>
              </div>
              
              <div className="space-y-8">
                {/* Étape 1: Diagnostic */}
                <motion.div
                  className="backdrop-blur-sm border border-cyan-400/20 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-500 relative overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Binary Background Effect */}
                  <div className="absolute top-4 right-4 opacity-10 pointer-events-none">
                    <motion.div
                      className="text-cyan-400 text-xs font-mono"
                      animate={{
                        opacity: [0.1, 0.3, 0.1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {Array.from({ length: 50 }, () => Math.random() > 0.5 ? '1' : '0').join(' ')}
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center mb-4 relative z-10">
                    <div className="w-12 h-12 bg-cyan-400 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">01</span>
                    </div>
                    <h3 className="text-2xl font-light text-white" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                      Diagnostic <span className="text-cyan-400 font-bold">quantitatif</span>
                    </h3>
                  </div>
                  <div className="ml-16 relative">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Analyse technique GA4, Search Console, performances actuelles. 
                      Identification des fuites de conversions et opportunités cachées.
                    </p>
                    <div className="flex gap-4 text-xs">
                      <div className="bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/30">
                        <span className="text-cyan-400">✓ GA4 Deep Dive</span>
                      </div>
                      <div className="bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/30">
                        <span className="text-cyan-400">✓ Search Console</span>
                      </div>
                      <div className="bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/30">
                        <span className="text-cyan-400">✓ Conversion Audit</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Étape 2: Stratégie */}
                <motion.div
                  className="backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-8 hover:border-yellow-400/40 transition-all duration-500 ml-8 relative overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Data Visualization Effect */}
                  <div className="absolute top-4 right-4 opacity-15 pointer-events-none">
                    <motion.div className="grid grid-cols-6 gap-1">
                      {[...Array(24)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-yellow-400 rounded-sm"
                          animate={{
                            opacity: [0.1, 1, 0.1],
                            scale: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.1,
                            ease: 'easeInOut',
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center mb-4 relative z-10">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">02</span>
                    </div>
                    <h3 className="text-2xl font-light text-white" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                      Stratégie <span className="text-yellow-400 font-bold">personnalisée</span>
                    </h3>
                  </div>
                  <div className="ml-16 relative">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Plan d'action basé sur vos métriques spécifiques. 
                      Priorisations par impact ROI et faisabilité technique.
                    </p>
                    <div className="flex gap-4 text-xs">
                      <div className="bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/30">
                        <span className="text-yellow-400">✓ ROI Prioritization</span>
                      </div>
                      <div className="bg-yellow-400/10 px-3 py-1 rounded-full border border-yellow-400/30">
                        <span className="text-yellow-400">✓ Technical Roadmap</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Étape 3: Performance */}
                <motion.div
                  className="backdrop-blur-sm border border-purple-400/20 rounded-3xl p-8 hover:border-purple-400/40 transition-all duration-500 ml-16 relative overflow-hidden"
                  whileHover={{ scale: 1.01 }}
                >
                  {/* Performance Metrics Animation */}
                  <div className="absolute top-4 right-4 opacity-15 pointer-events-none">
                    <motion.div className="text-purple-400 text-xs font-mono">
                      {['+11.3%', '+68.6%', '+140x', 'ROI+'].map((metric, i) => (
                        <motion.div
                          key={i}
                          className="mb-1"
                          animate={{
                            opacity: [0.1, 1, 0.1],
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.5,
                            ease: 'easeInOut',
                          }}
                        >
                          {metric}
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center mb-4 relative z-10">
                    <div className="w-12 h-12 bg-purple-400 rounded-full mr-4 flex items-center justify-center">
                      <span className="text-black font-bold text-lg">03</span>
                    </div>
                    <h3 className="text-2xl font-light text-white" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                      Performance <span className="text-purple-400 font-bold">mesurable</span>
                    </h3>
                  </div>
                  <div className="ml-16 relative">
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Résultats trackés en temps réel. Optimisations continues 
                      basées sur les données de performance.
                    </p>
                    <div className="flex gap-4 text-xs">
                      <div className="bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/30">
                        <span className="text-purple-400">✓ Real-time Dashboard</span>
                      </div>
                      <div className="bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/30">
                        <span className="text-purple-400">✓ KPI Tracking</span>
                      </div>
                      <div className="bg-purple-400/10 px-3 py-1 rounded-full border border-purple-400/30">
                        <span className="text-purple-400">✓ Continuous Optimization</span>
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
                <h2 className="text-3xl font-light text-white mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  Comment <span className="text-yellow-400 font-bold">commencer</span> ?
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                {/* Option 1: RDV Direct */}
                <motion.div
                  className="backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-8 hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500 cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setShowCalendly(true)}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-8 h-8 bg-black rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Consultation directe</h3>
                    <p className="text-gray-400 text-sm mb-4">Calendrier temps réel</p>
                    <div className="text-yellow-400 font-bold text-sm">30 minutes • Gratuit</div>
                  </div>
                </motion.div>
                
                {/* Option 2: Email */}
                <motion.div
                  className="backdrop-blur-sm border border-cyan-400/20 rounded-3xl p-8 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => window.location.href = 'mailto:contact@osom.ch?subject=Consultation stratégie digitale&body=Bonjour OSOM,%0D%0A%0D%0AJe souhaite discuter de mon projet...'}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-8 h-8 bg-black rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Contact email</h3>
                    <p className="text-gray-400 text-sm mb-4">contact@osom.ch</p>
                    <div className="text-cyan-400 font-bold text-sm">Réponse & lt; 24h</div>
                  </div>
                </motion.div>
                
                {/* Option 3: Questionnaire */}
                <motion.div
                  className="backdrop-blur-sm border border-purple-400/20 rounded-3xl p-8 hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-400/10 transition-all duration-500 cursor-pointer group"
                  whileHover={{ scale: 1.02 }}
                  onClick={() => window.open('/questionnaire', '_blank')}
                >
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="w-8 h-8 bg-black rounded-full"></div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">Diagnostic automatisé</h3>
                    <p className="text-gray-400 text-sm mb-4">Questionnaire intelligent</p>
                    <div className="text-purple-400 font-bold text-sm">Analyse instantanée</div>
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
    </div>
  )
}

export default ContactPageClient