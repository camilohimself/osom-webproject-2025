'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Breadcrumb() {
  const pathname = usePathname()

  // Ne pas afficher sur la homepage
  if (pathname === '/') return null

  // Construire le breadcrumb
  const segments = pathname.split('/').filter(Boolean)

  // Mapping des segments vers des labels lisibles
  const labelMap: Record<string, string> = {
    'services': 'Services',
    'creation-site-web': 'Création Sites Web',
    'programmation-ia': 'Programmation & IA',
    'seo-content-marketing': 'SEO & Marketing',
    'marketing-automation-crm': 'Marketing Automation',
    'tracking-data': 'Tracking & Data',
    'blog': 'Blog',
    'agence': 'Agence',
    'contact': 'Contact',
    'realisations': 'Réalisations',
    'outils': 'Outils',
    'local': 'Suisse',
    'sion': 'Sion',
    'valais': 'Valais',
    'lausanne': 'Lausanne',
    'geneve': 'Genève',
    'fribourg': 'Fribourg',
    'neuchatel': 'Neuchâtel',
    'legal': 'Légal',
    'mentions-legales': 'Mentions légales',
    'politique-confidentialite': 'Politique de confidentialité',
    'conditions-utilisation': "Conditions d'utilisation",
    'cookies': 'Cookies'
  }

  const breadcrumbItems = segments.map((segment, index) => {
    const path = '/' + segments.slice(0, index + 1).join('/')
    const label = labelMap[segment] || segment.replace(/-/g, ' ')
    return { path, label }
  })

  return (
    <nav className="bg-black/50 backdrop-blur-sm border-b border-yellow-400/10" aria-label="Breadcrumb">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 text-sm">
          <li>
            <Link
              href="/"
              className="text-gray-400 hover:text-yellow-400 transition-colors"
            >
              Accueil
            </Link>
          </li>
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              <span className="text-gray-500 mx-2">›</span>
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-yellow-400 font-medium">{item.label}</span>
              ) : (
                <Link
                  href={item.path}
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}