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
    extend: {
      animation: {
        flip: "flip 0.6s ease-in-out",
        flipOut: "flipOut 6s ease-in-out",
        hideVideo: "hideVideo 0.6s ease-in-out",
        navbarAni: "navbarAni 0.6s ease-in-out",
        upAni: "upAni 0.6s ease-in-out",
        opaAni: "opaAni 0.6s ease-in-out",
        sideBarAni: "sideBarAni 0.6s ease-in-out",
      },
      keyframes: {
        sideBarAni: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
        opaAni: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        upAni: {
          "0%": { transform: "translateY(90px)" },
          "100%": { transform: "translateY(0px)" },
        },
        navbarAni: {
          "0%": { transform: "translateY(-50px)" },
          "100%": { transform: "translateY(0px)" },
        },
        hideVideo: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        flip: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        flipOut: {
          "0%": { display: "none" },
          "100%": { display: "auto" },
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};
