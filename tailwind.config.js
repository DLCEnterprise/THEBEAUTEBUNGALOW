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
        rg: {
          100: '#F5EDE4',
          200: '#E8D5C4',
          300: '#D4B896',
          400: '#C9A882',
          500: '#B8926A',
          600: '#A6784E',
          700: '#8A6040',
        },
        cream: '#F8F4F0',
        charcoal: '#111111',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-jost)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up':  'fadeUp 1s ease both',
        'fade-in':  'fadeIn 1.2s ease both',
        'fade-up-delay': 'fadeUp 1s 0.3s ease both',
        'shimmer':    'shimmer 7s ease-in-out infinite',
        'float-slow': 'floatY 9s ease-in-out infinite',
        'glow-pulse': 'glowPulse 6s ease-in-out infinite',
        'spin-slow':  'spinSlow 70s linear infinite',
        'spin-slower':'spinSlow 110s linear infinite reverse',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)',      opacity: '0.5' },
          '50%':      { transform: 'translateY(-16px)',  opacity: '0.9' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.40', transform: 'scale(1)' },
          '50%':      { opacity: '0.72', transform: 'scale(1.06)' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
