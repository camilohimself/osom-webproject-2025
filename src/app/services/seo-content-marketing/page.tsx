'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import React from 'react'
import { SimpleLineChart } from '@/components/ui'
import IconeOSOM from '@/components/IconeOSOM'

export default function SEOContentMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [animatedValue, setAnimatedValue] = useState(0)
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [codeAnimations, setCodeAnimations] = useState<{[key: number]: number}>({})
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  
  // Animation du compteur satisfaction clients
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(95)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // IntersectionObserver pour les cartes techniques
  useEffect(() => {
    const observers: IntersectionObserver[] = []
    
    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleCards(prev => [...prev, index])
                // Démarrer l'animation du code
                setTimeout(() => {
                  setCodeAnimations(prev => ({ ...prev, [index]: 1 }))
                }, 500)
              }
            })
          },
          { threshold: 0.3 }
        )
        observer.observe(ref)
        observers.push(observer)
      }
    })
    
    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [])

  // Données techniques SEO
  const technicalSkills = [
    {
      id: 0,
      title: "Audit & Analyse",
      description: "Nous identifions ce qui bloque votre visibilité et découvrons les opportunités cachées de votre secteur.",
      icon: "search" as const,
      color: "cyan" as const,
      code: [
        "// Audit SEO profond",
        "crawlSite('votre-site.ch')",
        "  .analyzeKeywords(['valais', 'médecin', 'conseil'])",
        "  .findBrokenLinks()",
        "  .checkCompetitors()",
        "  .generateReport()",
        "",
        "console.log('Opportunités trouvées:', opportunities)"
      ]
    },
    {
      id: 1, 
      title: "Copywriting & On-Page",
      description: "Nous réécrivons vos pages pour qu'elles plaisent aux moteurs de recherche et séduisent vos prospects.",
      icon: "document" as const,
      color: "yellow" as const,
      code: [
        "// Optimisation contenu",
        "const pageOptimization = {",
        "  title: 'Cabinet Médical Sion | Dr. Martin',",
        "  meta: 'Consultation médicale Valais...',",
        "  h1: 'Votre santé entre de bonnes mains',",
        "  keywords: ['médecin sion', 'consultation']",
        "}",
        "",
        "optimizePage(pageOptimization)"
      ]
    },
    {
      id: 2,
      title: "Optimisation Technique", 
      description: "Nous accélérons votre site, améliorons le maillage interne et optimisons chaque détail technique.",
      icon: "tools" as const,
      color: "purple" as const,
      code: [
        "// Performance technique",
        "const siteOptimization = {",
        "  loadingTime: '< 2 secondes',",
        "  mobileScore: 95,",
        "  internalLinks: optimizeStructure(),",
        "  sitemap: generateXML()",
        "}",
        "",
        "console.log('Site optimisé:', siteOptimization)"
      ]
    },
    {
      id: 3,
      title: "Reporting & Data",
      description: "Nous créons vos tableaux de bord GA4 et Search Console pour suivre chaque progression en temps réel.",
      icon: "chart" as const,
      color: "green" as const,
      code: [
        "// Tableau de bord SEO",
        "const monthlyReport = {",
        "  organicTraffic: '+180%',",
        "  avgPosition: 3.2,",
        "  clientsSatisfaits: '95%',",
        "  conversions: 47",
        "}",
        "",
        "sendReport(client, monthlyReport)"
      ]
    }
  ]

  const clientSuccessStories = [
    {
      story: "Clients Satisfaits",
      result: "95%",
      description: "recommandent nos services",
      impact: "Croissance durable",
      color: "#70c1a9"
    },
    {
      story: "Prospects Qualifiés",
      result: "3-5/semaine",
      description: "demandes reçues automatiquement",
      impact: "Pipeline rempli",
      color: "#70c1a9"
    },
    {
      story: "Visibilité Google",
      result: "Top 3",
      description: "position sur mots-clés ciblés",
      impact: "Autorité reconnue",
      color: "#70c1a9"
    },
    {
      story: "Croissance Business",
      result: "+180%",
      description: "chiffre d'affaires moyen",
      impact: "ROI exceptionnel",
      color: "#70c1a9"
    }
  ]

  const faqData = [
    {
      question: "Combien coûte le SEO pour une entreprise valaisanne ?",
      answer: "Formule SEO Complète : 2800 CHF/mois incluant audit technique, optimisation 15 pages, 4 articles premium, suivi positions Google, rapport mensuel détaillé et support illimité. Résultats mesurés en 90 jours avec garantie satisfaction."
    },
    {
      question: "Combien de temps faut-il pour voir des résultats SEO ?",
      answer: "Premiers résultats en 30 jours, accélération en 90 jours. Cabinet local reçoit maintenant 3-4 demandes qualifiées chaque semaine depuis Google. Croissance du chiffre d'affaires de 180% en 8 mois."
    },
    {
      question: "Pourquoi le SEO local Valais est-il si important ?",
      answer: "1,718 recherches/mois pour 'création site internet valais' avec 0% CTR actuellement = opportunité massive. Nous captons ce trafic invisible pour générer des clients automatiquement."
    },
    {
      question: "Comment mesurez-vous l'efficacité de votre SEO ?",
      answer: "Google Analytics 4, Search Console, positions moyennes, engagement quality. Transparence totale : vous recevez un dashboard temps réel avec tous les KPI. Résultats vérifiables à tout moment."
    },
    {
      question: "Que comprend votre service SEO complet ?",
      answer: "Service complet : audit technique initial, optimisation 15 pages principales, création 4 articles premium/mois, netlinking local qualitatif, suivi 50 mots-clés, dashboard temps réel, rapport mensuel + appel stratégique. Dominez votre secteur en Valais."
    },
    {
      question: "Le SEO fonctionne-t-il pour tous les secteurs en Valais ?",
      answer: "Oui, nos méthodes s'adaptent : BTP, tourisme, services B2B, commerce local. Chaque secteur a ses mots-clés spécifiques que nous maîtrisons parfaitement pour générer des leads qualifiés."
    },
    {
      question: "Quelle différence avec les autres agences SEO ?",
      answer: "Nous visons amélioration trafic organique mesurable en 6 mois. Méthode transparente avec reporting mensuel. Expertise locale + résultats mesurés vs promesses sans suivi."
    },
    {
      question: "Comment le content marketing booste-t-il mon SEO ?",
      answer: "Contenu optimisé = autorité Google. Notre stratégie : 4 articles premium/mois ciblant vos prospects. Résultat : vous devenez LA référence dans votre domaine. Contenu qui convertit les visiteurs en clients fidèles."
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
    <div className="min-h-screen bg-black">
      {/* HERO SECTION - VISUEL MÉTAPHORIQUE + STORYTELLING */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* VISUEL MÉTAPHORIQUE - PHARE/AIMANT EN ARRIÈRE-PLAN */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-400/10 via-teal-500/5 to-cyan-400/5" />
          
          {/* Visuel SVG Phare métaphorique */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-20">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                <linearGradient id="lighthouse-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#70c1a9', stopOpacity: 0.8}} />
                  <stop offset="50%" style={{stopColor: '#00bcd4', stopOpacity: 0.6}} />
                  <stop offset="100%" style={{stopColor: '#4dd0e1', stopOpacity: 0.4}} />
                </linearGradient>
                
                <linearGradient id="light-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{stopColor: '#70c1a9', stopOpacity: 0.1}} />
                  <stop offset="50%" style={{stopColor: '#00bcd4', stopOpacity: 0.3}} />
                  <stop offset="100%" style={{stopColor: '#4dd0e1', stopOpacity: 0.1}} />
                </linearGradient>
              </defs>
              
              {/* Phare principal */}
              <path d="M180 350 L180 150 L220 150 L220 350 Z" fill="url(#lighthouse-gradient)" stroke="#70c1a9" strokeWidth="2"/>
              
              {/* Sommet du phare */}
              <path d="M160 150 L200 100 L240 150 Z" fill="url(#lighthouse-gradient)" stroke="#70c1a9" strokeWidth="2"/>
              
              {/* Rayons de lumière */}
              <path d="M200 100 L50 50 L50 80 L200 120 Z" fill="url(#light-gradient)" opacity="0.6">
                <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
              </path>
              <path d="M200 100 L350 50 L350 80 L200 120 Z" fill="url(#light-gradient)" opacity="0.4">
                <animate attributeName="opacity" values="0.6;0.4;0.6" dur="3s" repeatCount="indefinite"/>
              </path>
              <path d="M200 100 L100 30 L120 50 L200 110 Z" fill="url(#light-gradient)" opacity="0.5">
                <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4s" repeatCount="indefinite"/>
              </path>
              
              {/* Base rocheuse */}
              <ellipse cx="200" cy="360" rx="40" ry="15" fill="#2d3748" opacity="0.8"/>
              
              {/* Étoiles/clients attirés */}
              <circle cx="80" cy="80" r="3" fill="#70c1a9" opacity="0.8">
                <animate attributeName="opacity" values="0.4;1;0.4" dur="2s" repeatCount="indefinite"/>
              </circle>
              <circle cx="320" cy="70" r="2" fill="#00bcd4" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
              </circle>
              <circle cx="120" cy="50" r="2" fill="#4dd0e1" opacity="0.7">
                <animate attributeName="opacity" values="0.3;0.9;0.3" dur="3s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* GAUCHE - STORYTELLING PUR */}
            <div className="text-left">
              <div className="inline-block px-4 py-2 bg-teal-400/20 rounded-full text-teal-400 text-sm font-medium mb-6">
                PME Valais • Transformation digitale
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Attirez et convertissez <span className="text-teal-400 font-bold">vos prospects</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Grâce à un <strong className="text-teal-400">SEO local narratif</strong> qui guide vos clients idéaux directement vers votre expertise.
              </h2>

              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Comme un phare guide les navires vers le port, votre contenu optimisé attire naturellement les prospects qualifiés qui recherchent vos services en Valais.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block px-10 py-5 rounded-xl font-bold text-xl text-black transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110"
                  style={{ background: 'linear-gradient(135deg, #70c1a9, #00bcd4)', fontFamily: 'Cera PRO, Inter, sans-serif' }}
                >
                  Audit SEO gratuit
                </Link>
                <Link
                  href="/realisations" 
                  className="inline-flex items-center px-8 py-5 rounded-xl border border-teal-400/40 text-teal-400 hover:bg-teal-400/10 hover:border-teal-400/60 hover:text-teal-300 transition-all duration-300 text-lg font-medium"
                  style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                >
                  Voir nos histoires clients
                </Link>
              </div>
            </div>
            
            {/* DROITE - CAS CLIENT CONCRET */}
            <div className="relative">
              <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-teal-400/20 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-teal-400/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center">
                      <IconeOSOM 
                        type="consultation" 
                        size={40} 
                        color="cyan" 
                        withAnimation 
                        ariaLabel="Cabinet conseil en croissance" 
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                        Cabinet Conseil Valais
                      </h3>
                      <div className="text-teal-400 text-sm">Services B2B • Entreprise familiale</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    <div className="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                      <div className="text-red-400 text-sm font-medium mb-2">AVANT • Problème</div>
                      <p className="text-gray-300 text-sm">
                        Invisible sur Google malgré 15 ans d'expertise. Seulement 2-3 nouveaux clients par mois.
                      </p>
                    </div>
                    
                    <div className="bg-teal-500/10 rounded-xl p-4 border border-teal-500/20">
                      <div className="text-teal-400 text-sm font-medium mb-2">APRÈS • Transformation</div>
                      <p className="text-gray-300 text-sm">
                        Top 3 Google sur ses mots-clés. 15-20 demandes qualifiées chaque mois.
                      </p>
                    </div>
                  </div>
                  
                  <div className="text-center p-4 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-xl border border-teal-400/30">
                    <p className="text-white italic mb-2">
                      "Nos prospects nous trouvent maintenant avant nos concurrents"
                    </p>
                    <div className="text-teal-400 font-bold text-lg">Chiffre d'affaires doublé en 8 mois</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DÉMONSTRATION SEO LIVE - PUISSANCE TECHNIQUE */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-teal-400/20 rounded-full text-teal-400 text-lg font-bold mb-6">
              Pendant que vous regardez
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Votre SEO <span className="font-bold" style={{color: '#70c1a9'}}>s'optimise en temps réel</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Notre technologie analyse et optimise continuellement votre présence Google
            </p>
          </div>

          {/* SEO DASHBOARD LIVE */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-teal-400/20 overflow-hidden mb-12">
            <div className="bg-gray-800/80 px-6 py-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-gray-300 text-sm font-mono">OSOM SEO Command Center</div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* ANALYSE SEO EN TEMPS RÉEL */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Analyse SEO automatique</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                      <span className="text-teal-400 text-sm">Scanning</span>
                    </div>
                  </div>
                  
                  <div className="bg-black/60 rounded-xl p-4 font-mono text-sm overflow-hidden">
                    <div className="text-teal-400 mb-2">{/* Optimisation en cours... */}</div>
                    <div className="text-blue-400 inline">const </div>
                    <div className="text-yellow-400 inline">votreSEO </div>
                    <div className="text-white inline">= &#123;</div>
                    <div className="ml-4 text-white">engagement: <span className="text-teal-400 animate-pulse">&apos;{Math.floor(animatedValue)}%&apos;</span>,</div>
                    <div className="ml-4 text-white">recherches: <span className="text-teal-400">&apos;1,718/mois&apos;</span>,</div>
                    <div className="ml-4 text-white">position: <span className="text-teal-400">&apos;Top 3 Google&apos;</span>,</div>
                    <div className="ml-4 text-white">trafic: <span className="text-teal-400 animate-pulse">&apos;+180%&apos;</span></div>
                    <div className="text-white">&#125;</div>
                    
                    <div className="mt-4 text-teal-400">✓ Mots-clés optimisés</div>
                    <div className="text-teal-400">✓ Meta descriptions réécrites</div>
                    <div className="text-teal-400">✓ Structure technique validée</div>
                    <div className="text-teal-400 animate-pulse">⚡ Indexation Google...</div>
                  </div>
                </div>
                
                {/* MÉTRIQUES TEMPS RÉEL */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Performance SEO Live</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Clients Satisfaits</span>
                        <span className="text-teal-400 font-bold text-xl">{Math.floor(animatedValue)}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transition-all duration-3000 ease-out" style={{width: `${animatedValue}%`}}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">recommandent nos services</div>
                    </div>
                    
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Recherches captées</span>
                        <span className="text-teal-400 font-bold text-xl">1,718</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-blue-400 rounded-full transition-all duration-4000 ease-out" style={{width: '85%'}}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Recherches/mois automatiquement</div>
                    </div>
                    
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Trafic organique</span>
                        <span className="text-teal-400 font-bold text-2xl">+180%</span>
                      </div>
                      <div className="text-xs text-gray-400">Croissance continue mesurée</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-xl p-4 border border-teal-400/30">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse"></div>
                        <span className="text-white font-semibold">Google approuve</span>
                      </div>
                      <div className="text-sm text-gray-300 mt-1">Votre site gagne en autorité 24h/24</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CAS D'USAGE PME AVANT/APRÈS */}
              <div className="mt-12 pt-8 border-t border-gray-700/50">
                <h3 className="text-2xl font-bold text-white text-center mb-8">L'histoire d'une PME valaisanne</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* AVANT */}
                  <div className="bg-red-500/10 rounded-2xl p-8 border border-red-500/20">
                    <h4 className="text-red-400 font-bold text-xl mb-6 text-center">AVANT OSOM</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 group">
                        <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                          <IconeOSOM type="eye-blocked" size={20} color="red" ariaLabel="Site invisible sur Google" />
                        </div>
                        <p className="text-gray-300">Invisible sur Google malgré 15 ans d'expertise</p>
                      </div>
                      <div className="flex items-center space-x-3 group">
                        <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                          <IconeOSOM type="empty-inbox" size={20} color="red" ariaLabel="Peu de demandes" />
                        </div>
                        <p className="text-gray-300">Seulement 2-3 demandes par mois via le site</p>
                      </div>
                      <div className="flex items-center space-x-3 group">
                        <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                          <IconeOSOM type="phone" size={20} color="red" ariaLabel="Dépendance bouche-à-oreille" />
                        </div>
                        <p className="text-gray-300">100% dépendant du bouche-à-oreille</p>
                      </div>
                      <div className="flex items-center space-x-3 group">
                        <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                          <IconeOSOM type="clock" size={20} color="red" ariaLabel="Croissance lente" />
                        </div>
                        <p className="text-gray-300">Croissance limitée et imprévisible</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-black/40 rounded-xl">
                      <div className="text-center">
                        <div className="text-red-400 text-sm">Situation initiale</div>
                        <div className="text-2xl font-bold text-red-400 mt-2">Page 3+ Google</div>
                        <div className="text-gray-400 text-sm">Invisible pour les prospects</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* APRÈS */}
                  <div className="bg-teal-500/10 rounded-2xl p-8 border border-teal-500/20">
                    <h4 className="text-teal-400 font-bold text-xl mb-6 text-center">APRÈS 6 MOIS</h4>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 group">
                        <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                          <IconeOSOM type="search" size={20} color="green" ariaLabel="Première page Google" />
                        </div>
                        <p className="text-gray-300">Première page Google sur ses mots-clés cibles</p>
                      </div>
                      <div className="flex items-center space-x-3 group">
                        <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                          <IconeOSOM type="email" size={20} color="green" ariaLabel="Demandes qualifiées" />
                        </div>
                        <p className="text-gray-300">15-20 demandes qualifiées chaque mois</p>
                      </div>
                      <div className="flex items-center space-x-3 group">
                        <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                          <IconeOSOM type="star" size={20} color="green" ariaLabel="Autorité reconnue" />
                        </div>
                        <p className="text-gray-300">Reconnue comme autorité locale dans son domaine</p>
                      </div>
                      <div className="flex items-center space-x-3 group">
                        <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                          <IconeOSOM type="rocket" size={20} color="green" ariaLabel="Croissance prévisible" />
                        </div>
                        <p className="text-gray-300">Croissance prévisible et pipeline rempli</p>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-xl border border-teal-400/30">
                      <div className="text-center">
                        <div className="text-teal-400 text-sm">Résultat obtenu</div>
                        <div className="text-2xl font-bold text-teal-400 mt-2">Top 3 Google</div>
                        <div className="text-gray-300 text-sm">7x plus de clients qualifiés</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-teal-400/20 max-w-2xl mx-auto">
                    <p className="text-gray-300 text-lg mb-4">
                      <strong className="text-teal-400">"En 6 mois, notre chiffre d'affaires a doublé</strong> grâce à la visibilité Google. Nous refusons maintenant des clients par manque de disponibilité."
                    </p>
                    <div className="text-gray-400 text-sm">
                      — Directeur PME Services B2B, Valais
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TECHNIQUE - SOUS LE CAPOT */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-purple-400/20 rounded-full text-purple-400 text-lg font-bold mb-6">
              Sous le capot
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Ce que nous faisons <span className="font-bold text-teal-400">pour vous</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Derrière chaque stratégie SEO se cachent des analyses et optimisations pointues réalisées par nos experts. Découvrez notre savoir-faire en action.
            </p>
          </div>

          {/* CARTES TECHNIQUES INTERACTIVES */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {technicalSkills.map((skill, index) => (
              <div
                key={skill.id}
                ref={el => { cardRefs.current[index] = el }}
                className={`bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-700 transform hover:scale-105 hover:shadow-xl ${
                  skill.color === 'cyan' ? 'border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-cyan-400/10' :
                  skill.color === 'yellow' ? 'border-yellow-400/20 hover:border-yellow-400/40 hover:shadow-yellow-400/10' :
                  skill.color === 'purple' ? 'border-purple-400/20 hover:border-purple-400/40 hover:shadow-purple-400/10' :
                  'border-green-400/20 hover:border-green-400/40 hover:shadow-green-400/10'
                } ${visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              >
                {/* HEADER CARTE */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                    skill.color === 'cyan' ? 'bg-cyan-400/20' :
                    skill.color === 'yellow' ? 'bg-yellow-400/20' :
                    skill.color === 'purple' ? 'bg-purple-400/20' :
                    'bg-green-400/20'
                  } hover:scale-110`}>
                    <IconeOSOM 
                      type={skill.icon} 
                      size={32} 
                      color={skill.color} 
                      ariaLabel={`Icône ${skill.title}`}
                      withAnimation 
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{skill.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{skill.description}</p>
                  </div>
                </div>

                {/* CODE ANIMÉ */}
                <div className="bg-black/60 rounded-xl p-6 border border-gray-700/50 overflow-hidden">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-400 font-mono">OSOM-SEO.js</div>
                  </div>
                  
                  <div className="font-mono text-sm space-y-1">
                    {skill.code.map((line, lineIndex) => (
                      <div
                        key={lineIndex}
                        className={`transition-all duration-500 ${
                          codeAnimations[index] && lineIndex < (codeAnimations[index] * skill.code.length) 
                            ? 'opacity-100 translate-x-0' 
                            : 'opacity-30 translate-x-2'
                        } ${
                          line.startsWith('//') ? 'text-green-400' :
                          line.includes('const') || line.includes('console') ? 'text-blue-400' :
                          line.includes(':') && line.includes("'") ? 'text-yellow-400' :
                          line.includes('[') || line.includes(']') ? 'text-purple-400' :
                          'text-gray-300'
                        }`}
                        style={{ 
                          transitionDelay: codeAnimations[index] ? `${lineIndex * 200}ms` : '0ms'
                        }}
                      >
                        {line === '' ? '\u00A0' : line}
                      </div>
                    ))}
                  </div>

                  {/* INDICATEUR D'EXÉCUTION */}
                  {codeAnimations[index] && (
                    <div className="mt-4 pt-4 border-t border-gray-700/50">
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full animate-pulse ${
                          skill.color === 'cyan' ? 'bg-cyan-400' :
                          skill.color === 'yellow' ? 'bg-yellow-400' :
                          skill.color === 'purple' ? 'bg-purple-400' :
                          'bg-green-400'
                        }`}></div>
                        <span className={`text-sm font-medium ${
                          skill.color === 'cyan' ? 'text-cyan-400' :
                          skill.color === 'yellow' ? 'text-yellow-400' :
                          skill.color === 'purple' ? 'text-purple-400' :
                          'text-green-400'
                        }`}>
                          Optimisation en cours...
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Résumé textuel pour l'accessibilité */}
                  <div className="sr-only">
                    Code technique pour {skill.title}: {skill.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RÉSUMÉ IMPACT */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-teal-400/20">
              <h3 className="text-2xl font-bold text-white mb-6">Résultat de notre expertise technique</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">97%</div>
                  <div className="text-gray-300 text-sm">Score technique</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">&lt; 2s</div>
                  <div className="text-gray-300 text-sm">Temps chargement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">Top 3</div>
                  <div className="text-gray-300 text-sm">Position Google</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">Monitoring actif</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRESSION CLIENT - RÉCIT NARRATIF */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              La transformation d'une <span className="font-bold text-teal-400">PME locale</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comment une entreprise familiale a multiplié ses clients en 8 mois grâce au SEO narratif
            </p>
          </div>

          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-teal-400/20 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* RÉCIT NARRATIF */}
              <div>
                <div className="inline-block px-4 py-2 bg-teal-400/20 rounded-full text-teal-400 text-sm font-medium mb-6">
                  Cabinet de conseil • Entreprise familiale
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-6" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  De l'invisibilité au leadership local
                </h3>
                
                <div className="space-y-6 text-gray-300 leading-relaxed">
                  <p>
                    <strong className="text-white">Le défi :</strong> Malgré 15 ans d'expertise et une excellente réputation, cette PME valaisanne restait invisible sur Google. Résultat : seulement 2-3 nouveaux clients par mois via le digital.
                  </p>
                  
                  <p>
                    <strong className="text-white">La transformation :</strong> En 8 mois, nous avons construit sa présence Google de zéro. Articles d'expertise, optimisations techniques, présence locale renforcée.
                  </p>
                  
                  <p>
                    <strong className="text-teal-400">Le résultat :</strong> Aujourd'hui, elle reçoit 15-20 demandes qualifiées par mois et doit refuser des clients par manque de disponibilité. Son chiffre d'affaires a doublé.
                  </p>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-2xl border border-teal-400/30">
                  <div className="text-center">
                    <div className="text-teal-400 text-sm mb-2">Citation directe</div>
                    <p className="text-white italic text-lg">
                      "Nos prospects nous trouvent maintenant avant nos concurrents. C'est un game-changer total."
                    </p>
                    <div className="text-gray-400 text-sm mt-3">— Directeur, PME Services B2B</div>
                  </div>
                </div>
              </div>
              
              {/* COURBE DE PROGRESSION */}
              <div>
                <h4 className="text-xl font-bold text-white mb-8 text-center">Évolution mensuelle des demandes clients</h4>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                      <span className="text-red-400 font-bold text-sm">M0</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Avant OSOM</span>
                        <span className="text-red-400 font-bold">2-3 clients/mois</span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-red-400 rounded-full" style={{width: '15%'}} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center">
                      <span className="text-yellow-400 font-bold text-sm">M3</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Premiers résultats</span>
                        <span className="text-yellow-400 font-bold">8 clients/mois</span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-yellow-400 rounded-full" style={{width: '45%'}} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                      <span className="text-teal-400 font-bold text-sm">M6</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Accélération</span>
                        <span className="text-teal-400 font-bold">15 clients/mois</span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-teal-400 rounded-full" style={{width: '75%'}} />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-400 flex items-center justify-center">
                      <span className="text-black font-bold text-sm">M8</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">Leadership local</span>
                        <span className="text-cyan-400 font-bold">20+ clients/mois</span>
                      </div>
                      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-cyan-400 to-teal-400 rounded-full" style={{width: '100%'}} />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Résultat final */}
                <div className="mt-8 p-6 bg-black/40 rounded-2xl text-center">
                  <div className="text-4xl font-black text-cyan-400 mb-2">x7</div>
                  <div className="text-white font-semibold">Plus de clients qualifiés</div>
                  <div className="text-gray-400 text-sm mt-2">Croissance organique durable</div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <div className="text-sm text-gray-400 mb-4">
                Données Google Analytics vérifiées • Suivi sur 240+ jours
              </div>
              <Link
                href="/realisations"
                className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300 font-medium"
              >
                Voir plus de cas clients →
              </Link>
            </div>
          </div>

          <div className="text-center">
            <div className="text-gray-400 mb-8">Nos services connexes</div>
            <div className="flex justify-center items-center space-x-8 opacity-70">
              <Link href="/services/creation-site-web" className="text-white font-semibold hover:text-teal-400">CRÉATION SITE</Link>
              <Link href="/services/tracking-data" className="text-white font-semibold hover:text-teal-400">TRACKING</Link>
              <Link href="/realisations" className="text-teal-400 font-semibold hover:text-cyan-400">NOS RÉSULTATS</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULE SEO - LIVRABLES CONCRETS */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-teal-400/40 relative overflow-hidden">
            
            <div className="text-center mb-12">
              <div className="text-teal-400 font-semibold mb-4 text-lg">
                FORMULE SEO CROISSANCE
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Votre visibilité Google <span className="font-bold text-teal-400">clé en main</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Accompagnement complet pour dominer votre marché local et attirer vos clients idéaux
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* LIVRABLES CONCRETS */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  Ce que vous recevez chaque mois
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-teal-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <IconeOSOM type="search" size={24} color="cyan" ariaLabel="Audit mensuel" withAnimation />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Audit technique complet</h4>
                      <p className="text-gray-300 text-sm">Analyse mensuelle de votre site + recommandations prioritaires</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <IconeOSOM type="document" size={24} color="yellow" ariaLabel="Articles optimisés" withAnimation />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">4 articles d'expertise SEO</h4>
                      <p className="text-gray-300 text-sm">Contenus optimisés qui démontrent votre savoir-faire à vos prospects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-purple-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <IconeOSOM type="tools" size={24} color="purple" ariaLabel="Optimisations techniques" withAnimation />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Optimisations techniques</h4>
                      <p className="text-gray-300 text-sm">Vitesse, mobile, maillage interne : tout est optimisé pour Google</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-green-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <IconeOSOM type="chart" size={24} color="green" ariaLabel="Reporting mensuel" withAnimation />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Reporting mensuel exécutif</h4>
                      <p className="text-gray-300 text-sm">Dashboard GA4 + Search Console + évolution positions Google</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-400/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <IconeOSOM type="phone" size={24} color="cyan" ariaLabel="Support dédié" withAnimation />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Support stratégique</h4>
                      <p className="text-gray-300 text-sm">Point mensuel + support réactif pour toutes vos questions SEO</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* PRIX ET GARANTIES */}
              <div className="text-center">
                <div className="bg-gradient-to-br from-teal-400/10 to-cyan-400/10 rounded-2xl p-8 border border-teal-400/30 mb-8">
                  <div className="text-teal-400 font-bold text-lg mb-2">INVESTISSEMENT MENSUEL</div>
                  <div className="text-5xl md:text-6xl font-black text-teal-400 mb-2">
                    2,800 CHF
                  </div>
                  <div className="text-gray-300 text-lg mb-6">
                    Tout inclus • Sans engagement
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Premiers résultats sous 90 jours</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">ROI moyen 300% en 12 mois</span>
                    </div>
                    <div className="flex items-center justify-center space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Arrêt possible à tout moment</span>
                    </div>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="block w-full px-8 py-4 rounded-xl font-bold text-xl text-black transition-all duration-300 hover:scale-105 hover:shadow-xl mb-4"
                    style={{ background: 'linear-gradient(135deg, #70c1a9, #00bcd4)', fontFamily: 'Cera PRO, Inter, sans-serif' }}
                  >
                    Démarrer mon SEO
                  </Link>
                  
                  <Link
                    href="/contact"
                    className="block w-full px-6 py-3 rounded-xl border border-teal-400/40 text-teal-400 hover:bg-teal-400/10 transition-all duration-300 text-sm"
                  >
                    Audit gratuit (valeur 800 CHF)
                  </Link>
                </div>
                
                <div className="bg-black/40 rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-4">Garantie résultats</h4>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-1">90 jours</div>
                    <div className="text-gray-300 text-sm">pour voir vos premières positions Google s'améliorer</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-700/50 text-center">
              <div className="text-gray-400">
                Formule adaptée aux PME valaisannes • Spécialistes cabinets médicaux et services B2B
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES CLIENTS */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Ce que disent <span className="font-bold text-teal-400">nos clients</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Dirigeants de PME qui ont transformé leur visibilité Google avec OSOM
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Témoignage 1 - Cabinet Médical */}
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center mr-4">
                  <IconeOSOM type="medical" size={32} color="cyan" ariaLabel="Cabinet médical" withAnimation />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold">Dr. Sarah M.</div>
                  <div className="text-gray-400 text-sm">Médecin généraliste</div>
                  <div className="text-teal-400 text-xs mt-1">Cabinet Médical Sion</div>
                  <div className="inline-block px-2 py-1 bg-teal-400/20 rounded text-xs text-teal-400 mt-2">Santé</div>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed mb-6">
                "En 6 mois, notre planning s'est naturellement rempli. Les patients nous trouvent maintenant en première page Google quand ils cherchent un médecin à Sion."
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-yellow-400 text-lg">★</div>
                  ))}
                </div>
                <div className="text-teal-400 font-bold">3x plus de patients</div>
              </div>
            </div>

            {/* Témoignage 2 - Services B2B */}
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center mr-4">
                  <IconeOSOM type="engineering" size={32} color="cyan" ariaLabel="Services B2B" withAnimation />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold">Marc R.</div>
                  <div className="text-gray-400 text-sm">Directeur Commercial</div>
                  <div className="text-teal-400 text-xs mt-1">Entreprise Services B2B</div>
                  <div className="inline-block px-2 py-1 bg-teal-400/20 rounded text-xs text-teal-400 mt-2">B2B</div>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed mb-6">
                "Notre chiffre d'affaires a doublé en 8 mois. OSOM a transformé notre invisibilité Google en véritable aimant à prospects qualifiés."
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-yellow-400 text-lg">★</div>
                  ))}
                </div>
                <div className="text-teal-400 font-bold">CA x2 en 8 mois</div>
              </div>
            </div>

            {/* Témoignage 3 - Commerce Local */}
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400/20 to-cyan-400/20 flex items-center justify-center mr-4">
                  <IconeOSOM type="retail" size={32} color="cyan" ariaLabel="Commerce local" withAnimation />
                </div>
                <div className="flex-1">
                  <div className="text-white font-bold">Claudine F.</div>
                  <div className="text-gray-400 text-sm">Propriétaire</div>
                  <div className="text-teal-400 text-xs mt-1">Commerce Local Valais</div>
                  <div className="inline-block px-2 py-1 bg-teal-400/20 rounded text-xs text-teal-400 mt-2">Commerce</div>
                </div>
              </div>
              <p className="text-gray-300 italic leading-relaxed mb-6">
                "Nous refusons maintenant des clients par manque de disponibilité. Notre présence Google attire exactement les clients que nous voulons."
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="text-yellow-400 text-lg">★</div>
                  ))}
                </div>
                <div className="text-teal-400 font-bold">Top 3 Google local</div>
              </div>
            </div>
          </div>

          {/* Social Proof Stats */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-8 border border-teal-400/20 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">25+</div>
                  <div className="text-gray-300">Entreprises accompagnées</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">4.9/5</div>
                  <div className="text-gray-300">Satisfaction client</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-400 mb-2">90%</div>
                  <div className="text-gray-300">Renouvellent leur abonnement</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/realisations"
              className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300 font-medium"
            >
              Voir tous nos témoignages et cas clients →
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Questions <span className="font-bold text-teal-400">SEO</span>
            </h2>
            <p className="text-xl text-gray-300">
              Tout sur notre stratégie SEO dominante
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-teal-400/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-medium text-white pr-8">{faq.question}</h3>
                  <div className={`text-teal-400 text-2xl transform transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
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
            <p className="text-gray-400 mb-6">Questions sur votre stratégie SEO ?</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl border border-teal-400/40 text-teal-400 hover:bg-teal-400/10 transition-colors duration-300"
            >
              Audit SEO Gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "SEO Content Marketing OSOM",
            "provider": {
              "@type": "Organization", 
              "name": "OSOM",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Valais",
                "addressCountry": "CH"
              }
            },
            "areaServed": "Valais",
            "serviceType": "SEO et Content Marketing",
            "description": "Agence SEO spécialisée référencement naturel local et content marketing pour cabinets B2B en Valais"
          })
        }}
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