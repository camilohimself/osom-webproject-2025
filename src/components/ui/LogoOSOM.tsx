'use client'

import Image from 'next/image'

interface LogoOSOMProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

export default function LogoOSOM({ size = 'md', className = '' }: LogoOSOMProps) {
  const sizeMap = {
    sm: { width: 80, height: 32 },
    md: { width: 120, height: 48 },
    lg: { width: 180, height: 72 },
    xl: { width: 240, height: 96 }
  }

  const dimensions = sizeMap[size]

  return (
    <Image
      src="/logos/osom-logo.svg"
      alt="OSOM"
      width={dimensions.width}
      height={dimensions.height}
      className={`inline-block ${className}`}
      priority
      style={{
        width: 'auto',
        height: 'auto',
        maxWidth: `${dimensions.width}px`,
        maxHeight: `${dimensions.height}px`
      }}
    />
  )
}