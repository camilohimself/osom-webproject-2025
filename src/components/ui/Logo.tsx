import React from 'react'
import Image from 'next/image'

interface LogoProps {
  variant?: 'default' | 'white' | 'black' | 'icon'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'default', 
  size = 'md', 
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'w-20 h-auto',
    md: 'w-32 h-auto',
    lg: 'w-48 h-auto',
  }

  const getLogoSrc = () => {
    switch (variant) {
      case 'white':
        return '/logo-white.jpg'
      case 'black':
        return '/logo-black.jpg'
      case 'icon':
        return '/logo-icon-black.jpg'
      default:
        return '/logo-black.jpg'
    }
  }

  const logoSrc = getLogoSrc()

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <Image 
        src={logoSrc}
        alt="OSOM Logo"
        width={200}
        height={60}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  )
}

export default Logo