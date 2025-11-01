import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales et politique de confidentialité | OSOM',
  description: 'Consultez nos mentions légales, politique de confidentialité, conditions d\'utilisation et politique des cookies.',
  robots: 'noindex, follow', // Pas besoin d'indexer cette page hub
}

export default function LegalPage() {
  const legalPages = [
    {
      title: 'Mentions légales',
      description: 'Informations légales sur OSOM, notre entreprise et nos activités en Valais.',
      href: '/legal/mentions-legales',
      icon: '⚖️',
    },
    {
      title: 'Politique de confidentialité',
      description: 'Comment nous collectons, utilisons et protégeons vos données personnelles.',
      href: '/legal/politique-confidentialite',
      icon: '🔒',
    },
    {
      title: 'Conditions d\'utilisation',
      description: 'Conditions générales d\'utilisation de notre site web et de nos services.',
      href: '/legal/conditions-utilisation',
      icon: '📋',
    },
    {
      title: 'Politique des cookies',
      description: 'Informations sur l\'utilisation des cookies et technologies similaires.',
      href: '/legal/cookies',
      icon: '🍪',
    },
  ]

  return (
    <main className="min-h-screen bg-osom-black text-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Informations légales
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Transparence et conformité sont au cœur de nos valeurs.
            Consultez nos documents légaux et politiques de confidentialité.
          </p>

          {/* Legal Pages Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {legalPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-400 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-4xl">{page.icon}</span>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                      {page.title}
                    </h2>
                    <p className="text-gray-400 text-sm">
                      {page.description}
                    </p>
                  </div>
                  <svg
                    className="w-6 h-6 text-gray-400 group-hover:text-yellow-400 group-hover:translate-x-1 transition-all"
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

          {/* Contact Section */}
          <div className="mt-16 p-8 bg-purple-600/10 border border-purple-600/20 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Questions légales?</h2>
            <p className="text-gray-300 mb-6">
              Pour toute question concernant nos mentions légales, notre politique de confidentialité
              ou l'utilisation de vos données, n'hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-yellow-400 text-osom-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
              >
                Nous contacter
              </Link>
              <a
                href="mailto:hello@osom.ch"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:border-yellow-400 hover:text-yellow-400 transition-colors"
              >
                hello@osom.ch
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
