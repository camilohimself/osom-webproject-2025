'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ServicePageMobile } from '@/components/services/ServicePageMobile'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

export default function CreationSiteWebPage() {
  const [selectedProject, setSelectedProject] = useState('vitrine')
  const [selectedPrice, setSelectedPrice] = useState('growth')
  const [currentStep, setCurrentStep] = useState(1)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [expandedStep, setExpandedStep] = useState<number | null>(null)
  const [hoveredStep, setHoveredStep] = useState<number | null>(null)

  // Optimisation scroll OSOM + Timeline tracking
  useEffect(() => {
    // Smooth scroll CSS pour toute la page
    document.documentElement.style.scrollBehavior = 'smooth'
    document.body.style.scrollBehavior = 'smooth'

    // Optimisation performance scroll OSOM
    const style = document.createElement('style')
    style.textContent = `
      * {
        scroll-behavior: smooth;
      }
      html {
        scroll-padding-top: 100px;
      }
      .scroll-smooth {
        -webkit-overflow-scrolling: touch;
      }
      /* Optimisation GPU pour scroll fluide */
      .motion-div, motion-div {
        will-change: transform, opacity;
        transform: translateZ(0);
      }
      /* Amélioration performance sections */
      section {
        contain: style layout;
      }
      /* Smooth scrolling pour tous les navigateurs */
      @media (prefers-reduced-motion: no-preference) {
        html {
          scroll-behavior: smooth;
        }
      }
    `
    document.head.appendChild(style)

    // Scroll tracking pour timeline - CORRIGÉ OSOM
    const handleScroll = () => {
      const timelineSection = document.querySelector('.timeline-section')
      if (!timelineSection) return

      const rect = timelineSection.getBoundingClientRect()
      const sectionTop = window.scrollY + rect.top
      const sectionHeight = rect.height
      const scrollTop = window.scrollY

      // Calculer progression relative à la section timeline
      const progressInSection = Math.max(0, Math.min(1,
        (scrollTop - sectionTop + window.innerHeight * 0.5) / (sectionHeight * 0.8)
      ))

      setScrollProgress(progressInSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      document.head.removeChild(style)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  
  // Projets du studio avec émojis pour simplicité
  const studioProjects = [
    {
      id: 'vitrine',
      name: 'Site vitrine express',
      client: 'PME locale',
      preview: 'WEB',
      before: 'Aucune présence en ligne',
      after: '50+ leads/mois',
      time: '5 jours',
      tech: 'Next.js + SEO'
    },
    {
      id: 'ecommerce',
      name: 'Boutique en ligne',
      client: 'Artisan Valaisan',
      preview: 'SHOP',
      before: 'Vente locale uniquement',
      after: '3x chiffre affaires',
      time: '3 semaines',
      tech: 'React + Stripe'
    },
    {
      id: 'webapp',
      name: 'Application métier',
      client: 'Cabinet médical',
      preview: 'APP',
      before: 'Gestion manuelle',
      after: '10h économisées/sem',
      time: '6 semaines',
      tech: 'Dashboard + API'
    }
  ]
  
  // Nouveau pricing simplifié
  const pricingOptions = [
    {
      id: 'express',
      name: 'EXPRESS',
      price: '1,500',
      currency: 'CHF',
      time: '5 jours',
      description: 'Site vitrine professionnel',
      features: [
        '5 pages optimisées',
        'Design moderne responsive',
        'SEO de base inclus',
        'Formulaire contact'
      ],
      ideal: 'Idéal pour démarrer rapidement'
    },
    {
      id: 'growth',
      name: 'GROWTH',
      price: '4,500',
      currency: 'CHF',
      time: '45 jours',
      description: 'Site complet avec stratégie',
      features: [
        'Pages illimitées',
        'SEO avancé + contenus',
        'Analytics dashboard',
        'Intégrations métier',
        'Formation équipe'
      ],
      ideal: 'Notre recommandation',
      popular: true
    },
    {
      id: 'custom',
      name: 'SUR MESURE',
      price: 'Sur devis',
      currency: '',
      time: 'À définir',
      description: 'Projet spécifique',
      features: [
        'Architecture custom',
        'Fonctionnalités avancées',
        'Équipe dédiée',
        'Support premium'
      ],
      ideal: 'Pour projets complexes'
    }
  ]

  // Process timeline - OSOM QUALITY EXPANDABLE
  const processSteps = [
    {
      id: 1,
      name: 'AUDIT TECHNIQUE',
      desc: 'Analyse concurrentielle + Architecture SEO personnalisée',
      day: 'J1-3',
      detail: 'GA4 setup, mots-clés prioritaires, wireframes UX data-driven',
      expandedContent: {
        tools: ['Google Analytics 4', 'SEMrush Pro', 'Screaming Frog', 'Figma'],
        deliverables: [
          'Rapport audit concurrentiel (15 pages)',
          'Stratégie mots-clés (50+ termes ciblés)',
          'Architecture site optimisée SEO',
          'Wireframes UX avec heatmap predictions'
        ],
        timeline: '72h maximum',
        outcome: 'Blueprint complet pour dominer votre marché'
      }
    },
    {
      id: 2,
      name: 'DESIGN SYSTEM',
      desc: 'Interface sur-mesure + Tests utilisateur',
      day: 'J4-10',
      detail: 'Figma collaborative, responsive design, validation conversion',
      expandedContent: {
        tools: ['Figma Advanced', 'Adobe Creative Suite', 'Principle', 'UserTesting'],
        deliverables: [
          'Design system complet (couleurs, typos, composants)',
          'Maquettes desktop + mobile pixel-perfect',
          'Prototypes interactifs clickables',
          'Tests A/B sur 3 versions de landing'
        ],
        timeline: '7 jours avec 2 rounds de révisions',
        outcome: 'Interface qui convertit 3x mieux que la concurrence'
      }
    },
    {
      id: 3,
      name: 'DEV NEXT.JS',
      desc: 'Code production + Optimisations Core Web Vitals',
      day: 'J11-35',
      detail: 'TypeScript, lazy loading, SEO technique, performance < 2s',
      expandedContent: {
        tools: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Vercel'],
        deliverables: [
          'Code source TypeScript 100% type-safe',
          'Performance Lighthouse 95+ sur tous devices',
          'SEO technique avancé (schema, sitemap, robots)',
          'Animations Framer Motion sur-mesure'
        ],
        timeline: '25 jours avec reviews daily',
        outcome: 'Site 10x plus rapide que WordPress, indexation Google optimale'
      }
    },
    {
      id: 4,
      name: 'QA + ANALYTICS',
      desc: 'Tests multi-devices + Tracking avancé',
      day: 'J36-40',
      detail: 'Lighthouse 95+, heatmaps, conversions goals, debugging',
      expandedContent: {
        tools: ['BrowserStack', 'Hotjar', 'Google Tag Manager', 'Sentry'],
        deliverables: [
          'Tests sur 15+ devices/navigateurs',
          'Tracking conversions micro/macro setup',
          'Heatmaps et session recordings configurés',
          'Dashboard analytics personnalisé'
        ],
        timeline: '5 jours de tests intensifs',
        outcome: 'Zéro bug, tracking précis, insights actionnables'
      }
    },
    {
      id: 5,
      name: 'GO-LIVE + FORMATION',
      desc: 'Déploiement + Formation équipe 2h',
      day: 'J41-45',
      detail: 'DNS config, SSL, CMS training, documentation complète',
      expandedContent: {
        tools: ['Vercel Pro', 'Cloudflare', 'Sanity CMS', 'Loom'],
        deliverables: [
          'Déploiement production avec CDN global',
          'Formation équipe 2h (enregistrée)',
          'Documentation technique + business',
          'Support 30 jours post-lancement'
        ],
        timeline: '5 jours pour transition smooth',
        outcome: 'Équipe autonome, site performant, croissance measurable'
      }
    }
  ]

  const mobileData = {
    title: "Site web qui convertit",
    subtitle: "Next.js premium, design sur-mesure, performance garantie",
    mainKPI: {
      value: "25% CTR",
      label: "vs 2-3% industrie standard"
    },
    caseStudy: {
      client: "PME Valaisanne",
      before: "Aucune présence web",
      after: "50+ leads/mois",
      result: "ROI positif en 30 jours"
    },
    process: {
      step1: "Brief 30 min + audit technique gratuit",
      step2: "Développement Next.js + formation 2h"
    },
    pricing: {
      price: "4'500 CHF",
      timeline: "Livraison en 15-45 jours",
      included: ["Design sur-mesure", "SEO optimisé", "Formation incluse", "Support 30 jours"]
    },
    ctaTitle: "Démarrer votre projet",
    ctaSubtitle: "Consultation gratuite • Devis transparent"
  }

  return (
    <>
      {/* Progress Bars Sublimes */}
      <ScrollProgressIndicator />

      <ServicePageMobile {...mobileData} />

      <div className="hidden lg:block min-h-screen bg-black text-white" style={{scrollBehavior: 'smooth'}}>
      
      {/* HERO PROCESS VISUEL - TIMELINE INTERACTIVE */}
      <section className="timeline-section relative min-h-[90vh] flex items-center justify-center pt-32 pb-16">
        
        {/* Background timeline effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-900/10 via-black to-black" />
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full">
              <defs>
                <pattern id="timeline-grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <circle cx="50" cy="50" r="1" fill="rgba(250, 204, 21, 0.3)" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#timeline-grid)" />
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-20">
            <motion.div 
              className="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-yellow-400 text-sm font-medium">PROCESS TRANSPARENT • LIVRAISON GARANTIE</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              De l'idée au site en ligne
              <span className="font-bold text-yellow-400 block">45 jours maximum</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Process rodé, délais respectés, résultats garantis.
              <br />
              Voici exactement ce qui se passe à chaque étape.
            </motion.p>
          </div>

          {/* Timeline interactive - ULTRA WIDE DESKTOP */}
          <div className="relative max-w-[90rem] mx-auto">
            {/* Ligne centrale - Base avec effet */}
            <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-gray-700/40 via-gray-600/20 to-gray-700/40 transform -translate-x-1/2 rounded-full"></div>

            {/* Ligne centrale - Progressée OSOM */}
            <motion.div
              className="absolute left-1/2 top-0 w-2 bg-gradient-to-b from-yellow-400 via-yellow-300 to-yellow-500 transform -translate-x-1/2 rounded-full shadow-lg"
              style={{
                height: `${scrollProgress * 100}%`,
                boxShadow: '0 0 20px rgba(250, 204, 21, 0.6), 0 0 40px rgba(250, 204, 21, 0.3)'
              }}
              animate={{
                boxShadow: [
                  '0 0 20px rgba(250, 204, 21, 0.6), 0 0 40px rgba(250, 204, 21, 0.3)',
                  '0 0 30px rgba(250, 204, 21, 0.8), 0 0 60px rgba(250, 204, 21, 0.4)',
                  '0 0 20px rgba(250, 204, 21, 0.6), 0 0 40px rgba(250, 204, 21, 0.3)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Bille animée OSOM - Style image avec cercle et halo */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 z-20"
              style={{
                top: `${Math.max(0, Math.min(95, scrollProgress * 100))}%`
              }}
            >
              {/* Cercle extérieur avec halo animé */}
              <motion.div
                className="relative w-12 h-12 rounded-full border-4 border-yellow-400/60 bg-gradient-to-r from-yellow-600/40 to-yellow-400/20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                  borderColor: ['rgba(250, 204, 21, 0.6)', 'rgba(250, 204, 21, 0.9)', 'rgba(250, 204, 21, 0.6)']
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  borderColor: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              >
                {/* Bille centrale jaune pure */}
                <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 shadow-xl">
                  {/* Point central noir comme dans l'image */}
                  <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>

                {/* Effet de lueur pulsante */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-yellow-400/20"
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.6, 0.2, 0.6]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Particules orbitales OSOM */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-300 rounded-full"
                    animate={{
                      rotate: [0, 360],
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.4, 0.8, 0.4]
                    }}
                    transition={{
                      rotate: { duration: 4 + i, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2 + i * 0.5, repeat: Infinity, ease: "easeInOut" },
                      opacity: { duration: 1.5 + i * 0.3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: `${15 + i * 5}px center`,
                      transform: `translate(-50%, -50%) rotate(${i * 120}deg)`
                    }}
                  />
                ))}
              </motion.div>

              {/* Indicateur de progression numérique */}
              <motion.div
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-yellow-400 text-xs font-bold"
                animate={{
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {Math.round(scrollProgress * 100)}%
              </motion.div>
            </motion.div>
            
            {/* Steps */}
            <div className="space-y-24">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.2, duration: 0.8 }}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Content Card INTERACTIVE - ULTRA LARGE DESKTOP */}
                  <div className={`w-7/12 ${index % 2 === 0 ? 'pr-20 text-right' : 'pl-20 text-left'}`}>
                    <motion.div
                      className={`relative overflow-hidden backdrop-blur-sm rounded-3xl p-12 border transition-all duration-700 cursor-pointer group ${
                        hoveredStep === step.id
                          ? 'bg-gradient-to-br from-amber-50/5 via-yellow-100/10 to-orange-100/5 border-amber-300/60 shadow-2xl shadow-amber-400/25'
                          : 'bg-gradient-to-br from-slate-900/40 via-gray-800/30 to-slate-900/40 border-slate-600/40'
                      } ${
                        expandedStep === step.id
                          ? 'bg-gradient-to-br from-amber-50/8 via-yellow-100/15 to-orange-100/8 border-amber-300/80 shadow-3xl shadow-amber-400/35'
                          : ''
                      }`}
                      onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Motif décoratif de fond - Élégance */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-6 right-8 w-24 h-24 bg-gradient-to-br from-amber-300/20 to-yellow-400/10 rounded-full blur-xl"></div>
                        <div className="absolute bottom-8 left-6 w-32 h-32 bg-gradient-to-tl from-orange-300/15 to-amber-400/5 rounded-full blur-2xl"></div>
                      </div>

                      {/* Effet de respiration au hover */}
                      <motion.div
                        className="absolute inset-0 rounded-3xl"
                        initial={false}
                        animate={{
                          background: hoveredStep === step.id
                            ? [
                                'radial-gradient(circle at 30% 40%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)',
                                'radial-gradient(circle at 70% 60%, rgba(245, 158, 11, 0.15) 0%, transparent 50%)',
                                'radial-gradient(circle at 30% 40%, rgba(251, 191, 36, 0.1) 0%, transparent 50%)'
                              ]
                            : 'radial-gradient(circle at 50% 50%, transparent 0%, transparent 100%)'
                        }}
                        transition={{
                          duration: 3,
                          repeat: hoveredStep === step.id ? Infinity : 0,
                          ease: "easeInOut"
                        }}
                      />

                      <div className={`relative flex items-center space-x-6 mb-8 ${index % 2 === 0 ? 'justify-end flex-row-reverse space-x-reverse' : ''}`}>
                        <div className="text-center">
                          <span className="text-amber-300 text-2xl font-light block mb-1 tracking-wide">Phase</span>
                          <span className="text-amber-100 text-3xl font-bold">{step.day}</span>
                        </div>
                        <motion.div
                          className="relative w-20 h-20 rounded-2xl flex items-center justify-center overflow-hidden"
                          style={{
                            background: hoveredStep === step.id
                              ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(245, 158, 11, 0.2))'
                              : 'linear-gradient(135deg, rgba(148, 163, 184, 0.2), rgba(100, 116, 139, 0.1))'
                          }}
                          animate={{
                            scale: hoveredStep === step.id ? 1.05 : 1,
                            rotate: hoveredStep === step.id ? [0, 2, -2, 0] : 0
                          }}
                          transition={{
                            scale: { duration: 0.3 },
                            rotate: { duration: 2, repeat: hoveredStep === step.id ? Infinity : 0 }
                          }}
                        >
                          {/* Motif décoratif dans l'icône */}
                          <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-full blur-sm"></div>
                            <div className="absolute bottom-3 left-3 w-6 h-6 bg-gradient-to-tl from-orange-200 to-amber-300 rounded-full blur-md"></div>
                          </div>
                          <span className="relative text-amber-200 font-bold text-2xl z-10">{step.id}</span>
                        </motion.div>
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-4xl font-light text-white mb-3 group-hover:text-amber-100 transition-colors duration-500 leading-tight">
                          {step.name}
                        </h3>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 mb-6 group-hover:w-24 transition-all duration-500"></div>
                        <p className="text-lg text-slate-300 leading-relaxed mb-6 group-hover:text-slate-200 transition-colors duration-500 font-light">
                          {step.desc}
                        </p>
                      </div>

                      {/* Section aperçu élégante */}
                      <div className="relative bg-gradient-to-r from-slate-800/40 via-slate-700/30 to-slate-800/40 rounded-2xl p-6 border border-slate-600/30 group-hover:border-amber-400/40 transition-all duration-500">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="text-amber-300 text-sm font-medium mb-2 tracking-wide uppercase">Aperçu inclus</h4>
                            <p className="text-slate-200 text-base leading-relaxed font-light">
                              {step.detail}
                            </p>
                          </div>

                          <motion.div
                            className="ml-6 flex flex-col items-center text-center"
                            animate={{
                              opacity: hoveredStep === step.id ? [0.7, 1, 0.7] : 0.5,
                              y: hoveredStep === step.id ? [0, -2, 0] : 0
                            }}
                            transition={{
                              duration: 2,
                              repeat: hoveredStep === step.id ? Infinity : 0,
                              ease: "easeInOut"
                            }}
                          >
                            <div className="w-12 h-12 bg-gradient-to-br from-amber-400/20 to-yellow-500/20 rounded-xl flex items-center justify-center mb-2 group-hover:from-amber-400/30 group-hover:to-yellow-500/30 transition-all duration-500">
                              <span className="text-amber-300 text-lg">
                                {expandedStep === step.id ? '▲' : '▼'}
                              </span>
                            </div>
                            <span className="text-amber-300 text-xs font-medium tracking-wide">
                              {expandedStep === step.id ? 'Fermer' : 'Explorer'}
                            </span>
                          </motion.div>
                        </div>

                        {/* Indicateur subtil de clickabilité */}
                        <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-amber-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {/* CONTENU EXPANDABLE - CONNAISSANCE OSOM */}
                      <AnimatePresence>
                        {expandedStep === step.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: 'auto', marginTop: 16 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60 rounded-3xl p-10 border border-amber-400/30 backdrop-blur-sm">

                              {/* HEADER SECTION ACCUEILLANTE */}
                              <div className="text-center mb-10">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-400/30 to-yellow-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                  <span className="text-amber-300 text-2xl">✨</span>
                                </div>
                                <h3 className="text-2xl font-light text-white mb-2">Ce qui vous attend</h3>
                                <p className="text-slate-400 text-sm">Voici le détail complet de cette phase</p>
                              </div>

                              {/* LAYOUT ULTRA-WIDE DESKTOP - 2 COLONNES HARMONIEUSES */}
                              <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">

                                {/* COLONNE GAUCHE - RESSOURCES & OUTILS */}
                                <div className="space-y-8">
                                  {/* Stack technique élégante */}
                                  <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/30 rounded-2xl p-6 border border-slate-600/40">
                                    <h4 className="text-amber-300 font-medium text-lg mb-6 flex items-center">
                                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                                      Outils & Technologies
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                      {step.expandedContent.tools.map((tool, idx) => (
                                        <div key={idx} className="px-8 py-5 bg-gradient-to-r from-amber-50/5 to-yellow-100/5 text-amber-100 text-lg rounded-2xl border border-amber-400/20 hover:border-amber-400/40 hover:from-amber-50/8 hover:to-yellow-100/8 transition-all duration-300 font-light text-center">
                                          {tool}
                                        </div>
                                      ))}
                                    </div>
                                  </div>

                                  {/* Métriques importantes */}
                                  <div className="grid grid-cols-1 gap-6">
                                    <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/10 rounded-2xl p-6 border border-blue-400/20">
                                      <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center mr-3">
                                          <span className="text-cyan-300 text-sm">⏱</span>
                                        </div>
                                        <h4 className="text-cyan-300 font-medium text-sm">Délai de livraison</h4>
                                      </div>
                                      <p className="text-white text-xl font-light">{step.expandedContent.timeline}</p>
                                    </div>
                                    <div className="bg-gradient-to-br from-emerald-900/20 to-green-900/10 rounded-2xl p-6 border border-emerald-400/20">
                                      <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 bg-emerald-400/20 rounded-lg flex items-center justify-center mr-3">
                                          <span className="text-emerald-300 text-sm">🎯</span>
                                        </div>
                                        <h4 className="text-emerald-300 font-medium text-sm">Impact attendu</h4>
                                      </div>
                                      <p className="text-emerald-100 text-base font-light leading-relaxed">{step.expandedContent.outcome}</p>
                                    </div>
                                  </div>
                                </div>

                                {/* COLONNE DROITE - LIVRABLES CHALEUREUX */}
                                <div>
                                  <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/30 rounded-2xl p-6 border border-slate-600/40 h-full">
                                    <h4 className="text-amber-300 font-medium text-lg mb-6 flex items-center">
                                      <span className="w-2 h-2 bg-amber-400 rounded-full mr-3"></span>
                                      Vos livrables
                                    </h4>
                                    <div className="space-y-4">
                                      {step.expandedContent.deliverables.map((item, idx) => (
                                        <div key={idx} className="group flex items-start space-x-4 p-4 bg-gradient-to-r from-slate-700/30 to-slate-600/20 rounded-xl border border-slate-600/30 hover:border-emerald-400/30 hover:from-emerald-900/10 hover:to-slate-600/20 transition-all duration-300">
                                          <div className="w-8 h-8 bg-gradient-to-br from-emerald-400/30 to-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:from-emerald-400/40 group-hover:to-green-500/30 transition-all duration-300">
                                            <span className="text-emerald-300 text-sm font-medium">✓</span>
                                          </div>
                                          <div>
                                            <p className="text-slate-200 text-sm font-light leading-relaxed group-hover:text-white transition-colors duration-300">{item}</p>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <motion.div 
                      className="w-8 h-8 bg-yellow-400 rounded-full border-4 border-black shadow-lg"
                      animate={{ 
                        scale: currentStep === step.id ? [1, 1.3, 1] : 1,
                        boxShadow: currentStep === step.id 
                          ? ['0 0 0 0 rgba(250, 204, 21, 0.7)', '0 0 0 20px rgba(250, 204, 21, 0)']
                          : 'none'
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-green-400/20 rounded-full text-green-400 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              3 créneaux disponibles ce mois
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/20"
              >
                Voir les prix
              </Link>
              
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-yellow-400/50 text-yellow-400 hover:text-white hover:bg-yellow-400/10 font-semibold text-lg rounded-xl transition-all duration-300"
              >
                Démarrer maintenant
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION PRICING DÉTAILLÉ */}
      <section id="pricing" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Détails des <span className="font-bold text-yellow-400">formules</span>
            </h2>
            <p className="text-xl text-gray-300">
              Tout inclus, pas de surprise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingOptions.map((option) => (
              <motion.div
                key={option.id}
                className={`relative p-8 rounded-2xl ${
                  option.popular 
                    ? 'bg-gradient-to-br from-yellow-400/20 to-orange-400/10 border-2 border-yellow-400' 
                    : 'bg-gray-900/50 border border-gray-700'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.02 }}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="px-4 py-1 bg-yellow-400 text-black text-sm font-bold rounded-full">
                      RECOMMANDÉ
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{option.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{option.description}</p>
                  <div className="flex items-baseline justify-center">
                    {option.currency && (
                      <>
                        <span className="text-4xl font-bold text-yellow-400">{option.price}</span>
                        <span className="text-gray-400 ml-2">{option.currency}</span>
                      </>
                    )}
                    {!option.currency && (
                      <span className="text-3xl font-bold text-yellow-400">{option.price}</span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mt-2">Livraison: {option.time}</p>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-green-400 mt-1">✓</span>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/contact"
                  className={`block w-full py-3 rounded-lg font-semibold transition-all text-center ${
                    option.popular
                      ? 'bg-yellow-400 hover:bg-yellow-300 text-black'
                      : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-600'
                  }`}
                >
                  {option.id === 'custom' ? 'Demander un devis' : 'Choisir ce plan'}
                </Link>
                
                {option.ideal && (
                  <p className="text-center text-xs text-gray-500 mt-4">{option.ideal}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-3xl p-12 border border-yellow-400/30 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
              Prêt à lancer votre <span className="font-bold text-yellow-400">projet web</span> ?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Audit gratuit, devis transparent, résultats garantis.
              <br />
              <span className="text-yellow-400">Rejoignez 688 entreprises satisfaites.</span>
            </p>

            <div className="inline-flex items-center px-6 py-3 bg-green-400/20 rounded-full text-green-400 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              3 projets en cours • Prochain créneau dans 2 semaines
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/20"
              >
                Démarrer mon projet
              </Link>
              
              <Link 
                href="tel:+41791289549"
                className="inline-flex items-center justify-center px-8 py-4 border border-yellow-400/50 text-yellow-400 hover:text-white hover:bg-yellow-400/10 font-semibold text-lg rounded-xl transition-all duration-300"
              >
                +41 79 128 95 49
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  )
}