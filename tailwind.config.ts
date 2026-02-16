import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sts: {
          bg: "#F5F3EF",
          text: "#1A1A1A",
          sectionA: "#E8E4DE",
          sectionB: "#E3DED7",
          accent: "#7D8C6F",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

