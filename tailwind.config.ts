import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b0e1a",
        "bg-2": "#0f1430",
        text: "#eaf2ff",
        muted: "#9aa4b2",
        accent: "#e4c810",
        "accent-2": "#a78bfa",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "lane-sweep": "lane-sweep 1.4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 15s ease infinite",
      },
      keyframes: {
        "lane-sweep": {
          to: { transform: "translateX(400%)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
