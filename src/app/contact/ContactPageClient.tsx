'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
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

  // LIQUID CHROME MAGIC ✨
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 })
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 })
  
  // Transformations liquides
  const liquidRotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const liquidScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 0.8])
  const liquidOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 0.8, 0.6, 0.9])
  
  // Chrome reflections
  const chromeX = useTransform(smoothMouseX, [-1000, 1000], [-100, 100])
  const chromeY = useTransform(smoothMouseY, [-1000, 1000], [-100, 100])

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
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)'
      }}
    >
      {/* LIQUID CHROME BACKGROUND MAGIC ✨ */}
      <div className="absolute inset-0">
        {/* Liquid Chrome Layer 1 - Base Flow */}
        <motion.div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `
              radial-gradient(circle at ${chromeX}% ${chromeY}%, 
                rgba(255,255,255,0.3) 0%, 
                rgba(0,200,255,0.2) 25%, 
                rgba(255,0,150,0.15) 50%, 
                rgba(0,255,200,0.1) 75%, 
                transparent 100%
              )
            `,
            transform: `scale(${liquidScale})`,
            rotate: liquidRotate,
          }}
        />
        
        {/* Liquid Chrome Layer 2 - Metallic Reflections */}
        <motion.div 
          className="absolute inset-0 opacity-60"
          style={{
            background: `
              conic-gradient(from ${liquidRotate}deg at 30% 40%, 
                #ff00ff22 0deg, 
                #00ffff44 90deg, 
                #ffff0033 180deg, 
                #ff004455 270deg, 
                #ff00ff22 360deg
              )
            `,
            filter: 'blur(40px)',
          }}
        />
        
        {/* Liquid Chrome Layer 3 - Dynamic Spots */}
        <motion.div 
          className="absolute top-20 left-20 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(0,255,255,0.2) 50%, transparent 100%)',
            filter: 'blur(60px)',
            x: chromeX,
            y: chromeY,
          }}
        />
        
        <motion.div 
          className="absolute bottom-32 right-32 w-80 h-80 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,0,255,0.3) 0%, rgba(255,255,0,0.15) 50%, transparent 100%)',
            filter: 'blur(50px)',
            x: useTransform(chromeX, (x) => -x * 0.7),
            y: useTransform(chromeY, (y) => -y * 0.5),
          }}
        />
        
        {/* Chrome Mesh Overlay */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%),
              linear-gradient(-45deg, transparent 40%, rgba(255,255,255,0.05) 50%, transparent 60%)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-4">
          
          {/* 1. Hero Asymétrique - DISTORTION SPATIALE */}
          <motion.section 
            className="mb-16 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              transform: `perspective(1000px) rotateX(${scrollYProgress.get() * 5}deg)`,
              filter: `blur(${scrollYProgress.get() * 2}px)`,
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left: 140x GRAND - HOLOGRAPHIC */}
              <motion.div 
                className="text-left relative"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                style={{
                  transform: `translateZ(${chromeX.get() * 0.1}px)`,
                }}
              >
                <motion.div 
                  className="text-8xl md:text-9xl font-bold mb-4 relative"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #00ffff 25%, #ff00ff 50%, #ffff00 75%, #ffffff 100%)',
                    backgroundSize: '400% 400%',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    filter: `drop-shadow(0 0 20px rgba(0,255,255,0.5)) drop-shadow(0 0 40px rgba(255,0,255,0.3))`,
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  140x
                  {/* Holographic shine overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)',
                      backgroundSize: '200% 200%',
                      mixBlendMode: 'overlay',
                    }}
                    animate={{
                      backgroundPosition: ['-100% -100%', '100% 100%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.div>
                
                <motion.div 
                  className="text-2xl mb-2"
                  style={{
                    background: 'linear-gradient(90deg, #ffffff 0%, #00ffff 50%, #ffffff 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    filter: 'drop-shadow(0 0 10px rgba(0,255,255,0.3))',
                  }}
                >
                  PLUS VIOLENT
                </motion.div>
                <motion.div 
                  className="text-sm mt-2"
                  style={{
                    color: 'rgba(255,255,255,0.7)',
                    filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.2))',
                  }}
                >
                  Culture Peinture: 688 vs 49 conversions 💀
                </motion.div>
              </motion.div>
              
              {/* Right: Titre + CTA - SPATIAL DISTORTION */}
              <motion.div
                className="text-left relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{
                  transform: `translateZ(${chromeY.get() * 0.15}px) rotateY(${chromeX.get() * 0.02}deg)`,
                }}
              >
                <motion.h1 
                  className="text-4xl md:text-6xl font-bold lowercase mb-6 relative"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    filter: 'drop-shadow(0 2px 10px rgba(255,255,255,0.2))',
                  }}
                >
                  consultation stratégie
                  <motion.span 
                    className="block"
                    style={{
                      background: 'linear-gradient(90deg, #00ffff 0%, #ffffff 50%, #ff00ff 100%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      color: 'transparent',
                      filter: 'drop-shadow(0 0 15px rgba(0,255,255,0.4))',
                    }}
                  >
                    digitale gratuite
                  </motion.span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl mb-8"
                  style={{
                    background: 'linear-gradient(90deg, #ffffff 0%, #cccccc 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    filter: 'drop-shadow(0 1px 5px rgba(255,255,255,0.1))',
                  }}
                >
                  30 minutes pour révéler votre potentiel de croissance
                </motion.p>

                {/* MAGNETIC BUTTON PROTOTYPE */}
                <motion.button
                  onClick={() => setShowCalendly(true)}
                  className="relative px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden group"
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                    color: '#000000',
                    transform: `translateZ(${chromeX.get() * 0.1}px)`,
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Liquid Chrome Button Background */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    style={{
                      background: 'linear-gradient(135deg, #00ffff 0%, #ff00ff 50%, #ffff00 100%)',
                      backgroundSize: '400% 400%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  
                  {/* Button Text */}
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Réserver ma consultation
                  </span>
                  
                  {/* Chrome Shine Effect */}
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.8) 50%, transparent 70%)',
                      backgroundSize: '200% 200%',
                    }}
                    animate={{
                      backgroundPosition: ['-100% -100%', '100% 100%'],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.section>

          {/* Funnel Section - LIQUID TRANSFORMATION */}
          <motion.section 
            className="mb-16 relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            style={{
              transform: `perspective(2000px) rotateX(${scrollYProgress.get() * 10}deg)`,
            }}
          >
            <div className="relative max-w-2xl mx-auto">
              {/* Funnel Visual Container - LIQUID CHROME */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6, duration: 0.8, type: "spring", stiffness: 100 }}
                style={{
                  transform: `translateZ(${chromeX.get() * 0.2}px) rotateY(${chromeY.get() * 0.01}deg)`,
                }}
              >
                {/* Top Level - Large - LIQUID CHROME */}
                <motion.div
                  className="relative rounded-t-3xl p-8 mb-4 shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateX: 5,
                    z: 100,
                  }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(0,255,255,0.3) 50%, rgba(255,0,255,0.2) 100%)',
                    backdropFilter: 'blur(20px)',
                    border: '2px solid rgba(255,255,255,0.3)',
                  }}
                >
                  {/* Liquid Chrome Overlay */}
                  <motion.div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `
                        radial-gradient(circle at ${chromeX.get() * 0.1 + 50}% ${chromeY.get() * 0.1 + 50}%, 
                          rgba(255,255,255,0.8) 0%, 
                          rgba(0,255,255,0.4) 30%, 
                          transparent 70%
                        )
                      `,
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.7, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <div className="text-center relative z-10">
                    <motion.h3 
                      className="text-xl font-bold mb-2"
                      style={{
                        background: 'linear-gradient(135deg, #000000 0%, #333333 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.3))',
                      }}
                    >
                      Votre Situation Actuelle
                    </motion.h3>
                    <motion.p 
                      className="text-slate-800"
                      style={{
                        filter: 'drop-shadow(0 1px 1px rgba(255,255,255,0.5))',
                      }}
                    >
                      Défis, objectifs, opportunités manquées
                    </motion.p>
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

                {/* Middle Level - Medium - CHROME REFLECTION */}
                <motion.div
                  className="relative rounded-2xl p-6 mb-4 mx-8 shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.0, duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateX: 3,
                    z: 50,
                  }}
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8) 0%, rgba(255,0,255,0.3) 50%, rgba(0,255,255,0.2) 100%)',
                    backdropFilter: 'blur(15px)',
                    border: '2px solid rgba(255,255,255,0.4)',
                  }}
                >
                  {/* Chrome Reflection */}
                  <motion.div
                    className="absolute inset-0 opacity-40"
                    style={{
                      background: `
                        linear-gradient(${liquidRotate.get()}deg, 
                          transparent 0%, 
                          rgba(255,255,255,0.6) 50%, 
                          transparent 100%
                        )
                      `,
                    }}
                  />
                  <div className="text-center relative z-10">
                    <motion.h3 
                      className="text-lg font-bold mb-2"
                      style={{
                        background: 'linear-gradient(135deg, #000000 0%, #444444 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.2))',
                      }}
                    >
                      Analyse & Stratégie
                    </motion.h3>
                    <motion.p 
                      className="text-slate-800"
                      style={{
                        filter: 'drop-shadow(0 1px 1px rgba(255,255,255,0.4))',
                      }}
                    >
                      Plan d'action personnalisé
                    </motion.p>
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

                {/* Bottom Level - Narrow - LIQUID GOLD */}
                <motion.div
                  className="relative rounded-b-3xl p-4 mx-16 shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.2, duration: 0.6, type: "spring", stiffness: 300, damping: 20 }}
                  whileHover={{ 
                    scale: 1.02,
                    rotateX: -3,
                    z: 25,
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #000000 0%, #333333 50%, #ffff00 100%)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255,255,0,0.5)',
                  }}
                >
                  {/* Liquid Gold Flow */}
                  <motion.div
                    className="absolute inset-0 opacity-50"
                    style={{
                      background: `
                        radial-gradient(ellipse at ${chromeX.get() * 0.05 + 50}% ${chromeY.get() * 0.05 + 50}%, 
                          rgba(255,255,0,0.8) 0%, 
                          rgba(255,215,0,0.4) 40%, 
                          transparent 80%
                        )
                      `,
                    }}
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                  <div className="text-center relative z-10">
                    <motion.h3 
                      className="text-lg font-bold mb-2"
                      style={{
                        background: 'linear-gradient(135deg, #ffff00 0%, #ffd700 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        color: 'transparent',
                        filter: 'drop-shadow(0 0 10px rgba(255,255,0,0.5))',
                      }}
                    >
                      Résultats Mesurables
                    </motion.h3>
                    <motion.p 
                      style={{
                        color: '#fff3cd',
                        filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.5))',
                      }}
                    >
                      ROI transparent et croissance
                    </motion.p>
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
                      <div className="text-black text-2xl font-bold">🚀</div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">LANCEMENT IMMDIAT</h3>
                    <p className="text-gray-400 text-sm">Transformation en direct</p>
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
                      <div className="text-black text-xl">⚡</div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">SIGNAL CHROME</h3>
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
                      <div className="text-black text-xl">🔮</div>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">SCAN QUANTIQUE</h3>
                    <p className="text-gray-400 text-sm">Diagnostic instantané</p>
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
                          placeholder="Identité Chrome 🤖"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="bg-white/40 backdrop-blur-sm border border-black/30 text-black placeholder-slate-700 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black shadow-inner"
                          required
                        />
                        <input
                          type="email"
                          placeholder="Signal d'Empire ⚡"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          className="bg-white/40 backdrop-blur-sm border border-black/30 text-black placeholder-slate-700 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black shadow-inner"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="tel"
                          placeholder="Hotline Chrome 📞"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="bg-white/40 backdrop-blur-sm border border-black/30 text-black placeholder-slate-700 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-black shadow-inner"
                        />
                        <input
                          type="text"
                          placeholder="Empire à Transformer 🏰"
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
                        🔥 INITIER LA DOMINATION CHROME
                      </motion.button>
                    </form>
                    
                    <p className="text-gray-400 text-sm mt-4">
                      Garantie chrome • Transformation assurée • Résultats liquides 💎
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