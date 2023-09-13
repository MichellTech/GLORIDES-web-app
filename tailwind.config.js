/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        babypurple: 'hsl(301, 96%, 33%)',
        babyblack: 'hsl(222, 48%, 11%)',
        softRed: 'hsl(358, 79%, 66%)',
      },
      fontFamily: {
        sans: ['Alata', 'sans-serif'],
        mono: ['Abril Fatface', 'cursive'],
      },
      scale: {
        175: '1.75',
        200: '2',
      },
    },
  },
  plugins: [],
}
