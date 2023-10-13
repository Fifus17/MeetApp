/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rp-yellow': "#FBF8CC",
        'rp-orange': "#FDE4CF",
        'rp-light-pink': "#FFCFD2",
        'rp-dark-pink': "#F1C0E8",
        'rp-purple': "#F1C0E8",
        'rp-dark-blue': "#A3C4F3",
        'rp-aqua': "#90DBF4",
        'rp-light-blue': "#8EECF5",
        'rp-sea-green': "#98F5E1",
        'rp-green': "#B9FBC0",
        'text-dark': "#000000", //placeholder
        'text-light': "#FFFFFF", //placeholder
        'text-secondary': "#808080" //placeholder
      }
    },
  },
  plugins: [],
}

