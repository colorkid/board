import React, { ReactElement } from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import { DARK, DARK_TOGGLE_TXT } from '@src/constants';

interface IThemeToggle {
    toggleDarkTheme: () => void;
    isDarkTheme: boolean;
}

const ThemeToggle = (props: IThemeToggle): ReactElement => {
    const { toggleDarkTheme, isDarkTheme } = props;

    const switchHandle = () => {
        toggleDarkTheme();
    };

    return (
        <FormControlLabel
            control={<Switch checked={isDarkTheme} onChange={switchHandle} name={DARK} />}
            label={DARK_TOGGLE_TXT}
        />
    );
};

export default ThemeToggle;