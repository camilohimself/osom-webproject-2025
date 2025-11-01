import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'
import FloatingCTA from '@/components/ui/FloatingCTA'
import { getFAQSchemaEssentiel, getServiceSchemaEssentiel, getBreadcrumbSchema } from '@/lib/structured-data'

export const metadata = {
  title: 'Création Site Internet Valais | Site Vitrine Pro 15-25 Pages | 5-9K CHF | OSOM',
  description: 'Création site web Valais professionnel. Site vitrine 15-25 pages, 5,000 CHF (3 mois) ou 9,000 CHF (6 mois). Développeur web Valais spécialisé PME. Paiement mensuel = accompagnement continu.',
  keywords: 'création site internet valais, création site web valais, site vitrine valais, créer site web valais, développeur web valais, création de site internet valais, site professionnel valais, création site pme valais',
  alternates: {
    canonical: 'https://www.osom.ch/services/essentiel',
  },
}

export default async function EssentielPage() {
  const dictionary = await getDictionary(defaultLocale)

  // Structured Data pour SEO
  const faqSchema = getFAQSchemaEssentiel()
  const serviceSchema = getServiceSchemaEssentiel()
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.osom.ch' },
    { name: 'Services', url: 'https://www.osom.ch/services' },
    { name: 'Package Essentiel', url: 'https://www.osom.ch/services/essentiel' }
  ])

  return (
    <div className="min-h-screen bg-black">
      <ScrollProgressIndicator />
      <FloatingCTA text="Démarrer Essentiel" href="/contact?package=essentiel" />

      {/* Structured Data JSON-LD pour SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section - SANS PRIX */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-black via-black to-yellow-400/5 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310B981' fill-opacity='0.1'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
            <span className="text-yellow-400 text-sm font-medium tracking-wide uppercase">Package Essentiel</span>
          </div>

          <h1 className="mb-12 leading-tight text-center px-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            <div className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-400 mb-3">
              Votre
            </div>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
              SITE
            </div>
            <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-yellow-400 leading-none tracking-tight">
              PROFESSIONNEL
            </div>
            <div className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-300 mt-6">
              clé en main
            </div>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            15-25 pages premium. Design responsive. SEO de base. Accompagnement dev actif 3-6 mois.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-bold text-center shadow-lg"
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

      {/* What's Included */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Qu'est-ce qui est <span className="text-yellow-400 font-bold">inclus?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "15-25 pages sur mesure",
                description: "Architecture pensée pour vos besoins. Chaque page designée individuellement.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              },
              {
                title: "Design responsive premium",
                description: "Interface moderne adaptée desktop, tablet, mobile. Performance garantie.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
              },
              {
                title: "SEO technique de base",
                description: "Structure optimisée Google. Meta tags. Performance < 2s. Mobile-friendly.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              },
              {
                title: "Accompagnement mensuel actif",
                description: "Vous suivez l'évolution chaque semaine. Ajustements continus selon vos retours.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
              },
              {
                title: "Formation complète incluse",
                description: "Session 2h pour maîtriser votre site. Documentation fournie. Support questions.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              },
              {
                title: "CMS simple intégré",
                description: "Gérez votre contenu en autonomie après formation. Interface intuitive sans code.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-black/40 border border-white/10 rounded-xl p-6 hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="text-yellow-400 mb-4">{feature.icon}</div>
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

      {/* Process */}
      <section className="py-20 bg-gradient-to-b from-black to-yellow-400/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-16 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Le <span className="text-yellow-400 font-bold">processus</span>
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

      {/* Perfect For */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Parfait pour <span className="text-yellow-400 font-bold">qui?</span>
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

      {/* PRIX + Explication - Maintenant en fin de page */}
      <section className="py-20 bg-gradient-to-b from-black to-yellow-400/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Investissement <span className="text-yellow-400 font-bold">& Accompagnement</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Option 3 mois */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/20">
              <div className="text-sm text-gray-400 mb-2">Accompagnement 3 mois</div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">1,667 CHF/mois</div>
              <div className="text-xs text-gray-500 mb-6">Total: 5,000 CHF</div>
              <p className="text-sm text-gray-300">Développement intensif, livraison rapide, accompagnement actif</p>
            </div>

            {/* Option 6 mois */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-yellow-400/30 ring-2 ring-yellow-400/20">
              <div className="text-sm text-yellow-400 mb-2 flex items-center gap-2">
                Accompagnement 6 mois
                <span className="text-xs bg-yellow-400 text-black px-2 py-0.5 rounded-full font-bold">POPULAIRE</span>
              </div>
              <div className="text-5xl font-bold text-yellow-400 mb-2">1,500 CHF/mois</div>
              <div className="text-xs text-gray-500 mb-6">Total: 9,000 CHF</div>
              <p className="text-sm text-gray-300">Développement étalé, plus de temps pour ajustements, meilleur tarif mensuel</p>
            </div>
          </div>

          {/* Explication paiement mensuel */}
          <div className="bg-gradient-to-br from-yellow-400/10 to-black border border-yellow-400/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Pourquoi le <span className="text-yellow-400 font-bold">paiement mensuel?</span>
            </h3>
            <div className="space-y-6 text-gray-300">
              <div>
                <div className="text-lg font-semibold text-yellow-400 mb-2">Ce n'est PAS un site livré puis abandonné</div>
                <p className="leading-relaxed">
                  Le paiement mensuel signifie que <strong>je travaille activement sur votre projet chaque mois</strong>: développement progressif, ajustements selon vos retours, optimisations continues. Vous n'attendez pas 3 mois pour voir le résultat, vous suivez l'évolution chaque semaine.
                </p>
              </div>

              <div className="bg-black/40 border border-yellow-400/30 rounded-lg p-4">
                <div className="text-yellow-400 font-semibold mb-2">Exemple concret:</div>
                <p className="text-sm text-gray-400">
                  <strong>Cabinet médical (6 mois - 9,000 CHF)</strong>:<br/>
                  Mois 1-2: Architecture + Design validé<br/>
                  Mois 3-4: Développement pages + Formulaires<br/>
                  Mois 5: SEO local + Optimisations<br/>
                  Mois 6: Formation + Livraison finale<br/>
                  <span className="text-yellow-400">= 1,500 CHF/mois pendant 6 mois, site évolutif chaque mois</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-yellow-400/10 via-black to-yellow-400/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Prêt à lancer votre <span className="text-yellow-400 font-bold">site Essentiel?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Audit gratuit 30 min. Devis transparent. Accompagnement dev 3-6 mois. À partir de 1,500 CHF/mois.
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
