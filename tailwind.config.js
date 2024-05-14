/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: "372px",
      tablet: "768px",
      desktop: "1440px",
      neddedWidth: "2012px",
      neddedWidth2: "280px",
    },
  },
  plugins: [],
};
