'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
import { SimpleGroupedBarChart } from '@/components/ui'

export default function MarketingAutomationCRMPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [animatedValue, setAnimatedValue] = useState(0)
  
  // Animation du compteur +78%
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(78)
    }, 1000)
    return () => clearTimeout(timer)
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
    <div className="min-h-screen bg-black">
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