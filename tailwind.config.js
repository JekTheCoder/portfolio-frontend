/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,ts}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--color-primary)',
				accent: 'var(--color-accent)',
				warn: 'var(--color-warn)',
				background: 'var(--color-background)',
				normal: 'var(--primary-text)',
			},
			textColor: {
				normal: 'var(--primary-text)',
				secondary: 'var(--secondary-text)',
			},
			screens: {
				'no-mobile': { 'raw': '(hover: hover)' }
			}
		},
	},
};
