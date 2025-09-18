'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
import IconeOSOM from '@/components/IconeOSOM'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

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
      question: "Audit SEO gratuit : que contient-il exactement ?",
      answer: "Analyse technique complète, opportunités de mots-clés, audit concurrentiel, plan d'action priorisé. 30 minutes d'échanges incluses."
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


      {/* TARIFICATION SIMPLE */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Investissement <span className="text-cyan-400 font-bold">SEO</span>
            </h2>
            <p className="text-xl text-gray-400">
              Des formules adaptées à vos objectifs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 rounded-3xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">SEO Essentiel</h3>
              <div className="text-3xl font-bold text-white mb-4">890 CHF<span className="text-lg text-gray-400">/mois</span></div>
              <ul className="space-y-3 text-gray-300">
                <li>• Optimisations techniques mensuelles</li>
                <li>• 2 contenus optimisés/mois</li>
                <li>• Suivi positions et trafic</li>
                <li>• Rapport mensuel détaillé</li>
                <li>• Support par email</li>
              </ul>
              <Link href="/contact?service=seo-essentiel" className="block mt-6 text-center py-3 rounded-xl border border-cyan-400/40 text-cyan-400 hover:bg-cyan-400/10 transition-all">
                Commencer
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 rounded-3xl p-8 border border-cyan-400/60 shadow-xl shadow-cyan-400/10">
              <div className="bg-cyan-400 text-black px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                RECOMMANDÉ
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">SEO Performance</h3>
              <div className="text-3xl font-bold text-white mb-4">1,890 CHF<span className="text-lg text-gray-400">/mois</span></div>
              <ul className="space-y-3 text-gray-300">
                <li>• Tout du pack Essentiel +</li>
                <li>• 4 contenus premium/mois</li>
                <li>• Stratégie backlinks</li>
                <li>• Optimisation conversion</li>
                <li>• Call mensuel stratégie</li>
                <li>• Support prioritaire</li>
              </ul>
              <Link href="/contact?service=seo-performance" className="block mt-6 text-center py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-400 text-black font-bold hover:brightness-110 transition-all">
                Solution complète
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Engagement minimum 6 mois • Audit initial offert • Résultats progressifs
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-3xl p-12 border border-cyan-400/30 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Commençons par <span className="font-bold text-cyan-400">un audit</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Découvrez votre potentiel SEO avec une analyse gratuite 
              de votre situation actuelle et des opportunités.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-10 py-5 rounded-xl font-bold text-xl text-black transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #06b6d4, #a855f7)' }}
              >
                Demander mon audit
              </Link>
              <Link
                href="/questionnaire"
                className="inline-block px-8 py-5 rounded-xl border border-purple-400/40 text-purple-400 hover:bg-purple-400/10 transition-all duration-300 text-lg"
              >
                Auto-évaluation
              </Link>
            </div>

            <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-400">
              <div>✓ Analyse gratuite</div>
              <div>✓ Sans engagement</div>
              <div>✓ Conseils actionnables</div>
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

    </div>
  )
}