import { createSlice } from '@reduxjs/toolkit';
import {
    DEFAULT_USER_ERROR_MESSAGES_FULFILLED,
    DEFAULT_USER_ERROR_MESSAGES_REJECTED,
} from '@src/constants';

export type userInitialStateType = {
    token: string;
    email: string;
    isFetching: boolean;
    error: string;
    uid: string;
};

export const initialState: userInitialStateType = {
    token: '',
    email: '',
    isFetching: false,
    error: '',
    uid: '',
};

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetch(state) {
            state.isFetching = true;
        },
        signInRequest(state, action) {
            if (action.payload) {
                const { refreshToken, email, uid } = action.payload;
                state.token = refreshToken;
                state.email = email;
                state.uid = uid;
            } else {
                state.error = DEFAULT_USER_ERROR_MESSAGES_FULFILLED;
            }
            state.isFetching = initialState.isFetching;
        },
        signOutRequest(state) {
            state.token = initialState.token;
            state.email = initialState.email;
            state.isFetching = initialState.isFetching;
            state.error = initialState.error;
            state.uid = initialState.uid;
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

export const { fetch, signInRequest, signOutRequest, errorMessage } = userReducer.actions;

export const UserReducer = userReducer.reducer;