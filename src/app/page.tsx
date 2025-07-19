import { Button } from '@/components/ui'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import { ScrollAnimations } from '@/components/animations'
import Spotlight from '@/components/effects/Spotlight'
import SpotlightContent from '@/components/effects/SpotlightContent'
import FloatingCTA from '@/components/ui/FloatingCTA'
import RevolutionaryHero from '@/components/ui/RevolutionaryHero'

export default async function Home() {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <div className="min-h-screen bg-osom-black relative">
      {/* Faisceau Effect */}
      <Spotlight className="opacity-80" size={350} intensity={0.9} />
      {/* Revolutionary Hero Section */}
      <RevolutionaryHero />

      {/* Features Section */}
      <section className="py-16 bg-osom-black relative z-10">
        <div className="container mx-auto px-4">
          <SpotlightContent dimmedOpacity={0.25} highlightRadius={350}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollAnimations animation="slideUp" delay={0.1}>
                <div className="text-center p-8 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-primary rounded-lg mb-6 flex items-center justify-center mx-auto">
                    <span className="text-white text-3xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {dictionary.home.features['web-title']}
                  </h3>
                  <p className="text-white/80">
                    {dictionary.home.features['web-desc']}
                  </p>
                </div>
              </ScrollAnimations>
            
              <ScrollAnimations animation="slideUp" delay={0.2}>
                <div className="text-center p-8 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-osom-yellow rounded-lg mb-6 flex items-center justify-center mx-auto">
                    <span className="text-osom-black text-3xl">🚀</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {dictionary.home.features['seo-title']}
                  </h3>
                  <p className="text-white/80">
                    {dictionary.home.features['seo-desc']}
                  </p>
                </div>
              </ScrollAnimations>
            
              <ScrollAnimations animation="slideUp" delay={0.3}>
                <div className="text-center p-8 rounded-lg bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                  <div className="w-16 h-16 bg-white rounded-lg mb-6 flex items-center justify-center mx-auto">
                    <span className="text-osom-black text-3xl">🎨</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {dictionary.home.features['design-title']}
                  </h3>
                  <p className="text-white/80">
                    {dictionary.home.features['design-desc']}
                  </p>
                </div>
              </ScrollAnimations>
            </div>
          </SpotlightContent>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-osom-black relative z-10">
        <div className="container mx-auto px-4 text-center">
          <SpotlightContent dimmedOpacity={0.25} highlightRadius={400}>
            <ScrollAnimations animation="fadeIn">
              <h2 className="text-4xl font-bold text-white mb-6">
                Prêt à digitaliser votre entreprise ?
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Discutons de votre projet et découvrons comment nous pouvons vous aider à atteindre vos objectifs digitaux.
              </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="primary"
                size="lg"
                href="/contact"
                className="bg-white text-brand-dark hover:bg-gray-100 focus:ring-white"
                animated={true}
              >
                Planifier un appel gratuit
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/services"
                className="border-white text-white hover:bg-white hover:text-brand-dark focus:ring-white"
                animated={true}
              >
                Voir nos services
              </Button>
            </div>
            </ScrollAnimations>
          </SpotlightContent>
        </div>
      </section>
      
      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  )
}