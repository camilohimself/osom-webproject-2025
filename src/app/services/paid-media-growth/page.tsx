'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import IconeOSOM from '@/components/IconeOSOM'

export default function PaidMediaGrowthPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // DÉCOUVERTES ROI CLIENTS
  const roiDiscoveries = [
    {
      type: "PME Peinture Valais",
      sector: "Artisanat",
      challenge: "Dépendance publicité payante coûteuse, ROI décevant, budget marketing sous pression",
      discovery: "Stratégie organique + content marketing + SEO local + communauté engagée",
      revelation: "688 clients organiques vs 49 payants : économie 15,000 CHF/mois + croissance durable",
      impact: "Indépendance marketing",
      icon: "palette",
      color: "yellow"
    },
    {
      type: "Cabinet Expertise Comptable Genève",
      sector: "Services B2B",
      challenge: "Coût acquisition client élevé, dépendance Google Ads, concurrence agressive",
      discovery: "Autorité sectorielle + thought leadership + réseau professionnel + référencement",
      revelation: "Coût d'acquisition divisé par 8, clients premium qualifiés, carnet plein 6 mois",
      impact: "Positionnement expert",
      icon: "industry",
      color: "green"
    },
    {
      type: "E-commerce Mode Suisse Romande",
      sector: "Retail",
      challenge: "ROAS Facebook déclinant, iOS 14.5 impact, attribution difficile, marges érodées",
      discovery: "Email marketing automation + communauté Instagram + partenariats influenceurs locaux",
      revelation: "ROI multiplié par 4, fidélisation client 300%, marges préservées",
      impact: "Écosystème rentable",
      icon: "mobile",
      color: "purple"
    }
  ]

  // ALTERNATIVES GROWTH PREMIUM
  const growthAlternatives = [
    {
      strategy: "Croissance Organique Durable",
      description: "Construire une audience qui vous appartient vraiment",
      methods: ["Content marketing engageant", "SEO local ciblé", "Community building", "Partenariats stratégiques"],
      benefit: "ROI croissant dans le temps, indépendance publicitaire",
      icon: "target",
      color: "green"
    },
    {
      strategy: "Marketing de Contenu Premium",
      description: "Devenir la référence de votre secteur",
      methods: ["Thought leadership", "Études de cas détaillées", "Webinaires expertise", "Livre blanc sectoriel"],
      benefit: "Clients qui viennent à vous, prix premium justifiés",
      icon: "document",
      color: "blue"
    },
    {
      strategy: "Automation Intelligente",
      description: "Votre marketing travaille 24h/24 pour vous",
      methods: ["Email sequences personnalisées", "Chatbots qualifiants", "Lead scoring automatique", "Retargeting sophistiqué"],
      benefit: "Conversion maximisée, ressources optimisées",
      icon: "tools",
      color: "purple"
    },
    {
      strategy: "Écosystème de Croissance",
      description: "Tous vos canaux travaillent en synergie",
      methods: ["Social media intégré", "Referral programs", "User-generated content", "Cross-platform storytelling"],
      benefit: "Effet multiplicateur, résilience aux changements d'algorithmes",
      icon: "chart",
      color: "yellow"
    }
  ]

  // FAQ ROI FOCUS
  const faqItems = [
    {
      question: "Pourquoi mes campagnes payantes deviennent-elles de moins en moins rentables ?",
      answer: "C'est un phénomène normal : concurrence accrue, coûts publicitaires en hausse (+40% en 2 ans), changements iOS qui limitent le tracking, audience publicitaire saturée. La solution ? Diversifier avec des canaux organiques durables qui construisent votre indépendance marketing."
    },
    {
      question: "Comment mesurer le ROI réel quand l'attribution est devenue si complexe ?",
      answer: "Nous utilisons une approche multi-touch avec modélisation statistique. Fini les attributions simplistes 'last-click'. Nous révélons l'impact réel de chaque touchpoint sur votre parcours client, même les interactions 'invisibles' qui influencent la décision finale."
    },
    {
      question: "Peut-on vraiment obtenir de meilleurs résultats que la publicité payante ?",
      answer: "Nos clients le prouvent : une PME peinture génère 688 clients organiques vs 49 payants avec le même budget. L'organique prend 3-6 mois à décoller, mais ensuite il surperforme constamment et coûte de moins en moins cher dans le temps."
    },
    {
      question: "Comment construire une stratégie de croissance résiliente aux changements d'algorithmes ?",
      answer: "La clé : ne jamais dépendre d'une seule plateforme. Nous construisons votre propre écosystème (email list, SEO, communauté, partenariats) que personne ne peut vous retirer. Les algorithmes changent, votre audience vous reste fidèle."
    },
    {
      question: "Combien de temps avant de voir des résultats avec une stratégie organique ?",
      answer: "Premier mois : fondations (audit, stratégie, contenus). Mois 2-3 : premiers signaux (engagement, trafic). Mois 4-6 : momentum (leads qualifiés, conversions croissantes). Mois 6+ : croissance exponentielle qui surpasse souvent le payant."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* HERO SECTION - ROI DISCOVERY NARRATIVE */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(255,221,0,0.2) 0%, rgba(16,185,129,0.15) 25%, transparent 70%)',
                'radial-gradient(circle at 70% 60%, rgba(16,185,129,0.2) 0%, rgba(255,221,0,0.15) 25%, transparent 70%)',
                'radial-gradient(circle at 30% 40%, rgba(255,221,0,0.2) 0%, rgba(16,185,129,0.15) 25%, transparent 70%)'
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          />
          
          <div className="absolute inset-0 opacity-10">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-yellow-400/20 text-xs font-mono whitespace-nowrap"
                style={{
                  left: `${(i * 8.33)}%`,
                  top: 0,
                  transform: 'rotate(-90deg)',
                  transformOrigin: 'left top',
                }}
                animate={{
                  y: ['-10%', '110%'],
                  opacity: [0, 0.3, 0.8, 0.3, 0],
                }}
                transition={{
                  duration: 18 + (i * 2),
                  repeat: Infinity,
                  delay: i * 1.3,
                  ease: 'linear',
                }}
              >
                {Array.from({ length: 120 }, () => {
                  const rand = Math.random()
                  if (rand > 0.9) return 'ROI '
                  if (rand > 0.8) return 'GROWTH '
                  if (rand > 0.7) return 'CHF '
                  return Math.random() > 0.5 ? '+' : '%'
                }).join('')}
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Gauche - Contenu Narratif */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              
              {/* Badge Growth */}
              <div className="flex items-center space-x-3 mb-8">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-yellow-400"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <span className="text-yellow-400 text-sm font-medium tracking-wide">
                  VALAIS • CROISSANCE RENTABLE & DURABLE
                </span>
              </div>
              
              {/* Titre Principal */}
              <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Révélez le ROI caché de votre
                <span className="block font-bold text-yellow-400">
                  marketing organique
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                Pendant que vos concurrents brûlent leur budget en publicité payante, nous révélons les canaux de croissance 
                durables qui transforment votre marketing en actif rentable.
              </p>
              
              {/* ROI Discovery Story */}
              <motion.div 
                className="bg-yellow-400/10 rounded-xl p-6 border border-yellow-400/30 backdrop-blur-sm mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-bold">PME Peinture, Valais</span>
                  <motion.div
                    className="w-2 h-2 bg-green-500 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="text-red-300">
                    <strong>Avant :</strong> Dépendance Google Ads coûteuse, ROI décevant
                  </div>
                  <div className="text-green-300">
                    <strong>Révélation :</strong> 688 clients organiques vs 49 payants - Économie 15,000 CHF/mois
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-yellow-400/20">
                  <div className="text-yellow-400 text-sm italic">
                    "Nous avons découvert que notre meilleur ROI venait des canaux que nous négligions complètement."
                  </div>
                  <div className="text-gray-400 text-xs mt-2">
                    — Dirigeant PME Peinture, Valais
                  </div>
                </div>
              </motion.div>
              
              {/* CTA Principal */}
              <motion.div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 hover:bg-yellow-300 text-black font-semibold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/20"
                  style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                >
                  Révéler votre ROI caché
                </Link>
                <Link 
                  href="/realisations"
                  className="inline-flex items-center justify-center px-8 py-4 border border-yellow-400/50 text-yellow-400 hover:text-white hover:bg-yellow-400/10 font-semibold text-lg rounded-xl transition-all duration-300"
                  style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                >
                  Voir nos découvertes ROI
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Droite - Visuel ROI Métaphorique */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full h-96 flex items-center justify-center">
                
                {/* SVG ROI Discovery Treasure Map */}
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <radialGradient id="treasure-gradient" cx="50%" cy="50%">
                      <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 0.9}} />
                      <stop offset="50%" style={{stopColor: '#f59e0b', stopOpacity: 0.6}} />
                      <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 0.3}} />
                    </radialGradient>
                    
                    <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#10b981', stopOpacity: 0.8}} />
                      <stop offset="50%" style={{stopColor: '#fbbf24', stopOpacity: 0.6}} />
                      <stop offset="100%" style={{stopColor: '#ef4444', stopOpacity: 0.4}} />
                    </linearGradient>
                  </defs>

                  {/* Treasure Chest (ROI Caché) */}
                  <g transform="translate(200, 200)">
                    <rect x="-30" y="-20" width="60" height="40" fill="url(#treasure-gradient)" rx="8" />
                    <rect x="-25" y="-15" width="50" height="30" fill="#fbbf24" opacity="0.3" rx="4" />
                    <circle cx="0" cy="0" r="35" stroke="#fbbf24" strokeWidth="3" fill="none" opacity="0.4">
                      <animate attributeName="r" values="30;40;30" dur="3s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <text x="0" y="5" textAnchor="middle" fill="#000" fontSize="12" fontWeight="bold">ROI</text>
                  </g>
                  
                  {/* Discovery Paths */}
                  <g opacity="0.7">
                    {/* Paid Media Path (Coûteux) */}
                    <path d="M100,300 Q150,250 200,200" stroke="#ef4444" strokeWidth="4" fill="none" opacity="0.6">
                      <animate attributeName="stroke-dasharray" values="0,50;25,50;50,50" dur="4s" repeatCount="indefinite"/>
                    </path>
                    <circle cx="100" cy="300" r="15" fill="#ef4444" opacity="0.7">
                      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <text x="100" y="320" textAnchor="middle" fill="#ef4444" fontSize="8">PAID</text>
                    
                    {/* Organic Path (Rentable) */}
                    <path d="M80,120 Q140,160 200,200" stroke="#10b981" strokeWidth="6" fill="none" opacity="0.8">
                      <animate attributeName="stroke-dasharray" values="0,80;40,80;80,80" dur="3s" repeatCount="indefinite"/>
                    </path>
                    <circle cx="80" cy="120" r="20" fill="#10b981" opacity="0.8">
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    <text x="80" y="100" textAnchor="middle" fill="#10b981" fontSize="8">ORGANIC</text>
                    
                    {/* Content Path (Premium) */}
                    <path d="M320,120 Q260,160 200,200" stroke="#3b82f6" strokeWidth="5" fill="none" opacity="0.7">
                      <animate attributeName="stroke-dasharray" values="0,70;35,70;70,70" dur="3.5s" repeatCount="indefinite"/>
                    </path>
                    <circle cx="320" cy="120" r="18" fill="#3b82f6" opacity="0.7">
                      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <text x="320" y="100" textAnchor="middle" fill="#3b82f6" fontSize="8">CONTENT</text>
                    
                    {/* Email Path (Fidélisation) */}
                    <path d="M300,280 Q250,240 200,200" stroke="#8b5cf6" strokeWidth="4" fill="none" opacity="0.6">
                      <animate attributeName="stroke-dasharray" values="0,60;30,60;60,60" dur="4.5s" repeatCount="indefinite"/>
                    </path>
                    <circle cx="300" cy="280" r="16" fill="#8b5cf6" opacity="0.6">
                      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2.8s" repeatCount="indefinite"/>
                    </circle>
                    <text x="300" y="300" textAnchor="middle" fill="#8b5cf6" fontSize="8">EMAIL</text>
                  </g>
                  
                  {/* ROI Indicators */}
                  <g opacity="0.8">
                    {/* Cost indicators */}
                    <text x="100" y="285" textAnchor="middle" fill="#ef4444" fontSize="10" fontWeight="bold">€€€</text>
                    
                    {/* Value indicators */}
                    <text x="80" y="135" textAnchor="middle" fill="#10b981" fontSize="12" fontWeight="bold">+++</text>
                    <text x="320" y="135" textAnchor="middle" fill="#3b82f6" fontSize="11" fontWeight="bold">++</text>
                    <text x="300" y="265" textAnchor="middle" fill="#8b5cf6" fontSize="10" fontWeight="bold">+</text>
                  </g>
                  
                  {/* Discovery Sparkles */}
                  <g opacity="0.6">
                    <circle cx="150" cy="150" r="2" fill="#fbbf24">
                      <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="250" cy="160" r="3" fill="#10b981">
                      <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="0.5s"/>
                    </circle>
                    <circle cx="180" cy="250" r="2" fill="#3b82f6">
                      <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" begin="1s"/>
                    </circle>
                  </g>
                  
                  {/* Magnifying Glass (Discovery Tool) */}
                  <g transform="translate(320, 320)" opacity="0.7">
                    <circle cx="0" cy="0" r="15" stroke="#fbbf24" strokeWidth="3" fill="rgba(255,221,0,0.1)" />
                    <path d="M12,12 L22,22" stroke="#fbbf24" strokeWidth="3" strokeLinecap="round" />
                    <animate attributeName="transform" values="translate(320,320) rotate(0); translate(320,320) rotate(10); translate(320,320) rotate(0)" dur="3s" repeatCount="indefinite"/>
                  </g>
                </svg>
                
                {/* Floating Discovery Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-yellow-400/20 blur-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-green-400/10 blur-md"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1
                  }}
                />
              </div>
              
              {/* Caption */}
              <div className="text-center mt-6">
                <p className="text-sm text-gray-400 bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 mx-4">
                  Cartographie des canaux de croissance les plus rentables
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DÉCOUVERTES ROI CLIENTS */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-yellow-400 text-sm font-medium">DÉCOUVERTES ROI</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Comment nos clients ont découvert leur
              <span className="font-bold text-yellow-400"> mine d'or marketing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Trois histoires de PME qui ont révolutionné leur croissance en révélant leurs canaux les plus rentables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {roiDiscoveries.map((discovery, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/30 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(255, 221, 0, 0.6)',
                  backgroundColor: 'rgba(255, 221, 0, 0.05)'
                }}
              >
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <IconeOSOM type={discovery.icon as any} size={24} color={discovery.color as any} ariaLabel={`${discovery.type} icon`} />
                    <div>
                      <div className="text-white font-bold text-sm">{discovery.type}</div>
                      <div className="text-gray-400 text-xs">{discovery.sector}</div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium bg-${discovery.color}-400/20 text-${discovery.color}-400`}>
                    {discovery.impact}
                  </div>
                </div>
                
                {/* Discovery Story */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-red-300 text-sm font-medium mb-2">Problème Initial</div>
                    <p className="text-gray-300 text-sm leading-relaxed">{discovery.challenge}</p>
                  </div>
                  
                  <div>
                    <div className="text-blue-300 text-sm font-medium mb-2">Stratégie Découverte</div>
                    <p className="text-gray-300 text-sm leading-relaxed">{discovery.discovery}</p>
                  </div>
                  
                  <div>
                    <div className="text-green-300 text-sm font-medium mb-2">Révélation ROI</div>
                    <p className="text-gray-300 text-sm leading-relaxed">{discovery.revelation}</p>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${discovery.color}-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ALTERNATIVES DE CROISSANCE */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Au-delà du paid media :
              <span className="font-bold text-yellow-400"> votre écosystème de croissance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quatre stratégies éprouvées pour construire une croissance rentable et durable
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {growthAlternatives.map((alternative, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-yellow-400/40 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-${alternative.color}-400/20 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <IconeOSOM type={alternative.icon as any} size={28} color={alternative.color as any} ariaLabel={`${alternative.strategy} icon`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{alternative.strategy}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{alternative.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {alternative.methods.map((method, idx) => (
                        <div key={idx} className={`flex items-center space-x-2 text-sm text-${alternative.color}-300`}>
                          <div className={`w-1.5 h-1.5 bg-${alternative.color}-400 rounded-full`}></div>
                          <span>{method}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className={`p-4 bg-${alternative.color}-400/10 rounded-xl border border-${alternative.color}-400/20`}>
                      <div className={`text-${alternative.color}-400 font-bold text-sm mb-1`}>Bénéfice Clé</div>
                      <div className="text-white text-sm">{alternative.benefit}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION TECHNIQUE - SOUS LE CAPOT */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-yellow-400 text-sm font-medium">EXPERTISE TECHNIQUE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Sous le <span className="font-bold text-yellow-400">capot</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Les outils qui révèlent et optimisent votre ROI marketing réel
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Gauche - Stack Growth Visuel */}
            <div className="relative">
              <div className="bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/30">
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-yellow-400/10 rounded-xl border border-yellow-400/20">
                    <div className="flex items-center space-x-3">
                      <IconeOSOM type="target" size={24} color="yellow" ariaLabel="Analytics Tracking" />
                      <span className="text-white font-medium">GA4 + Attribution</span>
                    </div>
                    <span className="text-yellow-400 text-sm">ROI Tracking</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-green-400/10 rounded-xl border border-green-400/20">
                    <div className="flex items-center space-x-3">
                      <IconeOSOM type="search" size={24} color="green" ariaLabel="SEO Content" />
                      <span className="text-white font-medium">SEO + Content</span>
                    </div>
                    <span className="text-green-400 text-sm">Organic Growth</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-blue-400/10 rounded-xl border border-blue-400/20">
                    <div className="flex items-center space-x-3">
                      <IconeOSOM type="email" size={24} color="cyan" ariaLabel="Email Marketing" />
                      <span className="text-white font-medium">Email + CRM</span>
                    </div>
                    <span className="text-blue-400 text-sm">Automation</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-400/10 rounded-xl border border-purple-400/20">
                    <div className="flex items-center space-x-3">
                      <IconeOSOM type="message" size={24} color="purple" ariaLabel="Social Media" />
                      <span className="text-white font-medium">Social + Community</span>
                    </div>
                    <span className="text-purple-400 text-sm">Engagement</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Droite - Bénéfices Business */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconeOSOM type="target" size={20} color="yellow" ariaLabel="Attribution Tracking" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Attribution Multi-Touch Précise</h3>
                  <p className="text-gray-300">Découvrez l'impact réel de chaque canal. Fini les attributions simplistes, révélez les touchpoints qui convertissent vraiment.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconeOSOM type="business-growth" size={20} color="green" ariaLabel="Organic Growth" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Croissance Organique Scalable</h3>
                  <p className="text-gray-300">Construisez un actif qui grandit dans le temps. Votre audience vous appartient, aucune plateforme ne peut vous la retirer.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconeOSOM type="tools" size={20} color="cyan" ariaLabel="Marketing Automation" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Automation Intelligente</h3>
                  <p className="text-gray-300">Vos campagnes s'optimisent seules. Email sequences, lead scoring, retargeting sophistiqué - votre marketing travaille 24h/24.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconeOSOM type="message" size={20} color="purple" ariaLabel="Community Building" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Écosystème Résilient</h3>
                  <p className="text-gray-300">Tous vos canaux travaillent en synergie. Résilience aux changements d'algorithmes, croissance prévisible et durable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Questions <span className="font-bold text-yellow-400">fréquentes</span>
            </h2>
            <p className="text-xl text-gray-300">
              Tout ce que vous devez savoir sur la croissance marketing durable
            </p>
          </div>

          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <button
                  className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-yellow-400/50 hover:bg-yellow-400/5 transition-colors duration-300"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <IconeOSOM type="info" size={20} color="yellow" ariaLabel="More Information" />
                    </motion.div>
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openFaq === index ? 'auto' : 0,
                    opacity: openFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-6">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPEL À L'ACTION FINAL */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-yellow-400/40 relative overflow-hidden">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Prêt à découvrir votre
                <span className="font-bold text-yellow-400"> ROI caché ?</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                Révélons ensemble les canaux de croissance les plus rentables pour votre business. 
                Audit gratuit de votre écosystème marketing actuel.
              </p>
              
              <div className="inline-block px-6 py-3 bg-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-8">
                Audit ROI gratuit • Découvertes garanties • Croissance durable
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Gauche - Offre */}
              <div>
                <div className="bg-gradient-to-br from-yellow-400/10 to-green-400/10 rounded-2xl p-8 border border-yellow-400/30 mb-6">
                  <div className="text-center mb-6">
                    <div className="text-yellow-400 font-bold text-lg mb-2">AUDIT ROI COMPLET</div>
                    <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2">
                      Gratuit
                    </div>
                    <div className="text-gray-300 text-lg">
                      Analyse + Révélations + Plan d'action
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">Cartographie complète de vos canaux</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300">Révélation du ROI invisible</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">Stratégie de croissance personnalisée</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">Plan d'implémentation prioritisé</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Droite - CTA */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Découvrons votre potentiel de croissance
                </h3>
                
                <div className="space-y-4">
                  <Link 
                    href="/contact"
                    className="block w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/20 text-center"
                    style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                  >
                    Audit ROI gratuit - 30 min
                  </Link>
                  
                  <Link 
                    href="/realisations"
                    className="block w-full border border-yellow-400/50 text-yellow-400 hover:text-white hover:bg-yellow-400/10 font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 text-center"
                    style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                  >
                    Voir nos découvertes ROI
                  </Link>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>Analyse 100% personnalisée</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                      <span>Découvertes garanties</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      <span>Plan actionnable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-green-400/5 rounded-3xl blur-3xl opacity-30" />
          </div>
        </div>
      </section>
    </div>
  )
}