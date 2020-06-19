
const base = require('./base');
module.exports = {
    ...base,
    theme: {
        ...base.theme,
        colors: {
            primaryColor: {
                100: '#568DFE',
                200: '#3700b3'
            },
            secondaryColor: {
                100: '#03dac6',
                200: '#03dac6',
            }
        },
        backgroundColor: (theme) => ({
            ...theme('colors'),
            'whiteColor': '#121212',
            'darkColor': '#121212',
            'surfaceColor': 'rgba(118, 208, 208, 0.3)',
        }),
        textColor: theme => ({
            ...theme('colors'),
            onBackgroundColor: '#f9aa33',
            onSurfaceColor: '#fff',
            onPrimaryColor: '#ffffff',
            onSecondaryColor: '#ffffff'
        })
    }
}
