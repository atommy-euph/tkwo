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
        bg: "black",
      },
      fontFamily: {
        mb101: "'a-otf-gothic-mb101-pr6n', sans-serif",
        kurobara: "'kurobara-cinderella', sans-serif",
        tangier: "tangier, serif",
      },
      backgroundImage: {
        "key-img": "url(../images/key.jpg)",
      },
    },
  },
  plugins: [],
};
