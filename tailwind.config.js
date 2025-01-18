/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true, // Centers the container by default
      padding: "1rem", // Adds default horizontal padding
      screens: {
        xs: "480px",
        sm: "600px", // Applies when min-width is 640px
        md: "728px", // Applies when min-width is 768px
        lg: "984px", // Applies when min-width is 1024px
        xl: "1240px", // Applies when min-width is 1280px
        "2xl": "1496px", // Applies when min-width is 1536px
      },
    },
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
        winter: "url('/11.jpg')",
      },
    },
  },
  plugins: [],
};
