import Link from 'next/link'

export default function TrackingDataPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23E51743' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
                Tracking & <span className="text-pink-400">Data</span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Révélez le ROI invisible de vos actions marketing. Données vérifiables, décisions éclairées.
              </p>
            </div>

            {/* KPI Hero */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30">
                <div className="text-4xl font-light text-pink-400 mb-2">0→100%</div>
                <div className="text-white font-medium mb-2">Visibilité ROI</div>
                <div className="text-gray-400 text-sm">De aveugle à transparent</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30">
                <div className="text-4xl font-light text-pink-400 mb-2">200+</div>
                <div className="text-white font-medium mb-2">Jours Analysés</div>
                <div className="text-gray-400 text-sm">Données GA4 vérifiées</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-pink-400/30">
                <div className="text-4xl font-light text-pink-400 mb-2">14,171</div>
                <div className="text-white font-medium mb-2">Sessions Perdues</div>
                <div className="text-gray-400 text-sm">Trafic "Unassigned" récupéré</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="bg-pink-500 text-white px-8 py-4 rounded-lg hover:bg-pink-600 transition-colors font-bold shadow-lg"
            >
              Audit tracking gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Problème Critique */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              Le Problème <span className="text-red-400">Invisible</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Vos conversions se cachent dans les données mal configurées
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Case Study ADL */}
            <div className="bg-black/30 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Diagnostic Artisane de Lumière</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Sessions Trackées</span>
                    <span className="text-green-400">162 sessions</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-green-400 h-3 rounded-full" style={{width: '53%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Sessions "Unassigned"</span>
                    <span className="text-red-400 font-bold">14,171 sessions</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-red-400 h-3 rounded-full" style={{width: '90%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Événements Clés</span>
                    <span className="text-red-400 font-bold">0 configurés</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div className="bg-red-400 h-3 rounded-full" style={{width: '5%'}}></div>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-700">
                  <div className="text-red-400 text-3xl font-light mb-2">99% ROI invisible</div>
                  <div className="text-gray-400 text-sm">Conversions cachées dans les données</div>
                </div>
              </div>
            </div>

            {/* Solution OSOM */}
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">📊</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Setup GA4 Professionnel</h3>
                    <p className="text-gray-300">Configuration events, goals, ecommerce, attribution modeling</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">🔍</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Tracking Cross-Platform</h3>
                    <p className="text-gray-300">Attribution multi-touch, customer journey complet</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold">📈</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Dashboards Temps Réel</h3>
                    <p className="text-gray-300">Visualisation ROI instantanée, alertes automatiques</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Tracking */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              <span className="text-pink-400">Analytics</span> Avancé
            </h2>
            <p className="text-xl text-gray-300">
              Suite complète d'outils de mesure et d'analyse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 p-8 rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all">
              <div className="text-pink-400 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">Google Analytics 4</h3>
              <p className="text-gray-300 mb-4">Setup complet + events personnalisés</p>
              <div className="text-pink-400 text-sm font-medium">100% conversions visibles</div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 p-8 rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all">
              <div className="text-pink-400 text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Conversion Tracking</h3>
              <p className="text-gray-300 mb-4">Suivi précis chaque micro-conversion</p>
              <div className="text-pink-400 text-sm font-medium">Attribution multi-touch</div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 p-8 rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all">
              <div className="text-pink-400 text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-3">Tag Manager</h3>
              <p className="text-gray-300 mb-4">Gestion centralisée tous les tags</p>
              <div className="text-pink-400 text-sm font-medium">Déploiement sans dev</div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 p-8 rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all">
              <div className="text-pink-400 text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-3">Cross-Device</h3>
              <p className="text-gray-300 mb-4">Parcours client mobile → desktop</p>
              <div className="text-pink-400 text-sm font-medium">User ID tracking</div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 p-8 rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all">
              <div className="text-pink-400 text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-white mb-3">Heatmaps & UX</h3>
              <p className="text-gray-300 mb-4">Analyse comportementale utilisateurs</p>
              <div className="text-pink-400 text-sm font-medium">Hotjar + Clarity</div>
            </div>
            
            <div className="bg-gradient-to-br from-pink-500/10 to-pink-500/5 p-8 rounded-xl border border-pink-500/30 hover:border-pink-500/60 transition-all">
              <div className="text-pink-400 text-3xl mb-4">📈</div>
              <h3 className="text-xl font-semibold text-white mb-3">Dashboards Custom</h3>
              <p className="text-gray-300 mb-4">Rapports automatisés business-focused</p>
              <div className="text-pink-400 text-sm font-medium">Data Studio intégré</div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              Calculateur <span className="text-pink-400">ROI Tracking</span>
            </h2>
            <p className="text-xl text-gray-300">
              Découvrez combien vous perdez avec un tracking défaillant
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Inputs */}
            <div className="bg-black/30 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Votre Situation</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Trafic mensuel</label>
                  <input 
                    type="number" 
                    defaultValue="1000"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Taux conversion actuel (%)</label>
                  <input 
                    type="number" 
                    defaultValue="2"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Valeur moyenne client (CHF)</label>
                  <input 
                    type="number" 
                    defaultValue="500"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white"
                  />
                </div>
              </div>
            </div>

            {/* Résultats */}
            <div className="bg-pink-500/20 rounded-2xl p-8 border border-pink-500/30">
              <h3 className="text-2xl font-semibold text-pink-400 mb-6">ROI Caché Estimé</h3>
              <div className="space-y-6">
                <div>
                  <div className="text-gray-300 mb-2">Conversions perdues/mois</div>
                  <div className="text-3xl font-light text-pink-400">~85% invisibles</div>
                  <div className="text-gray-400 text-sm">Données non-trackées</div>
                </div>
                <div>
                  <div className="text-gray-300 mb-2">Chiffre d'affaires caché</div>
                  <div className="text-3xl font-light text-pink-400">8,500 CHF</div>
                  <div className="text-gray-400 text-sm">Potentiel mensuel perdu</div>
                </div>
                <div>
                  <div className="text-gray-300 mb-2">ROI tracking OSOM</div>
                  <div className="text-3xl font-light text-pink-400">10,200%</div>
                  <div className="text-gray-400 text-sm">Retour sur investissement</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plateformes */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              <span className="text-pink-400">Intégrations</span> Complètes
            </h2>
            <p className="text-xl text-gray-300">
              Connecté à tous vos outils marketing et business
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-pink-500/20 transition-colors">
                <span className="text-pink-400 text-xl">📊</span>
              </div>
              <div className="text-white text-sm">Google Analytics</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-pink-500/20 transition-colors">
                <span className="text-pink-400 text-xl">📱</span>
              </div>
              <div className="text-white text-sm">Facebook Pixel</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-pink-500/20 transition-colors">
                <span className="text-pink-400 text-xl">🎯</span>
              </div>
              <div className="text-white text-sm">Google Ads</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-pink-500/20 transition-colors">
                <span className="text-pink-400 text-xl">📈</span>
              </div>
              <div className="text-white text-sm">HubSpot</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-pink-500/20 transition-colors">
                <span className="text-pink-400 text-xl">🔍</span>
              </div>
              <div className="text-white text-sm">Hotjar</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-pink-500/20 transition-colors">
                <span className="text-pink-400 text-xl">📋</span>
              </div>
              <div className="text-white text-sm">Data Studio</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-pink-500/5 via-transparent to-purple-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Révélez votre <span className="text-pink-400">ROI caché</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Audit tracking gratuit + setup GA4 professionnel en 48h
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-pink-500 text-white px-8 py-4 rounded-lg hover:bg-pink-600 transition-colors font-bold"
            >
              Audit Tracking Gratuit
            </Link>
            <Link
              href="/realisations"
              className="border border-pink-500 text-pink-400 px-8 py-4 rounded-lg hover:bg-pink-500 hover:text-white transition-colors font-bold"
            >
              Voir les diagnostics
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}