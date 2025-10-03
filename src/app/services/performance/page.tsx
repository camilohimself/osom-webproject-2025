import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

export const metadata = {
  title: 'Package Performance | Projets complexes API & SEO | 10-18K sur 6-12 mois | OSOM',
  description: 'Projets web complexes 30-60 pages + API + dashboards. 10,000 CHF (6 mois) ou 18,000 CHF (12 mois). Partenariat mensuel actif = dev + SEO + support premium continu.',
  keywords: 'site web complexe, api integration, dashboard personnalisé, seo stratégique, partenariat dev, développeur valais',
}

export default async function PerformancePage() {
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
            <span className="text-purple-400 text-sm font-medium tracking-wide uppercase">Package Performance</span>
            <span className="ml-3 bg-purple-400 text-black text-xs font-bold px-3 py-1 rounded-full">POPULAIRE</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Projets <span className="text-purple-400 font-bold">complexes</span> + Partenariat
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            30-60 pages. API & dashboards. SEO stratégique. Partenariat actif 6-12 mois.
          </p>

          <div className="flex flex-col items-center space-y-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
              {/* Option 6 mois */}
              <div className="bg-purple-400/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30">
                <div className="text-sm text-gray-400 mb-2">Partenariat 6 mois</div>
                <div className="text-4xl font-bold text-purple-400 mb-1">10,000 CHF</div>
                <div className="text-gray-400 text-sm">= 1,667 CHF/mois</div>
                <div className="mt-3 text-xs text-purple-400/80">Dev + SEO + Support inclus</div>
              </div>

              {/* Option 12 mois */}
              <div className="bg-purple-400/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/40 ring-2 ring-purple-400/20">
                <div className="text-sm text-purple-400 mb-2 flex items-center gap-2">
                  Partenariat 12 mois
                  <span className="text-xs bg-purple-400 text-black px-2 py-0.5 rounded-full font-bold">MEILLEUR PRIX</span>
                </div>
                <div className="text-4xl font-bold text-purple-400 mb-1">18,000 CHF</div>
                <div className="text-gray-400 text-sm">= 1,500 CHF/mois</div>
                <div className="mt-3 text-xs text-purple-400/80">Dev + SEO + Support + Optimisations continues</div>
              </div>
            </div>

            <div className="bg-black/60 border border-purple-400/20 rounded-xl px-6 py-4 max-w-2xl">
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                <strong className="text-purple-400">Partenariat mensuel actif:</strong> Chaque mois = développement + SEO stratégique + support premium + optimisations continues. Ce n'est pas un site livré puis abandonné.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-400 text-black px-8 py-4 rounded-lg hover:bg-purple-500 transition-all duration-300 font-bold text-center shadow-lg shadow-purple-400/25"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Démarrer mon projet Performance
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
      <section id="examples" className="py-24 bg-gradient-to-b from-black to-purple-900/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Comment fonctionne le <span className="text-purple-400 font-bold">partenariat Performance?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-purple-400/10 to-black border border-purple-400/30 rounded-2xl p-8">
              <div className="text-2xl font-bold text-purple-400 mb-4">Exemple 6 mois</div>
              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between items-center pb-3 border-b border-purple-400/20">
                  <span className="text-sm text-gray-400">Type:</span>
                  <span className="font-semibold">B2B Technique / E-commerce</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-purple-400/20">
                  <span className="text-sm text-gray-400">Projet total:</span>
                  <span className="font-semibold text-purple-400">10,000 CHF</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-purple-400/20">
                  <span className="text-sm text-gray-400">Durée:</span>
                  <span className="font-semibold">6 mois</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-white">Coût mensuel:</span>
                  <span className="text-2xl font-bold text-purple-400">1,667 CHF/mois</span>
                </div>
                <div className="mt-4 pt-4 border-t border-purple-400/10">
                  <p className="text-sm text-gray-400">
                    Mois 1-2: Architecture + Design<br/>
                    Mois 3-4: Dev + API integrations<br/>
                    Mois 5-6: SEO + Dashboard + Formation
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-400/10 to-black border border-purple-400/30 rounded-2xl p-8">
              <div className="text-2xl font-bold text-purple-400 mb-4">Exemple 12 mois</div>
              <div className="space-y-4 text-gray-300">
                <div className="flex justify-between items-center pb-3 border-b border-purple-400/20">
                  <span className="text-sm text-gray-400">Type:</span>
                  <span className="font-semibold">PME Croissance / B2B SaaS</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-purple-400/20">
                  <span className="text-sm text-gray-400">Projet total:</span>
                  <span className="font-semibold text-purple-400">18,000 CHF</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-purple-400/20">
                  <span className="text-sm text-gray-400">Durée:</span>
                  <span className="font-semibold">12 mois</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="font-bold text-white">Coût mensuel:</span>
                  <span className="text-2xl font-bold text-purple-400">1,500 CHF/mois</span>
                </div>
                <div className="mt-4 pt-4 border-t border-purple-400/10">
                  <p className="text-sm text-gray-400">
                    Mois 1-3: Architecture + Design<br/>
                    Mois 4-7: Dev complet + API<br/>
                    Mois 8-10: SEO stratégique + Analytics<br/>
                    Mois 11-12: Optimisations + Scaling
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-400/10 to-black border border-purple-400/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Qu'est-ce qu'un <span className="text-purple-400 font-bold">"partenariat mensuel actif"?</span>
            </h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <div className="text-lg font-semibold text-purple-400 mb-2">TOUT est inclus chaque mois:</div>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">✓</span>
                    <span><strong>Développement actif:</strong> Je travaille sur votre projet chaque semaine, pas juste au début</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">✓</span>
                    <span><strong>SEO stratégique mensuel:</strong> Optimisations continues, contenus, backlinks, suivi positions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">✓</span>
                    <span><strong>Support premium 48h:</strong> Questions, ajustements, bugs, conseils stratégiques</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1 text-xl">✓</span>
                    <span><strong>Dashboards & Analytics:</strong> Suivi performance, conversions, ROI en temps réel</span>
                  </li>
                </ul>
              </div>
              <div className="border-t border-purple-400/20 pt-6">
                <div className="text-lg font-semibold text-purple-400 mb-2">Différence avec Essentiel:</div>
                <p className="leading-relaxed">
                  Essentiel = site livré + formation → autonomie.<br/>
                  <strong className="text-purple-400">Performance = partenariat continu</strong> → je reste actif chaque mois sur SEO, optimisations, scaling, stratégie digitale complète.
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
            Qu'est-ce qui est <span className="text-purple-400 font-bold">inclus?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "30-60 pages complexes",
                description: "Architecture avancée. Formulaires dynamiques. Systèmes personnalisés.",
                icon: "📄"
              },
              {
                title: "API & Integrations",
                description: "CRM, paiements Stripe/Twint, calendriers, systèmes tiers connectés.",
                icon: "🔌"
              },
              {
                title: "Dashboard personnalisé",
                description: "Analytics temps réel. Performance. Conversions. ROI mesurable.",
                icon: "📊"
              },
              {
                title: "SEO stratégique mensuel",
                description: "Optimisations continues. Contenus stratégiques. Backlinks qualifiés. Suivi positions.",
                icon: "🚀"
              },
              {
                title: "Support premium 48h",
                description: "Email prioritaire. Hotline technique. Conseils stratégiques. Ajustements rapides.",
                icon: "💬"
              },
              {
                title: "Partenariat actif continu",
                description: "Je travaille sur votre projet chaque mois: dev, SEO, optimisations, scaling.",
                icon: "🤝"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-black/40 border border-white/10 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
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

      {/* Perfect For */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-400/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Parfait pour <span className="text-purple-400 font-bold">qui?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                type: "PME B2B en croissance",
                needs: "Plateforme complexe 30-60 pages. API CRM. Dashboard analytics. SEO stratégique mensuel."
              },
              {
                type: "E-commerce artisanal premium",
                description: "Boutique Next.js. Paiements Stripe/Twint. Stock automatisé. SEO local + national."
              },
              {
                type: "SaaS / Tech startup",
                needs: "Site produit + landing pages. Integrations API. Analytics avancées. Scaling continu."
              },
              {
                type: "Institution culturelle",
                description: "Site 40+ pages. Calendrier automatique. Billetterie. CMS multi-utilisateurs. SEO patrimoine."
              }
            ].map((profile, index) => (
              <div
                key={index}
                className="bg-black/60 border border-purple-400/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {profile.type}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {profile.needs || profile.description}
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
            Prêt pour un <span className="text-purple-400 font-bold">partenariat Performance?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Audit gratuit 30 min. Devis transparent. Partenariat actif 6-12 mois. À partir de 1,500 CHF/mois tout compris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-400 text-black px-10 py-5 rounded-lg hover:bg-purple-500 transition-all duration-300 font-bold text-lg shadow-xl shadow-purple-400/25"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Démarrer mon projet
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
