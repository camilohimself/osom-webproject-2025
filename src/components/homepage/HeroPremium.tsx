'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
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
              {/* Ligne 1: "Nous ne faisons pas que du" - petite taille */}
              <motion.div
                className="text-xl md:text-2xl font-light text-gray-300 mb-2"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Nous ne faisons pas que du
              </motion.div>
              
              {/* Ligne 2: "MARKETING" - très grande taille */}
              <motion.div
                className="text-7xl md:text-9xl font-black text-yellow-400 leading-none mb-4"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 30px rgba(251, 191, 36, 0.5)"
                }}
              >
                MARKETING
              </motion.div>
              
              {/* Ligne 3: "nous créons des" - taille moyenne */}
              <motion.div
                className="text-3xl md:text-4xl font-light text-white mb-2"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                nous créons des
              </motion.div>
              
              {/* Ligne 4: "HISTOIRES" - grande taille avec effet */}
              <motion.div
                className="text-6xl md:text-8xl font-bold text-white leading-none mb-3 relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                <span className="relative">
                  HISTOIRES
                  {/* Effet de brillance */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ 
                      duration: 2, 
                      delay: 2,
                      repeat: Infinity, 
                      repeatDelay: 5 
                    }}
                  />
                </span>
              </motion.div>
              
              {/* Ligne 5: "qui" - petite taille italique */}
              <motion.div
                className="text-lg md:text-xl font-light text-gray-400 italic mb-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                qui
              </motion.div>
              
              {/* Ligne 6: "VENDENT" - très grande taille avec animation */}
              <motion.div
                className="text-8xl md:text-9xl font-black text-green-400 leading-none relative"
                initial={{ opacity: 0, rotateX: 90 }}
                animate={{ opacity: 1, rotateX: 0 }}
                transition={{ duration: 1.2, delay: 1.2 }}
                whileHover={{ 
                  scale: 1.02,
                  color: "#10B981",
                  textShadow: "0 0 40px rgba(16, 185, 129, 0.6)"
                }}
              >
                VENDENT
                {/* Particules flottantes autour du mot */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-green-400 rounded-full"
                    style={{
                      left: `${10 + i * 15}%`,
                      top: `${20 + (i % 2) * 60}%`
                    }}
                    animate={{
                      y: [-10, -30, -10],
                      opacity: [0.3, 0.8, 0.3],
                      scale: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: 1.5 + i * 0.2
                    }}
                  />
                ))}
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
          
          {/* Right: Metaphorical Visual - Alpine Digital Ecosystem */}
          <motion.div
            variants={chartVariants}
            transition={{ duration: 1.2, ease: [0.25, 0.25, 0.25, 0.75], delay: 0.5 }}
            className="relative"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative w-full h-96 flex items-center justify-center"
            >
              {/* Visuel SVG Écosystème Alpin Connecté */}
              <svg viewBox="0 0 500 400" className="w-full h-full">
                <defs>
                  {/* Gradients pour l'écosystème */}
                  <linearGradient id="mountain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#374151', stopOpacity: 0.9}} />
                    <stop offset="50%" style={{stopColor: '#1f2937', stopOpacity: 0.7}} />
                    <stop offset="100%" style={{stopColor: '#111827', stopOpacity: 0.8}} />
                  </linearGradient>
                  
                  <radialGradient id="digital-light" cx="50%" cy="30%">
                    <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 0.9}} />
                    <stop offset="50%" style={{stopColor: '#f59e0b', stopOpacity: 0.6}} />
                    <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 0.2}} />
                  </radialGradient>

                  <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 0.8}} />
                    <stop offset="50%" style={{stopColor: '#06d6a0', stopOpacity: 0.6}} />
                    <stop offset="100%" style={{stopColor: '#8b5cf6', stopOpacity: 0.4}} />
                  </linearGradient>
                </defs>

                {/* Chaîne alpine en arrière-plan */}
                <path 
                  d="M0,280 L100,200 L180,240 L250,180 L320,220 L420,160 L500,200 L500,400 L0,400 Z" 
                  fill="url(#mountain-gradient)" 
                  opacity="0.7"
                />
                
                {/* Sommets secondaires */}
                <path 
                  d="M50,250 L120,190 L200,230 L270,170 L350,210 L450,150 L500,180" 
                  fill="none" 
                  stroke="#374151" 
                  strokeWidth="2" 
                  opacity="0.5"
                />

                {/* Phare Digital Central */}
                <g transform="translate(220, 120)">
                  <rect x="0" y="40" width="20" height="60" fill="url(#digital-light)" rx="2" />
                  <rect x="-5" y="30" width="30" height="15" fill="#fbbf24" rx="4" />
                  <polygon points="-10,30 10,10 30,30" fill="#f59e0b" />
                  
                  {/* Rayonnement Digital Animé */}
                  <g opacity="0.8">
                    <path d="M10,25 L-30,5 L-25,0 L10,20 Z" fill="url(#digital-light)">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="0 10 25; 360 10 25"
                        dur="12s"
                        repeatCount="indefinite"
                      />
                    </path>
                    <path d="M10,25 L50,5 L45,0 L10,20 Z" fill="url(#digital-light)" opacity="0.6">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="90 10 25; 450 10 25"
                        dur="12s"
                        repeatCount="indefinite"
                      />
                    </path>
                  </g>
                </g>

                {/* Réseau de connexions IA */}
                <g opacity="0.6">
                  {/* Nœuds connectés représentant l'écosystème */}
                  <circle cx="120" cy="250" r="4" fill="#10b981">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="180" cy="200" r="3" fill="#06d6a0">
                    <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="300" cy="240" r="4" fill="#8b5cf6">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="350" cy="180" r="3" fill="#06d6a0">
                    <animate attributeName="opacity" values="0.5;1;0.5" dur="3.5s" repeatCount="indefinite"/>
                  </circle>

                  {/* Lignes de connexion animées */}
                  <path d="M230,145 Q120,200 120,250" fill="none" stroke="url(#connection-gradient)" strokeWidth="2" opacity="0.5">
                    <animate attributeName="stroke-dasharray" values="0,100;50,100;100,100" dur="4s" repeatCount="indefinite"/>
                  </path>
                  <path d="M230,145 Q180,170 180,200" fill="none" stroke="url(#connection-gradient)" strokeWidth="2" opacity="0.4">
                    <animate attributeName="stroke-dasharray" values="0,80;40,80;80,80" dur="3s" repeatCount="indefinite"/>
                  </path>
                  <path d="M230,145 Q300,190 300,240" fill="none" stroke="url(#connection-gradient)" strokeWidth="2" opacity="0.6">
                    <animate attributeName="stroke-dasharray" values="0,120;60,120;120,120" dur="5s" repeatCount="indefinite"/>
                  </path>
                  <path d="M230,145 Q350,160 350,180" fill="none" stroke="url(#connection-gradient)" strokeWidth="2" opacity="0.4">
                    <animate attributeName="stroke-dasharray" values="0,90;45,90;90,90" dur="3.5s" repeatCount="indefinite"/>
                  </path>
                </g>

                {/* Éléments Data flottants */}
                <g opacity="0.7">
                  <rect x="80" y="280" width="12" height="8" fill="#fbbf24" rx="2">
                    <animateTransform
                      attributeName="transform" 
                      type="translate"
                      values="0,0; 0,-20; 0,0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect x="320" y="290" width="10" height="6" fill="#10b981" rx="1">
                    <animateTransform
                      attributeName="transform" 
                      type="translate"
                      values="0,0; 0,-15; 0,0"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect x="380" y="270" width="8" height="5" fill="#8b5cf6" rx="1">
                    <animateTransform
                      attributeName="transform" 
                      type="translate"
                      values="0,0; 0,-25; 0,0"
                      dur="7s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </g>

                {/* Labels écosystème */}
                <text x="120" y="270" fill="#10b981" fontSize="8" fontFamily="Cera PRO" textAnchor="middle" opacity="0.8">MARKETING IA</text>
                <text x="180" y="220" fill="#06d6a0" fontSize="8" fontFamily="Cera PRO" textAnchor="middle" opacity="0.8">DATA SCIENCE</text>
                <text x="300" y="260" fill="#8b5cf6" fontSize="8" fontFamily="Cera PRO" textAnchor="middle" opacity="0.8">DEV WEB</text>
                <text x="350" y="200" fill="#06d6a0" fontSize="8" fontFamily="Cera PRO" textAnchor="middle" opacity="0.8">AUTOMATION</text>
              </svg>
              
              {/* Texte explicatif sous le visuel */}
              <div className="absolute bottom-0 left-0 right-0 text-center">
                <p className="text-sm text-gray-400 bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 mx-4">
                  Écosystème digital intégré guidant vos prospects vers votre expertise
                </p>
              </div>
            </motion.div>
            
            {/* Floating accent elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-yellow-400/20 blur-sm"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-cyan-400/10 blur-md"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroPremium