const base = require('./base');
module.exports = {
    ...base,
    theme: {
        ...base.theme,
        colors: {
            primaryColor: {
                100: '#2a67f4',
                200: '#3700b3'
            },
            secondaryColor: {
                100: '#018786',
                200: '#018786',
            },

        },
        backgroundColor: (theme) => ({
            ...theme('colors'),
            canvasColor: '#f5f5f5',
            whiteColor: '#fff',
            darkColor: '#000000',
            surfaceColor: '#000000',
        }),
        textColor: theme => ({
            ...theme('colors'),
            onBackgroundColor: '#000000',
            onSurfaceColor: '#000000',
            onPrimaryColor: '#ffffff',
            onSecondaryColor: '#000000',
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