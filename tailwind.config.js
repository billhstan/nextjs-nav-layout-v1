/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
/*purge: .... was manually inserted by me after the tailwind.config.js was automatically created */
/* Reference: https://v2.tailwindcss.com/docs/guides/nextjs */