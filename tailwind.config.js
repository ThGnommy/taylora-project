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
    },
  },
  plugins: [],
}
