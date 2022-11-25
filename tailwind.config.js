/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        gold: "#c1800f",
        lightyellow: "#e8d174",
        darkyellow: "#b98e0d",
      },
      fontFamily: {
        mb101: "'a-otf-gothic-mb101-pr6n', sans-serif",
        parisine: "parisine-std, sans-serif",
        tangier: "tangier, serif",
      },
    },
  },
  plugins: [],
}
