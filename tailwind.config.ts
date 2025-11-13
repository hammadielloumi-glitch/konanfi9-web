import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        muted: {
          DEFAULT: "#f5f5f5",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;