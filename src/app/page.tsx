import Link from 'next/link'
import { Logo } from '@/components/ui'
import { getDictionary } from '@/lib/dictionaries'
import { defaultLocale } from '@/lib/i18n'

export default async function Home() {
  const dictionary = await getDictionary(defaultLocale)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-hero flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <Logo size="lg" variant="white" />
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 font-cera">
              OSOM
            </h1>
            <p className="text-xl text-brand-light mb-8 max-w-2xl mx-auto">
              {dictionary.home.hero.subtitle}
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="/services"
                className="bg-brand-primary text-white px-8 py-4 rounded-lg hover:bg-osom-teal transition-colors font-semibold shadow-brand-md inline-block"
              >
                {dictionary.home.hero['cta-primary']}
              </Link>
              <Link
                href="/contact"
                className="border border-brand-secondary text-brand-secondary px-8 py-4 rounded-lg hover:bg-brand-secondary hover:text-osom-black transition-colors font-semibold inline-block"
              >
                {dictionary.home.hero['cta-secondary']}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à digitaliser votre entreprise ?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et découvrons comment nous pouvons vous aider à atteindre vos objectifs digitaux.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="bg-white text-brand-dark px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold shadow-brand-md inline-block"
            >
              Planifier un appel gratuit
            </Link>
            <Link
              href="/services"
              className="border border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-brand-dark transition-colors font-semibold inline-block"
            >
              Voir nos services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}