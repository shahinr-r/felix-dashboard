/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    "bg-blue-50","text-blue-600","text-blue-700","border-blue-100",
    "bg-purple-50","text-purple-600","text-purple-700","border-purple-100",
    "bg-emerald-50","text-emerald-600","text-emerald-700","border-emerald-100",
    "bg-orange-50","text-orange-600","text-orange-700","border-orange-100",
  ],
};
