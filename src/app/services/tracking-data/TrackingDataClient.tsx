'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

// Custom Hero Section - Data Forensics × Claude Intelligence
const CustomHeroSection = () => {
  const [dataStream, setDataStream] = useState('')
  const [recoveredSessions, setRecoveredSessions] = useState(0)
  
  useEffect(() => {
    const generateDataStream = () => {
      const events = ['GA4_EVENT', 'UTM_TRACK', 'SESSION_ID', 'CONVERSION', 'ATTRIBUTION']
      const stream = []
      for (let i = 0; i < 30; i++) {
        stream.push(`${events[Math.floor(Math.random() * events.length)]}_${Math.floor(Math.random() * 9999)}`)
      }
      return stream.join(' • ')
    }
    
    const interval = setInterval(() => {
      setDataStream(generateDataStream())
    }, 3000)
    
    // Animate counter
    const counterInterval = setInterval(() => {
      setRecoveredSessions(prev => {
        if (prev < 14171) {
          return prev + Math.floor(Math.random() * 500) + 100
        }
        return 14171
      })
    }, 100)
    
    return () => {
      clearInterval(interval)
      clearInterval(counterInterval)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-purple-900">
      {/* Data Stream Background */}
      <div className="absolute inset-0 opacity-20">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.4 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
          className="text-purple-400 font-mono text-xs leading-relaxed p-4 whitespace-nowrap overflow-hidden"
        >
          {dataStream}
        </motion.div>
      </div>

      {/* Prismatic Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 30% 70%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
              'radial-gradient(circle at 70% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)'
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Top - Lost Sessions Counter */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-block bg-black/60 backdrop-blur-lg border border-purple-400/30 rounded-2xl p-8"
          >
            <div className="text-red-400 text-sm font-medium mb-2">SESSIONS PERDUES DÉTECTÉES</div>
            <motion.div
              key={recoveredSessions}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-6xl font-black text-purple-400 mb-2"
            >
              {recoveredSessions.toLocaleString()}
            </motion.div>
            <div className="text-gray-400 text-sm">'Unassigned' → Attribution Complète</div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Human Forensics */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-2xl font-light text-gray-300 tracking-wide"
              >
                DATA FORENSICS HUMAIN
              </motion.h2>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="space-y-2"
              >
                <div className="text-purple-400 text-lg font-medium">● GA4 Configuration Expert</div>
                <div className="text-purple-400 text-lg font-medium">● GTM Debugging Master</div>
                <div className="text-purple-400 text-lg font-medium">● Attribution Investigation</div>
                <div className="text-purple-400 text-lg font-medium">● 14,171 Sessions Récupérées</div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="text-gray-400 text-sm max-w-md leading-relaxed"
              >
                Investigation technique obsessionnelle • Configuration chirurgicale • 
                Audit forensics approfondi • ROI invisible révélé
              </motion.div>
            </div>

            {/* Forensics Tools */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-black/40 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4">
                <div className="text-purple-400 text-2xl font-bold">100%</div>
                <div className="text-gray-300 text-sm">Visibilité ROI</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4">
                <div className="text-purple-400 text-2xl font-bold">200+</div>
                <div className="text-gray-300 text-sm">Jours Analysés</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Claude Intelligence */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="text-2xl font-light text-gray-300 tracking-wide text-right"
              >
                CLAUDE DATA INTELLIGENCE
              </motion.h2>
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="space-y-2 text-right"
              >
                <div className="text-cyan-400 text-lg font-medium">● Pattern Recognition Advanced</div>
                <div className="text-cyan-400 text-lg font-medium">● Anomaly Detection Smart</div>
                <div className="text-cyan-400 text-lg font-medium">● Attribution Modeling AI</div>
                <div className="text-cyan-400 text-lg font-medium">● 94% Data Accuracy Achieved</div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.3 }}
                className="text-gray-400 text-sm max-w-md leading-relaxed text-right ml-auto"
              >
                Intelligence comportementale • Prédiction attribution • 
                Analyse multidimensionnelle • Insights automatisés
              </motion.div>
            </div>

            {/* AI Analytics */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4">
                <div className="text-cyan-400 text-2xl font-bold">94%</div>
                <div className="text-gray-300 text-sm">Data Accuracy</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4">
                <div className="text-cyan-400 text-2xl font-bold">91%</div>
                <div className="text-gray-300 text-sm">Event Precision</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Center Data Flow Symbol */}
        <motion.div
          initial={{ scale: 0, rotate: 180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, delay: 1.6, type: "spring", stiffness: 80 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="w-28 h-28 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400 flex items-center justify-center">
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              className="text-4xl font-bold text-black"
            >
              ⚡
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom - Cascade Typography */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="text-center mt-20 space-y-4"
        >
          <motion.div
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_auto]"
            style={{
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            data forensics × claude intelligence
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="text-xl text-gray-400 font-light tracking-wide"
          >
            L'alliance révolutionnaire entre investigation forensics et intelligence artificielle Claude
          </motion.p>

          {/* Live Data Recovery Display - Carousel */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.4 }}
            className="mt-8"
          >
            <DataCarousel />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Data Carousel Component with Auto-rotation and Navigation
const DataCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  const slides = [
    {
      value: "14,171",
      label: "Sessions révélées",
      color: "text-purple-400",
      description: "Attribution multi-touch GA4 permet de voir l'impact réel de chaque canal marketing sur vos conversions."
    },
    {
      value: "+280%",
      label: "ROI opportunités",
      color: "text-cyan-400",
      description: "Identification des patterns cachés pour révéler les opportunités d'optimisation Business Intelligence."
    },
    {
      value: "7,500 CHF",
      label: "Forensics premium",
      color: "text-green-400",
      description: "Setup professionnel complet avec formation équipe et support intelligence 3 mois inclus."
    }
  ]

  // Auto-rotation every 5 seconds (pause on hover)
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
      }, 5000)
      return () => clearInterval(interval)
    }
  }, [isHovered, slides.length])

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Display */}
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-4"
      >
        <div className={`text-5xl lg:text-6xl font-black ${slides[currentSlide].color}`}>
          {slides[currentSlide].value}
        </div>
        <div className="text-lg text-gray-300 font-medium">
          {slides[currentSlide].label}
        </div>
        <div className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
          {slides[currentSlide].description}
        </div>
      </motion.div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-3 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-purple-400 scale-125'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {!isHovered && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-purple-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            key={currentSlide}
          />
        </div>
      )}
    </div>
  )
}

export default CustomHeroSection