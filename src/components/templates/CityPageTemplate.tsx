'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import AnimatedElement from '@/components/ui/AnimatedElement'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

// Swiss city configuration types
export interface SwissCityData {
  name: string
  canton: string
  region: string // Valais, Vaud, Genève, etc.
  population: number
  economicCenter: boolean
  majorIndustries: string[]
  businessHub: string // "Centre économique du Valais", etc.
  phoneCode: string // +41 27, +41 21, etc.
}

export interface LocalMetrics {
  localClients: number
  averageROI: string
  projectsCompleted: number
  marketShare: string
}

export interface CityPageTemplateProps {
  // City-specific data
  cityData: SwissCityData
  localMetrics: LocalMetrics
  
  // SEO & Content
  metaTitle: string
  metaDescription: string
  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  
  // Local content
  localCaseStudy: {
    clientName: string
    industry: string
    location: string
    challenge: string
    solution: string
    results: {
      metric: string
      before: string
      after: string
      improvement: string
    }[]
  }
  
  // Services adapted for local market
  localServices: Array<{
    title: string
    description: string
    localAdvantage: string
    price: string
    duration: string
  }>
  
  // Local testimonial
  testimonial?: {
    quote: string
    author: string
    company: string
    industry: string
  }
  
  // Contact info
  contactInfo: {
    phone: string
    email: string
    meetingLocation?: string
    responseTime: string
  }
}

