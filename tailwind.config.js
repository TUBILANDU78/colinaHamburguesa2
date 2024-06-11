/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/**/*.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f3a944',
        secondary: '#777',
        error: '#ff0000',
        success: '#00ff00',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        display: ['Oswald', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


