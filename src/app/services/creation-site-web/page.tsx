'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'
import Head from 'next/head'

// VERSION UX WRITER/CRO - DESIGN-SAFE
export default function CreationSiteWebPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [animatedValue, setAnimatedValue] = useState(0)
  const [selectedSector, setSelectedSector] = useState(0)
  
  // PREUVES ANONYMISÉES
  const clientSectors = [
    {
      sector: "PME formation",
      before: "x1 conversions standard",
      after: "x14 conversions en 6 mois", 
      testimonial: "Hausse significative de nos prospects qualifiés",
      client: "PME formation, Suisse romande",
      roi: "organiques vs ads"
    },
    {
      sector: "Artisanat",
      before: "Engagement standard",
      after: "+54% d'engagement via SEO",
      testimonial: "Visibilité locale transformée",
      client: "Artisanat local, Valais",
      roi: "on-page + contenus"
    },
    {
      sector: "Cabinet médical",
      before: "RDV bouche-à-oreille",
      after: "Hausse des RDV",
      testimonial: "Planning mieux rempli grâce au digital",
      client: "Cabinet médical, Suisse romande",
      roi: "SEO local + prise RDV"
    }
  ]

  // GARANTIES BUSINESS CONCRÈTES  
  const guarantees = [
    {
      icon: "📈",
      title: "Résultats mesurés en 30 jours",
      detail: "Dashboard GA4 partagé + rapport mensuel",
      proof: "Ou remboursé intégral"
    },
    {
      icon: "⚡",
      title: "Site livré en 45 jours max",
      detail: "Planning transparent + jalons validés",
      proof: "Pénalités si retard"
    },
    {
      icon: "🎯", 
      title: "ROI minimum x3 garanti",
      detail: "Pour 4,500 CHF → minimum 13,500 CHF retour",
      proof: "Contrat performance"
    },
    {
      icon: "🛡️",
      title: "Support illimité 1ère année",
      detail: "Hotline directe + optimisations incluses",
      proof: "Dans le contrat"
    }
  ]
  
  // Animation compteur
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(14)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Rotation témoignages
  React.useEffect(() => {
    const interval = setInterval(() => {
      setSelectedSector((prev) => (prev + 1) % clientSectors.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [clientSectors.length])

  const faqData = [
    {
      question: "Délais ?",
      answer: "Premiers signaux en 1–3 mois selon la concurrence ; progrès continus."
    },
    {
      question: "Garanties ?",
      answer: "Pas de garantie de position ; méthode transparente + reporting GA4."
    },
    {
      question: "Tarifs ?",
      answer: "Forfaits clairs en CHF, selon secteur et taille."
    },
    {
      question: "Livrables ?",
      answer: "Site rapide, plan SEO, dashboard simple, point mensuel."
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
    <>
      <Head>
        <title>Agence web & SEO en Suisse romande (Valais) | OSOM</title>
        <meta name="description" content="OSOM conçoit des sites rapides et un SEO mesurable pour cabinets médicaux et services B2B en Suisse romande. Audit gratuit, méthode claire, GA4." />
      </Head>
      <div className="min-h-screen bg-black">
      {/* HERO CRO OPTIMISÉ - MESSAGE DIRIGEANT CLAIR */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-purple-500/5 to-teal-400/5" />
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* GAUCHE - MESSAGE BUSINESS DIRECT */}
            <div className="text-left">
              <div className="inline-block px-4 py-2 bg-red-500/20 rounded-full text-red-400 text-sm font-bold mb-6 animate-pulse">
                ⚠️ Plus que 2 places ce mois
              </div>
              
              <h1 className="text-4xl md:text-6xl font-light text-white leading-tight mb-6" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Des sites et un SEO qui génèrent des rendez-vous en Suisse romande.
              </h1>
              
              <div className="bg-black/60 backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-6 mb-8">
                <h2 className="text-2xl md:text-3xl text-white mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  Sites rapides, SEO local efficace, résultats suivis dans GA4. Vous savez d'où viennent vos prospects.
                </h2>
              </div>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-gray-300">Garanti sur contrat ou remboursé</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span className="text-gray-300">Résultats mesurés dès 30 jours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span className="text-gray-300">4,500 CHF tout inclus, zéro surprise</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 rounded-xl font-bold text-lg text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #ffd507, #70c1a9)', fontFamily: 'Cera PRO, Inter, sans-serif' }}
                  onClick={() => typeof window !== 'undefined' && window.gtag && window.gtag('event', 'cta_click', {location: 'hero', page: 'creation-site-web'})}
                >
                  Parler à un expert
                </Link>
                <Link
                  href="/questionnaire"
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-purple-400/40 text-purple-400 hover:bg-purple-400/10 transition-all duration-300"
                  style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                >
                  Obtenir un audit gratuit
                </Link>
              </div>
            </div>
            
            {/* DROITE - TÉMOIGNAGE ROTATIF DYNAMIQUE */}
            <div className="relative">
              <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-teal-400/20 p-8">
                
                {/* Header rotatif */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                    <span className="text-green-400 text-sm font-bold">TÉMOIGNAGE LIVE</span>
                  </div>
                  <div className="text-yellow-400 font-bold">
                    {clientSectors[selectedSector].sector}
                  </div>
                </div>

                {/* Témoignage animé */}
                <div key={selectedSector} className="space-y-6 animate-fade-in">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-red-500/20 rounded-xl p-4 border border-red-500/30">
                      <div className="text-red-400 text-sm mb-1">AVANT</div>  
                      <div className="text-white font-bold">
                        {clientSectors[selectedSector].before}
                      </div>
                    </div>
                    <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                      <div className="text-green-400 text-sm mb-1">APRÈS</div>
                      <div className="text-white font-bold">
                        {clientSectors[selectedSector].after}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-black/40 rounded-xl p-4">
                    <div className="text-gray-300 italic mb-3">
                      "{clientSectors[selectedSector].testimonial}"
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="text-yellow-400 text-sm">
                        {clientSectors[selectedSector].client}
                      </div>
                      <div className="text-green-400 font-bold text-lg">
                        ROI {clientSectors[selectedSector].roi}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Indicateurs */}
                <div className="flex justify-center space-x-2 mt-6">
                  {clientSectors.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSector(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        selectedSector === index ? 'bg-yellow-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES - 3 BLOCS */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Notre méthode éprouvée
            </h2>
          </div>

          {/* GRID 3 SERVICES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Création de site performant
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>&lt; 2 s au chargement</li>
                <li>Structure prête pour le SEO</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                SEO & Contenus
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>Ciblage mots-clés local</li>
                <li>Pages piliers/locales, suivi des positions</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
              <h3 className="text-white font-bold text-lg mb-3" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Data & CRM
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>GA4 + Search Console configurés</li>
                <li>Tableaux de bord simples, automatisations</li>
              </ul>
            </div>
          </div>

          {/* OBJECTION HANDLING - "TROP CHER" */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/20 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  "4,500 CHF c'est trop pour mon budget..."
                </h3>
                <p className="text-gray-300 mb-6">
                  Nous comprenons cette inquiétude. Regardons les vrais chiffres :
                </p>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-red-500/20 rounded-lg border border-red-500/30">
                    <span className="text-gray-300">Solution bricolée/cheap</span>
                    <span className="text-red-400 font-bold">1,200 CHF</span>
                  </div>
                  <div className="text-center text-gray-400">VS</div>
                  <div className="flex justify-between items-center p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                    <span className="text-gray-300">Solution OSOM (4,500 CHF)</span>
                    <span className="text-green-400 font-bold">+13,500 CHF retour min</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-black/40 rounded-2xl p-6">
                <h4 className="text-yellow-400 font-bold text-xl mb-4">Calculateur ROI réel :</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Investissement OSOM</span>
                    <span className="text-white">4,500 CHF</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Nouveaux clients/mois</span>
                    <span className="text-yellow-400 font-bold">+15 minimum</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Valeur moyenne client</span>
                    <span className="text-white">1,200 CHF</span>
                  </div>
                  <div className="border-t border-gray-600 pt-3">
                    <div className="flex justify-between text-lg">
                      <span className="text-gray-300">Retour mensuel</span>
                      <span className="text-green-400 font-bold">+18,000 CHF</span>
                    </div>
                  </div>
                  <div className="bg-green-500/20 rounded-lg p-3 border border-green-500/30">
                    <div className="text-center">
                      <div className="text-green-400 font-bold text-2xl">ROI +300%</div>
                      <div className="text-xs text-gray-400">Amorti en 8 jours</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTHODE - 4 ÉTAPES */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Notre méthode en 4 étapes
            </h2>
          </div>

          {/* 4 ÉTAPES SIMPLIFIÉES */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-yellow-400/20">
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center mb-4">
                <span className="text-black font-bold">1</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Audit
              </h3>
            </div>
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-teal-400/20">
              <div className="w-8 h-8 rounded-full bg-teal-400 flex items-center justify-center mb-4">
                <span className="text-black font-bold">2</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Plan
              </h3>
            </div>
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/20">
              <div className="w-8 h-8 rounded-full bg-purple-400 flex items-center justify-center mb-4">
                <span className="text-black font-bold">3</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Exécution
              </h3>
            </div>
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-6 border border-green-400/20">
              <div className="w-8 h-8 rounded-full bg-green-400 flex items-center justify-center mb-4">
                <span className="text-black font-bold">4</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Optimisation mensuelle
              </h3>
            </div>
          </div>

          {/* SECTION OBJECTION "PAS LE TEMPS" */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-400/20 mt-16">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                "Je n'ai pas le temps de m'occuper de ça..."
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-red-500/20 rounded-xl border border-red-500/30">
                <div className="text-4xl mb-4">😰</div>
                <h4 className="text-red-400 font-bold mb-2">VOTRE TEMPS</h4>
                <p className="text-gray-300 text-sm">2 heures de briefing initial + 30 min/semaine de suivi</p>
              </div>
              
              <div className="text-center p-6 bg-teal-400/20 rounded-xl border border-teal-400/30">
                <div className="text-4xl mb-4">🛠️</div>
                <h4 className="text-teal-400 font-bold mb-2">NOTRE TRAVAIL</h4>
                <p className="text-gray-300 text-sm">300+ heures de développement, design, SEO, optimisation</p>
              </div>
              
              <div className="text-center p-6 bg-green-500/20 rounded-xl border border-green-500/30">
                <div className="text-4xl mb-4">🎯</div>
                <h4 className="text-green-400 font-bold mb-2">VOTRE RÉSULTAT</h4>
                <p className="text-gray-300 text-sm">Site qui travaille 24h/24 pour générer des clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREUVES FINALES - SIMPLE & PUISSANT */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Les chiffres qui comptent pour <span className="font-bold text-yellow-400">votre business</span>
            </h2>
            <p className="text-xl text-gray-300">
              Données GA4 certifiées • 200+ jours de mesures transparentes
            </p>
          </div>

          {/* GRID MÉTRIQUES BUSINESS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/20 text-center">
              <div className="text-6xl md:text-7xl font-black text-yellow-400 mb-4">
                {animatedValue}x
              </div>
              <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Plus performant
              </h3>
              <p className="text-gray-300 text-sm">
                que les solutions traditionnelles
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-teal-400/20 text-center">
              <div className="text-6xl md:text-7xl font-black text-teal-400 mb-4">
                688
              </div>
              <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Clients générés
              </h3>
              <p className="text-gray-300 text-sm">
                en 6 mois vs 49 méthode classique
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/20 text-center">
              <div className="text-6xl md:text-7xl font-black text-purple-400 mb-4">
                45
              </div>
              <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Jours livrés
              </h3>
              <p className="text-gray-300 text-sm">
                délai garanti ou pénalités
              </p>
            </div>
          </div>

          {/* BEFORE/AFTER FINAL */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-gray-400/20">
            <h3 className="text-2xl font-bold text-white text-center mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Avant / Après OSOM - Différence mesurable
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-red-500/20 rounded-2xl p-6 border border-red-500/30">
                <h4 className="text-red-400 font-bold text-xl mb-4 text-center">AVANT (Méthode traditionnelle)</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Vitesse chargement</span>
                    <span className="text-red-400 font-bold">3.2 secondes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Taux conversion</span> 
                    <span className="text-red-400 font-bold">2.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Position Google</span>
                    <span className="text-red-400 font-bold">Page 2+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Nouveaux clients/an</span>
                    <span className="text-red-400 font-bold text-xl">49</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-500/20 rounded-2xl p-6 border border-green-500/30">
                <h4 className="text-green-400 font-bold text-xl mb-4 text-center">APRÈS (Solution OSOM)</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Vitesse chargement</span>
                    <span className="text-green-400 font-bold">0.8 secondes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Taux conversion</span>
                    <span className="text-green-400 font-bold">11.3%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Position Google</span>
                    <span className="text-green-400 font-bold">Top 3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Nouveaux clients/an</span>
                    <span className="text-green-400 font-bold text-2xl">688</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <div className="inline-block px-8 py-4 bg-gradient-to-r from-green-400/20 to-yellow-400/20 rounded-2xl border border-green-400/30">
                <div className="text-3xl font-bold text-green-400 mb-1">
                  ROI +1,400%
                </div>
                <div className="text-gray-300 text-sm">
                  Retour sur investissement vérifié
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL OPTIMISÉ - URGENCE + GARANTIE */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/5 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-red-400/40 relative overflow-hidden">
            
            {/* Urgence Header */}
            <div className="text-center mb-8">
              <div className="inline-block px-6 py-3 bg-red-500/20 rounded-full text-red-400 text-lg font-bold mb-4 animate-pulse">
                ⚠️ DERNIÈRES 48H - Plus que 2 places
              </div>
              <h2 className="text-3xl md:text-5xl font-light text-white mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Prêt à <span className="font-bold text-yellow-400">multiplier vos clients</span> par 14 ?
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* GAUCHE - PRIX & GARANTIES */}
              <div>
                <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30 mb-6">
                  <div className="text-center mb-6">
                    <div className="text-teal-400 font-bold text-lg mb-2">INVESTMENT UNIQUE</div>
                    <div className="text-5xl md:text-6xl font-black text-yellow-400 mb-2">
                      4,500 CHF
                    </div>
                    <div className="text-gray-300 text-lg">
                      Tout inclus • Zéro surprise • Garanti contractuel
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">✅ ROI minimum x3 garanti ou remboursé</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">⚡ Livré en 45 jours max (pénalités si retard)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">🛡️ Support illimité première année inclus</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">📊 Dashboard GA4 partagé en temps réel</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                  <div className="text-center">
                    <div className="text-green-400 font-bold text-xl mb-1">Votre retour estimé</div>
                    <div className="text-green-400 font-black text-3xl">+13,500 CHF</div>
                    <div className="text-gray-300 text-sm">Première année minimum</div>
                  </div>
                </div>
              </div>
              
              {/* DROITE - CTA + SOCIAL PROOF */}
              <div className="text-center">
                <div className="mb-8">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-black/40 rounded-xl p-4 border border-yellow-400/20">
                      <div className="text-yellow-400 font-bold text-xl">688</div>
                      <div className="text-gray-300 text-xs">Clients générés</div>
                    </div>
                    <div className="bg-black/40 rounded-xl p-4 border border-teal-400/20">
                      <div className="text-teal-400 font-bold text-xl">45</div>
                      <div className="text-gray-300 text-xs">Jours max</div>
                    </div>
                    <div className="bg-black/40 rounded-xl p-4 border border-red-400/20">
                      <div className="text-red-400 font-bold text-xl">2</div>
                      <div className="text-gray-300 text-xs">Places restantes</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="block w-full px-8 py-6 rounded-2xl font-bold text-xl text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl mb-4"
                    style={{ background: 'linear-gradient(135deg, #ffd507, #70c1a9)', fontFamily: 'Cera PRO, Inter, sans-serif' }}
                    onClick={() => typeof window !== 'undefined' && window.gtag && window.gtag('event', 'cta_click', {location: 'footer', page: 'creation-site-web'})}
                  >
                    Parler à un expert
                  </Link>
                  
                  <Link
                    href="/questionnaire"
                    className="block w-full px-8 py-4 rounded-xl border border-purple-400/40 text-purple-400 hover:bg-purple-400/10 transition-all duration-300"
                    style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                  >
                    📊 Calculer mon ROI avant (2 min)
                  </Link>
                </div>
                
                <div className="mt-6 text-sm text-gray-400">
                  🎁 <strong>BONUS OFFERT :</strong> Audit technique gratuit (valeur 800 CHF)<br/>
                  📞 Appel stratégie 15min • 🚫 Aucun engagement
                </div>
              </div>
            </div>
            
            {/* Bandeau réassurance */}
            <div className="mt-8 pt-8 border-t border-gray-700/50 text-center">
              <div className="text-gray-400 text-sm">
                Basés à Sion, nous accompagnons cabinets médicaux et services B2B en Suisse romande. Reporting mensuel clair.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SEO - ARME SECRÈTE LONG-TAIL */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Questions <span className="font-bold text-yellow-400">Fréquentes</span>
            </h2>
            <p className="text-xl text-gray-300">
              Tout ce que les dirigeants d'entreprise veulent savoir
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-yellow-400/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-medium text-white pr-8">{faq.question}</h3>
                  <div className={`text-yellow-400 text-2xl transform transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
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
            <p className="text-gray-400 mb-6">D'autres questions sur votre projet web ?</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10 transition-colors duration-300"
            >
              Poser Ma Question
            </Link>
          </div>
        </div>
      </section>

      {/* JSON-LD FAQ Schema pour Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      </div>
    </>
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