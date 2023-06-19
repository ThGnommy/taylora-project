/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
      },
      colors: {
        'custom-grey': '#5d7c89',
        'custom-yellow': '#ffb500',
        'light-grey': '#ededed',
      },
      boxShadow: {
        footer: '0 0 39px rgba(0,0,0,.1)',
      },
      keyframes: {
        checkBounce: {
          '0%': { transform: 'scale(1) translateY(-50%)' },
          '25%': { transform: 'scale(1.1) translateY(-50%)' },
          '50%': { transform: 'scale(1) translateY(-50%)' },
          '75%': { transform: 'scale(1.02) translateY(-50%)' },
          '100%': { transform: 'scale(1) translateY(-50%)' },
        },
      },
      animation: {
        'custom-bounce': 'checkBounce .6s ease-in-out',
      },
      backgroundImage: {
        'white-fadeout':
          'linear-gradient(to bottom,white,rgba(255,255,255,0));',
      },
    },
  },
  plugins: [],
}
