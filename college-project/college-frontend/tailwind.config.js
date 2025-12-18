/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b", // Example: Dark Slate/Blue
        accent: "#f59e0b",  // Example: Amber/Orange
        muted: "#64748b",   // Example: Grey text
      },
    },
  },
  plugins: [],
};