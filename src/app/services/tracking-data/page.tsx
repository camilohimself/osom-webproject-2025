'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'

export default function TrackingDataPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [animatedValue, setAnimatedValue] = useState(0)
  
  // Animation du compteur 14,171
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(14171)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const performanceResults = [
    {
      metric: "Sessions Récupérées",
      ourResult: "14,171",
      industry: "0 invisibles",
      improvement: "ROI révélé intégralement",
      color: "#8B5CF6"
    },
    {
      metric: "Visibilité ROI",
      ourResult: "100%",
      industry: "12% partielle",
      improvement: "8x plus transparent",
      color: "#8B5CF6"
    },
    {
      metric: "Attribution Précision",
      ourResult: "94%",
      industry: "67% approximative",
      improvement: "40% plus précise",
      color: "#8B5CF6"
    },
    {
      metric: "Valeur Client Révélée",
      ourResult: "47,000 CHF",
      industry: "0 CHF invisible",
      improvement: "ROI complet dévoilé",
      color: "#8B5CF6"
    }
  ]

  const faqData = [
    {
      question: "Comment le tracking avancé révèle-t-il le ROI invisible de mon entreprise valaisanne ?",
      answer: "Notre audit technique détecte les sources de revenus non trackées : email campaigns sans UTM, trafic social mal attribué, conversions offline non connectées. Setup GA4 server-side + Google Tag Manager expert révèle chaque point de contact client. Résultat : vision complète du parcours client et attribution précise de chaque CHF généré."
    },
    {
      question: "Quels outils utilisez-vous pour mesurer la performance marketing en Suisse romande ?",
      answer: "Stack technique complet : Google Analytics 4 configuration avancée, Google Tag Manager expert, Data Studio dashboards executifs, Google Search Console, Meta Business Manager. Compliance RGPD Suisse avec Cookiebot, server-side tracking pour iOS14+. Attribution multicannale first-party data pour précision maximale."
    },
    {
      question: "Combien coûte l'implémentation tracking complet pour PME valaisanne ?",
      answer: "Forfait Tracking Pro à partir de 4,500 CHF incluant : audit technique complet 20h, setup GA4 + GTM expert, création dashboards executifs sur-mesure, formation équipes 4h, suivi performance 3 mois. Comparativement à audit basique 1,500 CHF, notre approche révèle 10x plus de données actionables."
    },
    {
      question: "Mes équipes peuvent-elles utiliser vos dashboards sans formation technique avancée ?",
      answer: "Absolument ! Dashboards conçus user-friendly avec KPIs executifs : chiffre d'affaires par canal, coût acquisition client, ROI campagnes, conversion funnel. Formation incluse 4h : lecture métriques, interprétation tendances, prise décision data-driven. Interface intuitive + alertes automatiques pour anomalies importantes."
    },
    {
      question: "Comment assurez-vous la conformité RGPD avec le tracking avancé en Suisse ?",
      answer: "Setup privacy-first complet : server-side tracking Google Cloud EU, consent management Cookiebot certifié, anonymisation IP, stockage données UE, politiques retention conformes. Configuration iOS14+ SKAdNetwork, first-party data strategy, cookies essentiels uniquement. Tests rigoureux cross-browser et conformité légale suisse."
    },
    {
      question: "Vos solutions tracking sont-elles évolutives avec la croissance de mon cabinet ?",
      answer: "Architecture modulaire scalable : ajout nouveaux KPIs selon croissance, intégration CRM (Salesforce, HubSpot), connexion outils métier spécifiques. Dashboards évolutifs : segmentations clients affinées, périodes comparaison personnalisables, métriques sectorielles. Expansion simple sans refonte complète du système existant."
    },
    {
      question: "Combien de temps faut-il pour voir les premiers résultats du tracking optimisé ?",
      answer: "Phase 1 (7 jours) : Setup technique GA4 + GTM, premiers insights disponibles. Phase 2 (30 jours) : Dashboards complets opérationnels, formations équipes terminées. Phase 3 (90 jours) : Optimisations basées données, ROI amélioré mesurable. Données fiables dès J+1, optimisations stratégiques dès M+3."
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
      {/* HERO SECTION - DATA FORENSICS RÉVÉLATION */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-400/10 via-pink-500/5 to-purple-400/5" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-purple-400/20 rounded-full text-purple-400 text-sm font-medium mb-6">
              Vos données mentent. Nous révélons la vérité.
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-light text-white leading-tight animate-fade-in">
                Tracking & Data qui révèle votre ROI
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold animate-fade-in-delay-1" style={{color: '#8B5CF6'}}>
                Chaque CHF de retour mesuré
              </h2>
              <div className="text-8xl md:text-9xl font-black text-purple-400 animate-bounce-slow">
                14,171
              </div>
              <p className="text-2xl md:text-3xl text-gray-300 font-light animate-fade-in-delay-2">
                sessions cachées récupérées
              </p>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed mt-8">
              Analytics avancées + attribution multicannale pour cabinets B2B<br />
              <span className="text-purple-400 font-semibold">Chaque source de revenus identifiée</span> et mesurée
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-block px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-12 transform hover:scale-105 transition-all duration-500 hover:shadow-purple-400/25"
            style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)' }}
          >
            Audit Forensics Gratuit
          </Link>

          <div className="text-sm text-gray-400">
            <span className="text-gray-300">Setup Google Analytics 4 + Google Tag Manager expert</span><br/>
            <span className="text-gray-300">Attribution multicannale + dashboards executifs</span><br/>
            <span className="text-gray-300">Formations équipes + suivi mensuel performance</span>
          </div>
        </div>
      </section>

      {/* DÉMONSTRATION LIVE - GA4 × CLAUDE FORENSICS */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-purple-400/20 rounded-full text-purple-400 text-lg font-bold mb-6">
              Console forensics live
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Analytics <span className="font-bold" style={{color: '#8B5CF6'}}>avancées révèlent votre ROI</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Setup technique expert GA4 + attribution multicannale pour récupérer chaque session invisible
            </p>
          </div>

          {/* DATA FORENSICS DASHBOARD LIVE */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-purple-400/20 overflow-hidden mb-12">
            <div className="bg-gray-800/80 px-6 py-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-gray-300 text-sm font-mono">OSOM Analytics Dashboard Pro</div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* INVESTIGATION FORENSICS HUMAINE */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Audit Technique Expert</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
                      <span className="text-red-400 text-sm">Scanning Deep</span>
                    </div>
                  </div>
                  
                  <div className="bg-black/60 rounded-xl p-4 font-mono text-sm overflow-hidden">
                    <div className="text-red-400 mb-2">{/* Investigation GA4 configuration */}</div>
                    <div className="text-blue-400 inline">const </div>
                    <div className="text-yellow-400 inline">forensicsAudit </div>
                    <div className="text-white inline">= &#123;</div>
                    <div className="ml-4 text-white">sessionsLost: <span className="text-red-400 animate-pulse">&apos;14,171&apos;</span>,</div>
                    <div className="ml-4 text-white">attribution: <span className="text-red-400">&apos;broken&apos;</span>,</div>
                    <div className="ml-4 text-white">trackingGaps: <span className="text-red-400">&apos;massive&apos;</span>,</div>
                    <div className="ml-4 text-white">roiHidden: <span className="text-red-400 animate-pulse">&apos;47,000 CHF&apos;</span></div>
                    <div className="text-white">&#125;</div>
                    
                    <div className="mt-4 text-red-400">✗ GTM triggers mal configurés</div>
                    <div className="text-red-400">✗ Attribution multi-touch cassée</div>
                    <div className="text-red-400">✗ Sessions "Unassigned" massives</div>
                    <div className="text-red-400 animate-pulse">🔍 Investigation technique en cours...</div>
                  </div>
                </div>
                
                {/* CLAUDE INTELLIGENCE RECOVERY */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Récupération Données Avancée</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Sessions Récupérées</span>
                        <span className="text-purple-400 font-bold text-xl">{animatedValue.toLocaleString()}</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-3000 ease-out" style={{width: animatedValue > 0 ? '100%' : '0%'}}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Attribution multicannale active</div>
                    </div>
                    
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">ROI Révélé</span>
                        <span className="text-purple-400 font-bold text-xl">47,000 CHF</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-400 to-violet-400 rounded-full transition-all duration-4000 ease-out" style={{width: '94%'}}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Valeur client invisible révélée</div>
                    </div>
                    
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Attribution Précision</span>
                        <span className="text-purple-400 font-bold text-2xl animate-pulse">94%</span>
                      </div>
                      <div className="text-xs text-gray-400">Multi-touch attribution avancée</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl p-4 border border-purple-400/30">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></div>
                        <span className="text-white font-semibold">Setup technique optimisé</span>
                      </div>
                      <div className="text-sm text-gray-300 mt-1">Révélation ROI invisible en temps réel</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* COMPARAISON AVANT/APRÈS RÉVÉLATION */}
              <div className="mt-12 pt-8 border-t border-gray-700/50">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Révélation Forensics × Claude vs Analyse Classique</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="bg-red-500/20 rounded-xl p-6 border border-red-500/30">
                      <h4 className="text-red-400 font-bold mb-4">Analyse Data Classique</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Sessions Visibles</span>
                          <span className="text-red-400">12% seulement</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">ROI Caché</span>
                          <span className="text-red-400">47,000 CHF</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Attribution</span>
                          <span className="text-red-400">67% approximative</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Sessions Perdues</span>
                          <span className="text-red-400">14,171</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-purple-400/20 rounded-xl p-6 border border-purple-400/30">
                      <h4 className="text-purple-400 font-bold mb-4">Forensics × Claude</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Sessions Visibles</span>
                          <span className="text-purple-400 font-bold">100%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">ROI Révélé</span>
                          <span className="text-purple-400 font-bold">47,000 CHF</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Attribution</span>
                          <span className="text-purple-400 font-bold">94% précise</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Sessions Récupérées</span>
                          <span className="text-purple-400 font-bold">14,171</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full border border-purple-400/30">
                    <span className="text-2xl font-bold text-purple-400">8x</span>
                    <span className="text-white ml-2">plus transparent collaboration forensics-IA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE MESURÉE - CLIENT PME ROI DÉCOUVERTE */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Révélation <span className="font-bold text-purple-400">Client PME</span>
            </h2>
            <p className="text-xl text-gray-300">
              Discovery ROI : 0 CHF visible → 47,000 CHF révélé en 3 mois
            </p>
          </div>

          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-400/20 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Timeline découverte */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="text-white font-bold">M1</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Investigation Forensics</span>
                      <span className="text-purple-400 font-bold">4,856 sessions trouvées</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-400 rounded-full" style={{width: '34%'}} />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold">M2</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Claude Pattern Analysis</span>
                      <span className="text-purple-400 font-bold">9,315 sessions récupérées</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-400 rounded-full" style={{width: '66%'}} />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-pink-500 flex items-center justify-center">
                    <span className="text-black font-bold">M3</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">ROI Complet Révélé</span>
                      <span className="text-purple-400 font-bold">14,171 sessions totales</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-3000 ease-out" style={{width: '100%'}} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Résultat révélation */}
              <div className="text-center">
                <div className="mb-8">
                  <div className="text-8xl md:text-9xl font-black transition-all duration-2000 text-purple-400">
                    8x
                  </div>
                  <div className="text-2xl text-white mt-4">
                    Plus Transparent
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black/40 rounded-xl p-4">
                    <div className="text-purple-400 font-bold text-2xl">47,000 CHF</div>
                    <div className="text-gray-300">ROI Invisible Révélé</div>
                  </div>
                  <div className="text-gray-400 text-sm">vs</div>
                  <div className="bg-black/20 rounded-xl p-4">
                    <div className="text-gray-400 font-bold text-2xl">0 CHF</div>
                    <div className="text-gray-400">Visible avant forensics</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="text-sm text-gray-400">
                Données GA4 certifiées • 90+ jours investigation Forensics × Claude
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-gray-400 mb-8">PME ayant révélé leur ROI invisible</div>
            <div className="flex justify-center items-center space-x-12 opacity-70">
              <div className="text-white font-semibold">E-COMMERCE</div>
              <div className="text-white font-semibold">SERVICES B2B</div>
              <div className="text-white font-semibold">SAAS LOCAL</div>
              <div className="text-purple-400 font-semibold">+ 30 SECTEURS</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + PRICING - RÉCUPÉRATION TEMPLATE */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-12 border border-purple-400/40">
            <div className="mb-8">
              <div className="text-purple-400 font-semibold mb-4">
                DATA FORENSICS × CLAUDE PREMIUM
              </div>
              <div className="text-5xl md:text-6xl font-light text-purple-400 mb-4">
                7500 CHF
              </div>
              <div className="text-xl text-gray-300 mb-8">
                Investigation obsessionnelle + Intelligence IA + Setup chirurgical
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-4 bg-black/40 rounded-xl border border-purple-400/20">
                <div className="text-purple-400 font-bold text-2xl mb-2">
                  14,171
                </div>
                <div className="text-gray-300">sessions type récupérées</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-xl border border-pink-400/20">
                <div className="text-pink-400 font-bold text-2xl mb-2">
                  100%
                </div>
                <div className="text-gray-300">Visibilité ROI garantie</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-xl border border-violet-400/20">
                <div className="text-violet-400 font-bold text-2xl mb-2">
                  3
                </div>
                <div className="text-gray-300">Mois support forensics</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block px-16 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-6 transform hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)' }}
            >
              Révéler Mon ROI Invisible
            </Link>
            
            <div className="text-sm text-gray-400">
              Investigation gratuite • GA4 × Claude demo • ROI révélé 1-2 mois
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - RÉCUPÉRATION TEMPLATE */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Questions <span className="font-bold text-purple-400">Forensics × Claude</span>
            </h2>
            <p className="text-xl text-gray-300">
              Investigation révolutionnaire révélée
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-purple-400/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-medium text-white pr-8">{faq.question}</h3>
                  <div className={`text-purple-400 text-2xl transform transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
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
            <p className="text-gray-400 mb-6">Prêt pour la révélation complète ?</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl border border-purple-400/40 text-purple-400 hover:bg-purple-400/10 transition-colors duration-300"
            >
              Investigation Forensics × Claude Gratuite
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