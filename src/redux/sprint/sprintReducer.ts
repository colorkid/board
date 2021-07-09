import { SPRINT_BACKLOG } from '@src/constants';
import { createSlice } from '@reduxjs/toolkit';

export type SprintItemType = {
    [key: string]: {
        number: string;
        dates: string;
    };
};

export type SprintInitialStateType = {
    list: SprintItemType;
    activeSprint: string;
};

export const initialState = {
    list: {
        [SPRINT_BACKLOG]: {
            number: SPRINT_BACKLOG,
            dates: '',
        },
    },
    activeSprint: '',
} as SprintInitialStateType;

const sprintReducer = createSlice({
    name: 'sprints',
    initialState,
    reducers: {
        addSprint(state, action) {
            const { payload } = action;
            state.list[payload.id] = {
                number: payload.number,
                dates: payload.dates,
            };
        },
        toggleActiveSprint(state, action) {
            const { payload } = action;
            state.activeSprint = payload.id || initialState.activeSprint;
        },
        deleteSprint(state, action) {
            const { payload } = action;
            delete state.list[payload.id];
        },
    },
});

export const { addSprint, toggleActiveSprint, deleteSprint } = sprintReducer.actions;

export const SprintReducer = sprintReducer.reducer;