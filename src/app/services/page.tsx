import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'

export const metadata = {
  title: 'Nos Services | OSOM - Agence Web Digitale Valais',
  description: 'Découvrez nos services : création de sites web, SEO, marketing digital et plus. Solutions complètes pour votre présence en ligne.',
}

export default async function ServicesPage() {
  const dictionary = await getDictionary(defaultLocale)

  const services = [
    {
      title: "Création de sites web",
      description: "Sites web modernes, rapides et optimisés pour la conversion",
      features: [
        "Design sur mesure et responsive",
        "Technologies modernes (Next.js, React)",
        "Optimisation des performances",
        "Interface utilisateur intuitive",
        "Compatible tous appareils"
      ],
      icon: "🌐"
    },
    {
      title: "SEO Technique Expert",
      description: "Optimisation technique poussée avec outils professionnels et analyse data",
      features: [
        "Audit technique poussé avec SEMrush",
        "Analyse data GA4/GSC avancée",
        "Croissance de visibilité mesurable (suivi SEMrush)",
        "Reporting transparent mensuel",
        "Optimisation technique Core Web Vitals",
        "Recherche de mots-clés data-driven"
      ],
      icon: "🚀"
    },
    {
      title: "Marketing Digital & IA",
      description: "Stratégies intelligentes avec automatisation IA pour un ROI optimal",
      features: [
        "Automatisations intelligentes avec IA",
        "ROI transparent et optimisé",
        "Workflows d'automatisation IA",
        "Optimisation avec Claude/GPT",
        "Stratégies data-driven",
        "Analytics prédictifs"
      ],
      icon: "🤖"
    },
    {
      title: "Projets Complets 360°",
      description: "Notre spécialité : projets intégrés de A à Z avec accompagnement global",
      features: [
        "Site + stratégie + monitoring + formation",
        "Approche globale intégrée",
        "ROI mesurable et garanti",
        "Accompagnement sur 12 mois",
        "Formation aux outils professionnels",
        "Suivi performance mensuel"
      ],
      icon: "🎯"
    },
    {
      title: "E-commerce",
      description: "Solutions de vente en ligne performantes et sécurisées",
      features: [
        "Boutique en ligne complète",
        "Système de paiement sécurisé",
        "Gestion des stocks automatisée",
        "Intégration ERP/CRM",
        "Analytics e-commerce avancées",
        "Optimisation conversion IA"
      ],
      icon: "🛒"
    },
    {
      title: "Transformation Digitale & IA",
      description: "Accompagnement premium pour l'intégration des outils IA dans votre entreprise",
      features: [
        "Formation aux outils IA (Claude, GPT)",
        "Automatisations marketing intelligentes",
        "Accompagnement mensuel personnalisé",
        "Audit digital complet",
        "Stratégie digitale sur mesure",
        "ROI et performance tracking"
      ],
      icon: "⚡"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Nos Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Agence SAWI certifiée - Expertise SEO & IA pour votre croissance digitale mesurable.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-osom-yellow text-osom-black px-6 py-2 rounded-full text-sm font-bold mb-6">
              🏆 Agence Data-Driven Certifiée
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Expertise Technique
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Formés SAWI Lausanne, nous maîtrisons les outils les plus avancés du marché pour garantir vos résultats.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-20 h-20 bg-osom-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-osom-yellow font-bold text-lg">SAWI</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certification SAWI</h3>
              <p className="text-gray-600">Formation marketing digital avancée à Lausanne</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-osom-yellow rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-osom-black font-bold text-lg">IA</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise IA</h3>
              <p className="text-gray-600">Claude AI, GPT-4, automatisations intelligentes</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-osom-black rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-osom-yellow font-bold text-lg">DATA</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analytics Avancées</h3>
              <p className="text-gray-600">GA4, Google Search Console, SEMrush</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Outils Professionnels Maîtrisés</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-osom-yellow rounded-lg flex items-center justify-center mb-2">
                  <span className="text-osom-black font-bold text-xs">SEM</span>
                </div>
                <p className="text-sm font-medium">SEMrush</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-osom-black rounded-lg flex items-center justify-center mb-2">
                  <span className="text-osom-yellow font-bold text-xs">GA4</span>
                </div>
                <p className="text-sm font-medium">Google Analytics</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-osom-yellow rounded-lg flex items-center justify-center mb-2">
                  <span className="text-osom-black font-bold text-xs">GSC</span>
                </div>
                <p className="text-sm font-medium">Search Console</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-osom-black rounded-lg flex items-center justify-center mb-2">
                  <span className="text-osom-yellow font-bold text-xs">AI</span>
                </div>
                <p className="text-sm font-medium">Claude IA</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-osom-yellow rounded-lg flex items-center justify-center mb-2">
                  <span className="text-osom-black font-bold text-xs">GPT</span>
                </div>
                <p className="text-sm font-medium">OpenAI GPT</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Crédibilité */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Pourquoi nous faire confiance ?
            </h2>
            <div className="bg-white rounded-2xl p-8 max-w-5xl mx-auto border-2 border-osom-yellow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="flex items-center">
                  <span className="text-osom-yellow text-xl mr-3">✅</span>
                  <span className="font-semibold">4.9/5 sur Google (17 avis clients)</span>
                </div>
                <div className="flex items-center">
                  <span className="text-osom-yellow text-xl mr-3">✅</span>
                  <span className="font-semibold">Formation Marketing SAWI Lausanne</span>
                </div>
                <div className="flex items-center">
                  <span className="text-osom-yellow text-xl mr-3">✅</span>
                  <span className="font-semibold">Brevet Fédéral de spécialiste en marketing</span>
                </div>
                <div className="flex items-center">
                  <span className="text-osom-yellow text-xl mr-3">✅</span>
                  <span className="font-semibold">Certification Google Data Analyst</span>
                </div>
                <div className="flex items-center">
                  <span className="text-osom-yellow text-xl mr-3">✅</span>
                  <span className="font-semibold">Professionnels de santé nous font confiance</span>
                </div>
                <div className="flex items-center">
                  <span className="text-osom-yellow text-xl mr-3">✅</span>
                  <span className="font-semibold">Résultats SEO mesurables dès les premiers mois</span>
                </div>
                <div className="flex items-center md:col-span-2 justify-center">
                  <span className="text-osom-yellow text-xl mr-3">✅</span>
                  <span className="font-semibold">Outils professionnels : SEMrush, GA4, Claude IA</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200">
              <div className="w-16 h-16 bg-osom-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-osom-black font-bold text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Certifications Officielles</h3>
              <p className="text-gray-600 mb-4">
                Triple certification reconnue : excellence technique garantie.
              </p>
              <div className="text-sm text-osom-black font-medium">
                ✓ SAWI Lausanne (Marketing digital)<br/>
                ✓ Brevet Fédéral Marketing<br/>
                ✓ Google Data Analyst
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200">
              <div className="w-16 h-16 bg-osom-black rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-osom-yellow font-bold text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Résultats Mesurables</h3>
              <p className="text-gray-600 mb-4">
                Chaque stratégie est suivie et optimisée pour un ROI transparent.
              </p>
              <div className="text-sm text-osom-black font-medium">
                ✓ Reporting mensuel détaillé<br/>
                ✓ KPIs transparents<br/>
                ✓ Optimisation continue
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl text-center border-2 border-gray-200">
              <div className="w-16 h-16 bg-osom-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-osom-black font-bold text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Technologie Avancée</h3>
              <p className="text-gray-600 mb-4">
                Outils professionnels et IA pour maximiser votre performance.
              </p>
              <div className="text-sm text-osom-black font-medium">
                ✓ SEMrush & GA4 expert<br/>
                ✓ Automatisations IA<br/>
                ✓ Technologies modernes
              </div>
            </div>
          </div>
          
          <div className="mt-16 bg-osom-yellow rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-osom-black mb-4">
              🏆 Garantie de résultats
            </h3>
            <p className="text-lg text-osom-black">
              Si nous n'améliorons pas votre visibilité SEO dans les 3 premiers mois, 
              nous vous remboursons intégralement.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre processus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une méthode éprouvée pour garantir un ROI mesurable et des résultats concrets
            </p>
          </div>
          
          {/* Timeline verticale temporaire */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              <div className="flex items-center">
                <div className="flex-1 text-right pr-12">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 text-osom-black">Analyse</h3>
                    <p className="text-gray-600 text-lg">Nous analysons vos besoins et votre marché pour définir la stratégie optimale.</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-osom-yellow text-osom-black rounded-full flex items-center justify-center text-xl font-bold border-4 border-white shadow-lg">
                  1
                </div>
              </div>
              
              <div className="flex items-center flex-row-reverse">
                <div className="flex-1 text-left pl-12">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 text-osom-black">Conception</h3>
                    <p className="text-gray-600 text-lg">Création des maquettes et définition de l'architecture technique de votre projet.</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-osom-black text-osom-yellow rounded-full flex items-center justify-center text-xl font-bold border-4 border-white shadow-lg">
                  2
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="flex-1 text-right pr-12">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 text-osom-black">Développement</h3>
                    <p className="text-gray-600 text-lg">Développement avec les dernières technologies et tests qualité rigoureux.</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-osom-yellow text-osom-black rounded-full flex items-center justify-center text-xl font-bold border-4 border-white shadow-lg">
                  3
                </div>
              </div>
              
              <div className="flex items-center flex-row-reverse">
                <div className="flex-1 text-left pl-12">
                  <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
                    <h3 className="text-2xl font-bold mb-4 text-osom-black">Lancement</h3>
                    <p className="text-gray-600 text-lg">Mise en ligne, formation et accompagnement pour assurer votre succès.</p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-osom-black text-osom-yellow rounded-full flex items-center justify-center text-xl font-bold border-4 border-white shadow-lg">
                  4
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-osom-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Obtenez un audit SEO gratuit de votre site
          </h2>
          <p className="text-xl text-osom-yellow mb-4 font-semibold">
            30 minutes - Sans engagement
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Découvrons ensemble le potentiel de croissance de votre présence digitale.
          </p>
          
          <div className="bg-white rounded-2xl p-8 mb-8 text-left max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-osom-black mb-4">
              📊 Ce que vous recevrez :
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start">
                <span className="text-osom-yellow mr-2">✓</span>
                <span>Audit SEO technique complet</span>
              </div>
              <div className="flex items-start">
                <span className="text-osom-yellow mr-2">✓</span>
                <span>Analyse concurrentielle</span>
              </div>
              <div className="flex items-start">
                <span className="text-osom-yellow mr-2">✓</span>
                <span>Opportunités de croissance</span>
              </div>
              <div className="flex items-start">
                <span className="text-osom-yellow mr-2">✓</span>
                <span>Plan d'action personnalisé</span>
              </div>
              <div className="flex items-start">
                <span className="text-osom-yellow mr-2">✓</span>
                <span>Estimation ROI potentiel</span>
              </div>
              <div className="flex items-start">
                <span className="text-osom-yellow mr-2">✓</span>
                <span>Conseils d'expert immédiatement applicables</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-osom-yellow text-osom-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold text-lg"
            >
              🚀 Réserver mon audit gratuit
            </Link>
            <Link
              href="/calculator"
              className="border-2 border-osom-yellow text-osom-yellow px-8 py-4 rounded-lg hover:bg-osom-yellow hover:text-osom-black transition-colors font-medium"
            >
              Calculateur ROI
            </Link>
          </div>
          
          <p className="text-sm text-gray-400 mt-6">
            ⚡ Réponse sous 24h • 🎯 100% personnalisé • 🏆 Expert SAWI certifié
          </p>
        </div>
      </section>
    </div>
  )
}