import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

export const metadata = {
  title: 'Packages Développeur Web Valais | Essentiel, Performance, Sur Mesure | OSOM',
  description: 'Packages développement web sur mesure Valais. Essentiel (5-9K), Performance (10-18K), Sur Mesure (20K+). Paiement mensuel = partenariat actif continu.',
  keywords: 'packages développeur web, pricing développement valais, site sur mesure, partenariat mensuel, osom valais',
}

export default async function ServicesPage() {
  const dictionary = await getDictionary(defaultLocale)

  const packages = [
    {
      name: "Essentiel",
      tagline: "Fondations solides",
      priceOptions: [
        { duration: "3 mois", total: "5,000 CHF", monthly: "1,667 CHF/mois" },
        { duration: "6 mois", total: "9,000 CHF", monthly: "1,500 CHF/mois", popular: true }
      ],
      description: "Sites professionnels 15-25 pages avec accompagnement dev actif",
      features: [
        "15-25 pages sur mesure",
        "Design responsive premium",
        "SEO technique de base",
        "Accompagnement mensuel actif",
        "Formation 2h incluse",
        "CMS simple intégré"
      ],
      cta: "Démarrer",
      href: "/services/essentiel",
      color: "green",
      badge: null
    },
    {
      name: "Performance",
      tagline: "Partenariat actif",
      priceOptions: [
        { duration: "6 mois", total: "10,000 CHF", monthly: "1,667 CHF/mois" },
        { duration: "12 mois", total: "18,000 CHF", monthly: "1,500 CHF/mois", popular: true }
      ],
      description: "Projets complexes 30-60 pages + API + SEO stratégique continu",
      features: [
        "30-60 pages complexes",
        "API & Integrations (CRM, paiements)",
        "Dashboard personnalisé",
        "SEO stratégique mensuel",
        "Support premium 48h",
        "Partenariat actif continu"
      ],
      cta: "Démarrer",
      href: "/services/performance",
      color: "purple",
      badge: "POPULAIRE"
    },
    {
      name: "Sur Mesure",
      tagline: "Conquête digitale",
      priceOptions: [
        { duration: "12-24 mois", total: "20,000 - 100,000+ CHF", monthly: "Devis personnalisé" }
      ],
      description: "Architecture entreprise + garanties contractuelles + consultant dédié",
      features: [
        "Architecture entreprise",
        "Consultant dédié",
        "SEO domination locale",
        "Support 24/7 avec SLA",
        "Analytics & ROI avancés",
        "Garanties contractuelles"
      ],
      cta: "Discuter",
      href: "/services/sur-mesure",
      color: "cyan",
      badge: "ELITE"
    }
  ]

  const colorClasses = {
    green: {
      border: "border-green-400/30",
      hoverBorder: "hover:border-green-400/50",
      text: "text-green-400",
      bg: "bg-green-400",
      bgHover: "hover:bg-green-500",
      gradient: "from-green-400/10 to-black",
      ring: ""
    },
    purple: {
      border: "border-purple-400/30",
      hoverBorder: "hover:border-purple-400/50",
      text: "text-purple-400",
      bg: "bg-purple-400",
      bgHover: "hover:bg-purple-500",
      gradient: "from-purple-400/10 to-black",
      ring: "ring-2 ring-purple-400/20"
    },
    cyan: {
      border: "border-cyan-400/30",
      hoverBorder: "hover:border-cyan-400/50",
      text: "text-cyan-400",
      bg: "bg-gradient-to-r from-cyan-400 to-blue-500",
      bgHover: "hover:shadow-2xl hover:shadow-cyan-400/50",
      gradient: "from-cyan-400/10 to-black",
      ring: ""
    }
  }

  return (
    <div className="min-h-screen bg-black">
      <ScrollProgressIndicator />

      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-black via-black to-yellow-400/5 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-wide uppercase">Packages Craftsman</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Paiement mensuel = <span className="text-yellow-400 font-bold">Partenariat actif</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Ce n'est pas un site livré puis abandonné. C'est un <strong>partenariat mensuel</strong> où je travaille activement sur votre projet chaque mois.
            </p>
          </div>

          {/* Pricing Cards Netflix Style */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => {
              const colors = colorClasses[pkg.color as keyof typeof colorClasses]
              const isPopular = pkg.badge === "POPULAIRE"

              return (
                <div
                  key={index}
                  className={`relative bg-gradient-to-br ${colors.gradient} border ${colors.border} ${colors.hoverBorder} rounded-2xl p-8 transition-all duration-300 ${isPopular ? colors.ring : ''}`}
                >
                  {pkg.badge && (
                    <div className={`absolute -top-4 left-1/2 -translate-x-1/2 ${colors.bg} text-black text-xs font-bold px-4 py-1 rounded-full`}>
                      {pkg.badge}
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className={`text-3xl font-bold ${colors.text} mb-2`} style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      {pkg.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{pkg.tagline}</p>
                  </div>

                  <div className="mb-6 space-y-3">
                    {pkg.priceOptions.map((option, i) => (
                      <div key={i} className={`${option.popular ? `bg-black/40 border ${colors.border} rounded-lg p-3` : ''}`}>
                        <div className="text-sm text-gray-400">{option.duration}</div>
                        <div className={`text-2xl font-bold ${colors.text}`}>{option.total}</div>
                        <div className="text-sm text-gray-500">{option.monthly}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">{pkg.description}</p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                        <svg className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={pkg.href}
                    className={`block w-full text-center ${colors.bg} text-black px-6 py-3 rounded-lg ${colors.bgHover} transition-all duration-300 font-bold`}
                    style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              )
            })}
          </div>

          {/* Note importante */}
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-6">
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                <strong className="text-yellow-400">Philosophie pricing:</strong> Le paiement mensuel n'est PAS un site livré + support optionnel. C'est un <strong>partenariat actif</strong> où le développeur travaille sur votre projet chaque mois (dev + SEO + optimisations + support).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Pas sûr de votre <span className="text-yellow-400 font-bold">package?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Audit gratuit 30 min pour identifier le package adapté à vos besoins et budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-10 py-5 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-bold text-lg shadow-xl"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Audit gratuit 30 min
            </Link>
            <Link
              href="/outils"
              className="border-2 border-white/30 text-white px-10 py-5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium backdrop-blur-sm"
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
