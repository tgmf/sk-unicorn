/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInUp100: {
          '0%': { transform: 'translateY(50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInDown50: {
          '0%': { transform: 'translateY(-100%)' },
          '50%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        slideInUp30: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-33%)' },
        }
      },
      animation: {
        slideInUp100: 'slideInUp100 3s ease-out',
        slideInDown50: 'slideInDown50 3s ease-in',
        slideInUp30: 'slideInUp30 3s ease-out, pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}