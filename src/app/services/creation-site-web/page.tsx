'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'

// VERSION FINALE - CEO IMPACT + PUISSANCE DÉMONTRÉE + AUDACE
export default function CreationSiteWebPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [animatedValue, setAnimatedValue] = useState(0)
  
  // PUISSANCE DE NOTRE TECHNOLOGIE - RÉSULTATS CONCRETS
  const performanceResults = [
    {
      metric: "Vitesse de Chargement",
      ourResult: "0.8 secondes",
      industry: "3.2 secondes",
      improvement: "4x plus rapide",
      color: "#70c1a9"
    },
    {
      metric: "Taux de Conversion",
      ourResult: "11.3%",
      industry: "2.3%",
      improvement: "5x plus efficace",
      color: "#ffd507"
    },
    {
      metric: "Position Google",
      ourResult: "Top 3",
      industry: "Page 2+",
      improvement: "10x plus visible",
      color: "#8B5CF6"
    },
    {
      metric: "Génération Leads",
      ourResult: "688 clients",
      industry: "49 clients",
      improvement: "8x plus performant",
      color: "#ffd507"
    }
  ]
  
  // Animation du compteur 14x
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(14)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const faqData = [
    {
      question: "Combien coûte un site web professionnel en Valais ?",
      answer: "4500 CHF tout inclus. Ce prix comprend le design, le développement, le SEO, l'hébergement 1 an et la formation. Aucun frais caché, contrairement aux agences qui facturent à part chaque service."
    },
    {
      question: "Combien de temps faut-il pour créer un site web ?",
      answer: "45 jours ouvrés garantis. Semaines 1-2 : stratégie et design. Semaines 3-4 : développement. Semaines 5-6 : SEO et optimisation. Semaine 7 : formation et lancement. Transparence totale à chaque étape."
    },
    {
      question: "Pourquoi choisir une agence web spécialisée Valais ?",
      answer: "Nous connaissons le marché local et avons généré 688 clients en 6 mois pour un pure player Genève domaine de l'art, soit 8x plus efficace que leur méthode traditionnelle. Expertise locale + résultats vérifiés."
    },
    {
      question: "Que comprend exactement votre service de création de site ?",
      answer: "Design professionnel adapté à votre secteur, développement avec technologies modernes, SEO pour être trouvé sur Google, configuration Google Analytics, hébergement 1 an, formation complète et support. Tout pour générer des clients automatiquement."
    },
    {
      question: "Comment garantissez-vous que mon site générera des clients ?",
      answer: "Nos sites ont un taux de conversion de 11.3% vs 2-3% pour les sites traditionnels. Nous utilisons les mêmes outils que Google : SEMrush, PageSpeed, Analytics. Résultats mesurables et transparents dès le premier mois."
    },
    {
      question: "Proposez-vous un suivi après la livraison du site ?",
      answer: "Formation complète incluse pour que vous restiez autonome. Support technique 1 an inclus. Nous analysons vos résultats ensemble et optimisons si nécessaire. Objectif : que votre site travaille pour vous 24h/24."
    },
    {
      question: "Mon secteur d'activité convient-il pour un site web performant ?",
      answer: "Tous nos clients génèrent plus de clients : PME BTP, artisanat, cabinets conseils, commerces. Chaque secteur a ses spécificités que nous maîtrisons parfaitement."
    },
    {
      question: "Puis-je voir des exemples de sites créés pour des entreprises valaisannes ?",
      answer: "Notre pure player Genève domaine de l'art a généré 688 clients en 6 mois vs 49 avec méthode traditionnelle. Données Google Analytics certifiées sur 200+ jours. Résultats concrets et vérifiables."
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
      {/* HERO SECTION DYNAMIQUE - IMPACT CEO */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-purple-500/5 to-teal-400/5" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
              Plus que 2 places disponibles ce mois
            </div>
            
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-light text-white leading-tight animate-fade-in">
                Votre Entreprise
              </h1>
              <h2 className="text-4xl md:text-6xl font-bold animate-fade-in-delay-1" style={{color: '#8B5CF6'}}>
                Mérite Plus de Clients
              </h2>
              <div className="text-8xl md:text-9xl font-black text-yellow-400 animate-bounce-slow">
                688
              </div>
              <p className="text-2xl md:text-3xl text-gray-300 font-light animate-fade-in-delay-2">
                clients générés automatiquement
              </p>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed mt-8">
              Notre technologie avancée transforme votre présence en ligne<br />
              <span className="text-yellow-400 font-semibold">8x plus performant</span> que les solutions traditionnelles
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-block px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-12 transform hover:scale-105 transition-all duration-500 hover:shadow-yellow-400/25"
            style={{ background: 'linear-gradient(135deg, #ffd507, #70c1a9)' }}
          >
            Transformer Mon Business
          </Link>

          <div className="text-sm text-gray-400">
            Audit gratuit • Sans engagement • Résultats garantis
          </div>
        </div>
      </section>

      {/* DÉMONSTRATION LIVE - IMPRESSIONNANT POUR PDG */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-3 bg-teal-400/20 rounded-full text-teal-400 text-lg font-bold mb-6">
              Prouvez-nous que c'est impossible
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Votre site se construit <span className="font-bold" style={{color: '#70c1a9'}}>en temps réel</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pendant que vous regardez, notre technologie transforme votre vision en réalité
            </p>
          </div>

          {/* DASHBOARD LIVE - SIMULATION IMPRESSIONNANTE */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-teal-400/20 overflow-hidden mb-12">
            {/* Terminal Header */}
            <div className="bg-gray-800/80 px-6 py-4 border-b border-gray-700/50">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-gray-300 text-sm font-mono">OSOM Development Suite</div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* CODE EN LIVE */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">Code génération automatique</h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                      <span className="text-green-400 text-sm">Live</span>
                    </div>
                  </div>
                  
                  <div className="bg-black/60 rounded-xl p-4 font-mono text-sm overflow-hidden">
                    <div className="text-green-400 mb-2">{/* Votre site web se construit... */}</div>
                    <div className="text-blue-400 inline">const </div>
                    <div className="text-yellow-400 inline">votreSite </div>
                    <div className="text-white inline">= &#123;</div>
                    <div className="ml-4 text-white">vitesse: <span className="text-green-400">&apos;0.8 secondes&apos;</span>,</div>
                    <div className="ml-4 text-white">conversion: <span className="text-green-400">&apos;11.3%&apos;</span>,</div>
                    <div className="ml-4 text-white">position: <span className="text-green-400">&apos;Top 3 Google&apos;</span>,</div>
                    <div className="ml-4 text-white">leads: <span className="text-green-400 animate-pulse">688</span></div>
                    <div className="text-white">&#125;</div>
                    
                    <div className="mt-4 text-teal-400">✓ Site optimisé généré</div>
                    <div className="text-teal-400">✓ SEO configuré automatiquement</div>
                    <div className="text-teal-400">✓ Analytics intégré</div>
                    <div className="text-teal-400 animate-pulse">⚡ Déploiement en cours...</div>
                  </div>
                </div>
                
                {/* MÉTRIQUES LIVE DASHBOARD */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Performances en temps réel</h3>
                  
                  <div className="space-y-6">
                    {/* Vitesse */}
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Vitesse de chargement</span>
                        <span className="text-green-400 font-bold text-xl">0.8s</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-400 to-teal-400 rounded-full transition-all duration-3000 ease-out" style={{width: '85%'}}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">4x plus rapide que la concurrence</div>
                    </div>
                    
                    {/* Conversion */}
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Taux de conversion</span>
                        <span className="text-yellow-400 font-bold text-xl">11.3%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full transition-all duration-4000 ease-out" style={{width: '90%'}}></div>
                      </div>
                      <div className="text-xs text-gray-400 mt-1">5x plus efficace que la moyenne</div>
                    </div>
                    
                    {/* Leads générés */}
                    <div className="bg-black/40 rounded-xl p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white">Leads générés</span>
                        <span className="text-teal-400 font-bold text-2xl animate-pulse">{animatedValue > 0 ? Math.floor(animatedValue * 49) : 0}</span>
                      </div>
                      <div className="text-xs text-gray-400">Compteur automatique actif</div>
                    </div>
                    
                    {/* Status */}
                    <div className="bg-gradient-to-r from-teal-400/20 to-green-400/20 rounded-xl p-4 border border-teal-400/30">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                        <span className="text-white font-semibold">Système opérationnel</span>
                      </div>
                      <div className="text-sm text-gray-300 mt-1">Votre site travaille 24h/24</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* COMPARAISON AVANT/APRÈS VISUELLE */}
              <div className="mt-12 pt-8 border-t border-gray-700/50">
                <h3 className="text-2xl font-bold text-white text-center mb-8">Transformation immédiate</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* AVANT */}
                  <div className="text-center">
                    <div className="bg-red-500/20 rounded-xl p-6 border border-red-500/30">
                      <h4 className="text-red-400 font-bold mb-4">Site traditionnel</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Chargement</span>
                          <span className="text-red-400">3.2 secondes</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Conversion</span>
                          <span className="text-red-400">2.3%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Position Google</span>
                          <span className="text-red-400">Page 2+</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Leads/an</span>
                          <span className="text-red-400">49</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* APRÈS */}
                  <div className="text-center">
                    <div className="bg-teal-400/20 rounded-xl p-6 border border-teal-400/30">
                      <h4 className="text-teal-400 font-bold mb-4">Site OSOM</h4>
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-gray-300">Chargement</span>
                          <span className="text-teal-400 font-bold">0.8 secondes</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Conversion</span>
                          <span className="text-yellow-400 font-bold">11.3%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Position Google</span>
                          <span className="text-green-400 font-bold">Top 3</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-300">Leads/an</span>
                          <span className="text-yellow-400 font-bold text-xl">688</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-8">
                  <div className="inline-block px-6 py-3 bg-gradient-to-r from-teal-400/20 to-yellow-400/20 rounded-full border border-teal-400/30">
                    <span className="text-2xl font-bold" style={{color: '#70c1a9'}}>14x</span>
                    <span className="text-white ml-2">plus performant en 6 mois</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFORMANCE MESURÉE - GRAPHIQUE DYNAMIQUE 14x */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Performance <span className="font-bold text-yellow-400">Mesurée</span>
            </h2>
            <p className="text-xl text-gray-300">
              Évolution des performances sur 6 mois - Résultats vérifiés
            </p>
          </div>

          {/* Performance Graphique Dynamique */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-teal-400/20 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Timeline progression */}
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gray-700 flex items-center justify-center">
                    <span className="text-white font-bold">M1</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Mois 1</span>
                      <span className="text-yellow-400 font-bold">2x mieux</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 rounded-full" style={{width: '14%'}} />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-teal-600 flex items-center justify-center">
                    <span className="text-white font-bold">M3</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Mois 3</span>
                      <span style={{color: '#70c1a9'}} className="font-bold">8x mieux</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{background: '#70c1a9', width: '57%'}} />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black font-bold">M6</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-white">Mois 6</span>
                      <span className="text-yellow-400 font-bold">14x mieux</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-yellow-400 rounded-full transition-all duration-3000 ease-out" style={{width: '100%'}} />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Résultat final animé */}
              <div className="text-center">
                <div className="mb-8">
                  <div className="text-8xl md:text-9xl font-black transition-all duration-2000" style={{color: '#70c1a9'}}>
                    {animatedValue}x
                  </div>
                  <div className="text-2xl text-white mt-4">
                    Plus Performant
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-black/40 rounded-xl p-4">
                    <div className="text-yellow-400 font-bold text-2xl">688</div>
                    <div className="text-gray-300">Clients générés</div>
                  </div>
                  <div className="text-gray-400 text-sm">vs</div>
                  <div className="bg-black/20 rounded-xl p-4">
                    <div className="text-gray-400 font-bold text-2xl">49</div>
                    <div className="text-gray-400">Méthode traditionnelle</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <div className="text-sm text-gray-400">
                Données Google Analytics certifiées • 200+ jours de mesures
              </div>
            </div>
          </div>

          {/* Entreprises Transformées */}
          <div className="text-center">
            <div className="text-gray-400 mb-8">Entreprises transformées par notre technologie</div>
            <div className="flex justify-center items-center space-x-12 opacity-70">
              <div className="text-white font-semibold">PME BTP</div>
              <div className="text-white font-semibold">COMMERCE LOCAL</div>
              <div className="text-white font-semibold">SERVICES B2B</div>
              <div style={{color: '#70c1a9'}} className="font-semibold">+ 15 SECTEURS</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL - ACTION */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-12 border border-yellow-400/40">
            <div className="mb-8">
              <div style={{color: '#70c1a9'}} className="font-semibold mb-4">
                FORMULE COMPLÈTE
              </div>
              <div className="text-5xl md:text-6xl font-light text-yellow-400 mb-4">
                4500 CHF
              </div>
              <div className="text-xl text-gray-300 mb-8">
                Technologie avancée incluse • Livré en 45 jours • Formation complète
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-4 bg-black/40 rounded-xl border border-yellow-400/20">
                <div className="text-yellow-400 font-bold text-2xl mb-2">
                  688
                </div>
                <div className="text-gray-300">Clients générés automatiquement</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-xl border border-teal-400/20">
                <div style={{color: '#70c1a9'}} className="font-bold text-2xl mb-2">
                  45
                </div>
                <div className="text-gray-300">Jours de développement</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-xl border border-purple-400/20">
                <div style={{color: '#8B5CF6'}} className="font-bold text-2xl mb-2">
                  2
                </div>
                <div className="text-gray-300">Places disponibles ce mois</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block px-16 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-6 transform hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #ffd507, #70c1a9, #8B5CF6)' }}
            >
              Réserver Ma Place Maintenant
            </Link>
            
            <div className="text-sm text-gray-400">
              Audit technologique gratuit (800 CHF) • Appel stratégie 15min • Aucun engagement
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