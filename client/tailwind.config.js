/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,vue}"
  ],
  theme: {
    fontFamily: {
      mono: ["Space Mono", "monospace"]
    },
    extend: {
      colors: {
        "accent-1": "#333"
      }
    },
  },
  plugins: [],
}