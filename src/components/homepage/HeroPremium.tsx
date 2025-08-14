'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { GraphiqueLinear } from '@/components/ui'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { MagneticButton } from '@/components/ui'

interface HeroPremiumProps {
  dictionary: {
    hero: {
      badge: string
      title_line1: string
      title_focus: string
      title_line2: string
      title_impact: string
      description: string
      cta_primary: string
      cta_secondary: string
      trust_indicators: {
        conversions: string
        engagement: string
        roi: string
      }
    }
    charts: {
      performance: {
        title: string
        subtitle: string
        primary_metric: {
          label: string
          value: string
        }
        secondary_metric: {
          label: string
          value: string
        }
        improvement: {
          label: string
          value: string
        }
      }
    }
  }
}

const HeroPremium = ({ dictionary }: HeroPremiumProps) => {
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoupeActive, setIsLoupeActive] = useState(false)
  const [focusedService, setFocusedService] = useState<string | null>(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const svgRef = useRef<HTMLDivElement>(null)

  // Loupe premium settings
  const loupeSize = 180
  const zoomLevel = 2.8

  // Services data with business KPIs
  const services = {
    'marketing': { 
      x: 120, y: 250, 
      name: 'MARKETING IA', 
      subtitle: 'Claude × Analytics',
      kpi: '25% CTR',
      detail: 'vs 2-3% industrie',
      color: '#10b981',
      description: 'Intelligence artificielle pour campagnes qui convertissent'
    },
    'data': { 
      x: 180, y: 200, 
      name: 'DATA SCIENCE', 
      subtitle: 'Insights × ROI',
      kpi: '688 conversions',
      detail: 'révélées en 6 mois',
      color: '#06d6a0',
      description: 'Transformation des données en opportunités business'
    },
    'dev': { 
      x: 300, y: 240, 
      name: 'DEV WEB', 
      subtitle: 'Next.js × Performance',
      kpi: '< 2s loading',
      detail: 'garantie performance',
      color: '#8b5cf6',
      description: 'Sites web haute performance qui ne ralentissent jamais'
    },
    'automation': { 
      x: 350, y: 180, 
      name: 'AUTOMATION', 
      subtitle: 'CRM × Workflow',
      kpi: '+78% efficacité',
      detail: '24h/24 sans pause',
      color: '#06d6a0',
      description: 'Automatisation intelligente de vos processus business'
    }
  }

  // Détecter desktop
  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  // Gérer le mouvement de la souris
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!svgRef.current || !isDesktop) return
    
    const rect = svgRef.current.getBoundingClientRect()
    
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })

    // Détecter survol d'un service
    const tolerance = 25
    let hoveredService = null
    
    Object.entries(services).forEach(([key, service]) => {
      const serviceX = (service.x / 500) * rect.width
      const serviceY = (service.y / 400) * rect.height
      const distance = Math.sqrt(
        Math.pow(e.clientX - rect.left - serviceX, 2) + 
        Math.pow(e.clientY - rect.top - serviceY, 2)
      )
      
      if (distance < tolerance) {
        hoveredService = key
      }
    })
    
    setFocusedService(hoveredService)
  }, [isDesktop])

  const handleSvgMouseEnter = () => {
    if (isDesktop) {
      setIsLoupeActive(true)
    }
  }

  const handleSvgMouseLeave = () => {
    setIsLoupeActive(false)
    setFocusedService(null)
  }

  useEffect(() => {
    if (isLoupeActive) {
      document.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isLoupeActive, handleMouseMove])

  // Animation variants
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

  const badgeVariants = {
    hidden: { opacity: 0, x: -20, scale: 0.8 },
    visible: { opacity: 1, x: 0, scale: 1 }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const chartVariants = {
    hidden: { opacity: 0, x: 50, scale: 0.9 },
    visible: { opacity: 1, x: 0, scale: 1 }
  }

  // Enhanced tooltip data for benefits
  const metricTooltips = {
    conversions: {
      title: "Accompagnement Humain Continu",
      details: "Relation de confiance • Expertise locale",
      highlight: "Votre Success Manager Dédié",
      benefits: {
        support: "Support personnel",
        expertise: "Expertise locale",
        transparency: "Communication transparente",
        availability: "Disponibilité garantie"
      },
      context: "Un interlocuteur unique qui comprend vos enjeux business et vous accompagne à chaque étape",
      proof: "Satisfaction client • Relation long terme"
    },
    engagement: {
      title: "Méthodologie Basée sur les Données",
      details: "Décisions éclairées • Résultats mesurables",
      highlight: "Chaque Action Justifiée par la Data",
      benefits: {
        analysis: "Analyse approfondie",
        strategy: "Stratégie data-driven",
        optimization: "Optimisation continue",
        reporting: "Reporting transparent"
      },
      context: "Fini les approximations : chaque recommandation s'appuie sur l'analyse de vos données réelles",
      proof: "Dashboard temps réel • Méthodes éprouvées"
    },
    roi: {
      title: "Investissement Rentable & Mesurable",
      details: "ROI transparent • Croissance durable",
      highlight: "Visibilité Complète sur Votre Retour",
      benefits: {
        transparency: "Transparence totale",
        measurement: "Mesure précise",
        growth: "Croissance durable",
        value: "Valeur ajoutée"
      },
      context: "Investissement justifié avec suivi précis des résultats et impact mesurable sur votre croissance",
      proof: "Rapports détaillés • Métriques business"
    }
  }

  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black/50 opacity-60" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left: Content */}
          <div>
            {/* Badge with urgency/scarcity */}
            <motion.div 
              className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8"
              variants={badgeVariants}
              transition={{ duration: 0.6, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              {/* Main badge */}
              <div className="flex items-center">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-yellow-400 mr-3"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-yellow-400 text-sm font-medium tracking-wide">
                  {dictionary.hero.badge}
                </span>
              </div>
              
              {/* Urgency/Scarcity indicator */}
              <motion.div 
                className="flex items-center bg-red-500/20 px-3 py-1 rounded-full border border-red-500/30"
                animate={{
                  backgroundColor: ["rgba(239, 68, 68, 0.2)", "rgba(239, 68, 68, 0.3)", "rgba(239, 68, 68, 0.2)"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-red-500 mr-2"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-red-400 text-xs font-semibold tracking-wide">
                  PLUS QUE 2 PLACES CE MOIS
                </span>
              </motion.div>
            </motion.div>
            
            {/* HERO CRÉATIF AUDACIEUX - Jeux Typographiques Dynamiques */}
            <motion.div 
              className="mb-8 leading-tight" 
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              variants={titleVariants}
              transition={{ duration: 1, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              {/* Message principal FORT */}
              <motion.div
                className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Nous sommes <span className="text-yellow-400 font-black">OSOM, l'agence créative</span> qui transforme vos données en <span className="text-yellow-400 font-black">pixels qui vendent</span>.
              </motion.div>
              
              {/* Message secondaire plus petit */}
              <motion.div
                className="text-xl md:text-2xl font-light text-gray-300 leading-relaxed mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Assistés par l'intelligence artificielle, chaque métrique devient conversion.
              </motion.div>
            </motion.div>
              
            {/* Signature créative en bas */}
            <motion.div
              className="text-sm md:text-base text-purple-400 font-medium mt-6 flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              <motion.div 
                className="w-8 h-0.5 bg-purple-400 mr-3"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 1, delay: 2 }}
              />
              Agence Créative × Intelligence Artificielle
              <motion.div 
                className="w-8 h-0.5 bg-purple-400 ml-3"
                initial={{ width: 0 }}
                animate={{ width: 32 }}
                transition={{ duration: 1, delay: 2.2 }}
              />
            </motion.div>
            
            {/* Description Créative */}
            <motion.div 
              className="mb-12 max-w-2xl" 
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              variants={itemVariants}
            >
              <p className="text-xl text-gray-300 leading-relaxed mb-4">
                <span className="text-yellow-400 font-semibold">25% de taux de clic</span> vs <span className="line-through text-gray-500">2-3% industrie</span> ? 
                <br />Parce que nos <span className="text-green-400 font-semibold">histoires captivantes</span> touchent l'émotion 
                avant de convaincre par la logique.
              </p>
              
              <motion.div 
                className="text-lg text-gray-400 italic pl-4 border-l-2 border-purple-400/30"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2.5, duration: 0.8 }}
              >
                "L'IA amplifie notre créativité, l'humain guide l'âme de vos projets"
              </motion.div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-12"
              variants={itemVariants}
              transition={{ duration: 0.8, ease: [0.25, 0.25, 0.25, 0.75] }}
            >
              <MagneticButton
                href="/contact"
                variant="primary"
                className="w-full sm:w-auto text-lg px-8 py-4 min-h-[44px]"
              >
                {dictionary.hero.cta_primary}
              </MagneticButton>
              
              <MagneticButton
                href="/realisations"
                variant="secondary"
                className="w-full sm:w-auto text-lg px-8 py-4 min-h-[44px]"
              >
                {dictionary.hero.cta_secondary}
              </MagneticButton>
            </motion.div>
            
            {/* Trust Indicators with Tooltips */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-gray-400 text-sm"
              variants={itemVariants}
            >
              {Object.entries(dictionary.hero.trust_indicators).map(([key, text], index) => (
                <motion.div
                  key={key}
                  className="flex items-center relative cursor-pointer"
                  onHoverStart={() => setHoveredMetric(key)}
                  onHoverEnd={() => setHoveredMetric(null)}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                >
                  <motion.div 
                    className={`w-2 h-2 rounded-full mr-2 ${
                      key === 'conversions' ? 'bg-green-500' :
                      key === 'engagement' ? 'bg-cyan-400' : 'bg-yellow-400'
                    }`}
                    animate={{
                      scale: hoveredMetric === key ? [1, 1.3, 1] : 1,
                      opacity: hoveredMetric === key ? [0.8, 1, 0.8] : 0.8
                    }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className={hoveredMetric === key ? 'text-white' : ''}>
                    {text}
                  </span>
                  
                  {/* Ultra-Premium Tooltip with Animated Counters */}
                  {hoveredMetric === key && metricTooltips[key as keyof typeof metricTooltips] && (
                    <motion.div
                      className="absolute bottom-full left-0 mb-3 p-4 sm:p-6 bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-md rounded-2xl border border-yellow-400/40 shadow-2xl min-w-72 sm:min-w-96 max-w-sm sm:max-w-none z-20"
                      initial={{ opacity: 0, y: 15, scale: 0.85 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 25,
                        duration: 0.3 
                      }}
                    >
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-cyan-400/10 rounded-2xl blur-sm" />
                      
                      <div className="relative">
                        {/* Header */}
                        <div className="flex items-center mb-4">
                          <div className="w-3 h-3 rounded-full bg-yellow-400 mr-3 animate-pulse" />
                          <div className="text-yellow-400 font-bold text-base">
                            {metricTooltips[key as keyof typeof metricTooltips].title}
                          </div>
                        </div>

                        {/* Main Highlight */}
                        <div className="text-white font-semibold mb-4 text-lg">
                          {metricTooltips[key as keyof typeof metricTooltips].highlight}
                        </div>

                        {/* Benefits Display */}
                        {key === 'conversions' && (
                          <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gradient-to-r from-green-400/10 to-yellow-400/10 rounded-xl">
                            <div className="space-y-2">
                              <div className="flex items-center text-green-400">
                                <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                                <div className="text-sm font-medium">{metricTooltips.conversions.benefits.support}</div>
                              </div>
                              <div className="flex items-center text-green-400">
                                <div className="w-2 h-2 rounded-full bg-green-400 mr-2"></div>
                                <div className="text-sm font-medium">{metricTooltips.conversions.benefits.expertise}</div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center text-yellow-400">
                                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                                <div className="text-sm font-medium">{metricTooltips.conversions.benefits.transparency}</div>
                              </div>
                              <div className="flex items-center text-yellow-400">
                                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                                <div className="text-sm font-medium">{metricTooltips.conversions.benefits.availability}</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {key === 'engagement' && (
                          <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-xl">
                            <div className="space-y-2">
                              <div className="flex items-center text-cyan-400">
                                <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                                <div className="text-sm font-medium">{metricTooltips.engagement.benefits.analysis}</div>
                              </div>
                              <div className="flex items-center text-cyan-400">
                                <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                                <div className="text-sm font-medium">{metricTooltips.engagement.benefits.strategy}</div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center text-blue-400">
                                <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                                <div className="text-sm font-medium">{metricTooltips.engagement.benefits.optimization}</div>
                              </div>
                              <div className="flex items-center text-blue-400">
                                <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                                <div className="text-sm font-medium">{metricTooltips.engagement.benefits.reporting}</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {key === 'roi' && (
                          <div className="grid grid-cols-2 gap-4 mb-4 p-4 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-xl">
                            <div className="space-y-2">
                              <div className="flex items-center text-yellow-400">
                                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                                <div className="text-sm font-medium">{metricTooltips.roi.benefits.transparency}</div>
                              </div>
                              <div className="flex items-center text-yellow-400">
                                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-2"></div>
                                <div className="text-sm font-medium">{metricTooltips.roi.benefits.measurement}</div>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center text-orange-400">
                                <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
                                <div className="text-sm font-medium">{metricTooltips.roi.benefits.growth}</div>
                              </div>
                              <div className="flex items-center text-orange-400">
                                <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
                                <div className="text-sm font-medium">{metricTooltips.roi.benefits.value}</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Context */}
                        <div className="text-gray-300 text-sm mb-3 leading-relaxed">
                          {metricTooltips[key as keyof typeof metricTooltips].context}
                        </div>

                        {/* Proof */}
                        <div className="flex items-center justify-between pt-3 border-t border-gray-700">
                          <div className="text-gray-400 text-xs">
                            {metricTooltips[key as keyof typeof metricTooltips].proof}
                          </div>
                          <div className="text-xs text-gray-500">
                            {metricTooltips[key as keyof typeof metricTooltips].details}
                          </div>
                        </div>
                      </div>

                      {/* Enhanced Arrow */}
                      <div className="absolute top-full left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-yellow-400/40" />
                      <div className="absolute top-full left-8 mt-1 w-0 h-0 border-l-6 border-r-6 border-t-6 border-transparent border-t-black/95" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Right: Alpine Digital Explorer - Interactive Ecosystem */}
          <motion.div
            variants={chartVariants}
            transition={{ duration: 1.2, ease: [0.25, 0.25, 0.25, 0.75], delay: 0.5 }}
            className="relative"
          >
            <div 
              ref={svgRef}
              className="relative w-full h-96 rounded-2xl overflow-visible"
              onMouseEnter={handleSvgMouseEnter}
              onMouseLeave={handleSvgMouseLeave}
              style={{
                cursor: isDesktop && isLoupeActive ? 'none' : 'default'
              }}
            >
              {/* Alpine SVG Ecosystem */}
              <svg viewBox="0 0 500 400" className="w-full h-full">
                <defs>
                  {/* Gradients Premium */}
                  <linearGradient id="mountain-premium" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#374151', stopOpacity: 0.9}} />
                    <stop offset="50%" style={{stopColor: '#1f2937', stopOpacity: 0.7}} />
                    <stop offset="100%" style={{stopColor: '#111827', stopOpacity: 0.8}} />
                  </linearGradient>
                  
                  <radialGradient id="digital-beacon" cx="50%" cy="30%">
                    <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#f59e0b', stopOpacity: 0.8}} />
                    <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 0.4}} />
                  </radialGradient>

                  <linearGradient id="connection-flow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 0.9}} />
                    <stop offset="50%" style={{stopColor: '#06d6a0', stopOpacity: 0.7}} />
                    <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 0.5}} />
                  </linearGradient>

                  {/* Service Glows */}
                  <filter id="service-glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Alpine Background */}
                <path 
                  d="M0,280 L100,200 L180,240 L250,180 L320,220 L420,160 L500,200 L500,400 L0,400 Z" 
                  fill="url(#mountain-premium)" 
                  opacity="0.8"
                />
                
                {/* Secondary peaks */}
                <path 
                  d="M50,250 L120,190 L200,230 L270,170 L350,210 L450,150 L500,180" 
                  fill="none" 
                  stroke="#374151" 
                  strokeWidth="2" 
                  opacity="0.6"
                />

                {/* Central Digital Beacon - Enhanced with OSOM Logo */}
                <g transform="translate(220, 120)">
                  <rect x="0" y="40" width="20" height="60" fill="url(#digital-beacon)" rx="2" />
                  <rect x="-5" y="30" width="30" height="15" fill="#fbbf24" rx="4" />
                  
                  {/* OSOM "O" stylisé au sommet */}
                  <g transform="translate(10, 15)">
                    {/* Cercle extérieur OSOM */}
                    <circle cx="0" cy="0" r="8" fill="#FFDD00" stroke="#514747" strokeWidth="1.5" />
                    {/* Point central caractéristique */}
                    <circle cx="0" cy="0" r="3" fill="#514747" />
                    {/* Petit accent blanc */}
                    <circle cx="-2" cy="-2" r="1" fill="#FFFFFF" opacity="0.8" />
                  </g>
                  
                  {/* Beacon Pulse */}
                  <circle cx="10" cy="25" r="5" fill="#fbbf24" opacity="0.6">
                    <animate attributeName="r" values="5;15;5" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Rotating Light Beams */}
                  <g opacity="0.7">
                    <path d="M10,25 L-40,5 L-35,0 L10,20 Z" fill="url(#digital-beacon)">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="0 10 25; 360 10 25"
                        dur="15s"
                        repeatCount="indefinite"
                      />
                    </path>
                    <path d="M10,25 L60,5 L55,0 L10,20 Z" fill="url(#digital-beacon)" opacity="0.8">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="90 10 25; 450 10 25"
                        dur="15s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>
                </g>

                {/* Data Flow Connections - Animated */}
                <g opacity="0.8">
                  {Object.entries(services).map(([key, service]) => (
                    <g key={key}>
                      <path 
                        d={`M230,145 Q${service.x-20},${service.y-30} ${service.x},${service.y}`} 
                        fill="none" 
                        stroke="url(#connection-flow)" 
                        strokeWidth="3"
                        opacity={focusedService === key ? "1" : "0.6"}
                      >
                        <animate 
                          attributeName="stroke-dasharray" 
                          values="0,100;50,100;100,100" 
                          dur="4s" 
                          repeatCount="indefinite"
                        />
                      </path>
                      
                      {/* Data Particles flowing */}
                      <circle r="2" fill="#fbbf24">
                        <animateMotion dur="3s" repeatCount="indefinite">
                          <path d={`M230,145 Q${service.x-20},${service.y-30} ${service.x},${service.y}`}/>
                        </animateMotion>
                        <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"/>
                      </circle>
                    </g>
                  ))}
                </g>

                {/* Service Nodes - Enhanced */}
                {Object.entries(services).map(([key, service]) => (
                  <g key={key}>
                    {/* Glow effect when focused */}
                    {focusedService === key && (
                      <circle 
                        cx={service.x} 
                        cy={service.y} 
                        r="20" 
                        fill={service.color} 
                        opacity="0.2"
                        filter="url(#service-glow)"
                      >
                        <animate attributeName="r" values="20;25;20" dur="2s" repeatCount="indefinite"/>
                      </circle>
                    )}
                    
                    {/* Main Service Node */}
                    <circle 
                      cx={service.x} 
                      cy={service.y} 
                      r="8" 
                      fill={service.color} 
                      stroke={focusedService === key ? "#ffffff" : service.color} 
                      strokeWidth="2"
                      style={{
                        filter: focusedService === key ? 'brightness(1.3)' : 'none',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <animate 
                        attributeName="opacity" 
                        values="0.7;1;0.7" 
                        dur="3s" 
                        repeatCount="indefinite"
                      />
                    </circle>
                    
                    {/* Service Label */}
                    <text 
                      x={service.x} 
                      y={service.y + 25} 
                      fill={service.color} 
                      fontSize="10" 
                      fontFamily="Cera PRO" 
                      textAnchor="middle" 
                      fontWeight="700"
                      style={{
                        filter: focusedService === key ? 'brightness(1.3)' : 'none'
                      }}
                    >
                      {service.name}
                    </text>
                    
                    {/* Service Subtitle */}
                    <text 
                      x={service.x} 
                      y={service.y + 37} 
                      fill={service.color} 
                      fontSize="7" 
                      fontFamily="Cera PRO" 
                      textAnchor="middle" 
                      opacity="0.8"
                    >
                      {service.subtitle}
                    </text>
                  </g>
                ))}
                
                {/* Caption */}
                <text x="250" y="385" fill="#9ca3af" fontSize="12" fontFamily="Cera PRO" textAnchor="middle" opacity="0.8">
                  Écosystème digital intégré guidant vos prospects vers votre expertise
                </text>
              </svg>

              {/* ALPINE MAGNIFIER PREMIUM */}
              <AnimatePresence>
                {isLoupeActive && isDesktop && (
                  <motion.div
                    className="fixed pointer-events-none z-50"
                    style={{
                      left: (svgRef.current?.getBoundingClientRect().left || 0) + mousePosition.x - loupeSize / 2,
                      top: (svgRef.current?.getBoundingClientRect().top || 0) + mousePosition.y - loupeSize / 2,
                      width: loupeSize,
                      height: loupeSize,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.95, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    {/* Swiss Premium Glass Effect */}
                    <div 
                      className="absolute inset-0 rounded-full overflow-hidden"
                      style={{
                        background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%)',
                        backdropFilter: 'blur(0.5px)',
                        border: '3px solid rgba(255, 221, 0, 0.8)',
                        boxShadow: `
                          0 0 20px rgba(255, 221, 0, 0.4),
                          inset 0 0 20px rgba(255, 255, 255, 0.1)
                        `
                      }}
                    >
                      {/* Magnified SVG Content */}
                      <svg 
                        viewBox={`${(mousePosition.x / (svgRef.current?.offsetWidth || 1)) * 500 - 60} ${(mousePosition.y / (svgRef.current?.offsetHeight || 1)) * 400 - 48} 120 96`}
                        className="w-full h-full"
                        style={{ 
                          filter: 'brightness(1.4) contrast(1.3) saturate(1.2)',
                          transform: `scale(${zoomLevel})`,
                          transformOrigin: 'center'
                        }}
                      >
                        {/* Magnified content with same structure */}
                        <defs>
                          <linearGradient id="mountain-zoom" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{stopColor: '#374151', stopOpacity: 0.9}} />
                            <stop offset="50%" style={{stopColor: '#1f2937', stopOpacity: 0.7}} />
                            <stop offset="100%" style={{stopColor: '#111827', stopOpacity: 0.8}} />
                          </linearGradient>
                          
                          <radialGradient id="beacon-zoom" cx="50%" cy="30%">
                            <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 1}} />
                            <stop offset="50%" style={{stopColor: '#f59e0b', stopOpacity: 0.8}} />
                            <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 0.4}} />
                          </radialGradient>

                          <linearGradient id="flow-zoom" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 0.9}} />
                            <stop offset="50%" style={{stopColor: '#06d6a0', stopOpacity: 0.7}} />
                            <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 0.5}} />
                          </linearGradient>
                        </defs>

                        <path d="M0,280 L100,200 L180,240 L250,180 L320,220 L420,160 L500,200 L500,400 L0,400 Z" fill="url(#mountain-zoom)" opacity="0.8"/>
                        
                        <g transform="translate(220, 120)">
                          <rect x="0" y="40" width="20" height="60" fill="url(#beacon-zoom)" rx="2" />
                          <rect x="-5" y="30" width="30" height="15" fill="#fbbf24" rx="4" />
                          <polygon points="-10,30 10,10 30,30" fill="#f59e0b" />
                        </g>

                        {Object.entries(services).map(([key, service]) => (
                          <g key={`zoom-${key}`}>
                            <path 
                              d={`M230,145 Q${service.x-20},${service.y-30} ${service.x},${service.y}`} 
                              fill="none" 
                              stroke="url(#flow-zoom)" 
                              strokeWidth="4"
                            />
                            <circle cx={service.x} cy={service.y} r="10" fill={service.color} stroke="#ffffff" strokeWidth="2"/>
                            <text x={service.x} y={service.y + 28} fill={service.color} fontSize="12" fontFamily="Cera PRO" textAnchor="middle" fontWeight="700">
                              {service.name}
                            </text>
                            <text x={service.x} y={service.y + 42} fill={service.color} fontSize="8" fontFamily="Cera PRO" textAnchor="middle">
                              {service.subtitle}
                            </text>
                          </g>
                        ))}
                      </svg>
                    </div>
                    
                    {/* Premium Glass Reflection */}
                    <div 
                      className="absolute top-2 left-2 right-8 bottom-8 rounded-full"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 30%, transparent 60%)',
                        pointerEvents: 'none'
                      }}
                    />
                    
                    {/* Swiss Precision Crosshair */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-px bg-yellow-400 opacity-80"></div>
                      <div className="absolute w-px h-4 bg-yellow-400 opacity-80"></div>
                      <div className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60"></div>
                    </div>

                    {/* Service Info dans la loupe */}
                    {focusedService && (
                      <motion.div
                        className="absolute bottom-2 left-2 right-2 bg-black/90 backdrop-blur-sm rounded-lg p-2 text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="text-yellow-400 font-bold text-xs mb-1">
                          {services[focusedService as keyof typeof services].name}
                        </div>
                        <div className="text-green-400 font-bold text-sm">
                          {services[focusedService as keyof typeof services].kpi}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {services[focusedService as keyof typeof services].detail}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Service Focus Tooltip - Hors loupe uniquement */}
              <AnimatePresence>
                {focusedService && isDesktop && !isLoupeActive && (
                  <motion.div
                    className="fixed pointer-events-none z-40 bg-black/95 backdrop-blur-md rounded-xl border border-yellow-400/50 p-4 shadow-2xl"
                    style={{
                      left: (svgRef.current?.getBoundingClientRect().left || 0) + mousePosition.x + 30,
                      top: (svgRef.current?.getBoundingClientRect().top || 0) + mousePosition.y - 80,
                      maxWidth: '280px'
                    }}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="text-yellow-400 font-bold text-lg mb-2">
                      {services[focusedService as keyof typeof services].name}
                    </div>
                    <div className="text-white text-sm mb-3">
                      {services[focusedService as keyof typeof services].description}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-green-400 font-bold text-xl">
                          {services[focusedService as keyof typeof services].kpi}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {services[focusedService as keyof typeof services].detail}
                        </div>
                      </div>
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: services[focusedService as keyof typeof services].color }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroPremium