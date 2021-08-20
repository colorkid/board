import React, { ReactElement, useEffect } from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import App from './App';
import useCurrentTheme from '@src/hooks/useCurrentTheme';
import { LocalStorageApi } from '@src/api/LocalStorageApi';
import { ON_BOARDING_STEP_ONE } from '@src/constants';
import { useAppDispatch } from '@src/redux/store';
import { showModal } from '@src/redux/ui/uiReducer';

const AppContainer = (): ReactElement => {
    const dispatch = useAppDispatch();
    const currentTheme = useCurrentTheme();

    const showOnBoarding = () => {
        dispatch(showModal(ON_BOARDING_STEP_ONE));
    };

    useEffect(() => {
        if (!LocalStorageApi.getLocal(ON_BOARDING_STEP_ONE)) {
            showOnBoarding();
        }
    });

    return (
        <MuiThemeProvider theme={currentTheme}>
            <App />
        </MuiThemeProvider>
    );
};

export default AppContainer;
