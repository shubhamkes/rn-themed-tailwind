const base = require("./base");
module.exports = {
    ...base,
    theme: {
        ...base.theme,
        colors: {
            primaryColor: {
                100: "#B8E5FF",
                200: "#8AD1FF",
                300: "#5CBBFF",
                400: "#34A3FF",
                500: "#1089ff",
                600: "#0074E0",
                700: "#0060C1"
            },
            secondaryColor: {
                100: "#03dac6",
                200: "#03dac6",
            },

            surfaceColor: {
                white: "#ffffff",
                teal: "#B2DFDB",
                red: "#FFCDD2",
                cyan: "#B2EBF2",
                blue: "#B3E5FC",
                green: "#C8E6C9",
                lime: "#F0F4C3",
                orange: "#FFE0B2",
                yellow: "#FFF9C4"
            },

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
                canvasColor: "#121212",
                whiteColor: "#fff",
                darkColor: "#121212",
                // surfaceColor: "rgba(118, 208, 208, 0.3)",
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
            primaryColor: "#3490dc",
            secondaryColor: "#ffed4a",
            dangerColor: "#e3342f",
        }),
    },
};
