'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import React from 'react'
import Head from 'next/head'
import IconeOSOM from '@/components/IconeOSOM'

// VERSION STORYTELLING & CONVERSION - ALLÉGÉE
export default function CreationSiteWebPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  
  // MICRO-HISTOIRES CLIENT PREMIUM AVEC PICTOGRAMMES
  const clientStories = [
    {
      type: "Cabinet médical",
      sector: "Santé",
      problem: "Faible visibilité locale, RDV limités au bouche-à-oreille",
      solution: "Site performant + SEO local + optimisation prise RDV",
      result: "Multiplication par 10 des prises de rendez-vous en ligne",
      keyMetric: "10x RDV",
      icon: "medical",
      svg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`
    },
    {
      type: "Société d'ingénierie B2B", 
      sector: "Industrie B2B",
      problem: "Peu de leads qualifiés, funnel de conversion défaillant",
      solution: "Refonte site + stratégie acquisition + CRM automatisé",
      result: "Croissance chiffre d'affaires +280% et 600+ leads qualifiés/an",
      keyMetric: "280% CA",
      icon: "engineering",
      svg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.828 14.828a4 4 0 0 1-5.656 0M9 10h1l4 4 4-4h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1l-4 4-4-4H9a2 2 0 0 1-2-2v-1c0-1.1.9-2 2-2z"/></svg>`
    },
    {
      type: "Cabinet de conseil Valais",
      sector: "Conseil",
      problem: "Positionnement Google faible, crédibilité insuffisante",
      solution: "Design premium + content marketing + autorité sectorielle",
      result: "Passage page 2 au top 3 Google + multiplication des mandats",
      keyMetric: "Top 3 Google",
      icon: "consulting",
      svg: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`
    }
  ]

  // TÉMOIGNAGES PREMIUM AVEC SECTEURS
  const testimonials = [
    {
      name: "Dr. Marie Fontana",
      function: "Directrice Médicale",
      company: "Cabinet Médical Sion",
      sector: "Santé",
      quote: "OSOM a transformé notre acquisition de patients. Notre planning s'est rempli naturellement grâce au référencement local. Un partenariat de confiance qui génère des résultats mesurables.",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      verified: true
    },
    {
      name: "Jean-Pierre Moreau", 
      function: "CEO & Fondateur",
      company: "Solutions Industrielles SA",
      sector: "Industrie B2B",
      quote: "En 6 mois, notre chiffre d'affaires a progressé de 280% grâce au nouveau système d'acquisition. OSOM comprend les enjeux des dirigeants et livre des solutions qui transforment l'entreprise.",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      verified: true
    },
    {
      name: "Valérie Roth-Meyer",
      function: "Directrice Générale",
      company: "Cabinet Conseil Stratégique",
      sector: "Conseil",
      quote: "Notre autorité sectorielle s'est renforcée grâce à notre nouveau positionnement digital. Les mandats arrivent naturellement via notre site. Accompagnement exceptionnel et résultats au rendez-vous.",
      avatar: "/api/placeholder/60/60",
      rating: 5,
      verified: true
    }
  ]

  // LOGOS CLIENTS PREMIUM
  const clientLogos = [
    { name: "Cabinet Médical Plus", logo: "/api/placeholder/120/60", sector: "Santé" },
    { name: "Solutions Industrielles SA", logo: "/api/placeholder/120/60", sector: "Industrie" },
    { name: "Conseil Stratégique Valais", logo: "/api/placeholder/120/60", sector: "Conseil" },
    { name: "Cabinet Juridique Sion", logo: "/api/placeholder/120/60", sector: "Juridique" },
    { name: "Ingénierie Swiss Tech", logo: "/api/placeholder/120/60", sector: "Technique" },
    { name: "Services Premium SA", logo: "/api/placeholder/120/60", sector: "Services" }
  ]

  // SECTEURS D'EXPERTISE PREMIUM
  const sectorsExpertise = [
    { name: "Cabinets médicaux", icon: "medical" as const },
    { name: "Services B2B", icon: "consultation" as const }, 
    { name: "Commerces locaux", icon: "retail" as const },
    { name: "Cabinets conseil", icon: "engineering" as const },
    { name: "PME industrielles", icon: "industry" as const }
  ]

  const faqData = [
    {
      question: "Combien coûte la création d'un site internet professionnel en Valais ?",
      answer: "Notre tarif est fixe et transparent : 4,500 CHF tout inclus pour un site professionnel avec SEO local. Ce prix comprend la conception stratégique, le développement technique, l'optimisation Google, la configuration GA4 et le support première année. Contrairement aux solutions low-cost qui coûtent souvent plus cher à long terme, nos sites sont architecturés pour générer un ROI mesurable. La plupart de nos clients dirigeants récupèrent leur investissement en 3-6 mois grâce à l'augmentation des leads qualifiés et à l'amélioration de leur positionnement concurrentiel.",
      link: { text: "Calculer mon ROI précis", url: "/questionnaire" }
    },
    {
      question: "Quels sont les délais pour créer un site web en Suisse romande ?",
      answer: "Nous garantissons contractuellement la livraison en 45 jours maximum, avec des jalons de validation clairs. Notre méthodologie projet permet un suivi transparent : brief stratégique (semaine 1), maquettes et architecture (semaines 2-3), développement et intégration (semaines 4-5), tests et optimisations (semaine 6). Les premiers résultats SEO sont visibles entre 1 et 3 mois selon la concurrence sectorielle. Vous recevez un dashboard de suivi en temps réel et des points d'étape hebdomadaires pour une maîtrise totale de l'avancement.",
      link: { text: "Voir notre méthodologie détaillée", url: "/realisations" }
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
      answer: "Nous mettons en place un système de tracking ROI complet avec notre calculateur propriétaire. Chaque mois, vous recevez un reporting exécutif détaillé : coût d'acquisition par lead, taux de conversion par source de trafic, évolution du chiffre d'affaires généré, et analyse concurrentielle. Nous configurons Google Analytics 4, Search Console, et des outils de tracking avancés pour mesurer précisément : formulaires de contact, appels téléphoniques, prises de rendez-vous, et conversions e-commerce. L'objectif : démontrer que votre site web génère plus de revenus qu'il ne coûte, avec une transparence totale sur les KPIs qui comptent pour votre business.",
      link: { text: "Découvrir notre système de tracking ROI", url: "/services/tracking-data" }
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
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/10 via-purple-500/5 to-teal-400/5" />
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* GAUCHE - MESSAGE STORYTELLING */}
            <div className="text-left">
              <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Votre site devient un <span className="text-yellow-400 font-bold">système d'acquisition</span> de clients
              </h1>
              
              <h2 className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Optimisez votre funnel de conversion et générez une croissance de chiffre d'affaires mesurable grâce à un site conçu pour les dirigeants de PME romandes.
              </h2>

              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Basés à Sion et Lausanne, nous développons des solutions digitales qui transforment votre présence en ligne en véritable levier commercial. <strong className="text-white">Plus de 50 dirigeants nous font confiance.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block px-10 py-5 rounded-xl font-bold text-xl text-black transition-all duration-300 hover:scale-105 hover:shadow-xl hover:brightness-110"
                  style={{ background: 'linear-gradient(135deg, #ffd507, #70c1a9)', fontFamily: 'Cera PRO, Inter, sans-serif' }}
                  onClick={() => typeof window !== 'undefined' && window.gtag && window.gtag('event', 'cta_click', {location: 'hero', page: 'creation-site-web'})}
                >
                  Parlons de votre projet
                </Link>
                <Link
                  href="/realisations" 
                  className="inline-flex items-center px-8 py-5 rounded-xl border border-purple-400/40 text-purple-400 hover:bg-purple-400/10 hover:border-purple-400/60 hover:text-purple-300 transition-all duration-300 text-lg font-medium"
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
                    <IconeOSOM 
                      type="business-growth" 
                      size={48} 
                      color="yellow" 
                      withAnimation 
                      ariaLabel="Entreprise en croissance" 
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                    CEO Solutions Industrielles
                  </h3>
                  
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    "Notre chiffre d'affaires a progressé de 280% en 6 mois. OSOM a créé un véritable système d'acquisition qui travaille pour nous 24h/24."
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-400">280%</div>
                      <div className="text-xs text-gray-400">Croissance CA</div>
                    </div>
                    <div className="w-px h-8 bg-gray-600"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-400">600+</div>
                      <div className="text-xs text-gray-400">Leads/an</div>
                    </div>
                    <div className="w-px h-8 bg-gray-600"></div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">6 mois</div>
                      <div className="text-xs text-gray-400">ROI</div>
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
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/20 hover:border-yellow-400/40 hover:shadow-xl hover:shadow-yellow-400/10 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-yellow-400/30 transition-all duration-300">
                  <div className="transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                    <IconeOSOM type="lightning" size={32} color="yellow" ariaLabel="Performance rapide" />
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  Architecture de conversion
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Nous développons des sites optimisés pour transformer vos visiteurs en prospects qualifiés. Navigation intuitive, temps de chargement &lt; 2s et design premium qui renforce votre crédibilité auprès des décideurs.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-teal-400/20 hover:border-teal-400/40 hover:shadow-xl hover:shadow-teal-400/10 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-400/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-teal-400/30 transition-all duration-300">
                  <div className="transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                    <IconeOSOM type="target" size={32} color="cyan" ariaLabel="Ciblage SEO" />
                  </div>
                </div>
                <h3 className="text-white font-bold text-xl mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  SEO local & contenu
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Nous rédigeons des contenus qui répondent aux questions de vos clients et optimisons votre visibilité sur Google. Ensemble, nous construisons votre réputation en ligne et renforçons votre positionnement local.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/20 hover:border-purple-400/40 hover:shadow-xl hover:shadow-purple-400/10 transition-all duration-300 group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-400/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-purple-400/30 transition-all duration-300">
                  <div className="transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1">
                    <IconeOSOM type="chart" size={32} color="purple" ariaLabel="Analyses et données" />
                  </div>
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
              <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/20 hover:border-yellow-400/40 hover:shadow-lg hover:shadow-yellow-400/10 hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-yellow-300 transition-all duration-300">
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
              
              <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-teal-400/20 hover:border-teal-400/40 hover:shadow-lg hover:shadow-teal-400/10 hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-teal-400 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-teal-300 transition-all duration-300">
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
              
              <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/20 hover:border-purple-400/40 hover:shadow-lg hover:shadow-purple-400/10 hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-purple-400 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-purple-300 transition-all duration-300">
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
              
              <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-green-400/20 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-400/10 hover:-translate-y-1 transition-all duration-300 group">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-400 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:bg-green-300 transition-all duration-300">
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
            <h2 className="text-4xl md:text-5xl font-light text-white mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Vous avez mieux à faire <br/><span className="text-yellow-400 font-bold">que de construire un site</span>
            </h2>
            <h3 className="text-2xl text-teal-400 font-medium mb-8" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Votre sérénité avant tout
            </h3>
          </div>
          
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-10 border border-gray-400/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-blue-400/20 flex items-center justify-center hover:bg-blue-400/30 hover:scale-105 transition-all duration-300">
                  <IconeOSOM type="clock" size={40} color="cyan" ariaLabel="Temps précieux" withAnimation />
                </div>
                <h3 className="text-blue-400 font-bold text-xl mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  Votre temps précieux
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Un brief initial de 2 heures et quelques validations suffisent ; concentrez-vous sur votre métier pendant que nous gérons votre transformation digitale.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal-400/20 flex items-center justify-center hover:bg-teal-400/30 hover:scale-105 transition-all duration-300">
                  <IconeOSOM type="star" size={40} color="cyan" ariaLabel="Expertise reconnue" withAnimation />
                </div>
                <h3 className="text-teal-400 font-bold text-xl mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  Notre expertise
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Nos équipes gèrent chaque détail – design premium, développement technique, SEO stratégique – avec rigueur et transparence totale.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-400/20 flex items-center justify-center hover:bg-green-400/30 hover:scale-105 transition-all duration-300">
                  <IconeOSOM type="rocket" size={40} color="green" ariaLabel="Résultats obtenus" withAnimation />
                </div>
                <h3 className="text-green-400 font-bold text-xl mb-4" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                  Votre résultat
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Un site qui inspire confiance, génère des opportunités commerciales et libère du temps dans votre agenda de dirigeant.
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

          {/* MICRO-HISTOIRES PREMIUM AVEC PICTOGRAMMES */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {clientStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-teal-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconeOSOM 
                      type={story.icon as any} 
                      size={32} 
                      color="cyan" 
                      ariaLabel={`Icône ${story.type}`} 
                      withAnimation 
                    />
                  </div>
                  <h3 className="text-teal-400 font-bold text-lg mb-2" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                    {story.type}
                  </h3>
                  <div className="text-xs text-gray-500 mb-4">{story.sector}</div>
                </div>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-red-400 font-medium mb-1 text-xs">PROBLÈME</div>
                    <p className="text-gray-400">{story.problem}</p>
                  </div>
                  <div>
                    <div className="text-yellow-400 font-medium mb-1 text-xs">SOLUTION</div>
                    <p className="text-gray-400">{story.solution}</p>
                  </div>
                  <div>
                    <div className="text-green-400 font-medium mb-1 text-xs">RÉSULTAT</div>
                    <p className="text-gray-300 font-medium">{story.result}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700/50">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-400">{story.keyMetric}</div>
                      <div className="text-xs text-gray-500">KPI clé</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* GRAPHIQUE D'ÉVOLUTION INTÉGRÉ PREMIUM */}
          <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                Nos clients constatent une progression continue
              </h3>
              <p className="text-gray-400">Résultats moyens mesurés sur 200+ jours • Données GA4 certifiées</p>
            </div>
            
            {/* GRAPHIQUE VISUEL INTÉGRÉ */}
            <div className="relative mb-8">
              <div className="flex items-end justify-center space-x-16 mb-8">
                {/* Performance Globale */}
                <div className="text-center">
                  <div className="relative mb-4">
                    <div className="w-20 h-32 bg-gradient-to-b from-red-400/20 to-red-400/5 rounded-t-lg mb-2 flex items-end">
                      <div className="w-full h-8 bg-red-400 rounded-t-lg"></div>
                    </div>
                    <div className="text-red-400 font-medium text-sm">AVANT</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="relative mb-4">
                    <div className="w-20 h-32 bg-gradient-to-b from-green-400/20 to-green-400/5 rounded-t-lg mb-2 flex items-end">
                      <div className="w-full h-28 bg-gradient-to-t from-green-400 to-yellow-400 rounded-t-lg"></div>
                    </div>
                    <div className="text-green-400 font-medium text-sm">OSOM</div>
                  </div>
                </div>
              </div>
              
              {/* COURBE DE PROGRESSION */}
              <div className="relative h-16 mb-6">
                <svg className="w-full h-full" viewBox="0 0 400 64">
                  <defs>
                    <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#EF4444', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#FACC15', stopOpacity: 1}} />
                      <stop offset="100%" style={{stopColor: '#22C55E', stopOpacity: 1}} />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M 20 50 Q 100 45 200 25 T 380 15" 
                    stroke="url(#progressGradient)" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                  />
                  <circle cx="20" cy="50" r="4" fill="#EF4444" />
                  <circle cx="200" cy="25" r="4" fill="#FACC15" />
                  <circle cx="380" cy="15" r="4" fill="#22C55E" />
                </svg>
              </div>
              
              <div className="text-center">
                <div className="inline-block px-8 py-4 bg-gradient-to-r from-green-400/20 to-yellow-400/20 rounded-2xl border border-green-400/30">
                  <div className="text-3xl font-bold text-green-400 mb-1">
                    Performance globale +340%
                  </div>
                  <div className="text-gray-300 text-sm">
                    Temps chargement, conversions et leads qualifiés combinés
                  </div>
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
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group">
                    <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:brightness-110">
                      <IconeOSOM type="snail" size={20} color="red" ariaLabel="Site très lent" />
                    </div>
                    <p className="text-gray-300">Site lent qui fait fuir les prospects</p>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:brightness-110">
                      <IconeOSOM type="old-monitor" size={20} color="red" ariaLabel="Design obsolète" />
                    </div>
                    <p className="text-gray-300">Design daté qui nuit à la crédibilité</p>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:brightness-110">
                      <IconeOSOM type="empty-inbox" size={20} color="red" ariaLabel="Pas de demandes" />
                    </div>
                    <p className="text-gray-300">Peu de demandes qualifiées</p>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:brightness-110">
                      <IconeOSOM type="eye-blocked" size={20} color="red" ariaLabel="Site invisible sur Google" />
                    </div>
                    <p className="text-gray-300">Référencement Google invisible</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-500/10 rounded-2xl p-8 border border-green-500/20">
                <h3 className="text-green-400 font-bold text-2xl mb-6 text-center">OSOM</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 group">
                    <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:brightness-110">
                      <IconeOSOM type="check" size={20} color="green" ariaLabel="Site accéléré" />
                    </div>
                    <p className="text-gray-300">Accélérer le site (&lt; 2s) pour retenir les visiteurs</p>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:brightness-110">
                      <IconeOSOM type="check" size={20} color="green" ariaLabel="Design modernisé" />
                    </div>
                    <p className="text-gray-300">Moderniser le design pour inspirer confiance</p>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:brightness-110">
                      <IconeOSOM type="check" size={20} color="green" ariaLabel="Conversions augmentées" />
                    </div>
                    <p className="text-gray-300">Augmenter les demandes via conversion optimisée</p>
                  </div>
                  <div className="flex items-center space-x-3 group">
                    <div className="transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:brightness-110">
                      <IconeOSOM type="check" size={20} color="green" ariaLabel="SEO renforcé" />
                    </div>
                    <p className="text-gray-300">Renforcer la visibilité locale avec SEO premium</p>
                  </div>
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
            <p className="text-xl text-gray-400 mb-6">
              Plus de 50 entreprises romandes nous font confiance pour leur transformation digitale
            </p>
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400">50+</div>
                <div className="text-xs text-gray-400">Clients actifs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-400">4.9/5</div>
                <div className="text-xs text-gray-400">Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">95%</div>
                <div className="text-xs text-gray-400">Renouvellement</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-3xl p-8 border border-teal-400/20 hover:border-teal-400/40 transition-all duration-300">
                <div className="flex items-start mb-6">
                  <Image 
                    src={testimonial.avatar} 
                    alt={`Photo de ${testimonial.name}`}
                    width={60} 
                    height={60} 
                    className="rounded-full mr-4 border-2 border-teal-400/30"
                  />
                  <div className="flex-1">
                    <div className="text-white font-bold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.function}</div>
                    <div className="text-teal-400 text-xs mt-1">{testimonial.company}</div>
                    <div className="inline-block px-2 py-1 bg-teal-400/20 rounded text-xs text-teal-400 mt-2">{testimonial.sector}</div>
                    {testimonial.verified && (
                      <div className="inline-block ml-2 px-2 py-1 bg-green-400/20 rounded text-xs text-green-400">✓ Vérifié</div>
                    )}
                  </div>
                </div>
                <p className="text-gray-300 italic leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="text-yellow-400 text-lg">★</div>
                    ))}
                  </div>
                  <div className="text-xs text-gray-500">
                    {testimonial.sector} • Suisse romande
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* SECTEURS D'EXPERTISE + LOGOS CLIENTS */}
          <div className="text-center mb-12">
            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Secteurs d'expertise maîtrisés
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {sectorsExpertise.map((sector, index) => (
                <div key={index} className="inline-flex items-center space-x-2 bg-black/40 rounded-full px-4 py-2 border border-gray-700/50 hover:border-teal-400/40 hover:bg-teal-400/5 hover:scale-105 transition-all duration-300">
                  <IconeOSOM 
                    type={sector.icon} 
                    size={20} 
                    color="cyan" 
                    ariaLabel={`Secteur ${sector.name}`} 
                    withAnimation 
                  />
                  <div className="text-gray-300 text-sm hover:text-teal-300 transition-colors duration-300">{sector.name}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* LOGOS CLIENTS PREMIUM */}
          <div className="text-center">
            <div className="bg-black/40 rounded-2xl p-8 border border-gray-700/50">
              <h4 className="text-white font-medium mb-6">Ils nous font confiance</h4>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center">
                {clientLogos.map((client, index) => (
                  <div key={index} className="text-center group">
                    <Image 
                      src={client.logo} 
                      alt={`Logo ${client.name}`}
                      width={120} 
                      height={60} 
                      className="mx-auto filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                    <div className="text-xs text-gray-500 mt-2">{client.sector}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <Link 
                href="/realisations"
                className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300 font-medium"
              >
                Voir plus d'avis et de réalisations →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TECHNIQUE - SOUS LE CAPOT */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-400/5 to-transparent" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-yellow-400/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-yellow-400 text-sm font-medium">EXPERTISE TECHNIQUE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
              Sous le <span className="font-bold text-yellow-400">capot</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              La technologie qui transforme votre vitrine en machine à prospects
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Gauche - Stack Technique Visuel */}
            <div className="relative">
              <div className="bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl rounded-3xl p-8 border border-yellow-400/30">
                
                {/* Stack Architecture */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-yellow-400/10 rounded-xl border border-yellow-400/20">
                    <div className="flex items-center space-x-3">
                      <IconeOSOM type="code" size={24} color="yellow" ariaLabel="Next.js Framework" />
                      <span className="text-white font-medium">Next.js 14</span>
                    </div>
                    <span className="text-yellow-400 text-sm">Framework React</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-cyan-400/10 rounded-xl border border-cyan-400/20">
                    <div className="flex items-center space-x-3">
                      <IconeOSOM type="code" size={24} color="cyan" ariaLabel="TypeScript Language" />
                      <span className="text-white font-medium">TypeScript</span>
                    </div>
                    <span className="text-cyan-400 text-sm">Type Safety</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-green-400/10 rounded-xl border border-green-400/20">
                    <div className="flex items-center space-x-3">
                      <IconeOSOM type="clock" size={24} color="green" ariaLabel="Performance Speed" />
                      <span className="text-white font-medium">SSR + ISR</span>
                    </div>
                    <span className="text-green-400 text-sm">&lt; 2s chargement</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 bg-purple-400/10 rounded-xl border border-purple-400/20">
                    <div className="flex items-center space-x-3">
                      <IconeOSOM type="target" size={24} color="purple" ariaLabel="Analytics Tracking" />
                      <span className="text-white font-medium">Analytics</span>
                    </div>
                    <span className="text-purple-400 text-sm">GA4 + Tracking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Droite - Bénéfices Business */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconeOSOM type="clock" size={20} color="yellow" ariaLabel="Performance Speed" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Performance Lighthouse 95+</h3>
                  <p className="text-gray-300">Votre site se charge instantanément. Vos visiteurs ne partent plus par impatience, votre taux de conversion augmente naturellement.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconeOSOM type="mobile" size={20} color="cyan" ariaLabel="Mobile First Design" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Mobile-First PWA Ready</h3>
                  <p className="text-gray-300">Expérience premium sur tous appareils. Votre site peut même être "installé" comme une app native sur les téléphones.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconeOSOM type="rocket" size={20} color="green" ariaLabel="Growth Evolution" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Architecture Évolutive</h3>
                  <p className="text-gray-300">Votre site grandit avec votre business. Ajout de nouvelles fonctions sans refonte, économisant temps et budget sur 5 ans.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconeOSOM type="target" size={20} color="purple" ariaLabel="Analytics Tracking" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Tracking Précis Intégré</h3>
                  <p className="text-gray-300">Chaque action est mesurée. Vous savez exactement d'où viennent vos clients et quelles pages convertissent le mieux.</p>
                </div>
              </div>
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
                Prêts à discuter de <br/><span className="font-bold text-yellow-400">votre potentiel de croissance ?</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
                Nous accompagnons chaque client avec un service personnalisé. Réservez votre diagnostic gratuit de 15 minutes et voyons comment booster votre visibilité.
              </p>
              
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Nous prenons quelques projets par mois pour garantir un suivi personnalisé. Parlons de vos objectifs et voyons si nous sommes le bon partenaire pour votre transformation digitale.
              </p>
              
              <div className="inline-block px-6 py-3 bg-yellow-400/20 rounded-full text-yellow-400 text-sm font-medium mb-8">
                Accompagnement premium • Proximité garantie • Résultats mesurés
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
                    Discutons de votre potentiel
                  </Link>
                  
                  <Link
                    href="/questionnaire"
                    className="block w-full px-8 py-4 rounded-xl border border-purple-400/40 text-purple-400 hover:bg-purple-400/10 transition-all duration-300 text-lg"
                    style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                  >
                    Calculer mon ROI
                  </Link>
                </div>
                
                {/* POURQUOI OSOM - ENCADRÉ PREMIUM */}
                <div className="mt-8 p-8 bg-gradient-to-br from-yellow-400/10 to-teal-400/10 rounded-2xl border border-yellow-400/30">
                  <h4 className="text-white font-bold text-xl mb-6 text-center" style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}>
                    Pourquoi OSOM ?
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-yellow-400/20 flex items-center justify-center hover:bg-yellow-400/30 hover:scale-110 transition-all duration-300">
                        <IconeOSOM type="star" size={24} color="yellow" ariaLabel="Accompagnement premium" withAnimation />
                      </div>
                      <h5 className="text-yellow-400 font-bold mb-2">Accompagnement premium</h5>
                      <p className="text-gray-300 text-sm">Proximité, suivi mensuel, reporting exécutif clair</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-teal-400/20 flex items-center justify-center hover:bg-teal-400/30 hover:scale-110 transition-all duration-300">
                        <IconeOSOM type="shield" size={24} color="cyan" ariaLabel="Expertise sécurisée" withAnimation />
                      </div>
                      <h5 className="text-teal-400 font-bold mb-2">Expertise reconnue</h5>
                      <p className="text-gray-300 text-sm">Design premium, SEO stratégique, marketing digital</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-green-400/20 flex items-center justify-center hover:bg-green-400/30 hover:scale-110 transition-all duration-300">
                        <IconeOSOM type="chart" size={24} color="green" ariaLabel="Investissement rentable" withAnimation />
                      </div>
                      <h5 className="text-green-400 font-bold mb-2">Investissement rentable</h5>
                      <p className="text-gray-300 text-sm">ROI rapide, tarification transparente, aucun engagement</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-600/50 text-center">
                    <div className="text-gray-300 text-sm space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="text-green-400">✓</div>
                        <span>Diagnostic gratuit de 15 minutes</span>
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
              <div key={index} className="bg-black/40 backdrop-blur-sm rounded-2xl border border-gray-700/50 overflow-hidden hover:border-yellow-400/30 transition-colors duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-yellow-400/5 transition-colors duration-300"
                  aria-expanded={openFaq === index}
                  aria-label={`Afficher la réponse à : ${faq.question}`}
                >
                  <h3 className="text-lg font-medium text-white pr-8">{faq.question}</h3>
                  <div className={`text-yellow-400 text-2xl transform transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`}>
                    +
                  </div>
                </button>
                
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <div className="border-t border-gray-700/50 pt-6">
                      <p className="text-gray-300 leading-relaxed mb-4">{faq.answer}</p>
                      {faq.link && (
                        <Link 
                          href={faq.link.url}
                          className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors duration-300 text-sm font-medium"
                        >
                          {faq.link.text} →
                        </Link>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gradient-to-br from-black/90 to-gray-900/90 backdrop-blur-xl rounded-2xl p-8 border border-yellow-400/20 max-w-2xl mx-auto">
              <p className="text-gray-300 mb-4 text-lg">
                D'autres questions sur votre stratégie digitale ?
              </p>
              <p className="text-gray-400 mb-6 text-sm">
                Chaque projet est unique. Parlons de vos défis spécifiques et de vos objectifs de croissance.
              </p>
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="block text-center px-8 py-4 rounded-xl border border-yellow-400/40 text-yellow-400 hover:bg-yellow-400/10 transition-colors duration-300 font-medium"
                  style={{ fontFamily: 'Cera PRO, Inter, sans-serif' }}
                >
                  Poser ma question personnalisée
                </Link>
                <Link
                  href="/blog/tracking-invisible-roi"
                  className="inline-flex items-center justify-center space-x-2 text-teal-400 hover:text-teal-300 transition-colors duration-300 text-sm"
                >
                  <IconeOSOM type="document" size={16} color="cyan" ariaLabel="Guide référencement" />
                  <span>Comment optimiser le référencement d'un cabinet médical →</span>
                </Link>
              </div>
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