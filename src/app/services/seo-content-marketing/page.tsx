import Link from 'next/link'

export default function SEOContentMarketingPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300DBB6' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
                SEO & <span className="text-cyan-400">Marketing</span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Notre diagnostic SEO révèle les opportunités cachées. Trafic qualifié supérieur garanti.
              </p>
            </div>

            {/* KPI Hero */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
                <div className="text-4xl font-light text-cyan-400 mb-2">68.6%</div>
                <div className="text-white font-medium mb-2">Engagement SEO</div>
                <div className="text-gray-400 text-sm">vs 44.6% trafic direct</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
                <div className="text-4xl font-light text-cyan-400 mb-2">+54%</div>
                <div className="text-white font-medium mb-2">Plus Qualifié</div>
                <div className="text-gray-400 text-sm">Trafic SEO vs autres canaux</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
                <div className="text-4xl font-light text-cyan-400 mb-2">5x</div>
                <div className="text-white font-medium mb-2">Potentiel Growth</div>
                <div className="text-gray-400 text-sm">Secteurs niche optimisés</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="bg-cyan-400 text-black px-8 py-4 rounded-lg hover:bg-cyan-500 transition-colors font-bold shadow-lg"
            >
              Audit SEO gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Méthode OSOM SEO */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              <span className="text-cyan-400">Diagnostic</span> Révélateur
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Notre audit technique révèle pourquoi votre SEO ne performe pas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Case Study ADL */}
            <div className="bg-black/30 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Cas Artisane de Lumière</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Trafic Direct</span>
                    <span className="text-gray-400">44.6% engagement</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-gray-400 h-3 rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Trafic SEO OSOM</span>
                    <span className="text-cyan-400 font-bold">68.6% engagement</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-cyan-400 h-3 rounded-full" style={{width: '69%'}}></div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <div className="text-cyan-400 text-3xl font-light mb-2">+54% plus qualifié</div>
                  <div className="text-gray-400 text-sm">Diagnostic sur 200 jours de données GA4</div>
                </div>
              </div>
            </div>

            {/* Services SEO */}
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">🔍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Audit Technique</h3>
                    <p className="text-gray-300">Analyse complète : structure, vitesse, indexation, erreurs techniques</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Stratégie Contenu</h3>
                    <p className="text-gray-300">Mots-clés secteur spécifique, intent mapping, calendrier éditorial</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Tracking ROI</h3>
                    <p className="text-gray-300">Setup GA4 professionnel, conversions mesurables, reporting transparent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Détaillés */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              Services <span className="text-cyan-400">SEO Complets</span>
            </h2>
            <p className="text-xl text-gray-300">
              De l'audit à l'optimisation, tout pour dominer votre secteur
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 p-8 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all">
              <div className="text-cyan-400 text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-3">Audit SEO Technique</h3>
              <p className="text-gray-300 mb-4">Diagnostic complet de 150+ points techniques</p>
              <div className="text-cyan-400 text-sm font-medium">Rapport détaillé 48h</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 p-8 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all">
              <div className="text-cyan-400 text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Recherche Mots-Clés</h3>
              <p className="text-gray-300 mb-4">Analyse secteur + concurrence + opportunités</p>
              <div className="text-cyan-400 text-sm font-medium">500+ keywords analysés</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 p-8 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all">
              <div className="text-cyan-400 text-3xl mb-4">✍️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Content Marketing</h3>
              <p className="text-gray-300 mb-4">Création contenu optimisé conversion</p>
              <div className="text-cyan-400 text-sm font-medium">+78% trafic organique</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 p-8 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all">
              <div className="text-cyan-400 text-3xl mb-4">🔗</div>
              <h3 className="text-xl font-semibold text-white mb-3">Link Building</h3>
              <p className="text-gray-300 mb-4">Stratégie backlinks haute autorité</p>
              <div className="text-cyan-400 text-sm font-medium">White-hat exclusivement</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 p-8 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all">
              <div className="text-cyan-400 text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-3">SEO Local</h3>
              <p className="text-gray-300 mb-4">Optimisation Google My Business + citations</p>
              <div className="text-cyan-400 text-sm font-medium">Domination locale Valais</div>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-400/10 to-cyan-400/5 p-8 rounded-xl border border-cyan-400/30 hover:border-cyan-400/60 transition-all">
              <div className="text-cyan-400 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">Analytics & Reporting</h3>
              <p className="text-gray-300 mb-4">Dashboard temps réel + rapports mensuels</p>
              <div className="text-cyan-400 text-sm font-medium">ROI transparent</div>
            </div>
          </div>
        </div>
      </section>

      {/* Secteurs d'Expertise */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              Secteurs <span className="text-cyan-400">d'Expertise</span>
            </h2>
            <p className="text-xl text-gray-300">
              Spécialistes des niches à fort potentiel SEO
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/30 transition-colors">
                <span className="text-cyan-400 text-2xl">🏢</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">B2B Services</h3>
              <p className="text-gray-400 text-sm">Consulting, formation, expertise</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/30 transition-colors">
                <span className="text-cyan-400 text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Artisanat</h3>
              <p className="text-gray-400 text-sm">Art, design, création manuelle</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/30 transition-colors">
                <span className="text-cyan-400 text-2xl">🏥</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Santé & Bien-être</h3>
              <p className="text-gray-400 text-sm">Médical, thérapie, fitness</p>
            </div>
            
            <div className="text-center group">
              <div className="w-20 h-20 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-cyan-400/30 transition-colors">
                <span className="text-cyan-400 text-2xl">🏔️</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Tourisme Valais</h3>
              <p className="text-gray-400 text-sm">Hôtellerie, activités, guides</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-cyan-400/5 via-transparent to-blue-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Dominez votre <span className="text-cyan-400">secteur</span> sur Google
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Audit gratuit + stratégie personnalisée en 48h
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cyan-400 text-black px-8 py-4 rounded-lg hover:bg-cyan-500 transition-colors font-bold"
            >
              Audit SEO Gratuit
            </Link>
            <Link
              href="/realisations"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg hover:bg-cyan-400 hover:text-black transition-colors font-bold"
            >
              Voir les résultats
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}