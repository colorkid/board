import React, { ReactElement } from 'react';
import ThemeToggle from './ThemeToggle';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { getThemeSelector } from '@src/redux/selectors';
import { toggleTheme } from '@src/redux/ui/uiReducer';
import { DARK, LIGHT } from '@src/constants';

const ThemeToggleContainer = (): ReactElement => {
    const theme = useAppSelector((state: RootState) => getThemeSelector(state));
    const dispatch = useAppDispatch();

    const isDarkTheme = theme === DARK;

    const toggleDarkTheme = () => {
        dispatch(toggleTheme(isDarkTheme ? LIGHT : DARK));
    };

    return <ThemeToggle toggleDarkTheme={toggleDarkTheme} isDarkTheme={isDarkTheme} />;
};

export default ThemeToggleContainer;
