/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: '#f9f506',
				'background-light': '#f8f8f5',
				'background-dark': '#23220f',
				'text-main': '#181811',
				'text-muted': '#8c8b5f'
			},
			fontFamily: {
				display: ['Spline Sans', 'sans-serif']
			},
			borderRadius: {
				DEFAULT: '1rem',
				lg: '2rem',
				xl: '3rem',
				full: '9999px'
			}
		}
	},
	plugins: []
};
