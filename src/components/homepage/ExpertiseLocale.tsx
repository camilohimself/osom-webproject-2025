'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const expertises = [
  {
    region: 'Valais',
    href: '/local/valais',
    focus: 'Tourisme & Artisanat',
    description: 'Sites web optimisés pour le marché alpin',
    projects: '47 clients actifs',
    specialties: ['E-commerce Vins', 'Hôtellerie', 'PME Locales'],
    gradient: 'from-emerald-600 to-emerald-800',
    icon: '🏔️'
  },
  {
    region: 'Lausanne',
    href: '/local/lausanne',
    focus: 'Tech & Startups',
    description: 'Écosystème EPFL et scale-up Léman',
    projects: '18 projets tech',
    specialties: ['SaaS B2B', 'Fintech', 'Biotech'],
    gradient: 'from-blue-600 to-blue-800',
    icon: '🚀'
  },
  {
    region: 'Genève',
    href: '/local/geneve',
    focus: 'Premium & International',
    description: 'Services luxury et organisations internationales',
    projects: '15 clients premium',
    specialties: ['Luxury Digital', 'ONG', 'Wealth Management'],
    gradient: 'from-purple-600 to-purple-800',
    icon: '💎'
  }
]

export default function ExpertiseLocale() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23FFDD00' fill-opacity='0.1'%3E%3Cpath d='M0 0h60v60H0z'/%3E%3Cpath d='M15 15h30v30H15z' fill='%23000' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
            <div className="w-2 h-2 rounded-full bg-white mr-3"></div>
            <span className="text-yellow-400 text-sm font-medium tracking-wide">
              SUISSE ROMANDE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Nos <span className="text-yellow-400 font-bold">Expertises</span> par Région
          </h2>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Chaque région a ses spécificités business. Nous maîtrisons les codes locaux
            pour maximiser votre impact digital.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {expertises.map((expertise, index) => (
            <motion.div
              key={expertise.region}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={expertise.href}
                className="block group h-full"
              >
                <div className={`
                  h-full p-8 rounded-2xl bg-gradient-to-br ${expertise.gradient}
                  hover:scale-105 transition-all duration-300
                  border border-white/10 hover:border-yellow-400/30
                  relative overflow-hidden
                `}>
                  {/* Icon & Region */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-4xl">{expertise.icon}</span>
                    <div className="text-right">
                      <h3 className="text-2xl font-bold text-white mb-1">
                        {expertise.region}
                      </h3>
                      <p className="text-sm text-white/70">
                        {expertise.projects}
                      </p>
                    </div>
                  </div>

                  {/* Focus */}
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-yellow-400 mb-2">
                      {expertise.focus}
                    </h4>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {expertise.description}
                    </p>
                  </div>

                  {/* Specialties */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {expertise.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-white/20 text-white rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center text-yellow-400 font-medium group-hover:text-yellow-300 transition-colors">
                    <span>Voir nos réalisations</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/5 to-yellow-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* See all regions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-4">
            Nous intervenons aussi à Fribourg et Neuchâtel
          </p>
          <Link
            href="/services"
            className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors font-medium"
          >
            Découvrir tous nos services
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}