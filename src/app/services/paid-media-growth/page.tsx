'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import React from 'react'

export default function PaidMediaGrowthPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [animatedText, setAnimatedText] = useState('')
  
  // Animation VERSION 2 - Typewriter
  useEffect(() => {
    const fullText = "Nous ne travaillons qu'avec des clients qui veulent gagner. Les autres, on les laisse à la concurrence."
    let currentIndex = 0
    
    const typeWriter = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setAnimatedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typeWriter)
      }
    }, 100)
    
    return () => clearInterval(typeWriter)
  }, [])

  // STRATÉGIES GROWTH MAD MEN STYLE
  const growthStrategies = [
    {
      title: 'Paid Media Chirurgical',
      description: 'Nous ne brûlons pas votre budget. Nous l\'investissons.',
      methods: [
        'Targeting précis basé sur data',
        'Tests A/B systématiques', 
        'Attribution multi-canal',
        'Optimisation ROI quotidienne'
      ],
      icon: 'target',
      color: 'yellow'
    },
    {
      title: 'Growth Hacking Méthodique',
      description: 'Croissance explosive avec méthode, pas avec espoir.',
      methods: [
        'Funnels d\'acquisition optimisés',
        'Viral loops programmés',
        'Product-market fit data-driven',
        'Scaling predictible'
      ],
      icon: 'rocket',
      color: 'green'
    },
    {
      title: 'Performance Marketing',
      description: 'Chaque franc investi doit en rapporter trois.',
      methods: [
        'ROAS minimum 3:1 garanti',
        'Attribution précise',
        'Budget allocation intelligente',
        'Reporting executive level'
      ],
      icon: 'chart',
      color: 'purple'
    }
  ]

  const successStories = [
    {
      sector: 'SaaS B2B Romand',
      challenge: 'CAC trop élevé, croissance stagnante',
      solution: 'Funnel acquisition repensé + content marketing',
      result: 'CAC divisé par 3, MRR +180% en 8 mois'
    },
    {
      sector: 'E-commerce Local', 
      challenge: 'ROAS Facebook en chute libre',
      solution: 'Diversification canaux + email automation',
      result: 'ROI global stable malgré iOS changes'
    },
    {
      sector: 'Cabinet Conseil',
      challenge: 'Dépendance totale Google Ads',
      solution: 'Thought leadership + SEO authority',
      result: 'Pipeline leads organiques > payants'
    }
  ]

  const faqData = [
    {
      question: "Pourquoi mes campagnes Facebook/Google ne marchent plus comme avant ?",
      answer: "iOS 14.5, cookie-less future, concurrence accrue, CPM qui explosent. L'âge d'or du paid media facile est terminé. Aujourd'hui il faut de la méthode, des données propres, et diversifier. Nous maîtrisons ces nouvelles règles du jeu."
    },
    {
      question: "Comment réduire mon coût d'acquisition client sans perdre en volume ?",
      answer: "Stratégie multi-canal intelligente. Nous optimisons vos campagnes payantes ET développons vos canaux organiques. Le mix parfait pour maintenir le volume tout en améliorant l'efficacité. Plus de dépendance à un seul canal."
    },
    {
      question: "Mon ROAS diminue constamment, que faire ?",
      answer: "Audit complet de votre attribution, révision du targeting, tests créatifs systématiques, optimisation landing pages. Nous identifions les fuites et les colmatons. Notre objectif : ROAS minimum 3:1 sur 90 jours."
    },
    {
      question: "Vaut-il mieux faire du paid media ou miser sur l'organique ?",
      answer: "Fausse alternative. Les champions font les deux intelligemment. Paid media pour l'acceleration immédiate, organique pour la durabilité. Nous créons l'équilibre parfait selon votre secteur et vos ressources."
    },
    {
      question: "Comment mesurer correctement le ROI de mes campagnes ?",
      answer: "Attribution multi-touch, tracking offline, Customer Lifetime Value, coûts cachés inclus. Nous installons une mesure de performance complète qui révèle votre vraie rentabilité. Fini les ROAS trompeurs."
    },
    {
      question: "Combien investir en paid media pour voir des résultats ?",
      answer: "Règle d'or : minimum 3 mois de budget pour tester et optimiser. Pour du B2B : 3000-5000 CHF/mois. Pour de l'e-commerce : 5000-15000 CHF/mois. En dessous, vous perdez votre temps ET votre argent."
    },
    {
      question: "Peut-on faire du growth hacking en Suisse ou c'est trop petit ?",
      answer: "La Suisse est parfaite pour le growth hacking méthodique. Marché concentré, pouvoir d'achat élevé, early adopters tech. Nous adaptons les techniques Silicon Valley à la mentalité helvétique. Ça marche."
    },
    {
      question: "LinkedIn Ads vaut-il le coup pour du B2B suisse ?",
      answer: "LinkedIn Ads en Suisse = goldmine pour qui sait s'y prendre. CPL élevé mais qualité exceptionnelle. Nous créons des campagnes qui transforment les décideurs en prospects qualifiés. ROI souvent supérieur à Google Ads en B2B."
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      
      {/* HERO VERSION 2 - TYPEWRITER + SPOTLIGHT */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 overflow-hidden">
        {/* Background noir avec spots lumineux animés */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black"></div>
          
          {/* Spots lumineux qui bougent */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-yellow-400/20 via-yellow-400/5 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-green-400/15 via-green-400/3 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-2/3 left-2/3 w-64 h-64 bg-gradient-radial from-purple-400/10 via-purple-400/2 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          {/* Badge avec pulsation */}
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-black/80 to-gray-900/80 backdrop-blur-xl rounded-full mb-12 border border-yellow-400/40">
            <div className="w-3 h-3 bg-yellow-400 rounded-full mr-4 animate-ping"></div>
            <span className="text-yellow-400 font-bold text-lg tracking-wider">PUBLICITÉ AVEC INTENTION</span>
          </div>
          
          {/* Titre principal avec effet de gradient */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6">
              <span className="text-yellow-400 font-bold">Publicité avec intention</span>
            </h1>
            
            {/* Slogan avec effet typewriter */}
            <div className="h-20 flex items-center justify-center">
              <div className="relative">
                <p className="text-3xl md:text-4xl text-gray-300 font-light">
                  {animatedText.split('').map((char, index) => (
                    <span 
                      key={index}
                      className={`inline transition-all duration-300 ${
                        char === ' ' ? 'w-2' : ''
                      } ${
                        animatedText.includes('briller') && index >= animatedText.indexOf('briller') ? 
                        'text-yellow-400 drop-shadow-lg' : 'text-gray-300'
                      } ${
                        animatedText.includes("l'ombre") && index >= animatedText.indexOf("l'ombre") && index < animatedText.indexOf("l'ombre") + 7 ? 
                        'text-gray-600' : ''
                      }`}
                      style={{
                        textShadow: animatedText.includes('briller') && index >= animatedText.indexOf('briller') ? 
                          '0 0 20px rgba(250, 204, 21, 0.5)' : 'none'
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </p>
                
                {/* Curseur clignotant */}
                <span className="absolute -right-1 top-0 w-1 h-12 bg-yellow-400 animate-pulse"></span>
              </div>
            </div>
          </div>

          {/* Description avec fond glass */}
          <div className="mb-16 max-w-4xl mx-auto">
            <div className="bg-black/30 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
              <p className="text-2xl text-gray-300 leading-relaxed">
                Quand il faut <span className="text-yellow-400 font-medium">investir massivement</span> 
                {' '}pour dominer votre marché, nous orchestrons des campagnes d'acquisition 
                qui transforment vos concurrents en spectateurs.
              </p>
            </div>
          </div>

          {/* CTA Buttons avec effet néon */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-16 py-8 text-2xl font-bold text-black rounded-2xl transition-all duration-500 hover:scale-110 overflow-hidden shadow-2xl"
              style={{ 
                background: 'linear-gradient(135deg, #ffd507, #10b981)',
                boxShadow: '0 0 50px rgba(255, 213, 7, 0.3)'
              }}
            >
              <span className="relative z-10">DÉPLOYER LA STRATÉGIE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Link>
            
            <Link
              href="#strategies" 
              className="group inline-flex items-center justify-center px-12 py-8 text-xl font-medium text-yellow-400 border-2 border-yellow-400/50 rounded-2xl hover:bg-yellow-400/10 transition-all duration-500 hover:scale-105 hover:border-yellow-400"
            >
              <span>Découvrir l'arsenal</span>
              <svg className="ml-3 w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Métriques avec effet de brillance */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { value: "20K+", label: "CHF déployés/jour", color: "yellow", icon: "money" },
              { value: "4.2x", label: "ROAS garanti", color: "green", icon: "chart" },
              { value: "24h", label: "Time to launch", color: "blue", icon: "lightning" },
              { value: "100%", label: "Satisfaction", color: "purple", icon: "target" }
            ].map((metric, index) => (
              <div 
                key={index}
                className={`group relative p-8 rounded-3xl border transition-all duration-700 hover:scale-110 bg-gradient-to-br overflow-hidden ${
                  metric.color === 'yellow' ? 'from-yellow-400/10 to-yellow-600/5 border-yellow-400/30 hover:border-yellow-400/60' :
                  metric.color === 'green' ? 'from-green-400/10 to-green-600/5 border-green-400/30 hover:border-green-400/60' :
                  metric.color === 'blue' ? 'from-blue-400/10 to-blue-600/5 border-blue-400/30 hover:border-blue-400/60' :
                  'from-purple-400/10 to-purple-600/5 border-purple-400/30 hover:border-purple-400/60'
                }`}
                style={{animationDelay: `${index * 300}ms`}}
              >
                {/* Effet de brillance au hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
                    {metric.icon === 'money' && (
                      <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    )}
                    {metric.icon === 'chart' && (
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    )}
                    {metric.icon === 'lightning' && (
                      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    )}
                    {metric.icon === 'target' && (
                      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  <div className={`text-5xl font-bold mb-3 ${
                    metric.color === 'yellow' ? 'text-yellow-400' :
                    metric.color === 'green' ? 'text-green-400' :
                    metric.color === 'blue' ? 'text-blue-400' :
                    'text-purple-400'
                  }`}>
                    {metric.value}
                  </div>
                  <div className="text-gray-400 font-medium">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LA VÉRITÉ SUR LE PAID MEDIA */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Quand investir massivement en acquisition
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Croissance stagnante, concurrence qui accélère, opportunité de marché... 
              Il y a des moments où il faut sortir l'artillerie lourde.
            </p>
          </div>

          <div className="bg-gradient-to-br from-black/60 to-gray-900/60 rounded-3xl p-8 border border-yellow-400/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-light text-white mb-6">
                  Signaux qu'il faut <span className="text-yellow-400">accélérer</span>
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>📈 Croissance organique qui plafonne</p>
                  <p>🏁 Concurrents qui prennent des parts</p>
                  <p>💰 Trésorerie qui permet l'investissement</p>
                  <p>🎯 Product-market fit validé</p>
                  <p>📊 Métriques de rétention solides</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-light text-white mb-6">
                  Notre approche <span className="text-green-400">growth intensive</span>
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>🚀 Budgets conséquents déployés intelligemment</p>
                  <p>📊 Tracking précis de chaque franc investi</p>
                  <p>🎯 Multi-canal orchestré pour dominer</p>
                  <p>⚡ Optimisation continue et scaling rapide</p>
                  <p>💎 Focus sur LTV et rentabilité long terme</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATÉGIES GROWTH */}
      <section id="strategies" className="py-24 relative bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Notre arsenal <span className="text-yellow-400 font-bold">growth</span>
            </h2>
            <p className="text-xl text-gray-400">
              Trois piliers pour dominer votre marché
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {growthStrategies.map((strategy, index) => (
              <div key={index} className="bg-gradient-to-br from-black/90 to-gray-900/90 rounded-3xl p-8 border border-gray-700/50 hover:border-yellow-400/40 transition-all duration-300">
                <div className="w-16 h-16 mb-6 rounded-full bg-yellow-400/20 flex items-center justify-center">
                  <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{strategy.title}</h3>
                <p className="text-gray-400 mb-6 italic">"{strategy.description}"</p>
                <ul className="space-y-2">
                  {strategy.methods.map((method, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"></div>
                      <span className="text-gray-300 text-sm">{method}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* PRICING DIRECT */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Notre <span className="text-yellow-400 font-bold">investissement</span>
            </h2>
            <p className="text-xl text-gray-400">
              Pas de perte de temps. Prix directs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 rounded-3xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Growth Starter</h3>
              <div className="text-3xl font-bold text-white mb-4">4,900 CHF<span className="text-lg text-gray-400">/mois</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Audit campagnes complet</li>
                <li>• 2 canaux acquisition optimisés</li>
                <li>• Reporting hebdomadaire</li>
                <li>• Support email prioritaire</li>
                <li>• ROAS minimum 2:1 garanti</li>
              </ul>
              <Link href="/contact?service=growth-starter" className="block text-center py-3 rounded-xl border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10 transition-all">
                Démarrer maintenant
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 rounded-3xl p-8 border border-yellow-400/60 shadow-xl shadow-yellow-400/10">
              <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                PERFORMANCE MAX
              </div>
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Growth Accelerator</h3>
              <div className="text-3xl font-bold text-white mb-4">9,900 CHF<span className="text-lg text-gray-400">/mois</span></div>
              <ul className="space-y-3 text-gray-300 mb-8">
                <li>• Tout du pack Starter +</li>
                <li>• Multi-canal full stack</li>
                <li>• Growth hacking experiments</li>
                <li>• Attribution custom tracking</li>
                <li>• ROAS minimum 3:1 garanti</li>
                <li>• Call stratégique bi-mensuel</li>
              </ul>
              <Link href="/contact?service=growth-accelerator" className="block text-center py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-green-400 text-black font-bold hover:brightness-110 transition-all">
                Dominer le marché
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/30">
              <p className="text-green-400 font-bold mb-2">Garantie Performance</p>
              <p className="text-gray-300 text-sm">
                ROAS non atteint en 90 jours ? Nous travaillons gratuitement jusqu'à l'objectif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL MAD MEN */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-yellow-400/10 to-green-400/10 rounded-3xl p-12 border border-yellow-400/30 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Prêt à <span className="font-bold text-yellow-400">mettre le paquet</span> ?
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Analysons votre potentiel de croissance et construisons 
              ensemble la stratégie d'acquisition qui change la donne.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-10 py-5 rounded-xl font-bold text-xl text-black transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #ffd507, #10b981)' }}
              >
                Audit gratuit maintenant
              </Link>
              <Link
                href="/outils"
                className="inline-block px-8 py-5 rounded-xl border border-green-400/40 text-green-400 hover:bg-green-400/10 transition-all duration-300 text-lg"
              >
                Calculer mon potentiel
              </Link>
            </div>

            <div className="mt-8 flex justify-center space-x-6 text-sm text-gray-400">
              <div>✓ Audit stratégique</div>
              <div>✓ Scaling en 90 jours</div>
              <div>✓ ROI garanti</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ ENRICHIE */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white">
              Questions <span className="font-bold text-yellow-400">directes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-black/40 rounded-xl border border-gray-700/50 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-yellow-400/5 transition-colors"
                >
                  <h3 className="text-white pr-4">{faq.question}</h3>
                  <div className={`text-yellow-400 text-xl transform transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
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