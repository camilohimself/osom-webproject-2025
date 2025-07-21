import Link from 'next/link'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale, type Locale } from '@/lib/i18n'
import { GraphiqueLinear, GraphiqueConversion, GraphiqueComparatif, GraphiqueImpact } from '@/components/ui'
import { cookies } from 'next/headers'
import HeroPremium from '@/components/homepage/HeroPremium'
import AnimatedElement from '@/components/ui/AnimatedElement'
import InteractiveBackground from '@/components/ui/InteractiveBackground'
import ScrollProgressIndicator from '@/components/ui/ScrollProgressIndicator'
import MagneticButton from '@/components/ui/MagneticButton'

export default async function Home() {
  // Get locale from cookie (same logic as layout.tsx)
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value
  
  let currentLocale = defaultLocale
  if (localeCookie && ['fr', 'en', 'de'].includes(localeCookie)) {
    currentLocale = localeCookie as Locale
  }

  const dictionary = await getDictionary(currentLocale)

  return (
    <div className="min-h-screen bg-black relative">
      {/* Interactive Background Layer */}
      <InteractiveBackground />
      
      {/* Scroll Progress Indicator */}
      <ScrollProgressIndicator />
      {/* Hero Premium Section */}
      <HeroPremium dictionary={dictionary.home} />

      {/* Les 3 Forces OSOM - Design System Linear */}
      <section className="py-32 bg-black relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedElement type="fadeIn" delay={0.2}>
            <div className="text-center mb-24">
              <div className="flex items-center justify-center mb-4">
                <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
                <span className="text-yellow-400 text-sm font-medium tracking-wide">{dictionary.home.forces.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                {dictionary.home.forces.title} <span className="text-yellow-400 font-bold">{dictionary.home.forces.title_service}</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                {dictionary.home.forces.subtitle}
              </p>
            </div>
          </AnimatedElement>
          
          <div className="space-y-20">
            
            {/* FORCE 1: Design & Expérience Utilisateur */}
            <AnimatedElement type="slideUp" delay={0.1}>
              <div className="backdrop-blur-sm border border-yellow-400/20 rounded-3xl overflow-hidden min-h-[600px] hover:border-yellow-400/40 hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-500 group hover:scale-[1.02]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 h-full">
                {/* Graphique à gauche - Layout créatif */}
                <div className="bg-gradient-to-br from-yellow-400/10 to-black/60 p-8 flex items-center">
                  <GraphiqueConversion
                    title={dictionary.home.charts.conversion.title}
                    subtitle={dictionary.home.charts.conversion.subtitle}
                    traditionalRate={2.5}
                    osomRate={11.3}
                    className="w-full border-0"
                  />
                </div>
                
                {/* Contenu principal - Plus d'espace */}
                <div className="col-span-2 p-16 bg-gradient-to-br from-black/60 to-black/30">
                  <div className="max-w-3xl">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-yellow-400 rounded-full mr-6 flex items-center justify-center">
                        <div className="w-8 h-8 bg-black rounded-full"></div>
                      </div>
                      <div>
                        <div className="text-yellow-400 font-medium text-sm mb-2">{dictionary.home.force1.badge}</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="slideLeft" delay={0.3}>
                      <h3 className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        {dictionary.home.force1.title_line1} <span className="text-yellow-400 font-bold">{dictionary.home.force1.title_données}</span>.<br />
                        {dictionary.home.force1.title_line2} <span className="text-yellow-400 font-bold">{dictionary.home.force1.title_science}</span>.
                      </h3>
                    </AnimatedElement>
                    
                    <p className="text-xl text-gray-300 leading-relaxed mb-10" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      {dictionary.home.force1.description}
                    </p>
                    
                    {/* Arguments renforcés */}
                    <div className="space-y-6 mb-10">
                      <div className="bg-yellow-400/5 rounded-lg p-4 border-l-4 border-yellow-400">
                        <div className="font-semibold text-yellow-400 mb-2">{dictionary.home.force1.architecture.title}</div>
                        <div className="text-gray-300">{dictionary.home.force1.architecture.description}</div>
                      </div>
                      
                      <div className="bg-yellow-400/5 rounded-lg p-4 border-l-4 border-yellow-400">
                        <div className="font-semibold text-yellow-400 mb-2">{dictionary.home.force1.performance.title}</div>
                        <div className="text-gray-300">{dictionary.home.force1.performance.description}</div>
                      </div>
                      
                      <div className="bg-yellow-400/5 rounded-lg p-4 border-l-4 border-yellow-400">
                        <div className="font-semibold text-yellow-400 mb-2">{dictionary.home.force1.technologies.title}</div>
                        <div className="text-gray-300">{dictionary.home.force1.technologies.description}</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="slideUp" delay={0.8}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-6 bg-yellow-400/10 rounded-xl border border-yellow-400/30 hover:bg-yellow-400/15 hover:border-yellow-400/50 transition-all duration-300">
                          <div className="text-yellow-400 font-bold text-lg mb-2">{dictionary.home.force1.formula.title}</div>
                          <div className="text-white text-lg">{dictionary.home.force1.formula.price}</div>
                          <div className="text-gray-400 text-sm mt-2">{dictionary.home.force1.formula.subtitle}</div>
                        </div>
                        
                        <div className="p-6 bg-yellow-400/5 rounded-xl border border-yellow-400/20 hover:bg-yellow-400/10 hover:border-yellow-400/40 transition-all duration-300">
                          <div className="text-yellow-400 text-2xl font-light mb-2">{dictionary.home.force1.conversion.rate}</div>
                          <div className="text-gray-300">{dictionary.home.force1.conversion.description}</div>
                          <div className="text-gray-400 text-sm mt-2">{dictionary.home.force1.conversion.subtitle}</div>
                        </div>
                      </div>
                    </AnimatedElement>
                  </div>
                </div>
              </div>
              </div>
            </AnimatedElement>
            
            {/* FORCE 2: SEO & Acquisition Stratégique */}
            <AnimatedElement type="slideUp" delay={0.3}>
              <div className="backdrop-blur-sm border border-cyan-400/20 rounded-3xl overflow-hidden min-h-[600px] hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-400/10 transition-all duration-500 group hover:scale-[1.02]">
              {/* Layout centré avec background graphique */}
              <div className="relative">
                {/* Background graphique */}
                <div className="absolute inset-0 opacity-20">
                  <GraphiqueComparatif
                    title={dictionary.home.charts.comparatif.title}
                    subtitle={dictionary.home.charts.comparatif.subtitle}
                    data={[
                      { label: dictionary.home.charts.comparatif.seo_label, value: 68.6, color: "#06B6D4" },
                      { label: dictionary.home.charts.comparatif.direct_label, value: 44.6, color: "#6B7280" }
                    ]}
                    className="h-full border-0"
                  />
                </div>
                
                {/* Contenu au premier plan */}
                <div className="relative z-10 p-16 bg-gradient-to-br from-black/80 to-black/60">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="flex items-center justify-center mb-8">
                      <div className="w-16 h-16 bg-cyan-400 rounded-full mr-6 flex items-center justify-center">
                        <div className="w-8 h-8 bg-black rounded-full"></div>
                      </div>
                      <div>
                        <div className="text-cyan-400 font-medium text-sm mb-2">{dictionary.home.force2.badge}</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="fadeIn" delay={0.4}>
                      <h3 className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        {dictionary.home.force2.title_line1} <span className="text-cyan-400 font-bold">{dictionary.home.force2.title_diagnostic}</span>.<br />
                        {dictionary.home.force2.title_line2} <span className="text-cyan-400 font-bold">{dictionary.home.force2.title_intelligence}</span>.
                      </h3>
                    </AnimatedElement>
                    
                    <p className="text-xl text-gray-300 leading-relaxed mb-12 text-center" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      {dictionary.home.force2.description}
                    </p>
                    
                    {/* Arguments centrés sur 2 colonnes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                      <div className="bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/30">
                        <div className="text-cyan-400 font-bold text-lg mb-4">{dictionary.home.force2.diagnostic.title}</div>
                        <div className="text-gray-300 mb-4">{dictionary.home.force2.diagnostic.description}</div>
                        <div className="text-cyan-400 text-sm">{dictionary.home.force2.diagnostic.subtitle}</div>
                      </div>
                      
                      <div className="bg-cyan-400/10 rounded-xl p-6 border border-cyan-400/30">
                        <div className="text-cyan-400 font-bold text-lg mb-4">{dictionary.home.force2.traffic.title}</div>
                        <div className="text-gray-300 mb-4">{dictionary.home.force2.traffic.description}</div>
                        <div className="text-cyan-400 text-sm">{dictionary.home.force2.traffic.subtitle}</div>
                      </div>
                      
                      <div className="bg-cyan-400/5 rounded-xl p-6 border border-cyan-400/20">
                        <div className="text-cyan-400 font-bold text-lg mb-4">{dictionary.home.force2.optimization.title}</div>
                        <div className="text-gray-300 mb-4">{dictionary.home.force2.optimization.description}</div>
                        <div className="text-cyan-400 text-sm">{dictionary.home.force2.optimization.subtitle}</div>
                      </div>
                      
                      <div className="bg-cyan-400/5 rounded-xl p-6 border border-cyan-400/20">
                        <div className="text-cyan-400 font-bold text-lg mb-4">{dictionary.home.force2.roi.title}</div>
                        <div className="text-gray-300 mb-4">{dictionary.home.force2.roi.description}</div>
                        <div className="text-cyan-400 text-sm">{dictionary.home.force2.roi.subtitle}</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="scale" delay={0.9}>
                      <div className="bg-cyan-400/10 rounded-xl p-8 border border-cyan-400/30 max-w-2xl mx-auto hover:bg-cyan-400/15 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-500">
                        <div className="text-cyan-400 font-bold text-2xl mb-2">{dictionary.home.force2.engagement.title}</div>
                        <div className="text-white text-lg">{dictionary.home.force2.engagement.description}</div>
                        <div className="text-gray-400 text-sm mt-2">{dictionary.home.force2.engagement.subtitle}</div>
                      </div>
                    </AnimatedElement>
                  </div>
                </div>
              </div>
              </div>
            </AnimatedElement>
            
            {/* FORCE 3: Data-Driven Decision Making */}
            <AnimatedElement type="slideUp" delay={0.5}>
              <div className="backdrop-blur-sm border border-purple-400/20 rounded-3xl overflow-hidden min-h-[600px] hover:border-purple-400/40 hover:shadow-2xl hover:shadow-purple-400/10 transition-all duration-500 group hover:scale-[1.02]">
              {/* Layout asymétrique diagonal */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0 h-full">
                {/* Contenu principal - 3 colonnes */}
                <div className="col-span-3 p-16 bg-gradient-to-br from-purple-900/20 to-black/60">
                  <div className="max-w-3xl">
                    <div className="flex items-center mb-8">
                      <div className="w-16 h-16 bg-purple-400 rounded-full mr-6 flex items-center justify-center">
                        <div className="w-8 h-8 bg-black rounded-full"></div>
                      </div>
                      <div>
                        <div className="text-purple-400 font-medium text-sm mb-2">{dictionary.home.force3.badge}</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="slideRight" delay={0.4}>
                      <h3 className="text-4xl md:text-5xl font-light text-white mb-10 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                        {dictionary.home.force3.title_line1} <span className="text-purple-400 font-bold">{dictionary.home.force3.title_data}</span>.<br />
                        {dictionary.home.force3.title_line2} <span className="text-purple-400 font-bold">{dictionary.home.force3.title_science}</span>.
                      </h3>
                    </AnimatedElement>
                    
                    <p className="text-xl text-gray-300 leading-relaxed mb-10" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                      {dictionary.home.force3.description}
                    </p>
                    
                    {/* Arguments avec data forte */}
                    <div className="space-y-6 mb-10">
                      <div className="bg-gradient-to-r from-purple-400/10 to-transparent rounded-lg p-6 border-l-4 border-purple-400">
                        <div className="flex justify-between items-start mb-3">
                          <div className="font-semibold text-purple-400">{dictionary.home.force3.revolution.title}</div>
                          <div className="text-purple-400 font-bold text-lg">{dictionary.home.force3.revolution.roi}</div>
                        </div>
                        <div className="text-gray-300">{dictionary.home.force3.revolution.description}</div>
                        <div className="text-purple-300 text-sm mt-2">{dictionary.home.force3.revolution.subtitle}</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-400/10 to-transparent rounded-lg p-6 border-l-4 border-purple-400">
                        <div className="flex justify-between items-start mb-3">
                          <div className="font-semibold text-purple-400">{dictionary.home.force3.cost.title}</div>
                          <div className="text-purple-400 font-bold text-lg">{dictionary.home.force3.cost.reduction}</div>
                        </div>
                        <div className="text-gray-300">{dictionary.home.force3.cost.description}</div>
                        <div className="text-purple-300 text-sm mt-2">{dictionary.home.force3.cost.subtitle}</div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-purple-400/5 to-transparent rounded-lg p-6 border-l-4 border-purple-300">
                        <div className="font-semibold text-purple-400 mb-3">{dictionary.home.force3.tracking.title}</div>
                        <div className="text-gray-300">{dictionary.home.force3.tracking.description}</div>
                        <div className="text-purple-300 text-sm mt-2">{dictionary.home.force3.tracking.subtitle}</div>
                      </div>
                    </div>
                    
                    <AnimatedElement type="scale" delay={0.9}>
                      <div className="bg-purple-400/10 rounded-xl p-8 border border-purple-400/30 hover:bg-purple-400/15 hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-400/20 transition-all duration-500">
                        <div className="text-purple-400 font-bold text-2xl mb-2">{dictionary.home.force3.conversions.title}</div>
                        <div className="text-white text-lg">{dictionary.home.force3.conversions.description}</div>
                        <div className="text-gray-400 text-sm mt-2">{dictionary.home.force3.conversions.subtitle}</div>
                      </div>
                    </AnimatedElement>
                  </div>
                </div>
                
                {/* Graphique diagonal - 2 colonnes */}
                <div className="col-span-2 bg-gradient-to-tl from-purple-900/30 to-black/80 flex items-center p-8">
                  <GraphiqueImpact
                    title={dictionary.home.charts.impact.title}
                    subtitle={dictionary.home.charts.impact.subtitle}
                    organicValue={688}
                    paidValue={49}
                    multiplier={140}
                    className="w-full border-0"
                    organicColor="#A855F7"
                  />
                </div>
              </div>
              </div>
            </AnimatedElement>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-purple-500/5"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            {dictionary.home.cta.title_line1}<br />
            vos <span className="text-yellow-400 font-bold">{dictionary.home.cta.title_performances}</span> ?
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
            {dictionary.home.cta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <MagneticButton
              href="/contact"
              variant="primary"
              className="text-lg px-10 py-5"
            >
              {dictionary.home.cta.cta_primary}
            </MagneticButton>
            <MagneticButton
              href="/calculator"
              variant="secondary"
              className="text-lg px-10 py-5"
            >
              {dictionary.home.cta.cta_secondary}
            </MagneticButton>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span>{dictionary.home.cta.trust_indicators.ga4}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
              <span>{dictionary.home.cta.trust_indicators.results}</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
              <span>{dictionary.home.cta.trust_indicators.guarantee}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}