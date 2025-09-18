'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
import IconeOSOM from '@/components/IconeOSOM'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

export default function TrackingDataPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // Services Tracking modérés
  const trackingServices = [
    {
      title: 'Setup analytics avancé',
      description: 'Installation et configuration professionnelle des outils',
      features: [
        'Google Analytics 4 complet',
        'Tag Manager structuré', 
        'Events personnalisés',
        'Tableaux de bord exécutifs'
      ],
      icon: 'chart',
      color: 'purple'
    },
    {
      title: 'Attribution marketing',
      description: 'Comprendre d\'où viennent vraiment vos clients',
      features: [
        'Parcours client complets',
        'Sources de trafic détaillées',
        'Conversion multi-canal',
        'Rapports ROI transparents'
      ],
      icon: 'target',
      color: 'pink'
    },
    {
      title: 'Optimisation continue',
      description: 'Améliorer vos performances avec des données fiables',
      features: [
        'Tests A/B guidés',
        'Recommandations mensuelles',
        'Alertes automatisées',
        'Formation équipe incluse'
      ],
      icon: 'rocket',
      color: 'cyan'
    }
  ]

  const faqData = [
    {
      question: "Pourquoi Google Analytics me montre 70% de trafic direct ?",
      answer: "Vos visiteurs viennent d'emails, réseaux sociaux, liens sans UTM. GA classe tout en 'direct'. Nous révélons vos vraies sources."
    },
    {
      question: "Comment savoir combien me coûte chaque client acquis ?",
      answer: "Nous connectons dépenses marketing avec conversions réelles. Vrai coût par client, pas juste le CPC Google Ads."
    },
    {
      question: "Mes rapports analytics sont incompréhensibles, comment simplifier ?",
      answer: "Dashboards sur mesure : dirigeant voit CA, marketing voit conversions, commercial voit origine leads."
    },
    {
      question: "Google Analytics 4 est trop compliqué, y a-t-il une alternative ?",
      answer: "GA4 reste incontournable. Nous le configurons + dashboards Looker Studio simplifiés."
    },
    {
      question: "Combien coûte un setup analytics complet PME ?",
      answer: "Setup complet 2,890 CHF : GA4, GTM, dashboards, formation. Accompagnement 590 CHF/mois."
    },
    {
      question: "Comment mesurer l'impact de mes posts LinkedIn ?",
      answer: "UTM automatiques + pixel conversion : clics → visites → contacts → ventes. ROI visible."
    },
    {
      question: "Comment prouver que mon site génère du business ?",
      answer: "Connexion web + CRM : visite → lead → devis → vente. Contribution digitale claire."
    }
  ]

  return (
    <div className="min-h-screen bg-black">

      {/* Progress Bars Sublimes */}
      <ScrollProgressIndicator />
      
      {/* HERO "OR DIGITAL" - WAR ROOM STYLE */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16 overflow-hidden">
        {/* Background Matrix Effect */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse" />
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse delay-1000" />
          <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* Pre-Header Mystérieux */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-400/10 border border-purple-400/20 text-purple-400 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse mr-2"></div>
              Salle de contrôle digitale OSOM
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-4xl md:text-8xl font-light text-white leading-tight mb-8">
              Pendant que vos concurrents <br/>
              <span className="text-purple-400 font-bold">devinent</span>,<br/>
              <span className="text-pink-400 font-bold">vous SAVEZ</span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 mb-8 max-w-4xl mx-auto font-light">
              Chaque clic révèle un indice sur votre prochain client.<br/>
              <span className="text-purple-400">L'or digital</span> caché dans vos données.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                href="/contact"
                className="inline-flex items-center px-12 py-6 rounded-2xl font-bold text-xl text-black transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-400/20"
                style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899, #f59e0b)' }}
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Révéler mes données cachées
              </Link>
            </div>
          </div>

          {/* RÉVÉLATIONS DRAMATIQUES */}
          <div className="max-w-6xl mx-auto mt-20">
            <div className="text-center mb-12">
              <p className="text-xl text-gray-400 mb-8">
                Combien de clients perdez-vous <span className="text-pink-400">sans le savoir</span> ?
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Révélation 1 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-6xl font-light text-purple-400 mb-4">73%</div>
                    <h3 className="text-xl text-white font-medium mb-3">Trafic "Fantôme"</h3>
                    <p className="text-gray-400 text-sm">
                      de votre trafic est marqué "Direct" alors qu'il vient 
                      de vos emails, réseaux sociaux, bouche-à-oreille...
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Révélation 2 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 to-orange-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-3xl p-8 border border-pink-400/30 hover:border-pink-400/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-6xl font-light text-pink-400 mb-4">?</div>
                    <h3 className="text-xl text-white font-medium mb-3">ROI Invisible</h3>
                    <p className="text-gray-400 text-sm">
                      Impossible de calculer le vrai retour sur investissement 
                      de vos actions marketing sans tracking complet
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Révélation 3 */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-yellow-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black/80 backdrop-blur-sm rounded-3xl p-8 border border-orange-400/30 hover:border-orange-400/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-6xl font-light text-orange-400 mb-4">∞</div>
                    <h3 className="text-xl text-white font-medium mb-3">Opportunités Perdues</h3>
                    <p className="text-gray-400 text-sm">
                      Vos concurrents qui trackent tout optimisent là 
                      où vous investissez à l'aveugle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* SERVICES TRACKING */}
      <section id="services" className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-light text-white mb-6">
              <span className="text-purple-400 font-bold">3 missions</span><br/>
              pour révéler l'invisible
            </h2>
            <p className="text-2xl text-gray-400 max-w-4xl mx-auto">
              Transformation de vos données en <span className="text-pink-400">or digital</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trackingServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-black/90 to-gray-900/90 rounded-3xl p-8 border border-gray-700/50 hover:border-purple-400/40 transition-all duration-300">
                <div className="w-12 h-12 mb-6 rounded-full bg-purple-400/20 flex items-center justify-center">
                  <IconeOSOM type={service.icon as any} size={24} color={service.color as any} ariaLabel={service.title} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* TARIFICATION TRACKING */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Investissement <span className="text-purple-400 font-bold">tracking</span>
            </h2>
            <p className="text-xl text-gray-400">
              Setup professionnel et accompagnement
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 rounded-3xl p-8 border border-gray-700/50">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Setup Analytics</h3>
              <div className="text-3xl font-bold text-white mb-4">2,890 CHF<span className="text-lg text-gray-400"> one-time</span></div>
              <ul className="space-y-3 text-gray-300">
                <li>• Configuration GA4 complète</li>
                <li>• Tag Manager structuré</li>
                <li>• Events et conversions custom</li>
                <li>• Dashboards exécutifs</li>
                <li>• Formation équipe (4h)</li>
                <li>• Documentation complète</li>
              </ul>
              <Link href="/contact?service=tracking-setup" className="block mt-6 text-center py-3 rounded-xl border border-purple-400/40 text-purple-400 hover:bg-purple-400/10 transition-all">
                Setup initial
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 rounded-3xl p-8 border border-purple-400/60 shadow-xl shadow-purple-400/10">
              <div className="bg-purple-400 text-black px-3 py-1 rounded-full text-sm font-bold inline-block mb-4">
                PLUS COMPLET
              </div>
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Setup + Suivi</h3>
              <div className="text-3xl font-bold text-white mb-4">2,890 CHF <span className="text-lg text-gray-400">+ 590 CHF/mois</span></div>
              <ul className="space-y-3 text-gray-300">
                <li>• Tout du pack Setup +</li>
                <li>• Monitoring continu</li>
                <li>• Rapports mensuels exécutifs</li>
                <li>• Recommandations d'optimisation</li>
                <li>• Support prioritaire</li>
                <li>• Alertes automatisées</li>
              </ul>
              <Link href="/contact?service=tracking-complet" className="block mt-6 text-center py-3 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 text-black font-bold hover:brightness-110 transition-all">
                Solution complète
              </Link>
            </div>
          </div>

          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-xl p-4 border border-green-400/30 mb-4">
              <div className="flex items-center justify-center space-x-2 mb-2">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-green-400 font-bold text-lg">Garantie Satisfait ou Remboursé</span>
              </div>
              <p className="text-gray-300 text-sm">
                Si nos dashboards ne révèlent pas d'insights actionnables dans les 60 premiers jours, 
                nous remboursons intégralement votre investissement. Nous sommes convaincus du pouvoir de vos données.
              </p>
            </div>
            <p className="text-gray-400 text-sm">
              Audit initial gratuit • Données propriétaires • Migration incluse si besoin
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-3xl p-12 border border-purple-400/30 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Révélez vos <span className="font-bold text-purple-400">données cachées</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Audit gratuit de votre setup actuel pour identifier 
              les opportunités d'amélioration immédiates.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-10 py-5 rounded-xl font-bold text-xl text-black transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
              >
                Audit tracking gratuit
              </Link>
              <Link
                href="/questionnaire"
                className="inline-block px-8 py-5 rounded-xl border border-pink-400/40 text-pink-400 hover:bg-pink-400/10 transition-all duration-300 text-lg"
              >
                Auto-diagnostic
              </Link>
            </div>

            <div className="mt-8 flex justify-center space-x-6 text-sm text-gray-400">
              <div>✓ Analyse gratuite</div>
              <div>✓ Diagnostic en 48h</div>
              <div>✓ Satisfait ou remboursé</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white">
              Questions sur le <span className="font-bold text-purple-400">tracking</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-black/40 rounded-xl border border-gray-700/50 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-purple-400/5 transition-colors"
                >
                  <h3 className="text-white pr-4">{faq.question}</h3>
                  <div className={`text-purple-400 text-xl transform transition-transform ${openFaq === index ? 'rotate-45' : ''}`}>
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