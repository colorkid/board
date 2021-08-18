import React, { ReactElement } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import App from './App';
import useCurrentTheme from '@src/hooks/useCurrentTheme';

const AppContainer = (): ReactElement => {
    const currentTheme = useCurrentTheme();

    return (
        <MuiThemeProvider theme={currentTheme}>
            <App />
        </MuiThemeProvider>
    );
};

export default AppContainer;
