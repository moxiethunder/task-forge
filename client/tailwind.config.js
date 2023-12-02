/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    fontFamily: {
      mono: ["JetBrains Mono", "monospace"]
    },
    extend: {
      colors: {
        "brand-gray-900": "#16131D",
        "brand-gray-800": "#21222B",
        "brand-gray-700": "#2A2933",
        "brand-gray-600": "#302F38",
        "brand-gray-500": "#40424E",
        "brand-gray-200": "#A2A2B0",
      }
    },
  },
  plugins: [],
}