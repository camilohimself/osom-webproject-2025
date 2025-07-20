import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'

export const metadata = {
  title: 'Nos Services | OSOM - Agence Web Digitale Valais',
  description: 'Découvrez nos services : création de sites web, SEO, marketing digital et plus. Solutions complètes pour votre présence en ligne.',
}

export default async function ServicesPage() {
  const dictionary = await getDictionary(defaultLocale)

  const services = [
    {
      title: "OSOM Web",
      subtitle: "Sites 1500 CHF • Livrés en 10 jours",
      description: "Notre nouvelle offre standardisée : sites premium livrés rapidement avec SEO complet intégré",
      pricing: "1500 CHF",
      timeline: "10 jours",
      expectedResults: [
        "Site responsive Next.js premium",
        "SEO technique optimisé", 
        "Performance 95+ PageSpeed",
        "Formation complète incluse"
      ],
      caseStudy: "Nouveau format révolutionnaire",
      icon: "⚡",
      badge: "NOUVEAU",
      highlight: true
    },
    {
      title: "Marketing Data-Driven",
      subtitle: "ROI 140x supérieur aux ads traditionnelles",
      description: "Stratégie organique Facebook/Instagram avec création de contenu performant pour audiences ciblées",
      pricing: "À partir de 1000 CHF/mois",
      timeline: "Résultats dès 3 mois",
      expectedResults: [
        "11.3% taux de conversion",
        "99.3% réduction coût acquisition",
        "2.4M+ vues organiques",
        "688 conversions documentées"
      ],
      caseStudy: "Culture Peinture : 140x plus efficace",
      icon: "📊",
      realData: true
    },
    {
      title: "SEO Technique Expert",
      subtitle: "Visibilité Google garantie",
      description: "Optimisation technique poussée avec outils professionnels pour dominer votre secteur",
      pricing: "À partir de 800 CHF/mois",
      timeline: "Résultats 1-6 mois",
      expectedResults: [
        "Audit SEMrush complet",
        "Positions Google trackées",
        "Core Web Vitals optimisés",
        "Trafic organique croissant"
      ],
      caseStudy: "Augmentation trafic moyenne +150%",
      icon: "🚀"
    },
    {
      title: "Sites Web Premium",
      subtitle: "Design & performance exceptionnels",
      description: "Développement sur mesure avec technologies modernes pour des expériences utilisateur remarquables",
      pricing: "À partir de 3500 CHF",
      timeline: "3-6 semaines",
      expectedResults: [
        "Design sur mesure unique",
        "Technologies Next.js/React",
        "Optimisation conversion",
        "Interface utilisateur premium"
      ],
      caseStudy: "Projets web depuis 2019",
      icon: "🌐"
    },
    {
      title: "E-commerce & IA",
      subtitle: "Boutiques intelligentes",
      description: "Solutions e-commerce avec automatisations IA pour maximiser vos ventes en ligne",
      pricing: "À partir de 5000 CHF",
      timeline: "4-8 semaines",
      expectedResults: [
        "Boutique complète sécurisée",
        "Automatisations IA intégrées",
        "Analytics avancées",
        "Optimisation conversion IA"
      ],
      caseStudy: "E-commerce nouvelle génération",
      icon: "🛒"
    },
    {
      title: "Transformation Digitale",
      subtitle: "Accompagnement global IA",
      description: "Formation et intégration complète des outils IA dans vos processus métier",
      pricing: "Sur mesure",
      timeline: "3-12 mois",
      expectedResults: [
        "Formation Claude/GPT complète",
        "Workflows automatisés",
        "ROI mesurable documenté",
        "Accompagnement continu"
      ],
      caseStudy: "Transformation réussie IA",
      icon: "🤖"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-32 lg:py-40 bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold mb-8 shadow-lg">
              ⚡ Performances 140x supérieures
            </div>
            <h1 className="text-5xl md:text-7xl font-light mb-8 tracking-tight leading-tight">
              Marketing qui<br />
              <span className="text-yellow-400">convertit</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Solutions data-driven pour transformer vos investissements marketing en machines à résultats mesurables.
            </p>
            
            {/* Stats Pills */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-yellow-400 font-bold">11.3%</span>
                <span className="text-gray-300 ml-2">taux conversion</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-yellow-400 font-bold">99.3%</span>
                <span className="text-gray-300 ml-2">réduction coûts</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <span className="text-yellow-400 font-bold">200+</span>
                <span className="text-gray-300 ml-2">jours d'analyse</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
              Solutions sur mesure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              De l'offre standardisée OSOM Web aux projets complexes, découvrez nos solutions avec pricing transparent et résultats garantis.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`bg-white border-2 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden ${
                  service.highlight ? 'border-yellow-400 shadow-lg' : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`text-4xl ${service.highlight ? 'animate-pulse' : ''}`}>
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-black mb-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-medium">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Pricing & Timeline */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Prix</div>
                    <div className="text-lg font-bold text-black">{service.pricing}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">Délai</div>
                    <div className="text-lg font-bold text-black">{service.timeline}</div>
                  </div>
                </div>

                {/* Expected Results */}
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-700 mb-3">
                    Résultats attendus :
                  </div>
                  <ul className="space-y-2">
                    {service.expectedResults.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                          service.realData ? 'bg-green-500' : 'bg-yellow-400'
                        }`}></div>
                        <span className={`text-sm ${
                          service.realData ? 'text-green-700 font-medium' : 'text-gray-700'
                        }`}>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Study Link */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">
                      {service.realData ? '📊 Données réelles' : '📈 Estimation basée sur historique'}
                    </span>
                    <button className="text-yellow-600 hover:text-yellow-700 text-sm font-medium">
                      {service.caseStudy} →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Bottom */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-black mb-4">
                Besoin d'une solution personnalisée ?
              </h3>
              <p className="text-gray-600 mb-6">
                Chaque projet est unique. Discutons de vos besoins spécifiques pour créer une solution sur mesure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-yellow-400 text-black px-8 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-bold"
                >
                  Consultation gratuite
                </Link>
                <Link
                  href="/calculator"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-yellow-400 hover:text-yellow-600 transition-colors font-medium"
                >
                  Calculer mon ROI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-black mb-6">
              Résultats documentés
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment nous transformons les investissements de nos clients en performances mesurables et vérifiables.
            </p>
          </div>

          {/* Culture Peinture Highlight */}
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 mb-12 max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left: Client Info */}
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-sm text-gray-500 font-medium">CASE STUDY VÉRIFIÉ • 200 JOURS GA4</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">Culture Peinture</h3>
                <p className="text-gray-600 mb-6">
                  Formation professionnelle 60+ • Stratégie organique Facebook/Instagram vs publicité payante traditionnelle
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">688</div>
                    <div className="text-xs text-gray-500">Conversions OSOM</div>
                  </div>
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <div className="text-2xl font-bold text-red-600">49</div>
                    <div className="text-xs text-gray-500">Conversions ads payantes</div>
                  </div>
                </div>
              </div>

              {/* Right: Key Metrics */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                  <span className="text-gray-700">Efficacité budgétaire</span>
                  <span className="text-xl font-bold text-green-600">140x plus performant</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                  <span className="text-gray-700">Taux de conversion</span>
                  <span className="text-xl font-bold text-green-600">11.3%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                  <span className="text-gray-700">Réduction coût acquisition</span>
                  <span className="text-xl font-bold text-green-600">99.3%</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200">
                  <span className="text-gray-700">Vues organiques générées</span>
                  <span className="text-xl font-bold text-green-600">2.4M+</span>
                </div>
              </div>
            </div>

            {/* ROI Comparison Bar */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="text-center mb-4">
                <span className="text-sm text-gray-500">COMPARAISON ROI PAR 1000 CHF INVESTIS</span>
              </div>
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <div className="bg-green-500 h-20 w-24 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold">105.8</span>
                  </div>
                  <span className="text-xs text-gray-600">OSOM Strategy</span>
                </div>
                <div className="text-2xl text-gray-400">vs</div>
                <div className="text-center">
                  <div className="bg-red-500 h-2 w-24 rounded-lg flex items-center justify-center mb-2">
                    <span className="text-white font-bold text-xs">0.75</span>
                  </div>
                  <span className="text-xs text-gray-600">Paid Advertising</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA to Portfolio */}
          <div className="text-center">
            <Link
              href="/realisations"
              className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-lg group"
            >
              Voir tous nos case studies
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-sm text-gray-500 mt-3">
              Analyses basées sur données GA4 + Meta Business • 100% vérifiables
            </p>
          </div>
        </div>
      </section>

      {/* Méthode OSOM - Data-Driven Process */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-bold mb-8">
              🔬 Méthode scientifique
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              L'approche <span className="text-yellow-400">OSOM</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Notre méthode data-driven qui transforme chaque investissement en machine à résultats mesurables. 
              Basée sur l'analyse de 200+ jours de données réelles.
            </p>
          </div>

          {/* 4 Phases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Phase 1: Data Audit */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                  📊
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Data Audit</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Analyse GA4 + concurrence avec SEMrush. Identification précise des opportunités ROI.
              </p>
              <div className="mt-4 text-yellow-400 text-xs font-medium">
                ⏱ 5-10 jours • 📈 Rapport détaillé
              </div>
            </div>

            {/* Phase 2: Strategy Design */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                  🎯
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Strategy Design</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Stratégie sur mesure basée sur vos données. KPIs définis, tracking optimisé.
              </p>
              <div className="mt-4 text-yellow-400 text-xs font-medium">
                ⏱ 3-5 jours • 🎨 Plan d'action
              </div>
            </div>

            {/* Phase 3: Execution */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                  🚀
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Execution</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Développement/déploiement avec technologies premium. Tests performance rigoureux.
              </p>
              <div className="mt-4 text-yellow-400 text-xs font-medium">
                ⏱ Variable • ⚡ Livraison progressive
              </div>
            </div>

            {/* Phase 4: Optimization */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300">
                  📈
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Optimization</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Monitoring continu, A/B testing, optimisation basée sur données réelles.
              </p>
              <div className="mt-4 text-yellow-400 text-xs font-medium">
                ⏱ Ongoing • 📊 Reporting mensuel
              </div>
            </div>
          </div>

          {/* Differentiators */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-center mb-8">Ce qui nous différencie</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                  🔬
                </div>
                <h4 className="font-bold mb-2">Approche Scientifique</h4>
                <p className="text-gray-300 text-sm">
                  Chaque décision basée sur data. Pas d'intuition, que des faits mesurables.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                  🎯
                </div>
                <h4 className="font-bold mb-2">ROI Transparent</h4>
                <p className="text-gray-300 text-sm">
                  Tracking précis, reporting détaillé. Vous savez exactement d'où viennent vos résultats.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                  ⚡
                </div>
                <h4 className="font-bold mb-2">Technologie Premium</h4>
                <p className="text-gray-300 text-sm">
                  Outils professionnels + IA. Performance et innovation au service de vos objectifs.
                </p>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center bg-yellow-400 text-black px-8 py-4 rounded-full font-bold text-lg">
              🏆 Performance mesurable ou remboursement
            </div>
            <p className="text-gray-400 mt-4 text-sm">
              Nous sommes si confiants en notre méthode que nous garantissons des résultats mesurables dans les 90 premiers jours.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-osom-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Obtenez un audit SEO gratuit de votre site
          </h2>
          <p className="text-xl text-osom-yellow mb-4 font-semibold">
            30 minutes - Sans engagement
          </p>
          <p className="text-lg text-gray-300 mb-8">
            Découvrons ensemble le potentiel de croissance de votre présence digitale.
          </p>
          
          <div className="bg-white rounded-2xl p-8 mb-8 text-left max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-osom-black mb-4">
              📊 Ce que vous recevrez :
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start">
                <span className="text-osom-yellow mr-2">✓</span>
                <span>Audit SEO technique complet</span>
              </div>
              <div className="flex items-start">
                <span className="text-osom-yellow mr-2">✓</span>
                <span>Analyse concurrentielle</span>
              </div>
              <div className="flex items-start">
                <span className="text-osom-yellow mr-2">✓</span>
                <span>Opportunités de croissance</span>
              </div>
              <div className="flex items-start">
                <span className="text-osom-yellow mr-2">✓</span>
                <span>Plan d'action personnalisé</span>
              </div>
              <div className="flex items-start">
                <span className="text-osom-yellow mr-2">✓</span>
                <span>Estimation ROI potentiel</span>
              </div>
              <div className="flex items-start">
                <span className="text-osom-yellow mr-2">✓</span>
                <span>Conseils d'expert immédiatement applicables</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-osom-yellow text-osom-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold text-lg"
            >
              🚀 Réserver mon audit gratuit
            </Link>
            <Link
              href="/calculator"
              className="border-2 border-osom-yellow text-osom-yellow px-8 py-4 rounded-lg hover:bg-osom-yellow hover:text-osom-black transition-colors font-medium"
            >
              Calculateur ROI
            </Link>
          </div>
          
          <p className="text-sm text-gray-400 mt-6">
            ⚡ Réponse sous 24h • 🎯 100% personnalisé • 🏆 Expert SAWI certifié
          </p>
        </div>
      </section>
    </div>
  )
}