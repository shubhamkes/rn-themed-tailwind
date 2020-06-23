import React, { useContext } from 'react'
import { renderHook, act } from '@testing-library/react-hooks'

import { ThemeContext, ThemeContextProvider } from './contextProvider';

describe('style testing success case', () => {

    // Initialize library 
    const wrapper = ({ children }) => <ThemeContextProvider value={"light"}>{children}</ThemeContextProvider>

    const { result } = renderHook(() => useContext(ThemeContext), { wrapper });

    test('result object', () => {

        expect(result.current).toMatchObject({
            getTheme: expect.any(Function),
            getColor: expect.any(Function),
            getStyle: expect.any(Function),
            getTheme: expect.any(Function),
            changeTheme: expect.any(Function),
            theme: expect.any(String),
            // theme: 'light',
        });
    });

    test('gettheme', () => {
        const theme = result.current.getTheme('p-8 m-8');

        expect(theme).toMatchObject({
            paddingTop: 32,
            paddingRight: 32,
            paddingBottom: 32,
            paddingLeft: 32,
            marginTop: 32,
            marginRight: 32,
            marginBottom: 32,
            marginLeft: 32
        });
    });


    // act(() => {
    //         result.current.changeTheme({ name: 'dark' })
    //     });

    // test('change theme ', () => {

    //     console.log(result.current, "ult.current")
    //     expect(result.current.theme).toBe('dark')
    // })


});

