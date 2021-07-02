import { it } from '@jest/globals';
import {
    DEFAULT_ERROR_MESSAGES,
    errorMessage,
    fetch,
    signInRequest,
    signOutRequest,
    UserReducer,
} from '@src/redux/user/userReducer';

describe('userReducer ', () => {
    it('SignIn fulfilled', () => {
        const initialState = { token: '', email: '', isFetching: false, error: '' };
        const payload = {
            refreshToken: 'refreshToken',
            email: 'example@example.example',
        };

        const action = {
            type: signInRequest,
            payload: {
                user: payload,
            },
        };

        const expectedState = {
            token: payload.refreshToken,
            email: payload.email,
            isFetching: initialState.isFetching,
            error: initialState.error,
        };

        const state = UserReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('SignIn fulfilled with error', () => {
        const initialState = { token: '', email: '', isFetching: false, error: '' };

        const action = {
            type: signInRequest,
        };

        const expectedState = { ...initialState };
        expectedState.error = DEFAULT_ERROR_MESSAGES.fulfilled;

        const state = UserReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('Fetch', () => {
        const initialState = { token: '', email: '', isFetching: false, error: '' };

        const action = {
            type: fetch,
        };

        const expectedState = {
            token: initialState.token,
            email: initialState.email,
            isFetching: true,
            error: initialState.error,
        };

        const state = UserReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('Error message', () => {
        const initialState = { token: '', email: '', isFetching: false, error: '' };
        const payload = 'Test Error';

        const action = {
            type: errorMessage,
            payload,
        };

        const expectedState = {
            token: initialState.token,
            email: initialState.email,
            isFetching: initialState.isFetching,
            error: payload,
        };

        const state = UserReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('Default error message', () => {
        const initialState = { token: '', email: '', isFetching: false, error: '' };

        const action = {
            type: signInRequest,
        };

        const expectedState = {
            token: initialState.token,
            email: initialState.email,
            isFetching: initialState.isFetching,
            error: DEFAULT_ERROR_MESSAGES.fulfilled,
        };

        const state = UserReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('SignOut fulfilled', () => {
        const initialState = {
            token: 'token',
            email: 'example@example.example',
            isFetching: false,
            error: '',
        };

        const action = {
            type: signOutRequest,
        };

        const expectedState = {
            token: '',
            email: '',
            isFetching: initialState.isFetching,
            error: initialState.error,
        };

        const state = UserReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });
});
