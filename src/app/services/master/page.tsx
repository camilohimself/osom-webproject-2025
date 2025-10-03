import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

export const metadata = {
  title: 'Package Master | Projets complexes API & SEO | OSOM Valais',
  description: 'Projets web complexes 25-60 pages + API + dashboards. 15,000-35,000 CHF sur 3-6 mois. Accompagnement mensuel continu inclus. SEO stratégique.',
}

export default async function MasterPage() {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <div className="min-h-screen bg-black">
      <ScrollProgressIndicator />

      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-black via-purple-900/10 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23A855F7' fill-opacity='0.15'%3E%3Cpath d='M0 0h80v80H0z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 rounded-full bg-purple-400 mr-3 animate-pulse"></div>
            <span className="text-purple-400 text-sm font-medium tracking-wide uppercase">Package Master</span>
            <span className="ml-3 bg-purple-400 text-black text-xs font-bold px-3 py-1 rounded-full">POPULAIRE</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Projets <span className="text-purple-400 font-bold">complexes</span> + Accompagnement
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            25-60 pages. API & dashboards. SEO stratégique. Optimisation continue 6 mois.
          </p>

          <div className="flex flex-col items-center space-y-6 mb-12">
            <div className="inline-flex bg-purple-400/10 backdrop-blur-sm rounded-2xl px-8 py-6 border border-purple-400/30">
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-3">15,000 - 35,000 CHF</div>
                <div className="text-gray-300 text-base font-medium mb-1">sur 3-6 mois de collaboration</div>
                <div className="text-purple-400/80 text-sm">= 2,500 - 5,833 CHF/mois tout compris</div>
              </div>
            </div>
            <div className="bg-black/60 border border-purple-400/20 rounded-xl px-6 py-4 max-w-2xl">
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                <strong className="text-purple-400">Modèle unique:</strong> Le prix total se divise par la durée du projet. C'est un <strong>partenariat mensuel</strong> (dev + SEO + support premium) pas un projet + support optionnel.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-400 text-black px-8 py-4 rounded-lg hover:bg-purple-500 transition-all duration-300 font-bold text-center shadow-lg shadow-purple-400/25"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Démarrer mon projet Master
            </Link>
            <Link
              href="#examples"
              className="border-2 border-purple-400/50 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 font-medium text-center backdrop-blur-sm"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Voir exemples concrets
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Model Deep Dive */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Comment fonctionne le <span className="text-purple-400 font-bold">pricing Master?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-400/10 to-black border border-purple-400/30 rounded-2xl p-8">
              <div className="text-2xl font-bold text-purple-400 mb-4">Exemple concret 1</div>
              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between items-center pb-3 border-b border-purple-400/20">
                  <span className="text-sm text-gray-400">Client:</span>
                  <span className="font-semibold">H-Sechement (B2B Technique)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-purple-400/20">
                  <span className="text-sm text-gray-400">Projet total:</span>
                  <span className="font-semibold text-purple-400">24,000 CHF</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-purple-400/20">
                  <span className="text-sm text-gray-400">Durée:</span>
                  <span className="font-semibold">6 mois</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-white">Coût mensuel:</span>
                  <span className="text-2xl font-bold text-purple-400">4,000 CHF/mois</span>
                </div>
                <div className="bg-black/40 rounded-lg p-4 mt-4">
                  <div className="text-xs text-gray-400 mb-2">Inclus chaque mois:</div>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>✓ Migration Next.js + développement</li>
                    <li>✓ Dashboard performance personnalisé</li>
                    <li>✓ SEO technique + optimisation continue</li>
                    <li>✓ Support prioritaire 24h</li>
                    <li>✓ Sessions stratégie mensuelles</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-400/10 to-black border border-purple-400/30 rounded-2xl p-8">
              <div className="text-2xl font-bold text-purple-400 mb-4">Exemple concret 2</div>
              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between items-center pb-3 border-b border-purple-400/20">
                  <span className="text-sm text-gray-400">Client:</span>
                  <span className="font-semibold">Maîtrise Cathédrale</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-purple-400/20">
                  <span className="text-sm text-gray-400">Projet total:</span>
                  <span className="font-semibold text-purple-400">12,000 CHF</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-purple-400/20">
                  <span className="text-sm text-gray-400">Durée:</span>
                  <span className="font-semibold">4 mois</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-white">Coût mensuel:</span>
                  <span className="text-2xl font-bold text-purple-400">3,000 CHF/mois</span>
                </div>
                <div className="bg-black/40 rounded-lg p-4 mt-4">
                  <div className="text-xs text-gray-400 mb-2">Inclus chaque mois:</div>
                  <ul className="text-xs text-gray-300 space-y-1">
                    <li>✓ Site 18 pages + système événements</li>
                    <li>✓ Intégration calendrier 2025-2026</li>
                    <li>✓ SEO local culturel Sion/Valais</li>
                    <li>✓ Formation équipe continue</li>
                    <li>✓ Support prioritaire</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-400/10 border border-green-400/30 rounded-2xl p-8">
            <div className="flex items-start">
              <div className="text-3xl mr-4">💡</div>
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-3">Pourquoi ce modèle?</h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Les projets Master sont <strong>complexes et évolutifs</strong>. Vous ne payez pas un site puis un support séparé. Vous payez un <strong>partenariat mensuel</strong> où chaque mois inclut: développement actif, optimisation SEO continue, support premium, et ajustements stratégiques.
                </p>
                <p className="text-gray-400 text-sm">
                  Après les 3-6 mois initiaux, vous pouvez choisir de continuer l'optimisation (2,500 CHF/mois recommandé) ou gérer en autonomie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-black" id="includes">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Qu'est-ce qui est <span className="text-purple-400 font-bold">inclus?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "25-60 pages architecture custom",
                description: "Sites complexes pensés pour durer. Navigation multi-niveaux. Systèmes sur mesure.",
              },
              {
                title: "Intégrations API complexes",
                description: "Google Calendar, CRM, paiements, analytics. Automatisation workflows.",
              },
              {
                title: "Dashboard analytics personnalisé",
                description: "Temps réel. KPIs métier. Suivi performance. Accessible 24/7.",
              },
              {
                title: "SEO hyper-local stratégique",
                description: "7+ pages locales optimisées. Domination Google local. Stratégie long terme.",
              },
              {
                title: "Sessions optimisation 6 mois",
                description: "Meetings mensuels. A/B tests. Analytics. Améliorations continues basées data.",
              },
              {
                title: "Formation équipe 4h",
                description: "Formation complète CMS + dashboard + stratégie. Documentation fournie.",
              },
              {
                title: "Support prioritaire 24h",
                description: "Email prioritaire réponse < 24h. Bugs corrigés immédiatement.",
              },
              {
                title: "Performance garantie",
                description: "< 2s loading garanti. 90+ PageSpeed. Mobile-first. Tests continus.",
              },
              {
                title: "Code propriété complète",
                description: "Vous possédez 100% du code. Accès GitHub. Documentation technique.",
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-400/10 to-black/60 border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-purple-400/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-4 h-4 bg-purple-400 rounded-full"></div>
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

      {/* Real Examples */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900/10" id="examples">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Projets Master <span className="text-purple-400 font-bold">réalisés</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* H-Sechement */}
            <div className="bg-black/60 border border-purple-400/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">H-Sechement</h3>
                  <div className="text-purple-400 text-sm font-medium">B2B Technique Arc Lémanique</div>
                </div>
                <div className="bg-purple-400 text-black text-xs font-bold px-3 py-1 rounded-full">6 MOIS</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3"></div>
                  <span className="text-gray-300 text-sm">Migration Next.js + Dashboard performance personnalisé</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3"></div>
                  <span className="text-gray-300 text-sm">SEO technique: Position #2 Google "entreprise assèchement arc lémanique"</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3"></div>
                  <span className="text-gray-300 text-sm">Performance: 65/100 → 95+/100 PageSpeed</span>
                </div>
              </div>

              <div className="bg-purple-400/10 rounded-lg p-4 mb-6">
                <div className="text-xs text-purple-400 font-semibold mb-2">Résultats mesurables</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-purple-400">+150%</div>
                    <div className="text-xs text-gray-400">Visibilité Google</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">1,287</div>
                    <div className="text-xs text-gray-400">Impressions/mois</div>
                  </div>
                </div>
              </div>

              <Link
                href="/realisations/h-sechement"
                className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors inline-flex items-center"
              >
                Voir case study complète
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Maîtrise Cathédrale */}
            <div className="bg-black/60 border border-purple-400/30 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-300">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Maîtrise Cathédrale Sion</h3>
                  <div className="text-purple-400 text-sm font-medium">Institution Culturelle Valais</div>
                </div>
                <div className="bg-purple-400 text-black text-xs font-bold px-3 py-1 rounded-full">4 MOIS</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3"></div>
                  <span className="text-gray-300 text-sm">Site culturel 18 pages + système événements</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3"></div>
                  <span className="text-gray-300 text-sm">Intégration calendrier concerts 2025-2026 complet</span>
                </div>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mr-3"></div>
                  <span className="text-gray-300 text-sm">SEO local: "concerts cathédrale sion", "chorale valais"</span>
                </div>
              </div>

              <div className="bg-purple-400/10 rounded-lg p-4 mb-6">
                <div className="text-xs text-purple-400 font-semibold mb-2">Impact</div>
                <div className="text-sm text-gray-300 leading-relaxed">
                  Crédibilité institutionnelle renforcée. Communication événements centralisée. Partenariats culturels valorisés.
                </div>
              </div>

              <Link
                href="/realisations/maitrise-cathedrale"
                className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors inline-flex items-center"
              >
                Voir case study complète
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Parfait pour <span className="text-purple-400 font-bold">qui?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                type: "PME technique B2B",
                description: "Besoin dashboards performance, intégrations CRM/Analytics, SEO compétitif secteur technique."
              },
              {
                type: "Institution culturelle",
                description: "Calendrier événements complexe, billetterie, partenaires, crédibilité professionnelle."
              },
              {
                type: "E-commerce premium",
                description: "Catalogue produits 100+, paiements, analytics avancées, optimisation conversion continue."
              },
              {
                type: "Cabinet multi-praticiens",
                description: "Prises RDV en ligne, intégrations agendas, espace patient, SEO local multi-villes."
              }
            ].map((profile, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-400/10 to-black border border-purple-400/20 rounded-xl p-6 hover:border-purple-400/40 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {profile.type}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-purple-400/10 via-black to-purple-400/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Projet complexe en <span className="text-purple-400 font-bold">tête?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Discutons de votre vision. Audit gratuit 30 min. Devis transparent basé sur vos besoins réels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-400 text-black px-10 py-5 rounded-lg hover:bg-purple-500 transition-all duration-300 font-bold text-lg shadow-xl shadow-purple-400/25"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Discuter de mon projet Master
            </Link>
            <Link
              href="/services"
              className="border-2 border-purple-400/50 text-purple-400 px-10 py-5 rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 font-medium backdrop-blur-sm"
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
