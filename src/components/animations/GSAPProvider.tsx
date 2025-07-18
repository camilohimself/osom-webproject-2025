'use client'

import { useEffect } from 'react'
import { initGSAP } from '@/lib/gsap-config'

interface GSAPProviderProps {
  children: React.ReactNode
}

export default function GSAPProvider({ children }: GSAPProviderProps) {
  useEffect(() => {
    const cleanup = initGSAP()
    
    return () => {
      if (cleanup) cleanup()
    }
  }, [])

  return <>{children}</>
}