import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

export const metadata = {
  title: 'Optimisation Continue | SEO + Analytics | OSOM Valais',
  description: 'Transformez votre site existant en machine de conversion. 1,500-4,000 CHF/mois. SEO local, A/B tests, analytics avancées, dashboards temps réel.',
}

export default async function OptimisationContinuePage() {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <div className="min-h-screen bg-black">
      <ScrollProgressIndicator />

      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-black via-yellow-900/10 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.15'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
            <span className="text-yellow-400 text-sm font-medium tracking-wide uppercase">Optimisation Continue</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Transformez votre site en <span className="text-yellow-400 font-bold">machine de conversion</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Pour sites existants. SEO local continu + A/B tests + analytics avancées. Sessions mensuelles 6-12 mois.
          </p>

          <div className="flex flex-col items-center space-y-6 mb-12">
            <div className="inline-flex bg-yellow-400/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-yellow-400/30">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-3">1,500 - 4,000 CHF/mois</div>
                <div className="text-gray-300 text-base font-medium">Engagement 6-12 mois recommandé</div>
              </div>
            </div>
            <div className="bg-black/60 border border-yellow-400/20 rounded-xl px-6 py-4 max-w-2xl">
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                <strong className="text-yellow-400">Modèle mensuel:</strong> Vous avez déjà un site? Nous l'optimisons chaque mois pour générer plus de conversions. SEO + Analytics + Tests continus.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-bold text-center shadow-lg"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Audit gratuit de mon site
            </Link>
            <Link
              href="#tarifs"
              className="border-2 border-yellow-400/50 text-yellow-400 px-8 py-4 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 font-medium text-center backdrop-blur-sm"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Voir tarification
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-24 bg-gradient-to-b from-black to-yellow-900/5" id="tarifs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Choisissez votre <span className="text-yellow-400 font-bold">niveau d'optimisation</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Essential */}
            <div className="bg-gradient-to-br from-white/5 to-black border border-white/20 rounded-2xl p-8 hover:border-yellow-400/30 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-white mb-2">Essential</div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">1,500 CHF</div>
                <div className="text-sm text-gray-400">par mois</div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "SEO local de base (3 pages)",
                  "Analytics + rapport mensuel",
                  "1 session optimisation/mois",
                  "Support email 48h",
                  "Ajustements mineurs inclus"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 mr-3 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-xs text-gray-500 text-center mb-6">Parfait pour: PME, artisans, professions libérales</div>
              <Link
                href="/contact"
                className="block w-full bg-white/10 text-white text-center px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold"
              >
                Choisir Essential
              </Link>
            </div>

            {/* Growth */}
            <div className="bg-gradient-to-br from-yellow-400/10 to-black border border-yellow-400/40 rounded-2xl p-8 relative scale-105 shadow-2xl shadow-yellow-400/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yellow-400 text-black text-xs font-bold px-4 py-1 rounded-full">POPULAIRE</span>
              </div>
              <div className="text-center mb-6 mt-2">
                <div className="text-2xl font-bold text-white mb-2">Growth</div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">2,500 CHF</div>
                <div className="text-sm text-gray-400">par mois</div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "SEO local stratégique (7+ pages)",
                  "Analytics avancées + dashboard",
                  "2 sessions optimisation/mois",
                  "A/B tests mensuels",
                  "Support prioritaire 24h",
                  "Audit technique trimestriel",
                  "Stratégie content marketing"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 mr-3 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-xs text-gray-500 text-center mb-6">Parfait pour: E-commerce, B2B technique, institutions</div>
              <Link
                href="/contact"
                className="block w-full bg-yellow-400 text-black text-center px-6 py-3 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-bold"
              >
                Choisir Growth
              </Link>
            </div>

            {/* Performance */}
            <div className="bg-gradient-to-br from-white/5 to-black border border-white/20 rounded-2xl p-8 hover:border-yellow-400/30 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-2xl font-bold text-white mb-2">Performance</div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">4,000 CHF</div>
                <div className="text-sm text-gray-400">par mois</div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "SEO agressif multi-mots-clés",
                  "Dashboard temps réel custom",
                  "Sessions illimitées",
                  "A/B tests + multivariate",
                  "Support 24/7 + hotline",
                  "Consultant dédié",
                  "Concurrence monitoring",
                  "Garantie résultats"
                ].map((item, i) => (
                  <li key={i} className="flex items-start text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-1.5 mr-3 flex-shrink-0"></div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-xs text-gray-500 text-center mb-6">Parfait pour: E-commerce premium, sites haute visibilité</div>
              <Link
                href="/contact"
                className="block w-full bg-white/10 text-white text-center px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 font-semibold"
              >
                Choisir Performance
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What We Optimize */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Qu'est-ce qu'on <span className="text-yellow-400 font-bold">optimise?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "SEO Local",
                items: [
                  "Positions Google local",
                  "Citations locales",
                  "Google Business Profile",
                  "Backlinks local Valais",
                  "Content local optimisé"
                ]
              },
              {
                category: "Analytics Avancées",
                items: [
                  "Tracking conversions",
                  "Funnels utilisateurs",
                  "Heatmaps + enregistrements",
                  "Dashboards KPIs métier",
                  "Alertes automatiques"
                ]
              },
              {
                category: "A/B Testing",
                items: [
                  "Headlines + CTAs",
                  "Design pages clés",
                  "Formulaires contact",
                  "Parcours utilisateur",
                  "Prix + offres"
                ]
              },
              {
                category: "Performance",
                items: [
                  "PageSpeed optimization",
                  "Core Web Vitals",
                  "Images + médias",
                  "Code + caching",
                  "Mobile experience"
                ]
              }
            ].map((cat, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-400/10 to-black border border-yellow-400/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-bold text-yellow-400 mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {cat.category}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-yellow-400 mt-1.5 mr-2 flex-shrink-0"></div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Examples */}
      <section className="py-24 bg-gradient-to-b from-black to-yellow-900/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Résultats <span className="text-yellow-400 font-bold">clients réels</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Client B2B */}
            <div className="bg-black/60 border border-yellow-400/30 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Client B2B</h3>
                  <div className="text-yellow-400 text-sm">B2B Technique</div>
                </div>
                <div className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">6 MOIS</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-yellow-400/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400">+150%</div>
                  <div className="text-xs text-gray-400">Visibilité Google</div>
                </div>
                <div className="bg-yellow-400/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400">#2</div>
                  <div className="text-xs text-gray-400">Position Google local</div>
                </div>
                <div className="bg-yellow-400/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400">1,287</div>
                  <div className="text-xs text-gray-400">Impressions/mois</div>
                </div>
                <div className="bg-yellow-400/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400">95+</div>
                  <div className="text-xs text-gray-400">PageSpeed score</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Optimisation continue Dashboard + SEO technique → Visibilité Google x2.5 en 6 mois.
              </p>
            </div>

            {/* LMDI */}
            <div className="bg-black/60 border border-yellow-400/30 rounded-2xl p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">LMDI</h3>
                  <div className="text-yellow-400 text-sm">E-commerce Premium</div>
                </div>
                <div className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">ONGOING</div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-yellow-400/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400">315</div>
                  <div className="text-xs text-gray-400">Clics organiques/mois</div>
                </div>
                <div className="bg-yellow-400/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400">3.45%</div>
                  <div className="text-xs text-gray-400">CTR (excellent)</div>
                </div>
                <div className="bg-yellow-400/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400">9,133</div>
                  <div className="text-xs text-gray-400">Impressions/mois</div>
                </div>
                <div className="bg-yellow-400/10 rounded-lg p-4">
                  <div className="text-3xl font-bold text-yellow-400">↗</div>
                  <div className="text-xs text-gray-400">Progression continue</div>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                SEO e-commerce + optimisation technique → CTR 3.45% (excellent pour e-commerce premium).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Comment ça <span className="text-yellow-400 font-bold">fonctionne?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Audit gratuit",
                description: "Analyse complète site actuel. Opportunités SEO identifiées. Proposition personnalisée."
              },
              {
                step: "2",
                title: "Setup mois 1",
                description: "Installation analytics. Dashboards configurés. Baseline metrics établies. Plan 6 mois."
              },
              {
                step: "3",
                title: "Optimisation 2-6",
                description: "SEO continu. A/B tests mensuels. Ajustements data-driven. Meetings réguliers."
              },
              {
                step: "4",
                title: "Résultats mois 6+",
                description: "Positions Google améliorées. Conversions augmentées. Décision prolongation ou autonomie."
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-2xl mx-auto mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {phase.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {phase.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-yellow-400/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-yellow-400/10 via-black to-yellow-400/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Votre site stagne? <span className="text-yellow-400 font-bold">Transformez-le</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Audit gratuit de votre site actuel. Opportunités SEO identifiées. Proposition sur mesure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-10 py-5 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-bold text-lg shadow-xl"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Audit gratuit de mon site
            </Link>
            <Link
              href="/services"
              className="border-2 border-white/30 text-white px-10 py-5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium backdrop-blur-sm"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Voir tous les packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
