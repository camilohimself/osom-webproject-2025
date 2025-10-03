import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

export const metadata = {
  title: 'Package Legend | Conquête digitale complète | OSOM Valais',
  description: 'Projets stratégiques haute visibilité. 40,000-80,000 CHF sur 6-12 mois. Architecture entreprise, SEO domination locale, support 24/7, consultant dédié.',
}

export default async function LegendPage() {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <div className="min-h-screen bg-black">
      <ScrollProgressIndicator />

      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-black via-cyan-900/10 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15) 0%, transparent 50%)`,
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 rounded-full bg-cyan-400 mr-3 animate-pulse"></div>
            <span className="text-cyan-400 text-sm font-medium tracking-wide uppercase">Package Legend</span>
            <span className="ml-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-xs font-bold px-3 py-1 rounded-full">ELITE</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Conquête digitale <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">complète</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto text-center leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Architecture entreprise. SEO domination locale. Support 24/7. Consultant dédié. Garantie résultats contractuelle.
          </p>

          <div className="flex flex-col items-center space-y-6 mb-12">
            <div className="inline-flex bg-gradient-to-br from-cyan-400/10 to-blue-500/10 backdrop-blur-sm rounded-2xl px-10 py-6 border border-cyan-400/30">
              <div className="text-center">
                <div className="text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-3">
                  40,000 - 80,000 CHF
                </div>
                <div className="text-gray-300 text-base font-medium mb-1">sur 6-12 mois de partenariat stratégique</div>
                <div className="text-cyan-400/80 text-sm">= 3,333 - 6,667 CHF/mois accompagnement total</div>
              </div>
            </div>
            <div className="bg-black/60 border border-cyan-400/30 rounded-xl px-8 py-4 max-w-3xl">
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                <strong className="text-cyan-400">Partenariat stratégique:</strong> Consultant dédié, développement continu, SEO agressif, support 24/7, garanties contractuelles. Le prix mensuel inclut <strong>tout</strong> pendant 6-12 mois.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-10 py-5 rounded-lg hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 font-bold text-center text-lg"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Discuter de mon projet Legend
            </Link>
            <Link
              href="#garanties"
              className="border-2 border-cyan-400/50 text-cyan-400 px-10 py-5 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium text-center backdrop-blur-sm"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Voir garanties contractuelles
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Deep Dive */}
      <section className="py-24 bg-gradient-to-b from-black to-cyan-900/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Investment <span className="text-cyan-400 font-bold">Legend</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-cyan-400/10 to-black border border-cyan-400/30 rounded-2xl p-10">
              <div className="text-3xl font-bold text-cyan-400 mb-6">Exemple: Finance/Corporate</div>
              <div className="space-y-5 text-gray-300">
                <div className="flex justify-between items-center pb-4 border-b border-cyan-400/20">
                  <span className="text-gray-400">Investment total:</span>
                  <span className="text-2xl font-bold text-cyan-400">60,000 CHF</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-cyan-400/20">
                  <span className="text-gray-400">Durée partenariat:</span>
                  <span className="font-semibold">12 mois</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-cyan-400/20">
                  <span className="font-bold text-white">Coût mensuel:</span>
                  <span className="text-3xl font-bold text-cyan-400">5,000 CHF/mois</span>
                </div>
                <div className="bg-black/60 rounded-xl p-6 mt-6 space-y-3">
                  <div className="text-xs text-cyan-400 font-semibold mb-3">Inclus chaque mois pendant 12 mois:</div>
                  <div className="grid grid-cols-1 gap-2 text-xs text-gray-300">
                    <div className="flex items-start">
                      <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 mr-2"></div>
                      <span>Architecture entreprise complète multi-langue</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 mr-2"></div>
                      <span>Dashboards temps réel sur mesure (analytics, KPIs métier)</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 mr-2"></div>
                      <span>SEO agressif: domination Google local + national</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 mr-2"></div>
                      <span>Consultant stratégique dédié (meetings mensuels)</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 mr-2"></div>
                      <span>Support 24/7 prioritaire (email + hotline urgence)</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 mr-2"></div>
                      <span>A/B tests + optimisation conversion continue</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-1 h-1 rounded-full bg-cyan-400 mt-1.5 mr-2"></div>
                      <span>Formation équipe complète + documentation</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-400/10 to-black border border-cyan-400/30 rounded-2xl p-10">
              <div className="text-3xl font-bold text-cyan-400 mb-6">ROI attendu</div>
              <div className="space-y-6">
                <div className="bg-black/60 rounded-xl p-6">
                  <div className="text-sm text-gray-400 mb-2">Secteur Finance (wealth management)</div>
                  <div className="text-3xl font-bold text-green-400 mb-2">1 client = 50,000+ CHF/an</div>
                  <div className="text-xs text-gray-400">
                    Si le site génère 2-3 clients qualifiés/an, le ROI couvre largement l'investissement Legend.
                  </div>
                </div>

                <div className="bg-black/60 rounded-xl p-6">
                  <div className="text-sm text-gray-400 mb-2">Secteur Corporate B2B</div>
                  <div className="text-3xl font-bold text-green-400 mb-2">1 contrat = 100,000+ CHF</div>
                  <div className="text-xs text-gray-400">
                    Crédibilité digitale professionnelle = déterminant dans décision clients corporate.
                  </div>
                </div>

                <div className="bg-cyan-400/10 border border-cyan-400/30 rounded-xl p-6">
                  <div className="text-sm text-cyan-400 font-semibold mb-3">Garantie contractuelle</div>
                  <div className="text-xs text-gray-300 leading-relaxed">
                    Si objectifs SEO prédéfinis non atteints au mois 6, nous continuons l'optimisation <strong>gratuitement</strong> jusqu'à atteinte résultats ou remboursement partiel négocié.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-400/10 via-black to-green-400/10 border border-green-400/30 rounded-2xl p-8">
            <div className="flex items-start">
              <div className="text-4xl mr-4">💼</div>
              <div>
                <h3 className="text-2xl font-bold text-green-400 mb-4">Pourquoi investir Legend?</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Le package Legend n'est pas un "site web". C'est un <strong>partenariat stratégique digital de 6-12 mois</strong> où vous avez un consultant dédié qui travaille activement chaque mois sur votre domination digitale.
                </p>
                <p className="text-gray-400 text-sm">
                  Secteurs haute valeur (finance, corporate, tech scale-up) où 1-2 clients générés justifient l'investissement complet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Package <span className="text-cyan-400 font-bold">Legend</span> inclut
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Architecture entreprise complète",
                description: "Site corporate multi-langue. Systèmes complexes. Scalabilité pensée dès le départ.",
              },
              {
                title: "Dashboards temps réel sur mesure",
                description: "KPIs métier personnalisés. Analytics avancées. Alertes automatiques. Accès mobile.",
              },
              {
                title: "SEO domination locale",
                description: "Stratégie agressive long terme. Positionnement top 3 garanti mots-clés ciblés.",
              },
              {
                title: "Consultant dédié 12 mois",
                description: "Meetings mensuels stratégie. Disponibilité directe. Roadmap évolutive.",
              },
              {
                title: "Support 24/7 prioritaire",
                description: "Hotline urgence. Email prioritaire < 4h. Bugs critiques résolus immédiatement.",
              },
              {
                title: "Optimisation continue garantie",
                description: "A/B tests mensuels. Analytics. Conversion rate optimization. Data-driven.",
              },
              {
                title: "Garantie résultats contractuelle",
                description: "Objectifs SEO définis contractuellement. Pénalités si non-atteinte ou remboursement.",
              },
              {
                title: "Formation équipe complète",
                description: "Sessions multiples. Documentation technique. Knowledge transfer complet.",
              },
              {
                title: "Code + infrastructure propriété",
                description: "100% code source. Accès GitHub. Documentation architecture. Liberté totale.",
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-400/10 to-black/60 border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-400/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded"></div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-24 bg-gradient-to-b from-black to-cyan-900/10" id="garanties">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Garanties <span className="text-cyan-400 font-bold">contractuelles</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Performance technique garantie",
                details: "PageSpeed 90+ mobile & desktop. Loading < 2s garanti. Sinon: optimisation gratuite jusqu'à atteinte objectif."
              },
              {
                title: "SEO: Résultats mesurables mois 6",
                details: "Positions Google top 5 pour 5+ mots-clés stratégiques définis contractuellement. Non-atteinte = continuation gratuite ou remboursement partiel."
              },
              {
                title: "Support 24/7 avec SLA",
                details: "Email prioritaire < 4h ouvrées. Bugs critiques < 24h. Hotline urgence disponible. Pénalités si SLA non respecté."
              },
              {
                title: "Livraison jalons respectés",
                details: "Roadmap avec jalons clairs. Retards > 2 semaines = compensation financière ou ressources additionnelles gratuites."
              }
            ].map((garantie, index) => (
              <div
                key={index}
                className="bg-black/60 border border-cyan-400/30 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">{garantie.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{garantie.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Qui choisit <span className="text-cyan-400 font-bold">Legend?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                type: "Wealth management & Finance",
                description: "Clients haute valeur (50K+ CHF/client). Crédibilité digitale = critère décision. ROI 1-2 clients/an justifie investment.",
                example: "Ex: Nowssen (finance Zürich), Julius Baer, Belvoire Capital"
              },
              {
                type: "Corporate multilingue",
                description: "Présence internationale. Site corporate multi-pays. Dashboards C-level. Image professionnelle critique.",
                example: "Ex: Entreprises 50+ employés, expansion européenne"
              },
              {
                type: "Startup scale-up tech",
                description: "Levée fonds récente. Besoin crédibilité investisseurs + clients. Growth marketing agressif.",
                example: "Ex: SaaS B2B, fintech, healthtech post-seed"
              },
              {
                type: "Institutions haute visibilité",
                description: "Fondations, ONG internationales, universités. Réputation digitale = enjeu stratégique majeur.",
                example: "Ex: Think tanks, institutions académiques, fondations"
              }
            ].map((profile, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-400/10 to-black border border-cyan-400/30 rounded-2xl p-8 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {profile.type}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {profile.description}
                </p>
                <div className="text-xs text-gray-500 italic">
                  {profile.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-cyan-400/10 via-black to-blue-500/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 30% 50%, rgba(6, 182, 212, 0.2) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 50%)`,
          }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Projet stratégique <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">haute visibilité?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Discutons de votre vision. Audit stratégique gratuit 60 min. Proposition sur mesure avec garanties contractuelles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-12 py-6 rounded-lg hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 font-bold text-lg"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Discuter Legend
            </Link>
            <Link
              href="/services"
              className="border-2 border-cyan-400/50 text-cyan-400 px-12 py-6 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 font-medium backdrop-blur-sm"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Comparer packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
