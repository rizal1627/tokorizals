/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        xsm: '1rem',
        sm: '2rem',
        md: '4rem',
        lg: '6rem',
        xl: '6rem',
        '2xl': '6rem',
      },
    },
    extend: {
      boxShadow: {
        'innermd': 'inset 0 5px 4px 0 rgb(0 0 0 / 0.05)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens: {
        'xsm' : '375px',
        'md' : '768px',
        'lg' : '1024px',
        'xl' : '1280px',
      }
    },
  },
  plugins: [],
}
