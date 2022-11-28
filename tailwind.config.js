/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1250px',
    },
    extend: {
      colors: {
        primary: '#0B132A',
        blue: '#0083FF',
        'dark-blue': '#001F7E',
        'light-gray-500': '#fbfbfb',
        'light-blue': '#F3F7FF',
        dark: '#494949',
        gray: '#4F5665',
        'medium-gray': '#7D7987',
        'light-gray-600': '#EEEFF2',
        'light-gray': 'rgba(0, 0, 0, 0.15)',
        red: '#ED1C2E',
        'red-500': '#F53838'
      },
      boxShadow: {
        'box-dark': '0px 5px 10px rgba(0, 0, 0, 0.15)',
        'box-gray': '0px 10px 30px rgba(1, 131, 255, 0.1)',
        'box-blue': '0px 10px 40px rgba(229, 233, 246, 0.4)',
        'box-inset': '-4px -4px 8px transparent, 4px 4px 8px transparent, inset -10px -10px 16px #ffffff, inset 4px 4px 10px #d1dce3'
      },
      backgroundImage: {
        'map': "url('/svg/map.svg')",
        'mail': "url('/svg/mail.svg')",
        'mail-hover': "url('/svg/mail-hover.svg')",
        'phone': "url('/svg/phone.svg')",
        'phone-hover': "url('/svg/phone-hover.svg')",
      }
    },
  },
  plugins: [],
}
