/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        Lato: ['Lato', 'sans-serif'],
        Montserrat:['Montserrat', 'sans-serif']
      },
      colors: {
        bgColor: '#fff',
        primaryGreen: '#55B76B'
      },
    },
  },
  plugins: [],
};
