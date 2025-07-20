import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'

export default async function Home() {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Tech Elegant */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 tracking-tight">
              <span className="text-yellow-400">O</span>SOM
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Agence web digitale spécialisée dans la création de sites performants, le SEO et le marketing digital en Valais.
            </p>
            
            {/* Stats Pills */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-yellow-400 font-bold">140x</span>
                <span className="text-gray-300 ml-2">plus efficace</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-yellow-400 font-bold">1500 CHF</span>
                <span className="text-gray-300 ml-2">sites premium</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-yellow-400 font-bold">10 jours</span>
                <span className="text-gray-300 ml-2">livraison</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold shadow-lg"
              >
                Démarrer un projet
              </Link>
              <Link
                href="/realisations"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors font-medium backdrop-blur-sm"
              >
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Notre expertise
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Des solutions digitales complètes pour faire grandir votre entreprise avec une approche data-driven
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-black font-bold text-xl">🌐</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Création de sites web
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Sites web modernes, rapides et optimisés pour la conversion. Technologies de pointe avec Next.js et React.
              </p>
              <div className="mt-4 text-yellow-400 text-sm font-medium">
                À partir de 1500 CHF • Livré en 10 jours
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-black font-bold text-xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                SEO & Référencement
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Optimisation pour les moteurs de recherche. Stratégies sur mesure pour améliorer votre visibilité.
              </p>
              <div className="mt-4 text-yellow-400 text-sm font-medium">
                Résultats mesurables • ROI transparent
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:border-yellow-400/50 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-yellow-400 rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-black font-bold text-xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">
                Marketing Digital
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Stratégies data-driven avec performances 140x supérieures aux méthodes traditionnelles.
              </p>
              <div className="mt-4 text-yellow-400 text-sm font-medium">
                140x plus efficace • 11.3% conversion
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-purple-500/5"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
            Prêt à transformer<br />
            vos <span className="text-yellow-400">performances</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Discutons de votre projet et découvrons comment nous pouvons multiplier votre ROI avec une approche data-driven.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold shadow-lg"
            >
              Consultation gratuite
            </Link>
            <Link
              href="/calculator"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors font-medium backdrop-blur-sm"
            >
              Calculer mon ROI
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>Données vérifiables GA4</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              <span>Résultats 140x supérieurs</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>Performance garantie</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}