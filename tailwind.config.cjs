/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			...require('tailwindcss/defaultTheme')
		},
		colors: {
			primary: '#343D64',
			secondary: '#82730E'
		}
	},

	plugins: []
};

module.exports = config;
