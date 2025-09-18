'use client'

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
    <div className="lg:hidden min-h-screen bg-black text-white">
      {/* Hero Mobile Simplifié */}
      <section className="pt-20 pb-12 px-4">
        <div className="max-w-lg mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-gray-300 mb-8">{subtitle}</p>

          {/* KPI Principal */}
          <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-2xl p-6 mb-8">
            <div className="text-4xl font-bold text-yellow-400 mb-2">
              {mainKPI.value}
            </div>
            <div className="text-gray-300 text-sm">{mainKPI.label}</div>
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
                <div className="text-gray-400 text-xs mb-1">AVANT</div>
                <div className="text-sm">{caseStudy.before}</div>
              </div>
              <div>
                <div className="text-yellow-400 text-xs mb-1">APRÈS</div>
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

      {/* CTA Mobile */}
      <section className="py-12 px-4">
        <div className="max-w-lg mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{ctaTitle}</h2>
          <p className="text-gray-300 mb-8">{ctaSubtitle}</p>

          <div className="space-y-4">
            <button className="w-full bg-yellow-400 text-black font-bold py-4 px-8 rounded-xl hover:bg-yellow-500 transition-colors">
              Démarrer mon projet
            </button>
            <div className="text-yellow-400 text-sm">
              ✓ Devis gratuit • ✓ Délai garanti
            </div>
          </div>

          {/* Contact rapide */}
          <div className="mt-8 p-4 bg-gray-900/30 rounded-xl">
            <div className="text-sm text-gray-400 mb-2">Ou appelez directement</div>
            <a href="tel:+41791289549" className="text-yellow-400 font-bold text-lg">
              079 128 95 49
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}