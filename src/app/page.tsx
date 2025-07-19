import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'

export default async function Home() {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean & Professional */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              OSOM
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Agence web digitale spécialisée dans la création de sites performants, le SEO et le marketing digital en Valais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-osom-yellow text-osom-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold"
              >
                Démarrer un projet
              </Link>
              <Link
                href="/realisations"
                className="border-2 border-osom-black text-osom-black px-8 py-4 rounded-lg hover:bg-osom-black hover:text-white transition-colors font-medium"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des solutions digitales complètes pour faire grandir votre entreprise
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-osom-yellow transition-colors">
              <div className="w-12 h-12 bg-osom-yellow rounded-lg mb-6 flex items-center justify-center">
                <span className="text-osom-black font-bold text-xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-osom-black">
                Création de sites web
              </h3>
              <p className="text-gray-600">
                Sites web modernes, rapides et optimisés pour la conversion. Technologies de pointe avec Next.js et React.
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-osom-yellow transition-colors">
              <div className="w-12 h-12 bg-osom-yellow rounded-lg mb-6 flex items-center justify-center">
                <span className="text-osom-black font-bold text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-osom-black">
                SEO & Référencement
              </h3>
              <p className="text-gray-600">
                Optimisation pour les moteurs de recherche. Stratégies sur mesure pour améliorer votre visibilité.
              </p>
            </div>
            
            <div className="bg-white border-2 border-gray-200 p-8 rounded-xl hover:border-osom-yellow transition-colors">
              <div className="w-12 h-12 bg-osom-yellow rounded-lg mb-6 flex items-center justify-center">
                <span className="text-osom-black font-bold text-xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-osom-black">
                Marketing Digital
              </h3>
              <p className="text-gray-600">
                Campagnes publicitaires, content marketing et analytics pour maximiser votre ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prêt à faire grandir votre entreprise ?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Discutons de votre projet et découvrons comment nous pouvons vous aider à atteindre vos objectifs.
          </p>
          <Link
            href="/contact"
            className="bg-osom-yellow text-osom-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold inline-block"
          >
            Contactez-nous
          </Link>
        </div>
      </section>
    </div>
  )
}