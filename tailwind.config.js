/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'navbar': '0px 7px 6.1px rgba(171, 29, 121, 0.23)', // Example custom shadow
      },

    },
  },
  plugins: [],
}


