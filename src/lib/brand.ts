export const brandColors = {
  primary: {
    black: '#000000',
    darkGray: '#514747',
    lightGray: '#bcbbbb',
    yellow: '#ffdd00',
    teal: '#00dbb6',
    red: '#ff0031',
  },
  semantic: {
    background: '#ffffff',
    text: '#000000',
    accent: '#00dbb6',
    warning: '#ffdd00',
    error: '#ff0031',
    success: '#00dbb6',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #00dbb6 0%, #ffdd00 100%)',
    secondary: 'linear-gradient(135deg, #514747 0%, #bcbbbb 100%)',
    hero: 'linear-gradient(135deg, #000000 0%, #514747 50%, #bcbbbb 100%)',
  }
} as const

export const brandTypography = {
  fonts: {
    primary: 'CeraPro-Regular, Inter, system-ui, sans-serif',
    secondary: 'MyriadPro-Regular, Inter, system-ui, sans-serif',
  },
  sizes: {
    hero: '4rem',
    h1: '3rem',
    h2: '2.5rem',
    h3: '2rem',
    h4: '1.5rem',
    body: '1rem',
    small: '0.875rem',
  },
  weights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
} as const

export const brandSpacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
  '3xl': '6rem',
} as const

export const brandBorderRadius = {
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '1.5rem',
  full: '9999px',
} as const

export const brandShadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
} as const