import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Solutions Premium B2B | OSOM - Expertise Technique Valais',
  description: 'Packages premium B2B pour entreprises techniques. ROI 300-600% garanti. Dashboard performance + SEO complexe. H-Séchement : +150% visibilité.',
  keywords: 'agence b2b valais, seo technique, dashboard performance, marketing b2b suisse'
}

export default function PremiumB2BPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Premium B2B */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
              ✨ Solutions Premium B2B
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transformez votre expertise technique 
              <span className="text-purple-600"> en machine à leads qualifiés</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Seule agence VALAIS avec preuves mesurables : H-Séchement +150% visibilité, 
              LMDI 3.45% CTR. Expertise technique + IA = ROI 300-600% garanti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
              >
                Audit Gratuit - 2 Places/Mois
              </Link>
              <Link 
                href="#case-studies" 
                className="border border-purple-600 text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
              >
                Voir nos Preuves
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Preuves Mesurables, Clients Satisfaits
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* H-Séchement Case Study */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">H</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">H-Séchement Sàrl</h3>
                  <p className="text-gray-600">Entreprise technique B2B</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Position Google</span>
                  <span className="font-bold text-green-600">#2</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Visibilité</span>
                  <span className="font-bold text-green-600">+150%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">ROI Estimé</span>
                  <span className="font-bold text-green-600">30-60k CHF/mois</span>
                </div>
              </div>
              
              <blockquote className="text-gray-700 italic border-l-4 border-purple-400 pl-4">
                "Expertise technique remarquable. Dashboard professionnel qui nous permet de suivre nos performances en temps réel."
                <cite className="block mt-2 text-sm text-gray-600">- Amanda, Responsable Marketing</cite>
              </blockquote>
            </div>

            {/* LMDI Case Study */}
            <div className="bg-gradient-to-br from-cyan-50 to-white p-8 rounded-2xl border border-cyan-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">L</span>
                </div>
                <div className="ml-4">
                  <h3 className="font-bold text-lg">LMDI Sàrl</h3>
                  <p className="text-gray-600">E-commerce Premium</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Clics organiques</span>
                  <span className="font-bold text-green-600">315/mois</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">CTR moyen</span>
                  <span className="font-bold text-green-600">3.45%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Impressions</span>
                  <span className="font-bold text-green-600">9,133/mois</span>
                </div>
              </div>
              
              <blockquote className="text-gray-700 italic border-l-4 border-cyan-400 pl-4">
                "Approche technique exceptionnelle. Amélioration significative de notre visibilité e-commerce."
                <cite className="block mt-2 text-sm text-gray-600">- Direction LMDI</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Premium */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              3 Packages Premium Adaptés à Votre Secteur
            </h2>
            <p className="text-xl text-gray-600">
              Basés sur nos succès clients. Résultats mesurables garantis.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Package B2B Technique */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-purple-100 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                  ⭐ Plus Populaire
                </span>
              </div>
              <div className="text-center mb-6 pt-4">
                <h3 className="text-xl font-bold mb-2">B2B Technique Premium</h3>
                <p className="text-gray-600 mb-4">Entreprises techniques, BTP, industrie</p>
                <div className="text-3xl font-bold text-purple-600">3,000 CHF</div>
                <div className="text-gray-500">/mois + setup 5,000 CHF</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  SEO technique complexe
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  Dashboard performance personnalisé
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  Optimisation conversion B2B
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  Formation équipe incluse
                </li>
              </ul>
              
              <div className="text-center">
                <Link 
                  href="/contact" 
                  className="block bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Démarrer Maintenant
                </Link>
                <p className="text-sm text-gray-500 mt-2">ROI 300-600% garanti</p>
              </div>
            </div>

            {/* Package E-commerce */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">E-commerce Premium</h3>
                <p className="text-gray-600 mb-4">Boutiques premium, luxe, artisanat</p>
                <div className="text-3xl font-bold text-cyan-600">2,500 CHF</div>
                <div className="text-gray-500">/mois + setup 3,500 CHF</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  SEO e-commerce avancé
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  Optimisation conversion
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  Analytics e-commerce
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  A/B testing continu
                </li>
              </ul>
              
              <div className="text-center">
                <Link 
                  href="/contact" 
                  className="block bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
                >
                  Démarrer Maintenant
                </Link>
                <p className="text-sm text-gray-500 mt-2">CA mesurable dès le 2ème mois</p>
              </div>
            </div>

            {/* Package Professionnel */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">Professionnel Premium</h3>
                <p className="text-gray-600 mb-4">Médical, juridique, consulting</p>
                <div className="text-3xl font-bold text-green-600">2,000 CHF</div>
                <div className="text-gray-500">/mois + setup 2,500 CHF</div>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  SEO professionnel local
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  Site premium mobile-first
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  Système prise RDV
                </li>
                <li className="flex items-center">
                  <span className="w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                  Maintenance sécurisée
                </li>
              </ul>
              
              <div className="text-center">
                <Link 
                  href="/contact" 
                  className="block bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Démarrer Maintenant
                </Link>
                <p className="text-sm text-gray-500 mt-2">Visibilité locale #1-3</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-cyan-600">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Prêt à Transformer Votre Business ?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Audit gratuit de 45min • Seulement 2 places disponibles par mois
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Réserver Mon Audit Gratuit
          </Link>
          <p className="text-purple-200 mt-4 text-sm">
            ✨ Valeur 500 CHF • Sans engagement • Résultats garantis
          </p>
        </div>
      </section>
    </div>
  )
}