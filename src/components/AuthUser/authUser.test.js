import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import AuthUserContainer from '../../containers/AuthUserContainer';
import { afterEach, beforeEach, expect, it } from '@jest/globals';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { LOG_OUT, SIGN_IN, SIGN_UP } from '@src/constants';

let container;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

describe('Auth User render ', () => {
    it('user is authorized', async () => {
        const mockStore = configureStore();

        const initialState = {
            user: {
                token: 'gfgfdg55gfsdgfd',
                isFetching: false,
                email: 'email@email.com',
                error: '',
            },
        };

        const store = mockStore(initialState);

        await act(async () => {
            render(
                <Provider store={store}>
                    <AuthUserContainer />
                </Provider>,
                container
            );
        });

        expect(container.querySelector('[data-testid="userEmail"]').textContent).toBe(
            initialState.user.email
        );
        expect(container.querySelector('button').textContent).toBe(LOG_OUT);
    });

    it('user is not authorized', async () => {
        const mockStore = configureStore();

        const initialState = {
            user: {
                token: '',
                isFetching: false,
                email: '',
                error: '',
            },
        };

        const store = mockStore(initialState);

        await act(async () => {
            render(
                <Provider store={store}>
                    <AuthUserContainer />
                </Provider>,
                container
            );
        });

        expect(container.querySelector('[data-testid="authForm"]')).toBeTruthy();
        expect(container.querySelector('button').textContent).toBe(SIGN_IN);
    });

    it('user is not authorized sign up', async () => {
        const mockStore = configureStore();

        const initialState = {
            user: {
                token: '',
                isFetching: false,
                email: '',
                error: '',
            },
        };

        const store = mockStore(initialState);

        await act(async () => {
            render(
                <Provider store={store}>
                    <AuthUserContainer />
                </Provider>,
                container
            );
        });

        const buttonSignUp = document.querySelector(`[data-testid='${SIGN_UP}']`);

        act(() => {
            buttonSignUp.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(container.querySelector('button').textContent).toBe(SIGN_UP);
    });

    it('is fetching', async () => {
        const mockStore = configureStore();

        const initialState = {
            user: {
                token: '',
                isFetching: true,
                email: '',
                error: '',
            },
        };

        const store = mockStore(initialState);

        await act(async () => {
            render(
                <Provider store={store}>
                    <AuthUserContainer />
                </Provider>,
                container
            );
        });

        expect(container.querySelector('[role="progressbar"]')).toBeTruthy();
    });

    it('error message', async () => {
        const mockStore = configureStore();

        const initialState = {
            user: {
                token: '',
                isFetching: false,
                email: '',
                error: 'Test error',
            },
        };

        const store = mockStore(initialState);

        await act(async () => {
            render(
                <Provider store={store}>
                    <AuthUserContainer />
                </Provider>,
                container
            );
        });

        expect(container.querySelector('[data-testid="errorMessage"]').textContent).toBe(
            'Test error'
        );
    });
});
