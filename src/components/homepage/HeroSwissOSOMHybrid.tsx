'use client'

import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MagneticButton } from '@/components/ui'
import { useIsDesktop } from '@/hooks/useMediaQuery'

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

const HeroSwissOSOMHybrid = ({ dictionary }: HeroSwissOSOMProps) => {
  const isDesktop = useIsDesktop()
  const [focusedService, setFocusedService] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoupeActive, setIsLoupeActive] = useState(false)
  const svgRef = useRef<HTMLDivElement>(null)

  // Loupe settings for desktop FPS effect
  const loupeSize = 180
  const zoomLevel = 2.8

  // Services data - Memoized to prevent dependency changes
  const services = useMemo(() => ({
    'conception': {
      x: 120, y: 250,
      name: 'CONCEPTION',
      subtitle: 'Architecture × UX',
      kpi: '60 pages',
      detail: 'Paroisse Nendaz',
      color: '#FFDD00',
      description: 'Sites complexes pensés pour durer'
    },
    'developpement': {
      x: 180, y: 200,
      name: 'DÉVELOPPEMENT',
      subtitle: 'Next.js × Performance',
      kpi: '< 2s loading',
      detail: 'garanti PageSpeed',
      color: '#FFDD00',
      description: 'Code premium qui ne ralentit jamais'
    },
    'seo': {
      x: 300, y: 240,
      name: 'SEO LOCAL',
      subtitle: 'Positions × Conversions',
      kpi: 'Position #2',
      detail: 'H-Sechement Google',
      color: '#FFDD00',
      description: 'Visibilité locale qui génère des leads'
    },
    'optimisation': {
      x: 350, y: 180,
      name: 'OPTIMISATION',
      subtitle: 'Analytics × A/B Tests',
      kpi: '688 leads',
      detail: 'client PME 6 mois',
      color: '#FFDD00',
      description: 'Amélioration continue data-driven'
    }
  }), [])

  // Mouse movement for desktop FPS loupe effect
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!svgRef.current || !isDesktop) return

    const rect = svgRef.current.getBoundingClientRect()

    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })

    // Detect service hover for FPS targeting
    const tolerance = 25
    let hoveredService = null

    Object.entries(services).forEach(([key, service]) => {
      const serviceX = (service.x / 500) * rect.width
      const serviceY = (service.y / 400) * rect.height
      const distance = Math.sqrt(
        Math.pow(e.clientX - rect.left - serviceX, 2) +
        Math.pow(e.clientY - rect.top - serviceY, 2)
      )

      if (distance < tolerance) {
        hoveredService = key
      }
    })

    setFocusedService(hoveredService)
  }, [isDesktop, services])

  const handleSvgMouseEnter = () => {
    if (isDesktop) {
      setIsLoupeActive(true)
    }
  }

  const handleSvgMouseLeave = () => {
    setIsLoupeActive(false)
    setFocusedService(null)
  }

  useEffect(() => {
    if (isLoupeActive && isDesktop) {
      document.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isLoupeActive, isDesktop, handleMouseMove])

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

            {/* Version unifiée - évite le flash hydratation */}
            <div className="space-y-0 font-sans text-white">
              <div className="text-4xl md:text-6xl lg:text-8xl font-bold leading-none">
                NOUS
              </div>
              <div className="text-4xl md:text-6xl lg:text-8xl font-bold leading-none text-yellow-400">
                TRAVAILLONS
              </div>
              <div className="text-xl md:text-3xl lg:text-4xl font-light mt-4 lg:mt-8 leading-tight text-gray-300">
                dans l'ombre
              </div>
              <div className="text-4xl md:text-6xl lg:text-8xl font-bold text-yellow-400 leading-none">
                POUR VOUS
              </div>
              <div className="text-4xl md:text-6xl lg:text-8xl font-bold leading-none">
                FAIRE BRILLER.
              </div>
            </div>

            {/* CTA Buttons - Mobile priorité contact */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 lg:mt-12 mb-8 lg:mb-12">
              <MagneticButton
                href="/contact"
                variant="primary"
                className="w-full sm:w-auto text-lg px-8 py-4 min-h-[44px] bg-yellow-400 text-black hover:bg-yellow-500"
              >
                {dictionary.hero.cta_primary}
              </MagneticButton>

              {/* Desktop: CTA secondaire visible */}
              <div className="hidden lg:block">
                <MagneticButton
                  href="/realisations"
                  variant="secondary"
                  className="w-full sm:w-auto text-lg px-8 py-4 min-h-[44px] border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
                >
                  {dictionary.hero.cta_secondary}
                </MagneticButton>
              </div>
            </div>

            {/* Métriques responsive unifiées */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 max-w-2xl">
              <div className="text-center lg:text-left">
                <div className="text-xs text-gray-500 mb-1 tracking-wider">CONVERSION</div>
                <div className="text-2xl lg:text-2xl font-bold text-yellow-400">25% CTR</div>
                <div className="text-xs text-gray-400 lg:hidden">vs 2-3% industrie</div>
              </div>
              <div className="hidden lg:block">
                <div className="text-xs text-gray-500 mb-1 tracking-wider">PRÉCISION</div>
                <div className="text-2xl font-bold text-yellow-400">99.7%</div>
              </div>
              <div className="hidden lg:block">
                <div className="text-xs text-gray-500 mb-1 tracking-wider">VITESSE</div>
                <div className="text-2xl font-bold text-yellow-400">&lt;2s</div>
              </div>
            </div>
          </div>

          {/* Right: Visualization - Responsive */}
          <div className="relative">
            {/* Mobile: Version statique simple */}
            <div className="lg:hidden relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20">
              <svg viewBox="0 0 500 400" className="w-full h-full">
                <defs>
                  <linearGradient id="mountain-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#374151', stopOpacity: 0.9}} />
                    <stop offset="100%" style={{stopColor: '#111827', stopOpacity: 0.8}} />
                  </linearGradient>
                </defs>
                <path d="M0,280 L100,200 L180,240 L250,180 L320,220 L420,160 L500,200 L500,400 L0,400 Z" fill="url(#mountain-mobile)" opacity="0.8"/>
                <g transform="translate(220, 120)">
                  <rect x="0" y="40" width="20" height="60" fill="#FFDD00" rx="2" />
                  <circle cx="10" cy="15" r="10" fill="#FFDD00" stroke="#000" strokeWidth="2" />
                  <circle cx="10" cy="15" r="4" fill="#000" />
                </g>
                <text x="250" y="360" fill="#9ca3af" fontSize="10" fontFamily="Inter, sans-serif" textAnchor="middle" opacity="0.8">
                  Expertise digitale OSOM
                </text>
              </svg>
            </div>

            {/* Desktop: Version interactive avec loupe FPS */}
            <div className="hidden lg:block">
              <div
                ref={svgRef}
                className="relative w-full h-96 rounded-2xl overflow-visible"
                onMouseEnter={handleSvgMouseEnter}
                onMouseLeave={handleSvgMouseLeave}
                style={{
                  cursor: isDesktop && isLoupeActive ? 'none' : 'default'
                }}
              >
                {/* Alpine SVG avec couleurs OSOM */}
                <svg viewBox="0 0 500 400" className="w-full h-full">
                  <defs>
                    {/* Gradients OSOM */}
                    <linearGradient id="mountain-osom" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#374151', stopOpacity: 0.9}} />
                      <stop offset="50%" style={{stopColor: '#1f2937', stopOpacity: 0.7}} />
                      <stop offset="100%" style={{stopColor: '#111827', stopOpacity: 0.8}} />
                    </linearGradient>

                    <radialGradient id="digital-beacon-osom" cx="50%" cy="30%">
                      <stop offset="0%" style={{stopColor: '#FFDD00', stopOpacity: 1}} />
                      <stop offset="50%" style={{stopColor: '#f59e0b', stopOpacity: 0.8}} />
                      <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 0.4}} />
                    </radialGradient>

                    <linearGradient id="connection-flow-osom" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" style={{stopColor: '#FFDD00', stopOpacity: 0.9}} />
                      <stop offset="50%" style={{stopColor: '#f59e0b', stopOpacity: 0.7}} />
                      <stop offset="100%" style={{stopColor: '#FFDD00', stopOpacity: 0.5}} />
                    </linearGradient>

                    <filter id="service-glow-osom">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Alpine Background */}
                  <path
                    d="M0,280 L100,200 L180,240 L250,180 L320,220 L420,160 L500,200 L500,400 L0,400 Z"
                    fill="url(#mountain-osom)"
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

                  {/* Central Digital Beacon OSOM */}
                  <g transform="translate(220, 120)">
                    <rect x="0" y="40" width="20" height="60" fill="url(#digital-beacon-osom)" rx="2" />
                    <rect x="-5" y="30" width="30" height="15" fill="#FFDD00" rx="4" />

                    {/* Logo OSOM au sommet */}
                    <g transform="translate(10, 15)">
                      <circle cx="0" cy="0" r="10" fill="#FFDD00" stroke="#000" strokeWidth="2" />
                      <circle cx="0" cy="0" r="4" fill="#000" />
                    </g>

                    {/* Beacon Pulse */}
                    <circle cx="10" cy="25" r="5" fill="#FFDD00" opacity="0.6">
                      <animate attributeName="r" values="5;15;5" dur="3s" repeatCount="indefinite"/>
                      <animate attributeName="opacity" values="0.6;0.1;0.6" dur="3s" repeatCount="indefinite"/>
                    </circle>

                    {/* Rotating Light Beams */}
                    <g opacity="0.7">
                      <path d="M10,25 L-40,5 L-35,0 L10,20 Z" fill="url(#digital-beacon-osom)">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="0 10 25; 360 10 25"
                          dur="15s"
                          repeatCount="indefinite"
                        />
                      </path>
                      <path d="M10,25 L60,5 L55,0 L10,20 Z" fill="url(#digital-beacon-osom)" opacity="0.8">
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="90 10 25; 450 10 25"
                          dur="15s"
                          repeatCount="indefinite"
                        />
                      </path>
                    </g>
                  </g>

                  {/* Data Flow Connections */}
                  <g opacity="0.8">
                    {Object.entries(services).map(([key, service]) => (
                      <g key={key}>
                        <path
                          d={`M230,145 Q${service.x-20},${service.y-30} ${service.x},${service.y}`}
                          fill="none"
                          stroke="url(#connection-flow-osom)"
                          strokeWidth="3"
                          opacity={focusedService === key ? "1" : "0.6"}
                        >
                          <animate
                            attributeName="stroke-dasharray"
                            values="0,100;50,100;100,100"
                            dur="4s"
                            repeatCount="indefinite"
                          />
                        </path>

                        {/* Data Particles */}
                        <circle r="2" fill="#FFDD00">
                          <animateMotion dur="3s" repeatCount="indefinite">
                            <path d={`M230,145 Q${service.x-20},${service.y-30} ${service.x},${service.y}`}/>
                          </animateMotion>
                          <animate attributeName="opacity" values="0;1;0" dur="3s" repeatCount="indefinite"/>
                        </circle>
                      </g>
                    ))}
                  </g>

                  {/* Service Nodes */}
                  {Object.entries(services).map(([key, service]) => (
                    <g key={key}>
                      {/* Glow effect */}
                      {focusedService === key && (
                        <circle
                          cx={service.x}
                          cy={service.y}
                          r="20"
                          fill={service.color}
                          opacity="0.2"
                          filter="url(#service-glow-osom)"
                        >
                          <animate attributeName="r" values="20;25;20" dur="2s" repeatCount="indefinite"/>
                        </circle>
                      )}

                      {/* Main Service Node */}
                      <circle
                        cx={service.x}
                        cy={service.y}
                        r="8"
                        fill={service.color}
                        stroke={focusedService === key ? "#ffffff" : service.color}
                        strokeWidth="2"
                        style={{
                          filter: focusedService === key ? 'brightness(1.3)' : 'none',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        <animate
                          attributeName="opacity"
                          values="0.7;1;0.7"
                          dur="3s"
                          repeatCount="indefinite"
                        />
                      </circle>

                      {/* Service Label */}
                      <text
                        x={service.x}
                        y={service.y + 25}
                        fill={service.color}
                        fontSize="10"
                        fontFamily="Inter, sans-serif"
                        textAnchor="middle"
                        fontWeight="700"
                        style={{
                          filter: focusedService === key ? 'brightness(1.3)' : 'none'
                        }}
                      >
                        {service.name}
                      </text>

                      {/* Service Subtitle */}
                      <text
                        x={service.x}
                        y={service.y + 37}
                        fill={service.color}
                        fontSize="7"
                        fontFamily="Inter, sans-serif"
                        textAnchor="middle"
                        opacity="0.8"
                      >
                        {service.subtitle}
                      </text>
                    </g>
                  ))}

                  {/* Caption */}
                  <text x="250" y="385" fill="#9ca3af" fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle" opacity="0.8">
                    Écosystème digital intégré guidant vos prospects vers votre expertise
                  </text>
                </svg>

                {/* 🎮 LOUPE FPS EFFET - Desktop uniquement */}
                <AnimatePresence>
                  {isLoupeActive && isDesktop && (
                    <motion.div
                      className="fixed pointer-events-none z-50"
                      style={{
                        left: (svgRef.current?.getBoundingClientRect().left || 0) + mousePosition.x - loupeSize / 2,
                        top: (svgRef.current?.getBoundingClientRect().top || 0) + mousePosition.y - loupeSize / 2,
                        width: loupeSize,
                        height: loupeSize,
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 0.95, scale: 1 }}
                      exit={{ opacity: 0, scale: 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      {/* Glass Effect avec couleurs OSOM */}
                      <div
                        className="absolute inset-0 rounded-full overflow-hidden"
                        style={{
                          background: 'radial-gradient(circle, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0.6) 100%)',
                          backdropFilter: 'blur(0.5px)',
                          border: '3px solid rgba(255, 221, 0, 0.8)',
                          boxShadow: `
                            0 0 20px rgba(255, 221, 0, 0.4),
                            inset 0 0 20px rgba(255, 255, 255, 0.1)
                          `
                        }}
                      >
                        {/* Magnified SVG Content - FPS ZOOM */}
                        <svg
                          viewBox={`${(mousePosition.x / (svgRef.current?.offsetWidth || 1)) * 500 - 60} ${(mousePosition.y / (svgRef.current?.offsetHeight || 1)) * 400 - 48} 120 96`}
                          className="w-full h-full"
                          style={{
                            filter: 'brightness(1.4) contrast(1.3) saturate(1.2)',
                            transform: `scale(${zoomLevel})`,
                            transformOrigin: 'center'
                          }}
                        >
                          <defs>
                            <linearGradient id="mountain-zoom-osom" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" style={{stopColor: '#374151', stopOpacity: 0.9}} />
                              <stop offset="50%" style={{stopColor: '#1f2937', stopOpacity: 0.7}} />
                              <stop offset="100%" style={{stopColor: '#111827', stopOpacity: 0.8}} />
                            </linearGradient>

                            <radialGradient id="beacon-zoom-osom" cx="50%" cy="30%">
                              <stop offset="0%" style={{stopColor: '#FFDD00', stopOpacity: 1}} />
                              <stop offset="50%" style={{stopColor: '#f59e0b', stopOpacity: 0.8}} />
                              <stop offset="100%" style={{stopColor: '#d97706', stopOpacity: 0.4}} />
                            </radialGradient>

                            <linearGradient id="flow-zoom-osom" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" style={{stopColor: '#FFDD00', stopOpacity: 0.9}} />
                              <stop offset="50%" style={{stopColor: '#f59e0b', stopOpacity: 0.7}} />
                              <stop offset="100%" style={{stopColor: '#FFDD00', stopOpacity: 0.5}} />
                            </linearGradient>
                          </defs>

                          <path d="M0,280 L100,200 L180,240 L250,180 L320,220 L420,160 L500,200 L500,400 L0,400 Z" fill="url(#mountain-zoom-osom)" opacity="0.8"/>

                          <g transform="translate(220, 120)">
                            <rect x="0" y="40" width="20" height="60" fill="url(#beacon-zoom-osom)" rx="2" />
                            <rect x="-5" y="30" width="30" height="15" fill="#FFDD00" rx="4" />
                            <g transform="translate(10, 15)">
                              <circle cx="0" cy="0" r="10" fill="#FFDD00" stroke="#000" strokeWidth="2" />
                              <circle cx="0" cy="0" r="4" fill="#000" />
                            </g>
                          </g>

                          {Object.entries(services).map(([key, service]) => (
                            <g key={`zoom-${key}`}>
                              <path
                                d={`M230,145 Q${service.x-20},${service.y-30} ${service.x},${service.y}`}
                                fill="none"
                                stroke="url(#flow-zoom-osom)"
                                strokeWidth="4"
                              />
                              <circle cx={service.x} cy={service.y} r="10" fill={service.color} stroke="#ffffff" strokeWidth="2"/>
                              <text x={service.x} y={service.y + 28} fill={service.color} fontSize="12" fontFamily="Inter, sans-serif" textAnchor="middle" fontWeight="700">
                                {service.name}
                              </text>
                              <text x={service.x} y={service.y + 42} fill={service.color} fontSize="8" fontFamily="Inter, sans-serif" textAnchor="middle">
                                {service.subtitle}
                              </text>
                            </g>
                          ))}
                        </svg>
                      </div>

                      {/* Glass Reflection */}
                      <div
                        className="absolute top-2 left-2 right-8 bottom-8 rounded-full"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 30%, transparent 60%)',
                          pointerEvents: 'none'
                        }}
                      />

                      {/* Crosshair OSOM - FPS Style */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-4 h-px bg-yellow-400 opacity-80"></div>
                        <div className="absolute w-px h-4 bg-yellow-400 opacity-80"></div>
                        <div className="absolute w-1 h-1 bg-yellow-400 rounded-full opacity-60"></div>
                      </div>

                      {/* Service Info dans la loupe */}
                      {focusedService && (
                        <motion.div
                          className="absolute bottom-2 left-2 right-2 bg-black/90 backdrop-blur-sm rounded-lg p-2 text-center"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="text-yellow-400 font-bold text-xs mb-1">
                            {services[focusedService as keyof typeof services].name}
                          </div>
                          <div className="text-yellow-400 font-bold text-sm">
                            {services[focusedService as keyof typeof services].kpi}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {services[focusedService as keyof typeof services].detail}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Service Focus Tooltip */}
                <AnimatePresence>
                  {focusedService && isDesktop && !isLoupeActive && (
                    <motion.div
                      className="fixed pointer-events-none z-40 bg-black/95 backdrop-blur-md rounded-xl border border-yellow-400/50 p-4 shadow-2xl"
                      style={{
                        left: (svgRef.current?.getBoundingClientRect().left || 0) + mousePosition.x + 30,
                        top: (svgRef.current?.getBoundingClientRect().top || 0) + mousePosition.y - 80,
                        maxWidth: '280px'
                      }}
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="text-yellow-400 font-bold text-lg mb-2">
                        {services[focusedService as keyof typeof services].name}
                      </div>
                      <div className="text-white text-sm mb-3">
                        {services[focusedService as keyof typeof services].description}
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-yellow-400 font-bold text-xl">
                            {services[focusedService as keyof typeof services].kpi}
                          </div>
                          <div className="text-gray-400 text-xs">
                            {services[focusedService as keyof typeof services].detail}
                          </div>
                        </div>
                        <div
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: services[focusedService as keyof typeof services].color }}
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSwissOSOMHybrid