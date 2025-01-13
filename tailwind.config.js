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
      },
      animation: {
        winter: "winter 20s linear infinite",
      },
      backgroundImage: {
        winter: "url('/assets/images/3.png')",
      },
    },
  },
  plugins: [],
};
