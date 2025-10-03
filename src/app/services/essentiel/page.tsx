import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

export const metadata = {
  title: 'Package Essentiel | Site pro 15-25 pages | 5-9K sur 3-6 mois | OSOM',
  description: 'Site web professionnel 15-25 pages. 5,000 CHF (3 mois) ou 9,000 CHF (6 mois). Paiement mensuel = accompagnement dev continu. Design premium, SEO base, formation incluse.',
  keywords: 'site web 5000 chf, développeur valais, site pme, paiement mensuel, accompagnement dev, site professionnel',
}

export default async function EssentielPage() {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <div className="min-h-screen bg-black">
      <ScrollProgressIndicator />

      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-black via-black to-green-400/5 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310B981' fill-opacity='0.1'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
            <span className="text-green-400 text-sm font-medium tracking-wide uppercase">Package Essentiel</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Site professionnel <span className="text-green-400 font-bold">clé en main</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            15-25 pages premium. Design responsive. SEO de base. Accompagnement dev 3-6 mois.
          </p>

          <div className="flex flex-col items-center space-y-6 mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl">
              {/* Option 3 mois */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-green-400/20">
                <div className="text-sm text-gray-400 mb-2">Accompagnement 3 mois</div>
                <div className="text-4xl font-bold text-green-400 mb-1">5,000 CHF</div>
                <div className="text-gray-400 text-sm">= 1,667 CHF/mois</div>
              </div>

              {/* Option 6 mois */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30 ring-2 ring-green-400/20">
                <div className="text-sm text-green-400 mb-2 flex items-center gap-2">
                  Accompagnement 6 mois
                  <span className="text-xs bg-green-400 text-black px-2 py-0.5 rounded-full font-bold">POPULAIRE</span>
                </div>
                <div className="text-4xl font-bold text-green-400 mb-1">9,000 CHF</div>
                <div className="text-gray-400 text-sm">= 1,500 CHF/mois</div>
              </div>
            </div>

            <p className="text-gray-400 text-sm text-center max-w-2xl">
              Le paiement mensuel = votre développeur actif chaque mois (dev + ajustements + support) pendant toute la durée
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-400 text-black px-8 py-4 rounded-lg hover:bg-green-500 transition-all duration-300 font-bold text-center shadow-lg"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Démarrer mon projet Essentiel
            </Link>
            <Link
              href="/outils"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium text-center backdrop-blur-sm"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Audit gratuit 30 min
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Model Explanation */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-400/10 to-black border border-green-400/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Pourquoi le <span className="text-green-400 font-bold">paiement mensuel?</span>
            </h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <div className="text-xl font-semibold text-green-400 mb-2">Ce n'est PAS un site livré puis abandonné</div>
                <p className="leading-relaxed">
                  Le paiement mensuel signifie que <strong>je travaille activement sur votre projet chaque mois</strong>: développement progressif, ajustements selon vos retours, optimisations continues. Vous n'attendez pas 3 mois pour voir le résultat, vous suivez l'évolution chaque semaine.
                </p>
              </div>
              <div className="border-t border-green-400/20 pt-6">
                <div className="text-xl font-semibold text-green-400 mb-2">Flexibilité selon votre budget</div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>3 mois (5,000 CHF)</strong>: Développement intensif, livraison rapide, accompagnement actif</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-400 mt-1">✓</span>
                    <span><strong>6 mois (9,000 CHF)</strong>: Développement étalé, plus de temps pour ajustements, meilleur tarif mensuel (1,500/mois)</span>
                  </li>
                </ul>
              </div>
              <div className="bg-black/40 border border-green-400/30 rounded-lg p-4 mt-6">
                <div className="text-green-400 font-semibold mb-2">Exemple concret:</div>
                <p className="text-sm text-gray-400">
                  <strong>Cabinet médical (6 mois - 9,000 CHF)</strong>:<br/>
                  Mois 1-2: Architecture + Design validé<br/>
                  Mois 3-4: Développement pages + Formulaires<br/>
                  Mois 5: SEO local + Optimisations<br/>
                  Mois 6: Formation + Livraison finale<br/>
                  <span className="text-green-400">= 1,500 CHF/mois pendant 6 mois, site évolutif chaque mois</span>
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
            Qu'est-ce qui est <span className="text-green-400 font-bold">inclus?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "15-25 pages sur mesure",
                description: "Architecture pensée pour vos besoins. Chaque page designée individuellement.",
                icon: "📄"
              },
              {
                title: "Design responsive premium",
                description: "Interface moderne adaptée desktop, tablet, mobile. Performance garantie.",
                icon: "🎨"
              },
              {
                title: "SEO technique de base",
                description: "Structure optimisée Google. Meta tags. Performance < 2s. Mobile-friendly.",
                icon: "🔍"
              },
              {
                title: "Accompagnement mensuel actif",
                description: "Vous suivez l'évolution chaque semaine. Ajustements continus selon vos retours.",
                icon: "👨‍💻"
              },
              {
                title: "Formation complète incluse",
                description: "Session 2h pour maîtriser votre site. Documentation fournie. Support questions.",
                icon: "📚"
              },
              {
                title: "CMS simple intégré",
                description: "Gérez votre contenu en autonomie après formation. Interface intuitive sans code.",
                icon: "⚙️"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-black/40 border border-white/10 rounded-xl p-6 hover:border-green-400/30 transition-all duration-300"
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
      <section className="py-20 bg-gradient-to-b from-black to-green-400/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Parfait pour <span className="text-green-400 font-bold">qui?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                type: "Cabinet médical ou juridique",
                needs: "Présence professionnelle crédible. Formulaires contact. Horaires & services. SEO local."
              },
              {
                type: "Artisan local premium",
                description: "Menuisier, électricien, maçon haut de gamme cherchant clients qualifiés."
              },
              {
                type: "Restaurant gastronomique",
                needs: "Menu élégant. Réservations. Galerie photos. SEO local 'restaurant [ville]'."
              },
              {
                type: "Professionnel libéral",
                description: "Architecte, designer, consultant nécessitant portfolio + crédibilité."
              }
            ].map((profile, index) => (
              <div
                key={index}
                className="bg-black/60 border border-green-400/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-green-400 mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
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

      {/* Process */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Le <span className="text-green-400 font-bold">processus</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Brief 30 min gratuit",
                duration: "1 jour",
                description: "Audit de vos besoins. Analyse concurrentielle. Devis transparent. Choix 3 ou 6 mois."
              },
              {
                step: "2",
                title: "Développement actif",
                duration: "3-6 mois",
                description: "Suivi hebdomadaire. Validations continues. Ajustements selon vos retours. Site évolutif chaque mois."
              },
              {
                step: "3",
                title: "Livraison & Formation",
                duration: "Dernier mois",
                description: "Site finalisé. Formation 2h complète. Documentation. Autonomie totale après livraison."
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                      {phase.step}
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      {phase.title}
                    </h3>
                    <div className="text-green-400 text-sm font-medium mb-3">{phase.duration}</div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-6 left-[3.5rem] w-full h-0.5 bg-green-400/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-green-400/10 via-black to-green-400/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Prêt à lancer votre <span className="text-green-400 font-bold">site Essentiel?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Audit gratuit 30 min. Devis transparent. Accompagnement dev 3-6 mois. À partir de 1,500 CHF/mois.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-green-400 text-black px-10 py-5 rounded-lg hover:bg-green-500 transition-all duration-300 font-bold text-lg shadow-xl"
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
