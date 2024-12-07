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
        primary:"#FFFFFF",
        primary1:"#363738",
        text:"#D37643",
        text1:"#7D8184",
        btn:"#000000",
        secondary:"#F5F5F5",
        secondary1:"#FEFAF1",
        secondary2:"#DB4444",
        btn1:"#00FF66",
        btn2:"#DB4444",
        hoverbtn1:"#E07575",
        hoverbtn2:"#A0BCE0",




        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
