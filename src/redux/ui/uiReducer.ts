import { createSlice } from '@reduxjs/toolkit';

export type uiInitialStateType = {
    isModalVisible: string,
};

export const initialState = {
    isModalVisible: '',
} as uiInitialStateType;

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
        }
    },
});

export const { showModal, hideModal } = uiReducer.actions;

export const UiReducer = uiReducer.reducer;