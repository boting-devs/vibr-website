module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        normal: ["Ubuntu", "sans-serif"],
      },
      colors: {
        bot: {
          100: "#FF00E1",
          200: "#DA00FF",
          300: "#8000FF",
          400: "#2500FF",
          500: "#008FFF",
        },
      },
      backgroundImage: { main: "url('/background.webp')" },
    },
  },
  plugins: [],
};
