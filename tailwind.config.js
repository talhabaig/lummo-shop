/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
       primary:"#1f2937",
       green: "#AAE900",
       blue: "#311b92",
       light: "#eef2ff"

      }
    },
  },
  plugins: [],
};
