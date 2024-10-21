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
        'image': "url('/bg2.webp')",
        'aboutImage': "url('/me2.jpg')",
       
      },
      Image:{
        'aboutImage': "url('/me2.jpg')",
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      margin: {
        '125px': '125px',
      },
      fontFamily: {
        'serif': ['ui-serif', 'Georgia'],
        'display': ['Oswald', ],
      },
      screens: {
        'ss': '320px',
      },
    },
  },
  plugins: [],
};
export default config;
