'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export const metadata = {
  title: 'Agence Web Valais 140x Plus Performante - 688 Clients/6 Mois | OSOM',
  description: '688 clients générés en 6 mois pour Culture Peinture Genève. Agence web 140x plus performante que publicité payante. 2 places disponibles ce mois. 4500 CHF tout inclus.',
  keywords: 'création site internet valais, création site web valais, création de site internet valais, site internet valais, agence web valais, développement web valais, site web valais, création site vitrine valais'
}

// VERSION ÉQUILIBRÉE - CEO + TECH GRANDIOSE + MÉTAPHORE MOTEURS
export default function CreationSiteWebPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // NOS MOTEURS RÉVOLUTIONNAIRES - STACK CLAUDE CODE
  const enginesData = [
    {
      name: "Next.js 14",
      category: "Moteur Principal",
      description: "Performance + SEO optimisé",
      color: "#70c1a9",
      icon: "⚡"
    },
    {
      name: "Claude Code",
      category: "Intelligence Artificielle",
      description: "Génération + optimisation automatique",
      color: "#8B5CF6",
      icon: "🧠"
    },
    {
      name: "TypeScript",
      category: "Précision",
      description: "Code sécurisé + maintenable",
      color: "#70c1a9",
      icon: "🎯"
    },
    {
      name: "Tailwind CSS",
      category: "Design System",
      description: "Interface moderne + responsive",
      color: "#70c1a9",
      icon: "🎨"
    },
    {
      name: "SEMrush",
      category: "Analyse Marché",
      description: "1718 recherches/mois captées",
      color: "#ffd507",
      icon: "📊"
    },
    {
      name: "Google Analytics",
      category: "Mesure Performance",
      description: "ROI transparent temps réel",
      color: "#ffd507",
      icon: "📈"
    }
  ]

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
      answer: "Nous connaissons le marché local : Culture Peinture a généré 688 clients en 6 mois avec notre site, soit 140x plus efficace que leur publicité payante. Expertise locale + résultats vérifiés."
    },
    {
      question: "Que comprend exactement votre service de création de site ?",
      answer: "Design professionnel adapté à votre secteur, développement avec technologies modernes, SEO pour être trouvé sur Google, configuration Google Analytics, hébergement 1 an, formation complète et support. Tout pour générer des clients automatiquement."
    },
    {
      question: "Comment garantissez-vous que mon site génèrera des clients ?",
      answer: "Nos sites ont un taux de conversion de 11.3% vs 2-3% pour les sites traditionnels. Nous utilisons les mêmes outils que Google : SEMrush, PageSpeed, Analytics. Résultats mesurables et transparents dès le premier mois."
    },
    {
      question: "Proposez-vous un suivi après la livraison du site ?",
      answer: "Formation complète incluse pour que vous restiez autonome. Support technique 1 an inclus. Nous analysons vos résultats ensemble et optimisons si nécessaire. Objectif : que votre site travaille pour vous 24h/24."
    },
    {
      question: "Mon secteur d'activité convient-il pour un site web performant ?",
      answer: "Tous nos clients génèrent plus de clients : Culture Peinture (BTP), Artisane Lumière (artisanat), cabinets conseils, commerces. Chaque secteur a ses spécificités que nous maîtrisonsparfaitement."
    },
    {
      question: "Puis-je voir des exemples de sites créés pour des entreprises valaisannes ?",
      answer: "Culture Peinture Genève : 688 clients générés en 6 mois. Artisane Lumière Valais : +180% d'engagement. Données Google Analytics certifiées sur 200+ jours. Résultats concrets et vérifiables."
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
      {/* HERO SECTION - SCAN 5 SECONDES */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-purple-500/5 to-teal-400/5" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-6">
              Plus que 2 places disponibles ce mois
            </div>
            <h1 className="text-5xl md:text-7xl font-light text-white mb-6">
              Site Web <span className="font-bold" style={{color: '#8B5CF6'}}>Haute Performance</span><br />
              <span className="font-bold text-yellow-400">688 clients</span> générés automatiquement
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Nos <span style={{color: '#70c1a9'}} className="font-semibold">moteurs révolutionnaires</span> propulsent votre business :<br />
              Culture Peinture Genève → <span className="text-yellow-400 font-semibold">688 clients vs 49</span> (publicité traditionnelle)
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-block px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-12 transform hover:scale-105 transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #ffd507, #70c1a9)' }}
          >
            Démarrer Mon Moteur →
          </Link>

          <div className="text-sm text-gray-400">
            Audit gratuit • Sans engagement • Résultats garantis
          </div>
        </div>
      </section>

      {/* NOS MOTEURS RÉVOLUTIONNAIRES */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal-400/5 to-transparent" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Nos <span className="font-bold" style={{color: '#70c1a9'}}>Moteurs</span> Révolutionnaires
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comme une F1 a besoin des meilleurs moteurs, votre site web mérite les technologies les plus avancées
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {enginesData.map((engine, index) => (
              <div key={index} className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-teal-400/40 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-4">{engine.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">{engine.name}</h3>
                    <div className="text-sm" style={{color: engine.color}}>{engine.category}</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{engine.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE VÉRIFIÉE - SOCIAL PROOF */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
              Performance <span className="font-bold text-yellow-400">Mesurée</span>
            </h2>
            <p className="text-xl text-gray-300">
              Nos moteurs génèrent des résultats concrets et vérifiables
            </p>
          </div>

          {/* Graphique Performance Visuel */}
          <div className="bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-teal-400/20 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div style={{color: '#70c1a9'}} className="font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-2">🏎️</span> CULTURE PEINTURE • GENÈVE
                </div>
                <h3 className="text-3xl font-light text-white mb-6">
                  "Mes moteurs OSOM surpassent toute ma publicité"
                </h3>
                
                {/* Graphique en barres animé */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white">Site OSOM (Nos Moteurs)</span>
                      <span className="text-yellow-400 font-bold">688 clients</span>
                    </div>
                    <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-2000 ease-out"
                        style={{ 
                          background: 'linear-gradient(90deg, #ffd507, #70c1a9)',
                          width: '100%'
                        }}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Publicité traditionnelle</span>
                      <span className="text-gray-400 font-bold">49 clients</span>
                    </div>
                    <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gray-600 rounded-full transition-all duration-2000 ease-out"
                        style={{ width: '7%' }}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 text-sm text-gray-400 flex items-center">
                  <span className="mr-2">📊</span> Google Analytics • 200+ jours certifiés
                </div>
              </div>
              
              <div className="text-center">
                <div className="relative">
                  <div className="text-8xl md:text-9xl font-light mb-4" style={{color: '#70c1a9'}}>
                    140x
                  </div>
                  <div className="absolute -top-4 -right-4 text-4xl">🚀</div>
                </div>
                <div className="text-xl text-white mb-4">
                  Plus Performant
                </div>
                <div className="text-sm text-gray-400">
                  Puissance de nos moteurs vs méthodes traditionnelles
                </div>
              </div>
            </div>
          </div>

          {/* Clients Propulsés */}
          <div className="text-center">
            <div className="text-gray-400 mb-8">🏁 Entreprises propulsées par nos moteurs</div>
            <div className="flex justify-center items-center space-x-8 opacity-70">
              <div className="text-white font-semibold flex items-center">
                <span className="mr-2">🎨</span> CULTURE PEINTURE
              </div>
              <div className="text-white font-semibold flex items-center">
                <span className="mr-2">💡</span> ARTISANE LUMIÈRE
              </div>
              <div style={{color: '#70c1a9'}} className="font-semibold flex items-center">
                <span className="mr-2">⚡</span> + 15 AUTRES
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL - ACTION 10 SECONDES */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl p-12 border border-yellow-400/40">
            <div className="mb-8">
              <div style={{color: '#70c1a9'}} className="font-semibold mb-4 flex items-center justify-center">
                <span className="mr-2">🏎️</span> FORMULE F1 COMPLÈTE
              </div>
              <div className="text-5xl md:text-6xl font-light text-yellow-400 mb-4">
                4500 CHF
              </div>
              <div className="text-xl text-gray-300 mb-8">
                Tous nos moteurs inclus • Livré en 45 jours • Formation pilotage
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="text-center p-4 bg-black/40 rounded-xl border border-yellow-400/20">
                <div className="text-yellow-400 font-bold text-2xl mb-2 flex items-center justify-center">
                  <span className="mr-2">🎯</span> 688
                </div>
                <div className="text-gray-300">Clients générés automatiquement</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-xl border border-teal-400/20">
                <div style={{color: '#70c1a9'}} className="font-bold text-2xl mb-2 flex items-center justify-center">
                  <span className="mr-2">⚡</span> 45
                </div>
                <div className="text-gray-300">Jours optimisation moteurs</div>
              </div>
              <div className="text-center p-4 bg-black/40 rounded-xl border border-purple-400/20">
                <div style={{color: '#8B5CF6'}} className="font-bold text-2xl mb-2 flex items-center justify-center">
                  <span className="mr-2">🏁</span> 2
                </div>
                <div className="text-gray-300">Places garage ce mois</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-block px-16 py-6 rounded-2xl font-bold text-xl shadow-2xl text-black mb-6 transform hover:scale-105 transition-all duration-300"
              style={{ background: 'linear-gradient(135deg, #ffd507, #70c1a9, #8B5CF6)' }}
            >
              🏎️ Réserver Mon Garage F1
            </Link>
            
            <div className="text-sm text-gray-400">
              🔧 Diagnostic moteurs gratuit (800 CHF) • 🏁 Call stratégie 15min • ⚡ Aucun engagement
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
              Poser Ma Question →
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