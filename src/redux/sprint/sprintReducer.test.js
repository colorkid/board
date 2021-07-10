import { it } from '@jest/globals';
import {
    addSprint,
    deleteSprint,
    SprintReducer,
    toggleActiveSprint,
} from '@src/redux/sprint/sprintReducer';
import { SPRINT_BACKLOG } from '@src/constants';

describe('sprintReducer ', () => {
    it('Create sprint', () => {
        const initialState = {
            list: {
                [SPRINT_BACKLOG]: {
                    number: SPRINT_BACKLOG,
                    dates: '',
                },
            },
        };

        const payload = {
            id: 'SPRINT_ID_8822781',
            number: '7977',
            dates: '21.05.1987',
        };

        const action = {
            type: addSprint,
            payload,
        };

        const expectedState = {
            ...initialState,
            list: {
                ...initialState.list,
                SPRINT_ID_8822781: {
                    number: '7977',
                    dates: '21.05.1987',
                },
            },
        };

        const state = SprintReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('Delete sprint', () => {
        const initialState = {
            list: {
                [SPRINT_BACKLOG]: {
                    number: SPRINT_BACKLOG,
                    dates: '',
                },
                SPRINT_ID_8822781: {
                    number: '7977',
                    dates: '21.05.1987',
                    isActive: false,
                },
            },
        };

        const payload = 'SPRINT_ID_8822781';

        const action = {
            type: deleteSprint,
            payload,
        };

        const expectedState = {
            ...initialState,
            list: {
                [SPRINT_BACKLOG]: {
                    number: SPRINT_BACKLOG,
                    dates: '',
                },
            },
        };

        const state = SprintReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('Set active sprint', () => {
        const initialState = {
            list: {
                [SPRINT_BACKLOG]: {
                    number: SPRINT_BACKLOG,
                    dates: '',
                },
                SPRINT_ID_8822781: {
                    number: '7977',
                    dates: '21.05.1987',
                },
            },
            activeSprint: '',
        };

        const payload = {
            id: 'SPRINT_ID_8822781',
        };

        const action = {
            type: toggleActiveSprint,
            payload,
        };

        const expectedState = {
            list: {
                [SPRINT_BACKLOG]: {
                    number: SPRINT_BACKLOG,
                    dates: '',
                },
                SPRINT_ID_8822781: {
                    number: '7977',
                    dates: '21.05.1987',
                },
            },
            activeSprint: 'SPRINT_ID_8822781',
        };

        const state = SprintReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });
});
