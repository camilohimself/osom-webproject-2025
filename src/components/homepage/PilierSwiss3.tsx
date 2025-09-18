// PERFORMANCE OPTIMIZED VERSION - All client-side logic removed
import GaugeChart from '@/components/ui/GaugeChart'

const PilierSwiss3 = () => {
  const modules = [
    { id: 1, title: "CORE WEB VITALS", metric: "95+", unit: "score", status: "optimal" },
    { id: 2, title: "LOADING TIME", metric: "<2", unit: "sec", status: "fast" },
    { id: 3, title: "UPTIME", metric: "99.9", unit: "%", status: "stable" },
    { id: 4, title: "SECURITY", metric: "A+", unit: "grade", status: "secure" }
  ]

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 gap-1 h-full max-w-7xl mx-auto">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="border-l border-green-400"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 gap-1 max-w-7xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="border-t border-green-400"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="mb-16 flex items-center justify-between">
          <div>
            <div className="w-16 h-1 bg-green-400 mb-6"></div>
            <div className="text-sm tracking-wider text-gray-400 font-light font-mono">
              PILIER #3 — TECH SUPÉRIEURE
            </div>
          </div>
          <div className="text-xs text-green-400 tracking-wider font-mono">
            BUILD: 100% • STATUS: ACTIVE • ENV: PROD
          </div>
        </div>

        <div className="text-center mb-20">
          <div>
            <div className="space-y-4 font-sans text-white mb-12">
              <div className="text-3xl md:text-4xl font-light text-gray-400">
                VOTRE IMAGE EN LIGNE SE TRANSFORME EN
              </div>
              <div className="text-8xl md:text-9xl font-black text-green-400 leading-none">
                ARCHITECTURE
              </div>
              <div className="text-8xl md:text-9xl font-black leading-none">
                DIGITALE
              </div>
              <div className="text-2xl md:text-3xl font-light text-gray-400 mt-8">
                Performance • Scalabilité • Fiabilité
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {modules.map((module) => (
            <div
              key={module.id}
              className="bg-green-400/5 border border-green-400/30 p-6 relative hover:bg-green-400/10 transition-colors duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <div className="text-xs text-green-400 font-mono">{module.status.toUpperCase()}</div>
              </div>

              <div className="text-xs text-gray-500 mb-2 tracking-wider font-mono">
                {module.title}
              </div>

              <div className="text-4xl font-black text-green-400 leading-none mb-1 font-mono">
                {module.metric}
                <span className="text-lg text-gray-400">{module.unit}</span>
              </div>

              <div className="w-full h-1 bg-gray-800 mt-4">
                <div className="h-full bg-green-400 w-full" />
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <GaugeChart
              title="PERFORMANCE STACK"
              subtitle="Next.js × Claude IA vs Solutions Standard"
              primaryValue={1.8}
              secondaryValue={6.5}
              primaryLabel="OSOM STACK"
              secondaryLabel="WORDPRESS/PHP"
              unit="s"
              maxValue={10}
              primaryColor="#10B981"
              secondaryColor="#6B7280"
              backgroundColor="transparent"
              className="border-0"
              animate={false}
            />
          </div>

          <div>
            <div className="space-y-6">
              <div className="text-2xl font-bold text-white mb-6">STACK TECHNIQUE</div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-green-400/30 bg-green-400/5">
                  <div>
                    <div className="text-green-400 font-bold">Next.js 14</div>
                    <div className="text-xs text-gray-400 font-mono">React Server Components</div>
                  </div>
                  <div className="text-green-400 font-mono">v14.2.1</div>
                </div>

                <div className="flex items-center justify-between p-4 border border-green-400/30 bg-green-400/5">
                  <div>
                    <div className="text-green-400 font-bold">TypeScript</div>
                    <div className="text-xs text-gray-400 font-mono">Type Safety + Performance</div>
                  </div>
                  <div className="text-green-400 font-mono">v5.3</div>
                </div>

                <div className="flex items-center justify-between p-4 border border-green-400/30 bg-green-400/5">
                  <div>
                    <div className="text-green-400 font-bold">Claude IA</div>
                    <div className="text-xs text-gray-400 font-mono">Content Generation + Analysis</div>
                  </div>
                  <div className="text-green-400 font-mono">API v3</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="text-3xl font-light text-white italic mb-6">
              "L'art de ne jamais faire attendre"
            </div>
            <div className="w-24 h-px bg-green-400 mx-auto mb-6"></div>
            <div className="text-sm text-gray-400 font-mono">
              {"// Code élégant, performance brutale, évolutivité infinie"}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PilierSwiss3