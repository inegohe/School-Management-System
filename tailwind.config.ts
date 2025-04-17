import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        secondary: "var(--secondary)",
        "secondary-light": "var(--secondary-light)",
        accent: {
          1: "var(--accent-1)",
          "1-light": "var(--accent-1-light)",
          2: "var(--accent-2)",
          "2-light": "var(--accent-2-light)",
          3: "var(--accent-3)",
          "3-light": "var(--accent-3-light)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
