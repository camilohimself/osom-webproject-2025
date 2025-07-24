import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import InternalProjectBrief from '@/components/internal/InternalProjectBrief'

// Protection dev-only
const isDevelopment = process.env.NODE_ENV === 'development'

export const metadata: Metadata = {
  title: 'OSOM - Brief Projet Interne',
  description: 'Questionnaire interne pour briefing projets clients',
  robots: 'noindex, nofollow' // Jamais indexé
}

export default function InternalProjectBriefPage() {
  // Bloque l'accès en production
  if (!isDevelopment) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Interne */}
      <div className="bg-gradient-to-r from-yellow-400/10 to-cyan-400/10 border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-yellow-400">
                🔧 OSOM - BRIEF INTERNE
              </h1>
              <p className="text-gray-300 text-sm mt-1">
                Questionnaire structuré pour briefing projets clients
              </p>
            </div>
            <div className="bg-red-500/20 border border-red-500/50 rounded-lg px-3 py-1">
              <span className="text-red-400 font-semibold text-xs">
                DEV ONLY - LOCAL
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Composant Principal */}
      <InternalProjectBrief />
    </div>
  )
}