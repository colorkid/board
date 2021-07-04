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
            [SPRINT_BACKLOG]: {
                number: SPRINT_BACKLOG,
                dates: '',
                isActive: false,
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
            SPRINT_ID_8822781: {
                number: '7977',
                dates: '21.05.1987',
                isActive: false,
            },
        };

        const state = SprintReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('Delete sprint', () => {
        const initialState = {
            [SPRINT_BACKLOG]: {
                number: SPRINT_BACKLOG,
                dates: '',
                isActive: false,
            },
            SPRINT_ID_8822781: {
                number: '7977',
                dates: '21.05.1987',
                isActive: false,
            },
        };

        const payload = {
            id: 'SPRINT_ID_8822781',
        };

        const action = {
            type: deleteSprint,
            payload,
        };

        const expectedState = {
            [SPRINT_BACKLOG]: {
                number: SPRINT_BACKLOG,
                dates: '',
                isActive: false,
            },
        };

        const state = SprintReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('Set active sprint', () => {
        const initialState = {
            [SPRINT_BACKLOG]: {
                number: SPRINT_BACKLOG,
                dates: '',
                isActive: false,
            },
            SPRINT_ID_8822781: {
                number: '7977',
                dates: '21.05.1987',
                isActive: false,
            },
        };

        const payload = {
            id: 'SPRINT_ID_8822781',
            state: true,
        };

        const action = {
            type: toggleActiveSprint,
            payload,
        };

        const expectedState = {
            [SPRINT_BACKLOG]: {
                number: SPRINT_BACKLOG,
                dates: '',
                isActive: false,
            },
            SPRINT_ID_8822781: {
                number: '7977',
                dates: '21.05.1987',
                isActive: true,
            },
        };

        const state = SprintReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });

    it('Set is not active sprint', () => {
        const initialState = {
            [SPRINT_BACKLOG]: {
                number: SPRINT_BACKLOG,
                dates: '',
                isActive: false,
            },
            SPRINT_ID_8822781: {
                number: '7977',
                dates: '21.05.1987',
                isActive: true,
            },
        };

        const payload = {
            id: 'SPRINT_ID_8822781',
            state: false,
        };

        const action = {
            type: toggleActiveSprint,
            payload,
        };

        const expectedState = {
            [SPRINT_BACKLOG]: {
                number: SPRINT_BACKLOG,
                dates: '',
                isActive: false,
            },
            SPRINT_ID_8822781: {
                number: '7977',
                dates: '21.05.1987',
                isActive: false,
            },
        };

        const state = SprintReducer(initialState, action);
        expect(state).toEqual(expectedState);
    });
});
