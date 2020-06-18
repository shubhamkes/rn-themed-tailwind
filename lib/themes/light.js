
module.exports = {
    theme: {
        colors: {
            primaryColor: {
                100: '#2a67f4',
                200: '#3700b3'
            },
            secondaryColor: {
                100: '#4f79ff',
                200: '#018786',
            },
        },
        backgroundColor: (theme) => ({
            ...theme('colors'),
            'whiteColor': '#f5f5f5',
            'darkColor': '#000000',
            'surfaceColor': '#000000',
        }),
        textColor: theme => ({
            ...theme('colors'),
            onBackgroundColor: '#000000',
            onSurfaceColor: '#000000',
            onPrimaryColor: '#ffffff',
            onSecondaryColor: '#000000'
        })
    }
}