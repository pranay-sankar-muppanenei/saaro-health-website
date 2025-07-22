// tailwind.config.js
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      rotate: {
        4: "4deg",
        5: "5deg",
        6: "6deg",
        7: "7deg",
        8: "8deg",
        10: "10deg",
      },
    },
  },
  fontFamily: {
        dm: ['"DM Sans"', 'sans-serif'],
      },
  darkMode: "media",
  plugins: [],
};
