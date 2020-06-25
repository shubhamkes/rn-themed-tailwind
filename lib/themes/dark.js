
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
            canvasColor: '#121212',
            whiteColor: '#fff',
            darkColor: '#121212',
            surfaceColor: 'rgba(118, 208, 208, 0.3)',
        }),
        textColor: theme => ({
            ...theme('colors'),
            onBackgroundColor: '#f9aa33',
            onSurfaceColor: '#fff',
            onPrimaryColor: '#ffffff',
            onSecondaryColor: '#ffffff',
            disabledColor: 'rgba(0,0,0,.2)'
        }),
        borderColor: theme => ({
            ...theme('colors'),
            primary: '#3490dc',
            secondary: '#ffed4a',
            danger: '#e3342f',
        })
    }
}
