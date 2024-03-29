/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        customRed: '#FC1503', // Define your custom background color
        
      },
    },
  },
  plugins: [],
}

