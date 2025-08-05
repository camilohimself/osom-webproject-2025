'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
import { SimpleAreaChart } from '@/components/ui'

export default function TrackingDataPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [animatedValue, setAnimatedValue] = useState(0)
  
  // Animation du compteur 14,171
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(14171)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const performanceResults = [
    {
      metric: "Sessions Récupérées",
      ourResult: "14,171",
      industry: "0 invisibles",
      improvement: "ROI révélé intégralement",
      color: "#8B5CF6"
    },
    {
      metric: "Visibilité ROI",
      ourResult: "100%",
      industry: "12% partielle",
      improvement: "8x plus transparent",
      color: "#8B5CF6"
    },
    {
      metric: "Attribution Précision",
      ourResult: "94%",
      industry: "67% approximative",
      improvement: "40% plus précise",
      color: "#8B5CF6"
    },
    {
      metric: "Valeur Client Révélée",
      ourResult: "47,000 CHF",
      industry: "0 CHF invisible",
      improvement: "ROI complet dévoilé",
      color: "#8B5CF6"
    }
  ]

  const faqData = [
    {
      question: "Comment le tracking avancé révèle-t-il le ROI invisible de mon entreprise valaisanne ?",
      answer: "Notre audit technique détecte les sources de revenus non trackées : email campaigns sans UTM, trafic social mal attribué, conversions offline non connectées. Setup GA4 server-side + Google Tag Manager expert révèle chaque point de contact client. Résultat : vision complète du parcours client et attribution précise de chaque CHF généré."
    },
    {
      question: "Quels outils utilisez-vous pour mesurer la performance marketing en Suisse romande ?",
      answer: "Stack technique complet : Google Analytics 4 configuration avancée, Google Tag Manager expert, Data Studio dashboards executifs, Google Search Console, Meta Business Manager. Compliance RGPD Suisse avec Cookiebot, server-side tracking pour iOS14+. Attribution multicannale first-party data pour précision maximale."
    },
    {
      question: "Combien coûte l'implémentation tracking complet pour PME valaisanne ?",
      answer: "Forfait Tracking Pro à partir de 4,500 CHF incluant : audit technique complet 20h, setup GA4 + GTM expert, création dashboards executifs sur-mesure, formation équipes 4h, suivi performance 3 mois. Comparativement à audit basique 1,500 CHF, notre approche révèle 10x plus de données actionables."
    },
    {
      question: "Mes équipes peuvent-elles utiliser vos dashboards sans formation technique avancée ?",
      answer: "Absolument ! Dashboards conçus user-friendly avec KPIs executifs : chiffre d'affaires par canal, coût acquisition client, ROI campagnes, conversion funnel. Formation incluse 4h : lecture métriques, interprétation tendances, prise décision data-driven. Interface intuitive + alertes automatiques pour anomalies importantes."
    },
    {
      question: "Comment assurez-vous la conformité RGPD avec le tracking avancé en Suisse ?",
      answer: "Setup privacy-first complet : server-side tracking Google Cloud EU, consent management Cookiebot certifié, anonymisation IP, stockage données UE, politiques retention conformes. Configuration iOS14+ SKAdNetwork, first-party data strategy, cookies essentiels uniquement. Tests rigoureux cross-browser et conformité légale suisse."
    },
    {
      question: "Vos solutions tracking sont-elles évolutives avec la croissance de mon cabinet ?",
      answer: "Architecture modulaire scalable : ajout nouveaux KPIs selon croissance, intégration CRM (Salesforce, HubSpot), connexion outils métier spécifiques. Dashboards évolutifs : segmentations clients affinées, périodes comparaison personnalisables, métriques sectorielles. Expansion simple sans refonte complète du système existant."
    },
    {
      question: "Combien de temps faut-il pour voir les premiers résultats du tracking optimisé ?",
      answer: "Phase 1 (7 jours) : Setup technique GA4 + GTM, premiers insights disponibles. Phase 2 (30 jours) : Dashboards complets opérationnels, formations équipes terminées. Phase 3 (90 jours) : Optimisations basées données, ROI amélioré mesurable. Données fiables dès J+1, optimisations stratégiques dès M+3."
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
      {/* HERO SECTION - VOS DONNÉES RACONTENT UNE HISTOIRE */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-400/10 via-pink-500/5 to-purple-400/5" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-purple-400/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              Vos données racontent une histoire. Écoutons-la ensemble.
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-light text-white leading-tight animate-fade-in">
                Vos données cachent des trésors
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold animate-fade-in-delay-1" style={{color: '#8B5CF6'}}>
                Nous les déterrons pour vous
              </h2>
              <div className="space-y-4">
                <p className="text-3xl md:text-4xl text-purple-400 font-light animate-fade-in-delay-2">
                  Chaque client compte, chaque interaction a une valeur
                </p>
                <p className="text-2xl md:text-3xl text-gray-300 font-light animate-fade-in-delay-2">
                  Découvrons ensemble les revenus que vous ne voyez pas
                </p>
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed mt-8">
              Analytics intelligent + vision business claire<br />
              <span className="text-purple-400 font-semibold">Votre ROI enfin transparent et actionnable</span>
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-block px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-12 transform hover:scale-105 transition-all duration-500 hover:shadow-purple-400/25"
            style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)' }}
          >
            Découvrir Mes Trésors Cachés
          </Link>

          <div className="text-sm text-gray-400">
            <span className="text-gray-300">Consultation découverte gratuite</span><br/>
            <span className="text-gray-300">Analytics adapté à votre business</span><br/>
            <span className="text-gray-300">Dashboards simples et parlants</span>
          </div>
        </div>
      </section>

      {/* HISTOIRES DE DÉCOUVERTES - CLIENTS QUI ONT RÉVÉLÉ LEURS TRÉSORS */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-purple-400/20 rounded-full text-purple-400 text-lg font-bold mb-6">
              Histoires de découvertes
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Quand les données <span className="font-bold" style={{color: '#8B5CF6'}}>révèlent l'incroyable</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Récits véridiques d'entreprises valaisannes qui ont découvert leurs revenus cachés
            </p>
          </div>

          {/* DATA DISCOVERY VISUAL */}
          <div className="mb-16 flex justify-center">
            <div className="w-full max-w-4xl">
              <svg viewBox="0 0 800 400" className="w-full h-auto">
                <defs>
                  <linearGradient id="discoveryGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#EC4899" stopOpacity="0.8" />
                  </linearGradient>
                  <linearGradient id="treasureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#8B5CF6" />
                  </linearGradient>
                </defs>
                
                {/* Hidden treasure paths */}
                <path d="M50 300 Q200 200 400 250 Q600 150 750 200" 
                      stroke="url(#discoveryGradient)" 
                      strokeWidth="4" 
                      fill="none" 
                      strokeDasharray="15,10">
                  <animate attributeName="stroke-dashoffset" values="0;-25;0" dur="4s" repeatCount="indefinite" />
                </path>
                
                {/* Treasure discovery points */}
                <circle cx="150" cy="280" r="30" fill="url(#treasureGradient)" opacity="0.7">
                  <animate attributeName="r" values="30;40;30" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
                </circle>
                <text x="150" y="320" textAnchor="middle" fill="#F59E0B" fontSize="14" fontWeight="bold">Client PME</text>
                <text x="150" y="335" textAnchor="middle" fill="#6B7280" fontSize="12">47,000 CHF découverts</text>
                
                <circle cx="400" cy="200" r="25" fill="#EC4899" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                </circle>
                <text x="400" y="170" textAnchor="middle" fill="#EC4899" fontSize="12">E-commerce</text>
                <text x="400" y="185" textAnchor="middle" fill="#6B7280" fontSize="10">14,171 sessions</text>
                
                <circle cx="650" cy="180" r="25" fill="#8B5CF6" opacity="0.8">
                  <animate attributeName="opacity" values="0.8;1;0.8" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <text x="650" y="150" textAnchor="middle" fill="#8B5CF6" fontSize="12">Cabinet</text>
                <text x="650" y="165" textAnchor="middle" fill="#6B7280" fontSize="10">ROI révélé</text>
                
                {/* Discovery connection lines */}
                <line x1="180" y1="280" x2="370" y2="200" stroke="#8B5CF6" strokeWidth="2" opacity="0.4" strokeDasharray="8,4">
                  <animate attributeName="stroke-dashoffset" values="0;-12;0" dur="3s" repeatCount="indefinite" />
                </line>
                <line x1="425" y1="200" x2="625" y2="180" stroke="#EC4899" strokeWidth="2" opacity="0.4" strokeDasharray="8,4">
                  <animate attributeName="stroke-dashoffset" values="0;-12;0" dur="3s" repeatCount="indefinite" />
                </line>
                
                {/* Central discovery title */}
                <text x="400" y="80" textAnchor="middle" fill="#8B5CF6" fontSize="20" fontWeight="bold">Carte aux Trésors de Vos Données</text>
                <text x="400" y="100" textAnchor="middle" fill="#6B7280" fontSize="14">Chaque point cache des revenus invisibles</text>
              </svg>
            </div>
          </div>

          {/* HISTOIRES DE DÉCOUVERTES */}
          <div className="space-y-12">
            {/* Histoire 1: Cabinet Expertise */}
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-purple-400/20 rounded-full text-purple-400 text-sm font-medium mb-4">
                      Cabinet Expertise • Valais
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">"47,000 CHF que nous ne savions pas avoir"</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Situation : Analytics basique montrait peu de résultats, équipe marketing démotivée, 
                      budget serré pour les actions commerciales.
                      <br /><br />
                      Révélation : Analyse approfondie a découvert que 70% des clients arrivaient par des chemins 
                      non trackés. Ces clients "invisibles" généraient en réalité 47,000 CHF de revenus annuels.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span className="text-gray-300">Sources de revenus enfin identifiées</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span className="text-gray-300">Budget marketing optimisé efficacement</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                      <span className="text-gray-300">Équipe remobiliser autour de données claires</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-black/40 rounded-xl p-6">
                    <div className="text-4xl font-bold text-purple-400 mb-2">47,000</div>
                    <div className="text-gray-300 text-sm mb-4">CHF revenus cachés</div>
                    <div className="text-2xl font-bold text-white mb-2">→</div>
                    <div className="text-lg text-purple-400">Budget développé sereinment</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Histoire 2: E-commerce Local */}
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-pink-400/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="text-center">
                  <div className="bg-black/40 rounded-xl p-6">
                    <div className="text-4xl font-bold text-pink-400 mb-2">14,171</div>
                    <div className="text-gray-300 text-sm mb-4">sessions retrouvées</div>
                    <div className="text-2xl font-bold text-white mb-2">+</div>
                    <div className="text-lg text-pink-400">Vraie mesure ROI</div>
                  </div>
                </div>
                
                <div>
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-pink-400/20 rounded-full text-pink-400 text-sm font-medium mb-4">
                      E-commerce Local • Suisse Romande
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">"Nous pensions que nos actions ne servaient à rien"</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Problème : 14,171 sessions visiteurs classées "Direct" sans origine. Équipe marketing 
                      découragée, difficulté à justifier les investissements publicitaires.
                      <br /><br />
                      Solution : Configuration avancée a révélé que ces sessions provenaient en réalité 
                      des actions marketing (email, social, SEO). ROI enfin mesurable et positif.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                      <span className="text-gray-300">Chaque action marketing désormais mesurée</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                      <span className="text-gray-300">Équipe marketing remotivier</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                      <span className="text-gray-300">Investissements justifiés et optimisés</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Histoire 3: PME Manufacturing */}
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-violet-400/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="mb-6">
                    <div className="inline-block px-4 py-2 bg-violet-400/20 rounded-full text-violet-400 text-sm font-medium mb-4">
                      PME Manufacturing • Valais
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">"Enfin nous savons d'où viennent nos clients"</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Situation : Confusion totale sur l'efficacité des canaux marketing. Difficulté à prendre 
                      des décisions éclairées, budget dispersé sans stratégie claire.
                      <br /><br />
                      Résultat : Tracking avancé a révélé les vrais chemins clients. Découverte que le bouche-à-oreille 
                      et les partenariats généraient 80% des revenus de qualité.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                      <span className="text-gray-300">Stratégie marketing recentrée</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                      <span className="text-gray-300">Budget concentré sur les leviers efficaces</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 rounded-full bg-violet-400"></div>
                      <span className="text-gray-300">Décisions basées sur des faits</span>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="bg-black/40 rounded-xl p-6">
                    <div className="text-4xl font-bold text-violet-400 mb-2">80%</div>
                    <div className="text-gray-300 text-sm mb-4">revenus qualité identifiés</div>
                    <div className="text-2xl font-bold text-white mb-2">vs</div>
                    <div className="text-lg text-gray-400">0% visibilité avant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
              
          {/* ALTERNATIVES D'ANALYTICS */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">4 Façons de Révéler Vos Trésors Cachés</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-black/60 rounded-xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                <div className="text-purple-400 font-bold text-lg mb-3">Tracking Complet</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Configuration avancée qui capture chaque interaction client, révélant les parcours invisibles qui génèrent vos revenus.
                </p>
              </div>
              
              <div className="bg-black/60 rounded-xl p-6 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300">
                <div className="text-pink-400 font-bold text-lg mb-3">Attribution Intelligente</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Analyse qui connecte chaque action marketing à sa vraie contribution, montrant l'impact réel de vos investissements.
                </p>
              </div>
              
              <div className="bg-black/60 rounded-xl p-6 border border-violet-400/20 hover:border-violet-400/40 transition-all duration-300">
                <div className="text-violet-400 font-bold text-lg mb-3">Dashboards Simples</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Visualisations claires qui transforment des milliers de données en insights actionables pour votre business.
                </p>
              </div>
              
              <div className="bg-black/60 rounded-xl p-6 border border-indigo-400/20 hover:border-indigo-400/40 transition-all duration-300">
                <div className="text-indigo-400 font-bold text-lg mb-3">ROI Transparent</div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Mesure précise du retour sur investissement de chaque canal, permettant des décisions marketing éclairées.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOUS LE CAPOT - STACK ANALYTICS */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-purple-400/20 rounded-full text-purple-400 text-lg font-bold mb-6">
              Sous le capot
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Technologies qui <span className="font-bold text-purple-400">révèlent vos trésors</span>
            </h2>
            <p className="text-xl text-gray-300">
              Stack analytics professionnel + expertise humaine = visibilité complète sur votre ROI
            </p>
          </div>

          {/* STACK TECHNIQUE VISUALIZATION */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/20">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Analytics Core */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Analytics Intelligence</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-purple-400 font-semibold">Google Analytics 4</div>
                      <div className="text-gray-400">Configuration experte</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-purple-400 font-semibold">Google Tag Manager</div>
                      <div className="text-gray-400">Tracking avancé</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-purple-400 font-semibold">Search Console</div>
                      <div className="text-gray-400">Performance SEO</div>
                    </div>
                  </div>
                </div>
                
                {/* Attribution Engine */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-pink-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Moteur Attribution</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-pink-400 font-semibold">Multi-Touch Attribution</div>
                      <div className="text-gray-400">Parcours complets</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-pink-400 font-semibold">UTM Advanced</div>
                      <div className="text-gray-400">Traçabilité parfaite</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-pink-400 font-semibold">Cross-Device Tracking</div>
                      <div className="text-gray-400">Vision unifiée</div>
                    </div>
                  </div>
                </div>
                
                {/* Reporting Interface */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-violet-400/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Interface Business</h3>
                  <div className="space-y-2 text-sm">
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-violet-400 font-semibold">Dashboards Executifs</div>
                      <div className="text-gray-400">Vision synthétique</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-violet-400 font-semibold">Alertes Automatiques</div>
                      <div className="text-gray-400">Réactivité temps réel</div>
                    </div>
                    <div className="bg-black/40 rounded-lg p-3">
                      <div className="text-violet-400 font-semibold">Reports Personnalisés</div>
                      <div className="text-gray-400">Insights métier</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Synergy Explanation */}
              <div className="mt-12 pt-8 border-t border-gray-700/50">
                <div className="text-center mb-8">
                  <h4 className="text-2xl font-bold text-white mb-4">La Puissance de l'Ensemble</h4>
                  <p className="text-gray-300 max-w-3xl mx-auto">
                    Chaque technologie travaille en synergie pour capturer, analyser et présenter vos données 
                    sous forme d'insights clairs. Vous voyez enfin d'où viennent vraiment vos clients et vos revenus.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-purple-400/10 rounded-xl p-6 text-center">
                    <div className="text-purple-400 font-bold text-lg mb-2">Capture</div>
                    <div className="text-gray-300 text-sm">Collecte chaque interaction client sur tous les canaux</div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-3xl text-white">→</div>
                  </div>
                  <div className="bg-violet-400/10 rounded-xl p-6 text-center">
                    <div className="text-violet-400 font-bold text-lg mb-2">Révélation</div>
                    <div className="text-gray-300 text-sm">Transforme les données en décisions business</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BÉNÉFICES BUSINESS */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Bénéfices Mesurables pour Votre Business</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-purple-400/20 to-violet-400/20 rounded-xl p-6 border border-purple-400/30">
                <div className="text-3xl font-bold text-purple-400 mb-2">100%</div>
                <div className="text-white font-semibold mb-2">Visibilité ROI</div>
                <div className="text-gray-300 text-sm">Chaque CHF investi désormais traçable et mesurable</div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-xl p-6 border border-pink-400/30">
                <div className="text-3xl font-bold text-pink-400 mb-2">94%</div>
                <div className="text-white font-semibold mb-2">Précision</div>
                <div className="text-gray-300 text-sm">Attribution exacte de chaque conversion à sa source</div>
              </div>
              
              <div className="bg-gradient-to-br from-violet-400/20 to-indigo-400/20 rounded-xl p-6 border border-violet-400/30">
                <div className="text-3xl font-bold text-violet-400 mb-2">8x</div>
                <div className="text-white font-semibold mb-2">Plus Transparent</div>
                <div className="text-gray-300 text-sm">Clarté complète sur performance vs analytics de base</div>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-xl p-6 border border-indigo-400/30">
                <div className="text-3xl font-bold text-indigo-400 mb-2">0</div>
                <div className="text-white font-semibold mb-2">Sessions Perdues</div>
                <div className="text-gray-300 text-sm">Capture et attribution de chaque visiteur important</div>
              </div>
            </div>
          </div>

          {/* FAQ SECTION - INLINE */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-400/20 mb-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Questions que se posent les dirigeants</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-black/40 rounded-xl p-6">
                  <h4 className="text-purple-400 font-bold mb-3">"Comment êtes-vous sûrs qu'il y a des données cachées ?"</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Plus de 90% des entreprises ont des sessions classées "Direct" ou "Unassigned". 
                    Ces sessions représentent souvent 30-50% du trafic réel. Audit gratuit pour le vérifier.
                  </p>
                </div>
                
                <div className="bg-black/40 rounded-xl p-6">
                  <h4 className="text-purple-400 font-bold mb-3">"Nos données actuelles sont-elles fausses ?"</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Pas fausses, mais incomplètes. Analytics de base capture 60-70% des interactions. 
                    Configuration avancée révèle les 30-40% manquants qui ont une valeur importante.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-black/40 rounded-xl p-6">
                  <h4 className="text-purple-400 font-bold mb-3">"Combien de temps pour voir nos trésors cachés ?"</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Configuration technique : 1-2 semaines. Premières révélations : immédiates. 
                    Vision complète avec historique : 30 jours de collecte optimisée.
                  </p>
                </div>
                
                <div className="bg-black/40 rounded-xl p-6">
                  <h4 className="text-purple-400 font-bold mb-3">"Nos équipes pourront-elles utiliser ces analytics ?"</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Dashboards conçus pour dirigeants non-techniques. Formation incluse. 
                    Vos équipes voient enfin clairement d'où viennent les résultats.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-gray-400 mb-8">Entreprises qui ont découvert leurs trésors cachés</div>
            <div className="flex justify-center items-center space-x-12 opacity-70">
              <div className="text-white font-semibold">CONSEIL</div>
              <div className="text-white font-semibold">E-COMMERCE</div>
              <div className="text-white font-semibold">MANUFACTURING</div>
              <div className="text-purple-400 font-semibold">+ 30 SECTEURS</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + PRICING - DÉCOUVERTE DE TRÉSORS */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-12 border border-purple-400/40">
            <div className="mb-8">
              <div className="text-purple-400 font-semibold mb-4">
                ANALYTICS QUI RÉVÈLENT VOS TRÉSORS
              </div>
              <div className="text-5xl md:text-6xl font-light text-purple-400 mb-4">
                7500 CHF
              </div>
              <div className="text-xl text-gray-300 mb-8">
                Configuration complète + Dashboards + Formation + Support 3 mois
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-4 bg-black/40 rounded-xl border border-purple-400/20">
                <div className="text-purple-400 font-bold text-2xl mb-2">
                  100%
                </div>
                <div className="text-gray-300">ROI visible et mesurable</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-xl border border-pink-400/20">
                <div className="text-pink-400 font-bold text-2xl mb-2">
                  0
                </div>
                <div className="text-gray-300">Donnée importante perdue</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-xl border border-violet-400/20">
                <div className="text-violet-400 font-bold text-2xl mb-2">
                  ∞
                </div>
                <div className="text-gray-300">Décisions éclairées possibles</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block px-16 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-6 transform hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)' }}
            >
              Découvrir Mes Trésors Maintenant
            </Link>
            
            <div className="text-sm text-gray-400">
              Consultation découverte gratuite • Analytics adapté à votre business • ROI transparent sous 30 jours
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - RÉCUPÉRATION TEMPLATE */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Questions <span className="font-bold text-purple-400">Analytics Intelligents</span>
            </h2>
            <p className="text-xl text-gray-300">
              Tout sur la révélation de vos trésors cachés
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-purple-400/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-medium text-white pr-8">{faq.question}</h3>
                  <div className={`text-purple-400 text-2xl transform transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
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
            <p className="text-gray-400 mb-6">Prêt à découvrir ce que vos données cachent ?</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl border border-purple-400/40 text-purple-400 hover:bg-purple-400/10 transition-colors duration-300"
            >
              Consultation Découverte Gratuite
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