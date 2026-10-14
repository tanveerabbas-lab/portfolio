/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#060818',
        ink: '#eceaff',
        mute: '#a3a1c4',
        violet: { DEFAULT: '#8b5cf6', 300: '#b69cff' },
        volt: '#3b82f6',
      },
      fontFamily: {
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        hand: ['Caveat', 'cursive'],
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-12px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.95' },
        },
        nudge: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(4px)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite alternate',
        nudge: 'nudge 1.8s ease-in-out infinite',
        twinkle: 'twinkle 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
