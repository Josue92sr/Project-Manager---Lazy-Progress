/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        showEl: {
          "0%": {
            opacity: "1",
            "z-index": "2",
          },
          "100%": {
            opacity: "0",
            display: "none",
          },
        },
        fade: {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(100%)",
            display: "none",
          },
        },
        show: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
            display: "block",
          },
        },
      },
      animation: {
        showEl: "showEl 1.5s 1 forwards",
        fade: "fade 0.4s 1 forwards",
        show: "show 0.4s 1 forwards",
      },
    },
  },

  plugins: [],
}
