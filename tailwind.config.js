import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "aurelia-black": "#0f172a",
        "aurelia-gold": "#CAEB66",
        "aurelia-gold-dark": "#a8893a",
        "aurelia-white": "#ffffff",
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        salon: {
          primary: "#CAEB66",
          secondary: "#03373D",
          accent: "#CAEB66",
          neutral: "#111827",
          "base-100": "#ffffff",
          "base-200": "#f8fafc",
          "base-300": "#e5e7eb",
          "base-content": "#0f172a",
        },
      },
    ],
    darkTheme: "dark",
  },
};
