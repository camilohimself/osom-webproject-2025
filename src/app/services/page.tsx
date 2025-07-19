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
      title: "SEO Technique Avancé",
      description: "Optimisation technique poussée avec outils professionnels et analyse data",
      features: [
        "Audit technique poussé avec SEMrush",
        "Analyse data GA4/GSC avancée",
        "Veille concurrentielle automatisée",
        "Optimisation technique Core Web Vitals",
        "Recherche de mots-clés data-driven",
        "Reporting ROI transparent"
      ],
      icon: "🚀"
    },
    {
      title: "Marketing Digital & IA",
      description: "Stratégies intelligentes avec automatisation IA pour un ROI optimal",
      features: [
        "Workflows d'automatisation IA",
        "Optimisation avec Claude/GPT",
        "Stratégies data-driven",
        "Publicité en ligne optimisée",
        "Analytics prédictifs",
        "Content marketing intelligent"
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
              Investissez dans votre croissance avec des solutions digitales avancées qui génèrent un ROI mesurable.
            </p>
          </div>
        </div>
      </section>

      {/* Notre Expertise Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gray-900 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
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
              <div className="w-20 h-20 bg-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">SAWI</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Certification SAWI</h3>
              <p className="text-gray-600">Formation marketing digital avancée à Lausanne</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">IA</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise IA</h3>
              <p className="text-gray-600">Claude AI, GPT-4, automatisations intelligentes</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">DATA</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Analytics Avancées</h3>
              <p className="text-gray-600">GA4, Google Search Console, SEMrush</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Outils Professionnels Maîtrisés</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-500 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">SEM</span>
                </div>
                <p className="text-sm font-medium">SEMrush</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">GA4</span>
                </div>
                <p className="text-sm font-medium">Google Analytics</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">GSC</span>
                </div>
                <p className="text-sm font-medium">Search Console</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">AI</span>
                </div>
                <p className="text-sm font-medium">Claude IA</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-2">
                  <span className="text-white font-bold text-xs">GPT</span>
                </div>
                <p className="text-sm font-medium">OpenAI GPT</p>
              </div>
            </div>
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

      {/* Process Section */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Analyse</h3>
              <p className="text-gray-600">Nous analysons vos besoins et votre marché pour définir la stratégie optimale.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Conception</h3>
              <p className="text-gray-600">Création des maquettes et définition de l'architecture technique de votre projet.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Développement</h3>
              <p className="text-gray-600">Développement avec les dernières technologies et tests qualité rigoureux.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Lancement</h3>
              <p className="text-gray-600">Mise en ligne, formation et accompagnement pour assurer votre succès.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prêt à investir dans votre croissance ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Obtenez un ROI transparent et mesurable. Résultats garantis avec notre accompagnement premium data-driven.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Calculer mon ROI
            </Link>
            <Link
              href="/calculator"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors font-medium"
            >
              Simulateur d'investissement
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            ✅ ROI transparent et suivi • ✅ Résultats mesurables garantis • ✅ Accompagnement personnalisé
          </p>
        </div>
      </section>
    </div>
  )
}