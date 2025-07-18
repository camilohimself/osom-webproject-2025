import { Logo, Button } from '@/components/ui'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import { AlpesScene } from '@/components/three'
import { HeroAnimations, ScrollAnimations } from '@/components/animations'

export default async function Home() {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
        {/* 3D Alpes Background */}
        <AlpesScene />
        
        {/* Hero Content */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <HeroAnimations className="text-center">
            <div className="flex justify-center mb-8" data-animate="logo">
              <Logo size="lg" variant="white" />
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 font-cera" data-animate="title">
              OSOM
            </h1>
            <p className="text-xl text-brand-light mb-8 max-w-2xl mx-auto" data-animate="subtitle">
              {dictionary.home.hero.subtitle}
            </p>
            <div className="flex justify-center gap-4">
              <div data-animate="button">
                <Button
                  variant="primary"
                  size="lg"
                  href="/services"
                  animated={true}
                >
                  {dictionary.home.hero['cta-primary']}
                </Button>
              </div>
              <div data-animate="button">
                <Button
                  variant="outline"
                  size="lg"
                  href="/contact"
                  animated={true}
                  className="border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-osom-black"
                >
                  {dictionary.home.hero['cta-secondary']}
                </Button>
              </div>
            </div>
          </HeroAnimations>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimations animation="slideUp" delay={0.1}>
              <div className="text-center p-8 rounded-lg shadow-brand-lg hover:shadow-brand-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-primary rounded-lg mb-6 flex items-center justify-center mx-auto">
                  <span className="text-white text-3xl">⚡</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-osom-black">
                  {dictionary.home.features['web-title']}
                </h3>
                <p className="text-brand-dark">
                  {dictionary.home.features['web-desc']}
                </p>
              </div>
            </ScrollAnimations>
            
            <ScrollAnimations animation="slideUp" delay={0.2}>
              <div className="text-center p-8 rounded-lg shadow-brand-lg hover:shadow-brand-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-secondary rounded-lg mb-6 flex items-center justify-center mx-auto">
                  <span className="text-white text-3xl">🚀</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-osom-black">
                  {dictionary.home.features['seo-title']}
                </h3>
                <p className="text-brand-dark">
                  {dictionary.home.features['seo-desc']}
                </p>
              </div>
            </ScrollAnimations>
            
            <ScrollAnimations animation="slideUp" delay={0.3}>
              <div className="text-center p-8 rounded-lg shadow-brand-lg hover:shadow-brand-xl transition-shadow">
                <div className="w-16 h-16 bg-brand-accent rounded-lg mb-6 flex items-center justify-center mx-auto">
                  <span className="text-white text-3xl">🎨</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-osom-black">
                  {dictionary.home.features['design-title']}
                </h3>
                <p className="text-brand-dark">
                  {dictionary.home.features['design-desc']}
                </p>
              </div>
            </ScrollAnimations>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
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
        </div>
      </section>
    </div>
  )
}