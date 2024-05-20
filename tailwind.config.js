import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", flowbite.content()],
  theme: {
    colors: {
      themebg: {
        light: "#ffffff",
        DEFAULT: "#000000",
        dark: "#000000",
      },
      themeText: {
        light: "#000000",
        DEFAULT: "#ffffff",
        dark: "#ffffff",
      },
      primary1: {
        light: "#0ea5ea",
        DEFAULT: "#0ea5ea",
        dark: "#0ea5ea",
      },
      primary2: {
        light: "#0bd1d1",
        DEFAULT: "#0bd1d1",
        dark: "#0bd1d1",
      },
      primary3: {
        light: "#0ea5ea",
        DEFAULT: "#0ea5ea",
        dark: "#0ea5ea",
      },
      borderTheme: {
        dark: "#6765654a",
        default: "#6765654a",
        light: "#d1d5db40",
      },
    },
    extend: {},
  },
  plugins: [flowbite.plugin()],
};
