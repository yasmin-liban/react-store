const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
	colors: {
		transparent: 'transparent',
		current: 'currentColor',
		gray: colors.blueGray,
		red: colors.red,
		blue: colors.blue,
		sky: colors.sky,
		pink: colors.pink,
		fuchsia: colors.fuchsia,
		purple: colors.purple,
		rose: colors.rose,
		yellow: colors.amber,
		emerald: colors.emerald,
		orange: colors.orange,
		violet: colors.violet,
		black: colors.black,
		white: colors.white,
		indigo: colors.indigo,
	},
	extend: {
	  gridRowStart: {
	   '8': '8',
	   '9': '9',
	   '10': '10',
	   '11': '11',
	   '12': '12',
	   '13': '13',
	   '14': '14',
	   '15': '15',
	   '16': '16',
	   '17': '17',
	  },
	  gridRowEnd: {
		'8': '8',
		'9': '9',
		'10': '10',
		'11': '11',
		'12': '12',
		'13': '13',
		'14': '14',
		'15': '15',
		'16': '16',
		'17': '17',
	   }
	}
  },
  variants: {
	extend: {},
  },
  plugins: [],
}
