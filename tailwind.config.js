/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'grid-xl': {'max': '1560px'},
      'grid-lg': {'max': '1345px'},
      'grid-md': {'max': '1050px'},
      'grid-sm': {'max': '380px'},
      'card-md': {'max': '800px'},
      'card-sm': {'max': '380px'},
      'm-grid-2xl': {'max': '1560px'},
      'm-grid-xl': {'max': '1345px'},
      'm-grid-lg': {'max': '1130px'},
      'm-grid-md': {'max': '1050px'},
      'm-grid-sm': {'max': '800px'},
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
