import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'

export const metadata = {
  title: 'Package Sur Mesure | Conquête digitale complète | 20K+ sur 12-24 mois | OSOM',
  description: 'Projets stratégiques haute visibilité. 20,000 CHF+ sur 12-24 mois. Architecture entreprise, SEO domination, support 24/7, garanties contractuelles. Partenariat long terme.',
  keywords: 'projet sur mesure, site entreprise, seo domination, garantie résultats, partenariat long terme, développeur elite valais',
}

export default async function SurMesurePage() {
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
            <span className="text-cyan-400 text-sm font-medium tracking-wide uppercase">Package Sur Mesure</span>
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
                  20,000 - 100,000+ CHF
                </div>
                <div className="text-gray-300 text-base font-medium mb-1">sur 12-24 mois de partenariat stratégique</div>
                <div className="text-cyan-400/80 text-sm">Devis personnalisé selon ambitions</div>
              </div>
            </div>
            <div className="bg-black/60 border border-cyan-400/30 rounded-xl px-8 py-4 max-w-3xl">
              <p className="text-gray-300 text-sm text-center leading-relaxed">
                <strong className="text-cyan-400">Partenariat stratégique:</strong> Consultant dédié, développement continu, SEO agressif, support 24/7, garanties contractuelles. Budget adapté à vos objectifs de croissance.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-10 py-5 rounded-lg hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 font-bold text-center text-lg"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Discuter de mon projet Sur Mesure
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

      {/* Pricing Examples */}
      <section className="py-24 bg-gradient-to-b from-black to-cyan-900/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Exemples <span className="text-cyan-400 font-bold">d'investissement</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-cyan-400/10 to-black border border-cyan-400/30 rounded-2xl p-10">
              <div className="text-3xl font-bold text-cyan-400 mb-6">PME Croissance rapide</div>
              <div className="space-y-5 text-gray-300">
                <div className="flex justify-between items-center pb-4 border-b border-cyan-400/20">
                  <span className="text-gray-400">Investment total:</span>
                  <span className="text-2xl font-bold text-cyan-400">24,000 CHF</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-cyan-400/20">
                  <span className="text-gray-400">Durée partenariat:</span>
                  <span className="font-semibold">12 mois</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-cyan-400/20">
                  <span className="font-bold text-white">Coût mensuel:</span>
                  <span className="text-3xl font-bold text-cyan-400">2,000 CHF/mois</span>
                </div>
                <div className="bg-black/60 rounded-xl p-6 mt-6 space-y-3">
                  <div className="text-sm text-cyan-400 font-semibold mb-2">Inclus chaque mois:</div>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>✓ Site 50+ pages évolutif</li>
                    <li>✓ SEO stratégique continu</li>
                    <li>✓ Dashboard analytics temps réel</li>
                    <li>✓ Support prioritaire 48h</li>
                    <li>✓ Optimisations mensuelles</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-400/10 to-black border border-cyan-400/30 rounded-2xl p-10">
              <div className="text-3xl font-bold text-cyan-400 mb-6">Finance / Corporate Elite</div>
              <div className="space-y-5 text-gray-300">
                <div className="flex justify-between items-center pb-4 border-b border-cyan-400/20">
                  <span className="text-gray-400">Investment total:</span>
                  <span className="text-2xl font-bold text-cyan-400">60,000 - 100,000+ CHF</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-cyan-400/20">
                  <span className="text-gray-400">Durée partenariat:</span>
                  <span className="font-semibold">18-24 mois</span>
                </div>
                <div className="flex justify-between items-center pb-4 border-b border-cyan-400/20">
                  <span className="font-bold text-white">Coût mensuel:</span>
                  <span className="text-3xl font-bold text-cyan-400">2,500 - 5,000 CHF/mois</span>
                </div>
                <div className="bg-black/60 rounded-xl p-6 mt-6 space-y-3">
                  <div className="text-sm text-cyan-400 font-semibold mb-2">Inclus chaque mois:</div>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>✓ Plateforme multilingue (FR/EN/DE)</li>
                    <li>✓ SEO domination locale</li>
                    <li>✓ Consultant dédié stratégique</li>
                    <li>✓ Support 24/7 avec SLA</li>
                    <li>✓ Garanties contractuelles ROI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-400/10 to-black border border-cyan-400/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Pourquoi un <span className="text-cyan-400 font-bold">partenariat long terme?</span>
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="leading-relaxed text-lg">
                Les projets Sur Mesure nécessitent <strong className="text-cyan-400">un accompagnement stratégique continu</strong> sur 12-24 mois minimum. Ce n'est pas un site livré puis abandonné, c'est une <strong>conquête digitale progressive</strong> avec résultats mesurables chaque trimestre.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-black/40 border border-cyan-400/20 rounded-lg p-6">
                  <div className="text-cyan-400 font-semibold mb-3">Mois 1-6: Fondations</div>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Architecture entreprise complète</li>
                    <li>• Design premium multilingue</li>
                    <li>• Développement plateforme</li>
                    <li>• SEO technique avancé</li>
                  </ul>
                </div>
                <div className="bg-black/40 border border-cyan-400/20 rounded-lg p-6">
                  <div className="text-cyan-400 font-semibold mb-3">Mois 7-12: Domination</div>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• SEO agressif (top 3 positions)</li>
                    <li>• Optimisations conversions</li>
                    <li>• Scaling infrastructure</li>
                    <li>• Analytics avancées ROI</li>
                  </ul>
                </div>
                <div className="bg-black/40 border border-cyan-400/20 rounded-lg p-6">
                  <div className="text-cyan-400 font-semibold mb-3">Mois 13-18: Expansion</div>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Nouvelles fonctionnalités</li>
                    <li>• SEO national/international</li>
                    <li>• A/B testing systématique</li>
                    <li>• Automatisations marketing</li>
                  </ul>
                </div>
                <div className="bg-black/40 border border-cyan-400/20 rounded-lg p-6">
                  <div className="text-cyan-400 font-semibold mb-3">Mois 19-24: Leadership</div>
                  <ul className="text-sm text-gray-400 space-y-2">
                    <li>• Positionnement marché établi</li>
                    <li>• Machine de guerre SEO rodée</li>
                    <li>• ROI mesurable &gt; 300%</li>
                    <li>• Autonomie stratégique acquise</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Qu'est-ce qui est <span className="text-cyan-400 font-bold">inclus?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Architecture entreprise",
                description: "Plateforme scalable. Multilingue (FR/EN/DE). Sécurité renforcée. Infrastructure premium.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              },
              {
                title: "Consultant dédié",
                description: "Stratège digital personnel. Réunions mensuelles. Roadmap évolutive. Conseils marketing.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              },
              {
                title: "SEO domination locale",
                description: "Top 3 positions garanties mois 6. Contenus stratégiques. Backlinks premium. Suivi quotidien.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              },
              {
                title: "Support 24/7 avec SLA",
                description: "Hotline prioritaire. Résolution < 4h. Email/WhatsApp. Maintenance proactive.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              },
              {
                title: "Analytics & ROI",
                description: "Dashboard temps réel. Conversions trackées. A/B testing. Rapports mensuels détaillés.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              },
              {
                title: "Garanties contractuelles",
                description: "Performance 90+ PageSpeed. Top 5 SEO mois 6. Livraison jalons respectés. SLA support.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-black/40 border border-white/10 rounded-xl p-6 hover:border-cyan-400/30 transition-all duration-300"
              >
                <div className="text-cyan-400 mb-4">{feature.icon}</div>
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

      {/* Garanties Contractuelles */}
      <section id="garanties" className="py-24 bg-gradient-to-b from-black to-cyan-900/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Garanties <span className="text-cyan-400 font-bold">contractuelles</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Performance technique garantie",
                description: "PageSpeed 90+ desktop/mobile. Temps de chargement < 1.5s. Disponibilité 99.9%. Certificat SSL premium.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              },
              {
                title: "SEO: Résultats mesurables mois 6",
                description: "Top 5 positions sur 10+ mots-clés stratégiques. Trafic organique +200% min. Refund partiel si objectifs non atteints.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              },
              {
                title: "Support 24/7 avec SLA",
                description: "Réponse < 4h urgent. Résolution bugs < 24h. Hotline WhatsApp. Maintenance proactive incluse.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              },
              {
                title: "Livraison jalons respectés",
                description: "Roadmap contractuelle. Jalons mensuels validés. Pénalités retard. Transparence totale sprints.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              }
            ].map((garantie, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-cyan-400/10 to-black border border-cyan-400/30 rounded-xl p-8"
              >
                <div className="text-5xl mb-4">{garantie.icon}</div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {garantie.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {garantie.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Parfait pour <span className="text-cyan-400 font-bold">qui?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                type: "Finance & Banque privée",
                needs: "Plateforme sécurisée multilingue. Conformité FINMA. SEO ultra-compétitif. Support 24/7 SLA strict."
              },
              {
                type: "Corporate international",
                description: "Site corporate 100+ pages. Multilingue (3-5 langues). Intranet intégré. SEO domination Suisse."
              },
              {
                type: "E-commerce premium scaling",
                needs: "Boutique complexe. Stock automatisé. Multi-devises. SEO national + international. ROI > 300%."
              },
              {
                type: "Startup tech série A+",
                description: "Plateforme SaaS marketing. Intégrations API complexes. Scaling rapide. Analytics avancées investisseurs."
              }
            ].map((profile, index) => (
              <div
                key={index}
                className="bg-black/60 border border-cyan-400/20 rounded-xl p-6"
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
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
      <section className="py-24 bg-gradient-to-r from-cyan-400/10 via-black to-blue-500/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Prêt pour une <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-bold">conquête digitale?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Audit stratégique gratuit 60 min. Devis personnalisé. Partenariat long terme 12-24 mois. Garanties contractuelles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-10 py-5 rounded-lg hover:shadow-2xl hover:shadow-cyan-400/50 transition-all duration-300 font-bold text-lg"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Discuter de mon projet
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
