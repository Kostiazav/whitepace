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
        background: "var(--background)",
        foreground: "var(--foreground)",
        mainFont:'#054CA6',
        second:'#212529',
        buttonBlue:'#4F9CF9',
        bgFooter:'#043873',
        hoverText:'#FFE492'
      },
      fontFamily: {
        inter: 'var(--inter)',

      },
    },
  },
  plugins: [],
};
export default config;
