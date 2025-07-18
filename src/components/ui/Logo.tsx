import React from 'react'

interface LogoProps {
  variant?: 'default' | 'white' | 'black'
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

  const getColors = () => {
    switch (variant) {
      case 'white':
        return {
          circle1: '#ffffff',
          circle2: '#ffffff',
          circle3: '#ffffff',
          circle4: '#ffffff',
          circle5: '#ffffff',
          circle6: '#ffffff',
        }
      case 'black':
        return {
          circle1: '#000000',
          circle2: '#000000',
          circle3: '#000000',
          circle4: '#000000',
          circle5: '#000000',
          circle6: '#000000',
        }
      default:
        return {
          circle1: '#000000',
          circle2: '#bcbbbb',
          circle3: '#514747',
          circle4: '#ffdd00',
          circle5: '#00dbb6',
          circle6: '#ff0031',
        }
    }
  }

  const colors = getColors()

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg 
        viewBox="0 0 2455.3 1700" 
        className="w-full h-auto"
        role="img"
        aria-label="OSOM Logo"
      >
        {/* Top row circles */}
        <circle cx="457.6" cy="623" r="181.3" fill={colors.circle1} />
        <circle cx="1227.7" cy="623" r="181.3" fill={colors.circle3} />
        <circle cx="1997.8" cy="623" r="181.3" fill={colors.circle2} />
        
        {/* Bottom row circles */}
        <circle cx="457.6" cy="1282.3" r="181.3" fill={colors.circle4} />
        <circle cx="1227.7" cy="1282.3" r="181.3" fill={colors.circle5} />
        <circle cx="1997.8" cy="1282.3" r="181.3" fill={colors.circle6} />
      </svg>
    </div>
  )
}

export default Logo