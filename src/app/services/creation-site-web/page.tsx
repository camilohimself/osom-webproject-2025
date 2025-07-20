import Link from 'next/link'

export default function CreationSiteWebPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
                Création de <span className="text-yellow-400">Sites Web</span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Sites optimisés conversion + SEO technique. Notre approche OSOM Web génère des résultats mesurables dès la mise en ligne.
              </p>
            </div>

            {/* KPI Hero */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
                <div className="text-4xl font-light text-yellow-400 mb-2">11.3%</div>
                <div className="text-white font-medium mb-2">Taux de Conversion</div>
                <div className="text-gray-400 text-sm">vs 2-3% sites traditionnels</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
                <div className="text-4xl font-light text-yellow-400 mb-2">1500 CHF</div>
                <div className="text-white font-medium mb-2">OSOM Web Formula</div>
                <div className="text-gray-400 text-sm">Site complet livré en 10 jours</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
                <div className="text-4xl font-light text-yellow-400 mb-2">4x</div>
                <div className="text-white font-medium mb-2">Plus Performant</div>
                <div className="text-gray-400 text-sm">Que la concurrence</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold shadow-lg"
            >
              Démarrer mon projet web
            </Link>
          </div>
        </div>
      </section>

      {/* Méthode OSOM */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              La <span className="text-yellow-400">Méthode OSOM</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Chaque site est conçu pour maximiser les conversions et performer en SEO dès le lancement
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Processus */}
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">01</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Architecture Conversion</h3>
                    <p className="text-gray-300">Design centré sur l'expérience utilisateur et l'optimisation du parcours client</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">02</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">SEO Technique Intégré</h3>
                    <p className="text-gray-300">Structure optimisée, vitesse de chargement, et tracking GA4 configuré</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">03</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Technologies Modernes</h3>
                    <p className="text-gray-300">Next.js, React, optimisation mobile-first et performances maximales</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Proof */}
            <div className="bg-black/30 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Preuve d'Impact</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Sites OSOM</span>
                    <span className="text-green-400 font-bold text-xl">11.3%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-400 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Sites traditionnels</span>
                    <span className="text-red-400 font-bold text-xl">2.5%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-red-400 h-2 rounded-full" style={{width: '20%'}}></div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <div className="text-yellow-400 text-3xl font-light mb-2">4x plus performant</div>
                  <div className="text-gray-400 text-sm">Basé sur l'analyse Culture Peinture - 688 vs 49 conversions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies & Features */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              Technologies <span className="text-yellow-400">Premium</span>
            </h2>
            <p className="text-xl text-gray-300">
              Stack technique moderne pour des performances maximales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all">
              <div className="text-yellow-400 text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Optimale</h3>
              <p className="text-gray-300">Score 95+ PageSpeed, temps de chargement < 2 secondes</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all">
              <div className="text-yellow-400 text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-3">Responsive Design</h3>
              <p className="text-gray-300">Parfait sur mobile, tablette et desktop</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all">
              <div className="text-yellow-400 text-3xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold text-white mb-3">Sécurité Renforcée</h3>
              <p className="text-gray-300">SSL, protection DDoS, sauvegardes automatiques</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all">
              <div className="text-yellow-400 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">Analytics Intégré</h3>
              <p className="text-gray-300">Google Analytics 4, tracking conversions, ROI mesurable</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all">
              <div className="text-yellow-400 text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">SEO Ready</h3>
              <p className="text-gray-300">Structure optimisée, meta tags, sitemap automatique</p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-yellow-400/50 transition-all">
              <div className="text-yellow-400 text-3xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-white mb-3">CMS Intuitif</h3>
              <p className="text-gray-300">Interface simple pour gérer votre contenu</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-24 bg-gradient-to-r from-yellow-400/5 via-transparent to-purple-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            OSOM Web <span className="text-yellow-400">Formula</span>
          </h2>
          
          <div className="bg-black/60 backdrop-blur-lg rounded-3xl p-12 border border-yellow-400/40 mb-12">
            <div className="text-6xl font-light text-yellow-400 mb-4">1500 CHF</div>
            <div className="text-2xl text-white mb-6">Site Web Complet</div>
            <div className="text-gray-300 mb-8">
              Design + Développement + SEO + Analytics + Formation
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left mb-8">
              <div className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Design sur mesure</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Responsive mobile</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">SEO optimisé</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Analytics configuré</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Formation incluse</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-green-400">✓</span>
                <span className="text-gray-300">Livraison 10 jours</span>
              </div>
            </div>
          </div>

          <Link
            href="/contact"
            className="bg-yellow-400 text-black px-12 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold text-lg shadow-xl"
          >
            Commander mon site OSOM
          </Link>
        </div>
      </section>
    </div>
  )
}