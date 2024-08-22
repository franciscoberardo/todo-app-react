/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "fade-in-top-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-out": {
          "0%": {
              opacity: 1
          },
          "100%": {
              opacity: 0
          },
        },
      },
      animation: {
        "fade-in": "fade-in 1.5s ease-out",
        "fadeintopleft": 'fade-in-top-left 1s ease-out 0.1s 1',
        "fadeout": 'fade-out 1.5s ease-out',
      },
    },
  },
  plugins: [],
}