export default function CityPageTemplate({
  cityData,
  localMetrics,
  metaTitle,
  metaDescription,
  heroTitle,
  heroSubtitle,
  heroDescription,
  localCaseStudy,
  localServices,
  testimonial,
  contactInfo
}: CityPageTemplateProps) {
  
  return (
    <>
      {/* SEO Head - To be used with next/head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": `osom Agence Marketing Digital ${cityData.name}`,
            "description": metaDescription,
            "url": `https://osom.ch/local/${cityData.name.toLowerCase()}`,
            "telephone": contactInfo.phone,
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "CH",
              "addressRegion": cityData.canton,
              "addressLocality": cityData.name
            },
            "areaServed": {
              "@type": "City",
              "name": cityData.name,
              "containedInPlace": {
                "@type": "AdministrativeArea",
                "name": cityData.canton
              }
            },
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "name": cityData.name
              },
              "geoRadius": "50"
            },
            "priceRange": "1500-15000 CHF",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": localMetrics.localClients.toString()
            }
          })
        }}
      />

      <div className="min-h-screen bg-black">
        {/* Hero Section - Style homepage */}
        <section className="py-20 lg:py-32 relative overflow-hidden">
          {/* Background Pattern Swiss-inspired */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Animated Swiss Alps gradient */}
          <motion.div
            className="absolute inset-0 opacity-10"
            animate={{
              background: [
                "linear-gradient(135deg, #FFDD0020, transparent, #8b5cf620)",
                "linear-gradient(225deg, #06B6D420, transparent, #FFDD0030)", 
                "linear-gradient(135deg, #FFDD0020, transparent, #8b5cf620)"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedElement type="fadeIn" delay={0.2}>
              <div className="text-center mb-16">
                {/* Swiss Local Badge */}
                <div className="flex items-center justify-center mb-6">
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-2 h-2 rounded-full bg-white mr-3"></div>
                  <span className="text-yellow-400 text-sm font-medium tracking-wide">
                    MARKETING DIGITAL {cityData.canton.toUpperCase()}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-light text-white mb-8 tracking-tight leading-tight" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {heroTitle.split(' ').map((word, index) => 
                    word === cityData.name || word === 'osom' ? (
                      <span key={index} className="text-yellow-400 font-bold">
                        {word}{' '}
                      </span>
                    ) : (
                      <span key={index}>{word} </span>
                    )
                  )}
                </h1>
                
                <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-4" style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}>
                  {heroDescription}
                </p>
                
                {/* Local Context */}
                <div className="text-yellow-400 text-lg mb-12">
                  {cityData.businessHub} • {cityData.population.toLocaleString()} habitants
                </div>
              </div>
            </AnimatedElement>

            {/* Local Performance Metrics */}
            <AnimatedElement type="slideUp" delay={0.4}>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
                <motion.div
                  className="backdrop-blur-sm border border-yellow-400/20 rounded-2xl p-6 text-center hover:border-yellow-400/40 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-3xl font-bold text-yellow-400 mb-2">
                    <AnimatedCounter from={0} to={localMetrics.localClients} duration={1.5} />
                  </div>
                  <div className="text-white font-medium mb-1">Clients {cityData.name}</div>
                  <div className="text-gray-400 text-sm">Projets réalisés</div>
                </motion.div>

                <motion.div
                  className="backdrop-blur-sm border border-green-400/20 rounded-2xl p-6 text-center hover:border-green-400/40 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-3xl font-bold text-green-400 mb-2">{localMetrics.averageROI}</div>
                  <div className="text-white font-medium mb-1">ROI Moyen</div>
                  <div className="text-gray-400 text-sm">Clients {cityData.region}</div>
                </motion.div>

                <motion.div
                  className="backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    <AnimatedCounter from={0} to={localMetrics.projectsCompleted} duration={1.8} />
                  </div>
                  <div className="text-white font-medium mb-1">Projets</div>
                  <div className="text-gray-400 text-sm">Livrés à temps</div>
                </motion.div>

                <motion.div
                  className="backdrop-blur-sm border border-purple-400/20 rounded-2xl p-6 text-center hover:border-purple-400/40 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-3xl font-bold text-purple-400 mb-2">{localMetrics.marketShare}</div>
                  <div className="text-white font-medium mb-1">Position</div>
                  <div className="text-gray-400 text-sm">Marché local</div>
                </motion.div>
              </div>
            </AnimatedElement>

            {/* CTA Mobile-optimized */}
            <AnimatedElement type="scale" delay={0.6}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-yellow-400 text-black px-8 py-4 rounded-lg hover:bg-yellow-500 transition-all duration-300 font-bold shadow-lg hover:scale-105"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                >
                  📞 Rendez-vous {cityData.name}
                </Link>
                
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-block border-2 border-yellow-400/60 text-yellow-400 px-8 py-4 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 font-medium backdrop-blur-sm hover:scale-105"
                  style={{fontFamily: 'Cera PRO, Inter, sans-serif'}}
                >
                  {contactInfo.phone} • {contactInfo.responseTime}
                </a>
              </div>
            </AnimatedElement>
          </div>
        </section>

        {/* Local Case Study - Data-driven */}
        <section className="py-24 bg-gradient-to-br from-yellow-400/5 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedElement type="slideUp" delay={0.2}>
              <div className="text-center mb-16">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                  <span className="text-green-400 text-sm font-medium tracking-wide">SUCCÈS CLIENT {cityData.name.toUpperCase()}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
                  Cas d'étude : <span className="text-yellow-400 font-bold">{localCaseStudy.clientName}</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  {localCaseStudy.industry} • {localCaseStudy.location}
                </p>
              </div>
            </AnimatedElement>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Case Study Content */}
              <AnimatedElement type="slideLeft" delay={0.4}>
                <div>
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Défi Initial</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {localCaseStudy.challenge}
                    </p>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Solution osom</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {localCaseStudy.solution}
                    </p>
                  </div>

                  {testimonial && (
                    <div className="bg-gradient-to-r from-yellow-400/10 to-transparent rounded-xl p-6 border-l-4 border-yellow-400">
                      <blockquote className="text-white text-lg font-medium mb-4">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="text-gray-400 text-sm">
                        <strong className="text-yellow-400">{testimonial.author}</strong>, {testimonial.company}
                        <br />
                        {testimonial.industry} • {cityData.name}
                      </div>
                    </div>
                  )}
                </div>
              </AnimatedElement>

              {/* Results Metrics */}
              <AnimatedElement type="slideRight" delay={0.6}>
                <div className="bg-gradient-to-br from-white/5 to-transparent rounded-2xl p-8 border border-yellow-400/30">
                  <h3 className="text-2xl font-bold text-white mb-8 text-center">Résultats Mesurés</h3>
                  
                  <div className="space-y-6">
                    {localCaseStudy.results.map((result, index) => (
                      <motion.div
                        key={index}
                        className="flex justify-between items-center p-4 bg-black/40 rounded-lg"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                      >
                        <div>
                          <div className="text-white font-medium">{result.metric}</div>
                          <div className="text-gray-400 text-sm">Avant: {result.before}</div>
                        </div>
                        
                        <div className="text-right">
                          <div className="text-2xl font-bold text-green-400">{result.after}</div>
                          <div className="text-yellow-400 text-sm font-medium">{result.improvement}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Local Services */}
        <section className="py-32 bg-black relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='m0 0h80v80H0z'/%3E%3Cpath d='m20 20h40v40H20z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedElement type="fadeIn" delay={0.2}>
              <div className="text-center mb-20">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-2 h-2 rounded-full bg-yellow-400 mr-3"></div>
                  <span className="text-yellow-400 text-sm font-medium tracking-wide">SERVICES {cityData.name.toUpperCase()}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-8 leading-tight">
                  Marketing Digital <span className="text-yellow-400 font-bold">Sur-Mesure</span>
                </h2>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Solutions optimisées pour le marché {cityData.region} et les entreprises de {cityData.name}
                </p>
              </div>
            </AnimatedElement>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {localServices.map((service, index) => (
                <AnimatedElement key={index} type="slideUp" delay={index * 0.1}>
                  <motion.div
                    className="backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-8 hover:border-yellow-400/40 transition-all duration-500 group bg-gradient-to-br from-yellow-400/5 to-transparent"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                        <div className="w-12 h-1 bg-yellow-400 rounded-full mb-4"></div>
                      </div>
                      <div className="text-right">
                        <div className="text-yellow-400 font-bold text-lg">{service.price}</div>
                        <div className="text-gray-400 text-sm">{service.duration}</div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="bg-yellow-400/10 rounded-lg p-4 border-l-4 border-yellow-400">
                      <div className="text-yellow-400 font-medium text-sm mb-1">Avantage Local {cityData.name}</div>
                      <div className="text-white text-sm">{service.localAdvantage}</div>
                    </div>
                  </motion.div>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Local CTA */}
        <section className="py-24 bg-gradient-to-r from-yellow-400/10 via-transparent to-yellow-400/5">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedElement type="scale" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-8">
                Prêt à dominer le marché <span className="text-yellow-400 font-bold">{cityData.name}</span> ?
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                Rejoignez les {localMetrics.localClients} entreprises {cityData.region} qui nous font confiance
              </p>

              {/* Contact Options */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="bg-black/60 rounded-xl p-6 border border-yellow-400/30">
                  <div className="text-yellow-400 font-bold text-lg mb-2">Consultation Express</div>
                  <div className="text-gray-300 mb-4">Audit gratuit de votre présence digitale</div>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition-colors font-medium"
                  >
                    📞 {contactInfo.phone}
                  </a>
                </div>

                <div className="bg-black/60 rounded-xl p-6 border border-yellow-400/30">
                  <div className="text-yellow-400 font-bold text-lg mb-2">Rencontre {cityData.name}</div>
                  <div className="text-gray-300 mb-4">Café stratégie dans vos locaux</div>
                  <Link
                    href="/contact"
                    className="inline-block border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black transition-all duration-300"
                  >
                    📅 Planifier
                  </Link>
                </div>
              </div>

              {/* Trust Signals */}
              <div className="flex flex-wrap justify-center gap-8 text-gray-400 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  <span>Réponse en {contactInfo.responseTime}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></div>
                  <span>Expert {cityData.region} depuis 2019</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                  <span>ROI Garanti ou remboursé</span>
                </div>
              </div>
            </AnimatedElement>
          </div>
        </section>
      </div>
    </>
  )
}