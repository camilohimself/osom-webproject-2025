'use client'

import { useEffect } from 'react'
import { trackEvent } from '@/lib/analytics'

/**
 * GlobalTracker - Système de tracking GA4 optimisé pour OSOM
 *
 * APPROCHE PERFORMANCE-FIRST:
 * - 1 seul event listener global au lieu de multiples listeners
 * - Utilise data-attributes sur les éléments à tracker
 * - Mode passive pour ne pas bloquer le scroll
 * - Aucun impact sur le PageSpeed (90+)
 *
 * USAGE:
 * <a data-ga-event="cta_clicked" data-ga-category="conversion" data-ga-label="hero_primary">
 */
export default function GlobalTracker() {
  useEffect(() => {
    // Global Click Tracker avec event delegation
    const handleClick = (e: MouseEvent) => {
      // Trouver l'élément cliqué ou son parent avec data-ga-event
      const target = (e.target as HTMLElement).closest('[data-ga-event]') as HTMLElement

      if (!target) return

      // Extraire les données de tracking
      const event = target.dataset.gaEvent
      const category = target.dataset.gaCategory || 'engagement'
      const label = target.dataset.gaLabel || ''
      const value = target.dataset.gaValue ? parseInt(target.dataset.gaValue) : undefined

      // Track l'événement
      if (event) {
        trackEvent({
          action: event,
          category,
          label,
          value,
          custom_parameters: {
            page_path: window.location.pathname,
            element_type: target.tagName.toLowerCase(),
            element_text: target.textContent?.trim().substring(0, 50) || '',
            timestamp: new Date().toISOString()
          }
        })

        // Log en dev pour debugging
        if (process.env.NODE_ENV === 'development') {
          console.log('📊 GA4 Event Tracked:', {
            event,
            category,
            label,
            value,
            page: window.location.pathname
          })
        }
      }
    }

    // Attacher le listener avec option passive pour performance
    document.addEventListener('click', handleClick, { passive: true })

    // Cleanup
    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [])

  // Track scroll depth (non-blocking avec Intersection Observer)
  useEffect(() => {
    const depths = [25, 50, 75, 90]
    const trackedDepths = new Set<number>()

    const checkScrollDepth = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollPercent = Math.round((scrollTop / (documentHeight - windowHeight)) * 100)

      depths.forEach(depth => {
        if (scrollPercent >= depth && !trackedDepths.has(depth)) {
          trackedDepths.add(depth)

          trackEvent({
            action: 'scroll_depth',
            category: 'engagement',
            label: `${depth}%`,
            value: depth,
            custom_parameters: {
              page_path: window.location.pathname
            }
          })

          if (process.env.NODE_ENV === 'development') {
            console.log(`📊 Scroll Depth: ${depth}% on ${window.location.pathname}`)
          }
        }
      })
    }

    // Throttle scroll events pour performance
    let scrollTimeout: NodeJS.Timeout
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout)
      scrollTimeout = setTimeout(checkScrollDepth, 150)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeout) clearTimeout(scrollTimeout)
    }
  }, [])

  // Track time on page (non-blocking avec requestIdleCallback)
  useEffect(() => {
    const startTime = Date.now()
    const milestones = [30000, 60000, 120000] // 30s, 1min, 2min
    const trackedMilestones = new Set<number>()

    const checkTimeOnPage = () => {
      const timeSpent = Date.now() - startTime

      milestones.forEach(milestone => {
        if (timeSpent >= milestone && !trackedMilestones.has(milestone)) {
          trackedMilestones.add(milestone)

          trackEvent({
            action: 'time_on_page',
            category: 'engagement',
            label: `${milestone / 1000}s`,
            value: milestone / 1000,
            custom_parameters: {
              page_path: window.location.pathname
            }
          })
        }
      })
    }

    const interval = setInterval(checkTimeOnPage, 5000) // Check every 5s

    return () => clearInterval(interval)
  }, [])

  // Track pricing section reveal (Intersection Observer pour performance)
  useEffect(() => {
    // Attendre que le DOM soit prêt
    const observePricingSections = () => {
      const pricingSections = document.querySelectorAll('[data-track-pricing-reveal]')

      if (pricingSections.length === 0) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const section = entry.target as HTMLElement
              const packageName = section.dataset.trackPricingReveal || 'unknown'

              trackEvent({
                action: 'pricing_revealed',
                category: 'engagement',
                label: packageName,
                value: 5,
                custom_parameters: {
                  page_path: window.location.pathname
                }
              })

              if (process.env.NODE_ENV === 'development') {
                console.log(`📊 Pricing Revealed: ${packageName}`)
              }

              // Unobserve après le premier trigger
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.5 // 50% visible
        }
      )

      pricingSections.forEach(section => observer.observe(section))

      return () => observer.disconnect()
    }

    // Délai pour laisser le DOM se construire
    const timeout = setTimeout(observePricingSections, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return null // Ce composant ne rend rien visuellement
}
