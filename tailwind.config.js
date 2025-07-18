/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'osom': {
          'black': '#000000',
          'dark-gray': '#514747',
          'light-gray': '#bcbbbb',
          'yellow': '#ffdd00',
          'teal': '#00dbb6',
          'red': '#ff0031',
        },
        'brand': {
          'primary': '#00dbb6',
          'secondary': '#ffdd00',
          'accent': '#ff0031',
          'dark': '#514747',
          'light': '#bcbbbb',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'cera': ['CeraPro-Regular', 'Inter', 'system-ui', 'sans-serif'],
        'myriad': ['MyriadPro-Regular', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00dbb6 0%, #ffdd00 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #514747 0%, #bcbbbb 100%)',
        'gradient-hero': 'linear-gradient(135deg, #000000 0%, #514747 50%, #bcbbbb 100%)',
      },
      boxShadow: {
        'brand-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'brand-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'brand-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'brand-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-subtle': 'bounceSubtle 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}