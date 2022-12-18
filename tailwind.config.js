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
      },
      animation: {
        border: 'border 4s ease infinite',
        bouncer:'movement 4s  ininite'
      },
      keyframes: {
        border  : {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        movement: {
          '0%' : { transform: 'translateY(0rem)' }, 
          '50%': { transform: 'translateY(1rem)' },
          '100%': { transform: 'translateY(0rem)' },
        }
      },
    },
  },
  plugins: [require("daisyui")],
}
