/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],

  purge: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {},
    colors: {
      'gray-50': '#F5F8F8',
      white: '#ffff',
      black: '#000',
      blue: '#319795',
      'indigo-500': '#6366f1',
      'gray-200': '#DDE5E8',
      'gray-700': '#6D7989',
      'gray-950': '#2E3238',
      'raven-50': '#F5F8F8',
      'raven-200': '#DDE5E8',
      'raven-500': '#9CABB8',
      'raven-800': '#5E6875',
      'raven-950': '#2E3238',
      'regent-100': '#E7F2F7',
      'regent-200': '#C9E4EE',
      'regent-500': '#3F9BB8',
      'regent-800': '#235569',
      'regent-950': '#172F3A',
      'yellow-300': '#FACA15',
      'red-500': '#F05252',
    },
  },
  plugins: [],
};
