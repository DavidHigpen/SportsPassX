// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",      // If you use the new Next.js app directory
      "./pages/**/*.{js,ts,jsx,tsx}",    // Or the classic pages directory
      "./components/**/*.{js,ts,jsx,tsx}"// Your React components
    ],
    theme: {
      extend: {
        fontFamily: {
          inter: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [require('daisyui')],
  }
  