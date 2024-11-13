/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				background: "#C4BCB2",
				primary: "#1C1C19",
				secondary: "#FF5252",
			},
		},
	},
	plugins: [],
};
