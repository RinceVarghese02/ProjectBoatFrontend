/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xss': '200px',
        'xs': '500px',
        // => @media (min-width: 640px) { ... }
    
      },
    },
  },
  plugins: [],
  
}