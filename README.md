# React native themed tailwind 

Highly customizable small size library for providing support for theming along with tailwind and some builtin components!

## Motivation for this library

Since there is no library(till its first puslish) available to provide theming support with tailwind

This library provides out of box support for theming.


## Getting Started

```bash
$ yarn add rn-themed-tailwind
```

*or via

```bash
$ npm i rn-themed-tailwind
```

### Usage:

```js
// wrap your root level component with ThemeContextProvider
import { ThemeContextProvider, ThemeContext } from 'rn-themed-tailwind';

const RootApp = () => {
    return (
        <ThemeContextProvider value={'light'}>>
                <Landing />
        </ThemeContextProvider >
    )
}

export default Landing = () => {
    const { getTheme, changeTheme, theme, getColor } = useContext(ThemeContext);

    return (
        <View style={{ flex: 1, ...getTheme('bg-primaryColor-100') }}>
            <Text style={getTheme('p-8 m-8')}>Hey</Text>
            <Button title="Change theme" onPress={() => changeTheme({ name: theme == 'dark' ? 'light' : 'dark' })}></Button>
        </View>
    )
}
```


### Apis

useContext returns { getTheme, changeTheme, theme, getColor }

* getTheme(styles: string) 

ex
```js
getTheme('p-8 m-8')

```

* changeTheme({ name: [themeName] }) 
ex
```js
changeTheme({ name: 'dark' }) 

```

* theme // string: enum of available themes

* getColor // Pass the name of a color (e.g. "primaryColor-100") and receive a color value (e.g. "#2a67f4")


### light theme file

```js
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
```

### dark theme file

```js
theme: {
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
```

### Updating theme file or tailwind configuration

* update theme files then run 

```bin
npx create-theme
```
