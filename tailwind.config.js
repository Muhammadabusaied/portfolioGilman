/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        heading: ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#38BDF8",      // Sky Blue (React-like)
          "secondary": "#818CF8",    // Indigo
          "accent": "#FACC15",       // Gold/Yellow
          "neutral": "#1E293B",      // Slate 800
          "base-100": "#0F172A",     // Slate 900 (Deep Background)
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
        },
      },
      "light",
      "dark",
    ],
  }
}

