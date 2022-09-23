module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        normal: ["Ubuntu", "sans-serif"],
      },
      colors: {
        "custom-purple": "#8000FF",
        "custom-blue": "#2500FF",
        "hot-magenta": "#FF00E1",
        "light-purple": "#DA00FF",
        home: "#272934",
      },
    },
  },
  plugins: [],
};
