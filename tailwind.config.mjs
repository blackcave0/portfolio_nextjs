/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
  			primary: 'var(--primary)',
  			secondary: 'var(--secondary)',
  			accent: 'var(--accent)',
  			muted: 'var(--muted)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		fontFamily: {
  			'open-sans': [
  				'Open Sans"',
  				'sans-serif'
  			],
  			montserrat: [
  				'Montserrat"',
  				'sans-serif'
  			],
  			roboto: [
  				'Roboto"',
  				'sans-serif'
  			],
  			poppins: [
  				'Poppins"',
  				'sans-serif'
  			],
  			inter: [
  				'Inter"',
  				'sans-serif'
  			],
  			lato: [
  				'Lato"',
  				'sans-serif'
  			],
  			raleway: [
  				'Raleway"',
  				'sans-serif'
  			]
  		},
  		animation: {
  			grid: 'grid 15s linear infinite'
  		},
  		keyframes: {
  			grid: {
  				'0%': {
  					transform: 'translateY(-50%)'
  				},
  				'100%': {
  					transform: 'translateY(0)'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
