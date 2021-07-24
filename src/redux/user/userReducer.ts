import { createSlice } from '@reduxjs/toolkit';
import {
    DEFAULT_USER_ERROR_MESSAGES_FULFILLED,
    DEFAULT_USER_ERROR_MESSAGES_REJECTED,
    FALSE,
    NOT_CHECK_YET,
    TRUE,
} from '@src/constants';

export type userInitialStateType = {
    isAuth: string;
    email: string;
    isFetching: boolean;
    error: string;
    uid: string;
};

export const initialState: userInitialStateType = {
    isAuth: NOT_CHECK_YET,
    email: '',
    isFetching: false,
    error: '',
    uid: '',
};

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuth(state, action) {
            const { payload } = action;
            state.isAuth = payload;
        },
        fetch(state) {
            state.isFetching = true;
        },
        signInRequest(state, action) {
            if (action.payload) {
                const { email, uid } = action.payload;
                state.email = email;
                state.uid = uid;
                state.isAuth = TRUE;
            } else {
                state.error = DEFAULT_USER_ERROR_MESSAGES_FULFILLED;
            }
            state.isFetching = initialState.isFetching;
        },
        signOutRequest(state) {
            state.email = initialState.email;
            state.isFetching = initialState.isFetching;
            state.error = initialState.error;
            state.uid = initialState.uid;
            state.isAuth = FALSE;
        },
        errorMessage(state, action) {
            if (action.payload) {
                state.error = action.payload;
            } else {
                state.error = DEFAULT_USER_ERROR_MESSAGES_REJECTED;
            }
            state.isFetching = initialState.isFetching;
        },
    },
});

export const { fetch, signInRequest, signOutRequest, errorMessage, setAuth } = userReducer.actions;

export const UserReducer = userReducer.reducer;