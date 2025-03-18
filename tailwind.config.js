/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors:{
          'custom-orange':'rgb(234,88,11)',
          'custom-white':'rgb(245,245,245)',
          'custom-green':'rgb(46 139 87)'
        }
      },
    },
    plugins: [],
  };
  