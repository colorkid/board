import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { afterEach, beforeEach, expect, it } from '@jest/globals';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { SPRINT_BACKLOG } from '@src/constants';
import SprintListContainer from '@src/components/SprintList/SprintListContainer';

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

describe('SprintList ', () => {
    it('SprintList render', async () => {
        const mockStore = configureStore();

        const initialState = {
            sprints: {
                list: {
                    [SPRINT_BACKLOG]: {
                        number: SPRINT_BACKLOG,
                        dates: '',
                    },
                    '1': {
                        number: '7977',
                        dates: '21.05.1987',
                    },
                },
            },
        };

        const store = mockStore(initialState);

        await act(async () => {
            render(
                <Provider store={store}>
                    <SprintListContainer />
                </Provider>,
                container
            );
        });

        expect(container.querySelectorAll('[data-testid="sprint"]')[1]).toBeTruthy();
    });
});
