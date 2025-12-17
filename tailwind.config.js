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
				'surface-light': '#ffffff',
				'surface-dark': '#2d2c1b',
				'text-main': '#181811',
				'text-light': '#f2f2e6',
				'border-light': '#e6e6db',
				'border-dark': '#454430',
				'muted-light': '#8c8b5f',
				'muted-dark': '#a0a090'
			},
			fontFamily: {
				display: ['Spline Sans', 'sans-serif']
			},
			borderRadius: {
				DEFAULT: '1rem',
				lg: '2rem',
				xl: '3rem',
				full: '9999px'
			},
			animation: {
				'spin-slow': 'spin 3s linear infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'fade-in': 'fadeIn 0.5s ease-in-out'
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			}
		}
	},
	plugins: []
};
