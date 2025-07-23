'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'

export default function PaidMediaGrowthPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [animatedValue, setAnimatedValue] = useState(0)
  
  // Animation du compteur 140x
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(140)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const performanceResults = [
    {
      metric: "Efficacité vs Paid",
      ourResult: "688 clients",
      industry: "49 clients",
      improvement: "140x plus efficace",
      color: "#ffd507"
    },
    {
      metric: "Coût d'Acquisition",
      ourResult: "0 CHF/client",
      industry: "120 CHF/client",
      improvement: "100% économisé",
      color: "#ffd507"
    },
    {
      metric: "Durabilité",
      ourResult: "Croissance continue",
      industry: "Stop si budget arrêté",
      improvement: "Actif permanent",
      color: "#ffd507"
    },
    {
      metric: "ROI Long-terme",
      ourResult: "Croissance exponentielle",
      industry: "Linéaire limitée",
      improvement: "Infini vs plafonné",
      color: "#ffd507"
    }
  ]

  const faqData = [
    {
      question: "Pourquoi votre méthode est-elle 140x plus efficace que la publicité payante ?",
      answer: "Notre client PME a généré 688 clients organiquement vs seulement 49 via publicité payante sur la même période. Raison : notre approche construit un actif durable (SEO + contenu) vs achat temporaire d'attention. Résultat mesurable sur 6 mois avec Google Analytics."
    },
    {
      question: "Combien économise-t-on réellement en abandonnant le paid media ?",
      answer: "Client PME économisait 120 CHF/client en paid ads = 58,800 CHF économisés pour 490 clients supplémentaires. Notre méthode coûte 0 CHF par client acquis après mise en place initiale. Économie nette : 100% du budget publicitaire réinvesti en croissance."
    },
    {
      question: "Le paid media n'a-t-il vraiment aucun intérêt pour les PME valaisannes ?",
      answer: "Paid media utile pour tests rapides et lancement. Mais 90% PME gaspillent leur budget : audiences mal ciblées, créas faibles, suivi inexistant. Notre approche organique construit autorité durable vs dépendance publicitaire coûteuse et fragile."
    },
    {
      question: "Comment mesurez-vous cette différence de performance si dramatique ?",
      answer: "Google Analytics 4 transparent : même période, même secteur, même zone géographique. 688 conversions organiques (SEO + contenu) vs 49 conversions payantes (Facebook + Google Ads). Données vérifiables, client autorise audit externe si nécessaire."
    },
    {
      question: "Votre méthode remplace-t-elle totalement le besoin de publicité ?",
      answer: "Pour 80% des PME valaisannes : oui, complètement. Exceptions : événements ponctuels, promotions flash, tests de marchés. Mais budget publicitaire doit représenter max 10% vs 70% actuellement. Focus sur actifs durables, pas achat d'attention temporaire."
    },
    {
      question: "Combien de temps faut-il pour voir ces résultats extraordinaires ?",
      answer: "Premiers résultats organiques mois 2-3, accélération mois 4-6, pleine puissance mois 8-12. Client PME : dépassement publicité payante dès mois 4. Patience initiale récompensée par croissance exponentielle vs linéaire paid media."
    },
    {
      question: "Que proposez-vous exactement comme alternative au paid media ?",
      answer: "Méthode 3-piliers : 1) SEO technique dominant, 2) Contenu autorité magnétique, 3) Système conversion automatisé. Résultat : flux clients organiques 24h/24 vs dépendance budgets publicitaires. Approche marathon vs sprint coûteux."
    },
    {
      question: "Quel investissement faut-il prévoir pour cette transition ?",
      answer: "Formule Organic Growth : 5500 CHF/6 mois vs 7000+ CHF budget publicitaire habituel. Différence : notre investissement génère actif permanent, publicité disparaît à l'arrêt. ROI supérieur dès mois 8, exponentiel années suivantes."
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
      {/* HERO SECTION - RÉVÉLATION 140x */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-orange-500/5 to-yellow-400/5" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
              Révélation choquante verified
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-light text-white leading-tight animate-fade-in">
                Paid Media Valais
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold animate-fade-in-delay-1 text-yellow-400">
                140x Moins Efficace
              </h2>
              <div className="text-8xl md:text-9xl font-black text-red-400 animate-bounce-slow">
                688 vs 49
              </div>
              <p className="text-2xl md:text-3xl text-gray-300 font-light animate-fade-in-delay-2">
                clients générés même période, même budget
              </p>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed mt-8">
              Notre client PME a découvert la vérité brutale<br />
              <span className="text-yellow-400 font-semibold">Publicité = gaspillage organisé</span> vs méthode organique
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-block px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-12 transform hover:scale-105 transition-all duration-500 hover:shadow-yellow-400/25"
            style={{ background: 'linear-gradient(135deg, #ffd507, #f59e0b)' }}
          >
            Arrêter le Gaspillage Maintenant
          </Link>

          <div className="text-sm text-gray-400">
            Audit gratuit • Révélation garantie • Économies immédiates
          </div>
        </div>
      </section>

      {/* DÉMONSTRATION CHOC - COMPARAISON BRUTALE */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-yellow-400/20 rounded-full text-yellow-400 text-lg font-bold mb-6">
              Données Google Analytics vérifiées
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              La Vérité <span className="font-bold text-yellow-400">Que Personne N'Ose Dire</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comparaison impitoyable : même PME, même période, même budget total
            </p>
          </div>

          {/* DASHBOARD COMPARAISON CHOC */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-yellow-400/20 overflow-hidden mb-12">
            <div className="bg-gray-800/80 px-6 py-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-gray-300 text-sm font-mono">OSOM Truth Analytics</div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* MÉTHODE ORGANIQUE - GAGNANTE */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Méthode Organique OSOM</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-green-400 text-sm">Winner</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-500/10 rounded-xl p-6 border border-green-400/30">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white">Clients générés</span>
                        <span className="text-green-400 font-bold text-3xl animate-pulse">688</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white">Coût par client</span>
                        <span className="text-green-400 font-bold text-xl">0 CHF</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white">Durabilité</span>
                        <span className="text-green-400 font-bold">∞ Permanente</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white">Croissance</span>
                        <span className="text-green-400 font-bold">Exponentielle</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-green-400/20 rounded-lg">
                      <div className="text-green-400 font-semibold text-center">
                        ROI: INFINI après 12 mois
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* PAID MEDIA - PERDANT */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Paid Media Traditionnel</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-400"></div>
                      <span className="text-red-400 text-sm">Loser</span>
                    </div>
                  </div>
                  
                  <div className="bg-red-500/10 rounded-xl p-6 border border-red-400/30">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-white">Clients générés</span>
                        <span className="text-red-400 font-bold text-3xl">49</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white">Coût par client</span>
                        <span className="text-red-400 font-bold text-xl">120 CHF</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white">Durabilité</span>
                        <span className="text-red-400 font-bold">0 si arrêt</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-white">Croissance</span>
                        <span className="text-red-400 font-bold">Plafonnée</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-red-400/20 rounded-lg">
                      <div className="text-red-400 font-semibold text-center">
                        COÛT: 58,800 CHF gaspillés
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CALCULATEUR CHOC */}
              <div className="mt-12 pt-8 border-t border-gray-700/50">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Calculateur de Gaspillage</h3>
                
                <div className="bg-gradient-to-r from-yellow-400/10 to-red-400/10 rounded-xl p-8 border border-yellow-400/30">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div className="space-y-2">
                      <div className="text-yellow-400 font-bold text-4xl">{animatedValue > 0 ? `${animatedValue}x` : '0x'}</div>
                      <div className="text-white">Moins efficace</div>
                      <div className="text-gray-400 text-sm">Publicité vs Organique</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-red-400 font-bold text-4xl">58,800</div>
                      <div className="text-white">CHF gaspillés</div>
                      <div className="text-gray-400 text-sm">Budget publicitaire perdu</div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-green-400 font-bold text-4xl">639</div>
                      <div className="text-white">Clients perdus</div>
                      <div className="text-gray-400 text-sm">Différence fatale</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF - TRANSFORMATION PME */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Transformation <span className="font-bold text-yellow-400">Client PME</span>
            </h2>
            <p className="text-xl text-gray-300">
              Evolution sur 12 mois - De l'échec publicitaire au succès organique
            </p>
          </div>

          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-yellow-400/20 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Timeline transformation */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center">
                    <span className="text-white font-bold">M0</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Phase Paid Media</span>
                      <span className="text-red-400 font-bold">49 clients</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-red-400 rounded-full" style={{width: '7%'}} />
                    </div>
                    <div className="text-xs text-gray-400 mt-1">6,000 CHF/mois budget</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-orange-600 flex items-center justify-center">
                    <span className="text-white font-bold">M6</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Transition Organique</span>
                      <span className="text-orange-400 font-bold">156 clients</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-400 rounded-full" style={{width: '23%'}} />
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Premiers résultats SEO</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black font-bold">M12</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Succès Organique</span>
                      <span className="text-yellow-400 font-bold">688 clients</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-yellow-400 to-green-400 rounded-full transition-all duration-3000 ease-out" style={{width: '100%'}} />
                    </div>
                    <div className="text-xs text-gray-400 mt-1">Budget pub économisé: 72,000 CHF</div>
                  </div>
                </div>
              </div>
              
              {/* Résultat choc */}
              <div className="text-center">
                <div className="mb-8">
                  <div className="text-8xl md:text-9xl font-black transition-all duration-2000 text-yellow-400">
                    140x
                  </div>
                  <div className="text-2xl text-white mt-4">
                    Plus Efficace
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black/40 rounded-xl p-4">
                    <div className="text-yellow-400 font-bold text-2xl">688</div>
                    <div className="text-gray-300">Clients Organiques</div>
                  </div>
                  <div className="text-gray-400 text-sm">vs</div>
                  <div className="bg-black/20 rounded-xl p-4">
                    <div className="text-gray-400 font-bold text-2xl">49</div>
                    <div className="text-gray-400">Clients Paid Media</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="text-sm text-gray-400">
                Données Google Analytics certifiées • 365 jours comparaison directe
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-gray-400 mb-8">PME qui ont abandonné le paid media</div>
            <div className="flex justify-center items-center space-x-12 opacity-70">
              <div className="text-white font-semibold">SERVICES B2B</div>
              <div className="text-white font-semibold">COMMERCE LOCAL</div>
              <div className="text-white font-semibold">ARTISANAT</div>
              <div className="text-yellow-400 font-semibold">+ 50 SECTEURS</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + PRICING */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-12 border border-yellow-400/40">
            <div className="mb-8">
              <div className="text-yellow-400 font-semibold mb-4">
                FORMULE ORGANIC GROWTH
              </div>
              <div className="text-5xl md:text-6xl font-light text-yellow-400 mb-4">
                5500 CHF
              </div>
              <div className="text-xl text-gray-300 mb-8">
                /6 mois • Économie vs 42,000 CHF paid media • ROI infini
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-4 bg-black/40 rounded-xl border border-yellow-400/20">
                <div className="text-yellow-400 font-bold text-2xl mb-2">
                  140x
                </div>
                <div className="text-gray-300">Plus efficace que paid</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-xl border border-green-400/20">
                <div className="text-green-400 font-bold text-2xl mb-2">
                  58,800
                </div>
                <div className="text-gray-300">CHF économisés/an</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-xl border border-orange-400/20">
                <div className="text-orange-400 font-bold text-2xl mb-2">
                  ∞
                </div>
                <div className="text-gray-300">ROI long-terme</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block px-16 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-6 transform hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #ffd507, #f59e0b, #ea580c)' }}
            >
              Échapper au Piège Paid Media
            </Link>
            
            <div className="text-sm text-gray-400">
              Audit révélation gratuit • Comparaison brutale • Économies immédiates
            </div>
          </div>
        </div>
      </section>

      {/* FAQ RÉVÉLATION */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Questions <span className="font-bold text-yellow-400">Révélation</span>
            </h2>
            <p className="text-xl text-gray-300">
              La vérité sur le gaspillage publicitaire
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
            <p className="text-gray-400 mb-6">Prêt pour la révélation complète ?</p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10 transition-colors duration-300"
            >
              Audit Révélation Gratuit
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