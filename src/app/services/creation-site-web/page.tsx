'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import { ServicePageMobile } from '@/components/services/ServicePageMobile'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

export default function CreationSiteWebPage() {
  const [selectedProject, setSelectedProject] = useState('vitrine')
  const [selectedPrice, setSelectedPrice] = useState('growth')
  const [currentStep, setCurrentStep] = useState(1)
  const [scrollProgress, setScrollProgress] = useState(0)

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
  
  // Packages personnalisés par PERSONA MARKETING - STRATÉGIE ANTI-AGENCE
  const pricingOptions = [
    {
      id: 'georges-pme',
      name: 'PACKAGE "GEORGES"',
      subtitle: 'PME Pragmatique',
      price: '2,500',
      currency: 'CHF',
      time: '30 jours',
      description: 'Site qui prouve aux concurrents',
      antiAgency: 'Prix fixe transparent (pas de surprises cachées)',
      features: [
        'Site vitrine + GA4 setup professionnel',
        '1 case study concurrent local inclus',
        'Formation équipe interne (2h)',
        'SEO local Valais optimisé',
        'Délai garanti 30 jours'
      ],
      ideal: 'Votre concurrent sierrois a déjà commencé',
      objectionHandler: 'ROI prouvé par portfolio vérifiable',
      persona: 'Georges Bonvin - Directeur PME sceptique'
    },
    {
      id: 'marie-creatif',
      name: 'PACKAGE "MARIE"',
      subtitle: 'Créatif Budget Serré',
      price: '1,800',
      currency: 'CHF',
      time: '25 jours',
      description: 'Portfolio qui impressionne les jurys',
      antiAgency: 'Pas de jargon technique, langage business',
      features: [
        'Portfolio optimisé subventions',
        'SEO local culturel Valais',
        'Template newsletter inclus',
        'Design artistique premium',
        'Support candidatures'
      ],
      ideal: 'Portfolio qui impressionne les jurys',
      objectionHandler: 'Investissement qui rapporte des subventions',
      persona: 'Marie Dubuis - Artiste ambitieuse'
    },
    {
      id: 'sarah-premium',
      name: 'PACKAGE "SARAH"',
      subtitle: 'Premium Discret',
      price: '6,500',
      currency: 'CHF',
      time: '45 jours',
      description: 'Excellence sans ostentation',
      antiAgency: 'Promesses tenues, pas de délais élastiques',
      features: [
        'Design haut de gamme sur-mesure',
        'Rédaction copywriting premium',
        'Maintenance 6 mois incluse',
        'Consulting stratégique inclus',
        'Support prioritaire 24h'
      ],
      ideal: 'Excellence qui reflète votre standing',
      objectionHandler: 'Process clair, réactivité garantie',
      persona: 'Dr. Sarah Meier - Professionnelle exigeante',
      popular: true
    },
    {
      id: 'audit-gratuit',
      name: 'AUDIT GRATUIT',
      subtitle: 'Lead Magnet Product Ladder',
      price: '0',
      currency: 'CHF',
      time: '48h',
      description: 'Découvrez votre potentiel caché',
      antiAgency: 'Analyse transparente, sans engagement',
      features: [
        'Analyse SEO complète de votre site',
        'Benchmark concurrents locaux Valais',
        'Identification 5 opportunités quick-wins',
        'Rapport PDF personnalisé',
        'Consultation téléphonique 30 min'
      ],
      ideal: 'Point de départ idéal avant tout projet',
      objectionHandler: 'Gratuit, sans engagement, valeur immédiate',
      cta: 'Réservez votre audit (2 places/mois)'
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
              <span className="text-yellow-400 text-sm font-medium">LA SEULE AGENCE DU VALAIS QUI PROUVE AVANT DE PROMETTRE</span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-light text-white mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Fini les promesses vides
              <span className="font-bold text-yellow-400 block">Voici notre portfolio</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <strong className="text-white">Prix fixe transparent</strong> • <strong className="text-white">Délais garantis</strong> • <strong className="text-white">Portfolio vérifiable</strong>
              <br />
              <span className="text-yellow-400">Votre concurrent sierrois a déjà commencé. Et vous ?</span>
            </motion.p>

            {/* Messaging Anti-Agence Différenciant */}
            <motion.div
              className="bg-white/5 border border-yellow-400/30 rounded-2xl p-6 max-w-4xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-red-400 font-semibold mb-2">❌ Agences traditionnelles</div>
                  <div className="text-gray-400 text-sm">Promesses sans preuves</div>
                </div>
                <div>
                  <div className="text-red-400 font-semibold mb-2">❌ Facturations cachées</div>
                  <div className="text-gray-400 text-sm">Délais élastiques</div>
                </div>
                <div>
                  <div className="text-red-400 font-semibold mb-2">❌ Jargon technique</div>
                  <div className="text-gray-400 text-sm">Client largué</div>
                </div>
              </div>
              <div className="border-t border-white/20 mt-4 pt-4">
                <div className="text-yellow-400 font-bold text-lg text-center">✅ OSOM : Portfolio vérifiable + Prix fixe + Langage business</div>
              </div>
            </motion.div>
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
                >
                  {/* Content Card SIMPLE SCROLL-ONLY */}
                  <div className={`w-7/12 ${index % 2 === 0 ? 'pr-20 text-right' : 'pl-20 text-left'}`}>
                    <div className="relative overflow-hidden backdrop-blur-sm rounded-3xl p-12 border bg-gradient-to-br from-slate-900/40 via-gray-800/30 to-slate-900/40 border-slate-600/40">
                      {/* Motif décoratif de fond - Élégance */}
                      <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-6 right-8 w-24 h-24 bg-gradient-to-br from-amber-300/20 to-yellow-400/10 rounded-full blur-xl"></div>
                        <div className="absolute bottom-8 left-6 w-32 h-32 bg-gradient-to-tl from-orange-300/15 to-amber-400/5 rounded-full blur-2xl"></div>
                      </div>


                      <div className={`relative flex items-center space-x-6 mb-8 ${index % 2 === 0 ? 'justify-end flex-row-reverse space-x-reverse' : ''}`}>
                        <div className="text-center">
                          <span className="text-amber-300 text-2xl font-light block mb-1 tracking-wide">Phase</span>
                          <span className="text-amber-100 text-3xl font-bold">{step.day}</span>
                        </div>
                        <div
                          className="relative w-20 h-20 rounded-2xl flex items-center justify-center overflow-hidden"
                          style={{
                            background: 'linear-gradient(135deg, rgba(251, 191, 36, 0.3), rgba(245, 158, 11, 0.2))'
                          }}
                        >
                          {/* Motif décoratif dans l'icône */}
                          <div className="absolute inset-0 opacity-30">
                            <div className="absolute top-2 right-2 w-4 h-4 bg-gradient-to-br from-amber-200 to-yellow-300 rounded-full blur-sm"></div>
                            <div className="absolute bottom-3 left-3 w-6 h-6 bg-gradient-to-tl from-orange-200 to-amber-300 rounded-full blur-md"></div>
                          </div>
                          <span className="relative text-amber-200 font-bold text-2xl z-10">{step.id}</span>
                        </div>
                      </div>

                      <div className="relative z-10">
                        <h3 className="text-4xl font-light text-white mb-3 leading-tight">
                          {step.name}
                        </h3>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500 mb-6"></div>
                        <p className="text-lg text-slate-300 leading-relaxed mb-6 font-light">
                          {step.desc}
                        </p>
                      </div>

                      {/* Section aperçu simple */}
                      <div className="relative bg-gradient-to-r from-slate-800/40 via-slate-700/30 to-slate-800/40 rounded-2xl p-6 border border-slate-600/30">
                        <h4 className="text-amber-300 text-sm font-medium mb-2 tracking-wide uppercase">Inclus dans cette phase</h4>
                        <p className="text-slate-200 text-base leading-relaxed font-light">
                          {step.detail}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full border-4 border-black shadow-lg" />
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
            {/* Objections Handling Pre-CTA */}
            <div className="bg-gray-900/50 border border-yellow-400/30 rounded-2xl p-6 max-w-3xl mx-auto mb-8">
              <h3 className="text-yellow-400 font-bold text-lg mb-4 text-center">Vos questions, nos réponses transparentes</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-red-400">❓ "C'est trop cher"</span>
                  <div className="text-gray-300 mt-1">→ ROI Calculator personnalisé inclus</div>
                </div>
                <div>
                  <span className="text-red-400">❓ "On n'a pas le temps"</span>
                  <div className="text-gray-300 mt-1">→ Process clés en main démontré</div>
                </div>
                <div>
                  <span className="text-red-400">❓ "Notre secteur est différent"</span>
                  <div className="text-gray-300 mt-1">→ Case study secteur similaire</div>
                </div>
                <div>
                  <span className="text-red-400">❓ "Mon neveu peut le faire"</span>
                  <div className="text-gray-300 mt-1">→ Comparatif amateur vs pro</div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center px-6 py-3 bg-green-400/20 rounded-full text-green-400 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              2 places restantes ce mois (Georges déjà réservé)
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#pricing"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/20"
              >
                Packages personnalisés →
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-yellow-400/50 text-yellow-400 hover:text-white hover:bg-yellow-400/10 font-semibold text-lg rounded-xl transition-all duration-300"
              >
                Audit gratuit (sans engagement)
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

      {/* SEO LOCAL VALAIS SECTION */}
      <section className="py-16 bg-gradient-to-br from-black via-gray-900/50 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Agence web <span className="text-yellow-400 font-bold">Valais</span> spécialisée
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Créateur de sites internet pour PME valaisannes. Sion, Sierre, Martigny, Monthey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-yellow-400 font-bold text-lg mb-3">Marketing digital Sion</h3>
              <p className="text-gray-300 text-sm">
                Site web professionnel pour entreprises sédunois. SEO local optimisé, performance garantie.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-yellow-400 font-bold text-lg mb-3">Développeur web Sierre</h3>
              <p className="text-gray-300 text-sm">
                Création site internet sur-mesure. Next.js, design responsive, optimisation mobile-first.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 rounded-2xl p-6 border border-white/10 text-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-yellow-400 font-bold text-lg mb-3">Agence digitale Valais</h3>
              <p className="text-gray-300 text-sm">
                Stratégie web complète : conception, développement, SEO. Expertise locale reconnue.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-gray-400 text-sm">
              <strong className="text-white">Mots-clés ciblés :</strong> site internet Valais, agence web Sion, création site Sierre,
              développeur web Martigny, marketing digital Monthey, SEO local Valais, site responsive mobile
            </p>
          </motion.div>
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