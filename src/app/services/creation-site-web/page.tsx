'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'
import IconeOSOM from '@/components/IconeOSOM'

export default function CreationSiteWebPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selectedTier, setSelectedTier] = useState<'tier2'>('tier2')
  
  // PRICING TIERS SAAS STYLE - MODÉRÉ
  const pricingTiers = [
    {
      id: 'tier1',
      name: 'ESSENTIEL',
      price: '1,990',
      description: 'Présence digitale professionnelle',
      features: [
        'Site 5 pages responsive',
        'Performance optimisée',
        'SEO technique de base',
        'Google Analytics configuré',
        'Formulaire de contact sécurisé',
        'Formation utilisation incluse',
        'Livraison sous 3 semaines',
        'Support technique 3 mois'
      ],
      cta: 'Commencer simplement',
      popular: false,
      color: 'cyan'
    },
    {
      id: 'tier2',
      name: 'CROISSANCE',
      price: '4,990',
      description: 'Solution complète pour développer',
      features: [
        'Tout du pack Essentiel +',
        'Pages illimitées',
        'Stratégie SEO local approfondie',
        'Rédaction de contenus optimisés',
        'Intégration outils métier',
        'Tableau de bord analytics',
        'Livraison sous 6 semaines',
        'Support prioritaire 12 mois',
        'Accompagnement stratégique'
      ],
      cta: 'Solution recommandée',
      popular: true,
      color: 'yellow'
    },
    {
      id: 'tier3',
      name: 'SUR MESURE',
      price: 'Devis personnalisé',
      description: 'Pour projets spécifiques',
      features: [
        'Architecture personnalisée',
        'Intégrations complexes',
        'Migration de données',
        'Sites multilingues',
        'Fonctionnalités avancées',
        'Équipe projet dédiée',
        'Planning adapté',
        'Maintenance continue'
      ],
      cta: 'Discutons de votre projet',
      popular: false,
      color: 'purple'
    }
  ]

  const faqData = [
    {
      question: "Comment choisir entre les différents packs ?",
      answer: "Le pack ESSENTIEL convient parfaitement pour établir une première présence professionnelle en ligne. Le pack CROISSANCE est idéal si vous souhaitez développer activement votre acquisition client. Le SUR MESURE s'adresse aux projets avec des besoins techniques spécifiques. Nous pouvons en discuter ensemble pour identifier la meilleure option."
    },
    {
      question: "En combien de temps puis-je espérer des résultats ?",
      answer: "Les améliorations techniques sont immédiates dès la mise en ligne. Pour le référencement naturel, les premiers résultats apparaissent généralement entre 2 et 4 mois. L'acquisition client se développe progressivement selon votre secteur et votre implication dans la stratégie digitale."
    },
    {
      question: "Pourrai-je gérer mon site de manière autonome ?",
      answer: "Absolument. Nous formons systématiquement nos clients à l'utilisation de leur site. Vous pourrez modifier textes et images facilement. Pour les aspects techniques, notre support reste disponible selon votre formule."
    },
    {
      question: "Quelles garanties proposez-vous ?",
      answer: "Nous garantissons un site performant techniquement avec un score de performance élevé. Satisfaction ou ajustements gratuits pendant 30 jours. Le support technique est inclus selon votre pack. Nous restons à vos côtés pour assurer le succès de votre projet digital."
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      
      {/* HERO STORYTELLING MODÉRÉ */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8">
            Un site web qui travaille <br/>
            <span className="text-yellow-400 font-bold">pour votre entreprise</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Nous concevons des sites qui reflètent votre expertise 
            et facilitent le contact avec vos futurs clients.
          </p>

          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Basés en Valais, nous accompagnons les entreprises romandes 
            dans leur développement digital avec une approche pragmatique et mesurée.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="#pricing"
              className="inline-block px-10 py-5 rounded-xl font-bold text-xl text-black transition-all duration-300 hover:scale-105"
              style={{ background: 'linear-gradient(135deg, #ffd507, #70c1a9)' }}
            >
              Découvrir nos solutions
            </Link>
            <Link
              href="/contact" 
              className="inline-flex items-center px-8 py-5 rounded-xl border border-purple-400/40 text-purple-400 hover:bg-purple-400/10 transition-all duration-300 text-lg font-medium"
            >
              Échanger sur votre projet
            </Link>
          </div>

          {/* POINTS CLÉS MODÉRÉS */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">Transparence</div>
              <div className="text-sm text-gray-400">Prix fixes, sans surprise</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-teal-400">Proximité</div>
              <div className="text-sm text-gray-400">Équipe locale disponible</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">Résultats</div>
              <div className="text-sm text-gray-400">Suivi mensuel inclus</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PROBLÈME/SOLUTION STORYTELLING */}
      <section className="py-24 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Nous comprenons vos défis
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Beaucoup d'entreprises ont un site qui ne génère pas de contacts. 
              C'est frustrant d'investir sans voir de retour concret.
            </p>
          </div>

          <div className="bg-gradient-to-br from-black/60 to-gray-900/60 rounded-3xl p-8 border border-yellow-400/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-light text-white mb-6">
                  <span className="text-yellow-400">L'histoire</span> de nombreux dirigeants
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  "Mon site actuel ne m'apporte aucun client. Les visiteurs ne me contactent pas. 
                  Je sais qu'il faut le refaire mais je ne sais pas par où commencer."
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Cette situation vous parle ? Vous n'êtes pas seul. 
                  La plupart des sites d'entreprise sont conçus comme des brochures digitales 
                  plutôt que comme des outils d'acquisition.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Notre approche : transformer votre site en point de contact naturel 
                  entre votre expertise et les besoins de vos clients.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-black/40 rounded-xl p-6 border border-teal-400/20">
                  <div className="text-teal-400 font-medium mb-2">Notre différence</div>
                  <p className="text-gray-300">
                    Nous ne créons pas juste de beaux sites. Nous construisons 
                    des parcours qui guident naturellement vos visiteurs vers la prise de contact.
                  </p>
                </div>
                <div className="bg-black/40 rounded-xl p-6 border border-purple-400/20">
                  <div className="text-purple-400 font-medium mb-2">Votre implication</div>
                  <p className="text-gray-300">
                    Un brief initial de 2 heures et quelques validations. 
                    Nous gérons le reste pendant que vous vous concentrez sur votre métier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION SAAS STYLE MODÉRÉE */}
      <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Nos formules <span className="text-yellow-400 font-bold">transparentes</span>
            </h2>
            <p className="text-xl text-gray-400">
              Choisissez selon vos objectifs et votre budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier) => (
              <div 
                key={tier.id}
                className={`relative bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border transition-all duration-300 hover:scale-105 ${
                  tier.popular 
                    ? 'border-yellow-400/60 shadow-2xl shadow-yellow-400/20' 
                    : 'border-gray-700/50 hover:border-gray-600/50'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      PLUS CHOISI
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className={`text-2xl font-bold mb-2 ${
                    tier.color === 'yellow' ? 'text-yellow-400' :
                    tier.color === 'cyan' ? 'text-cyan-400' :
                    'text-purple-400'
                  }`}>
                    {tier.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{tier.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    {tier.price}
                    {tier.id !== 'tier3' && <span className="text-2xl text-gray-400"> CHF</span>}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        tier.popular ? 'bg-yellow-400/20' : 'bg-gray-700/50'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          tier.popular ? 'bg-yellow-400' : 'bg-gray-400'
                        }`}></div>
                      </div>
                      <span className={`text-sm ${
                        index === 0 && tier.id !== 'tier1' ? 'text-green-400 font-medium' : 'text-gray-300'
                      }`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={tier.id === 'tier3' ? '/contact' : `/contact?pack=${tier.id}`}
                  className={`block w-full text-center py-4 rounded-xl font-bold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:brightness-110'
                      : 'border border-gray-600 text-gray-300 hover:bg-gray-800'
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 text-sm">
              Tous nos sites incluent : Hébergement sécurisé • Certificat SSL • Conformité RGPD • Design responsive
            </p>
          </div>
        </div>
      </section>

      {/* PROCESSUS SIMPLIFIÉ */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Un processus <span className="text-yellow-400 font-bold">clair et maîtrisé</span>
            </h2>
            <p className="text-xl text-gray-400">
              De notre première discussion à la mise en ligne
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Découverte', desc: 'Nous écoutons vos besoins et objectifs', color: 'yellow' },
              { num: '2', title: 'Conception', desc: 'Maquettes et architecture validées ensemble', color: 'cyan' },
              { num: '3', title: 'Réalisation', desc: 'Développement avec points réguliers', color: 'purple' },
              { num: '4', title: 'Lancement', desc: 'Mise en ligne et formation à l\'utilisation', color: 'green' }
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${step.color}-400/20 border border-${step.color}-400/40 flex items-center justify-center`}>
                  <span className={`text-${step.color}-400 font-bold text-xl`}>{step.num}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXEMPLES DE RÉALISATIONS - MODÉRÉS */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4">
              Des résultats <span className="text-yellow-400 font-bold">concrets</span>
            </h2>
            <p className="text-xl text-gray-400">
              Quelques exemples de transformations réussies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                sector: 'Cabinet médical', 
                challenge: 'Agenda vide malgré bonne réputation locale',
                result: 'Les prises de rendez-vous en ligne ont progressivement augmenté',
                key: 'Visibilité locale renforcée'
              },
              { 
                sector: 'Entreprise B2B', 
                challenge: 'Dépendance totale au réseau personnel',
                result: 'Développement d\'un flux régulier de demandes qualifiées',
                key: 'Acquisition digitale activée'
              },
              { 
                sector: 'Cabinet conseil', 
                challenge: 'Site invisible sur Google',
                result: 'Apparition progressive en première page sur mots-clés métier',
                key: 'Référencement amélioré'
              }
            ].map((story, index) => (
              <div key={index} className="bg-black/60 rounded-2xl p-6 border border-teal-400/20">
                <div className="text-teal-400 font-medium mb-3">{story.sector}</div>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">Défi :</span>
                    <p className="text-gray-300">{story.challenge}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Résultat :</span>
                    <p className="text-gray-300">{story.result}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-700/50">
                  <div className="text-yellow-400 font-medium text-sm">{story.key}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400">
              Chaque projet est unique. Les résultats varient selon le secteur, 
              la concurrence et l'implication dans la stratégie digitale.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES - SIMPLE ET FACTUEL */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white mb-4">
              Une base technique <span className="text-yellow-400 font-bold">solide</span>
            </h2>
            <p className="text-gray-400">
              Nous utilisons des technologies modernes et éprouvées
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Next.js', desc: 'Framework moderne' },
              { name: 'TypeScript', desc: 'Code robuste' },
              { name: 'Analytics', desc: 'Suivi détaillé' },
              { name: 'Performance', desc: 'Chargement rapide' }
            ].map((tech) => (
              <div key={tech.name} className="text-center">
                <div className="text-yellow-400 font-bold">{tech.name}</div>
                <div className="text-gray-500 text-sm">{tech.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL - INVITATION DOUCE */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-yellow-400/10 to-teal-400/10 rounded-3xl p-12 border border-yellow-400/30 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Parlons de <span className="font-bold text-yellow-400">votre projet</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Un échange sans engagement pour comprendre vos besoins 
              et voir comment nous pourrions vous accompagner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-10 py-5 rounded-xl font-bold text-xl text-black transition-all duration-300 hover:scale-105"
                style={{ background: 'linear-gradient(135deg, #ffd507, #70c1a9)' }}
              >
                Prendre rendez-vous
              </Link>
              <Link
                href="#pricing"
                className="inline-block px-8 py-5 rounded-xl border border-purple-400/40 text-purple-400 hover:bg-purple-400/10 transition-all duration-300 text-lg"
              >
                Revoir les formules
              </Link>
            </div>

            <div className="mt-8 flex justify-center space-x-8 text-sm text-gray-400">
              <div>✓ Sans engagement</div>
              <div>✓ Écoute de vos besoins</div>
              <div>✓ Conseils personnalisés</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - QUESTIONS NATURELLES */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-white">
              Questions <span className="font-bold text-yellow-400">fréquentes</span>
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

          <div className="text-center mt-12">
            <p className="text-gray-400">
              D'autres questions ? N'hésitez pas à nous contacter pour en discuter.
            </p>
          </div>
        </div>
      </section>

    </div>
  )
}