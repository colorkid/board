import { SPRINT_BACKLOG } from '@src/constants';
import { createSlice } from '@reduxjs/toolkit';

export type sprintInitialStateType = {
    [key: string]: {
        number: string | number;
        dates: string;
        isActive: boolean;
    };
};

export const initialState = {
    [SPRINT_BACKLOG]: {
        number: SPRINT_BACKLOG,
        dates: '',
        isActive: false,
    },
} as sprintInitialStateType;

const sprintReducer = createSlice({
    name: 'sprints',
    initialState,
    reducers: {
        addSprint(state, action) {
            const { payload } = action;
            state[payload.id] = {
                number: payload.number,
                dates: payload.dates,
                isActive: false,
            };
        },
        toggleActiveSprint(state, action) {
            const { payload } = action;
            state[payload.id].isActive = payload.state;
        },
        deleteSprint(state, action) {
            const { payload } = action;
            delete state[payload.id];
        },
    },
});

export const { addSprint, toggleActiveSprint, deleteSprint } = sprintReducer.actions;

export const SprintReducer = sprintReducer.reducer;