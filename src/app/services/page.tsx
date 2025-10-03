import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

export const metadata = {
  title: 'Développeur web Valais | Projets sur mesure & SEO | OSOM',
  description: 'Développement web sur mesure Valais : sites complexes, API, dashboards, SEO local. Projets 2-6 mois. Next.js expert. Consultation gratuite.',
}

export default async function ServicesPage() {
  const dictionary = await getDictionary(defaultLocale)

  const services = [
    {
      id: "artisan",
      title: "Artisan",
      subtitle: "8,000 - 15,000 CHF • 2-3 mois",
      description: "Sites professionnels sur mesure 10-25 pages",
      expectedResults: [
        "Design responsive premium",
        "SEO technique de base inclus",
        "Formation 2h + 3 mois maintenance"
      ],
      icon: "",
      badge: "PME",
      highlight: false,
      pricing: "1,500 CHF/mois support (optionnel)"
    },
    {
      id: "master",
      title: "Master",
      subtitle: "15,000 - 35,000 CHF • 3-6 mois",
      description: "Projets complexes 25-60 pages + API + dashboards",
      expectedResults: [
        "Intégrations API (Calendar, CRM, Analytics)",
        "SEO hyper-local 7+ pages stratégiques",
        "Sessions optimisation 6 mois incluses"
      ],
      icon: "",
      realData: true,
      badge: "POPULAIRE",
      highlight: true,
      pricing: "2,500 CHF/mois (recommandé)",
      examples: "Paroisse Nendaz • H-Sechement"
    },
    {
      id: "legend",
      title: "Legend",
      subtitle: "40,000 - 80,000 CHF • 6-12 mois",
      description: "Conquête digitale complète haute visibilité",
      expectedResults: [
        "Architecture entreprise sur mesure",
        "SEO compétitif domination locale",
        "Support 24/7 + consultant dédié"
      ],
      icon: "",
      pricing: "4,000+ CHF/mois inclus",
      examples: "Nowssen • Finance • Corporate"
    },
    {
      id: "optimisation",
      title: "Optimisation continue",
      subtitle: "Sessions mensuelles 6-12 mois",
      description: "Pour sites existants à transformer en machines de conversion",
      expectedResults: [
        "SEO local continu + analytics avancées",
        "A/B testing + optimisation conversions",
        "Dashboards performance temps réel"
      ],
      icon: "",
      pricing: "1,500 - 4,000 CHF/mois"
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      <ScrollProgressIndicator />

      {/* Hero Section - Ultra Compact */}
      <section className="py-24 lg:py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-wide">SERVICES PREMIUM</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Développement web <span className="text-yellow-400 font-bold">sur mesure</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Projets complexes. API & dashboards. SEO local stratégique.
            </p>

            <div className="inline-flex bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
              <span className="text-yellow-400 font-bold text-2xl">60 pages</span>
              <span className="text-gray-300 ml-2 text-lg">Paroisse Nendaz + API Calendar automatique</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Compact */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {services.map((service, index) => {
              const serviceColors: { [key: number]: { main: string; bg: string } } = {
                0: { main: '#EAB308', bg: 'yellow-400' },
                1: { main: '#A855F7', bg: 'purple-400' },
                2: { main: '#06B6D4', bg: 'cyan-400' },
                3: { main: '#EAB308', bg: 'yellow-400' }
              }
              const colors = serviceColors[index] || serviceColors[0]

              return (
              <div
                key={index}
                id={service.id}
                className={`backdrop-blur-sm border rounded-2xl p-6 hover:border-opacity-60 transition-all duration-500 relative overflow-hidden scroll-mt-24 ${
                  service.highlight
                    ? `border-${colors.bg}/30 bg-gradient-to-br from-${colors.bg}/10 to-black/60`
                    : `border-white/10 bg-gradient-to-br from-white/5 to-black/40 hover:border-${colors.bg}/30`
                }`}
              >
                {service.badge && (
                  <div className="absolute top-4 right-4">
                    <span className={`bg-${colors.bg} text-black text-xs font-bold px-3 py-1 rounded-full`}>
                      {service.badge}
                    </span>
                  </div>
                )}

                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-${colors.bg} rounded-full flex items-center justify-center ${service.highlight ? 'animate-pulse' : ''}`}>
                      <div className="w-6 h-6 bg-black rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-light text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        {service.title}
                      </h3>
                      <p className={`text-xs text-${colors.bg} font-medium`}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 text-sm leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {service.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {service.expectedResults.map((result, resultIndex) => (
                    <li key={resultIndex} className="flex items-start">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 mr-3 flex-shrink-0 ${
                        service.realData ? `bg-${colors.bg}` : `bg-${colors.bg}/60`
                      }`}></div>
                      <span className={`text-sm ${
                        service.realData ? `text-${colors.bg} font-medium` : 'text-gray-400'
                      }`} style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>{result}</span>
                    </li>
                  ))}
                </ul>

                {service.pricing && (
                  <div className="mb-3">
                    <span className="text-xs text-gray-500">Support : </span>
                    <span className={`text-sm text-${colors.bg} font-semibold`}>{service.pricing}</span>
                  </div>
                )}

                {service.examples && (
                  <div className="mb-4">
                    <span className="text-xs text-gray-500">Exemples : </span>
                    <span className="text-xs text-gray-400">{service.examples}</span>
                  </div>
                )}

                <div className={`mt-4 pt-4 border-t border-${colors.bg}/20`}>
                  <Link
                    href="/contact"
                    className={`text-${colors.bg} hover:text-${colors.bg}/80 text-sm font-medium transition-colors inline-flex items-center`}
                  >
                    Discuter de ce package
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            )})}
          </div>

          {/* Link to more info */}
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Tous les packages incluent : Performance &lt; 2s garantie • Support prioritaire • Formation incluse
            </p>
            <Link
              href="/contact"
              className="text-yellow-400 hover:text-yellow-500 font-medium transition-colors"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Audit gratuit 30 min →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Ultra Simple */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-green-400/5"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
            <span className="text-yellow-400 text-sm font-medium tracking-wide">AUDIT GRATUIT</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Découvrez votre <span className="text-yellow-400 font-bold">potentiel digital</span>
          </h2>

          <p className="text-xl text-gray-300 mb-10" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            30 minutes • Sans engagement • Analyse personnalisée
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold text-lg shadow-lg"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Réserver mon audit gratuit
            </Link>
            <Link
              href="/outils"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors font-medium backdrop-blur-sm"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Calculateur ROI
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}