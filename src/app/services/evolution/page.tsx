import Link from 'next/link'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'
import ProgressionBar from '@/components/ui/ProgressionBar'
import FloatingCTA from '@/components/ui/FloatingCTA'

export const metadata = {
  title: 'Package Évolution | Partenariat Digital PME en Croissance | 2,500 CHF/mois | OSOM',
  description: 'Package Évolution OSOM : partenariat digital pour PME 5-15 employés. SEO local mensuel, mise à jour contenu, support 72h. 2,500 CHF/mois. Grandissez avec un expert digital.',
  keywords: 'partenariat digital valais, seo local valais, gestion site web pme, agence digitale suivi mensuel, marketing digital valais, présence web continue',
}

export default function EvolutionPage() {
  return (
    <div className="min-h-screen bg-black">
      <ScrollProgressIndicator />
      <FloatingCTA text="Démarrer Évolution" href="/contact?package=evolution" />

      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-black via-black to-purple-500/5 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238B5CF6' fill-opacity='0.1'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 rounded-full bg-purple-400 mr-3"></div>
            <span className="text-purple-400 text-sm font-medium tracking-wide uppercase">Package Évolution</span>
          </div>

          {/* Ligne de progression animée */}
          <ProgressionBar />

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight text-center px-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            <span className="block mb-4">
              Votre entreprise{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 font-bold">
                grandit
              </span>
              .
            </span>
            <span className="block">
              Votre digital{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 font-bold">
                aussi
              </span>
              .
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto text-center leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Le partenariat digital pour PME en croissance. SEO local, mises à jour continues, support réactif.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-500 text-white px-8 py-4 rounded-lg hover:bg-purple-400 transition-all duration-300 font-bold text-center shadow-lg"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Lancer mon Évolution
            </Link>
            <Link
              href="/outils"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium text-center backdrop-blur-sm"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Audit SEO gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Pour qui ? */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Ce package est <span className="text-purple-400 font-bold">pour vous</span> si :
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "Vous avez entre 5 et 15 employés",
              "Votre chiffre d'affaires dépasse 500k CHF/an",
              "Vous n'avez plus le temps de gérer votre site web",
              "Vous voulez plus de visibilité locale (SEO)",
              "Votre budget marketing est maîtrisé (< 3k CHF/mois)",
              "Vous cherchez un partenaire digital fiable"
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-gradient-to-br from-purple-500/10 to-black/40 border border-purple-500/20 rounded-xl p-5 hover:border-purple-400/40 transition-all duration-300"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-white text-lg leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Ce package N'est PAS pour vous si :
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-red-400">✗</span>
                <span>Vous démarrez seul → <Link href="/services/essentiel" className="text-yellow-400 hover:underline">Package Essentiel</Link></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-red-400">✗</span>
                <span>Vous visez la domination marché → <Link href="/services/performance" className="text-yellow-400 hover:underline">Package Performance</Link></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-500/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Qu'est-ce qui est <span className="text-purple-400 font-bold">inclus ?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "20-30 pages sur mesure",
                description: "Site entièrement personnalisé (pas de template). Design responsive desktop, tablet, mobile.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              },
              {
                title: "SEO local mensuel",
                description: "Optimisation continue pour 1 ville cible. Suivi positions Google, trafic organique, Google My Business.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              },
              {
                title: "Mise à jour contenu mensuelle",
                description: "1 modification de contenu par mois incluse (texte, images, nouvelle page simple).",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
              },
              {
                title: "2 articles blog/mois",
                description: "Contenu SEO optimisé pour votre secteur. Mots-clés ciblés. Publication et suivi intégrés.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" /></svg>
              },
              {
                title: "Support 72h",
                description: "Réponse garantie sous 72h (jours ouvrables). Email prioritaire. Interventions techniques rapides.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              },
              {
                title: "Dashboard analytics standard",
                description: "Suivi trafic, conversions, sources. Rapport mensuel automatique. Accès 24/7.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              },
              {
                title: "Formulaires & intégrations basiques",
                description: "Formulaire contact, newsletter, Google Maps. Email notifications configurées.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
              },
              {
                title: "Formation 2h incluse",
                description: "Session complète pour maîtriser votre site. Documentation fournie. Replay enregistré.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              },
              {
                title: "Réunion bilan trimestrielle",
                description: "Point stratégique tous les 3 mois. Analyse résultats, ajustements, prochaines étapes.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-black/40 border border-white/10 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">{feature.icon}</div>
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

      {/* What's NOT Included */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Ce qui <span className="text-red-400 font-bold">n'est PAS</span> inclus
          </h2>

          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Pour garder un prix accessible, certaines fonctionnalités avancées sont réservées au{' '}
            <Link href="/services/performance" className="text-yellow-400 hover:underline font-semibold">
              Package Performance
            </Link>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "API & intégrations complexes",
                description: "CRM, paiements, calendriers synchronisés, dashboards personnalisés.",
                available: "Performance"
              },
              {
                title: "Développement continu illimité",
                description: "Évolutions fonctionnelles illimitées, nouvelles features chaque mois.",
                available: "Performance"
              },
              {
                title: "Support prioritaire 48h",
                description: "Réponse garantie en 48h max (vs 72h Évolution).",
                available: "Performance"
              },
              {
                title: "SEO multi-villes / international",
                description: "Optimisation pour plusieurs villes ou pays (FR/EN/DE).",
                available: "Performance"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-500/5 to-black/40 border border-red-500/20 rounded-xl p-6"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                    {item.title}
                  </h3>
                  <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded font-semibold whitespace-nowrap ml-2">
                    {item.available}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section - Approche douce */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Investissement <span className="text-purple-400 font-bold">mensuel</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 6 mois */}
            <div className="bg-gradient-to-br from-white/5 to-black/40 border border-white/10 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-purple-400 text-sm font-medium uppercase tracking-wide mb-2">Engagement 6 mois</div>
                <div className="text-5xl font-bold text-purple-400 mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  2,750 CHF/mois
                </div>
                <div className="text-xs text-gray-500 mt-2">Total: 16,500 CHF</div>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-400 transition-all font-semibold text-center"
              >
                Commencer sur 6 mois
              </Link>
            </div>

            {/* 12 mois - Populaire */}
            <div className="bg-gradient-to-br from-purple-500/20 to-black/40 border-2 border-purple-400 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                POPULAIRE
              </div>
              <div className="text-center mb-6">
                <div className="text-purple-400 text-sm font-medium uppercase tracking-wide mb-2">Engagement 12 mois</div>
                <div className="text-5xl font-bold text-purple-400 mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  2,500 CHF/mois
                </div>
                <div className="text-xs text-gray-500 mt-2">Total: 30,000 CHF</div>
                <div className="text-xs text-green-400 mt-1 font-semibold">Économie: 3,000 CHF vs 6 mois</div>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-yellow-400 text-black py-3 rounded-lg hover:bg-yellow-300 transition-all font-bold text-center"
              >
                Meilleur prix - 12 mois
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center text-gray-400 text-sm">
            <p>Paiement mensuel • Garantie résultats • Sans engagement après la période</p>
          </div>
        </div>
      </section>

      {/* Upsell Performance */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-yellow-400/10 to-purple-500/10 border border-yellow-400/30 rounded-2xl p-10">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Prêt pour la <span className="text-yellow-400 font-bold">vitesse supérieure ?</span>
            </h2>

            <p className="text-gray-300 text-center mb-8 leading-relaxed">
              Après 12 mois Évolution, <strong className="text-white">40% de nos clients</strong> passent à Performance pour accélérer leur croissance.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Développement continu illimité",
                "SEO stratégique multi-canaux",
                "Dashboard ROI temps réel",
                "Support prioritaire 48h"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center">
                    <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/services/performance"
                className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-xl hover:bg-yellow-300 transition-all font-bold shadow-lg"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                Découvrir Package Performance →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Questions <span className="text-purple-400 font-bold">fréquentes</span>
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Quelle est la différence entre Évolution et Performance ?",
                a: "Évolution convient aux PME qui veulent un suivi mensuel avec SEO local et mises à jour régulières. Performance est pour les entreprises ambitieuses qui veulent déléguer TOUT le digital : dev continu illimité, SEO stratégique multi-villes, dashboard custom, support 48h."
              },
              {
                q: "Puis-je passer d'Évolution à Performance en cours de route ?",
                a: "Absolument ! 40% de nos clients Évolution passent à Performance après 12 mois. Votre historique et nos acquis sont conservés, vous ne repartez pas de zéro."
              },
              {
                q: "Que se passe-t-il après les 6 ou 12 mois ?",
                a: "Vous pouvez continuer mois par mois sans engagement, renouveler un contrat annuel avec meilleur prix, ou passer à Performance. Aucune obligation, vous gardez votre site dans tous les cas."
              },
              {
                q: "Le SEO local couvre combien de villes ?",
                a: "Le package Évolution optimise pour 1 ville cible (ex: Sion). Si vous voulez plusieurs villes (Sion + Sierre + Martigny) ou du SEO international, c'est dans Performance."
              },
              {
                q: "Combien de temps avant de voir des résultats SEO ?",
                a: "Les premiers résultats SEO apparaissent généralement entre 3 et 6 mois. C'est pourquoi nous recommandons l'engagement 12 mois pour maximiser le ROI."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-black/40 border border-white/10 rounded-xl p-6 hover:border-purple-400/30 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-white mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {faq.q}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <span className="text-purple-400 text-sm font-medium tracking-wide uppercase">Prêt à grandir ensemble ?</span>

            <h3 className="text-4xl md:text-5xl font-light text-white mt-4 mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Lançons votre <span className="text-purple-400 font-bold">Évolution</span>
            </h3>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Une question ? Un projet ? Discutons de votre croissance digitale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-400 transition-all font-bold"
              >
                Consultation gratuite 30 min
              </Link>
              <Link
                href="/outils"
                className="border-2 border-white/30 text-white px-8 py-3 rounded-lg hover:bg-white hover:text-black transition-all"
              >
                Audit SEO gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
