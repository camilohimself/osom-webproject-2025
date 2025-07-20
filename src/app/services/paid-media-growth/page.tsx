import Link from 'next/link'

export default function PaidMediaGrowthPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD506' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
                Paid Media & <span className="text-yellow-400">Growth</span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Stratégie organique 140x plus performante que la publicité payante. Conversions durables garanties.
              </p>
            </div>

            {/* KPI Hero */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
                <div className="text-4xl font-light text-yellow-400 mb-2">140x</div>
                <div className="text-white font-medium mb-2">Plus Efficace</div>
                <div className="text-gray-400 text-sm">Que publicité payante</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
                <div className="text-4xl font-light text-yellow-400 mb-2">99.3%</div>
                <div className="text-white font-medium mb-2">Coût Réduit</div>
                <div className="text-gray-400 text-sm">vs acquisition payante</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30">
                <div className="text-4xl font-light text-yellow-400 mb-2">688</div>
                <div className="text-white font-medium mb-2">Conversions</div>
                <div className="text-gray-400 text-sm">vs 49 ads payantes</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold shadow-lg"
            >
              Révolutionner mon acquisition
            </Link>
          </div>
        </div>
      </section>

      {/* Révolution OSOM */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              La <span className="text-yellow-400">Révolution</span> OSOM
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Pourquoi investir massivement en ads quand l'organique génère 140x plus de résultats ?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Culture Peinture Case */}
            <div className="bg-black/30 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Case Culture Peinture</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Publicité Payante</span>
                    <span className="text-red-400">49 conversions</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-red-400 h-3 rounded-full" style={{width: '7%'}}></div>
                  </div>
                  <div className="text-gray-400 text-xs mt-1">10,000+ CHF/mois • 0.25% taux</div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Stratégie OSOM</span>
                    <span className="text-yellow-400 font-bold">688 conversions</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-yellow-400 h-3 rounded-full" style={{width: '100%'}}></div>
                  </div>
                  <div className="text-gray-400 text-xs mt-1">1,000 CHF/mois • 11.3% taux</div>
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <div className="text-yellow-400 text-3xl font-light mb-2">140x ROI supérieur</div>
                  <div className="text-gray-400 text-sm">Données GA4 vérifiées sur 200 jours</div>
                </div>
              </div>
            </div>

            {/* Approche OSOM */}
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">📱</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Contenu Organique</h3>
                    <p className="text-gray-300">Facebook/Instagram Reels éducatifs ciblés audience spécifique</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Ciblage Précis</h3>
                    <p className="text-gray-300">Audience qualifiée 60+ pour formation, engagement authentique</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-black font-bold">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">ROI Mesurable</h3>
                    <p className="text-gray-300">Tracking GA4 + Meta Business, métriques vérifiables</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Growth */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              <span className="text-yellow-400">Growth</span> Strategy
            </h2>
            <p className="text-xl text-gray-300">
              Au lieu de brûler votre budget en ads, construisons un empire organique
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 p-8 rounded-xl border border-yellow-400/30 hover:border-yellow-400/60 transition-all">
              <div className="text-yellow-400 text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-3">Social Media Organique</h3>
              <p className="text-gray-300 mb-4">Contenu viral-ready adapté à votre audience</p>
              <div className="text-yellow-400 text-sm font-medium">2.4M vues organiques</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 p-8 rounded-xl border border-yellow-400/30 hover:border-yellow-400/60 transition-all">
              <div className="text-yellow-400 text-3xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold text-white mb-3">Video Marketing</h3>
              <p className="text-gray-300 mb-4">Reels, Stories, contenu éducatif engageant</p>
              <div className="text-yellow-400 text-sm font-medium">67.5s engagement moyen</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 p-8 rounded-xl border border-yellow-400/30 hover:border-yellow-400/60 transition-all">
              <div className="text-yellow-400 text-3xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-white mb-3">Community Building</h3>
              <p className="text-gray-300 mb-4">Audience qualifiée, engagement authentique</p>
              <div className="text-yellow-400 text-sm font-medium">Asset 95K CHF value</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 p-8 rounded-xl border border-yellow-400/30 hover:border-yellow-400/60 transition-all">
              <div className="text-yellow-400 text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-white mb-3">Funnel Optimization</h3>
              <p className="text-gray-300 mb-4">Conversion 11.3% vs 0.25% industrie</p>
              <div className="text-yellow-400 text-sm font-medium">45x plus performant</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 p-8 rounded-xl border border-yellow-400/30 hover:border-yellow-400/60 transition-all">
              <div className="text-yellow-400 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">Growth Analytics</h3>
              <p className="text-gray-300 mb-4">Métriques actionables, ROI transparent</p>
              <div className="text-yellow-400 text-sm font-medium">Dashboard temps réel</div>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-400/10 to-yellow-400/5 p-8 rounded-xl border border-yellow-400/30 hover:border-yellow-400/60 transition-all">
              <div className="text-yellow-400 text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold text-white mb-3">Conversion Rate Optimization</h3>
              <p className="text-gray-300 mb-4">A/B testing, landing pages, UX optimization</p>
              <div className="text-yellow-400 text-sm font-medium">+350% conversion rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparaison Coûts */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              Comparaison <span className="text-yellow-400">Investissement</span>
            </h2>
            <p className="text-xl text-gray-300">
              Même budget, résultats incomparables
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Approche Traditionnelle */}
            <div className="bg-red-900/20 p-8 rounded-xl border border-red-500/30">
              <h3 className="text-2xl font-semibold text-red-400 mb-6">❌ Publicité Payante</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Budget mensuel</span>
                  <span className="text-red-400 font-bold">10,000 CHF</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Conversions/mois</span>
                  <span className="text-red-400">8 conversions</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Coût par conversion</span>
                  <span className="text-red-400">1,250 CHF</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Asset créé</span>
                  <span className="text-red-400">0 CHF</span>
                </div>
                <div className="pt-4 border-t border-red-500/30">
                  <div className="text-red-400 text-xl font-bold">ROI: 0.75x</div>
                </div>
              </div>
            </div>

            {/* Approche OSOM */}
            <div className="bg-yellow-400/20 p-8 rounded-xl border border-yellow-400/30">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-6">✅ Stratégie OSOM</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-300">Budget mensuel</span>
                  <span className="text-yellow-400 font-bold">1,000 CHF</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Conversions/mois</span>
                  <span className="text-yellow-400">106 conversions</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Coût par conversion</span>
                  <span className="text-yellow-400">9.4 CHF</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Asset créé</span>
                  <span className="text-yellow-400">95,000 CHF</span>
                </div>
                <div className="pt-4 border-t border-yellow-400/30">
                  <div className="text-yellow-400 text-xl font-bold">ROI: 105.8x</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="text-5xl font-light text-yellow-400 mb-4">140x plus efficace</div>
            <p className="text-gray-300">Même résultat pour 10x moins cher + asset de 95K CHF</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-yellow-400/5 via-transparent to-orange-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Arrêtez de <span className="text-red-400">brûler</span> votre budget
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Construisons un système d'acquisition organique 140x plus rentable
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold"
            >
              Audit ROI Gratuit
            </Link>
            <Link
              href="/realisations"
              className="border border-yellow-400 text-yellow-400 px-8 py-4 rounded-lg hover:bg-yellow-400 hover:text-black transition-colors font-bold"
            >
              Voir la transformation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}