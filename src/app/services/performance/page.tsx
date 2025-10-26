import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'
import FloatingCTA from '@/components/ui/FloatingCTA'
import { getFAQSchemaPerformance, getServiceSchemaPerformance, getBreadcrumbSchema } from '@/lib/structured-data'

export const metadata = {
  title: 'Marketing Digital Valais | Agence Web SEO & Dev | 10-18K CHF | OSOM',
  description: 'Agence marketing digital Valais. Projets web 30-60 pages + API + SEO stratégique. 10,000 CHF (6 mois) ou 18,000 CHF (12 mois). Partenariat mensuel actif = dev + SEO + support continu.',
  keywords: 'marketing digital valais, agence marketing digital valais, agence web valais, marketing digital sion, agence marketing valais, seo valais, développeur web valais, stratégie digitale valais',
}

export default async function PerformancePage() {
  const dictionary = await getDictionary(defaultLocale)

  // Structured Data pour SEO
  const faqSchema = getFAQSchemaPerformance()
  const serviceSchema = getServiceSchemaPerformance()
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: 'https://www.osom.ch' },
    { name: 'Services', url: 'https://www.osom.ch/services' },
    { name: 'Package Performance', url: 'https://www.osom.ch/services/performance' }
  ])

  return (
    <div className="min-h-screen bg-black">
      <ScrollProgressIndicator />
      <FloatingCTA text="Démarrer Performance" href="/contact?package=performance" />

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

      {/* 1. ATTENTION - Hero Section VOYAGE Editorial */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
        {/* Grille subtile magazine */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(0deg, transparent 98%, rgba(168, 85, 247, .1) 100%), linear-gradient(90deg, transparent 98%, rgba(168, 85, 247, .1) 100%)`,
            backgroundSize: '80px 80px'
          }} />
        </div>

        {/* Accent géométrique asymétrique */}
        <div className="absolute top-0 right-0 w-px h-1/3 bg-gradient-to-b from-purple-400/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-px bg-gradient-to-r from-purple-400/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 relative z-10">
          {/* Label éditorial discret */}
          <div className="absolute -top-12 left-8 text-[10px] text-purple-400/40 font-mono tracking-[0.4em] uppercase">
            Package Performance
          </div>

          {/* Layout asymétrique magazine */}
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Colonne gauche: Titre principal */}
            <div className="col-span-12 lg:col-span-7 space-y-12">
              <h1 style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                {/* Point de départ - proportions équilibrées */}
                <div className="flex items-baseline gap-6 mb-8">
                  <span className="text-[3vw] md:text-[3.5vw] lg:text-[4vw] font-light text-gray-600 tracking-tight">
                    Votre projet
                  </span>
                  <span className="text-xs text-purple-400/60 font-mono tracking-[0.3em] uppercase">
                    aujourd'hui
                  </span>
                </div>

                {/* Séparateur typographique élégant */}
                <div className="flex items-center gap-6 my-12">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"></div>
                  <svg className="w-8 h-16 text-purple-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 48" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 44 L12 4 M12 4 L6 10 M12 4 L18 10" />
                  </svg>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-400/20 to-transparent"></div>
                </div>

                {/* Destination - raffinée et proportionnée */}
                <div className="space-y-3">
                  <div className="text-[8vw] md:text-[9vw] lg:text-[10vw] font-black leading-[0.85] tracking-[-0.03em] text-white">
                    SOMMET
                  </div>
                  <div className="text-[8vw] md:text-[9vw] lg:text-[10vw] font-black leading-[0.85] tracking-[-0.03em] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                    DIGITAL
                  </div>
                </div>
              </h1>

              {/* Sous-titre éditorial */}
              <div className="max-w-lg">
                <p className="text-base md:text-lg text-gray-400 leading-relaxed font-light">
                  <span className="text-purple-400 font-medium">6 à 12 mois</span> d'accompagnement stratégique.
                  Votre projet devient machine d'acquisition clients.
                </p>
              </div>
            </div>

            {/* Colonne droite: Détails éditoriaux */}
            <div className="col-span-12 lg:col-span-5 space-y-8 lg:ml-[20%]">
              {/* Étapes + CTAs en rythme */}
              <div className="space-y-8">
                {/* Étape 01 */}
                <div className="flex items-start gap-6 group border-l border-purple-400/10 pl-8">
                  <div className="text-6xl font-black text-purple-400/20 leading-none group-hover:text-purple-400/40 transition-colors">
                    01
                  </div>
                  <div className="pt-4">
                    <div className="text-xs text-gray-600 font-mono tracking-wider uppercase mb-1">Phase</div>
                    <div className="text-sm text-gray-400 font-light">Fondations solides</div>
                  </div>
                </div>

                {/* Étape 02 */}
                <div className="flex items-start gap-6 group border-l border-purple-400/10 pl-8">
                  <div className="text-6xl font-black text-purple-400/40 leading-none group-hover:text-purple-400/60 transition-colors">
                    02
                  </div>
                  <div className="pt-4">
                    <div className="text-xs text-gray-600 font-mono tracking-wider uppercase mb-1">Phase</div>
                    <div className="text-sm text-gray-300 font-light">Croissance mesurable</div>
                  </div>
                </div>

                {/* Étape 03 */}
                <div className="flex items-start gap-6 group border-l border-purple-400/10 pl-8">
                  <div className="text-6xl font-black text-purple-400/80 leading-none group-hover:text-purple-400 transition-colors">
                    03
                  </div>
                  <div className="pt-4">
                    <div className="text-xs text-gray-600 font-mono tracking-wider uppercase mb-1">Phase</div>
                    <div className="text-sm text-white font-light">Domination locale</div>
                  </div>
                </div>
              </div>

              {/* CTAs éditoriaux - alignés avec le rythme */}
              <div className="space-y-3 pt-4 border-l border-purple-400/10 pl-8">
                <Link
                  href="/contact"
                  className="block text-center bg-purple-400 text-black px-8 py-4 hover:bg-purple-500 transition-all duration-300 font-semibold text-sm tracking-wide uppercase"
                >
                  Commencer l'ascension
                </Link>
                <Link
                  href="#why-performance"
                  className="block text-center border border-purple-400/30 text-purple-300 px-8 py-4 hover:bg-purple-400/5 hover:border-purple-400/50 transition-all duration-300 font-light text-sm tracking-wide"
                >
                  Parcours détaillé
                </Link>
              </div>
            </div>
          </div>

          {/* Ligne éditoriale bas */}
          <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between text-[10px] text-gray-700 font-mono">
            <span>PERFORMANCE / 2025</span>
            <span className="tracking-[0.3em]">6-12 MOIS</span>
          </div>
        </div>
      </section>

      {/* 2. INTÉRÊT - Pourquoi Performance fait la différence */}
      <section id="why-performance" className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Pourquoi Performance <span className="text-purple-400 font-bold">fait la différence?</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Performance n'est pas un site "livré puis oublié". C'est un partenariat actif où je travaille sur votre croissance digitale chaque mois.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "30-60 pages complexes",
                description: "Architecture avancée. Formulaires dynamiques. Systèmes personnalisés. Navigation optimisée conversion.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              },
              {
                title: "API & Integrations",
                description: "CRM automatisé. Paiements Stripe/Twint. Calendriers synchronisés. Connexion systèmes tiers métier.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              },
              {
                title: "Dashboard personnalisé",
                description: "Analytics temps réel adapté à votre métier. KPIs business. Performance. Conversions. ROI mesurable.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              },
              {
                title: "SEO stratégique mensuel",
                description: "Pas du SEO 'one-shot'. Optimisations continues. Contenus stratégiques. Backlinks qualifiés. Suivi positions actif.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              },
              {
                title: "Support premium 48h",
                description: "Email prioritaire. Hotline technique dédiée. Conseils stratégiques business. Ajustements rapides garantis.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              },
              {
                title: "Partenariat actif continu",
                description: "Je travaille chaque mois sur votre projet: développement, SEO, analytics, optimisations, scaling business.",
                icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
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

      {/* 3. DÉSIR - Ce que nos partenaires Performance obtiennent */}
      <section className="py-24 bg-gradient-to-b from-black via-purple-900/5 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Ce que nos partenaires Performance <span className="text-purple-400 font-bold">obtiennent</span>
          </h2>

          {/* Disclaimer transparent */}
          <div className="bg-purple-400/10 border border-purple-400/30 rounded-lg px-6 py-3 mb-12 max-w-4xl mx-auto">
            <p className="text-sm text-gray-300 text-center">
              Résultats réels de clients OSOM. Données Google Analytics & Search Console vérifiables. Secteurs et localisations anonymisés par confidentialité contractuelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Case Study 1 - B2B Technique Valais */}
            <div className="bg-gradient-to-br from-purple-400/10 to-black border border-purple-400/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300">
              <div className="text-sm text-purple-400 font-semibold mb-2">B2B Technique — Valais</div>
              <div className="text-xs text-gray-500 mb-6">Package Performance 6 mois</div>

              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">65 → 95+</div>
                  <div className="text-sm text-gray-400">Performance PageSpeed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">Position #2</div>
                  <div className="text-sm text-gray-400">Google local compétitif</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">+150%</div>
                  <div className="text-sm text-gray-400">Visibilité organique</div>
                </div>
                <div className="pt-4 border-t border-purple-400/20">
                  <div className="text-xs text-gray-500">1,287 impressions/mois</div>
                </div>
              </div>
            </div>

            {/* Case Study 2 - E-commerce Artisanal Vaud */}
            <div className="bg-gradient-to-br from-purple-400/10 to-black border border-purple-400/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300">
              <div className="text-sm text-purple-400 font-semibold mb-2">E-commerce Artisanal — Vaud</div>
              <div className="text-xs text-gray-500 mb-6">Optimisation Continue Growth</div>

              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">315 clics</div>
                  <div className="text-sm text-gray-400">Organiques par mois</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">CTR 3.45%</div>
                  <div className="text-sm text-gray-400">Excellent pour e-commerce</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">9,133</div>
                  <div className="text-sm text-gray-400">Impressions mensuelles</div>
                </div>
                <div className="pt-4 border-t border-purple-400/20">
                  <div className="text-xs text-gray-500">SEO stratégique continu</div>
                </div>
              </div>
            </div>

            {/* Case Study 3 - Institution Culturelle Valais */}
            <div className="bg-gradient-to-br from-purple-400/10 to-black border border-purple-400/20 rounded-2xl p-8 hover:border-purple-400/40 transition-all duration-300">
              <div className="text-sm text-purple-400 font-semibold mb-2">Institution Culturelle — Valais</div>
              <div className="text-xs text-gray-500 mb-6">Package Performance 4 mois</div>

              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-white mb-1">18 pages</div>
                  <div className="text-sm text-gray-400">+ système événements</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400 mb-1">2025-2026</div>
                  <div className="text-sm text-gray-400">Calendrier intégré</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">Crédibilité</div>
                  <div className="text-sm text-gray-400">Institutionnelle renforcée</div>
                </div>
                <div className="pt-4 border-t border-purple-400/20">
                  <div className="text-xs text-gray-500">Partenariats culturels valorisés</div>
                </div>
              </div>
            </div>
          </div>

          {/* Message émotionnel de désir */}
          <div className="bg-gradient-to-r from-purple-400/5 via-purple-400/10 to-purple-400/5 border border-purple-400/20 rounded-xl p-8 max-w-4xl mx-auto">
            <p className="text-xl text-gray-200 text-center leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              <span className="text-purple-400 font-bold">Votre projet mérite le même niveau d'engagement.</span><br/>
              Performance = résultats mesurables, pas des promesses. Partenariat actif, pas un site livré puis abandonné.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CONFIANCE - Le Partenariat Performance expliqué */}
      <section className="py-20 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Comment fonctionne le <span className="text-purple-400 font-bold">partenariat?</span>
          </h2>

          <div className="bg-gradient-to-br from-purple-400/10 to-black border border-purple-400/20 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              TOUT est <span className="text-purple-400 font-bold">inclus chaque mois:</span>
            </h3>
            <div className="space-y-6 text-gray-300">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1 text-xl">✓</span>
                  <span><strong className="text-white">Développement actif:</strong> Je travaille sur votre projet chaque semaine, pas juste au début. Nouvelles features, optimisations, ajustements business.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1 text-xl">✓</span>
                  <span><strong className="text-white">SEO stratégique mensuel:</strong> Optimisations techniques continues, création contenus, backlinks qualifiés, suivi positions Google, ajustements tactiques.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1 text-xl">✓</span>
                  <span><strong className="text-white">Support premium 48h:</strong> Questions urgentes, ajustements design, bugs techniques, conseils stratégiques business digitaux.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1 text-xl">✓</span>
                  <span><strong className="text-white">Dashboards & Analytics:</strong> Suivi performance temps réel, KPIs métier, conversions, ROI mesurable avec recommandations actionnables.</span>
                </li>
              </ul>

              <div className="border-t border-purple-400/20 pt-6 mt-6">
                <div className="text-lg font-semibold text-purple-400 mb-3">Différence avec Essentiel:</div>
                <div className="bg-black/40 rounded-lg p-4 space-y-2">
                  <p className="text-sm">
                    <strong className="text-gray-400">Essentiel:</strong> Site livré + formation → vous gérez en autonomie après.
                  </p>
                  <p className="text-sm">
                    <strong className="text-purple-400">Performance:</strong> Partenariat continu → je reste actif chaque mois sur SEO, développement, optimisations, scaling, stratégie digitale complète.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUALIFICATION - Parfait pour qui? */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-400/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Performance est fait pour <span className="text-purple-400 font-bold">vous si:</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Votre projet dépasse le site vitrine classique. Vous avez besoin d'un partenaire digital actif, pas juste d'un prestataire ponctuel.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                type: "PME B2B en croissance",
                needs: "Vous générez 500K+ CHF/an et visez la croissance digitale. Besoin: plateforme 30-60 pages, CRM intégré, dashboard analytics métier, SEO stratégique mensuel pour dominer votre niche locale.",
                highlight: "Objectif: acquisition clients qualifiés via SEO"
              },
              {
                type: "E-commerce artisanal premium",
                needs: "Vous vendez produits haut de gamme (mobilier, déco, mode). Besoin: boutique Next.js performante, paiements Stripe/Twint, gestion stock automatisée, SEO local + national pour visibilité organique.",
                highlight: "Objectif: trafic qualifié sans dépendre de Google Ads"
              },
              {
                type: "SaaS / Tech startup",
                needs: "Vous lancez un produit digital B2B/B2C. Besoin: site produit + landing pages optimisées, intégrations API tierces, analytics avancées, scaling technique continu avec votre croissance.",
                highlight: "Objectif: convertir visiteurs en early adopters"
              },
              {
                type: "Institution culturelle/publique",
                needs: "Vous organisez événements, formations, expositions. Besoin: site 40+ pages, calendrier synchronisé, billetterie intégrée, CMS multi-utilisateurs, SEO patrimoine/culture local.",
                highlight: "Objectif: crédibilité institutionnelle digitale"
              }
            ].map((profile, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white/5 to-black border border-purple-400/20 rounded-xl p-8 hover:border-purple-400/40 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-purple-400 mb-3" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {profile.type}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {profile.needs}
                </p>
                <div className="bg-purple-400/10 border-l-4 border-purple-400 pl-4 py-2">
                  <p className="text-purple-300 text-xs font-semibold">{profile.highlight}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRIX - Investissement & Partenariat */}
      <section className="py-24 bg-black">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Investissement <span className="text-purple-400 font-bold">& Partenariat</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Paiement mensuel = partenariat actif chaque mois. Pas un site livré puis abandonné.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Option 6 mois */}
            <div className="bg-purple-400/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
              <div className="text-sm text-gray-400 mb-2">Partenariat 6 mois</div>
              <div className="text-5xl font-bold text-purple-400 mb-2">4,500 CHF/mois</div>
              <div className="text-xs text-gray-500 mb-6">Total: 27,000 CHF</div>
              <p className="text-sm text-gray-300 mb-4">Dev + SEO + Support + Dashboards inclus chaque mois</p>

              <div className="mt-6 pt-6 border-t border-purple-400/20">
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-purple-400">Exemple B2B / E-commerce:</strong><br/>
                  Mois 1-2: Architecture avancée + Design UX<br/>
                  Mois 3-4: Développement complet + API integrations<br/>
                  Mois 5-6: SEO stratégique + Dashboard personnalisé + Formation
                </p>
              </div>
            </div>

            {/* Option 12 mois */}
            <div className="bg-purple-400/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/40 ring-2 ring-purple-400/20 hover:ring-purple-400/40 transition-all duration-300">
              <div className="text-sm text-purple-400 mb-2 flex items-center gap-2">
                Partenariat 12 mois
                <span className="text-xs bg-purple-400 text-black px-2 py-0.5 rounded-full font-bold">MEILLEUR PRIX</span>
              </div>
              <div className="text-5xl font-bold text-purple-400 mb-2">4,000 CHF/mois</div>
              <div className="text-xs text-gray-500 mb-6">Total: 48,000 CHF</div>
              <p className="text-sm text-gray-300 mb-4">Dev + SEO + Support + Dashboards + Optimisations continues</p>

              <div className="mt-6 pt-6 border-t border-purple-400/20">
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-purple-400">Exemple PME Croissance / SaaS:</strong><br/>
                  Mois 1-3: Architecture entreprise + Design système<br/>
                  Mois 4-7: Développement complet + API complexes<br/>
                  Mois 8-10: SEO agressif + Analytics avancées<br/>
                  Mois 11-12: Optimisations + Scaling infrastructure
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-400/10 via-purple-400/5 to-purple-400/10 border border-purple-400/20 rounded-xl px-8 py-6">
            <p className="text-gray-300 text-center leading-relaxed">
              <strong className="text-purple-400">Pourquoi paiement mensuel?</strong> Parce que Performance n'est pas un projet ponctuel. C'est un <strong className="text-white">partenariat actif continu</strong> où je travaille chaque mois sur votre développement, SEO, optimisations, scaling. Le montant mensuel inclut TOUT: dev + SEO stratégique + support premium + dashboards.
            </p>
          </div>
        </div>
      </section>

      {/* 7. ACTION - CTA Final */}
      <section className="py-24 bg-gradient-to-r from-purple-400/10 via-black to-purple-400/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Prêt pour un <span className="text-purple-400 font-bold">partenariat Performance?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Audit gratuit 30 min. Devis transparent. Partenariat actif 6-12 mois. À partir de 4,000 CHF/mois tout compris.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-purple-400 text-black px-10 py-5 rounded-lg hover:bg-purple-500 transition-all duration-300 font-bold text-lg shadow-xl shadow-purple-400/25"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Démarrer mon projet Performance
            </Link>
            <Link
              href="/services"
              className="border-2 border-white/30 text-white px-10 py-5 rounded-lg hover:bg-white hover:text-black transition-all duration-300 font-medium backdrop-blur-sm"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Comparer les packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
