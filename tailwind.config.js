/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      tablet: "400px",
      mobile: "500px",
      smallMobile: "600px",
      laptop: "750px",
      largeLaptop: "800px",
      desktop: "1000px",
    },
  },
  plugins: [],
};
