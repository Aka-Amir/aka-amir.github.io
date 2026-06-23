import type { Config } from "tailwindcss"
import animate from "tailwindcss-animate"

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [animate],
} satisfies Config

