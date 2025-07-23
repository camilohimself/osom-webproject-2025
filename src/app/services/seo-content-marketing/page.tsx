'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'

export default function SEOContentMarketingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [animatedValue, setAnimatedValue] = useState(0)
  
  // Animation du compteur 68.6%
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(68.6)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const performanceResults = [
    {
      metric: "Engagement Quality",
      ourResult: "68.6%",
      industry: "44.6%",
      improvement: "54% plus élevé",
      color: "#70c1a9"
    },
    {
      metric: "Recherches Captées",
      ourResult: "1,718/mois",
      industry: "234/mois",
      improvement: "7x plus visible",
      color: "#70c1a9"
    },
    {
      metric: "Position Moyenne",
      ourResult: "Position 3",
      industry: "Position 15+",
      improvement: "5x mieux classé",
      color: "#70c1a9"
    },
    {
      metric: "Trafic Organique",
      ourResult: "+180%",
      industry: "+12%",
      improvement: "15x plus performant",
      color: "#70c1a9"
    }
  ]

  const faqData = [
    {
      question: "Combien coûte le SEO pour une entreprise valaisanne ?",
      answer: "Notre service SEO commence à 2800 CHF/mois avec résultats garantis en 90 jours. Contrairement aux agences qui facturent sans garantie, nous nous engageons sur des KPI mesurables : +180% trafic organique minimum."
    },
    {
      question: "Combien de temps faut-il pour voir des résultats SEO ?",
      answer: "Premiers résultats en 30 jours, accélération en 90 jours. Notre client Artisane de Lumière a atteint 68.6% engagement quality vs 44.6% industrie en 6 mois. Données Google Analytics certifiées."
    },
    {
      question: "Pourquoi le SEO local Valais est-il si important ?",
      answer: "1,718 recherches/mois pour 'création site internet valais' avec 0% CTR actuellement = opportunité massive. Nous captons ce trafic invisible pour générer des clients automatiquement."
    },
    {
      question: "Comment mesurez-vous l'efficacité de votre SEO ?",
      answer: "Google Analytics 4, Search Console, positions moyennes, engagement quality. Transparence totale : vous recevez un dashboard temps réel avec tous les KPI. Résultats vérifiables à tout moment."
    },
    {
      question: "Que comprend votre service SEO complet ?",
      answer: "Audit technique, optimisation on-page, création contenu premium, netlinking local, suivi positions, rapports mensuels. Tout pour dominer votre secteur en Valais et attirer vos clients idéaux."
    },
    {
      question: "Le SEO fonctionne-t-il pour tous les secteurs en Valais ?",
      answer: "Oui, nos méthodes s'adaptent : BTP, tourisme, services B2B, commerce local. Chaque secteur a ses mots-clés spécifiques que nous maîtrisons parfaitement pour générer des leads qualifiés."
    },
    {
      question: "Quelle différence avec les autres agences SEO ?",
      answer: "Nous garantissons +180% trafic organique minimum en 6 mois. Si objectifs non atteints, remboursement intégral. Expertise locale + résultats mesurés vs promesses sans garantie."
    },
    {
      question: "Comment le content marketing booste-t-il mon SEO ?",
      answer: "Contenu optimisé = autorité Google. Notre stratégie : 4 articles premium/mois ciblant vos prospects. Résultat : 68.6% engagement vs 44.6% industrie. Contenu qui convertit les visiteurs en clients."
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
      {/* HERO SECTION - ENGAGEMENT QUALITY FOCUS */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-400/10 via-teal-500/5 to-cyan-400/5" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-teal-400/20 rounded-full text-teal-400 text-sm font-medium mb-6">
              1,718 recherches/mois non captées
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-light text-white leading-tight animate-fade-in">
                Votre SEO Valais
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold animate-fade-in-delay-1" style={{color: '#70c1a9'}}>
                Génère 8x Plus de Clients
              </h2>
              <div className="text-8xl md:text-9xl font-black text-teal-400 animate-bounce-slow">
                68.6%
              </div>
              <p className="text-2xl md:text-3xl text-gray-300 font-light animate-fade-in-delay-2">
                engagement quality vs 44.6% industrie
              </p>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed mt-8">
              Notre expertise SEO local transforme votre visibilité Google<br />
              <span className="text-teal-400 font-semibold">+180% trafic organique</span> garanti en 6 mois
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-block px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-12 transform hover:scale-105 transition-all duration-500 hover:shadow-teal-400/25"
            style={{ background: 'linear-gradient(135deg, #70c1a9, #00bcd4)' }}
          >
            Dominer Google Maintenant
          </Link>

          <div className="text-sm text-gray-400">
            Audit SEO gratuit • Stratégie 30min • Résultats garantis
          </div>
        </div>
      </section>

      {/* DÉMONSTRATION SEO LIVE - PUISSANCE TECHNIQUE */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-teal-400/20 rounded-full text-teal-400 text-lg font-bold mb-6">
              Pendant que vous regardez
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Votre SEO <span className="font-bold" style={{color: '#70c1a9'}}>s'optimise en temps réel</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Notre technologie analyse et optimise continuellement votre présence Google
            </p>
          </div>

          {/* SEO DASHBOARD LIVE */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-teal-400/20 overflow-hidden mb-12">
            <div className="bg-gray-800/80 px-6 py-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-gray-300 text-sm font-mono">OSOM SEO Command Center</div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* ANALYSE SEO EN TEMPS RÉEL */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Analyse SEO automatique</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></div>
                      <span className="text-teal-400 text-sm">Scanning</span>
                    </div>
                  </div>
                  
                  <div className="bg-black/60 rounded-xl p-4 font-mono text-sm overflow-hidden">
                    <div className="text-teal-400 mb-2">// Optimisation en cours...</div>
                    <div className="text-blue-400 inline">const </div>
                    <div className="text-yellow-400 inline">votreSEO </div>
                    <div className="text-white inline">= &#123;</div>
                    <div className="ml-4 text-white">engagement: <span className="text-teal-400 animate-pulse">&apos;{Math.floor(animatedValue)}%&apos;</span>,</div>
                    <div className="ml-4 text-white">recherches: <span className="text-teal-400">&apos;1,718/mois&apos;</span>,</div>
                    <div className="ml-4 text-white">position: <span className="text-teal-400">&apos;Top 3 Google&apos;</span>,</div>
                    <div className="ml-4 text-white">trafic: <span className="text-teal-400 animate-pulse">&apos;+180%&apos;</span></div>
                    <div className="text-white">&#125;</div>
                    
                    <div className="mt-4 text-teal-400">✓ Mots-clés optimisés</div>
                    <div className="text-teal-400">✓ Meta descriptions réécrites</div>
                    <div className="text-teal-400">✓ Structure technique validée</div>
                    <div className="text-teal-400 animate-pulse">⚡ Indexation Google...</div>
                  </div>
                </div>
                
                {/* MÉTRIQUES TEMPS RÉEL */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Performance SEO Live</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Engagement Quality</span>
                        <span className="text-teal-400 font-bold text-xl">{Math.floor(animatedValue)}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transition-all duration-3000 ease-out" style={{width: `${animatedValue}%`}}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">vs 44.6% moyenne industrie</div>
                    </div>
                    
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Recherches captées</span>
                        <span className="text-teal-400 font-bold text-xl">1,718</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-teal-400 to-blue-400 rounded-full transition-all duration-4000 ease-out" style={{width: '85%'}}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">Recherches/mois automatiquement</div>
                    </div>
                    
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Trafic organique</span>
                        <span className="text-teal-400 font-bold text-2xl">+180%</span>
                      </div>
                      <div className="text-xs text-gray-400">Croissance continue mesurée</div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-xl p-4 border border-teal-400/30">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-teal-400 animate-pulse"></div>
                        <span className="text-white font-semibold">Google approuve</span>
                      </div>
                      <div className="text-sm text-gray-300 mt-1">Votre site gagne en autorité 24h/24</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* COMPARAISON AVANT/APRÈS */}
              <div className="mt-12 pt-8 border-t border-gray-700/50">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Transformation SEO mesurée</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <div className="bg-red-500/20 rounded-xl p-6 border border-red-500/30">
                      <h4 className="text-red-400 font-bold mb-4">SEO traditionnel</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Engagement</span>
                          <span className="text-red-400">44.6%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Recherches</span>
                          <span className="text-red-400">234/mois</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Position</span>
                          <span className="text-red-400">Page 2+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Trafic</span>
                          <span className="text-red-400">+12%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-teal-400/20 rounded-xl p-6 border border-teal-400/30">
                      <h4 className="text-teal-400 font-bold mb-4">SEO OSOM</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Engagement</span>
                          <span className="text-teal-400 font-bold">68.6%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Recherches</span>
                          <span className="text-teal-400 font-bold">1,718/mois</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Position</span>
                          <span className="text-teal-400 font-bold">Top 3</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Trafic</span>
                          <span className="text-teal-400 font-bold">+180%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full border border-teal-400/30">
                    <span className="text-2xl font-bold text-teal-400">8x</span>
                    <span className="text-white ml-2">plus de clients générés</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF - PERFORMANCE MESURÉE */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Résultats <span className="font-bold text-teal-400">Vérifiés</span>
            </h2>
            <p className="text-xl text-gray-300">
              Case study Artisane de Lumière - Evolution sur 8 mois
            </p>
          </div>

          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-teal-400/20 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Timeline progression */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="text-white font-bold">M2</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Mois 2</span>
                      <span className="text-teal-400 font-bold">48% engagement</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-400 rounded-full" style={{width: '30%'}} />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center">
                    <span className="text-white font-bold">M5</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Mois 5</span>
                      <span className="text-teal-400 font-bold">62% engagement</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-400 rounded-full" style={{width: '65%'}} />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center">
                    <span className="text-black font-bold">M8</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Mois 8</span>
                      <span className="text-teal-400 font-bold">68.6% engagement</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full transition-all duration-3000 ease-out" style={{width: '100%'}} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Résultat final */}
              <div className="text-center">
                <div className="mb-8">
                  <div className="text-8xl md:text-9xl font-black transition-all duration-2000 text-teal-400">
                    8x
                  </div>
                  <div className="text-2xl text-white mt-4">
                    Plus de Clients
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black/40 rounded-xl p-4">
                    <div className="text-teal-400 font-bold text-2xl">68.6%</div>
                    <div className="text-gray-300">Engagement Quality</div>
                  </div>
                  <div className="text-gray-400 text-sm">vs</div>
                  <div className="bg-black/20 rounded-xl p-4">
                    <div className="text-gray-400 font-bold text-2xl">44.6%</div>
                    <div className="text-gray-400">Moyenne industrie</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="text-sm text-gray-400">
                Données Google Analytics certifiées • 240+ jours de mesures
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-gray-400 mb-8">Secteurs dominés par notre SEO</div>
            <div className="flex justify-center items-center space-x-12 opacity-70">
              <div className="text-white font-semibold">ARTISANAT</div>
              <div className="text-white font-semibold">SERVICES B2B</div>
              <div className="text-white font-semibold">COMMERCE LOCAL</div>
              <div className="text-teal-400 font-semibold">+ 20 SECTEURS</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + PRICING */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-teal-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-12 border border-teal-400/40">
            <div className="mb-8">
              <div className="text-teal-400 font-semibold mb-4">
                FORMULE SEO DOMINANTE
              </div>
              <div className="text-5xl md:text-6xl font-light text-teal-400 mb-4">
                2800 CHF
              </div>
              <div className="text-xl text-gray-300 mb-8">
                /mois • +180% trafic garanti • Résultats 90 jours
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-4 bg-black/40 rounded-xl border border-teal-400/20">
                <div className="text-teal-400 font-bold text-2xl mb-2">
                  68.6%
                </div>
                <div className="text-gray-300">Engagement Quality</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-xl border border-cyan-400/20">
                <div className="text-cyan-400 font-bold text-2xl mb-2">
                  1,718
                </div>
                <div className="text-gray-300">Recherches/mois captées</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-xl border border-teal-400/20">
                <div className="text-teal-400 font-bold text-2xl mb-2">
                  90
                </div>
                <div className="text-gray-300">Jours pour résultats</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block px-16 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-6 transform hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #70c1a9, #00bcd4, #4dd0e1)' }}
            >
              Dominer Mon Secteur Maintenant
            </Link>
            
            <div className="text-sm text-gray-400">
              Audit SEO complet gratuit (600 CHF) • Stratégie 30min • Garantie résultats
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SEO */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Questions <span className="font-bold text-teal-400">SEO</span>
            </h2>
            <p className="text-xl text-gray-300">
              Tout sur notre stratégie SEO dominante
            </p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-teal-400/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-medium text-white pr-8">{faq.question}</h3>
                  <div className={`text-teal-400 text-2xl transform transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
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
            <p className="text-gray-400 mb-6">Questions sur votre stratégie SEO ?</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl border border-teal-400/40 text-teal-400 hover:bg-teal-400/10 transition-colors duration-300"
            >
              Audit SEO Gratuit
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