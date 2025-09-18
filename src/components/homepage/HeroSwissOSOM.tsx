// PERFORMANCE OPTIMIZED VERSION - All client-side interactions removed
import { MagneticButton } from '@/components/ui'

interface HeroSwissOSOMProps {
  dictionary: {
    hero: {
      cta_primary: string
      cta_secondary: string
      trust_indicators: {
        conversions: string
        engagement: string
        roi: string
      }
    }
  }
}

const HeroSwissOSOM = ({ dictionary }: HeroSwissOSOMProps) => {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Grille suisse subtile */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full max-w-7xl mx-auto">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="border-l border-yellow-400"></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Typographie Suisse */}
          <div>
            {/* Label Swiss Style */}
            <div className="mb-12">
              <div className="w-16 h-1 bg-yellow-400 mb-8"></div>
              <div className="text-sm tracking-wider text-gray-400 font-light">
                OSOM® VALAIS — 46°13'39.6"N 7°21'33.0"E
              </div>
            </div>

            {/* Typographie principale - Style Helvetica/Swiss */}
            <div className="space-y-0 font-sans text-white">
              <div className="text-6xl md:text-8xl font-bold leading-none">
                NOUS
              </div>

              <div className="text-6xl md:text-8xl font-bold leading-none text-yellow-400">
                TRAVAILLONS
              </div>

              <div className="text-3xl md:text-4xl font-light mt-8 leading-tight text-gray-300">
                dans l'ombre
              </div>

              <div className="text-6xl md:text-8xl font-bold text-yellow-400 leading-none">
                POUR VOUS
              </div>

              <div className="text-6xl md:text-8xl font-bold leading-none">
                FAIRE BRILLER.
              </div>
            </div>

            {/* CTA Buttons Swiss Style */}
            <div className="flex flex-col sm:flex-row gap-4 mt-12 mb-12">
              <MagneticButton
                href="/contact"
                variant="primary"
                className="w-full sm:w-auto text-lg px-8 py-4 min-h-[44px] bg-yellow-400 text-black hover:bg-yellow-500"
              >
                {dictionary.hero.cta_primary}
              </MagneticButton>

              <MagneticButton
                href="/realisations"
                variant="secondary"
                className="w-full sm:w-auto text-lg px-8 py-4 min-h-[44px] border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                {dictionary.hero.cta_secondary}
              </MagneticButton>
            </div>

            {/* Métriques Swiss Style */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl">
              <div>
                <div className="text-xs text-gray-500 mb-1 tracking-wider">PRÉCISION</div>
                <div className="text-2xl font-bold text-yellow-400">99.7%</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1 tracking-wider">CONVERSION</div>
                <div className="text-2xl font-bold text-yellow-400">25%</div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-1 tracking-wider">VITESSE</div>
                <div className="text-2xl font-bold text-yellow-400">&lt;2s</div>
              </div>
            </div>
          </div>

          {/* Right: Simplified Alpine Visualization */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20">

              {/* Simple Alpine Background */}
              <svg viewBox="0 0 500 400" className="w-full h-full">
                <defs>
                  <linearGradient id="mountain-static" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#374151', stopOpacity: 0.9}} />
                    <stop offset="50%" style={{stopColor: '#1f2937', stopOpacity: 0.7}} />
                    <stop offset="100%" style={{stopColor: '#111827', stopOpacity: 0.8}} />
                  </linearGradient>

                  <radialGradient id="beacon-static" cx="50%" cy="30%">
                    <stop offset="0%" style={{stopColor: '#FFDD00', stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: '#f59e0b', stopOpacity: 0.8}} />
                    <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 0.4}} />
                  </radialGradient>
                </defs>

                {/* Alpine Background */}
                <path
                  d="M0,280 L100,200 L180,240 L250,180 L320,220 L420,160 L500,200 L500,400 L0,400 Z"
                  fill="url(#mountain-static)"
                  opacity="0.8"
                />

                {/* Secondary peaks */}
                <path
                  d="M50,250 L120,190 L200,230 L270,170 L350,210 L450,150 L500,180"
                  fill="none"
                  stroke="#374151"
                  strokeWidth="2"
                  opacity="0.6"
                />

                {/* Central Digital Beacon Static */}
                <g transform="translate(220, 120)">
                  <rect x="0" y="40" width="20" height="60" fill="url(#beacon-static)" rx="2" />
                  <rect x="-5" y="30" width="30" height="15" fill="#FFDD00" rx="4" />

                  {/* Logo OSOM au sommet */}
                  <g transform="translate(10, 15)">
                    <circle cx="0" cy="0" r="10" fill="#FFDD00" stroke="#000" strokeWidth="2" />
                    <circle cx="0" cy="0" r="4" fill="#000" />
                  </g>

                  {/* Static beacon glow */}
                  <circle cx="10" cy="25" r="8" fill="#FFDD00" opacity="0.4" />
                </g>

                {/* Static Service Nodes */}
                <g>
                  {/* Marketing */}
                  <circle cx="120" cy="250" r="8" fill="#FFDD00" stroke="#ffffff" strokeWidth="2" opacity="0.9" />
                  <text x="120" y="275" fill="#FFDD00" fontSize="10" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="700">
                    MARKETING IA
                  </text>

                  {/* Data */}
                  <circle cx="180" cy="200" r="8" fill="#FFDD00" stroke="#ffffff" strokeWidth="2" opacity="0.9" />
                  <text x="180" y="225" fill="#FFDD00" fontSize="10" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="700">
                    DATA SCIENCE
                  </text>

                  {/* Dev */}
                  <circle cx="300" cy="240" r="8" fill="#FFDD00" stroke="#ffffff" strokeWidth="2" opacity="0.9" />
                  <text x="300" y="265" fill="#FFDD00" fontSize="10" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="700">
                    DEV WEB
                  </text>

                  {/* Automation */}
                  <circle cx="350" cy="180" r="8" fill="#FFDD00" stroke="#ffffff" strokeWidth="2" opacity="0.9" />
                  <text x="350" y="205" fill="#FFDD00" fontSize="10" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="700">
                    AUTOMATION
                  </text>
                </g>

                {/* Static Connection Lines */}
                <g opacity="0.6">
                  <path d="M230,145 Q100,220 120,250" fill="none" stroke="#FFDD00" strokeWidth="2" opacity="0.7" />
                  <path d="M230,145 Q180,170 180,200" fill="none" stroke="#FFDD00" strokeWidth="2" opacity="0.7" />
                  <path d="M230,145 Q280,210 300,240" fill="none" stroke="#FFDD00" strokeWidth="2" opacity="0.7" />
                  <path d="M230,145 Q330,150 350,180" fill="none" stroke="#FFDD00" strokeWidth="2" opacity="0.7" />
                </g>

                {/* Caption */}
                <text x="250" y="385" fill="#9ca3af" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle" opacity="0.8">
                  Écosystème digital intégré guidant vos prospects vers votre expertise
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSwissOSOM