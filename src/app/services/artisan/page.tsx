import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

export const metadata = {
  title: 'Package Artisan | Site professionnel 10-25 pages | OSOM Valais',
  description: 'Site web professionnel sur mesure 10-25 pages. 8,000-15,000 CHF tout compris. Design premium, SEO de base, formation incluse. 2-3 mois livraison.',
}

export default async function ArtisanPage() {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <div className="min-h-screen bg-black">
      <ScrollProgressIndicator />

      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-black via-black to-yellow-400/5 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
            <span className="text-yellow-400 text-sm font-medium tracking-wide uppercase">Package Artisan</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-light mb-6 leading-tight text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Site professionnel <span className="text-yellow-400 font-bold">sur mesure</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            10-25 pages premium. Design responsive. SEO de base. Livré en 2-3 mois.
          </p>

          <div className="flex flex-col items-center space-y-4 mb-12">
            <div className="inline-flex bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-4 border border-yellow-400/20">
              <div className="text-center">
                <div className="text-5xl font-bold text-yellow-400 mb-2">8,000 - 15,000 CHF</div>
                <div className="text-gray-400 text-sm">Projet complet tout compris</div>
              </div>
            </div>
            <div className="text-gray-400 text-sm">+ Support optionnel: 1,500 CHF/mois</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-bold text-center shadow-lg"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Démarrer mon projet Artisan
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
          <div className="bg-gradient-to-br from-yellow-400/10 to-black border border-yellow-400/20 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Comment fonctionne le <span className="text-yellow-400 font-bold">pricing?</span>
            </h2>
            <div className="space-y-6 text-gray-300">
              <div>
                <div className="text-xl font-semibold text-yellow-400 mb-2">Projet: 8,000 - 15,000 CHF</div>
                <p className="leading-relaxed">
                  Investissement unique pour le <strong>développement complet de votre site</strong> (10-25 pages). Livré en 2-3 mois. Inclut: design sur mesure, développement Next.js, SEO de base, formation 2h, 3 mois maintenance.
                </p>
              </div>
              <div className="border-t border-yellow-400/20 pt-6">
                <div className="text-xl font-semibold text-yellow-400 mb-2">Support optionnel: 1,500 CHF/mois</div>
                <p className="leading-relaxed">
                  Après livraison, vous pouvez choisir un accompagnement mensuel pour: mises à jour régulières, support prioritaire email 48h, ajustements mineurs. <strong>Totalement optionnel.</strong>
                </p>
              </div>
              <div className="bg-black/40 border border-green-400/30 rounded-lg p-4 mt-6">
                <div className="text-green-400 font-semibold mb-2">Exemple concret:</div>
                <p className="text-sm text-gray-400">
                  Cabinet médical: 12,000 CHF projet → Site livré en 3 mois → Choix support 1,500 CHF/mois ou gestion autonome complète après formation.
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
            Qu'est-ce qui est <span className="text-yellow-400 font-bold">inclus?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "10-25 pages sur mesure",
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
                title: "CMS simple intégré",
                description: "Vous gérez votre contenu en autonomie. Interface intuitive sans code.",
                icon: "⚙️"
              },
              {
                title: "Formation 2h incluse",
                description: "Session complète pour maîtriser votre site. Documentation fournie.",
                icon: "📚"
              },
              {
                title: "3 mois maintenance",
                description: "Support technique inclus 3 mois après livraison. Bugs corrigés gratuitement.",
                icon: "🛠️"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-black/40 border border-white/10 rounded-xl p-6 hover:border-yellow-400/30 transition-all duration-300"
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
      <section className="py-20 bg-gradient-to-b from-black to-yellow-400/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Parfait pour <span className="text-yellow-400 font-bold">qui?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                type: "Cabinet médical ou juridique",
                needs: "Présence professionnelle crédible. Formulaires contact. Horaires & services."
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
                className="bg-black/60 border border-yellow-400/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-yellow-400 mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
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
            Le <span className="text-yellow-400 font-bold">processus</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Brief 30 min",
                duration: "1 jour",
                description: "Audit gratuit de vos besoins. Analyse concurrentielle. Devis transparent immédiat."
              },
              {
                step: "2",
                title: "Développement",
                duration: "2-3 mois",
                description: "Design validé → Développement itératif → Validations continues → Formation 2h."
              },
              {
                step: "3",
                title: "Livraison & Support",
                duration: "3 mois inclus",
                description: "Site en ligne → 3 mois maintenance gratuite → Support optionnel disponible."
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xl">
                      {phase.step}
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      {phase.title}
                    </h3>
                    <div className="text-yellow-400 text-sm font-medium mb-3">{phase.duration}</div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {phase.description}
                    </p>
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-6 left-[3.5rem] w-full h-0.5 bg-yellow-400/20"></div>
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
            Prêt à lancer votre <span className="text-yellow-400 font-bold">site Artisan?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Audit gratuit 30 min. Devis transparent. Livraison 2-3 mois garantie.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-10 py-5 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-bold text-lg shadow-xl"
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
