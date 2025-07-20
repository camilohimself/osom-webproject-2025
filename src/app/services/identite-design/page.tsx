import Link from 'next/link'

export default function IdentiteDesignPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF0031' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
                Identité & <span className="text-purple-400">Design</span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Créons une identité visuelle qui marque les esprits et génère de la confiance instantanée.
              </p>
            </div>

            {/* KPI Hero */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
                <div className="text-4xl font-light text-purple-400 mb-2">+67%</div>
                <div className="text-white font-medium mb-2">Reconnaissance</div>
                <div className="text-gray-400 text-sm">Identité cohérente multi-canal</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
                <div className="text-4xl font-light text-purple-400 mb-2">2.4M</div>
                <div className="text-white font-medium mb-2">Impressions</div>
                <div className="text-gray-400 text-sm">Visibilité brand Culture Peinture</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
                <div className="text-4xl font-light text-purple-400 mb-2">95K CHF</div>
                <div className="text-white font-medium mb-2">Valeur Créée</div>
                <div className="text-gray-400 text-sm">Asset brand généré</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="bg-purple-500 text-white px-8 py-4 rounded-lg hover:bg-purple-600 transition-colors font-bold shadow-lg"
            >
              Créer mon identité de marque
            </Link>
          </div>
        </div>
      </section>

      {/* Services Design */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              <span className="text-purple-400">Design System</span> Complet
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              De la conception du logo à l'identité digitale complète
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all">
              <div className="text-purple-400 text-3xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold text-white mb-3">Logo & Identité</h3>
              <p className="text-gray-300 mb-4">Création de logo, charte graphique, déclinaisons</p>
              <div className="text-purple-400 text-sm font-medium">Design unique & mémorable</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all">
              <div className="text-purple-400 text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-3">UI/UX Design</h3>
              <p className="text-gray-300 mb-4">Interface utilisateur optimisée conversion</p>
              <div className="text-purple-400 text-sm font-medium">+45% engagement moyen</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all">
              <div className="text-purple-400 text-3xl mb-4">🖼️</div>
              <h3 className="text-xl font-semibold text-white mb-3">Supports Print</h3>
              <p className="text-gray-300 mb-4">Cartes visite, brochures, signalétique</p>
              <div className="text-purple-400 text-sm font-medium">Cohérence 360°</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all">
              <div className="text-purple-400 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">Infographies</h3>
              <p className="text-gray-300 mb-4">Visualisation de données impactante</p>
              <div className="text-purple-400 text-sm font-medium">+78% partages sociaux</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all">
              <div className="text-purple-400 text-3xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold text-white mb-3">Motion Design</h3>
              <p className="text-gray-300 mb-4">Animations, vidéos, Reels</p>
              <div className="text-purple-400 text-sm font-medium">Content viral-ready</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 p-8 rounded-xl border border-purple-500/30 hover:border-purple-500/60 transition-all">
              <div className="text-purple-400 text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-white mb-3">Brand Guidelines</h3>
              <p className="text-gray-300 mb-4">Guide d'utilisation complet</p>
              <div className="text-purple-400 text-sm font-medium">Manuel de brand</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-white mb-6">
                Case Study: <span className="text-purple-400">Culture Peinture</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Création d'une identité visuelle forte pour formation 60+ avec impact viral
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="text-gray-400 text-sm mb-1">REACH ORGANIQUE</div>
                  <div className="text-3xl font-light text-purple-400">2.4M vues</div>
                  <div className="text-gray-300">Sur 6 mois avec contenu branded</div>
                </div>
                
                <div>
                  <div className="text-gray-400 text-sm mb-1">VALEUR BRAND ASSET</div>
                  <div className="text-3xl font-light text-purple-400">95K CHF</div>
                  <div className="text-gray-300">Équivalent publicité payante</div>
                </div>
                
                <div>
                  <div className="text-gray-400 text-sm mb-1">RECONNAISSANCE</div>
                  <div className="text-3xl font-light text-purple-400">+67%</div>
                  <div className="text-gray-300">Notoriété marque Valais</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-semibold text-white mb-6">Impact Mesurable</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Engagement Rate</span>
                    <span className="text-purple-400 font-bold">67.5s</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full" style={{width: '90%'}}></div>
                  </div>
                  <div className="text-gray-400 text-xs mt-1">vs 21.3s industrie</div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Brand Recall</span>
                    <span className="text-purple-400 font-bold">78%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full" style={{width: '78%'}}></div>
                  </div>
                  <div className="text-gray-400 text-xs mt-1">Après 1 exposition</div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300">Share Rate</span>
                    <span className="text-purple-400 font-bold">12.8%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                  <div className="text-gray-400 text-xs mt-1">Contenu viral-ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              Notre <span className="text-purple-400">Processus</span>
            </h2>
            <p className="text-xl text-gray-300">
              Méthodologie éprouvée pour créer des identités mémorables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">01</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Découverte</h3>
              <p className="text-gray-300">Analyse de votre marché, concurrence, positionnement unique</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">02</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Concept</h3>
              <p className="text-gray-300">Création de 3 directions créatives alignées sur vos objectifs</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">03</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Réalisation</h3>
              <p className="text-gray-300">Développement complet de l'identité et déclinaisons</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">04</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Déploiement</h3>
              <p className="text-gray-300">Livraison des assets et guide d'utilisation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Créons votre <span className="text-purple-400">signature visuelle</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Une identité qui marque, convertit et génère de la valeur à long terme
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-500 text-white px-8 py-4 rounded-lg hover:bg-purple-600 transition-colors font-bold"
            >
              Démarrer mon branding
            </Link>
            <Link
              href="/realisations"
              className="border border-purple-500 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-500 hover:text-white transition-colors font-bold"
            >
              Voir le portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}