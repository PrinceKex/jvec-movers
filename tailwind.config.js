import plugin from 'tailwindcss/plugin'
/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        choose: "url('../src/assets/choose.png')",
        team: "url('../src/assets/team.jpg')",
        coverage: "url('../src/assets/coverage.png')",
        footer: "url('../src/assets/footerBackground.png')",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('current', '&.active')
    }),
  ],
}
