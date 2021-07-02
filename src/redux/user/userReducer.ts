import { createSlice } from '@reduxjs/toolkit';

export const DEFAULT_ERROR_MESSAGES = {
    fulfilled: 'User data is not defined',
    rejected: 'Error is undefined',
};

export type userInitialStateType = {
    token: string;
    email: string | null;
    isFetching: boolean;
    error: string;
};

export const initialState = {
    token: '',
    email: '',
    isFetching: false,
    error: '',
} as userInitialStateType;

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        fetch(state) {
            state.isFetching = true;
        },
        signInRequest(state, action) {
            if (action.payload) {
                const { refreshToken, email } = action.payload.user;
                state.token = refreshToken;
                state.email = email;
            } else {
                state.error = DEFAULT_ERROR_MESSAGES.fulfilled;
            }
            state.isFetching = initialState.isFetching;
        },
        signOutRequest(state) {
            state.token = initialState.token;
            state.email = initialState.email;
            state.isFetching = initialState.isFetching;
            state.error = initialState.error;
        },
        errorMessage(state, action) {
            if (action.payload) {
                state.error = action.payload;
            } else {
                state.error = DEFAULT_ERROR_MESSAGES.rejected;
            }
            state.isFetching = initialState.isFetching;
        },
    },
});

export const { fetch, signInRequest, signOutRequest, errorMessage } = userReducer.actions;

export const UserReducer = userReducer.reducer;