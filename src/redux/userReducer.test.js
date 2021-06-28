import { it } from '@jest/globals';
import { UserReducer, DEFAULT_ERROR_MESSAGES, signIn, signOut } from '@src/redux/userReducer';

describe('userReducer ', () => {
    it('SignIn fulfilled', () => {
        const initialState = { token: '', email: '', isFetching: false, error: '' };
        const payload = {
            refreshToken: 'refreshToken',
            email: 'example@example.example',
        };

        const action = {
            type: signIn.fulfilled.type,
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
            type: signIn.fulfilled.type,
        };

        const expectedState = { ...initialState };
        expectedState.error = DEFAULT_ERROR_MESSAGES.fulfilled;

        const state = UserReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('SignIn pending', () => {
        const initialState = { token: '', email: '', isFetching: false, error: '' };

        const action = {
            type: signIn.pending.type,
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

    it('SignIn rejected', () => {
        const initialState = { token: '', email: '', isFetching: false, error: '' };
        const payload = 'Test Error';

        const action = {
            type: signIn.rejected.type,
            error: {
                message: payload,
            },
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

    it('SignIn rejected with unknown error', () => {
        const initialState = { token: '', email: '', isFetching: false, error: '' };

        const action = {
            type: signIn.rejected.type,
        };

        const expectedState = {
            token: initialState.token,
            email: initialState.email,
            isFetching: initialState.isFetching,
            error: DEFAULT_ERROR_MESSAGES.rejected,
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
            type: signOut.fulfilled.type,
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
