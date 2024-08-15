/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.hide-scrollbar': {
            overflowX: 'auto',
            scrollbarWidth: 'none' /* For Firefox */,
            '-ms-overflow-style': 'none' /* For Internet Explorer and Edge */,
          },
          '.hide-scrollbar::-webkit-scrollbar': {
            display: 'none' /* For Chrome, Safari, and Opera */,
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
};
