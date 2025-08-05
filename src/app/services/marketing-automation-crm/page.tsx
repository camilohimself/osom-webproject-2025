'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
import { SimpleGroupedBarChart } from '@/components/ui'
import { motion } from 'framer-motion'

export default function MarketingAutomationCRMPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [animatedValue, setAnimatedValue] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  
  // Animation du compteur +78%
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(78)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Scroll tracking pour animations réactives
  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const performanceResults = [
    {
      metric: "Taux Conversion",
      ourResult: "+78%",
      industry: "22% baseline",
      improvement: "3.5x plus efficace",
      color: "#10B981"
    },
    {
      metric: "Temps Manuel",
      ourResult: "-65%",
      industry: "100% manuel",
      improvement: "Efficacité optimisée",
      color: "#10B981"
    },
    {
      metric: "Valeur Client LTV",
      ourResult: "+320%",
      industry: "Baseline 100%",
      improvement: "3.2x plus rentable",
      color: "#10B981"
    },
    {
      metric: "Email Open Rate",
      ourResult: "92%",
      industry: "21% moyenne",
      improvement: "4.4x plus engageant",
      color: "#10B981"
    }
  ]

  const faqData = [
    {
      question: "Comment l'automatisation marketing améliore-t-elle concrètement le taux de conversion de +78% pour les PME valaisannes ?",
      answer: "Méthodologie éprouvée : Expert certifié configure triggers HubSpot/Pipedrive/ActiveCampaign + analyse comportements clients, optimise séquences emails, crée scoring personnalisé. +78% conversions grâce à : triggers précis basés données clients + séquences optimisées timing + scoring comportemental avancé. Pas d'automatisation générique : personnalisation complète selon votre secteur et clientele."
    },
    {
      question: "Quels outils CRM et automatisation utilisez-vous pour les entreprises suisses ?",
      answer: "Stack complet certifié : HubSpot (partner certifié), Pipedrive (expert), ActiveCampaign (spécialiste), Mailchimp pro. Configuration avancée : triggers comportementaux, sequences multi-touch, scoring personnalisé, attribution revenus. Expert certifié : maîtrise technique complète + optimisation continue. Demo concrète : setup avant/après sur votre funnel réel avec métriques mesurables."
    },
    {
      question: "8900 CHF pour Expert CRM, quelle est la différence réelle versus setup CRM classique à 3000 CHF ?",
      answer: "Différence maîtrise experte : Setup classique = configuration basique statique. Expert CRM OSOM = configuration avancée + optimisation comportementale continue + analyse performance permanente. 8900 CHF inclus : audit expert complet, setup personnalisé, séquences optimisées, scoring sur-mesure, formation équipes, support 6 mois. ROI récupéré 2-3 mois via efficacité mesurable. Investissement transformation vs dépense configuration basique."
    },
    {
      question: "Après setup Expert CRM, mon équipe peut-elle gérer en autonomie sans dépendance technique ?",
      answer: "Objectif : autonomie équipe complète. Formation incluse : maîtrise interface CRM + compréhension métriques + interprétation performances. Équipe gère quotidien en autonomie, dashboards intuitifs, expert disponible pour évolutions stratégiques. Indépendance progressive : 80% autonomie mois 3, 95% mois 6. Support : expert humain accessible selon besoins + documentation complète."
    },
    {
      question: "Comment mesurez-vous concrètement les résultats du setup Expert CRM Business ?",
      answer: "Mesure business multicouche : Analytics expert (conversion rates, attribution multi-touch, LTV tracking) + analyse comportementale avancée (engagement patterns, prédiction accuracy, optimization impact). Dashboard complet : métriques business + insights comportementaux + recommandations automatisées + ROI mesurable. Reporting mensuel : performance before/after, impact optimisations, ajustements effectiveness. Transparence totale métrique business."
    },
    {
      question: "Le setup Expert CRM Business est-il évolutif avec la croissance de mon entreprise ?",
      answer: "Architecture business scalable : setup expert extensible + analyse learning continue + optimisation adaptive. Croissance business = plus de data pour optimisation + insights plus précis + recommandations évolutives. Expert maintient structure technique, système améliore analyse comportementale. Évolutivité business : setup grandit avec entreprise, pas de refonte nécessaire, expansion intelligente du système existant optimisé."
    }
  ]

  const jsonLdFaq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      
      {/* RIVIÈRE D'AUTOMATION OSOM - Logos flottants créatifs sur toute la page */}
      <div className="fixed inset-0 pointer-events-none z-0">
        
        {/* Logo 1: Petit icon qui pulse - Top Left */}
        <motion.div
          className="absolute top-20 left-8"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-12 h-12 opacity-20 hover:opacity-40 transition-all duration-500">
            <svg viewBox="0 0 927.6 900" className="w-full h-full">
              <defs>
                <linearGradient id="autoLogo1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.4"/>
                </linearGradient>
              </defs>
              <path fill="url(#autoLogo1)" d="M779.7,261.1c-29.5-31.6-69.4-47.3-119.7-47.3c-59.6,0-107.9,20.8-144.7,62.3c-29.2-41.5-72.2-62.3-128.9-62.3c-51.5,0-92.4,16.1-122.8,48.2v-38.6H154.8V280l0,0L300,338.9c14-12.1,31.6-18.2,53.1-18.2c23.4,0,42.1,7.6,56.1,22.8c11.5,12.5,18.3,28.5,20.4,48l0,0l0,0c0,0,0,0,0-0.1l119,48.3l0.1,0v-37.6c0-24,7.5-43.6,22.4-58.8c14.9-15.2,34.1-22.8,57.4-22.8c23.4,0,42.1,7.6,56.1,22.8c14,15.2,21.1,35.7,21.1,61.4v76.7c0,0,65.3,16.8,76.3,20.3c20.1,5.5,34.1,14.8,42.1,25V388.2C824,335,809.3,292.6,779.7,261.1z"/>
            </svg>
          </div>
        </motion.div>

        {/* Logo 2: Moyen complet - Center Right avec trail */}
        <motion.div
          className="absolute top-1/3 right-12"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            rotate: [0, -3, 3, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <div className="w-20 h-10 opacity-25 hover:opacity-50 transition-all duration-700">
            <svg viewBox="0 0 2150 1080" className="w-full h-full">
              <defs>
                <linearGradient id="autoLogo2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#34D399" stopOpacity="0.7"/>
                  <stop offset="50%" stopColor="#10B981" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.5"/>
                </linearGradient>
                <filter id="glow2">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <g fill="url(#autoLogo2)" filter="url(#glow2)">
                <path d="M366,772.7c15.2,0,28.4,7.2,35.7,18.5l-7.6,6c-6.6-9.5-16.1-15.1-28-15.1c-19.4,0-34.2,15.1-34.2,35s14.8,35,34.2,35c11.8,0,21.4-5.6,28-15.1l7.6,6c-7.2,11.3-20.4,18.5-35.7,18.5c-24.3,0.4-45.2-19.8-44.7-44.4C320.8,792.4,341.6,772.3,366,772.7z"/>
                <path d="M1984.7,646.2c11.3-11.1,17-25.1,17-42c0-16.9-5.7-31-17-42.4c-11.3-11.4-25.5-17-42.5-17c-17.4,0-31.6,5.6-42.8,16.8c-11.2,11.2-16.7,25.4-16.7,42.6c0,16.9,5.6,30.9,16.7,42c11.2,11.1,25.4,16.6,42.8,16.6C1959.2,662.8,1973.4,657.3,1984.7,646.2z"/>
              </g>
            </svg>
          </div>
          
          {/* Trail de particules d'automation */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-green-400 rounded-full"
              style={{
                left: `${-20 - i * 8}px`,
                top: `${10 + (i % 2) * 15}px`
              }}
              animate={{
                x: [0, -30, -60],
                opacity: [0.8, 0.4, 0],
                scale: [1, 0.5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.4 + 2
              }}
            />
          ))}
        </motion.div>

        {/* Logo 3: Grand événement - Left Center avec orbites */}
        <motion.div
          className="absolute left-6 top-2/3"
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <div className="w-16 h-16 opacity-30 hover:opacity-60 transition-all duration-700">
            <svg viewBox="0 0 2900 900" className="w-full h-full">
              <defs>
                <radialGradient id="autoLogo3" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.8"/>
                  <stop offset="50%" stopColor="#10B981" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#047857" stopOpacity="0.4"/>
                </radialGradient>
              </defs>
              <circle cx="1450" cy="450" r="300" fill="url(#autoLogo3)"/>
              <path fill="#34D399" fillOpacity="0.5" d="M2019.4,650.4c11.3-11.1,17-25.1,17-42c0-16.9-5.7-31-17-42.4c-11.3-11.4-25.5-17-42.5-17c-17.4,0-31.6,5.6-42.8,16.8c-11.2,11.2-16.7,25.4-16.7,42.6c0,16.9,5.6,30.9,16.7,42c11.2,11.1,25.4,16.6,42.8,16.6C1993.9,667,2008.1,661.5,2019.4,650.4z"/>
            </svg>
          </div>
          
          {/* Orbites d'automation autour */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border border-green-400/10 rounded-full"
              style={{
                width: `${120 + i * 30}%`,
                height: `${120 + i * 30}%`,
                left: `${-10 - i * 15}%`,
                top: `${-10 - i * 15}%`
              }}
              animate={{
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
                scale: { duration: 8, repeat: Infinity, delay: i * 2 }
              }}
            />
          ))}
        </motion.div>

        {/* Logo 4: Flottant bottom right avec data stream */}
        <motion.div
          className="absolute bottom-32 right-16"
          animate={{
            y: [0, 15, 0],
            x: [0, 8, 0],
            rotate: [0, -1, 1, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6
          }}
        >
          <div className="w-14 h-14 opacity-25 hover:opacity-45 transition-all duration-500">
            <svg viewBox="0 0 927.6 900" className="w-full h-full">
              <defs>
                <linearGradient id="autoLogo4" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#065F46" stopOpacity="0.5"/>
                </linearGradient>
              </defs>
              <g fill="url(#autoLogo4)">
                <polygon points="548.6,617 548.6,617 430.3,594.3 430.3,594.3 430.2,594.2 430.2,666.7 548.6,666.7 548.6,617.1"/>
                <path d="M807.1,640.9c11.3-11.1,17-25.1,17-42c0-16.9-5.7-31-17-42.4c-11.3-11.4-25.5-17-42.5-17c-17.4,0-31.6,5.6-42.8,16.8c-11.2,11.2-16.7,25.4-16.7,42.6c0,16.9,5.6,30.9,16.7,42c11.2,11.1,25.4,16.6,42.8,16.6C781.6,657.5,795.8,652,807.1,640.9z"/>
              </g>
            </svg>
          </div>
          
          {/* Data stream vers le haut */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 h-2 bg-green-400/40 rounded-full"
              style={{
                left: "50%",
                bottom: `${100 + i * 12}%`,
                transform: "translateX(-50%)"
              }}
              animate={{
                y: [0, -40, -80],
                opacity: [0, 0.8, 0],
                scaleY: [1, 0.5, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                delay: i * 0.2 + 6
              }}
            />
          ))}
        </motion.div>

        {/* Logo 5: Micro mobile top center avec effect ripple */}
        <motion.div
          className="absolute top-1/4 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
        >
          <div className="w-8 h-8 opacity-20 hover:opacity-40 transition-all duration-500">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <radialGradient id="autoLogo5" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.4"/>
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="40" fill="url(#autoLogo5)"/>
            </svg>
          </div>
          
          {/* Ripple effects */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute inset-0 border border-teal-400/20 rounded-full"
              style={{
                width: `${150 + i * 50}%`,
                height: `${150 + i * 50}%`,
                left: `${-25 - i * 25}%`,
                top: `${-25 - i * 25}%`
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.1, 0.3]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.3 + 8
              }}
            />
          ))}
        </motion.div>

        {/* Logo 6: Grand central bottom avec connexions */}
        <motion.div
          className="absolute bottom-1/4 left-1/3"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 1, -1, 0],
            scale: [1, 1.08, 1]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
        >
          <div className="w-24 h-12 opacity-35 hover:opacity-65 transition-all duration-700">
            <svg viewBox="0 0 2150 1080" className="w-full h-full">
              <defs>
                <linearGradient id="autoLogo6" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.8"/>
                  <stop offset="25%" stopColor="#34D399" stopOpacity="0.7"/>
                  <stop offset="75%" stopColor="#10B981" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#047857" stopOpacity="0.4"/>
                </linearGradient>
                <filter id="glow6">
                  <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                  <feMerge> 
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <g fill="url(#autoLogo6)" filter="url(#glow6)">
                <path d="M614.1,445.3c0.2-13-0.6-25.6-2.4-37.8l-135.3-26c11.1,18.7,16.6,40.2,16.6,64.7c0,33.9-10.7,62-32,84.2c-21.3,22.2-48.1,33.3-80.2,33.3c-32.8,0-59.6-11.1-80.7-33.3c-21.1-22.2-31.6-50.3-31.6-84.2c0-34.5,10.5-63,31.6-85.5c3.7-4,7.6-7.6,11.7-10.8l-129.3-24.9c1.1-1.7,2.3-3.5,3.5-5.2c-25.9,37-38.5,78.9-37.6,125.5c-1.2,62,21.2,115.6,67.1,160.9c45.9,45.3,100.7,67.4,164.4,66.2c63.7,1.2,119-20.9,165.8-66.2C592.5,560.9,615.3,507.3,614.1,445.3z"/>
                <path d="M1984.7,646.2c11.3-11.1,17-25.1,17-42c0-16.9-5.7-31-17-42.4c-11.3-11.4-25.5-17-42.5-17c-17.4,0-31.6,5.6-42.8,16.8c-11.2,11.2-16.7,25.4-16.7,42.6c0,16.9,5.6,30.9,16.7,42c11.2,11.1,25.4,16.6,42.8,16.6C1959.2,662.8,1973.4,657.3,1984.7,646.2z"/>
              </g>
            </svg>
          </div>
          
          {/* Lignes de connexion vers autres logos */}
          <motion.div
            className="absolute top-1/2 left-full w-20 h-px bg-gradient-to-r from-green-400/30 to-transparent"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 10
            }}
          />
          <motion.div
            className="absolute top-full left-1/2 w-px h-16 bg-gradient-to-b from-green-400/30 to-transparent"
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 12
            }}
          />
        </motion.div>

        {/* LOGOS SCROLL-RÉACTIFS - Apparaissent pendant le scroll */}
        
        {/* Logo scroll-réactif 1: Top droit avec progress bar */}
        <motion.div
          className="absolute top-96 right-4"
          style={{
            opacity: Math.min(scrollY / 500, 0.6),
            scale: 1 + (scrollY / 2000) * 0.3
          }}
        >
          <div className="w-10 h-10">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <radialGradient id="scrollLogo1" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#047857" stopOpacity="0.4"/>
                </radialGradient>
              </defs>
              <circle cx="50" cy="50" r="35" fill="url(#scrollLogo1)"/>
              <text x="50" y="55" textAnchor="middle" fill="#034C44" fontSize="20" fontWeight="bold">O</text>
            </svg>
          </div>
          
          {/* Progress bar qui suit le scroll */}
          <div className="mt-2 w-20 h-1 bg-gray-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-green-400 rounded-full"
              style={{
                width: `${Math.min((scrollY / 3000) * 100, 100)}%`
              }}
            />
          </div>
        </motion.div>

        {/* Logo scroll-réactif 2: Left center avec rotation suivant scroll */}
        <motion.div
          className="absolute left-4 top-1/2"
          style={{
            opacity: Math.min((scrollY - 200) / 600, 0.5),
            rotate: (scrollY / 10) % 360
          }}
        >
          <div className="w-14 h-14">
            <svg viewBox="0 0 927.6 900" className="w-full h-full">
              <defs>
                <linearGradient id="scrollLogo2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#065F46" stopOpacity="0.5"/>
                </linearGradient>
              </defs>
              <g fill="url(#scrollLogo2)">
                <polygon points="548.6,617 548.6,617 430.3,594.3 430.3,594.3 430.2,594.2 430.2,666.7 548.6,666.7 548.6,617.1"/>
              </g>
            </svg>
          </div>
        </motion.div>

        {/* Logo scroll-réactif 3: Bottom center avec scale progressif */}
        <motion.div
          className="absolute bottom-40 left-1/2 transform -translate-x-1/2"
          style={{
            opacity: Math.min((scrollY - 800) / 800, 0.7),
            scale: 0.5 + Math.min((scrollY - 800) / 1600, 0.8)
          }}
        >
          <div className="w-18 h-9">
            <svg viewBox="0 0 2150 1080" className="w-full h-full">
              <defs>
                <linearGradient id="scrollLogo3" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.9"/>
                  <stop offset="25%" stopColor="#6EE7B7" stopOpacity="0.8"/>
                  <stop offset="75%" stopColor="#34D399" stopOpacity="0.7"/>
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.6"/>
                </linearGradient>
              </defs>
              <g fill="url(#scrollLogo3)">
                <path d="M366,772.7c15.2,0,28.4,7.2,35.7,18.5l-7.6,6c-6.6-9.5-16.1-15.1-28-15.1c-19.4,0-34.2,15.1-34.2,35s14.8,35,34.2,35c11.8,0,21.4-5.6,28-15.1l7.6,6c-7.2,11.3-20.4,18.5-35.7,18.5c-24.3,0.4-45.2-19.8-44.7-44.4C320.8,792.4,341.6,772.3,366,772.7z"/>
                <text x="1200" y="700" fill="#047857" fontSize="200" fontWeight="bold">AUTOMATION</text>
              </g>
            </svg>
          </div>
          
          {/* Connexions dynamiques qui s'étendent avec le scroll */}
          <motion.div
            className="absolute top-1/2 left-full w-0 h-px bg-green-400/40"
            style={{
              width: Math.min((scrollY - 1000) / 20, 100)
            }}
          />
          <motion.div
            className="absolute top-1/2 right-full w-0 h-px bg-green-400/40"
            style={{
              width: Math.min((scrollY - 1000) / 20, 100)
            }}
          />
        </motion.div>

        {/* Logo scroll-réactif 4: Mobile top avec "follow scroll" */}
        <motion.div
          className="absolute right-8"
          style={{
            top: 100 + (scrollY * 0.3),
            opacity: Math.min((scrollY - 400) / 400, 0.4),
          }}
        >
          <div className="w-8 h-8">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <defs>
                <linearGradient id="scrollLogo4" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#ECFDF5" stopOpacity="0.8"/>
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.6"/>
                </linearGradient>
              </defs>
              <rect x="20" y="20" width="60" height="60" rx="30" fill="url(#scrollLogo4)"/>
              <circle cx="50" cy="50" r="15" fill="#059669"/>
            </svg>
          </div>
        </motion.div>

        {/* Constellation de micro-logos réactifs au scroll */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3"
            style={{
              left: `${10 + (i * 80) % 1200}px`,
              top: `${200 + (i * 150)}px`,
              opacity: Math.max(0, Math.min((scrollY - (i * 100)) / 300, 0.3)),
              scale: 0.5 + Math.min((scrollY - (i * 100)) / 1000, 0.5)
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              rotate: { duration: 10 + i * 2, repeat: Infinity, ease: "linear" },
              scale: { duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.2 }
            }}
          >
            <svg viewBox="0 0 20 20" className="w-full h-full">
              <circle cx="10" cy="10" r="8" fill={`hsl(${142 + i * 10}, 70%, ${60 + i * 3}%)`} fillOpacity="0.6"/>
            </svg>
          </motion.div>
        ))}

      </div>
      {/* HERO SECTION - L'AUTOMATION QUI LIBÈRE VOS ÉQUIPES */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-green-400/10 via-teal-500/5 to-green-400/5" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-green-400/20 rounded-full text-green-400 text-sm font-medium mb-6">
              L'automation qui amplifie l'humain
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-light text-white leading-tight animate-fade-in">
                Automation qui libère votre équipe
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold animate-fade-in-delay-1" style={{color: '#10B981'}}>
                Plus de temps pour l'essentiel
              </h2>
              <div className="space-y-4">
                <p className="text-3xl md:text-4xl text-green-400 font-light animate-fade-in-delay-2">
                  Vos commerciaux se concentrent sur la relation client
                </p>
                <p className="text-2xl md:text-3xl text-gray-300 font-light animate-fade-in-delay-2">
                  L'automation gère le reste intelligemment
                </p>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed mt-8">
              CRM qui comprend vos clients + workflows sur mesure<br />
              <span className="text-green-400 font-semibold">Votre équipe retrouve sa passion commerciale</span>
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-block px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-12 transform hover:scale-105 transition-all duration-500 hover:shadow-green-400/25"
            style={{ background: 'linear-gradient(135deg, #10B981, #70c1a9)' }}
          >
            Libérer Mon Équipe
          </Link>

          <div className="text-sm text-gray-400">
            Consultation gratuite • CRM adapté à votre métier • Équipe formée et autonome
          </div>
        </div>
      </section>

      {/* TRANSITION CRÉATIVE LOGOS - Rivière d'automation */}
      <section className="py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Message de transition */}
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p 
              className="text-gray-400 text-lg font-light"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              animate={{ 
                opacity: [0.6, 1, 0.6],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              L'automation OSOM en action
            </motion.p>
          </motion.div>
          
          {/* Rivière de logos automation créative */}
          <div className="flex justify-center items-center space-x-12 md:space-x-20">
            
            {/* Logo automation 1: Flottant avec workflow */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              animate={{
                y: [0, -12, 0],
                rotate: [0, 3, -3, 0]
              }}
              style={{
                animationDuration: '6s',
                animationIterationCount: 'infinite'
              }}
              whileHover={{ scale: 1.2, y: -20 }}
            >
              <div className="w-16 h-16 opacity-70 hover:opacity-100 transition-all duration-500">
                <svg viewBox="0 0 927.6 900" className="w-full h-full">
                  <defs>
                    <linearGradient id="workflowLogo1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10B981" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#059669" stopOpacity="0.6"/>
                    </linearGradient>
                    <filter id="workflowGlow1">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <g fill="url(#workflowLogo1)" filter="url(#workflowGlow1)">
                    <path d="M779.7,261.1c-29.5-31.6-69.4-47.3-119.7-47.3c-59.6,0-107.9,20.8-144.7,62.3c-29.2-41.5-72.2-62.3-128.9-62.3c-51.5,0-92.4,16.1-122.8,48.2v-38.6H154.8V280l0,0L300,338.9c14-12.1,31.6-18.2,53.1-18.2c23.4,0,42.1,7.6,56.1,22.8c11.5,12.5,18.3,28.5,20.4,48l0,0l0,0c0,0,0,0,0-0.1l119,48.3l0.1,0v-37.6c0-24,7.5-43.6,22.4-58.8c14.9-15.2,34.1-22.8,57.4-22.8c23.4,0,42.1,7.6,56.1,22.8c14,15.2,21.1,35.7,21.1,61.4v76.7c0,0,65.3,16.8,76.3,20.3c20.1,5.5,34.1,14.8,42.1,25V388.2C824,335,809.3,292.6,779.7,261.1z"/>
                  </g>
                </svg>
              </div>
              
              {/* Workflow flèches */}
              <motion.div 
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ 
                  y: [0, 6, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 3v10l-3-3m6 0l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>
            </motion.div>
            
            {/* Logo automation 2: Central massif avec pulsations */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.4 }}
              animate={{
                y: [0, -18, 0],
                scale: [1, 1.1, 1]
              }}
              style={{
                animationDuration: '8s',
                animationIterationCount: 'infinite'
              }}
              whileHover={{ scale: 1.25, y: -25 }}
            >
              <div className="w-28 h-14 opacity-80 hover:opacity-100 transition-all duration-700">
                <svg viewBox="0 0 2150 1080" className="w-full h-full">
                  <defs>
                    <linearGradient id="workflowLogo2" x1="0%" y1="0%" x2="100%" y2="50%">
                      <stop offset="0%" stopColor="#34D399" stopOpacity="0.9"/>
                      <stop offset="30%" stopColor="#10B981" stopOpacity="0.8"/>
                      <stop offset="70%" stopColor="#059669" stopOpacity="0.7"/>
                      <stop offset="100%" stopColor="#047857" stopOpacity="0.6"/>
                    </linearGradient>
                    <filter id="workflowGlow2">
                      <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  <g fill="url(#workflowLogo2)" filter="url(#workflowGlow2)">
                    <path d="M366,772.7c15.2,0,28.4,7.2,35.7,18.5l-7.6,6c-6.6-9.5-16.1-15.1-28-15.1c-19.4,0-34.2,15.1-34.2,35s14.8,35,34.2,35c11.8,0,21.4-5.6,28-15.1l7.6,6c-7.2,11.3-20.4,18.5-35.7,18.5c-24.3,0.4-45.2-19.8-44.7-44.4C320.8,792.4,341.6,772.3,366,772.7z"/>
                    <path d="M1984.7,646.2c11.3-11.1,17-25.1,17-42c0-16.9-5.7-31-17-42.4c-11.3-11.4-25.5-17-42.5-17c-17.4,0-31.6,5.6-42.8,16.8c-11.2,11.2-16.7,25.4-16.7,42.6c0,16.9,5.6,30.9,16.7,42c11.2,11.1,25.4,16.6,42.8,16.6C1959.2,662.8,1973.4,657.3,1984.7,646.2z"/>
                    <text x="1075" y="900" fill="#047857" fontSize="120" fontWeight="bold" opacity="0.7">AUTOMATION</text>
                  </g>
                </svg>
              </div>
              
              {/* Pulsations énergétiques */}
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border border-green-400/20 rounded-full"
                  style={{
                    width: `${130 + i * 25}%`,
                    height: `${130 + i * 25}%`,
                    left: `${-15 - i * 12.5}%`,
                    top: `${-15 - i * 12.5}%`
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.1, 0.3]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    delay: i * 1.2
                  }}
                />
              ))}
              
              {/* Flèche centrale puissante */}
              <motion.div 
                className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
                animate={{ 
                  y: [0, 10, 0],
                  opacity: [0.7, 1, 0.7],
                  scale: [1, 1.3, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2l8 8-8 8-2-2 6-6-6-6z" transform="rotate(90 10 10)"/>
                </svg>
              </motion.div>
            </motion.div>
            
            {/* Logo automation 3: Rapide avec trails */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              animate={{
                y: [0, -8, 0],
                x: [0, 4, -4, 0],
                rotate: [0, 1, -1, 0]
              }}
              style={{
                animationDuration: '5s',
                animationIterationCount: 'infinite'
              }}
              whileHover={{ scale: 1.15, y: -15 }}
            >
              <div className="w-12 h-12 opacity-60 hover:opacity-90 transition-all duration-500">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <radialGradient id="workflowLogo3" cx="50%" cy="50%" r="60%">
                      <stop offset="0%" stopColor="#6EE7B7" stopOpacity="0.9"/>
                      <stop offset="50%" stopColor="#34D399" stopOpacity="0.7"/>
                      <stop offset="100%" stopColor="#10B981" stopOpacity="0.5"/>
                    </radialGradient>
                  </defs>
                  <circle cx="50" cy="50" r="40" fill="url(#workflowLogo3)"/>
                  <path d="M30 50 L50 35 L50 45 L70 45 L70 55 L50 55 L50 65 Z" fill="#047857"/>
                </svg>
              </div>
              
              {/* Speed trails */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-0.5 bg-green-400/50 rounded-full"
                  style={{
                    right: `${100 + i * 8}%`,
                    top: `${45 + (i % 2) * 10}%`
                  }}
                  animate={{
                    x: [0, -25, -50],
                    opacity: [0.8, 0.4, 0],
                    scaleX: [1, 0.5, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </motion.div>
          </div>
          
          {/* Message encourageant le scroll */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div
              className="inline-flex items-center space-x-3 text-gray-500 text-sm font-light"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              animate={{
                y: [0, 5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span>Découvrez comment nos équipes sont libérées</span>
              <motion.svg 
                className="w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
              </motion.svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HISTOIRE CLIENT - L'ÉQUIPE RETROUVE SA PASSION */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-green-400/20 rounded-full text-green-400 text-lg font-bold mb-6">
              Histoire vraie d'équipe libérée
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Quand l'automation <span className="font-bold" style={{color: '#10B981'}}>redonne le sourire</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              L'histoire d'une PME valaisanne dont l'équipe commerciale a retrouvé sa passion
            </p>
          </div>

          {/* AUTOMATION WORKFLOW VISUAL */}
          <div className="mb-16 flex justify-center">
            <div className="w-full max-w-4xl">
              <svg viewBox="0 0 800 400" className="w-full h-auto">
                <defs>
                  <linearGradient id="workflowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#059669" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="humanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#34D399" />
                    <stop offset="100%" stopColor="#10B981" />
                  </linearGradient>
                </defs>
                
                {/* Workflow automation paths */}
                <path d="M50 200 Q200 100 400 200 Q600 300 750 200" 
                      stroke="url(#workflowGradient)" 
                      strokeWidth="3" 
                      fill="none" 
                      strokeDasharray="10,5">
                  <animate attributeName="stroke-dashoffset" values="0;-15;0" dur="3s" repeatCount="indefinite" />
                </path>
                
                {/* Human-automation collaboration nodes */}
                <circle cx="100" cy="200" r="25" fill="url(#humanGradient)" opacity="0.8">
                  <animate attributeName="r" values="25;30;25" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="100" y="250" textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="bold">Équipe</text>
                <text x="100" y="265" textAnchor="middle" fill="#6B7280" fontSize="12">Relation client</text>
                
                <circle cx="300" cy="150" r="20" fill="#059669" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="1.5s" repeatCount="indefinite" />
                </circle>
                <text x="300" y="120" textAnchor="middle" fill="#34D399" fontSize="12">Automation</text>
                <text x="300" y="135" textAnchor="middle" fill="#6B7280" fontSize="10">Suivi leads</text>
                
                <circle cx="500" cy="250" r="20" fill="#059669" opacity="0.6">
                  <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="500" y="220" textAnchor="middle" fill="#34D399" fontSize="12">Automation</text>
                <text x="500" y="235" textAnchor="middle" fill="#6B7280" fontSize="10">Nurturing</text>
                
                <circle cx="700" cy="200" r="25" fill="url(#humanGradient)" opacity="0.8">
                  <animate attributeName="r" values="25;30;25" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <text x="700" y="250" textAnchor="middle" fill="#10B981" fontSize="14" fontWeight="bold">Client</text>
                <text x="700" y="265" textAnchor="middle" fill="#6B7280" fontSize="12">Satisfait</text>
                
                {/* Connection lines showing collaboration */}
                <line x1="125" y1="200" x2="275" y2="150" stroke="#10B981" strokeWidth="2" opacity="0.5" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="525" y1="250" x2="675" y2="200" stroke="#10B981" strokeWidth="2" opacity="0.5" strokeDasharray="5,5">
                  <animate attributeName="stroke-dashoffset" values="0;-10;0" dur="2s" repeatCount="indefinite" />
                </line>
                
                {/* Central title */}
                <text x="400" y="50" textAnchor="middle" fill="#10B981" fontSize="18" fontWeight="bold">Collaboration Humain-Automation</text>
                <text x="400" y="70" textAnchor="middle" fill="#6B7280" fontSize="14">L'automation gère les tâches, l'équipe crée la relation</text>
              </svg>
            </div>
          </div>

          {/* HISTOIRES DE LIBÉRATION D'ÉQUIPES */}
          <div className="space-y-12">
            {/* Histoire 1: Cabinet d'Expertise */}
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-green-400/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-green-400/20 rounded-full text-green-400 text-sm font-medium mb-4">
                      Cabinet Expertise • Valais
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">"Mes collaborateurs ont retrouvé leur passion"</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Avant : Équipe noyée dans les tâches administratives, clients mécontents des délais, collaborateurs démotivés.
                      <br /><br />
                      Après automation : L'équipe se concentre sur le conseil expert, les clients sont suivis automatiquement, 
                      les collaborateurs retrouvent le sens de leur métier.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-gray-300">Temps administratif divisé par 3</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-gray-300">Équipe concentrée sur l'expertise</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      <span className="text-gray-300">Clients mieux accompagnés</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-black/40 rounded-xl p-6">
                    <div className="text-4xl font-bold text-green-400 mb-2">3h</div>
                    <div className="text-gray-300 text-sm mb-4">économisées par jour</div>
                    <div className="text-2xl font-bold text-white mb-2">→</div>
                    <div className="text-lg text-green-400">3h de conseil client</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Histoire 2: PME Manufacturing */}
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-teal-400/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <div className="bg-black/40 rounded-xl p-6">
                    <div className="text-4xl font-bold text-teal-400 mb-2">Zéro</div>
                    <div className="text-gray-300 text-sm mb-4">prospect perdu</div>
                    <div className="text-2xl font-bold text-white mb-2">+</div>
                    <div className="text-lg text-teal-400">Équipe motivée</div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-teal-400/20 rounded-full text-teal-400 text-sm font-medium mb-4">
                      PME Manufacturing • Valais
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">"L'automation nous a redonné confiance"</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Problème : Équipe commerciale débordée, prospects qui s'échappent, démotivation générale.
                      <br /><br />
                      Solution : Workflows intelligents qui maintiennent le contact, équipe qui intervient au bon moment 
                      pour transformer les leads qualifiés.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                      <span className="text-gray-300">Aucun prospect oublié</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                      <span className="text-gray-300">Intervention humaine au bon moment</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                      <span className="text-gray-300">Équipe sereine et efficace</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Histoire 3: E-commerce Local */}
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-emerald-400/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-emerald-400/20 rounded-full text-emerald-400 text-sm font-medium mb-4">
                      E-commerce Local • Suisse Romande
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">"Nos clients se sentent uniques"</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Défi : Messages génériques, clients qui se désabonnent, équipe qui envoie les mêmes emails à tous.
                      <br /><br />
                      Résultat : Automation intelligente qui personnalise selon le comportement, équipe qui crée 
                      des relations authentiques avec les clients VIP.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <span className="text-gray-300">Messages personnalisés automatiquement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <span className="text-gray-300">Équipe dédiée aux clients premium</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                      <span className="text-gray-300">Relations client authentiques</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-black/40 rounded-xl p-6">
                    <div className="text-4xl font-bold text-emerald-400 mb-2">92%</div>
                    <div className="text-gray-300 text-sm mb-4">ouverture emails</div>
                    <div className="text-2xl font-bold text-white mb-2">vs</div>
                    <div className="text-lg text-gray-400">21% avant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
              
          {/* ALTERNATIVES D'AUTOMATION */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">4 Façons de Libérer Votre Équipe</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/60 rounded-xl p-6 border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
                <div className="text-green-400 font-bold text-lg mb-3">CRM Intelligent</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Workflows qui comprennent vos clients et agissent au bon moment, libérant votre équipe pour la relation humaine.
                </p>
              </div>
              
              <div className="bg-black/60 rounded-xl p-6 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300">
                <div className="text-teal-400 font-bold text-lg mb-3">Email Personnalisé</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Messages adaptés automatiquement selon le comportement client, votre équipe intervient pour les opportunités chaudes.
                </p>
              </div>
              
              <div className="bg-black/60 rounded-xl p-6 border border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-300">
                <div className="text-emerald-400 font-bold text-lg mb-3">Lead Qualification</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Scoring automatique des prospects, votre équipe ne traite que les leads qualifiés et prêts à acheter.
                </p>
              </div>
              
              <div className="bg-black/60 rounded-xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                <div className="text-cyan-400 font-bold text-lg mb-3">Suivi Client</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Automation du suivi post-vente, votre équipe se concentre sur le développement et l'innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOUS LE CAPOT - STACK AUTOMATION */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-green-400/20 rounded-full text-green-400 text-lg font-bold mb-6">
              Sous le capot
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Stack qui <span className="font-bold text-green-400">libère vos équipes</span>
            </h2>
            <p className="text-xl text-gray-300">
              Technologies d'automation + expertise humaine = équipe performante et épanouie
            </p>
          </div>

          {/* STACK TECHNIQUE VISUALIZATION */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-green-400/20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* CRM Core */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">CRM Intelligence</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-green-400 font-semibold">HubSpot / Pipedrive</div>
                      <div className="text-gray-400">Configuration experte</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-green-400 font-semibold">ActiveCampaign</div>
                      <div className="text-gray-400">Workflows avancés</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-green-400 font-semibold">Zapier Integration</div>
                      <div className="text-gray-400">Connexions intelligentes</div>
                    </div>
                  </div>
                </div>
                
                {/* Automation Engine */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Moteur Automation</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-teal-400 font-semibold">Triggers Comportementaux</div>
                      <div className="text-gray-400">Réactions intelligentes</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-teal-400 font-semibold">Lead Scoring</div>
                      <div className="text-gray-400">Évaluation automatique</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-teal-400 font-semibold">Sequences Timing</div>
                      <div className="text-gray-400">Moment parfait</div>
                    </div>
                  </div>
                </div>
                
                {/* Human Interface */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Interface Humaine</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-emerald-400 font-semibold">Dashboards Intuitifs</div>
                      <div className="text-gray-400">Équipe autonome</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-emerald-400 font-semibold">Alertes Intelligentes</div>
                      <div className="text-gray-400">Intervention ciblée</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-emerald-400 font-semibold">Formation Continue</div>
                      <div className="text-gray-400">Équipe compétente</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Synergy Explanation */}
              <div className="mt-12 pt-8 border-t border-gray-700/50">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-white mb-4">La Synergie Parfaite</h4>
                  <p className="text-gray-300 max-w-3xl mx-auto">
                    L'automation gère les tâches répétitives et identifie les opportunités. Votre équipe intervient 
                    au moment idéal avec des informations précises pour créer une relation client exceptionnelle.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-green-400/10 rounded-xl p-6 text-center">
                    <div className="text-green-400 font-bold text-lg mb-2">Automation</div>
                    <div className="text-gray-300 text-sm">Gère les processus, qualifie les leads, maintient le contact</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-3xl text-white">→</div>
                  </div>
                  <div className="bg-emerald-400/10 rounded-xl p-6 text-center">
                    <div className="text-emerald-400 font-bold text-lg mb-2">Équipe Humaine</div>
                    <div className="text-gray-300 text-sm">Crée la relation, conseille, transforme</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BÉNÉFICES BUSINESS */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Bénéfices Mesurables pour Votre Business</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-xl p-6 border border-green-400/30">
                <div className="text-3xl font-bold text-green-400 mb-2">+78%</div>
                <div className="text-white font-semibold mb-2">Conversions</div>
                <div className="text-gray-300 text-sm">Leads mieux qualifiés, intervention au bon moment</div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-400/20 to-cyan-400/20 rounded-xl p-6 border border-teal-400/30">
                <div className="text-3xl font-bold text-teal-400 mb-2">-65%</div>
                <div className="text-white font-semibold mb-2">Temps Manuel</div>
                <div className="text-gray-300 text-sm">Équipe libérée des tâches répétitives</div>
              </div>
              
              <div className="bg-gradient-to-br from-emerald-400/20 to-green-400/20 rounded-xl p-6 border border-emerald-400/30">
                <div className="text-3xl font-bold text-emerald-400 mb-2">92%</div>
                <div className="text-white font-semibold mb-2">Email Open</div>
                <div className="text-gray-300 text-sm">Messages personnalisés et pertinents</div>
              </div>
              
              <div className="bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-xl p-6 border border-cyan-400/30">
                <div className="text-3xl font-bold text-cyan-400 mb-2">100%</div>
                <div className="text-white font-semibold mb-2">Équipe Motivée</div>
                <div className="text-gray-300 text-sm">Focus sur l'expertise et la relation client</div>
              </div>
            </div>
          </div>

          {/* FAQ SECTION - INLINE */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-green-400/20 mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Questions que se posent les dirigeants</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-black/40 rounded-xl p-6">
                  <h4 className="text-green-400 font-bold mb-3">"Mon équipe va-t-elle vraiment adopter l'automation ?"</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    L'automation OSOM simplifie le travail de votre équipe, elle ne le complique pas. 
                    Formation incluse pour que chacun maîtrise les outils et retrouve le plaisir de son métier.
                  </p>
                </div>
                
                <div className="bg-black/40 rounded-xl p-6">
                  <h4 className="text-green-400 font-bold mb-3">"Combien de temps avant de voir les résultats ?"</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Premières améliorations en 2-4 semaines. Résultats complets après 3 mois quand 
                    l'équipe maîtrise parfaitement les nouveaux processus.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-black/40 rounded-xl p-6">
                  <h4 className="text-green-400 font-bold mb-3">"L'automation va-t-elle remplacer mes commerciaux ?"</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Au contraire ! L'automation libère vos commerciaux des tâches administratives 
                    pour qu'ils se concentrent sur ce qu'ils font de mieux : vendre et conseiller.
                  </p>
                </div>
                
                <div className="bg-black/40 rounded-xl p-6">
                  <h4 className="text-green-400 font-bold mb-3">"Que se passe-t-il si ça ne fonctionne pas ?"</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Accompagnement inclus pendant 6 mois. Ajustements et optimisations jusqu'à 
                    ce que votre équipe soit parfaitement à l'aise et les résultats au rendez-vous.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-gray-400 mb-8">Équipes B2B libérées par l'automation intelligente</div>
            <div className="flex justify-center items-center space-x-12 opacity-70">
              <div className="text-white font-semibold">CONSEIL</div>
              <div className="text-white font-semibold">MANUFACTURING</div>
              <div className="text-white font-semibold">E-COMMERCE</div>
              <div className="text-green-400 font-semibold">+ 25 SECTEURS</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + PRICING - AUTOMATION QUI LIBÈRE */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-12 border border-green-400/40">
            <div className="mb-8">
              <div className="text-green-400 font-semibold mb-4">
                AUTOMATION QUI LIBÈRE VOS ÉQUIPES
              </div>
              <div className="text-5xl md:text-6xl font-light text-green-400 mb-4">
                8900 CHF
              </div>
              <div className="text-xl text-gray-300 mb-8">
                CRM + Automation + Formation + Accompagnement 6 mois
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-4 bg-black/40 rounded-xl border border-green-400/20">
                <div className="text-green-400 font-bold text-2xl mb-2">
                  Équipe
                </div>
                <div className="text-gray-300">Libérée et motivée</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-xl border border-teal-400/20">
                <div className="text-teal-400 font-bold text-2xl mb-2">
                  3h/jour
                </div>
                <div className="text-gray-300">Rendues à l'expertise</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-xl border border-emerald-400/20">
                <div className="text-emerald-400 font-bold text-2xl mb-2">
                  100%
                </div>
                <div className="text-gray-300">Satisfaction clients</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block px-16 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-6 transform hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #10B981, #70c1a9)' }}
            >
              Libérer Mon Équipe Maintenant
            </Link>
            
            <div className="text-sm text-gray-400">
              Consultation gratuite • CRM adapté à votre métier • Équipe autonome en 3 mois
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - RÉCUPÉRATION TEMPLATE */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Questions <span className="font-bold text-green-400">Automation Équipes</span>
            </h2>
            <p className="text-xl text-gray-300">
              Tout sur l'automation qui libère vos collaborateurs
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-green-400/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-medium text-white pr-8">{faq.question}</h3>
                  <div className={`text-green-400 text-2xl transform transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                    +
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-700/50 pt-6">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">Prêt à libérer le potentiel de votre équipe ?</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl border border-green-400/40 text-green-400 hover:bg-green-400/10 transition-colors duration-300"
            >
              Consultation Automation Gratuite
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
    </div>
  )
}

<style jsx>{`
  @keyframes fade-in {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes bounce-slow {
    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
    40% { transform: translateY(-10px); }
    60% { transform: translateY(-5px); }
  }
  
  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }
  
  .animate-fade-in-delay-1 {
    animation: fade-in 1s ease-out 0.3s both;
  }
  
  .animate-fade-in-delay-2 {
    animation: fade-in 1s ease-out 0.6s both;
  }
  
  .animate-bounce-slow {
    animation: bounce-slow 2s infinite;
  }
`}</style>