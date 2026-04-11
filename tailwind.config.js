/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', "system-ui", "sans-serif"],
        mono: ['"Fira Code"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        bg: "#121212",
        white: "#f5f5f5",
        black: "#121212",
        lightGray: "#a6a6a6",
        darkGray: "#3d3d3d",
      },
      fontSize: {
        "7rem": ["7rem", { lineHeight: "1" }],
        "4rem": ["4rem", { lineHeight: "1" }],
      },
    },
  },
  plugins: [],
}

