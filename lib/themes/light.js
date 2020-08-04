const base = require("./base");
module.exports = {
  ...base,
  theme: {
    ...base.theme,
    colors: {
      primaryColor: {
        100: "#1089ff",
        200: "#3700b3",
      },
      secondaryColor: {
        100: "#018786",
        200: "#018786",
      },
      auxColors: {},

      positiveColor: "#06a77d",
      negative: "#e63946",
      warn: "#f4a548",
      yellow: "#eec200",

      transparentColor: "transparent",
      blackColor: "#000",
      whiteColor: "#fff",

      grayColor: {
        100: "#f7fafc",
        200: "#edf2f7",
        300: "#e2e8f0",
        400: "#cbd5e0",
        500: "#a0aec0",
        600: "#718096",
        700: "#4a5568",
        800: "#2d3748",
        900: "#1a202c",
      },
    },
    backgroundColor: (theme) => {
      const { grayColor, ...colors } = theme("colors");
      return {
        ...colors,
        canvasColor: "#f5f5f5",
        whiteColor: "#fff",
        darkColor: "#000000",
        surfaceColor: "#000000",
      };
    },
    textColor: (theme) => ({
      ...theme("colors"),

      onSurfaceColor: {
        100: "#748898",
        200: "#214168",
      },
      onBackgroundColor: "#214168",
      onPrimaryColor: "#ffffff",
      onSecondaryColor: "#214168",
      disabledColor: "rgba(0,0,0,.2)",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
  },
};
