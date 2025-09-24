'use client'

import Link from 'next/link'
import { useState } from 'react'
import IconeOSOM from '@/components/IconeOSOM'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'
import ServicesCrossLinks from '@/components/ui/ServicesCrossLinks'

export default function SEOContentMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // Services SEO modérés
  const seoServices = [
    {
      title: 'Audit SEO approfondi',
      description: 'Analyse complète de votre présence digitale actuelle',
      features: [
        'État des lieux technique',
        'Analyse concurrentielle',
        'Opportunités de mots-clés',
        'Plan d\'action priorisé'
      ],
      icon: 'search',
      color: 'cyan'
    },
    {
      title: 'Stratégie de contenu',
      description: 'Contenus qui répondent aux questions de vos clients',
      features: [
        'Calendrier éditorial',
        'Rédaction optimisée',
        'Maillage interne',
        'Suivi des performances'
      ],
      icon: 'document',
      color: 'purple'
    },
    {
      title: 'SEO local',
      description: 'Visibilité renforcée dans votre région',
      features: [
        'Google My Business',
        'Citations locales',
        'Pages géolocalisées',
        'Avis clients'
      ],
      icon: 'location',
      color: 'green'
    }
  ]

  const faqData = [
    {
      question: "Combien de temps pour améliorer mon référencement ?",
      answer: "Les résultats SEO apparaissent entre 3 et 6 mois selon la concurrence. Nous suivons vos progrès mensuellement avec des rapports détaillés."
    },
    {
      question: "Quelle différence entre SEO et publicité payante ?",
      answer: "Le SEO construit une visibilité durable qui continue après l'investissement. La publicité génère du trafic immédiat mais s'arrête dès l'arrêt des paiements."
    },
    {
      question: "Comment mesurer les résultats SEO ?",
      answer: "Positions sur mots-clés stratégiques, trafic organique, leads générés. Tableau de bord mensuel pour visualiser la progression."
    },
    {
      question: "Mon secteur est très concurrentiel, est-ce possible ?",
      answer: "Oui. Nous adoptons une stratégie de niche avec des mots-clés longue traîne et développons votre expertise thématique."
    },
    {
      question: "SEO local Valais : quels avantages ?",
      answer: "Visibilité renforcée sur Google My Business, citations locales, pages géolocalisées. Captez les clients qui cherchent près de chez eux."
    },
    {
      question: "Peut-on faire du SEO sans refonte complète ?",
      answer: "Absolument. Nous optimisons votre site existant : structure technique, contenus, maillage interne sans tout recommencer."
    },
    {
      question: "Audit SEO payant : que contient-il exactement ?",
      answer: "650 CHF pour analyse technique complète, benchmark 5 concurrents locaux, recherche mots-clés + opportunités, plan d'action 6 mois priorisé, session explicative 60 min. Livré en 48h."
    }
  ]

  return (
    <div className="min-h-screen bg-black">

      {/* Progress Bars Sublimes */}
      <ScrollProgressIndicator />
      
      {/* HERO STORYTELLING MODÉRÉ */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/10 via-purple-500/5 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">
            <span className="text-cyan-400 font-bold">SEO local</span> orienté prise de contact
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
            <span className="text-cyan-400 font-semibold">En 90 jours</span> : base technique propre, clusters éditoriaux, pages locales, maillage.<br/>
            <span className="text-purple-400 font-semibold">Tableau de bord</span> partagé.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Forfait dès CHF 2'800 / mois : rédaction continue (4 contenus/mois), netlinking propre, suivi positions et opportunités.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="inline-block px-10 py-5 rounded-xl font-bold text-xl text-black transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7)' }}
            >
              Consultation gratuite 30 min
            </Link>
            <Link
              href="/services" 
              className="inline-flex items-center px-8 py-5 rounded-xl border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 text-lg font-medium"
            >
              Voir notre méthode
            </Link>
          </div>

          {/* POINTS CLÉS */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <IconeOSOM type="chart" size={32} color="cyan" ariaLabel="Croissance progressive" />
              <div className="text-sm text-gray-400 mt-2">Croissance progressive</div>
            </div>
            <div className="text-center">
              <IconeOSOM type="target" size={32} color="purple" ariaLabel="Ciblage précis" />
              <div className="text-sm text-gray-400 mt-2">Ciblage précis</div>
            </div>
            <div className="text-center">
              <IconeOSOM type="chart" size={32} color="green" ariaLabel="Suivi transparent" />
              <div className="text-sm text-gray-400 mt-2">Suivi transparent</div>
            </div>
          </div>
        </div>
      </section>


      {/* SERVICES SEO */}
      <section id="services" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Notre approche <span className="text-cyan-400 font-bold">SEO</span>
            </h2>
            <p className="text-xl text-gray-400">
              Trois piliers pour améliorer votre visibilité
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-black/90 to-gray-900/90 rounded-3xl p-8 border border-gray-700/50 hover:border-cyan-400/40 transition-all duration-300">
                <div className="w-12 h-12 mb-6 rounded-full bg-cyan-400/20 flex items-center justify-center">
                  <IconeOSOM type={service.icon as any} size={24} color={service.color as any} ariaLabel={service.title} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS SEO */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Un travail <span className="text-cyan-400 font-bold">progressif</span>
            </h2>
            <p className="text-xl text-gray-400">
              Le SEO se construit étape par étape
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { month: 'Mois 1', focus: 'Audit & corrections techniques', result: 'Site optimisé' },
              { month: 'Mois 2-3', focus: 'Contenus & mots-clés', result: 'Pages indexées' },
              { month: 'Mois 4-6', focus: 'Autorité & liens', result: 'Positions améliorées' },
              { month: 'Mois 6+', focus: 'Optimisation continue', result: 'Croissance stable' }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="text-cyan-400 font-bold text-lg mb-2">{phase.month}</div>
                <div className="bg-black/40 rounded-xl p-4 border border-cyan-400/20 mb-3">
                  <p className="text-gray-300 text-sm">{phase.focus}</p>
                </div>
                <div className="text-green-400 text-sm">→ {phase.result}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400">
              Les résultats varient selon votre secteur, la concurrence et l'historique de votre site. 
              Nous ajustons la stratégie en continu.
            </p>
          </div>
        </div>
      </section>


      {/* PACKAGES PERSONNALISÉS SEO MARKETING */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 via-transparent to-purple-400/5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Anti-Agence SEO */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3 animate-pulse"></div>
              LA SEULE AGENCE SEO DU VALAIS QUI PROUVE AVANT DE PROMETTRE
            </div>

            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Fini les <span className="text-red-400 line-through">promesses SEO magiques</span>
              <br />
              <span className="font-bold text-cyan-400">Voici nos résultats SEO</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              <strong className="text-white">Prix fixe transparent</strong> • <strong className="text-white">Positions vérifiables</strong> • <strong className="text-white">Trafic mesurable</strong>
              <br />
              <span className="text-cyan-400">Votre concurrent SEO sierrois grimpe déjà dans Google</span>
            </p>

            {/* Messaging Anti-Agence SEO */}
            <div className="bg-white/5 border border-cyan-400/30 rounded-2xl p-6 max-w-4xl mx-auto mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-red-400 font-semibold mb-2">❌ Agences SEO traditionnelles</div>
                  <div className="text-gray-400 text-sm">Position #1 en 30 jours (impossible)</div>
                </div>
                <div>
                  <div className="text-red-400 font-semibold mb-2">❌ Techniques black hat</div>
                  <div className="text-gray-400 text-sm">Pénalités Google garanties</div>
                </div>
                <div>
                  <div className="text-red-400 font-semibold mb-2">❌ Reporting bidon</div>
                  <div className="text-gray-400 text-sm">Métriques gonflées artificiellement</div>
                </div>
              </div>
              <div className="border-t border-white/20 mt-4 pt-4">
                <div className="text-cyan-400 font-bold text-lg text-center">✅ OSOM SEO : Positions vérifiables + Techniques white hat + Trafic réel</div>
              </div>
            </div>
          </div>

          {/* Packages SEO Restructurés */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* SEO Starter */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all relative">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">SEO STARTER</h3>
                <p className="text-cyan-400 text-sm">Visibilité locale</p>
                <div className="text-3xl font-bold text-cyan-400 mt-4">1,500 CHF</div>
                <div className="text-gray-400 text-sm">Par mois, 6 mois min</div>
              </div>

              <div className="bg-cyan-400/10 rounded-lg p-4 mb-6">
                <div className="text-cyan-400 font-semibold text-sm mb-2">Garantie transparence:</div>
                <div className="text-gray-300 text-xs">Positions Google trackées en temps réel</div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">SEO local Valais optimisé</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">3 contenus optimisés/mois</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">Google My Business pro</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">Rapport mensuel détaillé</span>
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block w-full px-6 py-3 rounded-xl border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 text-sm font-medium"
                >
                  Commencer
                </Link>
              </div>
            </div>

            {/* SEO Growth */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-green-400/50 transition-all relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-green-400 text-black px-4 py-2 rounded-full text-xs font-bold">
                RECOMMANDÉ
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">SEO GROWTH</h3>
                <p className="text-green-400 text-sm">Croissance accélérée</p>
                <div className="text-3xl font-bold text-green-400 mt-4">2,200 CHF</div>
                <div className="text-gray-400 text-sm">Par mois, 6 mois min</div>
              </div>

              <div className="bg-green-400/10 rounded-lg p-4 mb-6">
                <div className="text-green-400 font-semibold text-sm mb-2">Garantie transparence:</div>
                <div className="text-gray-300 text-xs">Tout Starter + stratégie netlinking</div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">Tout le package Starter</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">Stratégie netlinking propre</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">Optimisations techniques continues</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">Analytics avancés + insights</span>
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block w-full px-6 py-3 rounded-xl bg-green-400 text-black hover:bg-green-500 transition-all duration-300 text-sm font-bold"
                >
                  Accélérer
                </Link>
              </div>
            </div>

            {/* SEO Domination */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all relative">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-white mb-2">SEO DOMINATION</h3>
                <p className="text-purple-400 text-sm">Excellence premium</p>
                <div className="text-3xl font-bold text-purple-400 mt-4">3,500 CHF</div>
                <div className="text-gray-400 text-sm">Par mois, 12 mois min</div>
              </div>

              <div className="bg-purple-400/10 rounded-lg p-4 mb-6">
                <div className="text-purple-400 font-semibold text-sm mb-2">Garantie transparence:</div>
                <div className="text-gray-300 text-xs">Tout Growth + copywriting premium</div>
              </div>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">Tout le package Growth</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">Copywriting premium expert</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">Support prioritaire 24h</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300 text-sm">Consulting stratégique inclus</span>
                </li>
              </ul>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="inline-block w-full px-6 py-3 rounded-xl border border-purple-400/40 text-purple-400 hover:bg-purple-400/10 transition-all duration-300 text-sm font-medium"
                >
                  Dominer
                </Link>
              </div>
            </div>
          </div>

          {/* Objections Handling SEO */}
          <div className="bg-gray-900/50 border border-cyan-400/30 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-cyan-400 font-bold text-xl mb-6 text-center">Objections SEO = Nos spécialités</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <span className="text-red-400">❓ "Le SEO prend trop de temps"</span>
                <div className="text-gray-300 mt-2 text-sm">→ Quick wins premiers mois + stratégie long terme. Georges voit résultats mois 2</div>
              </div>
              <div>
                <span className="text-red-400">❓ "Google change tout le temps"</span>
                <div className="text-gray-300 mt-2 text-sm">→ Techniques white hat pérennes. Nos clients stables depuis 2+ ans</div>
              </div>
              <div>
                <span className="text-red-400">❓ "Concurrence trop forte"</span>
                <div className="text-gray-300 mt-2 text-sm">→ SEO local Valais moins concurrentiel. Marie domine sa niche</div>
              </div>
              <div>
                <span className="text-red-400">❓ "Budget mensuel trop lourd"</span>
                <div className="text-gray-300 mt-2 text-sm">→ ROI Calculator personnalisé + tracking conversions temps réel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AUDIT SEO SÉPARÉ */}
      <section className="py-24 relative bg-gradient-to-br from-green-400/5 via-transparent to-cyan-400/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Audit SEO <span className="font-bold text-green-400">complet</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Diagnostic approfondi de votre situation SEO actuelle + plan d'action priorité
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-green-400/30 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-green-400 font-bold text-lg mb-4">AUDIT SEO COMPLET</div>
                <div className="text-4xl font-bold text-white mb-2">650 CHF</div>
                <div className="text-gray-400 mb-6">Rapport livré en 48h + Session 60 min</div>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">Analyse technique complète (vitesse, indexation, erreurs)</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">Benchmark 5 concurrents locaux directs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">Recherche mots-clés + opportunités manquées</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">Plan d'action priorisé sur 6 mois</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">Session explicative 60 min + Q&A</span>
                  </li>
                </ul>

                <div className="bg-green-400/10 rounded-lg p-4">
                  <div className="text-green-400 font-semibold text-sm mb-2">Garantie valeur :</div>
                  <div className="text-gray-300 text-xs">Audit actionnable immédiatement, pas de généralités</div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-black/40 rounded-xl p-6 mb-6">
                  <div className="text-sm text-gray-400 mb-2">Exemple insights audit :</div>
                  <div className="text-green-400 font-semibold text-sm mb-1">Concurrent local = position #3</div>
                  <div className="text-white text-sm mb-1">Vous = position #12</div>
                  <div className="text-cyan-400 text-sm">3 optimisations = gap réduit 6 mois</div>
                </div>

                <Link
                  href="/contact"
                  className="inline-block w-full px-8 py-4 rounded-xl bg-green-400 text-black hover:bg-green-500 transition-all duration-300 text-lg font-bold mb-4"
                >
                  Commander mon audit
                </Link>

                <div className="text-xs text-gray-500">
                  Ou inclus dans tous nos packages SEO mensuels
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-3xl p-12 border border-cyan-400/30 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Prêt à <span className="font-bold text-cyan-400">dominer Google</span> ?
            </h2>

            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Choisissez votre package SEO ou commencez par un audit complet
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-10 py-5 rounded-xl font-bold text-xl text-black transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7)' }}
              >
                Démarrer mon SEO
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-5 rounded-xl border border-green-400/40 text-green-400 hover:bg-green-400/10 transition-all duration-300 text-lg"
              >
                Commander audit
              </Link>
            </div>

            <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-400">
              <div>✓ Prix fixe transparent</div>
              <div>✓ Positions vérifiables</div>
              <div>✓ ROI mesurable</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white">
              Questions sur le <span className="font-bold text-cyan-400">SEO</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-black/40 rounded-xl border border-gray-700/50 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-cyan-400/5 transition-colors"
                >
                  <h3 className="text-white pr-4">{faq.question}</h3>
                  <div className={`text-cyan-400 text-xl transform transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
                    +
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Complémentaires */}
      <ServicesCrossLinks currentService="seo-content-marketing" />

    </div>
  )
}