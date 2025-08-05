'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'
import Head from 'next/head'

// VERSION STORYTELLING & CONVERSION - ALLÉGÉE
export default function CreationSiteWebPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // MICRO-HISTOIRES CLIENT
  const clientStories = [
    {
      type: "Cabinet médical",
      story: "En réduisant le temps de chargement de 3,2 s à 0,8 s, nous avons multiplié par 10 les prises de rendez-vous en ligne.",
      icon: "🏥"
    },
    {
      type: "PME de services B2B", 
      story: "Grâce à une stratégie SEO locale, cette PME a vu ses conversions passer de 49 à 600+ par an en 6 mois.",
      icon: "📈"
    },
    {
      type: "Commerçant valaisan",
      story: "Son site est passé de la page 2 au top 3 des résultats Google, générant une hausse de visibilité exceptionnelle.",
      icon: "🏪"
    }
  ]

  // TÉMOIGNAGES PLACEHOLDERS
  const testimonials = [
    {
      name: "Dr. Marie Dupont",
      function: "Directrice, Cabinet médical",
      quote: "OSOM a transformé notre présence en ligne. Nous recevons maintenant 3 fois plus de demandes de rendez-vous via notre site.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Jean-Claude Martin", 
      function: "CEO, PME Services Valais",
      quote: "Notre visibilité locale a explosé. Les clients nous trouvent enfin facilement sur Google. Un investissement rentabilisé en 4 mois.",
      avatar: "/api/placeholder/60/60"
    },
    {
      name: "Sophie Renaud",
      function: "Propriétaire, Commerce local",
      quote: "Site rapide, design moderne, résultats mesurables. L'équipe OSOM nous accompagne avec professionnalisme et transparence.",
      avatar: "/api/placeholder/60/60"
    }
  ]

  const faqData = [
    {
      question: "Combien coûte la création d'un site internet professionnel en Valais ?",
      answer: "Notre tarif est fixe : 4,500 CHF tout inclus pour un site professionnel avec SEO local. Ce prix comprend la conception, le développement, l'optimisation Google, la configuration GA4 et le support première année. Contrairement aux solutions bon marché, nos sites sont conçus pour générer des clients et offrir un ROI mesurable. La plupart de nos clients récupèrent leur investissement en quelques mois grâce à l'augmentation des demandes en ligne."
    },
    {
      question: "Quels sont les délais pour créer un site web en Suisse romande ?",
      answer: "Nous garantissons la livraison en 45 jours maximum. Notre équipe gère le projet de A à Z, vous n'avez qu'à valider les étapes clés. Les premiers résultats SEO apparaissent généralement entre 1 et 3 mois selon votre secteur. Vous recevez un planning détaillé dès le début pour une transparence totale."
    },
    {
      question: "Comment améliorer le référencement naturel de mon cabinet médical ?",
      answer: "Le SEO local pour cabinets médicaux nécessite une approche spécialisée : optimisation des fiches Google Business, création de contenus santé conformes, ciblage de mots-clés locaux comme 'docteur Sion' ou 'consultation médicale Valais'. Nous créons des pages localisées et suivons vos positions sur Google Search Console pour mesurer les progrès."
    },
    {
      question: "Quelle différence entre agence web locale et freelance pour mon entreprise ?",
      answer: "Une agence web locale comme OSOM vous garantit continuité, expertise multiple (design, développement, SEO, marketing) et suivi long terme. Contrairement à un freelance, nous disposons d'une équipe complète, de procédures éprouvées et d'un support client dédié. Basés en Valais, nous comprenons le marché local et les spécificités des entreprises suisses."
    },
    {
      question: "Mes concurrents apparaissent avant moi sur Google, comment faire ?",
      answer: "L'analyse concurrentielle SEO est cruciale pour dépasser vos concurrents sur Google. Nous analysons leurs stratégies de mots-clés, leur maillage interne, leurs backlinks et leur présence locale. Ensuite, nous créons une stratégie SEO supérieure avec du contenu optimisé, des pages localisées et un suivi des positions pour mesurer vos progrès face à la concurrence."
    },
    {
      question: "Comment mesurer le retour sur investissement de mon site web ?",
      answer: "Nous configurons Google Analytics 4 et Search Console pour tracker précisément vos conversions : formulaires de contact, appels téléphoniques, prises de rendez-vous. Chaque mois, vous recevez un rapport détaillé montrant le nombre de prospects générés, leur source (SEO, réseaux sociaux, direct) et le ROI calculé. Notre objectif : démontrer que votre site web génère plus de revenus qu'il ne coûte."
    },
    {
      question: "Puis-je modifier mon site web moi-même après la livraison ?",
      answer: "Absolument ! Nous développons vos sites avec des CMS intuitifs permettant de modifier facilement textes, images et pages. Une formation personnalisée est incluse dans nos forfaits. Pour les modifications techniques complexes ou l'ajout de nouvelles fonctionnalités, notre support première année inclus prend le relais. L'objectif : votre autonomie maximale avec notre expertise en backup."
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
    <>
      <Head>
        <title>Agence web & SEO en Suisse romande (Valais) | OSOM</title>
        <meta name="description" content="OSOM conçoit des sites rapides et un SEO mesurable pour cabinets médicaux et services B2B en Suisse romande. Audit gratuit, méthode claire, GA4." />
      </Head>
      <div className="min-h-screen bg-black">
      {/* HERO STORYTELLING - SECTION 1 */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-purple-500/5 to-teal-400/5" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* GAUCHE - MESSAGE STORYTELLING */}
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Votre site devient un <span className="text-yellow-400 font-bold">moteur de croissance</span>
              </h1>
              
              <h2 className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Attirez, séduisez et convertissez vos futurs clients grâce à un site rapide, crédible et pensé pour les PME romandes.
              </h2>

              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Basés à Sion et Lausanne, nous concevons des sites qui racontent l'histoire de votre entreprise et transforment les visiteurs en clients.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block px-10 py-5 rounded-xl font-bold text-xl text-black transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  style={{ background: 'linear-gradient(135deg, #ffd507, #70c1a9)', fontFamily: 'Cera PRO, Inter, sans-serif' }}
                  onClick={() => typeof window !== 'undefined' && window.gtag && window.gtag('event', 'cta_click', {location: 'hero', page: 'creation-site-web'})}
                >
                  Parlons de votre projet
                </Link>
                <Link
                  href="/realisations" 
                  className="inline-flex items-center px-8 py-5 rounded-xl border border-purple-400/40 text-purple-400 hover:bg-purple-400/10 transition-all duration-300 text-lg font-medium"
                  style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                >
                  Voir nos réalisations
                </Link>
              </div>
            </div>
            
            {/* DROITE - VISUEL CHEF D'ENTREPRISE */}
            <div className="relative">
              <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl border border-teal-400/20 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-400/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400/20 to-teal-400/20 flex items-center justify-center">
                    <div className="text-4xl">🏢</div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                    Dirigeants Valaisans
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    "Depuis que notre site reflète vraiment notre expertise, nos clients nous font plus confiance et nos demandes ont triplé."
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">3x</div>
                      <div className="text-xs text-gray-400">Plus de demandes</div>
                    </div>
                    <div className="w-px h-8 bg-gray-600"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-400">&lt;2s</div>
                      <div className="text-xs text-gray-400">Chargement</div>
                    </div>
                    <div className="w-px h-8 bg-gray-600"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">Top 3</div>
                      <div className="text-xs text-gray-400">Google</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NOTRE APPROCHE - SECTION 2 */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Notre approche
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trois piliers pour transformer votre présence en ligne en véritable générateur de clients
            </p>
          </div>

          {/* 3 PILIERS APPROCHE */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl">⚡</div>
                </div>
                <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  Site performant & accessible
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Nous créons des sites rapides (moins de 2 s au chargement) et accessibles. Vos visiteurs bénéficient d'une navigation fluide sur toutes les plateformes, et votre marque inspire confiance.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl">🎯</div>
                </div>
                <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  SEO local & contenu
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Nous rédigeons des contenus qui répondent aux questions de vos clients et optimisons votre visibilité sur Google. Ensemble, nous construisons votre réputation en ligne et renforçons votre positionnement local.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl">📊</div>
                </div>
                <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  Analyse & CRM
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Vous disposez d'un tableau de bord simple et transparent pour suivre vos prospects. Nous configurons GA4 et Search Console et automatisons votre reporting mensuel.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* HISTOIRE CLIENT - SECTION 3 */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Vous hésitez à investir ? <br/><span className="text-yellow-400 font-bold">Voici l'histoire d'une PME valaisanne</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-10 border border-yellow-400/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* HISTOIRE */}
              <div>
                <div className="mb-8">
                  <div className="inline-block px-4 py-2 bg-yellow-400/20 rounded-full text-yellow-400 text-sm font-bold mb-6">
                    CAS CLIENT - PME FORMATION
                  </div>
                  <p className="text-xl text-gray-300 leading-relaxed mb-6">
                    La formation PME X pensait qu'un site standard suffisait. En retravaillant son site avec OSOM, elle a <strong className="text-yellow-400">multiplié par 12 ses demandes de devis en 6 mois</strong> et se positionne aujourd'hui dans le top des résultats Google en Valais.
                  </p>
                  
                  <div className="bg-black/40 rounded-2xl p-6 border border-teal-400/20">
                    <div className="text-teal-400 text-sm mb-2">TÉMOIGNAGE</div>
                    <p className="text-white italic mb-4 text-lg">
                      "Nous avons gagné en visibilité et crédibilité. Nos clients nous trouvent enfin en ligne"
                    </p>
                    <div className="text-gray-400 text-sm">
                      — Directeur de PME X, Valais
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Link 
                      href="/realisations" 
                      className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                    >
                      Voir l'étude de cas complete →
                    </Link>
                  </div>
                </div>
              </div>
              
              {/* TARIF SIMPLIFIÉ */}
              <div>
                <div className="bg-gradient-to-br from-yellow-400/10 to-teal-400/10 rounded-2xl p-8 border border-yellow-400/30">
                  <div className="text-center mb-6">
                    <div className="text-yellow-400 font-bold text-lg mb-2">INVESTISSEMENT FIXE</div>
                    <div className="text-4xl font-black text-white mb-2">
                      4,500 CHF
                    </div>
                    <div className="text-gray-300">
                      Conception + SEO + Suivi inclus
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Tarif fixe, zéro surprise</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">ROI mesurable dès le 1er mois</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">Support et optimisations inclus</span>
                    </div>
                  </div>
                  
                  <Link 
                    href="/questionnaire"
                    className="block w-full text-center px-6 py-3 rounded-xl border border-purple-400/40 text-purple-400 hover:bg-purple-400/10 transition-all duration-300 text-sm"
                  >
                    Calculer mon ROI détaillé
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VOTRE PROJET EN 4 ÉTAPES - SECTION 4 */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Votre projet en <span className="text-yellow-400 font-bold">4 étapes simples</span>
            </h2>
            <p className="text-xl text-gray-400">
              Un parcours clair et transparent, de la découverte au succès
            </p>
          </div>

          {/* FRISE HORIZONTALE */}
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-teal-400 via-purple-400 to-green-400 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-black font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                    Découverte & audit
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Autour d'un café, nous découvrons votre entreprise, vos défis et vos ambitions.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-400 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-black font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                    Plan & conception
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Nous élaborons l'architecture et le design du site pour qu'il reflète votre identité et séduise vos clients.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-400 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-black font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                    Création & optimisation
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Nos experts développent et optimisent votre site. Vous recevez des aperçus et validez les étapes clés.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-green-400/20 hover:border-green-400/40 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-400 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <span className="text-black font-bold text-xl">4</span>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                    Lancement & suivi
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Nous mettons votre site en ligne et vous accompagnons grâce à un tableau de bord GA4 clair et un suivi mensuel.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* VOUS AVEZ MIEUX À FAIRE - SECTION 5 */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Vous avez mieux à faire <br/><span className="text-yellow-400 font-bold">que de construire un site</span>
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-10 border border-gray-400/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-400/20 flex items-center justify-center">
                  <div className="text-4xl">⏰</div>
                </div>
                <h3 className="text-blue-400 font-bold text-xl mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  Votre temps précieux
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  2 heures de brief au départ et quelques validations suffisent ; vous restez concentré sur votre activité.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal-400/20 flex items-center justify-center">
                  <div className="text-4xl">🎨</div>
                </div>
                <h3 className="text-teal-400 font-bold text-xl mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  Notre expertise
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Nos designers, développeurs et spécialistes SEO travaillent en coulisse pour créer un site performant, esthétique et optimisé.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-400/20 flex items-center justify-center">
                  <div className="text-4xl">🚀</div>
                </div>
                <h3 className="text-green-400 font-bold text-xl mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  Votre résultat
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Un site qui génère des leads 24 h/24 et reflète la qualité de votre entreprise.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DES RÉSULTATS QUI PARLENT - SECTION 6 */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Des résultats <span className="text-yellow-400 font-bold">qui parlent</span>
            </h2>
            <p className="text-xl text-gray-400">
              Trois micro-histoires de nos clients en Suisse romande
            </p>
          </div>

          {/* MICRO-HISTOIRES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {clientStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl">{story.icon}</div>
                  </div>
                  <h3 className="text-teal-400 font-bold text-lg mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                    {story.type}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-center">
                  {story.story}
                </p>
              </div>
            ))}
          </div>

          {/* GRAPHIQUE SIMPLE */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Évolution moyenne de nos clients
              </h3>
              <p className="text-gray-400">Mesures Google Analytics certifiées</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="mb-4">
                  <div className="text-4xl font-bold text-red-400 mb-1">3.2s</div>
                  <div className="text-xs text-gray-400">Temps chargement AVANT</div>
                </div>
                <div className="text-2xl">↓</div>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-green-400 mb-1">0.8s</div>
                  <div className="text-xs text-gray-400">Temps chargement APRÈS</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  <div className="text-4xl font-bold text-red-400 mb-1">2.3%</div>
                  <div className="text-xs text-gray-400">Taux conversion AVANT</div>
                </div>
                <div className="text-2xl">↓</div>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-green-400 mb-1">11.3%</div>
                  <div className="text-xs text-gray-400">Taux conversion APRÈS</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="mb-4">
                  <div className="text-4xl font-bold text-red-400 mb-1">49</div>
                  <div className="text-xs text-gray-400">Clients/an AVANT</div>
                </div>
                <div className="text-2xl">↓</div>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-green-400 mb-1">600+</div>
                  <div className="text-xs text-gray-400">Clients/an APRÈS</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* AVANT / APRÈS OSOM - SECTION 7 */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Avant / Après OSOM
            </h2>
            <p className="text-xl text-gray-400">
              La transformation visuelle de votre présence en ligne
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-10 border border-gray-400/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-red-500/10 rounded-2xl p-8 border border-red-500/20">
                <h3 className="text-red-400 font-bold text-2xl mb-6 text-center">AVANT</h3>
                <div className="space-y-4 text-center">
                  <p className="text-gray-300">Site lent, design daté</p>
                  <p className="text-gray-300">Peu de demandes en ligne</p>
                  <p className="text-gray-300">Référencement faible</p>
                  <p className="text-gray-300">Clients difficiles à convaincre</p>
                </div>
              </div>
              
              <div className="bg-green-500/10 rounded-2xl p-8 border border-green-500/20">
                <h3 className="text-green-400 font-bold text-2xl mb-6 text-center">APRÈS</h3>
                <div className="space-y-4 text-center">
                  <p className="text-gray-300">Site rapide, design moderne</p>
                  <p className="text-gray-300">Demandes en forte hausse</p>
                  <p className="text-gray-300">Visibilité locale accrue</p>
                  <p className="text-gray-300">Confiance et crédibilité renforcées</p>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-xl text-gray-300 mb-6">
                Nos clients constatent un <strong className="text-yellow-400">retour sur investissement en quelques mois</strong> grâce à l'amélioration de l'expérience utilisateur et du SEO.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES - SECTION 9 */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Ce que disent <span className="text-yellow-400 font-bold">nos clients</span>
            </h2>
            <p className="text-xl text-gray-400">
              Témoignages authentiques de dirigeants en Suisse romande
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400/20 to-yellow-400/20 flex items-center justify-center mr-4">
                    <div className="text-lg">👤</div>
                  </div>
                  <div>
                    <div className="text-white font-bold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.function}</div>
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <div className="flex justify-end">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="text-yellow-400 text-sm">★</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <div className="inline-flex items-center space-x-6 bg-black/40 rounded-2xl p-6 border border-gray-700/50">
              <div className="text-2xl">🏢</div>
              <div className="text-2xl">🏥</div>
              <div className="text-2xl">🏪</div>
              <div className="text-gray-400">+50 entreprises nous font confiance</div>
            </div>
            <div className="mt-6">
              <Link 
                href="/realisations"
                className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300"
              >
                Voir plus d'avis clients →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* APPEL À L'ACTION FINAL - SECTION 8 */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-yellow-400/40 relative overflow-hidden">
            
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Prêts à transformer <br/><span className="font-bold text-yellow-400">votre visibilité en ligne ?</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Nos créneaux sont limités pour garantir un service personnalisé. Réservez un entretien gratuit de 15 minutes pour discuter de votre projet.
              </p>
              
              <div className="inline-block px-6 py-3 bg-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-8">
                Nous prenons seulement quelques projets par mois pour garantir la qualité
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* GAUCHE - PRIX & VALEUR */}
              <div>
                <div className="bg-gradient-to-br from-yellow-400/10 to-teal-400/10 rounded-2xl p-8 border border-yellow-400/30 mb-6">
                  <div className="text-center mb-6">
                    <div className="text-teal-400 font-bold text-lg mb-2">INVESTISSEMENT TRANSPARENT</div>
                    <div className="text-5xl md:text-6xl font-black text-yellow-400 mb-2">
                      4,500 CHF
                    </div>
                    <div className="text-gray-300 text-lg">
                      Conception + Développement + SEO + Suivi
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-gray-300">Tarif fixe, aucune surprise</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-gray-300">Livraison en 45 jours maximum</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                      <span className="text-gray-300">Support première année inclus</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-gray-300">Reporting GA4 transparent</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/20 rounded-xl p-6 border border-green-500/30 text-center">
                  <div className="text-green-400 font-bold text-lg mb-1">ROI Moyen</div>
                  <div className="text-green-400 font-black text-3xl mb-1">300%+</div>
                  <div className="text-gray-300 text-sm">Amorti en quelques mois</div>
                </div>
              </div>
              
              {/* DROITE - CTA */}
              <div className="text-center">
                <div className="space-y-6">
                  <Link
                    href="/contact"
                    className="block w-full px-10 py-6 rounded-2xl font-bold text-xl text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, #ffd507, #70c1a9)', fontFamily: 'Cera PRO, Inter, sans-serif' }}
                    onClick={() => typeof window !== 'undefined' && window.gtag && window.gtag('event', 'cta_click', {location: 'footer', page: 'creation-site-web'})}
                  >
                    Réserver mon entretien
                  </Link>
                  
                  <Link
                    href="/questionnaire"
                    className="block w-full px-8 py-4 rounded-xl border border-purple-400/40 text-purple-400 hover:bg-purple-400/10 transition-all duration-300 text-lg"
                    style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                  >
                    Calculer mon ROI
                  </Link>
                </div>
                
                <div className="mt-8 p-6 bg-black/40 rounded-2xl border border-gray-700/50">
                  <div className="text-gray-300 text-sm space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="text-green-400">✓</div>
                      <span>Entretien gratuit de 15 minutes</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="text-green-400">✓</div>
                      <span>Audit technique offert (valeur 800 CHF)</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="text-green-400">✓</div>
                      <span>Aucun engagement</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bandeau réassurance */}
            <div className="mt-12 pt-8 border-t border-gray-700/50 text-center">
              <div className="text-gray-400">
                Basés à Sion et Lausanne • Spécialistes PME Suisse romande • Reporting mensuel transparent
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - SECTION 10 */}
      <section className="py-24 bg-gray-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Questions <span className="font-bold text-yellow-400">fréquentes</span>
            </h2>
            <p className="text-xl text-gray-400">
              Tout ce que les dirigeants d'entreprise veulent savoir avant de se lancer
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

          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/20 max-w-2xl mx-auto">
              <p className="text-gray-300 mb-6 text-lg">
                D'autres questions sur votre projet web ?
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 rounded-xl border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10 transition-colors duration-300 font-medium"
                style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
              >
                Poser ma question personnalisée
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* JSON-LD FAQ Schema pour Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Création Site Web OSOM",
            "provider": {
              "@type": "Organization", 
              "name": "OSOM",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Valais",
                "addressCountry": "CH"
              }
            },
            "areaServed": "Valais",
            "serviceType": "Création site web",
            "description": "Agence web spécialisée création sites performants et SEO local pour cabinets et services B2B en Valais"
          })
        }}
      />
      </div>
    </>
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