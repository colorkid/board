import { createSlice } from '@reduxjs/toolkit';

export type uiInitialStateType = {
    isModalVisible: string;
    isShowedMobileDrawer: boolean;
};

export const initialState: uiInitialStateType = {
    isModalVisible: '',
    isShowedMobileDrawer: false,
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
        }
    },
});

export const { showModal, hideModal, toggleShowedMobileDrawer } = uiReducer.actions;

export const UiReducer = uiReducer.reducer;
