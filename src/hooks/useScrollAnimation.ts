'use client'

import { useEffect, useState } from 'react'
import { useScroll, useTransform } from 'framer-motion'

export function useScrollAnimation() {
  const { scrollY, scrollYProgress } = useScroll()
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  
  useEffect(() => {
    let lastY = 0
    
    const unsubscribe = scrollY.onChange((current) => {
      setIsScrollingDown(current > lastY)
      lastY = current
    })
    
    const progressUnsubscribe = scrollYProgress.onChange((progress) => {
      setScrollProgress(progress)
    })
    
    return () => {
      unsubscribe()
      progressUnsubscribe()
    }
  }, [scrollY, scrollYProgress])
  
  return {
    scrollY,
    scrollYProgress,
    isScrollingDown,
    scrollProgress
  }
}

export function useScrollTrigger(threshold = 0.1) {
  const [isInView, setIsInView] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true)
        }
      },
      { threshold }
    )
    
    const element = document.getElementById('scroll-trigger')
    if (element) {
      observer.observe(element)
    }
    
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold, hasTriggered])
  
  return { isInView, hasTriggered }
}

export function useParallaxScroll(speed = 0.5) {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, -1000 * speed])
  
  return y
}