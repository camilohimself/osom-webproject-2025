'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface DiversifiedCTAProps {
  variant: 'urgency' | 'scarcity' | 'benefit' | 'social' | 'premium' | 'consultation' | 'standard'
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

const ctaVariants = {
  urgency: {
    text: "Consultation cette semaine",
    subtext: "Places limitées septembre",
    style: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 text-white",
    icon: "⏰"
  },
  scarcity: {
    text: "3 places restantes",
    subtext: "Dernières disponibilités",
    style: "bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-400 hover:to-yellow-400 text-black",
    icon: "🔥"
  },
  benefit: {
    text: "Audit gratuit + plan action",
    subtext: "Valeur 750 CHF offerte",
    style: "bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white",
    icon: "🎁"
  },
  social: {
    text: "Rejoindre 200+ clients",
    subtext: "PME valaisannes satisfaites",
    style: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white",
    icon: "🤝"
  },
  premium: {
    text: "Service exclusif",
    subtext: "Approche sur-mesure",
    style: "bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white border border-purple-400",
    icon: "⭐"
  },
  consultation: {
    text: "Consultation gratuite 30 min",
    subtext: "Sans engagement",
    style: "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black",
    icon: "💬"
  },
  standard: {
    text: "Démarrer mon projet",
    subtext: "Process transparent",
    style: "bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-300 hover:to-yellow-400 text-black",
    icon: "🚀"
  }
}

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg"
}

export default function DiversifiedCTA({
  variant,
  className = "",
  size = "md"
}: DiversifiedCTAProps) {
  const cta = ctaVariants[variant]

  return (
    <motion.div
      whileHover={{
        scale: 1.02,
        boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
      }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        href="/contact"
        className={`
          inline-flex flex-col items-center justify-center
          ${sizeClasses[size]}
          ${cta.style}
          rounded-xl font-semibold shadow-lg
          transition-all duration-300
          group relative overflow-hidden
          ${className}
        `}
      >
        <div className="flex items-center space-x-2">
          <span className="text-lg">{cta.icon}</span>
          <span>{cta.text}</span>
        </div>
        {cta.subtext && (
          <span className="text-xs opacity-90 mt-1">
            {cta.subtext}
          </span>
        )}

        {/* Hover effect gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </Link>
    </motion.div>
  )
}

// Hook pour rotation des CTAs par page
export function useCTAVariant(pageName: string): DiversifiedCTAProps['variant'] {
  const variants: Record<string, DiversifiedCTAProps['variant']> = {
    'homepage': 'urgency',
    'services': 'benefit',
    'creation-site-web': 'scarcity',
    'seo-content-marketing': 'consultation',
    'programmation-ia': 'premium',
    'marketing-automation-crm': 'social',
    'tracking-data': 'benefit',
    'agence': 'social',
    'contact': 'standard',
    'blog': 'consultation',
    'realisations': 'scarcity'
  }

  return variants[pageName] || 'standard'
}