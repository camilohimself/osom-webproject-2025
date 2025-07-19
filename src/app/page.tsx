import { Button } from '@/components/ui'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'
import { ScrollAnimations } from '@/components/animations'
import MinimalistHero from '@/components/ui/MinimalistHero'

export default async function Home() {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <div className="min-h-screen bg-white relative">
      {/* Minimalist Hero Section */}
      <MinimalistHero />

      {/* Services Section - Minimalist */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
              Notre expertise
            </h2>
            <div className="w-16 h-px bg-gray-300 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <ScrollAnimations animation="slideUp" delay={0.1}>
              <div className="text-center group">
                <div className="w-2 h-2 bg-gray-400 rounded-full mb-8 mx-auto group-hover:bg-gray-600 transition-colors duration-300" />
                <h3 className="text-xl font-medium mb-4 text-gray-900">
                  {dictionary.home.features['web-title']}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {dictionary.home.features['web-desc']}
                </p>
              </div>
            </ScrollAnimations>
            
            <ScrollAnimations animation="slideUp" delay={0.2}>
              <div className="text-center group">
                <div className="w-2 h-2 bg-gray-400 rounded-full mb-8 mx-auto group-hover:bg-gray-600 transition-colors duration-300" />
                <h3 className="text-xl font-medium mb-4 text-gray-900">
                  {dictionary.home.features['seo-title']}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {dictionary.home.features['seo-desc']}
                </p>
              </div>
            </ScrollAnimations>
            
            <ScrollAnimations animation="slideUp" delay={0.3}>
              <div className="text-center group">
                <div className="w-2 h-2 bg-gray-400 rounded-full mb-8 mx-auto group-hover:bg-gray-600 transition-colors duration-300" />
                <h3 className="text-xl font-medium mb-4 text-gray-900">
                  {dictionary.home.features['design-title']}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {dictionary.home.features['design-desc']}
                </p>
              </div>
            </ScrollAnimations>
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalist */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <ScrollAnimations animation="fadeIn">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
              Prêt à collaborer ?
            </h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Discutons de votre projet et découvrons comment nous pouvons transformer vos idées en succès mesurables.
            </p>
            <Button
              variant="primary"
              size="lg"
              href="/contact"
              className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 text-base font-medium rounded-sm transition-all duration-300"
            >
              Démarrer la conversation
            </Button>
          </ScrollAnimations>
        </div>
      </section>
    </div>
  )
}