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
        green: "#B8D415",
        red: '#da373d',
        yellow:'#FEE86D',
        yellowLight: '#FEE13E',
      },
      backgroundImage: {
        'hero-pattern': "url('/bg2.webp')",
       
      },
      fontFamily: {
        'serif': ['ui-serif', 'Georgia'],
        'display': ['Oswald', ],
      }
    },
  },
  plugins: [],
};
export default config;
