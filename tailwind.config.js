export default {
  darkMode: 'class', // ⬅️ Important!
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-motion')],
};
