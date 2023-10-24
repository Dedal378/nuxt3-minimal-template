/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './components/**/*/*.{vue,js,ts,jsx,tsx}',
    './pages/**/*/*.{vue,js,ts,jsx,tsx}',
    './layouts/**/*/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    screens: {
      mobile: '400px',
      'tablet-sm': '650px',
      tablet: '860px',
      laptop: '1040px',
      'desktop-sm': '1280px',
      desktop: '1460px',
      tall: { raw: '(min-height: 900px)' },
      'tall-sm': { raw: '(min-height: 800px)' },
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Raleway', 'sans-serif'],
    },
    colors: {
      white: '#FFF',
      black: '#000',
      pink: '#FD3D80',
      'pink-600': '#CA3166',
      'pink-900': '#B52D5C',
      gray: '#C6C6C6',
      'gray-200': '#F2F2F9',
      'gray-600': '#57575F',
      'gray-900': '#1F1F2B',
      'lavender-200': '#E6E7F4',
      blue: '#03068B',
      green: '#009944',
      orange: '#F0541E',
      red: '#CF000F',
    },
    extend: {
      minWidth: {
        content: '370px',
      },
      maxWidth: {
        'auth-content': '1480px',
        'auth-content/2.5': '640px',
        'auth-content/4': '370px',
        'auth-content/2': '740px',
        'auth-signup-preview': '590px',
      },
      minHeight: {
        'auth-signup-preview': '440px',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      },
    },
  },
  plugins: [],
}
