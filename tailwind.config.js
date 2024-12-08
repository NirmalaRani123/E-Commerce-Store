/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{html,js,ts,jsx,tsx}',
      './components/**/*.{html,js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          primary: '#1d4ed8',
          secondary: '#64748b',
        },
      },
    },
    plugins: [],
  };
  