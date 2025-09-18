'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ServicePageMobile } from '@/components/services/ServicePageMobile'

export default function CreationSiteWebPage() {
  const [selectedProject, setSelectedProject] = useState('vitrine')
  const [selectedPrice, setSelectedPrice] = useState('growth')
  const [currentStep, setCurrentStep] = useState(1)
  
  // Projets du studio avec émojis pour simplicité
  const studioProjects = [
    {
      id: 'vitrine',
      name: 'Site Vitrine Express',
      client: 'PME locale',
      preview: '🏢',
      before: 'Aucune présence en ligne',
      after: '50+ leads/mois',
      time: '5 jours',
      tech: 'Next.js + SEO'
    },
    {
      id: 'ecommerce',
      name: 'Boutique en ligne',
      client: 'Artisan Valaisan',
      preview: '🛍️',
      before: 'Vente locale uniquement',
      after: '3x chiffre affaires',
      time: '3 semaines',
      tech: 'React + Stripe'
    },
    {
      id: 'webapp',
      name: 'Application métier',
      client: 'Cabinet médical',
      preview: '⚕️',
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

  // Process timeline
  const processSteps = [
    { id: 1, name: 'Brief', desc: 'On comprend vos besoins', day: 'J1' },
    { id: 2, name: 'Maquette', desc: 'Design validé ensemble', day: 'J5' },
    { id: 3, name: 'Développement', desc: 'Code propre et rapide', day: 'J10-30' },
    { id: 4, name: 'Tests', desc: 'Optimisation performance', day: 'J35' },
    { id: 5, name: 'Lancement', desc: 'Mise en ligne + formation', day: 'J45' }
  ]

  const mobileData = {
    title: "Site Web Qui Convertit",
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
      <ServicePageMobile {...mobileData} />

      <div className="hidden lg:block min-h-screen bg-black text-white overflow-hidden">
      
      {/* HERO PROCESS VISUEL - TIMELINE INTERACTIVE */}
      <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-32 pb-16">
        
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
              <span className="text-yellow-400 text-sm font-medium">PROCESS TRANSPARENT • 688 SITES LIVRÉS</span>
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

          {/* Timeline interactive */}
          <div className="relative max-w-6xl mx-auto">
            {/* Ligne centrale */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-yellow-400/50 to-yellow-400/20 transform -translate-x-1/2"></div>
            
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
                  whileInView={{ 
                    scale: [1, 1.02, 1],
                    transition: { duration: 2, repeat: Infinity }
                  }}
                >
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16 text-right' : 'pl-16 text-left'}`}>
                    <div className="bg-gradient-to-br from-yellow-400/10 to-orange-400/5 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300">
                      <div className={`flex items-center space-x-4 mb-4 ${index % 2 === 0 ? 'justify-end flex-row-reverse space-x-reverse' : ''}`}>
                        <span className="text-yellow-400 text-2xl font-black">{step.day}</span>
                        <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center">
                          <span className="text-yellow-400 font-bold">{step.id}</span>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.name}</h3>
                      <p className="text-gray-300 leading-relaxed">{step.desc}</p>
                      
                      {/* Progress indicator */}
                      <div className="mt-4 pt-4 border-t border-yellow-400/20">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-green-400 text-sm font-medium">
                            {step.id === 5 ? 'Site en ligne !' : 'En cours...'}
                          </span>
                        </div>
                      </div>
                    </div>
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