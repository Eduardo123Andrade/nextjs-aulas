import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,jsx,tsx,mds}",
    "./src/components/**/*.{js,jsx,tsx,mds}",
    "./src/app/**/*.{js,jsx,tsx,mds}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config;
