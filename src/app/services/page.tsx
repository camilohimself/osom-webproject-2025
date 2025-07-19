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
      title: "SEO & Référencement",
      description: "Optimisation pour les moteurs de recherche et visibilité maximale",
      features: [
        "Audit SEO complet",
        "Optimisation technique",
        "Recherche de mots-clés",
        "Content marketing",
        "Suivi des performances"
      ],
      icon: "🚀"
    },
    {
      title: "Marketing Digital",
      description: "Stratégies digitales pour maximiser votre retour sur investissement",
      features: [
        "Publicité en ligne (Google Ads, Facebook)",
        "Email marketing",
        "Analytics et reporting",
        "Stratégie de contenu",
        "Réseaux sociaux"
      ],
      icon: "📈"
    },
    {
      title: "E-commerce",
      description: "Solutions de vente en ligne performantes et sécurisées",
      features: [
        "Boutique en ligne complète",
        "Système de paiement sécurisé",
        "Gestion des stocks",
        "Intégration ERP/CRM",
        "Mobile-first design"
      ],
      icon: "🛒"
    },
    {
      title: "Maintenance & Support",
      description: "Support technique continu et maintenance préventive",
      features: [
        "Mises à jour de sécurité",
        "Sauvegardes automatiques",
        "Monitoring 24/7",
        "Support technique",
        "Optimisations continues"
      ],
      icon: "🔧"
    },
    {
      title: "Consulting Digital",
      description: "Accompagnement stratégique pour votre transformation digitale",
      features: [
        "Audit digital complet",
        "Stratégie digitale sur mesure",
        "Formation des équipes",
        "Accompagnement au changement",
        "Roadmap technologique"
      ],
      icon: "💡"
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
              Des solutions digitales complètes pour faire grandir votre entreprise et maximiser votre présence en ligne.
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre processus
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une méthode éprouvée pour garantir le succès de votre projet
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
            Prêt à démarrer votre projet ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discutons de vos besoins et trouvons ensemble la solution qui correspond à vos objectifs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium"
            >
              Demander un devis
            </Link>
            <Link
              href="/calculator"
              className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-400 transition-colors font-medium"
            >
              Calculateur de projet
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}