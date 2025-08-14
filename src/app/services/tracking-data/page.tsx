'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
import IconeOSOM from '@/components/IconeOSOM'

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
      question: "Pourquoi Google Analytics me montre-t-il 70% de trafic direct alors que personne ne tape mon URL ?",
      answer: "C'est le problème classique de l'attribution manquée. Vos visiteurs viennent d'emails, réseaux sociaux, ou cliquent sur des liens sans UTM. Google Analytics classe tout ça en 'direct' par défaut. Nous réparons cette attribution pour révéler vos vraies sources de trafic."
    },
    {
      question: "Comment savoir combien me coûte réellement chaque client acquis ?",
      answer: "Le coût d'acquisition client (CAC) nécessite un tracking multi-canal précis. Nous connectons vos dépenses publicitaires, temps équipe, coûts outils marketing avec les conversions réelles. Vous obtenez le vrai coût par client, pas juste le CPC Google Ads."
    },
    {
      question: "Mes rapports analytics sont incompréhensibles, comment simplifier ?",
      answer: "Nous créons des dashboards sur mesure selon votre rôle: le dirigeant voit chiffre d'affaires et tendances, le marketing voit conversions par canal, le commercial voit origine des leads. Finies les données noyées dans les métriques inutiles."
    },
    {
      question: "Peut-on tracker les clients qui appellent après avoir vu le site ?",
      answer: "Absolument. Nous utilisons le call tracking dynamique qui affiche un numéro unique par source de trafic. Vous savez si l'appel vient de Google, Facebook, ou un email. Plus de 'j'ai vu votre site' sans savoir d'où exactement."
    },
    {
      question: "Google Analytics 4 est trop compliqué, y a-t-il une alternative ?",
      answer: "GA4 est effectivement complexe mais reste incontournable pour l'écosystème Google. Nous le configurons correctement ET ajoutons des outils complémentaires comme Hotjar pour le comportement utilisateur ou des dashboards Looker Studio simplifiés."
    },
    {
      question: "Comment mesurer l'impact de mes posts LinkedIn sur les ventes ?",
      answer: "Nous mettons en place un système d'UTM automatiques et de pixel de conversion. Chaque post LinkedIn tracké nous montre: clics → visites site → demandes de contact → ventes fermées. Vous verrez enfin le ROI de votre personal branding."
    },
    {
      question: "Faut-il installer Google Tag Manager ou c'est trop technique ?",
      answer: "GTM est indispensable pour un tracking professionnel mais effectivement technique. Nous l'installons, le configurons et formons votre équipe aux modifications simples. Vous gardez le contrôle sans risquer de casser votre tracking."
    },
    {
      question: "Combien coûte un setup analytics complet pour une PME ?",
      answer: "Notre setup complet démarre à 2,890 CHF: installation GA4, GTM, dashboards, formation équipe. L'accompagnement mensuel est à 590 CHF. C'est un investissement qui se rentabilise dès le premier budget marketing mieux alloué."
    },
    {
      question: "Peut-on tracker les visiteurs qui reviennent sans cookies ?",
      answer: "Avec les nouvelles réglementations RGPD et la fin des cookies tiers, nous utilisons le tracking server-side et l'identification probabiliste. Vous continuez à suivre vos visiteurs récurrents même sans leur consentement cookies."
    },
    {
      question: "Comment prouver que mon site génère vraiment du business ?",
      answer: "Nous connectons vos données web avec votre CRM/facturation. Tracking complet: visite → lead → devis → vente → facturation. Vous voyez enfin la contribution exacte du digital à votre chiffre d'affaires, pas juste les 'j'ai vu votre site'."
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      
      {/* HERO STORYTELLING MODÉRÉ */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-400/10 via-pink-500/5 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">
            Comprendre d'où viennent <br/>
            <span className="text-purple-400 font-bold">vos clients</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Nous révélons la partie invisible de votre performance 
            avec un tracking précis et des rapports clairs.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Fini les zones d'ombre dans vos données. Découvrez enfin 
            quelles actions marketing génèrent vraiment des résultats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="inline-block px-10 py-5 rounded-xl font-bold text-xl text-black transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #a855f7, #ec4899)' }}
            >
              Auditer mon tracking
            </Link>
            <Link
              href="#services" 
              className="inline-flex items-center px-8 py-5 rounded-xl border border-purple-400/40 text-purple-400 hover:bg-purple-400/10 transition-all duration-300 text-lg font-medium"
            >
              Voir les solutions
            </Link>
          </div>

          {/* POINTS CLÉS AMÉLIORÉS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-400/10 to-purple-600/5 rounded-2xl p-6 border border-purple-400/20 text-center hover:border-purple-400/40 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Données complètes</h3>
              <p className="text-gray-400 text-sm">Captez 100% de votre performance réelle</p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-400/10 to-pink-600/5 rounded-2xl p-6 border border-pink-400/20 text-center hover:border-pink-400/40 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Attribution précise</h3>
              <p className="text-gray-400 text-sm">Sachez quel canal génère chaque client</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-400/10 to-cyan-600/5 rounded-2xl p-6 border border-cyan-400/20 text-center hover:border-cyan-400/40 transition-all duration-300">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Rapports clairs</h3>
              <p className="text-gray-400 text-sm">Tableaux de bord adaptés à votre équipe</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLÈME/SOLUTION STORYTELLING */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Le défi de la mesure
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              "Je sais que mes actions marketing fonctionnent, 
              mais je ne sais pas lesquelles exactement."
            </p>
          </div>

          <div className="bg-gradient-to-br from-black/60 to-gray-900/60 rounded-3xl p-8 border border-purple-400/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-light text-white mb-6">
                  Un <span className="text-purple-400">problème universel</span>
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  La plupart des entrepreneurs constatent des résultats 
                  mais ne savent pas précisément quels canaux les génèrent.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Trafic direct mal attribué, parcours clients complexes, 
                  conversions offline invisibles... Une partie importante 
                  de votre performance reste dans l'ombre.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Notre mission : éclairer ces zones d'ombre pour que vous 
                  investissiez vos efforts au bon endroit.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-black/40 rounded-xl p-6 border border-purple-400/20">
                  <div className="text-purple-400 font-medium mb-2">Diagnostic honnête</div>
                  <p className="text-gray-300">
                    Nous identifions vos angles morts actuels 
                    et les opportunités d'amélioration concrètes.
                  </p>
                </div>
                <div className="bg-black/40 rounded-xl p-6 border border-pink-400/20">
                  <div className="text-pink-400 font-medium mb-2">Setup progressif</div>
                  <p className="text-gray-300">
                    Installation méthodique d'un système de tracking 
                    qui grandit avec votre business.
                  </p>
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
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Notre approche <span className="text-purple-400 font-bold">tracking</span>
            </h2>
            <p className="text-xl text-gray-400">
              Trois étapes pour révéler votre performance réelle
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

      {/* EXEMPLE CONCRET - MODÉRÉ */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-purple-400/5 to-transparent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Un exemple <span className="text-purple-400 font-bold">concret</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 rounded-3xl p-8 border border-purple-400/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-purple-400 font-medium mb-4">Cas d'usage</div>
                <h3 className="text-2xl font-light text-white mb-4">
                  Entreprise de services B2B
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    <strong>Problème initial :</strong> 70% du trafic affiché comme "direct" 
                    sans pouvoir identifier les vraies sources d'acquisition.
                  </p>
                  <p>
                    <strong>Actions menées :</strong> Setup GA4 avancé, UTM systématiques, 
                    tracking offline, attribution multi-canal.
                  </p>
                  <p>
                    <strong>Résultat :</strong> Révélation des vrais canaux performants, 
                    réallocation budget marketing, amélioration ROI global.
                  </p>
                </div>
              </div>
              
              <div className="bg-black/40 rounded-2xl p-6 border border-gray-700/50">
                <div className="text-center mb-6">
                  <div className="text-purple-400 font-medium mb-2">Avant/Après</div>
                  <p className="text-gray-400 text-sm">Visibilité sur les sources</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Sessions attribuées</span>
                    <span className="text-red-400">30% → <span className="text-green-400">85%</span></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">ROI marketing visible</span>
                    <span className="text-red-400">Partiel → <span className="text-green-400">Complet</span></span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Décisions data-driven</span>
                    <span className="text-red-400">Intuition → <span className="text-green-400">Factuel</span></span>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-700/50 text-center">
                  <p className="text-gray-400 text-sm">
                    Résultats observés sur 4 mois d'implémentation
                  </p>
                </div>
              </div>
            </div>
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