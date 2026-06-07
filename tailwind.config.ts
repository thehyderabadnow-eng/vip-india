import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vip: {
          blue: "#041E42",
          saffron: "#FF671F",
          green: "#046A38",
          light: "#F8F9FA",
        }
      },
    },
  },
  plugins: [],
};
export default config;