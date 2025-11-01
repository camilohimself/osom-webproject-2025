import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Agence web en Suisse romande | OSOM - Valais, Lausanne, Genève',
  description: 'Agence web spécialisée en création de sites internet et SEO local en Suisse romande: Valais, Lausanne, Genève, Fribourg, Neuchâtel. Expertise locale, impact national.',
  keywords: 'agence web suisse romande, création site web valais lausanne genève, seo local suisse, développeur web suisse romande',
  openGraph: {
    title: 'Agence web en Suisse romande | OSOM',
    description: 'Expertise web et SEO local à travers la Suisse romande',
    url: 'https://www.osom.ch/local',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.osom.ch/local',
  },
}

export default function LocalPage() {
  const cities = [
    {
      name: 'Valais',
      description: 'Notre base historique. Expertise SEO local pour Sion, Sierre, Martigny et toute la région valaisanne.',
      href: '/local/valais',
      stats: 'Hub principal',
      icon: '🏔️',
      color: 'border-yellow-400 bg-yellow-400/5',
    },
    {
      name: 'Lausanne',
      description: 'Accompagnement PME et startups vaudoises. SEO local Lausanne et région lémanique.',
      href: '/local/lausanne',
      stats: 'Zone prioritaire',
      icon: '🌊',
      color: 'border-purple-600 bg-purple-600/5',
    },
    {
      name: 'Genève',
      description: 'Solutions web premium pour entreprises genevoises. Design international, expertise locale.',
      href: '/local/geneve',
      stats: 'Zone prioritaire',
      icon: '⚡',
      color: 'border-purple-600 bg-purple-600/5',
    },
    {
      name: 'Fribourg',
      description: 'Présence digitale bilingue (FR/DE) pour PME fribourgeoises. SEO local Canton de Fribourg.',
      href: '/local/fribourg',
      stats: 'Zone active',
      icon: '🎯',
      color: 'border-white/20 bg-white/5',
    },
    {
      name: 'Neuchâtel',
      description: 'Sites web et SEO pour entreprises neuchâteloises. Expertise horlogère et innovation.',
      href: '/local/neuchatel',
      stats: 'Zone active',
      icon: '⌚',
      color: 'border-white/20 bg-white/5',
    },
  ]

  return (
    <main className="min-h-screen bg-osom-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Agence web <span className="text-yellow-400">Suisse romande</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Expertise locale, impact national. Sites web sur mesure et SEO local à travers les 5 cantons romands.
            </p>
          </div>

          {/* Cities Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {cities.map((city) => (
              <Link
                key={city.href}
                href={city.href}
                className={`group border rounded-lg p-6 hover:scale-105 transition-all duration-300 ${city.color}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl">{city.icon}</span>
                  <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-gray-300">
                    {city.stats}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-yellow-400 transition-colors">
                  {city.name}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {city.description}
                </p>
                <div className="flex items-center text-yellow-400 text-sm font-semibold">
                  Découvrir
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          {/* Why Local Expertise Section */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 md:p-12 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Pourquoi l'expertise locale compte?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-2">SEO local hyper-ciblé</h3>
                <p className="text-gray-400 text-sm">
                  Connaissance fine des requêtes locales, quartiers et spécificités régionales.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold mb-2">Proximité & disponibilité</h3>
                <p className="text-gray-400 text-sm">
                  Rencontres physiques possibles. Compréhension du marché et culture locale.
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">📈</div>
                <h3 className="text-xl font-bold mb-2">Résultats mesurables</h3>
                <p className="text-gray-400 text-sm">
                  Stratégies adaptées au marché suisse romand. ROI optimisé par canton.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-yellow-400/10 to-purple-600/10 border border-yellow-400/20 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à dominer votre marché local?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Audit SEO gratuit + stratégie locale personnalisée pour votre canton.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/outils#audit"
                className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-osom-black font-bold rounded-lg hover:bg-yellow-300 transition-colors text-lg"
              >
                Audit SEO gratuit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-bold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors text-lg"
              >
                Discuter de mon projet
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
