'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
import { motion } from 'framer-motion'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

export default function ProgrammationIAPage() {
  const [activeExperiment, setActiveExperiment] = useState<string>('dashboard')
  const [showResults, setShowResults] = useState(false)

  // Expériences IA en cours
  const experiments = [
    {
      id: 'dashboard',
      name: 'Tableau de bord intelligent',
      status: 'live',
      description: 'Dashboard GA4 + CRM qui prédit vos ventes',
      metrics: {
        tempsEconomise: '3h/jour',
        precisionPrediction: '87%',
        adoptionEquipe: '100%'
      }
    },
    {
      id: 'automation',
      name: 'Assistant emails',
      status: 'testing',
      description: 'IA qui répond et classe vos emails automatiquement',
      metrics: {
        emailsTraites: '250/jour',
        tempsReponse: '&lt; 2 min',
        satisfaction: '4.8/5'
      }
    },
    {
      id: 'analysis',
      name: 'Analyse documents',
      status: 'ready',
      description: 'Extraction automatique des données importantes',
      metrics: {
        documentsAnalyses: '1000+',
        precision: '95%',
        tempsTraitement: '10 sec/doc'
      }
    }
  ]

  // Ce qui marche vraiment
  const whatWorks = [
    {
      category: 'Marche très bien',
      items: [
        'Dashboards temps réel connectés GA4/CRM',
        'Chatbots service client avec votre base de connaissances',
        'Automatisation emails et documents répétitifs',
        'Analyse prédictive sur données existantes'
      ],
      color: 'green'
    },
    {
      category: 'Marche avec adaptation',
      items: [
        'IA conversationnelle complexe (nécessite beaucoup de données)',
        'Reconnaissance images spécifiques métier',
        'Prédictions long terme (fiabilité variable)',
        'Personnalisation extrême (coût/bénéfice à évaluer)'
      ],
      color: 'yellow'
    },
    {
      category: 'Pas encore mature',
      items: [
        'IA créative autonome (toujours besoin supervision)',
        'Décisions stratégiques complexes',
        'Remplacement complet d\'un employé',
        'IA émotionnelle (reste approximatif)'
      ],
      color: 'red'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* Progress Bars Sublimes */}
      <ScrollProgressIndicator />
      
      {/* HERO LABORATOIRE IA - STYLE TERMINAL */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        
        {/* Background Terminal Effect */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 opacity-20">
            <div className="h-full w-full" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(139, 92, 246, 0.03) 2px, rgba(139, 92, 246, 0.03) 4px)',
              backgroundSize: '100% 4px'
            }} />
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Gauche - Terminal Interface */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                {/* Terminal Header */}
                <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-gray-400 text-xs font-mono">osom-lab-terminal</span>
                </div>
                
                {/* Terminal Content */}
                <div className="p-6 font-mono text-sm">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-green-400">osom@lab</span>
                    <span className="text-gray-400">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-gray-400">$ </span>
                    <span className="text-white">./analyze-business</span>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-2"
                  >
                    <div className="text-gray-300">▶ Scanning processus métier...</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="mt-1"
                  >
                    <div className="text-yellow-400">⚡ 3 opportunités IA détectées:</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="mt-2 ml-4 space-y-1"
                  >
                    <div className="text-green-300">✓ Dashboard prédictif GA4</div>
                    <div className="text-green-300">✓ Automatisation emails clients</div>
                    <div className="text-green-300">✓ Assistant IA documents</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5 }}
                    className="mt-3"
                  >
                    <div className="text-purple-400">📊 Temps économisé estimé: 15h/semaine</div>
                    <div className="text-purple-400">💰 ROI projeté: visible en 30 jours</div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 3 }}
                    className="mt-4"
                  >
                    <span className="text-green-400">osom@lab</span>
                    <span className="text-gray-400">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-gray-400">$ </span>
                    <motion.span
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.8, repeat: Infinity }}
                      className="inline-block w-2 h-4 bg-white ml-1"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Droite - Contenu */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Live Status */}
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-green-400/10 border border-green-400/30 rounded-full mb-8"
                animate={{ 
                  boxShadow: [
                    '0 0 0 0 rgba(74, 222, 128, 0.4)',
                    '0 0 0 10px rgba(74, 222, 128, 0)',
                    '0 0 0 0 rgba(74, 222, 128, 0)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">LABORATOIRE ACTIF • 3 TESTS EN COURS</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl font-light text-white mb-6 leading-tight">
                Votre IA sur-mesure
                <br />
                <span className="font-bold text-purple-400">en mode laboratoire</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8">
                On teste, on mesure, on livre. Pas de promesses en l'air.
                <br />
                <span className="text-purple-400 font-medium">Résultats vérifiables dès 30 jours.</span>
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">3-5</div>
                  <div className="text-xs text-gray-400">jours prototype</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">15h</div>
                  <div className="text-xs text-gray-400">économisées/sem</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">100%</div>
                  <div className="text-xs text-gray-400">transparent</div>
                </div>
              </div>
              
              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="#experiments"
                  className="inline-flex items-center justify-center px-6 py-3 bg-purple-400 hover:bg-purple-300 text-black font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-400/20"
                >
                  Explorer le lab
                </Link>
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-purple-400/50 text-purple-400 hover:text-white hover:bg-purple-400/10 font-semibold rounded-lg transition-all duration-300"
                >
                  Audit gratuit
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION EXPÉRIENCES LIVE */}
      <section id="experiments" className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Nos <span className="font-bold text-purple-400">expériences</span> en cours
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cliquez sur une expérience pour voir les résultats en temps réel
            </p>
          </div>

          {/* Lab Experiments Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {experiments.map((exp) => (
              <motion.div
                key={exp.id}
                className={`relative p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                  activeExperiment === exp.id 
                    ? 'bg-purple-400/20 border-purple-400' 
                    : 'bg-black/50 border-gray-700 hover:border-purple-400/50'
                }`}
                onClick={() => {
                  setActiveExperiment(exp.id)
                  setShowResults(true)
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    exp.status === 'live' ? 'bg-green-400/20 text-green-400' :
                    exp.status === 'testing' ? 'bg-yellow-400/20 text-yellow-400' :
                    'bg-blue-400/20 text-blue-400'
                  }`}>
                    {exp.status === 'live' ? 'EN PRODUCTION' :
                     exp.status === 'testing' ? 'EN TEST' : 'PRÊT'}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{exp.name}</h3>
                <p className="text-gray-300 text-sm mb-4">{exp.description}</p>
                
                {/* Mini Metrics */}
                {activeExperiment === exp.id && showResults && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-purple-400/30 space-y-2"
                  >
                    {Object.entries(exp.metrics).map(([key, value]) => (
                      <div key={key} className="flex justify-between text-sm">
                        <span className="text-gray-400">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}</span>
                        <span className="text-purple-400 font-medium">{value}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Try Demo Button */}
          <div className="text-center">
            <button
              onClick={() => setShowResults(!showResults)}
              className="inline-flex items-center px-6 py-3 bg-purple-400/10 border border-purple-400/30 rounded-xl text-purple-400 hover:bg-purple-400/20 transition-all duration-300"
            >
              {showResults ? 'Masquer les résultats' : 'Voir tous les résultats'}
            </button>
          </div>
        </div>
      </section>

      {/* SECTION CE QUI MARCHE / PAS */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              La <span className="font-bold text-purple-400">vérité</span> sur l'IA
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transparence totale : ce qui fonctionne vraiment en production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatWorks.map((category, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-2xl border ${
                  category.color === 'green' ? 'border-green-400/30 bg-green-400/5' :
                  category.color === 'yellow' ? 'border-yellow-400/30 bg-yellow-400/5' :
                  'border-red-400/30 bg-red-400/5'
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <div className={`text-lg font-bold mb-4 ${
                  category.color === 'green' ? 'text-green-400' :
                  category.color === 'yellow' ? 'text-yellow-400' :
                  'text-red-400'
                }`}>
                  {category.category}
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                        category.color === 'green' ? 'bg-green-400' :
                        category.color === 'yellow' ? 'bg-yellow-400' :
                        'bg-red-400'
                      }`}></div>
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS SIMPLE 3 ÉTAPES */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Notre <span className="font-bold text-purple-400">processus</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              De l'idée à la production en 3 étapes transparentes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-purple-400">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Audit gratuit</h3>
              <p className="text-gray-300">On analyse vos processus et identifie où l'IA peut vraiment faire la différence. 30 min, sans engagement.</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Prototype rapide</h3>
              <p className="text-gray-300">On développe un prototype fonctionnel en quelques jours. Vous testez, on ajuste.</p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="w-20 h-20 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Déploiement & Formation</h3>
              <p className="text-gray-300">On déploie la solution, forme votre équipe et assure le support. Résultats mesurables dès le premier mois.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA FINAL LABORATOIRE */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-br from-purple-400/10 to-cyan-400/10 rounded-3xl p-12 border border-purple-400/30 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6">
              Prêt pour votre <span className="font-bold text-purple-400">expérience IA</span> ?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Audit gratuit, devis transparent, résultats mesurables.
              <br />
              <span className="text-purple-400">Zéro bullshit, 100% pragmatique.</span>
            </p>

            <div className="inline-flex items-center px-6 py-3 bg-green-400/20 rounded-full text-green-400 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              2 places disponibles ce mois • Prochain créneau dans 2 semaines
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-purple-400 hover:bg-purple-300 text-black font-bold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-400/20"
              >
                Réserver mon audit gratuit
              </Link>
              
              <Link 
                href="tel:+41791289549"
                className="inline-flex items-center justify-center px-8 py-4 border border-purple-400/50 text-purple-400 hover:text-white hover:bg-purple-400/10 font-semibold text-lg rounded-xl transition-all duration-300"
              >
                +41 79 128 95 49
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}