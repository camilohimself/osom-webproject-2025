'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import IconeOSOM from '@/components/IconeOSOM'

export default function ProgrammationIAPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // HISTOIRES D'INNOVATION IA
  const innovationStories = [
    {
      type: "PME Manufacturing Valais",
      sector: "Industrie",
      challenge: "Processus manuel chronophage, erreurs récurrentes, productivité limitée",
      innovation: "Automatisation IA complète + prédiction maintenance + optimisation flux",
      transformation: "Division par 4 du temps de traitement, zéro erreur, croissance 180%",
      impact: "Révolution opérationnelle",
      icon: "industry",
      color: "purple"
    },
    {
      type: "Cabinet Comptable Genève",
      sector: "Services B2B",
      challenge: "Saisie manuelle fastidieuse, clients insatisfaits des délais, équipe surchargée",
      innovation: "IA de traitement documents + classification automatique + reporting intelligent",
      transformation: "Traitement 8x plus rapide, satisfaction client maximale, équipe libérée pour conseil",
      impact: "Transformation métier",
      icon: "finance",
      color: "green"
    },
    {
      type: "E-commerce Suisse Romande",
      sector: "Retail",
      challenge: "Personnalisation limitée, taux conversion faible, gestion stock approximative",
      innovation: "IA prédictive + recommandations personnalisées + optimisation inventory",
      transformation: "Conversion +240%, stocks optimisés, expérience client premium",
      impact: "Croissance exponentielle",
      icon: "ecommerce",
      color: "cyan"
    }
  ]

  // CAPACITÉS IA PREMIUM
  const aiCapabilities = [
    {
      category: "Automatisation Intelligente",
      description: "L'IA prend en charge vos tâches répétitives",
      examples: ["Classification documents", "Réponses emails clients", "Génération rapports", "Mise à jour données"],
      benefit: "Votre équipe se concentre sur la stratégie",
      icon: "automation",
      color: "purple"
    },
    {
      category: "Analyse Prédictive",
      description: "L'IA anticipe vos besoins business",
      examples: ["Prévision ventes", "Détection anomalies", "Optimisation stocks", "Maintenance préventive"],
      benefit: "Vous prenez les bonnes décisions avant vos concurrents",
      icon: "prediction",
      color: "blue"
    },
    {
      category: "Personnalisation Avancée",
      description: "L'IA adapte l'expérience à chaque client",
      examples: ["Recommandations produits", "Contenu dynamique", "Pricing intelligent", "Support contextualisé"],
      benefit: "Vos clients se sentent uniques et valorisés",
      icon: "personalization",
      color: "green"
    },
    {
      category: "Optimisation Continue",
      description: "L'IA améliore vos processus en permanence",
      examples: ["A/B testing automatique", "Optimisation campagnes", "Amélioration UX", "Performance monitoring"],
      benefit: "Votre business s'améliore 24h/24 sans intervention",
      icon: "optimization",
      color: "yellow"
    }
  ]

  // FAQ STORYTELLING
  const faqItems = [
    {
      question: "Comment l'IA peut-elle vraiment transformer mon business quotidien ?",
      answer: "L'IA ne remplace pas votre expertise, elle la démultiplie. Imaginez : vos emails clients reçoivent des réponses personnalisées instantanément, vos stocks s'optimisent automatiquement, vos campagnes s'ajustent en temps réel pour maximiser les conversions. Résultat : votre équipe se concentre sur la croissance pendant que l'IA gère l'opérationnel."
    },
    {
      question: "Mes données sont-elles sécurisées avec les solutions IA ?",
      answer: "Absolument. Nous développons des solutions IA sur-mesure qui restent 100% sous votre contrôle. Vos données sensibles ne quittent jamais votre infrastructure. Notre approche 'IA privée' garantit confidentialité totale et conformité RGPD stricte."
    },
    {
      question: "Combien de temps avant de voir les premiers résultats concrets ?",
      answer: "Nos clients observent généralement les premiers impacts positifs dès 2-3 semaines : automatisation des tâches simples, amélioration de la réactivité client, optimisation des processus existants. Les transformations majeures (prédiction, personnalisation avancée) se déploient sur 2-3 mois."
    },
    {
      question: "L'IA va-t-elle rendre mon équipe obsolète ?",
      answer: "Au contraire ! L'IA libère votre équipe des tâches répétitives pour qu'elle se concentre sur ce qui compte : la stratégie, la créativité, le relationnel client. Nos clients constatent une montée en compétences de leurs collaborateurs et une satisfaction au travail accrue."
    },
    {
      question: "Puis-je intégrer l'IA progressivement dans mon organisation ?",
      answer: "C'est même recommandé ! Nous commençons par identifier 1-2 processus clés où l'impact sera immédiat et visible. Une fois l'équipe familiarisée et les premiers succès mesurés, nous étendons progressivement l'IA à d'autres domaines. Approche douce mais efficace."
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* HERO SECTION - INNOVATION NARRATIVE */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-16">
        
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(138,92,246,0.2) 0%, rgba(255,221,0,0.15) 25%, transparent 70%)',
                'radial-gradient(circle at 70% 60%, rgba(255,221,0,0.2) 0%, rgba(138,92,246,0.15) 25%, transparent 70%)',
                'radial-gradient(circle at 30% 40%, rgba(138,92,246,0.2) 0%, rgba(255,221,0,0.15) 25%, transparent 70%)'
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
                className="absolute text-purple-400/20 text-xs font-mono whitespace-nowrap"
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
                  duration: 20 + (i * 2),
                  repeat: Infinity,
                  delay: i * 1.5,
                  ease: 'linear',
                }}
              >
                {Array.from({ length: 150 }, () => {
                  const rand = Math.random()
                  if (rand > 0.9) return 'AI '
                  if (rand > 0.8) return 'ML '
                  if (rand > 0.7) return 'AUTO '
                  return Math.random() > 0.5 ? '1' : '0'
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
              
              {/* Badge Innovation */}
              <div className="flex items-center space-x-3 mb-8">
                <motion.div 
                  className="w-3 h-3 rounded-full bg-purple-400"
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
                <span className="text-purple-400 text-sm font-medium tracking-wide">
                  VALAIS • DÉVELOPPEMENT UTILE
                </span>
              </div>
              
              {/* Titre Principal */}
              <h1 className="text-5xl md:text-7xl font-light text-white mb-8 leading-tight" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                <span className="font-bold text-purple-400">Développement utile</span>, pas gadget.
              </h1>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-2xl">
                <span className="text-purple-400 font-semibold">Ce qu'on fait</span> : automatisations Claude/GPT, micro-outils métier, dashboards et connecteurs (HubSpot, GA4, S. Console).<br/>
                <span className="text-cyan-400 font-semibold">Ce que ça change</span> : moins de tâches manuelles, des décisions plus rapides, zéro dépendance opaque.
              </p>
              
              {/* Mini Success Story */}
              <motion.div 
                className="bg-purple-400/10 rounded-xl p-6 border border-purple-400/30 backdrop-blur-sm mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-white font-bold">Promesse sobre</span>
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
                  <div className="text-gray-300">
                    <strong>Prototypes :</strong> en jours
                  </div>
                  <div className="text-gray-300">
                    <strong>Déploiement :</strong> en semaines
                  </div>
                  <div className="text-gray-300">
                    <strong>Méthode :</strong> tests A/B, journal de décisions
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-purple-400/20">
                  <div className="text-purple-400 text-sm">
                    Chiffres communiqués uniquement s'ils sont vérifiables (GA4, logs).
                  </div>
                </div>
              </motion.div>
              
              {/* CTA Principal */}
              <motion.div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-purple-400 hover:bg-purple-300 text-black font-semibold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-400/20"
                  style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                >
                  Consultation gratuite 30 min
                </Link>
                <Link 
                  href="/realisations"
                  className="inline-flex items-center justify-center px-8 py-4 border border-purple-400/50 text-purple-400 hover:text-white hover:bg-purple-400/10 font-semibold text-lg rounded-xl transition-all duration-300"
                  style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                >
                  Voir nos réalisations
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Droite - Visuel IA Métaphorique */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-full h-96 flex items-center justify-center">
                
                {/* SVG IA Brain Network */}
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  <defs>
                    <radialGradient id="brain-gradient" cx="50%" cy="50%">
                      <stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: 0.8}} />
                      <stop offset="50%" style={{stopColor: '#a855f7', stopOpacity: 0.6}} />
                      <stop offset="100%" style={{stopColor: '#9333ea', stopOpacity: 0.3}} />
                    </radialGradient>
                    
                    <linearGradient id="connection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#8b5cf6', stopOpacity: 0.8}} />
                      <stop offset="50%" style={{stopColor: '#fbbf24', stopOpacity: 0.6}} />
                      <stop offset="100%" style={{stopColor: '#10b981', stopOpacity: 0.4}} />
                    </linearGradient>
                  </defs>

                  {/* Central AI Brain */}
                  <circle cx="200" cy="200" r="60" fill="url(#brain-gradient)" opacity="0.7">
                    <animate attributeName="r" values="55;65;55" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* AI Core */}
                  <text x="200" y="205" textAnchor="middle" fill="#ffffff" fontSize="16" fontWeight="bold">
                    IA
                  </text>
                  
                  {/* Neural Network Nodes */}
                  <g opacity="0.8">
                    {/* Automation Node */}
                    <circle cx="120" cy="120" r="25" fill="#8b5cf6" opacity="0.6">
                      <animate attributeName="opacity" values="0.4;0.8;0.4" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <text x="120" y="125" textAnchor="middle" fill="#ffffff" fontSize="10">AUTO</text>
                    
                    {/* Prediction Node */}
                    <circle cx="280" cy="120" r="25" fill="#3b82f6" opacity="0.6">
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite"/>
                    </circle>
                    <text x="280" y="125" textAnchor="middle" fill="#ffffff" fontSize="10">PRED</text>
                    
                    {/* Personalization Node */}
                    <circle cx="120" cy="280" r="25" fill="#10b981" opacity="0.6">
                      <animate attributeName="opacity" values="0.5;0.9;0.5" dur="2.8s" repeatCount="indefinite"/>
                    </circle>
                    <text x="120" y="285" textAnchor="middle" fill="#ffffff" fontSize="10">PERS</text>
                    
                    {/* Optimization Node */}
                    <circle cx="280" cy="280" r="25" fill="#fbbf24" opacity="0.6">
                      <animate attributeName="opacity" values="0.3;0.7;0.3" dur="4.2s" repeatCount="indefinite"/>
                    </circle>
                    <text x="280" y="285" textAnchor="middle" fill="#ffffff" fontSize="10">OPTI</text>
                  </g>
                  
                  {/* Neural Connections */}
                  <g opacity="0.6">
                    <path d="M145,145 Q200,170 200,175" stroke="url(#connection-gradient)" strokeWidth="2" fill="none">
                      <animate attributeName="stroke-dasharray" values="0,100;50,100;100,100" dur="4s" repeatCount="indefinite"/>
                    </path>
                    <path d="M255,145 Q200,170 200,175" stroke="url(#connection-gradient)" strokeWidth="2" fill="none">
                      <animate attributeName="stroke-dasharray" values="0,80;40,80;80,80" dur="3s" repeatCount="indefinite"/>
                    </path>
                    <path d="M145,255 Q200,230 200,225" stroke="url(#connection-gradient)" strokeWidth="2" fill="none">
                      <animate attributeName="stroke-dasharray" values="0,120;60,120;120,120" dur="5s" repeatCount="indefinite"/>
                    </path>
                    <path d="M255,255 Q200,230 200,225" stroke="url(#connection-gradient)" strokeWidth="2" fill="none">
                      <animate attributeName="stroke-dasharray" values="0,90;45,90;90,90" dur="3.5s" repeatCount="indefinite"/>
                    </path>
                  </g>
                  
                  {/* Data Flow Particles */}
                  <g opacity="0.7">
                    <circle cx="160" cy="160" r="3" fill="#fbbf24">
                      <animateMotion dur="6s" repeatCount="indefinite">
                        <path d="M0,0 Q40,40 80,80"/>
                      </animateMotion>
                    </circle>
                    <circle cx="240" cy="160" r="3" fill="#10b981">
                      <animateMotion dur="5s" repeatCount="indefinite">
                        <path d="M0,0 Q-40,40 -80,80"/>
                      </animateMotion>
                    </circle>
                  </g>
                  
                  {/* Innovation Pulse */}
                  <circle cx="200" cy="200" r="80" stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.3">
                    <animate attributeName="r" values="70;90;70" dur="3s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="0.1;0.4;0.1" dur="3s" repeatCount="indefinite"/>
                  </circle>
                </svg>
                
                {/* Floating Tech Elements */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-400/20 blur-sm"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                />
                <motion.div
                  className="absolute bottom-6 left-6 w-12 h-12 rounded-full bg-yellow-400/10 blur-md"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1
                  }}
                />
              </div>
              
              {/* Caption */}
              <div className="text-center mt-6">
                <p className="text-sm text-gray-400 bg-black/60 backdrop-blur-sm rounded-lg px-4 py-2 mx-4">
                  Réseau neuronal adaptatif qui apprend de votre business
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HISTOIRES D'INNOVATION */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-purple-400 text-sm font-medium">INNOVATIONS RÉELLES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Quand l'IA révolutionne le 
              <span className="font-bold text-purple-400">quotidien business</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Découvrez comment nos clients transforment leurs défis en opportunités grâce à l'intelligence artificielle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {innovationStories.map((story, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/30 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  borderColor: 'rgba(139, 92, 246, 0.6)',
                  backgroundColor: 'rgba(139, 92, 246, 0.05)'
                }}
              >
                
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <IconeOSOM type={story.icon as any} size={24} color={story.color as any} ariaLabel={`${story.type} icon`} />
                    <div>
                      <div className="text-white font-bold text-sm">{story.type}</div>
                      <div className="text-gray-400 text-xs">{story.sector}</div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium bg-${story.color}-400/20 text-${story.color}-400`}>
                    {story.impact}
                  </div>
                </div>
                
                {/* Story Content */}
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-red-300 text-sm font-medium mb-2">Défi Initial</div>
                    <p className="text-gray-300 text-sm leading-relaxed">{story.challenge}</p>
                  </div>
                  
                  <div>
                    <div className="text-blue-300 text-sm font-medium mb-2">Innovation IA</div>
                    <p className="text-gray-300 text-sm leading-relaxed">{story.innovation}</p>
                  </div>
                  
                  <div>
                    <div className="text-green-300 text-sm font-medium mb-2">Transformation</div>
                    <p className="text-gray-300 text-sm leading-relaxed">{story.transformation}</p>
                  </div>
                </div>
                
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-${story.color}-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPACITÉS IA */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              L'IA qui s'adapte à
              <span className="font-bold text-purple-400"> votre métier</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Quatre domaines d'expertise pour transformer chaque aspect de votre business
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {aiCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl rounded-3xl p-8 border border-gray-700/50 hover:border-purple-400/40 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 bg-${capability.color}-400/20 rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <IconeOSOM type={capability.icon as any} size={28} color={capability.color as any} ariaLabel={`${capability.category} icon`} />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{capability.category}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{capability.description}</p>
                    
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {capability.examples.map((example, idx) => (
                        <div key={idx} className={`flex items-center space-x-2 text-sm text-${capability.color}-300`}>
                          <div className={`w-1.5 h-1.5 bg-${capability.color}-400 rounded-full`}></div>
                          <span>{example}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className={`p-4 bg-${capability.color}-400/10 rounded-xl border border-${capability.color}-400/20`}>
                      <div className={`text-${capability.color}-400 font-bold text-sm mb-1`}>Impact Business</div>
                      <div className="text-white text-sm">{capability.benefit}</div>
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-purple-400 text-sm font-medium">EXPERTISE TECHNIQUE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Sous le <span className="font-bold text-purple-400">capot</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Les technologies qui donnent vie à votre IA sur-mesure
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Gauche - Stack IA Visuel */}
            <div className="relative">
              <div className="bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/30">
                
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-purple-400/10 rounded-xl border border-purple-400/20">
                    <div className="flex items-center space-x-3">
                      <IconeOSOM type="code" size={24} color="purple" ariaLabel="Python Programming" />
                      <span className="text-white font-medium">Python + TensorFlow</span>
                    </div>
                    <span className="text-purple-400 text-sm">ML Engine</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-blue-400/10 rounded-xl border border-blue-400/20">
                    <div className="flex items-center space-x-3">
                      <IconeOSOM type="code" size={24} color="cyan" ariaLabel="API Development" />
                      <span className="text-white font-medium">API REST + GraphQL</span>
                    </div>
                    <span className="text-blue-400 text-sm">Integration</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-green-400/10 rounded-xl border border-green-400/20">
                    <div className="flex items-center space-x-3">
                      <IconeOSOM type="tools" size={24} color="green" ariaLabel="Database Management" />
                      <span className="text-white font-medium">Vector Database</span>
                    </div>
                    <span className="text-green-400 text-sm">Knowledge Base</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-yellow-400/10 rounded-xl border border-yellow-400/20">
                    <div className="flex items-center space-x-3">
                      <IconeOSOM type="shield" size={24} color="yellow" ariaLabel="Security & Privacy" />
                      <span className="text-white font-medium">Privacy-First</span>
                    </div>
                    <span className="text-yellow-400 text-sm">RGPD Compliant</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Droite - Bénéfices Business */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconeOSOM type="business-growth" size={20} color="purple" ariaLabel="Machine Learning" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Apprentissage Continu</h3>
                  <p className="text-gray-300">Votre IA s'améliore automatiquement avec chaque interaction. Plus vous l'utilisez, plus elle devient précise et efficace.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconeOSOM type="tools" size={20} color="cyan" ariaLabel="System Integration" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Intégration Transparente</h3>
                  <p className="text-gray-300">S'adapte à vos outils existants sans disruption. CRM, ERP, e-commerce - tout se connecte naturellement.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconeOSOM type="rocket" size={20} color="green" ariaLabel="Scalable Solutions" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Scalabilité Infinie</h3>
                  <p className="text-gray-300">Architecture qui grandit avec votre succès. Gère 10 ou 10,000 opérations par jour avec la même efficacité.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconeOSOM type="shield" size={20} color="yellow" ariaLabel="Security First" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Sécurité Bancaire</h3>
                  <p className="text-gray-300">Vos données restent 100% privées. Chiffrement de bout en bout, conformité RGPD stricte, hébergement sécurisé.</p>
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
              Questions <span className="font-bold text-purple-400">fréquentes</span>
            </h2>
            <p className="text-xl text-gray-300">
              Tout ce que vous devez savoir sur l'IA sur-mesure
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
                  className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-purple-400/50 hover:bg-purple-400/5 transition-colors duration-300"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white pr-8">{faq.question}</h3>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <IconeOSOM type="info" size={20} color="purple" ariaLabel="More Details" />
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
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-400/40 relative overflow-hidden">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Prêt à révolutionner votre
                <span className="font-bold text-purple-400"> business avec l'IA ?</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                Découvrons ensemble comment l'intelligence artificielle peut transformer vos défis en opportunités de croissance.
              </p>
              
              <div className="inline-block px-6 py-3 bg-purple-400/20 rounded-full text-purple-400 text-sm font-medium mb-8">
                Consultation gratuite • Solutions sur-mesure • ROI garanti
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Gauche - Offre */}
              <div>
                <div className="bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-2xl p-8 border border-purple-400/30 mb-6">
                  <div className="text-center mb-6">
                    <div className="text-purple-400 font-bold text-lg mb-2">INNOVATION IA SUR-MESURE</div>
                    <div className="text-4xl md:text-5xl font-black text-purple-400 mb-2">
                      Sur devis
                    </div>
                    <div className="text-gray-300 text-lg">
                      Analyse + Développement + Formation + Support
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">Audit gratuit de vos processus</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">IA développée spécifiquement pour vous</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-gray-300">Formation équipe incluse</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300">Support et évolutions continues</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Droite - CTA */}
              <div className="text-center lg:text-left">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Commençons par explorer vos besoins
                </h3>
                
                <div className="space-y-4">
                  <Link 
                    href="/contact"
                    className="block w-full bg-purple-400 hover:bg-purple-300 text-black font-bold text-lg px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-400/20 text-center"
                    style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                  >
                    Audit IA gratuit - 30 min
                  </Link>
                  
                  <Link 
                    href="/realisations"
                    className="block w-full border border-purple-400/50 text-purple-400 hover:text-white hover:bg-purple-400/10 font-semibold text-lg px-8 py-4 rounded-xl transition-all duration-300 text-center"
                    style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                  >
                    Voir nos innovations IA
                  </Link>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="flex flex-wrap justify-center gap-6 text-gray-400 text-sm">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      <span>Solutions 100% sur-mesure</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                      <span>Données sécurisées</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                      <span>Support continu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 to-blue-400/5 rounded-3xl blur-3xl opacity-30" />
          </div>
        </div>
      </section>
    </div>
  )
}