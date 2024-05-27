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
        brand: {
          gray: "#c5c6c9",
          "gray-dark": "#74767e",
          "gray-light": "#efeff0",
          black: {
            DEFAULT: "#404145",
            100: "#222325",
            200: "#dadbdd",
            300: "#62646a",
          },
          slate: {
            100: "#f5f5f5",
            200: "#c5c5c6",
          },
          green: {
            DEFAULT: "#1dbf73",
          },
        },
      },
      maxWidth: {
        "8xl": "1440px",
      },
      fontFamily: {
        helvetica: ["Helvetica Neue", "sans serif"],
      },
      backgroundImage: {
        light: "linear-gradient(90deg, hsla(0, 0%, 100%, 0), #fff)",
      },
      boxShadow: {
        "100": "0 12px 18px rgba(0, 0, 0, .14)",
        dropdown: "0 12px 18px rgba(0,0,0,.14)",
        "profile-dropdown": "0 0 5px 1px rgba(0,0,0,.05)",
      },
    },
  },
  plugins: [],
};
export default config;
