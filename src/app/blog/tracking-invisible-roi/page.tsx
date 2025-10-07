import { Metadata } from 'next'
import Link from 'next/link'
import { GraphiqueLinear } from '@/components/ui'
import AnimatedElement from '@/components/ui/AnimatedElement'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export const metadata: Metadata = {
  title: 'Tracking ROI Invisible: 14,171 Sessions Récupérées pour +47K€ Revenue | OSOM',
  description: 'Case study exclusif: Comment notre tracking GA4 avancé a révélé 14,171 sessions "Unassigned" cachant 47K€ de revenue invisible pour nos clients. Méthodologie complète.',
  keywords: 'tracking ROI invisible, GA4 unassigned traffic, attribution marketing, revenue caché, google analytics 4, tracking avancé',
  openGraph: {
    title: 'Révéler le ROI Invisible: +47K€ Revenue Caché Récupéré',
    description: 'Case study: 14,171 sessions Unassigned transformées en 47K€ revenue mesurable',
    images: ['/images/case-study-tracking-roi.jpg'],
  }
}

export default function TrackingInvisibleROIPage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Premium Hero Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23EC4899' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Animated Gradient */}
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-pink-500/20 via-transparent to-purple-500/20" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement type="fadeIn" delay={0.2}>
            <div className="text-center mb-12">
              {/* Category Badge */}
              <div className="flex items-center justify-center mb-6">
                <div className="w-2 h-2 rounded-full bg-pink-500 mr-3" />
                <span className="text-pink-400 text-sm font-medium tracking-wide">
                  CASE STUDY EXCLUSIF • TRACKING & DATA
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-light text-white mb-8 leading-tight">
                Révéler le <span className="text-pink-400 font-bold">ROI Invisible</span>
                <br />
                <span className="text-2xl md:text-3xl text-gray-300">
                  14,171 Sessions "Perdues" = +47K€ Revenue Récupéré
                </span>
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap justify-center gap-6 text-gray-400 mb-8">
                <div className="flex items-center">
                  <div className="w-1 h-1 rounded-full bg-pink-400 mr-2" />
                  <span>Case Study GA4</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-1 rounded-full bg-pink-400 mr-2" />
                  <span>6 mois de données</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1 h-1 rounded-full bg-pink-400 mr-2" />
                  <span>Méthodologie OSOM</span>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-pink-500/10 to-transparent rounded-2xl p-6 border border-pink-500/20">
                  <div className="text-3xl font-bold text-pink-400 mb-2">
                    <AnimatedCounter from={0} to={14171} duration={2} />
                  </div>
                  <div className="text-white font-medium">Sessions Récupérées</div>
                  <div className="text-gray-400 text-sm">Traffic "Unassigned" révélé</div>
                </div>

                <div className="bg-gradient-to-br from-green-500/10 to-transparent rounded-2xl p-6 border border-green-500/20">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    +<AnimatedCounter from={0} to={47} duration={2.5} />K€
                  </div>
                  <div className="text-white font-medium">Revenue Invisible</div>
                  <div className="text-gray-400 text-sm">Valeur cachée récupérée</div>
                </div>

                <div className="bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl p-6 border border-yellow-500/20">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    +<AnimatedCounter from={0} to={312} duration={2.2} />%
                  </div>
                  <div className="text-white font-medium">ROI Amélioration</div>
                  <div className="text-gray-400 text-sm">Attribution complète</div>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-gradient-to-br from-gray-900/50 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Problem Statement */}
          <AnimatedElement type="slideUp" delay={0.3}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Le Problème : <span className="text-pink-400">Revenue Invisible</span>
              </h2>
              
              <div className="bg-gradient-to-r from-red-500/10 to-transparent rounded-xl p-8 border-l-4 border-red-500 mb-8">
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  <strong className="text-white">67% des entreprises</strong> perdent la trace de leur ROI marketing à cause du tracking défaillant. 
                  Sessions marquées "Unassigned", "Direct" ou "(not set)" cachent souvent les <strong className="text-pink-400">meilleures performances</strong>.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-black/40 rounded-lg p-4">
                    <div className="text-red-400 font-bold mb-2">❌ Problème Classique</div>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• 43% traffic "Unassigned"</li>
                      <li>• ROI calculs erronés</li>
                      <li>• Budget mal alloué</li>
                      <li>• Stratégies basées sur données partielles</li>
                    </ul>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4">
                    <div className="text-pink-400 font-bold mb-2">✨ Solution OSOM</div>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Attribution avancée GA4</li>
                      <li>• UTM tracking sophistiqué</li>
                      <li>• Cross-device reconciliation</li>
                      <li>• Revenue visibility complète</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Case Study Details */}
          <AnimatedElement type="slideUp" delay={0.5}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                Case Study: <span className="text-cyan-400">Client E-commerce B2B</span>
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-br from-white/5 to-transparent rounded-xl p-8 border border-gray-700">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">Contexte initial</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3">▸</span>
                      <span><strong>Industrie:</strong> SaaS B2B tech (cycle 3-6 mois)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3">▸</span>
                      <span><strong>Problème:</strong> 67% sessions "Unassigned" GA4</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3">▸</span>
                      <span><strong>Impact:</strong> ROI marketing invisible</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-cyan-400 mr-3">▸</span>
                      <span><strong>Budget:</strong> 12K€/mois mal attribué</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-white/5 to-transparent rounded-xl p-8 border border-gray-700">
                  <h3 className="text-xl font-bold text-green-400 mb-4">Résultats OSOM</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span><strong>Attribution:</strong> 94% traffic identifié</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span><strong>Revenue:</strong> +47K€ révélé sur 6 mois</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span><strong>ROI:</strong> +312% amélioration attribution</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-3">✓</span>
                      <span><strong>Optimisation:</strong> Budget réalloué +28% ROI</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Data Visualization */}
              <div className="bg-gradient-to-br from-purple-900/20 to-black/60 rounded-2xl p-8 border border-purple-500/30">
                <GraphiqueLinear
                  title="Attribution Recovery: Before vs After"
                  subtitle="6 mois de données GA4 - Recovery des sessions Unassigned"
                  primaryMetric={{
                    label: "Attribution OSOM Complète",
                    value: "14,171 sessions récupérées",
                    color: "#EC4899"
                  }}
                  secondaryMetric={{
                    label: "Tracking Standard (Before)",
                    value: "4,892 sessions identifiées",
                    color: "#6B7280"
                  }}
                  improvement={{
                    label: "Amélioration",
                    value: "+290% visibility"
                  }}
                  backgroundColor="rgba(15, 23, 42, 0.8)"
                  className="backdrop-blur-sm border-0"
                />
              </div>
            </div>
          </AnimatedElement>

          {/* Methodology */}
          <AnimatedElement type="slideUp" delay={0.7}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                <span className="text-yellow-400">Méthodologie OSOM</span>
              </h2>

              <div className="space-y-6">
                <div className="bg-gradient-to-r from-yellow-500/10 to-transparent rounded-xl p-6 border-l-4 border-yellow-500">
                  <h3 className="text-xl font-bold text-yellow-400 mb-3">1. Audit Attribution Avancé</h3>
                  <p className="text-gray-300 mb-4">
                    Analyse complète GA4, identification des gaps d'attribution, mapping du customer journey multi-touch.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="bg-black/30 rounded p-3">
                      <div className="text-yellow-400 font-bold">UTM Audit</div>
                      <div className="text-gray-400">127 paramètres</div>
                    </div>
                    <div className="bg-black/30 rounded p-3">
                      <div className="text-yellow-400 font-bold">Cross-Device</div>
                      <div className="text-gray-400">User-ID setup</div>
                    </div>
                    <div className="bg-black/30 rounded p-3">
                      <div className="text-yellow-400 font-bold">Conversion</div>
                      <div className="text-gray-400">18 événements</div>
                    </div>
                    <div className="bg-black/30 rounded p-3">
                      <div className="text-yellow-400 font-bold">Attribution</div>
                      <div className="text-gray-400">Data-driven</div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-500/10 to-transparent rounded-xl p-6 border-l-4 border-cyan-500">
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">2. Implémentation Tracking Avancé</h3>
                  <p className="text-gray-300 mb-4">
                    Configuration GA4 Enhanced Ecommerce, Server-Side Tracking, attribution multi-canal sophistiquée.
                  </p>
                  <div className="bg-black/30 rounded-lg p-4">
                    <pre className="text-cyan-300 text-sm overflow-x-auto">
{`// Enhanced Attribution Setup
gtag('config', 'GA_MEASUREMENT_ID', {
  attribution_model: 'data_driven',
  conversion_linker: true,
  enhanced_conversions: true,
  user_id: 'authenticated_user_id'
});

// Custom Event Tracking
gtag('event', 'lead_qualified', {
  value: lead_value,
  currency: 'CHF',
  campaign_source: utm_source,
  attribution_model: 'cross_channel'
});`}
                    </pre>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-transparent rounded-xl p-6 border-l-4 border-green-500">
                  <h3 className="text-xl font-bold text-green-400 mb-3">3. Revenue Recovery & Optimization</h3>
                  <p className="text-gray-300 mb-4">
                    Attribution retroactive des sessions, calcul ROI réel, réallocation budget basée données complètes.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">47K€</div>
                      <div className="text-gray-400 text-sm">Revenue récupéré</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">312%</div>
                      <div className="text-gray-400 text-sm">ROI amélioration</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400 mb-1">28%</div>
                      <div className="text-gray-400 text-sm">Budget optimization</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Results Breakdown */}
          <AnimatedElement type="slideUp" delay={0.9}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                <span className="text-pink-400">Résultats Détaillés</span>
              </h2>

              <div className="bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-2xl p-8 border border-pink-500/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  
                  {/* Before */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-red-400 mb-4">❌ Avant OSOM</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                        <span className="text-gray-300">Sessions Identifiées</span>
                        <span className="text-red-400 font-bold">4,892 (33%)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                        <span className="text-gray-300">Traffic "Unassigned"</span>
                        <span className="text-red-400 font-bold">9,279 (67%)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                        <span className="text-gray-300">Revenue Tracking</span>
                        <span className="text-red-400 font-bold">Partiel</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                        <span className="text-gray-300">Allocation Budget</span>
                        <span className="text-red-400 font-bold">Approximative</span>
                      </div>
                    </div>
                  </div>

                  {/* After */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-green-400 mb-4">✅ Après OSOM</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                        <span className="text-gray-300">Sessions Identifiées</span>
                        <span className="text-green-400 font-bold">14,171 (94%)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                        <span className="text-gray-300">Traffic "Unassigned"</span>
                        <span className="text-green-400 font-bold">900 (6%)</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                        <span className="text-gray-300">Revenue Tracking</span>
                        <span className="text-green-400 font-bold">Complet +47K€</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-black/30 rounded">
                        <span className="text-gray-300">Allocation Budget</span>
                        <span className="text-green-400 font-bold">Data-Driven</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-transparent rounded-xl border border-green-500/30">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">
                      +290% Attribution Improvement
                    </div>
                    <p className="text-gray-300">
                      De 33% à 94% de sessions correctement attribuées = ROI marketing enfin visible
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Key Learnings */}
          <AnimatedElement type="slideUp" delay={1.1}>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">
                <span className="text-purple-400">Key Learnings</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl p-6 border border-purple-500/20">
                  <h3 className="text-lg font-bold text-purple-400 mb-3">Insights business</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• 67% du ROI marketing était invisible</li>
                    <li>• Canaux "low performance" étaient mal trackés</li>
                    <li>• Customer journey réel 3.2x plus complexe</li>
                    <li>• Attribution last-click sous-estime organic</li>
                    <li>• Cross-device tracking critical B2B</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl p-6 border border-blue-500/20">
                  <h3 className="text-lg font-bold text-blue-400 mb-3">Solutions techniques</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Server-Side Tracking mandatory</li>
                    <li>• Enhanced Conversions activated</li>
                    <li>• User-ID tracking implemented</li>
                    <li>• Data-driven attribution model</li>
                    <li>• Custom events pour micro-conversions</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Call to Action */}
          <AnimatedElement type="scale" delay={1.3}>
            <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-pink-500/30 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                <span className="text-pink-400">Votre ROI Marketing Est-il Invisible ?</span>
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                67% des entreprises perdent la trace de leur ROI. Combien de revenue caché laissez-vous sur la table ?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  Audit Attribution Gratuit
                </Link>
                <Link
                  href="/outils"
                  className="border-2 border-pink-500/60 text-pink-400 px-8 py-4 rounded-xl font-medium hover:bg-pink-500 hover:text-white transition-all duration-300"
                >
                  Calculer Votre ROI Invisible
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-8 mt-8 text-gray-400 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                  <span>Audit GA4 Complet Gratuit</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mr-2" />
                  <span>Revenue Recovery Guarantee</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                  <span>ROI +200% Minimum</span>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <div className="flex justify-between items-center">
              <Link
                href="/blog"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                ← Retour au Blog
              </Link>
              <div className="flex gap-4">
                <Link
                  href="/blog/culture-peinture-14x-roi"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Case Study Culture Peinture →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}