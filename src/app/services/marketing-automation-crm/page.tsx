import Link from 'next/link'

export default function MarketingAutomationCRMPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2371C1A9' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-5xl md:text-7xl font-light text-white mb-6 tracking-tight">
                Marketing Automation & <span className="text-green-400">CRM</span>
              </h1>
              <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Automatisez vos conversions et transformez chaque prospect en client avec des systèmes intelligents.
              </p>
            </div>

            {/* KPI Hero */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
                <div className="text-4xl font-light text-green-400 mb-2">+78%</div>
                <div className="text-white font-medium mb-2">Taux Conversion</div>
                <div className="text-gray-400 text-sm">Nurturing automatisé</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
                <div className="text-4xl font-light text-green-400 mb-2">-65%</div>
                <div className="text-white font-medium mb-2">Temps Manuel</div>
                <div className="text-gray-400 text-sm">Processus automatisés</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
                <div className="text-4xl font-light text-green-400 mb-2">3.2x</div>
                <div className="text-white font-medium mb-2">Valeur Client</div>
                <div className="text-gray-400 text-sm">Lifetime value</div>
              </div>
            </div>

            <Link
              href="/contact"
              className="bg-green-400 text-black px-8 py-4 rounded-lg hover:bg-green-500 transition-colors font-bold shadow-lg"
            >
              Automatiser mes conversions
            </Link>
          </div>
        </div>
      </section>

      {/* Problème Résolu */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              Le Problème <span className="text-red-400">Crucial</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Vos prospects vous échappent car vous n'avez pas de système de nurturing automatisé
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Problème */}
            <div className="bg-red-900/20 rounded-2xl p-8 border border-red-500/30">
              <h3 className="text-2xl font-semibold text-red-400 mb-6">❌ Sans Automation</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-red-400">✗</span>
                  <span className="text-gray-300">Prospects perdus après 1er contact</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-400">✗</span>
                  <span className="text-gray-300">Follow-up manuel chronophage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-400">✗</span>
                  <span className="text-gray-300">Aucune segmentation intelligente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-red-400">✗</span>
                  <span className="text-gray-300">ROI impossible à mesurer</span>
                </div>
                <div className="pt-4 border-t border-red-500/30">
                  <div className="text-red-400 text-xl font-bold">Résultat: 85% prospects perdus</div>
                </div>
              </div>
            </div>

            {/* Solution */}
            <div className="bg-green-400/20 rounded-2xl p-8 border border-green-400/30">
              <h3 className="text-2xl font-semibold text-green-400 mb-6">✅ Avec OSOM CRM</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Nurturing automatique 7 touchpoints</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Segmentation comportementale IA</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Emails personnalisés automatiques</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-green-400">✓</span>
                  <span className="text-gray-300">Analytics temps réel + ROI</span>
                </div>
                <div className="pt-4 border-t border-green-400/30">
                  <div className="text-green-400 text-xl font-bold">Résultat: +78% conversion</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Automation */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              <span className="text-green-400">Automation</span> Complète
            </h2>
            <p className="text-xl text-gray-300">
              Système complet de lead nurturing et conversion automatisée
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-400/10 to-green-400/5 p-8 rounded-xl border border-green-400/30 hover:border-green-400/60 transition-all">
              <div className="text-green-400 text-3xl mb-4">📧</div>
              <h3 className="text-xl font-semibold text-white mb-3">Email Marketing</h3>
              <p className="text-gray-300 mb-4">Séquences automatisées personnalisées</p>
              <div className="text-green-400 text-sm font-medium">45% open rate moyen</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-400/10 to-green-400/5 p-8 rounded-xl border border-green-400/30 hover:border-green-400/60 transition-all">
              <div className="text-green-400 text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-white mb-3">Lead Scoring</h3>
              <p className="text-gray-300 mb-4">Qualification automatique prospects</p>
              <div className="text-green-400 text-sm font-medium">85% précision IA</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-400/10 to-green-400/5 p-8 rounded-xl border border-green-400/30 hover:border-green-400/60 transition-all">
              <div className="text-green-400 text-3xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold text-white mb-3">Workflows</h3>
              <p className="text-gray-300 mb-4">Processus métier automatisés</p>
              <div className="text-green-400 text-sm font-medium">-65% temps manuel</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-400/10 to-green-400/5 p-8 rounded-xl border border-green-400/30 hover:border-green-400/60 transition-all">
              <div className="text-green-400 text-3xl mb-4">👥</div>
              <h3 className="text-xl font-semibold text-white mb-3">Segmentation</h3>
              <p className="text-gray-300 mb-4">Groupes intelligents comportementaux</p>
              <div className="text-green-400 text-sm font-medium">12 critères dynamiques</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-400/10 to-green-400/5 p-8 rounded-xl border border-green-400/30 hover:border-green-400/60 transition-all">
              <div className="text-green-400 text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-white mb-3">Analytics Avancé</h3>
              <p className="text-gray-300 mb-4">Attribution multi-touch, ROI précis</p>
              <div className="text-green-400 text-sm font-medium">Dashboard temps réel</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-400/10 to-green-400/5 p-8 rounded-xl border border-green-400/30 hover:border-green-400/60 transition-all">
              <div className="text-green-400 text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-3">Chat & Support</h3>
              <p className="text-gray-300 mb-4">Réponses automatiques intelligentes</p>
              <div className="text-green-400 text-sm font-medium">24/7 disponibilité</div>
            </div>
          </div>
        </div>
      </section>

      {/* Funnel Automatisé */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              Funnel <span className="text-green-400">Automatisé</span>
            </h2>
            <p className="text-xl text-gray-300">
              Du prospect anonyme au client fidèle, chaque étape optimisée
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* Étape 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Capture</h3>
              <p className="text-gray-400 text-sm">Landing page + lead magnet</p>
              <div className="text-green-400 text-xs mt-2">35% conversion</div>
            </div>
            
            {/* Flèche */}
            <div className="flex items-center justify-center">
              <div className="w-full h-0.5 bg-green-400"></div>
              <span className="text-green-400 mx-2">→</span>
            </div>
            
            {/* Étape 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Nurturing</h3>
              <p className="text-gray-400 text-sm">7 emails automatiques</p>
              <div className="text-green-400 text-xs mt-2">45% open rate</div>
            </div>
            
            {/* Flèche */}
            <div className="flex items-center justify-center">
              <div className="w-full h-0.5 bg-green-400"></div>
              <span className="text-green-400 mx-2">→</span>
            </div>
            
            {/* Étape 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-black font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Conversion</h3>
              <p className="text-gray-400 text-sm">Consultation automatique</p>
              <div className="text-green-400 text-xs mt-2">28% booking</div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="text-4xl font-light text-green-400 mb-4">+78% conversion globale</div>
            <p className="text-gray-300">vs approche manuelle traditionnelle</p>
          </div>
        </div>
      </section>

      {/* Intégrations */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-white mb-6">
              <span className="text-green-400">Intégrations</span> Natives
            </h2>
            <p className="text-xl text-gray-300">
              Connecté à tous vos outils business existants
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 text-xl">📧</span>
              </div>
              <div className="text-white text-sm">HubSpot</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 text-xl">📊</span>
              </div>
              <div className="text-white text-sm">Pipedrive</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 text-xl">📈</span>
              </div>
              <div className="text-white text-sm">Salesforce</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 text-xl">📱</span>
              </div>
              <div className="text-white text-sm">WhatsApp</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 text-xl">💳</span>
              </div>
              <div className="text-white text-sm">Stripe</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 text-xl">📋</span>
              </div>
              <div className="text-white text-sm">Zapier</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-green-400/5 via-transparent to-blue-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
            Automatisez vos <span className="text-green-400">conversions</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12">
            Audit gratuit de vos processus + stratégie d'automation personnalisée
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-400 text-black px-8 py-4 rounded-lg hover:bg-green-500 transition-colors font-bold"
            >
              Audit Automation Gratuit
            </Link>
            <Link
              href="/realisations"
              className="border border-green-400 text-green-400 px-8 py-4 rounded-lg hover:bg-green-400 hover:text-black transition-colors font-bold"
            >
              Voir les résultats
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}