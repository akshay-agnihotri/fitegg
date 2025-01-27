/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bigshoulders: ["Big Shoulders Display", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
        ultra: ["Ultra", "serif"],
        slackey: ["Slackey", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        lora: ["Lora", "serif"],
        acme: ["Acme", "sans-serif"],
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180.33deg, #FFFFFF -6.69%, #FBFF28 203.31%)",
      },
    },
  },
  plugins: [],
};
