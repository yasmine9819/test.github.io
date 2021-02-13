module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      logo: ["Brush Script Std"],
      menuLink: ["'Raleway', sans-serif"],
      title: ["Book Antiqua"],
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": { min: "1536px" },
    },
    extend: {
      transitionProperty: {
        width: "width",
      },
    },
  },
  variants: {
    extend: {
      width: ["hover"],
      visibility: ["hover"],
    },
  },
  plugins: [],
};
