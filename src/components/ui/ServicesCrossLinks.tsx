'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import IconeOSOM from '@/components/IconeOSOM'

interface Service {
  title: string
  href: string
  description: string
  icon: string
}

interface ServicesCrossLinksProps {
  currentService: string
}

const allServices: Record<string, Service> = {
  'creation-site-web': {
    title: 'Création sites web',
    href: '/services/creation-site-web',
    description: 'Sites web performants et sur-mesure',
    icon: 'monitor'
  },
  'seo-content-marketing': {
    title: 'SEO & content marketing',
    href: '/services/seo-content-marketing',
    description: 'Visibilité et trafic qualifié',
    icon: 'target'
  },
  'tracking-data': {
    title: 'Tracking & data',
    href: '/services/tracking-data',
    description: 'Analytics et performance data-driven',
    icon: 'chart'
  },
  'marketing-automation-crm': {
    title: 'Marketing automation',
    href: '/services/marketing-automation-crm',
    description: 'Automatisation et CRM intelligent',
    icon: 'rocket'
  },
  'programmation-ia': {
    title: 'Programmation & IA',
    href: '/services/programmation-ia',
    description: 'Solutions IA sur-mesure',
    icon: 'lightning'
  }
}

const recommendations: Record<string, string[]> = {
  'creation-site-web': ['seo-content-marketing', 'tracking-data'],
  'seo-content-marketing': ['creation-site-web', 'marketing-automation-crm'],
  'tracking-data': ['seo-content-marketing', 'marketing-automation-crm'],
  'marketing-automation-crm': ['tracking-data', 'programmation-ia'],
  'programmation-ia': ['marketing-automation-crm', 'creation-site-web']
}

export default function ServicesCrossLinks({ currentService }: ServicesCrossLinksProps) {
  const recommendedServices = recommendations[currentService] || []
  const services = recommendedServices.map(key => allServices[key]).filter(Boolean)

  if (services.length === 0) return null

  return (
    <section className="py-16 bg-gradient-to-br from-black via-gray-900 to-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4">
              Services <span className="text-yellow-400 font-bold">complémentaires</span>
            </h2>
            <p className="text-lg text-gray-300">
              Maximisez votre impact avec une approche intégrée
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={service.href}
                  className="block group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-black border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <IconeOSOM
                          type={service.icon as any}
                          size={32}
                          color="yellow"
                          ariaLabel={service.title}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 mb-4">
                          {service.description}
                        </p>
                        <div className="inline-flex items-center text-yellow-400 font-medium">
                          Découvrir ce service
                          <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover effect gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* CTA principal */}
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Voir tous nos services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}