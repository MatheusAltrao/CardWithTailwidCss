/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx'],
  theme: {
    extend: {
      keyframes: {
        top: {
          '0%': { transform: 'translateY(50px)', opacity: 0, },
          '50%': { transform: 'translateY(-20px)', opacity: 1, },
          '100%': { transform: 'translateY(0px)', opacity: 1, },
        }
      },
      animation: {
        top: 'top 1.5s ease 1s backwards',
      },
    },
  },
  plugins: [],

}
