/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        winter: {
          "0%": { "background-position": "0px 0px, 0px 0px, 0px 0px" },
          "100%": {
            "background-position": "500px 1000px, 400px 400px, 300px 300px",
          },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(0)",
            transion: "all 0.5s easeInOut",
          },
          "50%": {
            transform: "translateY(-20px)",
            opacity: "0.8",
          },
        },
      },
      animation: {
        winter: "winter 20s linear infinite",
        bounce: "bounce 1s infinite",
      },
      backgroundImage: {
        winter: "url('/assets/images/3.png')",
      },
    },
  },
  plugins: [],
};
