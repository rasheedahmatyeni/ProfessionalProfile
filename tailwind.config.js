/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Base — warm ivory / mist neutrals
        ivory: {
          50: '#FCFAF5',
          100: '#FBF8F1',
          200: '#F3EEE3',
          300: '#E8E1D4',
          400: '#D6CBB8',
          500: '#B8A88F',
        },
        // Medium — slate
        slate: {
          50: '#F4F6F7',
          100: '#E5E5E5',
          200: '#CBD0D3',
          300: '#A9B2B6',
          400: '#94A3A8',
          500: '#6E7B80',
          600: '#545F63',
        },
        // Dark — text / charcoal
        ink: {
          50: '#E8EBEC',
          100: '#C6CCCE',
          200: '#8A9398',
          300: '#5A6469',
          400: '#3F484C',
          500: '#333A3E',
          600: '#272C2F',
          700: '#1A1F23',
          800: '#12161A',
          900: '#0B0E10',
        },
        // Accent — warm amber-gold (CTAs, highlights)
        amber: {
          50: '#FDF7EC',
          100: '#FAEFD3',
          200: '#F4DDA1',
          300: '#EDC76D',
          400: '#E3B24A',
          500: '#D49A3F',
          600: '#B07C2C',
          700: '#885E20',
          800: '#603F16',
          900: '#3A240A',
        },
        // Headings — deep teal
        teal: {
          50: '#F0F7F7',
          100: '#D9EBEB',
          200: '#B4D6D6',
          300: '#84B8B8',
          400: '#4E9090',
          500: '#2E7373',
          600: '#1F5A5A',
          700: '#1A4747',
          800: '#153636',
          900: '#0E2323',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '72rem',
      },
      boxShadow: {
        soft: '0 2px 12px -2px rgba(26, 31, 35, 0.08)',
        warm: '0 10px 40px -12px rgba(26, 31, 35, 0.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.8s ease both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
};
