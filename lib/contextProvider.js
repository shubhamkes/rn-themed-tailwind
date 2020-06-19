import React from 'react';

import { create } from './utils/themeUtils';

import base from './.styles/styles-base.json';
import themes from './.styles/styles-themes.json';
export const ThemeContext = React.createContext({});

export const ThemeContextProvider = ({ children, value = 'light' }) => {
    let initialState = { ...setTheme(value), theme: value };

    function setTheme(themeName) {
        let themeObject = {}; //  getTheme, getColor;

        if (themes[themeName]) {
            themeObject = create({ ...base, themeName: themes[themeName] });
        }
        return themeObject;
    }

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
