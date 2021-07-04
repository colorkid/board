import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { afterEach, beforeEach, expect, it } from '@jest/globals';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ModalContainer from '@src/components/Modal/ModalContainer';
import { SPRINT_MODAL } from '@src/constants';
import App from '@src/components/App';
import { UserReducer } from '@src/redux/user/userReducer';
import { UiReducer } from '@src/redux/ui/uiReducer';

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

describe('Modal ', () => {
    it('Modal render', async () => {
        const mockStore = configureStore();

        const initialState = {
            ui: {
                isModalVisible: SPRINT_MODAL,
            },
        };

        const store = mockStore(initialState);

        await act(async () => {
            render(
                <Provider store={store}>
                    <ModalContainer />
                </Provider>,
                container
            );
        });

        expect(container.querySelector('[data-testid="modal"]')).toBeTruthy();
    });

    it('Render on click', async () => {
        const mockStore = configureStore();

        const initialState = {
            user: UserReducer,
            ui: UiReducer,
        }

        const store = mockStore(initialState);

        await act(async () => {
            render(
                <Provider store={store}>
                    <App />
                </Provider>,
                container
            );
        });

        const buttonSprintModal = container.querySelector(`[data-testid='${SPRINT_MODAL}']`);

        act(() => {
            buttonSprintModal.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(container.querySelector('[data-testid="modal"]')).toBeTruthy();
    });
});