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
                teal: "#E0F2F1",
                red: "#FFEBEE",
                cyan: "#E0F7FA",
                blue: "#E3F2FD",
                green: "#E9F4F4",
                lime: "#F9FBE7",
                orange: "#FFF3E0",
                yellow: "#FFFDE7",
            },

            positiveColor: "#06a77d",
            negativeColor: "#e63946",
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
                disabledColor: '#DDE2E8',
                canvasColor: "#121212",
                whiteColor: "#fff",
                darkColor: "#121212",
                // surfaceColor: "rgba(118, 208, 208, 0.3)",
            };
        },
        textColor: (theme) => ({
            ...theme("colors"),

            disabledColor: '#B8C1CB',
            onSurfaceColor: {
                100: "#748898",
                200: "#214168",
            },

            surfaceColor: {
                white: "#748898",
                teal: "#26a69a",
                red: "#ef5350",
                cyan: "#26c6da",
                blue: "#42a5f5",
                green: "#66bb6a",
                lime: "#d4e157",
                orange: "#ffa726",
                yellow: "#ffee58",
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
