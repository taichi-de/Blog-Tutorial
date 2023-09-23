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
        transparent: "transparent",
        gray: "#d9d9d9",
        main: "#EEEBDD",
        secondary: "#810000",
        third: "#630000",
        fourth: "#1B1717",
        title: "#3f3f3f",
        sub: "#7f7f7f",
        content: "#4f4f4f",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
