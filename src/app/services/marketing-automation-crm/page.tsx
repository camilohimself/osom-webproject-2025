'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'

export default function MarketingAutomationCRMPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [animatedValue, setAnimatedValue] = useState(0)
  
  // Animation du compteur +78%
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(78)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const performanceResults = [
    {
      metric: "Taux Conversion",
      ourResult: "+78%",
      industry: "22% baseline",
      improvement: "3.5x plus efficace",
      color: "#10B981"
    },
    {
      metric: "Temps Manuel",
      ourResult: "-65%",
      industry: "100% manuel",
      improvement: "Efficacité révolutionnaire",
      color: "#10B981"
    },
    {
      metric: "Valeur Client LTV",
      ourResult: "+320%",
      industry: "Baseline 100%",
      improvement: "3.2x plus rentable",
      color: "#10B981"
    },
    {
      metric: "Email Open Rate",
      ourResult: "92%",
      industry: "21% moyenne",
      improvement: "4.4x plus engageant",
      color: "#10B981"
    }
  ]

  const faqData = [
    {
      question: "Comment l'expertise CRM humaine se combine-t-elle concrètement avec l'intelligence Claude pour garantir +78% conversions ?",
      answer: "Collaboration révolutionnaire unique : Expert humain configure triggers HubSpot/Pipedrive/ActiveCampaign + Claude analyse comportements, optimise sequences, prédit conversions. Humain = expertise technique setup parfait, Claude = intelligence comportementale continue. +78% conversions = setup expert amplifié IA pour triggers précis + sequences Claude-optimisées + scoring intelligence artificielle. Pas d'IA seule, pas d'humain seul : collaboration symbiotique révolutionnaire."
    },
    {
      question: "Claude peut-il vraiment améliorer la configuration HubSpot, Pipedrive, ActiveCampaign ou c'est du marketing IA ?",
      answer: "Claude ne configure pas directement les outils, mais révolutionne la stratégie : analyse comportements prospects, optimise timing sequences, prédit scoring effectiveness, suggère trigger improvements. Expert humain = maîtrise technique complète + certifications CRM, Claude = intelligence comportementale + pattern recognition + optimization suggestions. Demo révolutionnaire : on montre setup avant/après Claude optimization sur votre funnel réel."
    },
    {
      question: "8900 CHF pour Expert CRM × Claude, quelle est la différence réelle versus setup CRM classique à 3000 CHF ?",
      answer: "Différence révolutionnaire : Setup classique = configuration basique statique. Expert CRM × Claude = configuration experte + intelligence comportementale continue + optimisation IA permanente. 8900 CHF inclus : audit expert + Claude analysis, setup révolutionnaire, sequences Claude-optimized, scoring IA, formation collaboration humain-machine, support 6 mois. ROI récupéré 2-3 mois via efficacité révolutionnaire. Investissement transformation vs dépense configuration."
    },
    {
      question: "Après setup Expert CRM × Claude, mon équipe peut-elle gérer sans dépendance à l'IA ou expertise technique ?",
      answer: "Objectif révolutionnaire : autonomie équipe amplifiée intelligence. Formation incluse : maîtrise interface CRM + compréhension insights Claude + interprétation recommendations IA. Équipe gère quotidien en autonomie, Claude provides ongoing behavioral insights, expert available pour évolutions stratégiques. Indépendance progressive : 80% autonomie mois 3, 95% mois 6. Support révolutionnaire : humain + IA accessible selon besoins."
    },
    {
      question: "Comment mesurez-vous concrètement les résultats de la collaboration Expert CRM × Claude ?",
      answer: "Mesure révolutionnaire multicouche : Analytics expert (conversion rates, attribution multi-touch, LTV tracking) + Claude behavioral analysis (engagement patterns, prediction accuracy, optimization impact). Dashboard révolutionnaire : métriques expert + insights IA + recommendations Claude + ROI collaboration humain-machine. Reporting mensuel : performance before/after, Claude optimization impact, expert adjustments effectiveness. Transparence totale révolutionnaire collaboration."
    },
    {
      question: "La collaboration Expert CRM × Claude est-elle évolutive avec la croissance de mon business ?",
      answer: "Architecture révolutionnaire scalable : setup expert extensible + Claude learning continu + intelligence adaptive. Croissance business = plus de data pour Claude optimization + insights plus précis + recommendations évolutives. Expert maintient structure technique, Claude améliore intelligence comportementale. Évolutivité révolutionnaire : collaboration humain-IA grandit avec business, pas de refonte nécessaire, que expansion intelligente du système révolutionnaire existant."
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
      {/* HERO SECTION - EXPERT CRM × CLAUDE */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-green-400/10 via-teal-500/5 to-green-400/5" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-green-400/20 rounded-full text-green-400 text-sm font-medium mb-6">
              Plus que 3 setups Expert × Claude ce mois
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-light text-white leading-tight animate-fade-in">
                CRM Automation
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold animate-fade-in-delay-1" style={{color: '#10B981'}}>
                Expert × Claude IA
              </h2>
              <div className="text-8xl md:text-9xl font-black text-green-400 animate-bounce-slow">
                +78%
              </div>
              <p className="text-2xl md:text-3xl text-gray-300 font-light animate-fade-in-delay-2">
                conversions via collaboration révolutionnaire
              </p>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed mt-8">
              Expert CRM humain épaulé par intelligence Claude<br />
              <span className="text-green-400 font-semibold">-65% temps manuel</span> + automatisation parfaite
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-block px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-12 transform hover:scale-105 transition-all duration-500 hover:shadow-green-400/25"
            style={{ background: 'linear-gradient(135deg, #10B981, #70c1a9)' }}
          >
            Setup Expert × Claude
          </Link>

          <div className="text-sm text-gray-400">
            Audit gratuit • Demo live HubSpot × Claude • ROI garanti
          </div>
        </div>
      </section>

      {/* DÉMONSTRATION LIVE - SETUP CRM × CLAUDE */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-green-400/20 rounded-full text-green-400 text-lg font-bold mb-6">
              Demo révolutionnaire live
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Setup CRM <span className="font-bold" style={{color: '#10B981'}}>Expert × Claude en action</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Regardez l'expert configurer HubSpot pendant que Claude optimise les workflows
            </p>
          </div>

          {/* CRM SETUP DASHBOARD LIVE */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-green-400/20 overflow-hidden mb-12">
            <div className="bg-gray-800/80 px-6 py-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-gray-300 text-sm font-mono">OSOM Expert CRM × Claude Console</div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* EXPERT HUMAIN CONFIG */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Expert CRM Configuration</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
                      <span className="text-blue-400 text-sm">Humain Active</span>
                    </div>
                  </div>
                  
                  <div className="bg-black/60 rounded-xl p-4 font-mono text-sm overflow-hidden">
                    <div className="text-blue-400 mb-2">// Expert configure HubSpot</div>
                    <div className="text-green-400 inline">const </div>
                    <div className="text-yellow-400 inline">crmSetup </div>
                    <div className="text-white inline">= &#123;</div>
                    <div className="ml-4 text-white">triggers: <span className="text-green-400">&apos;comportementaux&apos;</span>,</div>
                    <div className="ml-4 text-white">sequences: <span className="text-green-400">&apos;intelligentes&apos;</span>,</div>
                    <div className="ml-4 text-white">scoring: <span className="text-green-400">&apos;multidimensionnel&apos;</span>,</div>
                    <div className="ml-4 text-white">automation: <span className="text-green-400 animate-pulse">&apos;parfaite&apos;</span></div>
                    <div className="text-white">&#125;</div>
                    
                    <div className="mt-4 text-blue-400">✓ HubSpot API connecté</div>
                    <div className="text-blue-400">✓ Workflows créés expertement</div>
                    <div className="text-blue-400">✓ Lead scoring configuré</div>
                    <div className="text-blue-400 animate-pulse">⚡ Attente optimisation Claude...</div>
                  </div>
                </div>
                
                {/* CLAUDE INTELLIGENCE OPTIMIZATION */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Claude Intelligence Optimization</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Taux Conversion</span>
                        <span className="text-green-400 font-bold text-xl">+{Math.floor(animatedValue)}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-400 to-teal-400 rounded-full transition-all duration-3000 ease-out" style={{width: `${animatedValue}%`}}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Claude optimise continuellement</div>
                    </div>
                    
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Temps Manuel Économisé</span>
                        <span className="text-green-400 font-bold text-xl">-65%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-400 to-emerald-400 rounded-full transition-all duration-4000 ease-out" style={{width: '65%'}}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Automation intelligence Claude</div>
                    </div>
                    
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Email Open Rate</span>
                        <span className="text-green-400 font-bold text-2xl animate-pulse">92%</span>
                      </div>
                      <div className="text-xs text-gray-400">Séquences Claude-optimisées</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-xl p-4 border border-green-400/30">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-white font-semibold">Expert × Claude synchronisés</span>
                      </div>
                      <div className="text-sm text-gray-300 mt-1">Collaboration parfaite en temps réel</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* COMPARAISON AVANT/APRÈS SETUP */}
              <div className="mt-12 pt-8 border-t border-gray-700/50">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Setup Expert × Claude vs CRM Classique</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="bg-red-500/20 rounded-xl p-6 border border-red-500/30">
                      <h4 className="text-red-400 font-bold mb-4">CRM Setup Classique</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Conversion</span>
                          <span className="text-red-400">22%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Temps Manuel</span>
                          <span className="text-red-400">100%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Email Open</span>
                          <span className="text-red-400">21%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Intelligence</span>
                          <span className="text-red-400">Zéro</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-green-400/20 rounded-xl p-6 border border-green-400/30">
                      <h4 className="text-green-400 font-bold mb-4">Expert × Claude</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Conversion</span>
                          <span className="text-green-400 font-bold">+78%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Temps Manuel</span>
                          <span className="text-green-400 font-bold">-65%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Email Open</span>
                          <span className="text-green-400 font-bold">92%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Intelligence</span>
                          <span className="text-green-400 font-bold">Claude IA</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full border border-green-400/30">
                    <span className="text-2xl font-bold text-green-400">3.5x</span>
                    <span className="text-white ml-2">plus performant collaboration humain-IA</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE MESURÉE - CLIENT PME TRANSFORMATION */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Transformation <span className="font-bold text-green-400">Client PME</span>
            </h2>
            <p className="text-xl text-gray-300">
              Evolution CRM : Setup classique → Expert × Claude en 6 mois
            </p>
          </div>

          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-green-400/20 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Timeline progression */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="text-white font-bold">M1</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Setup Expert</span>
                      <span className="text-green-400 font-bold">+35% conversion</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{width: '45%'}} />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center">
                    <span className="text-white font-bold">M3</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Optimisation Claude</span>
                      <span className="text-green-400 font-bold">+58% conversion</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-green-400 rounded-full" style={{width: '74%'}} />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-teal-500 flex items-center justify-center">
                    <span className="text-black font-bold">M6</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Collaboration Parfaite</span>
                      <span className="text-green-400 font-bold">+78% conversion</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-400 to-teal-400 rounded-full transition-all duration-3000 ease-out" style={{width: '100%'}} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Résultat final */}
              <div className="text-center">
                <div className="mb-8">
                  <div className="text-8xl md:text-9xl font-black transition-all duration-2000 text-green-400">
                    3.5x
                  </div>
                  <div className="text-2xl text-white mt-4">
                    Plus Efficace
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black/40 rounded-xl p-4">
                    <div className="text-green-400 font-bold text-2xl">+78%</div>
                    <div className="text-gray-300">Taux Conversion</div>
                  </div>
                  <div className="text-gray-400 text-sm">+</div>
                  <div className="bg-black/20 rounded-xl p-4">
                    <div className="text-green-400 font-bold text-2xl">-65%</div>
                    <div className="text-gray-300">Temps Manuel</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="text-sm text-gray-400">
                Données CRM vérifiées • 180+ jours collaboration Expert × Claude
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-gray-400 mb-8">PME transformées par Expert × Claude</div>
            <div className="flex justify-center items-center space-x-12 opacity-70">
              <div className="text-white font-semibold">SERVICES B2B</div>
              <div className="text-white font-semibold">E-COMMERCE</div>
              <div className="text-white font-semibold">SAAS LOCAL</div>
              <div className="text-green-400 font-semibold">+ 25 SECTEURS</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + PRICING - RÉCUPÉRATION TEMPLATE */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-12 border border-green-400/40">
            <div className="mb-8">
              <div className="text-green-400 font-semibold mb-4">
                EXPERT CRM × CLAUDE SETUP
              </div>
              <div className="text-5xl md:text-6xl font-light text-green-400 mb-4">
                8900 CHF
              </div>
              <div className="text-xl text-gray-300 mb-8">
                Setup révolutionnaire + Intelligence artificielle + Formation 6 mois
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-4 bg-black/40 rounded-xl border border-green-400/20">
                <div className="text-green-400 font-bold text-2xl mb-2">
                  +78%
                </div>
                <div className="text-gray-300">Conversions garanties</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-xl border border-teal-400/20">
                <div className="text-teal-400 font-bold text-2xl mb-2">
                  -65%
                </div>
                <div className="text-gray-300">Temps manuel économisé</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-xl border border-emerald-400/20">
                <div className="text-emerald-400 font-bold text-2xl mb-2">
                  6
                </div>
                <div className="text-gray-300">Mois support Expert × Claude</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block px-16 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-6 transform hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #10B981, #70c1a9)' }}
            >
              Révolutionner Mon CRM avec Claude
            </Link>
            
            <div className="text-sm text-gray-400">
              Demo HubSpot × Claude gratuite • Setup sur mesure • ROI récupéré 2-3 mois
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - RÉCUPÉRATION TEMPLATE */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Questions <span className="font-bold text-green-400">Expert × Claude</span>
            </h2>
            <p className="text-xl text-gray-300">
              Tout sur la collaboration révolutionnaire CRM
            </p>
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
            <p className="text-gray-400 mb-6">Prêt pour la révolution CRM ?</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl border border-green-400/40 text-green-400 hover:bg-green-400/10 transition-colors duration-300"
            >
              Demo Expert × Claude Gratuite
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