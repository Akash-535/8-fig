/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],     
    },
    extend: {
      backgroundImage: {
        'hero-bg':"url('./assets/images/webp/hero-bg.webp')"
      }
    },
  },
  plugins: [],
}