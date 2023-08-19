/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('tailwindcss-animate'),
		require('daisyui')
	],
	daisyui: {
		themes: ['synthwave', 'emerald', 'dark', 'retro', 'forest']
	}
};
