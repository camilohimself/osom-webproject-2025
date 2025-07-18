import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

// Configuration GSAP globale
export const initGSAP = () => {
  if (typeof window !== 'undefined') {
    // Enregistrer les plugins
    gsap.registerPlugin(ScrollTrigger, TextPlugin)
    
    // Configuration par défaut
    gsap.defaults({
      duration: 1,
      ease: 'power2.out',
    })

    // Configuration ScrollTrigger
    ScrollTrigger.defaults({
      toggleActions: 'play none none reverse',
      markers: false, // Mettre à true pour déboguer
    })

    // Rafraîchir ScrollTrigger lors du redimensionnement
    ScrollTrigger.addEventListener('refresh', () => {
      // Recalculer les positions
    })

    // Nettoyage automatique
    const cleanupScrollTrigger = () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }

    // Nettoyage lors du changement de page
    window.addEventListener('beforeunload', cleanupScrollTrigger)

    return cleanupScrollTrigger
  }
}

// Configurations d'animations prédéfinies
export const animationPresets = {
  // Animations d'entrée
  fadeIn: {
    from: { opacity: 0 },
    to: { opacity: 1, duration: 0.8 },
  },
  slideUp: {
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 0.8 },
  },
  slideLeft: {
    from: { opacity: 0, x: -50 },
    to: { opacity: 1, x: 0, duration: 0.8 },
  },
  slideRight: {
    from: { opacity: 0, x: 50 },
    to: { opacity: 1, x: 0, duration: 0.8 },
  },
  scale: {
    from: { opacity: 0, scale: 0.8 },
    to: { opacity: 1, scale: 1, duration: 0.8 },
  },
  
  // Animations de sortie
  fadeOut: {
    to: { opacity: 0, duration: 0.5 },
  },
  slideDown: {
    to: { opacity: 0, y: 50, duration: 0.5 },
  },
  
  // Animations spéciales
  bounce: {
    from: { opacity: 0, y: -100 },
    to: { opacity: 1, y: 0, duration: 1.2, ease: 'bounce.out' },
  },
  elastic: {
    from: { opacity: 0, scale: 0 },
    to: { opacity: 1, scale: 1, duration: 1.5, ease: 'elastic.out(1, 0.3)' },
  },
  
  // Animations de rotation
  rotate: {
    from: { opacity: 0, rotation: 180 },
    to: { opacity: 1, rotation: 0, duration: 1 },
  },
  
  // Animations de texte
  typewriter: {
    from: { width: 0 },
    to: { width: '100%', duration: 2, ease: 'power2.inOut' },
  },
}

// Utilitaires pour les animations
export const animationUtils = {
  // Stagger pour les listes
  staggerChildren: (elements: NodeListOf<Element>, animation: any, stagger = 0.1) => {
    return gsap.fromTo(elements, animation.from, {
      ...animation.to,
      stagger,
    })
  },
  
  // Timeline pour animations complexes
  createTimeline: (options = {}) => {
    return gsap.timeline(options)
  },
  
  // Animation de parallax
  parallax: (element: Element, speed = 0.5) => {
    return gsap.to(element, {
      yPercent: -50 * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  },
  
  // Animation de morphing
  morphPath: (element: Element, newPath: string, duration = 1) => {
    return gsap.to(element, {
      attr: { d: newPath },
      duration,
      ease: 'power2.inOut',
    })
  },
  
  // Animation de compteur
  counter: (element: Element, endValue: number, duration = 2) => {
    const obj = { value: 0 }
    return gsap.to(obj, {
      value: endValue,
      duration,
      ease: 'power2.out',
      onUpdate: () => {
        element.textContent = Math.round(obj.value).toString()
      },
    })
  },
}