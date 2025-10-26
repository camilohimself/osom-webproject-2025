'use client'

import { usePathname } from 'next/navigation'
import MobileCTABar from './MobileCTABar'

export default function GlobalMobileCTABar() {
  const pathname = usePathname()

  // Pages où on ne veut PAS afficher le CTA bar
  const excludedPaths = ['/contact']

  // Ne pas afficher sur les pages exclues
  if (excludedPaths.some(path => pathname.startsWith(path))) {
    return null
  }

  // Détecter si on est sur une page service
  const isServicePage = pathname.startsWith('/services/')
  const serviceName = isServicePage ? pathname.split('/').pop() || '' : undefined

  // Variant selon la page
  const variant = isServicePage ? 'service' : 'default'

  return (
    <MobileCTABar
      variant={variant}
      serviceName={serviceName ? serviceName.charAt(0).toUpperCase() + serviceName.slice(1) : undefined}
    />
  )
}
