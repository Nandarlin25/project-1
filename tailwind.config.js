/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        'poppins' : ["Poppins", "sans-serif"],
        'padauk' : ["Padauk", "sans-serif"],
        'poppins-padauk' : ["Poppins","Padauk","sans-serif"]
      },
      colors : {
        "primary" : "#E21B1B",
        "secondary" : "#A205F5",
      }
    },
  },
  plugins: [],
}

