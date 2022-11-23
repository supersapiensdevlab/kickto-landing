/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blur-pattern': "url('/src/assets/images/blur-elements-light-purple.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      colors:{
        primary:"#7b3fe4"
      }
    },
  },
  plugins: [require("daisyui")],
}
