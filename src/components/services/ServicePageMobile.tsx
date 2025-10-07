'use client'

import MobileCTABar from '@/components/ui/MobileCTABar'

interface ServicePageMobileProps {
  title: string
  subtitle: string
  mainKPI: {
    value: string
    label: string
  }
  caseStudy: {
    client: string
    before: string
    after: string
    result: string
  }
  process: {
    step1: string
    step2: string
  }
  pricing: {
    price: string
    timeline: string
    included: string[]
  }
  ctaTitle: string
  ctaSubtitle: string
}

export function ServicePageMobile({
  title,
  subtitle,
  mainKPI,
  caseStudy,
  process,
  pricing,
  ctaTitle,
  ctaSubtitle
}: ServicePageMobileProps) {
  return (
    <div className="lg:hidden min-h-screen bg-black text-white pb-24">
      {/* Hero Mobile OPTIMISÉ CONVERSION */}
      <section className="pt-20 pb-8 px-4">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-3xl font-bold mb-3">
            {title}
          </h1>
          <p className="text-gray-300 mb-6">{subtitle}</p>

          {/* KPI + PRICING COMBINÉS */}
          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-6 mb-6">
            <div className="text-5xl font-bold text-yellow-400 mb-2">
              {mainKPI.value}
            </div>
            <div className="text-gray-300 text-sm mb-4">{mainKPI.label}</div>

            {/* Prix visible immédiatement */}
            <div className="border-t border-yellow-400/20 pt-4 mt-4">
              <div className="text-3xl font-bold text-white mb-1">
                {pricing.price}
              </div>
              <div className="text-yellow-400 text-sm font-medium">
                {pricing.timeline}
              </div>
            </div>
          </div>

          {/* CTA IMMÉDIAT */}
          <div className="space-y-3 mb-6">
            <a
              href="tel:+41791289549"
              className="block w-full bg-yellow-400 text-black font-bold py-5 rounded-xl text-lg active:scale-95 transition-transform shadow-lg shadow-yellow-400/20 flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Appeler pour ce service
            </a>
            <a
              href="/contact"
              className="block w-full border-2 border-yellow-400 text-yellow-400 font-bold py-5 rounded-xl active:scale-95 transition-transform"
            >
              Réserver consultation gratuite
            </a>
          </div>
        </div>
      </section>

      {/* Case Study Compact */}
      <section className="py-8 px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">Résultat client</h2>
          <div className="bg-gray-900/50 rounded-2xl p-6">
            <div className="text-center mb-4">
              <div className="text-gray-400 text-sm">{caseStudy.client}</div>
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-gray-400 text-xs mb-1">Avant</div>
                <div className="text-sm">{caseStudy.before}</div>
              </div>
              <div>
                <div className="text-yellow-400 text-xs mb-1">Après</div>
                <div className="text-yellow-400 font-bold text-sm">{caseStudy.after}</div>
              </div>
            </div>
            <div className="text-center mt-4 text-yellow-400 font-bold">
              {caseStudy.result}
            </div>
          </div>
        </div>
      </section>

      {/* Process Simplifié */}
      <section className="py-8 px-4">
        <div className="max-w-lg mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">Comment on procède</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-yellow-400/5 rounded-xl p-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">1</div>
              <div className="text-sm">{process.step1}</div>
            </div>
            <div className="flex items-center gap-4 bg-yellow-400/5 rounded-xl p-4">
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-sm">2</div>
              <div className="text-sm">{process.step2}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Mobile */}
      <section className="py-8 px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">
              {pricing.price}
            </div>
            <div className="text-gray-300 mb-4">{pricing.timeline}</div>
            <div className="space-y-2">
              {pricing.included.map((item, index) => (
                <div key={index} className="text-yellow-400 text-sm">
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Mobile SIMPLIFIÉ */}
      <section className="py-12 px-4">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{ctaTitle}</h2>
          <p className="text-gray-300 mb-6">{ctaSubtitle}</p>

          {/* Friction Killers */}
          <div className="bg-green-400/5 border border-green-400/20 rounded-xl p-4 mb-6">
            <div className="text-green-400 text-sm space-y-2 font-medium">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Devis gratuit sous 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Délai garanti {pricing.timeline}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Prix fixe {pricing.price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Bottom CTA */}
      <MobileCTABar variant="service" serviceName={title} />
    </div>
  )
}