'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
import { motion } from 'framer-motion'

export default function MarketingAutomationCRMPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // Métriques clés simplifiées
  const keyMetrics = {
    conversion: "+78%",
    timeReduced: "-65%",
    openRate: "92%"
  }

  const faqData = [
    {
      question: "Comment l'automation améliore-t-elle concrètement nos conversions ?",
      answer: "L'automation qualifie vos prospects automatiquement et alerte votre équipe au bon moment. Résultat : +78% de conversions car votre équipe intervient sur des leads chauds."
    },
    {
      question: "Quels outils CRM et automation utilisez-vous pour les entreprises suisses ?",
      answer: "Stack professionnel certifié : HubSpot (partenaire certifié), Pipedrive (expert), ActiveCampaign (spécialiste). Configuration avancée avec triggers comportementaux, séquences personnalisées et scoring automatique adapté à votre secteur."
    },
    {
      question: "Mon équipe sera-t-elle autonome après le setup ?",
      answer: "Formation complète incluse. Votre équipe maîtrise les outils en 3 mois et devient 100% autonome. Support disponible pour les évolutions."
    },
    {
      question: "Combien de temps avant de voir les premiers résultats ?",
      answer: "Premières améliorations visibles en 2-4 semaines : meilleur suivi prospects, moins de tâches manuelles. Résultats complets après 3 mois quand l'équipe maîtrise parfaitement les nouveaux processus."
    },
    {
      question: "L'automation va-t-elle remplacer mes commerciaux ?",
      answer: "Au contraire ! L'automation libère vos commerciaux des tâches administratives pour qu'ils se concentrent sur ce qu'ils font de mieux : vendre, conseiller et créer des relations clients."
    },
    {
      question: "Comment mesurez-vous concrètement les résultats de l'automation ?",
      answer: "Dashboard complet avec métriques business : taux de conversion, temps économisé, attribution des revenus, prédiction des ventes. Reporting mensuel transparent avec impact mesurable sur votre CA."
    },
    {
      question: "Le setup d'automation est-il évolutif avec la croissance de mon entreprise ?",
      answer: "Architecture scalable : l'automation grandit avec votre entreprise. Plus de données = insights plus précis, recommandations plus pertinentes. Pas de refonte nécessaire, expansion intelligente du système existant."
    },
    {
      question: "Combien coûte l'automation complète ?",
      answer: "8900 CHF tout inclus : audit, setup CRM, automation, formation équipe, support 6 mois. ROI récupéré en 2-3 mois."
    },
    {
      question: "Que se passe-t-il si l'automation ne fonctionne pas comme prévu ?",
      answer: "Accompagnement inclus pendant 6 mois. Ajustements et optimisations jusqu'à ce que votre équipe soit parfaitement à l'aise et les résultats au rendez-vous. Garantie satisfaction."
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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Pattern OSOM */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310B981' fill-opacity='0.15'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>
      {/* HERO SECTION - AUTOMATION MARKETING */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-green-400/10 via-teal-500/5 to-green-400/5" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block px-6 py-3 bg-green-400/20 rounded-full text-green-400 text-lg font-bold mb-6">
            Marketing Automation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">
            Vos commerciaux <span className="font-bold text-green-400">vendent</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-light text-gray-300 mb-8">
            L'automation gère le reste
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            CRM qui comprend vos clients + workflows intelligents<br />
            <span className="text-green-400 font-semibold">Votre équipe retrouve sa passion commerciale</span>
          </p>

          <Link
            href="/contact"
            className="inline-block px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-8 transform hover:scale-105 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #10B981, #70c1a9)' }}
          >
            Automatiser Mon Équipe
          </Link>

          <div className="text-sm text-gray-400">
            8900 CHF • Setup + Formation • Support 6 mois
          </div>
        </div>
      </section>

      {/* PROCESS SECTION - SIMPLE */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Comment <span className="font-bold text-green-400">nous procédons</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6">
              <div className="text-6xl font-black text-green-400 mb-4">1</div>
              <div className="text-xl font-semibold text-white mb-2">Audit CRM</div>
              <div className="text-gray-400">Analyse de votre processus commercial actuel</div>
            </div>
            
            <div className="text-center p-6">
              <div className="text-6xl font-black text-green-400 mb-4">2</div>
              <div className="text-xl font-semibold text-white mb-2">Setup Automation</div>
              <div className="text-gray-400">Configuration CRM + workflows intelligents</div>
            </div>
            
            <div className="text-center p-6">
              <div className="text-6xl font-black text-green-400 mb-4">3</div>
              <div className="text-xl font-semibold text-white mb-2">Formation</div>
              <div className="text-gray-400">Votre équipe maîtrise les outils</div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT PROOF SECTION */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Client PME qui nous fait <span className="font-bold text-green-400">confiance</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-green-400/20 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-green-400/20 rounded-full text-green-400 text-sm font-medium mb-4">
                  PME Suisse • 15 employés
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">"L'automation a libéré notre équipe"</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Avant : 3h/jour perdues en tâches répétitives, prospects oubliés, équipe démotivée.<br/>
                  Après : Équipe concentrée sur la vente, zéro prospect perdu, +78% de conversions.
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-gray-300">3h/jour libérées pour la vente</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-gray-300">Zéro prospect oublié</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="text-gray-300">Équipe motivée et autonome</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-black/40 rounded-xl p-6">
                  <div className="text-4xl font-bold text-green-400 mb-2">+78%</div>
                  <div className="text-gray-300 text-sm mb-4">conversions</div>
                  <div className="text-2xl font-bold text-white mb-2">92%</div>
                  <div className="text-lg text-green-400">emails ouverts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION - SIMPLIFIÉ */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Stack <span className="font-bold text-green-400">automation</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-green-400/20 max-w-5xl mx-auto">
            <div className="space-y-8">
              
              {/* CRM Intelligence */}
              <div className="border border-green-400/20 rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">CRM Intelligence</h3>
                    <div className="text-green-400 font-semibold">HubSpot • Pipedrive • ActiveCampaign</div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      Fini les prospects oubliés dans Excel. Votre équipe voit tout : historique complet des échanges, 
                      prochaines actions prioritaires, scoring automatique chaud/froid.
                    </p>
                    <div className="text-green-400 font-semibold text-sm">
                      → Aucun client perdu, équipe qui sait toujours quoi dire
                    </div>
                  </div>
                </div>
              </div>

              {/* Workflows Intelligents */}
              <div className="border border-teal-400/20 rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Workflows Intelligents</h3>
                    <div className="text-teal-400 font-semibold">Sequences • Scoring • Alertes</div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      Le prospect télécharge votre brochure à 22h → Email de suivi envoyé à 9h → Commercial alerté si 
                      il ouvre 3 emails → Rendez-vous proposé automatiquement au bon moment.
                    </p>
                    <div className="text-teal-400 font-semibold text-sm">
                      → Vos commerciaux interviennent sur des leads chauds uniquement
                    </div>
                  </div>
                </div>
              </div>

              {/* Analytics Prédictifs */}
              <div className="border border-emerald-400/20 rounded-2xl p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Analytics Prédictifs</h3>
                    <div className="text-emerald-400 font-semibold">Attribution • Prédiction • ROI</div>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      Tracking complet du parcours : d'où viennent vos meilleurs clients, quel contenu les convertit, 
                      quels prospects vont acheter (probabilité IA). Fini les "je ne sais pas si ça marche".
                    </p>
                    <div className="text-emerald-400 font-semibold text-sm">
                      → Vous investissez votre budget marketing au bon endroit
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA + PRICING */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-12 border border-green-400/40">
            <div className="text-green-400 font-semibold mb-4">
              MARKETING AUTOMATION COMPLETE
            </div>
            <div className="text-5xl md:text-6xl font-light text-green-400 mb-4">
              8900 CHF
            </div>
            <div className="text-xl text-gray-300 mb-8">
              Setup + Formation + Support 6 mois
            </div>

            <div className="grid grid-cols-3 gap-6 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-green-400 font-bold text-2xl mb-2">+78%</div>
                <div className="text-gray-300 text-sm">Conversions</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-bold text-2xl mb-2">-65%</div>
                <div className="text-gray-300 text-sm">Temps manuel</div>
              </div>
              <div className="text-center">
                <div className="text-green-400 font-bold text-2xl mb-2">92%</div>
                <div className="text-gray-300 text-sm">Emails ouverts</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block px-16 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-6 transform hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #10B981, #70c1a9)' }}
            >
              Automatiser Mon Business
            </Link>
            
            <div className="text-sm text-gray-400">
              Consultation gratuite • ROI mesurable • Équipe autonome en 3 mois
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Questions <span className="font-bold text-green-400">fréquentes</span>
            </h2>
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
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl border border-green-400/40 text-green-400 hover:bg-green-400/10 transition-colors duration-300"
            >
              Consultation Gratuite
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}