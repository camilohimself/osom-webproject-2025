'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

type SolutionKey = 'dashboard' | 'automation' | 'crm' | 'content' | 'analytics';

export default function IASurMesurePMEPage() {
  const [activeTab, setActiveTab] = useState<SolutionKey>('dashboard')
  const [hoveredSolution, setHoveredSolution] = useState<string | null>(null)

  const solutions = {
    dashboard: {
      title: "Dashboard IA prédictif",
      subtitle: "Votre cerveau digital en temps réel",
      description: "Fini les tableaux Excel obsolètes. Notre IA analyse 47 sources de données pour prédire vos ventes, alerter sur les risques et suggérer les actions prioritaires.",
      roi: "+340%",
      roiLabel: "Efficacité décisionnelle",
      examples: [
        "Prédiction CA à 30 jours avec 94% de précision",
        "Alertes automatiques : stock critique, client à risque",
        "Recommandations d'actions basées sur 10,000 PME analysées"
      ],
      tech: "IA Prédictive + Analytics Temps Réel",
      pricing: "À partir de 890 CHF/mois",
      color: "blue"
    },
    automation: {
      title: "Automation intelligente",
      subtitle: "Votre équipe digitale qui ne dort jamais",
      description: "77 tâches répétitives automatisées par notre IA. De la facturation à la prospection, votre business fonctionne pendant que vous dormez.",
      roi: "+280%",
      roiLabel: "Productivité équipe",
      examples: [
        "Facturation automatique avec relances personnalisées",
        "Prospection LinkedIn : 50 contacts qualifiés/jour",
        "Gestion stock : commandes automatiques selon prévisions"
      ],
      tech: "IA Workflow + API Integration",
      pricing: "À partir de 1,240 CHF/mois",
      color: "purple"
    },
    crm: {
      title: "CRM prédictif IA",
      subtitle: "Qui connaît vos clients mieux que vous",
      description: "Notre IA prédit qui va acheter, qui va partir et combien chaque prospect vaut. Vos commerciaux deviennent des machines à convertir.",
      roi: "+425%",
      roiLabel: "Taux de conversion",
      examples: [
        "Score de propension d'achat : 0-100 pour chaque lead",
        "Prédiction churn : identification clients à risque",
        "Pricing dynamique selon profil et historique"
      ],
      tech: "Machine Learning + Behavioral Analytics",
      pricing: "À partir de 1,590 CHF/mois",
      color: "green"
    },
    content: {
      title: "Générateur de contenu IA",
      subtitle: "Votre rédacteur personnel H24",
      description: "Contenus sur mesure pour votre audience, votre ton, vos objectifs. Newsletters, posts, pages web : 10x plus rapide, infiniment plus pertinent.",
      roi: "+670%",
      roiLabel: "Vitesse production contenu",
      examples: [
        "Newsletter personnalisée par segment client",
        "Posts réseaux sociaux adaptés à chaque plateforme",
        "Pages produits optimisées SEO automatiquement"
      ],
      tech: "IA Générative + Brand Voice Learning",
      pricing: "À partir de 750 CHF/mois",
      color: "yellow"
    },
    analytics: {
      title: "Analytics IA avancés",
      subtitle: "Révélateur d'opportunités cachées",
      description: "Notre IA trouve les patterns invisibles dans vos données. Découvrez les segments rentables, les canaux sous-exploités, les optimisations à 47,000 CHF.",
      roi: "+520%",
      roiLabel: "ROI marketing",
      examples: [
        "Identification de 14 segments clients cachés",
        "Attribution précise : quel canal génère vraiment",
        "Optimisation budget : +340% ROI sur même investissement"
      ],
      tech: "Deep Learning + Attribution Modeling",
      pricing: "À partir de 1,890 CHF/mois",
      color: "cyan"
    }
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'IA Sur Mesure : 10 Solutions Concrètes Qui Transforment Votre PME',
    description: '10 solutions d\'intelligence artificielle personnalisées pour révolutionner les PME suisses avec ROI garanti.',
    author: {
      '@type': 'Organization',
      name: 'OSOM Solutions IA'
    },
    datePublished: '2025-01-19',
    publisher: {
      '@type': 'Organization',
      name: 'OSOM'
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-black text-white">
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-b from-black via-purple-950/20 to-black relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Success Banner */}
            <motion.div 
              className="mb-8 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center justify-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-bold text-sm tracking-wide">156 PME SUISSES DÉJÀ TRANSFORMÉES</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-8 leading-tight">
                <span className="text-purple-400 font-bold">IA Sur Mesure :</span><br />
                <span className="text-yellow-400">10 Solutions</span> Concrètes<br />
                Qui <span className="text-cyan-400">Transforment</span> Votre PME
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                Dashboard prédictif, automation intelligente, CRM révolutionnaire...<br />
                <strong>À vie. Sur mesure. Garanti.</strong> Découvrez pourquoi <span className="text-green-400">156 dirigeants suisses</span> ont choisi <em>notre révolution IA</em>.
              </p>

              <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                <span>OSOM Solutions IA</span>
                <span>•</span>
                <span>Guide exclusif PME</span>
                <span>•</span>
                <span>12 min de transformation</span>
              </div>
            </motion.div>
          </div>

          {/* Floating Tech Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({length: 8}).map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${10 + i * 12}%`,
                  top: `${20 + (i % 3) * 25}%`
                }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              >
                <div className={`w-2 h-2 rounded-full ${{
                  0: 'bg-purple-400',
                  1: 'bg-yellow-400', 
                  2: 'bg-cyan-400',
                  3: 'bg-green-400',
                  4: 'bg-red-400',
                  5: 'bg-blue-400',
                  6: 'bg-pink-400',
                  7: 'bg-orange-400'
                }[i]}`} />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Interactive Solutions Explorer */}
        <article className="py-20 bg-black">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Navigation Tabs */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-light text-white text-center mb-12">
                Explorez Nos <span className="text-purple-400">Solutions</span> Révolutionnaires
              </h2>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {Object.entries(solutions).map(([key, solution]) => (
                  <motion.button
                    key={key}
                    onClick={() => setActiveTab(key as SolutionKey)}
                    className={`px-6 py-3 rounded-lg font-medium transition-all ${
                      activeTab === key 
                        ? `bg-${solution.color}-400 text-black`
                        : `border border-${solution.color}-400/50 text-${solution.color}-400 hover:bg-${solution.color}-400/10`
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {solution.title}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Active Solution Display */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-10 rounded-3xl bg-gradient-to-r from-${solutions[activeTab].color}-400/10 via-transparent to-${solutions[activeTab].color}-400/5 border border-${solutions[activeTab].color}-400/30`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                
                {/* Content Side */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-lg bg-${solutions[activeTab].color}-400/20 border border-${solutions[activeTab].color}-400/50 flex items-center justify-center`}>
                      <div className={`w-6 h-6 rounded-full bg-${solutions[activeTab].color}-400`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white">
                        {solutions[activeTab].title}
                      </h3>
                      <p className={`text-${solutions[activeTab].color}-400 font-medium`}>
                        {solutions[activeTab].subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {solutions[activeTab].description}
                  </p>
                  
                  <div className="flex items-center space-x-8">
                    <div>
                      <div className={`text-4xl font-bold text-${solutions[activeTab].color}-400`}>
                        {solutions[activeTab].roi}
                      </div>
                      <div className="text-sm text-gray-400">
                        {solutions[activeTab].roiLabel}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-semibold text-white">
                        {solutions[activeTab].pricing}
                      </div>
                      <div className="text-xs text-gray-400">
                        Amortissement : 2-4 mois
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Exemples concrets :</h4>
                    {solutions[activeTab].examples.map((example, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className={`w-2 h-2 rounded-full bg-${solutions[activeTab].color}-400 mt-2 flex-shrink-0`} />
                        <p className="text-gray-300 text-sm">{example}</p>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="bg-black/50 p-4 rounded-lg border border-gray-700">
                    <div className="text-xs text-gray-400 mb-1">Technologies utilisées :</div>
                    <div className={`text-${solutions[activeTab].color}-400 font-medium`}>
                      {solutions[activeTab].tech}
                    </div>
                  </div>
                </div>
                
                {/* Visual Side */}
                <div className="relative">
                  <motion.div 
                    className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-gray-700"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Dynamic Dashboard Visualization */}
                    <svg className="w-full h-full p-8" viewBox="0 0 300 300">
                      {activeTab === 'dashboard' && (
                        <g>
                          {/* Dashboard Grid */}
                          <rect x="20" y="20" width="260" height="180" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" className={`text-${solutions[activeTab].color}-400`} />
                          
                          {/* Charts */}
                          <rect x="30" y="30" width="80" height="60" fill="currentColor" opacity="0.1" className={`text-${solutions[activeTab].color}-400`} />
                          <rect x="120" y="30" width="80" height="60" fill="currentColor" opacity="0.1" className={`text-${solutions[activeTab].color}-400`} />
                          <rect x="210" y="30" width="60" height="60" fill="currentColor" opacity="0.1" className={`text-${solutions[activeTab].color}-400`} />
                          
                          {/* Data Lines */}
                          <path d="M40 80 L60 60 L80 70 L100 50" stroke="currentColor" strokeWidth="2" fill="none" className={`text-${solutions[activeTab].color}-400`} />
                          <path d="M130 80 L150 65 L170 55 L190 45" stroke="currentColor" strokeWidth="2" fill="none" className={`text-${solutions[activeTab].color}-400`} />
                          
                          {/* Metrics */}
                          <circle cx="240" cy="60" r="15" fill="currentColor" opacity="0.2" className={`text-${solutions[activeTab].color}-400`} />
                          <text x="240" y="65" textAnchor="middle" fill="currentColor" fontSize="8" className={`text-${solutions[activeTab].color}-400`}>+340%</text>
                        </g>
                      )}
                      
                      {activeTab === 'automation' && (
                        <g>
                          {/* Workflow Nodes */}
                          <circle cx="60" cy="60" r="20" fill="currentColor" opacity="0.2" className={`text-${solutions[activeTab].color}-400`} />
                          <circle cx="150" cy="60" r="20" fill="currentColor" opacity="0.2" className={`text-${solutions[activeTab].color}-400`} />
                          <circle cx="240" cy="60" r="20" fill="currentColor" opacity="0.2" className={`text-${solutions[activeTab].color}-400`} />
                          
                          <circle cx="105" cy="140" r="20" fill="currentColor" opacity="0.2" className={`text-${solutions[activeTab].color}-400`} />
                          <circle cx="195" cy="140" r="20" fill="currentColor" opacity="0.2" className={`text-${solutions[activeTab].color}-400`} />
                          
                          {/* Connections */}
                          <path d="M80 60 L130 60" stroke="currentColor" strokeWidth="2" className={`text-${solutions[activeTab].color}-400`} markerEnd="url(#arrowhead)" />
                          <path d="M170 60 L220 60" stroke="currentColor" strokeWidth="2" className={`text-${solutions[activeTab].color}-400`} />
                          <path d="M150 80 L105 120" stroke="currentColor" strokeWidth="2" className={`text-${solutions[activeTab].color}-400`} />
                          <path d="M150 80 L195 120" stroke="currentColor" strokeWidth="2" className={`text-${solutions[activeTab].color}-400`} />
                          
                          {/* Arrow marker */}
                          <defs>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                              <polygon points="0 0, 10 3.5, 0 7" fill="currentColor" className={`text-${solutions[activeTab].color}-400`} />
                            </marker>
                          </defs>
                        </g>
                      )}
                      
                      {activeTab === 'crm' && (
                        <g>
                          {/* Customer Profiles */}
                          <rect x="30" y="30" width="60" height="80" fill="currentColor" opacity="0.1" className={`text-${solutions[activeTab].color}-400`} rx="8" />
                          <rect x="120" y="30" width="60" height="80" fill="currentColor" opacity="0.1" className={`text-${solutions[activeTab].color}-400`} rx="8" />
                          <rect x="210" y="30" width="60" height="80" fill="currentColor" opacity="0.1" className={`text-${solutions[activeTab].color}-400`} rx="8" />
                          
                          {/* Scores */}
                          <text x="60" y="125" textAnchor="middle" fill="currentColor" fontSize="12" className={`text-${solutions[activeTab].color}-400`}>87%</text>
                          <text x="150" y="125" textAnchor="middle" fill="currentColor" fontSize="12" className={`text-${solutions[activeTab].color}-400`}>92%</text>
                          <text x="240" y="125" textAnchor="middle" fill="currentColor" fontSize="12" className={`text-${solutions[activeTab].color}-400`}>45%</text>
                          
                          {/* Predictions */}
                          <circle cx="60" cy="45" r="8" fill="currentColor" className={`text-green-400`} opacity="0.8" />
                          <circle cx="150" cy="45" r="8" fill="currentColor" className={`text-green-400`} opacity="0.8" />
                          <circle cx="240" cy="45" r="8" fill="currentColor" className={`text-red-400`} opacity="0.8" />
                        </g>
                      )}
                      
                      {activeTab === 'content' && (
                        <g>
                          {/* Content Blocks */}
                          <rect x="30" y="30" width="240" height="20" fill="currentColor" opacity="0.1" className={`text-${solutions[activeTab].color}-400`} rx="4" />
                          <rect x="30" y="60" width="200" height="15" fill="currentColor" opacity="0.1" className={`text-${solutions[activeTab].color}-400`} rx="4" />
                          <rect x="30" y="85" width="220" height="15" fill="currentColor" opacity="0.1" className={`text-${solutions[activeTab].color}-400`} rx="4" />
                          
                          <rect x="30" y="120" width="180" height="15" fill="currentColor" opacity="0.1" className={`text-${solutions[activeTab].color}-400`} rx="4" />
                          <rect x="30" y="145" width="160" height="15" fill="currentColor" opacity="0.1" className={`text-${solutions[activeTab].color}-400`} rx="4" />
                          
                          {/* AI Writing indicator */}
                          <circle cx="250" cy="200" r="15" fill="currentColor" opacity="0.2" className={`text-${solutions[activeTab].color}-400`} />
                          <text x="250" y="205" textAnchor="middle" fill="currentColor" fontSize="8" className={`text-${solutions[activeTab].color}-400`}>AI</text>
                        </g>
                      )}
                      
                      {activeTab === 'analytics' && (
                        <g>
                          {/* Complex Data Visualization */}
                          <circle cx="80" cy="80" r="30" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" className={`text-${solutions[activeTab].color}-400`} />
                          <circle cx="220" cy="80" r="25" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" className={`text-${solutions[activeTab].color}-400`} />
                          <circle cx="150" cy="180" r="35" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" className={`text-${solutions[activeTab].color}-400`} />
                          
                          {/* Data Points */}
                          <circle cx="80" cy="80" r="5" fill="currentColor" className={`text-${solutions[activeTab].color}-400`} />
                          <circle cx="220" cy="80" r="5" fill="currentColor" className={`text-${solutions[activeTab].color}-400`} />
                          <circle cx="150" cy="180" r="5" fill="currentColor" className={`text-${solutions[activeTab].color}-400`} />
                          
                          {/* Connections */}
                          <path d="M110 80 L190 80" stroke="currentColor" strokeWidth="1" className={`text-${solutions[activeTab].color}-400`} opacity="0.5" />
                          <path d="M80 110 L150 145" stroke="currentColor" strokeWidth="1" className={`text-${solutions[activeTab].color}-400`} opacity="0.5" />
                          <path d="M220 105 L150 145" stroke="currentColor" strokeWidth="1" className={`text-${solutions[activeTab].color}-400`} opacity="0.5" />
                          
                          {/* Insights */}
                          <text x="80" y="130" textAnchor="middle" fill="currentColor" fontSize="8" className={`text-${solutions[activeTab].color}-400`}>+520%</text>
                        </g>
                      )}
                    </svg>
                  </motion.div>
                  
                  {/* Interactive Elements */}
                  <motion.div 
                    className="absolute -bottom-4 -right-4 bg-black border border-gray-700 rounded-lg p-3"
                    animate={{ 
                      scale: [1, 1.05, 1],
                      opacity: [0.8, 1, 0.8]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className={`text-xs text-${solutions[activeTab].color}-400 font-bold`}>
                      LIVE DATA
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Additional Solutions Grid */}
            <motion.div 
              className="mt-20"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-4xl font-light text-white text-center mb-12">
                5 Solutions <span className="text-yellow-400">Bonus</span> Incluses
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Timer intelligent",
                    description: "Optimisation temps de travail basée sur vos patterns de productivité. +67% efficacité équipe.",
                    color: "red",
                    icon: "⏱️"
                  },
                  {
                    title: "Chatbot expert métier",
                    description: "Assistant IA formé sur vos processus. Répond à 89% des questions clients automatiquement.",
                    color: "blue",
                    icon: "🤖"
                  },
                  {
                    title: "Veille concurrentielle IA",
                    description: "Surveillance automatique de 47 concurrents. Alertes opportunités et menaces en temps réel.",
                    color: "orange",
                    icon: "🕵️"
                  },
                  {
                    title: "Optimiseur de prix IA",
                    description: "Pricing dynamique basé sur 12 variables. +34% marge moyenne sans perte de volume.",
                    color: "green",
                    icon: "💰"
                  },
                  {
                    title: "Prédicteur de tendances",
                    description: "Anticipation des tendances marché avec 92% de précision. Longueur d'avance garantie.",
                    color: "pink",
                    icon: "🔮"
                  },
                  {
                    title: "Intégrateur API universel",
                    description: "Connexion de tous vos outils en un écosystème unifié. Fini les silos de données.",
                    color: "indigo",
                    icon: "🔗"
                  }
                ].map((solution, index) => (
                  <motion.div
                    key={solution.title}
                    className={`p-6 rounded-xl bg-gradient-to-br from-${solution.color}-500/10 to-transparent border border-${solution.color}-500/30 hover:from-${solution.color}-500/20 transition-all cursor-pointer group`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onHoverStart={() => setHoveredSolution(solution.title)}
                    onHoverEnd={() => setHoveredSolution(null)}
                  >
                    <div className="text-3xl mb-4">{solution.icon}</div>
                    <h3 className={`text-lg font-bold text-white mb-3 group-hover:text-${solution.color}-400 transition-colors`}>
                      {solution.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {solution.description}
                    </p>
                    
                    {hoveredSolution === solution.title && (
                      <motion.div 
                        className="mt-4 text-xs text-gray-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        Inclus dans tous nos forfaits IA
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pricing & CTA */}
            <motion.div 
              className="mt-20 text-center p-12 bg-gradient-to-r from-purple-500/10 via-yellow-500/10 to-cyan-500/10 rounded-3xl border border-purple-500/30"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Prêt à <span className="text-yellow-400">Révolutionner</span> Votre PME ?
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                <span className="text-cyan-400">156 PME suisses</span> ont déjà fait le pas. 
                Rejoignez la révolution IA avec des solutions <span className="text-purple-400">conçues pour vous</span>, 
                <span className="text-green-400"> garanties à vie</span>.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 max-w-4xl mx-auto">
                {[
                  {
                    label: "Économies moyennes",
                    value: "47,000 CHF",
                    subtitle: "Première année",
                    color: "green"
                  },
                  {
                    label: "Retour sur investissement", 
                    value: "340%",
                    subtitle: "En 6 mois",
                    color: "yellow"
                  },
                  {
                    label: "Temps gagné",
                    value: "23h/semaine",
                    subtitle: "Par employé",
                    color: "cyan"
                  }
                ].map((metric, index) => (
                  <motion.div 
                    key={metric.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <div className={`text-4xl font-bold text-${metric.color}-400 mb-2`}>
                      {metric.value}
                    </div>
                    <div className="text-white font-medium mb-1">
                      {metric.label}
                    </div>
                    <div className="text-xs text-gray-400">
                      {metric.subtitle}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="bg-purple-400 text-black px-10 py-4 rounded-lg font-bold text-lg hover:bg-purple-500 transition-colors"
                >
                  Audit IA gratuit - 48h
                </Link>
                <Link
                  href="/outils"
                  className="border-2 border-purple-400/50 text-purple-400 px-10 py-4 rounded-lg font-bold text-lg hover:bg-purple-400 hover:text-black transition-colors"
                >
                  Calculer mon ROI IA
                </Link>
              </div>
              
              <p className="text-xs text-gray-500 mt-6">
                ⚡ Solutions livrées en 15 jours ouvrés • Support à vie inclus • Garantie résultats 90 jours
              </p>
            </motion.div>

          </div>
        </article>
      </div>
    </>
  )
}