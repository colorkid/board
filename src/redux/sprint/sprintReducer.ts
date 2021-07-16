import { SPRINT_BACKLOG } from '@src/constants';
import { createSlice } from '@reduxjs/toolkit';

export type SprintItemType = {
    number: string;
    dates: string;
};

export type SprintListType = {
    [key: string]: SprintItemType;
};

export type SprintInitialStateType = {
    list: SprintListType;
    activeSprint: string;
};

export const initialState = {
    list: {
        [SPRINT_BACKLOG]: {
            number: SPRINT_BACKLOG,
            dates: '',
        },
    },
    activeSprint: SPRINT_BACKLOG,
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
            state.activeSprint = payload || initialState.activeSprint;
        },
        deleteSprint(state, action) {
            const { payload } = action;
            delete state.list[payload];
        },
    },
});

export const { addSprint, toggleActiveSprint, deleteSprint } = sprintReducer.actions;

export const SprintReducer = sprintReducer.reducer;