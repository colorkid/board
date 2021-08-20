import { createSlice } from '@reduxjs/toolkit';
import { PaletteType } from '@material-ui/core';

export type uiInitialStateType = {
    isModalVisible: string;
    isShowedMobileDrawer: boolean;
    theme: PaletteType | undefined;
};

export const initialState: uiInitialStateType = {
    isModalVisible: '',
    isShowedMobileDrawer: false,
    theme: undefined,
};

const uiReducer = createSlice({
    name: 'ui',
    initialState,
    reducers: {
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
    },
});

export const {
    showModal,
    hideModal,
    toggleShowedMobileDrawer,
    toggleTheme,
} = uiReducer.actions;

export const UiReducer = uiReducer.reducer;
