import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_UNDEFINED_ERROR } from '@src/constants';
import { PaletteType } from '@material-ui/core';

export type uiInitialStateType = {
    isModalVisible: string;
    isShowedMobileDrawer: boolean;
    theme: PaletteType | undefined;
    isFetching: boolean;
    error: string;
};

export const initialState: uiInitialStateType = {
    isModalVisible: '',
    isShowedMobileDrawer: false,
    theme: undefined,
    isFetching: false,
    error: '',
};

const uiReducer = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        fetch(state) {
            state.isFetching = true;
            state.error = initialState.error;
        },
        showModal(state, action) {
            const { payload } = action;
            state.isModalVisible = payload;
        },
        hideModal(state) {
            state.isModalVisible = initialState.isModalVisible;
        },
        toggleShowedMobileDrawer(state, action) {
            const { payload } = action;
            state.isShowedMobileDrawer = payload;
        },
        toggleTheme(state, action) {
            const { payload } = action;
            state.theme = payload;
        },
        setErrorMessage(state, action) {
            if (action.payload) {
                state.error = action.payload;
            } else {
                state.error = DEFAULT_UNDEFINED_ERROR;
            }
            state.isFetching = initialState.isFetching;
        },
    },
});

export const {
    showModal,
    hideModal,
    toggleShowedMobileDrawer,
    toggleTheme,
    setErrorMessage,
    fetch,
} = uiReducer.actions;

export const UiReducer = uiReducer.reducer;
