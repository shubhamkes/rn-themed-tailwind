import React, { useEffect } from 'react';
import AsyncStorage from "@react-native-community/async-storage";

import { create } from './utils/themeUtils';

import base from './.styles/styles-base.json';
import themes from './.styles/styles-themes.json';

export const ThemeContext = React.createContext({});

setTheme('light');
export let GetStyle, GetColor;

const THEME_ASYNCSTORAGE = "@THEME_ASYNCSTORAGE";

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

    useEffect(() => {
        // fetch last loaded theme
        AsyncStorage.getItem(THEME_ASYNCSTORAGE).then(lastTheme => {
            // if last theme defers than default, update the theme
            if (lastTheme != state.theme) {
                dispatch({ name: lastTheme });
            }
        })
    }, [])

    const reducer = (state, action) => {
        if (!action) {
            return state;
        }

        if (state.theme != action.name || !Object.keys(state).length) {
            AsyncStorage.setItem(THEME_ASYNCSTORAGE, action.nam);
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
