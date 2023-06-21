/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: ({ theme }) => ({
      white: colors.white,
      black: colors.black,
      transparent: colors.transparent,
      currentColor: colors.currentColor,
      inherit: colors.inherit,
      purple: {
        100: "hsl(263, 84%, 11%)",
        200: "hsl(262, 80%, 19%)",
        300: "hsl(262, 76%, 28%)",
        400: "hsl(262, 73%, 38%)",
        500: "hsl(262, 75%, 47%)",
        600: "hsl(262, 77%, 61%)",
        700: "hsl(262, 83%, 70%)",
        800: "hsl(262, 85%, 79%)",
        900: "hsl(262, 90%, 93%)",
      },
      teal: {
        100: "hsl(206, 87%, 14%)",
        200: "hsl(203, 68%, 23%)",
        300: "hsl(201, 56%, 30%)",
        400: "hsl(200, 55%, 41%)",
        500: "hsl(200, 55%, 58%)",
        600: "hsl(199, 55%, 63%)",
        700: "hsl(197, 55%, 68%)",
        800: "hsl(196, 67%, 80%)",
        900: "hsl(195, 80%, 90%)",
      },
      grey: {
        100: "hsl(243, 31%, 10%)",
        200: "hsl(241, 25%, 14%)",
        300: "hsl(240, 23%, 22%)",
        400: "hsl(238, 18%, 35%)",
        500: "hsl(238, 17%, 45%)",
        600: "hsl(237, 16%, 58%)",
        700: "hsl(235, 23%, 68%)",
        800: "hsl(233, 24%, 78%)",
        900: "hsl(230, 30%, 93%)",
      },
      red: {
        100: "hsl(348, 85%, 14%)",
        200: "hsl(350, 82%, 23%)",
        300: "hsl(353, 80%, 30%)",
        400: "hsl(355, 77%, 41%)",
        500: "hsl(356, 75%, 53%)",
        600: "hsl(358, 80%, 65%)",
        700: "hsl(360, 87%, 76%)",
        800: "hsl(360, 90%, 86%)",
        900: "hsl(360, 100%, 93%)",
      },
    }),
  },
  plugins: [],
};
