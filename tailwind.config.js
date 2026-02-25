/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0F5B4F',
          'primary-hover': '#0B463D',
          accent: '#F59E0B',
          'accent-hover': '#D97706',
          text: '#111827',
          muted: '#6B7280',
          background: '#FFFFFF',
          alt: '#F9FAFB',
          border: '#E5E7EB',
        },
      },
      boxShadow: {
        soft: '0 10px 30px -12px rgba(15, 91, 79, 0.2)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};