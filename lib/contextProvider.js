import React from 'react';

import { create } from './utils/themeUtils';

import base from './.styles/styles-base.json';
import themes from './.styles/styles-themes.json';
export const ThemeContext = React.createContext({});

setTheme('light');
export let GetStyle, GetColor;

function setTheme(themeName) {
    let themeObject = {}; //  getStyle, getColor;
    if (themes[themeName]) {
        themeObject = create({ ...base, ...themes[themeName] });
    }
    GetStyle = themeObject.getStyle;
    GetColor = themeObject.getColor;
    return themeObject;
}

export const ThemeContextProvider = ({ children, value = 'light' }) => {
    let initialState = { ...setTheme(value), theme: value };

    // function setTheme(themeName) {
    //     let themeObject = {}; //  getStyle, getColor;
    //     // const themesObj = themes.default;
    //     if (themes[themeName]) {
    //         themeObject = create({ ...base, ...themes[themeName] });
    //     }
    //     return themeObject;
    // }

    const reducer = (state, action) => {
        if (!action) {
            return state;
        }

        if (state.theme != action.name || !Object.keys(state).length) {
            state = { ...state, ...setTheme(action.name), theme: action.name };
        }
        return state;

    }

    const [state, dispatch] = React.useReducer(reducer, initialState);


    return (
        <ThemeContext.Provider value={{ ...initialState, ...state, changeTheme: dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}
