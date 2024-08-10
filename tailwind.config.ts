import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        fadeIn: "fadeIn 600ms ease-out",
        fadeOut: "fadeOut 600ms ease-in",
      },
      colors: {
        // Base colors
        primary: "#2F80ED",
        secondary: "#4F4F4F",
        tertiary: "#828282",
        quaternary: "#E0E0E0",

        // Indicators
        indicator: {
          primary: "#F8B76B",
          secondary: "#8785FF",
          tertiary: "#EB5757",
          quaternary: "#F2C94C",
        },

        // Chat colors
        chat: {
          primary: "#FCEED3",
          primarySec: "#E5A443",
          secondary: "#EEDCFF",
          secondarySec: "#9B51E0",
          tertiary: "#D2F2EA",
          tertiarySec: "#43B78D",
        },

        // Stiker colors
        sticker: {
          primary: "#E9F3FF",
          secondary: "#FDCFA4",
          tertiary: "#F9E9C3",
          quaternary: "#AFEBDB",
          quinary: "#CBF1C2",
          senary: "#CFCEF9",
          septenary: "#F9E0FD",
        },
      },
    },
  },
  plugins: [],
};
export default config;
