'use client'

import { useState, useEffect } from 'react'

export function useMediaQuery(query: string): boolean {
  // Initialiser avec une valeur qui évite le flash desktop->mobile
  const [matches, setMatches] = useState<boolean | undefined>(undefined)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const media = window.matchMedia(query)

    // Set initial value
    setMatches(media.matches)

    // Create listener
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    // Add listener
    media.addEventListener('change', listener)

    // Cleanup
    return () => media.removeEventListener('change', listener)
  }, [query])

  // Pendant l'hydratation, assumer mobile-first pour éviter le flash
  if (!mounted) return false
  return matches ?? false
}

export const useIsDesktop = () => useMediaQuery('(min-width: 1024px)')
export const useIsMobile = () => useMediaQuery('(max-width: 1023px)')