/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
				primary: {
					light: "#67e8f9",
					DEFAULT: "#404cff ",
					dark: "#0e7490",
				},
				primary2: {
					light: "#67e8f9",
					DEFAULT: "#4088ff",
					dark: "#0e7490",
				},
				contrast: {
					light: "#67e8f9",
					DEFAULT: "#ffb703",
					dark: "#0e7490",
				},
			},
    },
  },
  plugins: [],
}
