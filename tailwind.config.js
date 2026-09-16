/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A5F',
          light: '#2A4A73',
          dark: '#152A45',
        },
        secondary: {
          DEFAULT: '#4A90E2',
          light: '#6BA4E8',
          dark: '#3A7BC8',
        },
        cta: {
          DEFAULT: '#C2410C',
          light: '#FB923C',
          dark: '#9A3412',
        },
        care: {
          DEFAULT: '#16A34A',
          light: '#22C55E',
          dark: '#15803D',
        },
        background: {
          light: '#F8FAFC',
          DEFAULT: '#FFFFFF',
        },
      },
      fontFamily: {
        heading: ['Merriweather', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['44px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['34px', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      spacing: {
        'section': '80px',
        'section-lg': '120px',
      },
      maxWidth: {
        'container': '1200px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
};
