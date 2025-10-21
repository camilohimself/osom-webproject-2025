import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'
import SlotMachineText from '@/components/ui/SlotMachineText'
import { getFAQSchemaSurMesure, getServiceSchemaSurMesure, getBreadcrumbSchema } from '@/lib/structured-data'

export const metadata = {
  title: 'Package Sur Mesure | Conquête digitale complète | OSOM Valais',
  description: 'Projets stratégiques haute visibilité. Architecture entreprise, SEO domination, support 24/7, garanties contractuelles. Les projets Sur mesure ne se discutent pas en ligne.',
  keywords: 'projet sur mesure, site entreprise, seo domination, garantie résultats, partenariat long terme, développeur elite valais',
}

export default async function SurMesurePage() {
  const dictionary = await getDictionary(defaultLocale)

  // Structured Data pour SEO
  const faqSchema = getFAQSchemaSurMesure()
  const serviceSchema = getServiceSchemaSurMesure()
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.osom.ch' },
    { name: 'Services', url: 'https://www.osom.ch/services' },
    { name: 'Package Sur Mesure', url: 'https://www.osom.ch/services/sur-mesure' }
  ])

  return (
    <div className="min-h-screen bg-black">
      <ScrollProgressIndicator />

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

      {/* Hero Section - Slot Machine Effect */}
      <section className="py-32 lg:py-40 bg-gradient-to-b from-black via-purple-900/10 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)`,
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 rounded-full bg-purple-400 mr-3 animate-pulse"></div>
            <span className="text-purple-400 text-sm font-medium tracking-wide uppercase">Package Sur Mesure</span>
            <span className="ml-3 bg-gradient-to-r from-purple-400 to-purple-600 text-black text-xs font-bold px-3 py-1 rounded-full">ELITE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 leading-tight text-center px-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            <span className="block sm:inline">Conquête digitale{' '}</span>
            <SlotMachineText
              words={['illimitée', 'unique', 'exclusive', 'premium', 'totale', 'audacieuse']}
              finalWord="sur mesure"
              duration={2500}
              className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 font-bold inline-block"
            />
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto text-center leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Architecture entreprise. SEO domination locale. Support 24/7. Consultant dédié. Garanties contractuelles.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-400 to-purple-600 text-black px-10 py-5 rounded-lg hover:shadow-2xl hover:shadow-purple-400/50 transition-all duration-300 font-bold text-center text-lg"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Réservons une table
            </Link>
            <Link
              href="#pourquoi-table"
              className="border-2 border-purple-400/50 text-purple-400 px-10 py-5 rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 font-medium text-center backdrop-blur-sm"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Pourquoi "à table"?
            </Link>
          </div>
        </div>
      </section>

      {/* Message audacieux - Pourquoi "à table" */}
      <section id="pourquoi-table" className="py-20 bg-gradient-to-b from-black via-purple-900/5 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-purple-400/10 to-black border border-purple-400/30 rounded-2xl p-10 md:p-16 text-center">
            <h2 className="text-3xl md:text-5xl font-light text-white mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Les projets <span className="text-purple-400 font-bold">Sur mesure</span> ne se configurent pas en ligne
            </h2>

            <div className="space-y-6 text-gray-300 text-lg leading-relaxed mb-10">
              <p>
                Vous ne trouverez pas de grille tarifaire ici. Pas de "à partir de X CHF". Pas de package préfabriqué.
              </p>
              <p className="text-xl text-purple-300">
                <strong>Pourquoi?</strong> Parce que votre ambition digitale mérite mieux qu'un formulaire en ligne.
              </p>
              <p>
                Les projets Sur mesure — finance, corporate international, scaling e-commerce, tech série A+ — nécessitent une <strong className="text-white">conversation stratégique</strong>. Autour d'une table. Au téléphone. En visio. Mais pas via un configurateur.
              </p>
            </div>

            <div className="bg-black/60 border border-purple-400/20 rounded-xl p-8 mb-10">
              <h3 className="text-2xl font-semibold text-purple-400 mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Ce qu'on discute "à table"
              </h3>
              <ul className="text-left space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong className="text-white">Vos ambitions business:</strong> Objectifs 6-24 mois, ROI cible, positionnement marché</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong className="text-white">Architecture technique:</strong> Scalabilité, intégrations, sécurité, compliance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong className="text-white">Stratégie SEO domination:</strong> Mots-clés haute valeur, backlinks premium, conquête top 3</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong className="text-white">Garanties contractuelles:</strong> SLA, jalons, pénalités, refund conditions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">→</span>
                  <span><strong className="text-white">Budget réaliste:</strong> Investissement mensuel adapté à votre croissance (20K-100K+ CHF sur 12-24 mois)</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-purple-400 to-purple-600 text-black px-10 py-5 rounded-lg hover:shadow-2xl hover:shadow-purple-400/50 transition-all duration-300 font-bold text-lg"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                Réserver audit stratégique (60 min gratuit)
              </Link>
              <a
                href="tel:+41791289549"
                className="border-2 border-purple-400/50 text-purple-400 px-10 py-5 rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 font-medium backdrop-blur-sm"
                style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Qu'est-ce qui est <span className="text-purple-400 font-bold">inclus?</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Aperçu des dimensions d'un projet Sur mesure. Chaque élément est adapté à vos objectifs stratégiques.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Architecture entreprise",
                description: "Plateforme scalable. Multilingue (FR/EN/DE/IT). Sécurité renforcée OWASP. Infrastructure premium AWS/Vercel.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
              },
              {
                title: "Consultant stratégique dédié",
                description: "Votre partenaire digital personnel. Réunions mensuelles stratégie. Roadmap évolutive trimestre. Conseils marketing/business.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              },
              {
                title: "SEO domination garantie",
                description: "Top 3 positions mois 6 (contractuel). Contenus stratégiques premium. Backlinks haute autorité. Suivi quotidien positions.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              },
              {
                title: "Support 24/7 SLA strict",
                description: "Hotline prioritaire dédiée. Réponse urgente < 4h. Résolution bugs < 24h. Email/WhatsApp/Slack. Maintenance proactive.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              },
              {
                title: "Analytics & ROI avancés",
                description: "Dashboard temps réel adapté métier. KPIs business stratégiques. Conversions trackées granulaires. A/B testing systématique. Rapports mensuels détaillés.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              },
              {
                title: "Garanties contractuelles",
                description: "Performance 90+ PageSpeed garanti. Top 5 SEO mois 6 ou refund partiel. Jalons mensuels respectés avec pénalités. SLA support contractuel.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
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

      {/* Garanties Contractuelles */}
      <section id="garanties" className="py-24 bg-gradient-to-b from-black to-purple-900/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Garanties <span className="text-purple-400 font-bold">contractuelles</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Sur mesure = engagement mutuel formalisé. Pas de promesses vagues, des objectifs mesurables avec conséquences contractuelles.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Performance technique garantie",
                description: "PageSpeed 90+ desktop/mobile (contractuel). Temps de chargement < 1.5s toutes pages. Disponibilité 99.9% uptime. Certificat SSL premium Extended Validation.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              },
              {
                title: "SEO: Résultats mesurables mois 6",
                description: "Top 5 positions sur 10+ mots-clés stratégiques haute valeur. Trafic organique +200% minimum. Refund partiel 20% si objectifs non atteints après 6 mois.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
              },
              {
                title: "Support 24/7 avec SLA strict",
                description: "Réponse urgente < 4h garantie. Résolution bugs critiques < 24h. Hotline WhatsApp directe consultant. Maintenance proactive hebdomadaire incluse.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              },
              {
                title: "Jalons & livrables contractuels",
                description: "Roadmap mensuelle détaillée et validée. Jalons avec acceptation formelle. Pénalités retard -5% par semaine de dépassement. Transparence totale sprints agile.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              }
            ].map((garantie, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-400/10 to-black border border-purple-400/30 rounded-xl p-8 hover:border-purple-400/50 transition-all duration-300"
              >
                <div className="text-purple-400 mb-4">{garantie.icon}</div>
                <h3 className="text-xl font-semibold text-purple-400 mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
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
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Sur mesure est fait pour <span className="text-purple-400 font-bold">vous si:</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Votre ambition digitale dépasse le partenariat classique. Vous visez la domination de votre marché avec un engagement stratégique long terme.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                type: "Finance & Banque privée",
                needs: "Vous gérez actifs > 100M CHF et cherchez visibilité digitale sécurisée. Besoin: plateforme multilingue conformité FINMA, SEO ultra-compétitif patrimoine/gestion fortune, support 24/7 SLA strict, garanties contractuelles performance.",
                highlight: "Objectif: acquisition clients HNW via domination SEO locale"
              },
              {
                type: "Corporate international (1,000+ employés)",
                description: "Vous opérez multi-pays et besoin refonte digitale envergure. Besoin: site corporate 100+ pages FR/EN/DE, intranet intégré collaborateurs, SEO domination Suisse/Europe, consultant stratégique dédié.",
                highlight: "Objectif: leadership digital marché B2B européen"
              },
              {
                type: "E-commerce premium scaling (1M+ CHF/an)",
                needs: "Vous vendez produits premium et visez scaling agressif. Besoin: boutique Next.js haute performance, stock/CRM automatisé complet, multi-devises/paiements, SEO national + international conquête, ROI > 300% mesurable.",
                highlight: "Objectif: devenir leader e-commerce niche Suisse romande"
              },
              {
                type: "Startup tech série A+ (levée > 2M CHF)",
                description: "Vous avez levé série A et scaling produit urgent. Besoin: plateforme SaaS marketing complète, intégrations API complexes tierces, scaling infrastructure continu, analytics avancées board/investisseurs.",
                highlight: "Objectif: acquisition clients ARR growth 200%+ annuel"
              }
            ].map((profile, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-black border border-purple-400/20 rounded-xl p-8 hover:border-purple-400/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-purple-400 mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {profile.type}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {profile.needs || profile.description}
                </p>
                <div className="bg-purple-400/10 border-l-4 border-purple-400 pl-4 py-2">
                  <p className="text-purple-300 text-xs font-semibold">{profile.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-r from-purple-400/10 via-black to-purple-600/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Prêt à discuter de votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600 font-bold">conquête digitale?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Audit stratégique gratuit 60 min. On discute ambitions, architecture, budget réaliste. Aucune obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-purple-400 to-purple-600 text-black px-10 py-5 rounded-lg hover:shadow-2xl hover:shadow-purple-400/50 transition-all duration-300 font-bold text-lg"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Réserver audit stratégique (60 min)
            </Link>
            <a
              href="tel:+41791289549"
              className="border-2 border-white/30 text-white px-10 py-5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium backdrop-blur-sm"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              +41 79 128 95 49
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
