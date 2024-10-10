/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1D1E1F',
          secondary: '#008080',
          accent: '#FF6347',
        },
        fontFamily: {
          sans: ['Satoshi', 'Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }