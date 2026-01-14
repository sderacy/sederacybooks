/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				void: {
					900: '#0a0a0a', // Deepest black
					800: '#1a1a1a', // Background
					700: '#2a2a2a', // Card backgrounds
				},
				magic: {
					light: '#e0e7ff', // Silver/White
					DEFAULT: '#7c3aed', // Violet
					dark: '#4c1d95', // Deep Indigo
				},
				gold: {
					DEFAULT: '#d2ac22',
					dim: '#b08d1a', // Title Color
				},
				light: {
                    bg: '#f3f4f6',      // Light Gray background
                    card: '#ffffff',    // White cards
                    text: '#1f2937',    // Dark Gray text
                },
				lilac: '#a78bfa', 
    			'lilac-dark': '#7c3aed'
			},
			fontFamily: {
				serif: ['Cinzel', 'serif'], 
				sans: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
}