/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",   // Slate-900 (main brand)
        accent: "#f59e0b",    // Amber-500 (highlights / badges)
        muted: "#64748b"      // Slate-500 (secondary text)
      }
    }
  },
  plugins: []
};
