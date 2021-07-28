import { createSlice } from '@reduxjs/toolkit';
import {
    DEFAULT_USER_ERROR_MESSAGES_FULFILLED,
    DEFAULT_UNDEFINED_ERROR,
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
            state.error = initialState.error;
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

export const { fetch, signInRequest, signOutRequest, setErrorMessage, setAuth } = userReducer.actions;

export const UserReducer = userReducer.reducer;