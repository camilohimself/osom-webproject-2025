import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'

export const metadata = {
  title: 'Nos Services | osom - Agence Web Digitale Valais',
  description: 'Découvrez nos services : création de sites web, SEO, marketing digital et plus. Solutions complètes pour votre présence en ligne.',
}

export default async function ServicesPage() {
  const dictionary = await getDictionary(defaultLocale)

  const services = [
    {
      title: "osom Web",
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
      icon: "",
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
      icon: "",
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
      icon: ""
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
      icon: ""
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
      icon: ""
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
      icon: ""
    }
  ]

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section - Style Linear */}
      <section className="py-32 lg:py-40 bg-black text-white relative overflow-hidden">
        {/* Background Pattern Linear */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-wide">SERVICES OVERVIEW</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-light mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Services par <span className="text-yellow-400 font-bold">données</span>.<br />
              Résultats par <span className="text-yellow-400 font-bold">science</span>.
            </h1>
            
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Découvrez nos solutions data-driven. Chaque service transforme vos investissements en <span className="text-yellow-400 font-semibold">résultats mesurables</span> et vérifiables.
            </p>
            
            {/* Stats Pills - Style Linear */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                <span className="text-yellow-400 font-bold">140x</span>
                <span className="text-gray-300 ml-2">plus performant</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                <span className="text-cyan-400 font-bold">68.6%</span>
                <span className="text-gray-300 ml-2">engagement SEO</span>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-full px-6 py-3 border border-white/10">
                <span className="text-purple-400 font-bold">400+</span>
                <span className="text-gray-300 ml-2">jours données GA4</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Grid - Style Linear */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-wide">NOS 6 SERVICES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Solutions par <span className="text-yellow-400 font-bold">mesure</span>.<br />
              Performance par <span className="text-yellow-400 font-bold">données</span>.
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Chaque service est conçu avec notre méthode data-driven. Pricing transparent, <span className="text-yellow-400 font-semibold">résultats garantis</span> et mesurables.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              // Mapping thématique couleurs par service
              const serviceColors: { [key: number]: { main: string; bg: string } } = {
                0: { main: '#EAB308', bg: 'yellow-400' }, // osom Web - Jaune
                1: { main: '#A855F7', bg: 'purple-400' }, // Marketing Data - Violet  
                2: { main: '#06B6D4', bg: 'cyan-400' }, // SEO - Cyan
                3: { main: '#EAB308', bg: 'yellow-400' }, // Sites Premium - Jaune
                4: { main: '#10B981', bg: 'green-400' }, // E-commerce - Vert
                5: { main: '#EC4899', bg: 'pink-400' } // Transformation - Rose
              }
              const colors = serviceColors[index] || serviceColors[0]
              
              return (
              <div 
                key={index} 
                className={`backdrop-blur-sm border rounded-3xl p-8 hover:border-opacity-60 transition-all duration-500 relative overflow-hidden ${
                  service.highlight 
                    ? `border-${colors.bg}/30 bg-gradient-to-br from-${colors.bg}/10 to-black/60` 
                    : `border-white/10 bg-gradient-to-br from-white/5 to-black/40 hover:border-${colors.bg}/30`
                }`}
              >
                {/* Badge */}
                {service.badge && (
                  <div className="absolute top-6 right-6">
                    <span className={`bg-${colors.bg} text-black text-xs font-bold px-4 py-2 rounded-full`}>
                      {service.badge}
                    </span>
                  </div>
                )}

                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 bg-${colors.bg} rounded-full flex items-center justify-center ${service.highlight ? 'animate-pulse' : ''}`}>
                      <div className="w-8 h-8 bg-black rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-light text-white mb-2" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        {service.title}
                      </h3>
                      <p className={`text-sm text-${colors.bg} font-medium`}>
                        {service.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-8 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {service.description}
                </p>

                {/* Pricing & Timeline - Style Linear */}
                <div className={`grid grid-cols-2 gap-4 mb-8 p-6 bg-gradient-to-r from-${colors.bg}/10 to-transparent rounded-xl border border-${colors.bg}/20`}>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Prix</div>
                    <div className="text-lg font-light text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>{service.pricing}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider font-medium">Délai</div>
                    <div className="text-lg font-light text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>{service.timeline}</div>
                  </div>
                </div>

                {/* Expected Results - Style Linear */}
                <div className="mb-8">
                  <div className={`text-sm font-medium text-${colors.bg} mb-4`}>
                    Résultats data-driven :
                  </div>
                  <ul className="space-y-3">
                    {service.expectedResults.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-start">
                        <div className={`w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0 ${
                          service.realData ? `bg-${colors.bg}` : `bg-${colors.bg}/60`
                        }`}></div>
                        <span className={`text-sm leading-relaxed ${
                          service.realData ? `text-${colors.bg} font-medium` : 'text-gray-300'
                        }`} style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Case Study Link - Style Linear */}
                <div className={`pt-6 border-t border-${colors.bg}/20`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${service.realData ? `bg-${colors.bg}` : 'bg-gray-400'}`}></div>
                      <span className="text-xs text-gray-400 font-medium">
                        {service.realData ? 'Données vérifiées GA4' : 'Performance estimée'}
                      </span>
                    </div>
                    <button className={`text-${colors.bg} hover:text-${colors.bg}/80 text-sm font-medium transition-colors`} style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      {service.caseStudy} →
                    </button>
                  </div>
                </div>
              </div>
            )})}
          </div>

          {/* CTA Bottom - Style Linear */}
          <div className="text-center mt-20">
            <div className="backdrop-blur-sm border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto bg-gradient-to-br from-white/5 to-black/40">
              <div className="flex items-center justify-center mb-6">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
                <span className="text-yellow-400 text-sm font-medium tracking-wide">SOLUTION PERSONNALISÉE</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Projet <span className="text-yellow-400 font-bold">unique</span> ?<br />
                Solution <span className="text-yellow-400 font-bold">sur mesure</span>.
              </h3>
              
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Chaque entreprise a ses défis spécifiques. Créons ensemble une solution <span className="text-yellow-400 font-semibold">data-driven</span> parfaitement adaptée.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold shadow-lg"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                >
                  Consultation gratuite
                </Link>
                <Link
                  href="/calculator"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors font-medium backdrop-blur-sm"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                >
                  Calculer mon ROI
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview Teaser - Style Linear */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
              <span className="text-green-400 text-sm font-medium tracking-wide">RÉSULTATS VÉRIFIÉS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Preuves par <span className="text-green-400 font-bold">données</span>.<br />
              Performance par <span className="text-green-400 font-bold">transparence</span>.
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Découvrez comment nous transformons les investissements clients en <span className="text-green-400 font-semibold">performances mesurables</span> et vérifiables via GA4.
            </p>
          </div>

          {/* Case Study PME Formation Valais - Style Linear */}
          <div className="backdrop-blur-sm border border-green-400/20 rounded-3xl p-12 mb-16 max-w-6xl mx-auto bg-gradient-to-br from-green-400/10 to-black/60">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Client Info */}
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-sm text-green-400 font-medium tracking-wide">CASE STUDY VÉRIFIÉ • 200+ JOURS GA4</span>
                </div>
                
                <h3 className="text-3xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  PME Formation <span className="text-green-400 font-bold">Valais</span>
                </h3>
                
                <p className="text-gray-300 mb-8 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  Formation professionnelle 60+ participants • Comparatif stratégie organique vs publicité payante sur période identique (6 mois)
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-green-400/20 rounded-xl border border-green-400/30">
                    <div className="text-3xl font-light text-green-400 mb-2">688</div>
                    <div className="text-xs text-gray-300 uppercase tracking-wide">Conversions Organiques</div>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-3xl font-light text-gray-400 mb-2">49</div>
                    <div className="text-xs text-gray-300 uppercase tracking-wide">Conversions Payantes</div>
                  </div>
                </div>
              </div>

              {/* Right: Key Metrics - Style Linear */}
              <div className="space-y-4">
                <div className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <span className="text-gray-300" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Efficacité budgétaire</span>
                  <span className="text-2xl font-light text-green-400">140x supérieur</span>
                </div>
                <div className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <span className="text-gray-300" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Taux de conversion</span>
                  <span className="text-2xl font-light text-green-400">11.3%</span>
                </div>
                <div className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <span className="text-gray-300" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Réduction coût acquisition</span>
                  <span className="text-2xl font-light text-green-400">-99.3%</span>
                </div>
                <div className="flex items-center justify-between p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <span className="text-gray-300" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Vues organiques générées</span>
                  <span className="text-2xl font-light text-green-400">2.4M+</span>
                </div>
              </div>
            </div>

            {/* ROI Comparison Bar - Style Linear */}
            <div className="mt-12 pt-8 border-t border-green-400/20">
              <div className="text-center mb-8">
                <span className="text-sm text-green-400 font-medium tracking-wide">COMPARAISON ROI • 1000 CHF INVESTIS</span>
              </div>
              <div className="flex items-end justify-center space-x-12">
                <div className="text-center">
                  <div className="bg-green-400 h-24 w-32 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <span className="text-black font-light text-2xl" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>105.8</span>
                  </div>
                  <span className="text-sm text-green-400 font-medium">Stratégie osom</span>
                </div>
                <div className="text-3xl text-gray-400 pb-12">vs</div>
                <div className="text-center">
                  <div className="bg-white/20 h-3 w-32 rounded-xl flex items-center justify-center mb-4">
                    <span className="text-white font-light text-xs">0.75</span>
                  </div>
                  <span className="text-sm text-gray-400 font-medium">Publicité Payante</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA to Portfolio - Style Linear */}
          <div className="text-center mt-16">
            <Link
              href="/realisations"
              className="inline-flex items-center bg-green-400 text-black px-8 py-4 rounded-lg hover:bg-green-500 transition-colors font-bold text-lg group shadow-lg"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Voir tous nos case studies
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-sm text-gray-400 mt-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Analyses GA4 + Meta Business • <span className="text-green-400">100% vérifiables</span>
            </p>
          </div>
        </div>
      </section>

      {/* Méthode osom - Data-Driven Process - Style Linear */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center mb-4">
              <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
              <span className="text-yellow-400 text-sm font-medium tracking-wide">MÉTHODE SCIENTIFIQUE</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Méthode par <span className="text-yellow-400 font-bold">science</span>.<br />
              Résultats par <span className="text-yellow-400 font-bold">données</span>.
            </h2>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
              Notre approche data-driven transforme chaque investissement en machine à <span className="text-yellow-400 font-semibold">résultats mesurables</span>. 
              Basée sur 400+ jours d'analyses.
            </p>
          </div>

          {/* 4 Phases Grid - Style Linear */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {/* Phase 1: Data Audit */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 bg-black rounded-full"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Data Audit</h3>
              <p className="text-gray-300 text-sm leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Analyse GA4 + concurrence avec SEMrush. Identification précise des opportunités ROI.
              </p>
              <div className="mt-4 text-yellow-400 text-xs font-medium">
                5-10 jours • Rapport détaillé
              </div>
            </div>

            {/* Phase 2: Strategy Design */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 bg-black rounded-full"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Strategy Design</h3>
              <p className="text-gray-300 text-sm leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Stratégie sur mesure basée sur vos données. KPIs définis, tracking optimisé.
              </p>
              <div className="mt-4 text-yellow-400 text-xs font-medium">
                3-5 jours • Plan d'action
              </div>
            </div>

            {/* Phase 3: Execution */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 bg-black rounded-full"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Execution</h3>
              <p className="text-gray-300 text-sm leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Développement/déploiement avec technologies premium. Tests performance rigoureux.
              </p>
              <div className="mt-4 text-yellow-400 text-xs font-medium">
                Variable • Livraison progressive
              </div>
            </div>

            {/* Phase 4: Optimization */}
            <div className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 bg-black rounded-full"></div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 text-black rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Optimization</h3>
              <p className="text-gray-300 text-sm leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Monitoring continu, A/B testing, optimisation basée sur données réelles.
              </p>
              <div className="mt-4 text-yellow-400 text-xs font-medium">
                Ongoing • Reporting mensuel
              </div>
            </div>
          </div>

          {/* Differentiators - Style Linear */}
          <div className="backdrop-blur-sm border border-white/10 rounded-3xl p-12 bg-gradient-to-br from-white/5 to-black/40">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="w-2 h-2 rounded-full bg-white mr-3"></div>
                <span className="text-white text-sm font-medium tracking-wide">DIFFÉRENCIATEURS osom</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-light text-white leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Différence par <span className="text-yellow-400 font-bold">science</span>.<br />
                Avantage par <span className="text-yellow-400 font-bold">données</span>.
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 bg-black rounded-full"></div>
                </div>
                <h4 className="text-xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Approche Scientifique</h4>
                <p className="text-gray-300 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  Chaque décision basée sur data. Pas d'intuition, que des <span className="text-yellow-400 font-semibold">faits mesurables</span>.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 bg-black rounded-full"></div>
                </div>
                <h4 className="text-xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>ROI Transparent</h4>
                <p className="text-gray-300 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  Tracking précis, reporting détaillé. Vous savez exactement d'où viennent vos <span className="text-yellow-400 font-semibold">résultats</span>.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="w-10 h-10 bg-black rounded-full"></div>
                </div>
                <h4 className="text-xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Technologie Premium</h4>
                <p className="text-gray-300 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  Outils professionnels + IA. Performance et <span className="text-yellow-400 font-semibold">innovation</span> au service de vos objectifs.
                </p>
              </div>
            </div>
          </div>

          {/* Guarantee - Style Linear */}
          <div className="text-center mt-16">
            <div className="backdrop-blur-sm border border-yellow-400/30 rounded-2xl p-8 max-w-2xl mx-auto bg-gradient-to-br from-yellow-400/10 to-black/60">
              <div className="flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                <span className="text-yellow-400 text-sm font-medium tracking-wide">GARANTIE PERFORMANCE</span>
              </div>
              <div className="text-2xl font-light text-white mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Performance <span className="text-yellow-400 font-bold">mesurable</span><br />ou <span className="text-yellow-400 font-bold">remboursement</span>
              </div>
              <p className="text-gray-300 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Nous sommes si confiants en notre méthode que nous garantissons des <span className="text-yellow-400 font-semibold">résultats mesurables</span> dans les 90 premiers jours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Style Linear */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Gradient Linear */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-green-400/5"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="flex items-center justify-center mb-4">
            <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
            <span className="text-yellow-400 text-sm font-medium tracking-wide">AUDIT GRATUIT</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Audit par <span className="text-yellow-400 font-bold">données</span>.<br />
            Gratuit par <span className="text-yellow-400 font-bold">transparence</span>.
          </h2>
          
          <p className="text-xl text-gray-300 mb-4 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            <span className="text-yellow-400 font-bold">30 minutes</span> • Sans engagement
          </p>
          <p className="text-lg text-gray-300 mb-12" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            Découvrons ensemble le potentiel de croissance de votre <span className="text-yellow-400 font-semibold">présence digitale</span>.
          </p>
          
          <div className="backdrop-blur-sm border border-white/10 rounded-3xl p-10 mb-12 text-left max-w-3xl mx-auto bg-gradient-to-br from-white/5 to-black/40">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                <span className="text-green-400 text-sm font-medium tracking-wide">CE QUE VOUS RECEVREZ</span>
              </div>
              <h3 className="text-2xl font-light text-white" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                Analyse <span className="text-green-400 font-bold">complète</span> de votre potentiel
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Audit SEO technique complet</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Analyse concurrentielle</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Opportunités de croissance</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Plan d'action personnalisé</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Estimation ROI potentiel</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-300" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>Conseils expert immédiatement applicables</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-colors font-bold text-lg shadow-lg"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Réserver mon audit gratuit
            </Link>
            <Link
              href="/calculator"
              className="border-2 border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white hover:text-black transition-colors font-medium backdrop-blur-sm"
              style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
            >
              Calculateur ROI
            </Link>
          </div>
          
          {/* Trust Indicators - Style Linear */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              <span>Réponse sous 24h</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              <span>100% personnalisé</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
              <span>Expert SAWI certifié</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}