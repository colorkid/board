import { createSlice } from '@reduxjs/toolkit';

export type SprintItemType = {
    number: string;
    dates: string[];
};

export type SprintListType = {
    [key: string]: SprintItemType;
};

export type SprintInitialStateType = {
    list: SprintListType;
    activeSprint: string;
    isFetching: boolean;
};

export const initialState: SprintInitialStateType = {
    list: {},
    activeSprint: '',
    isFetching: false,
};

const sprintReducer = createSlice({
    name: 'sprints',
    initialState,
    reducers: {
        fetch(state) {
            state.isFetching = true;
        },
        addSprintsList(state, action) {
            const { payload } = action;
            state.list = payload;
            state.isFetching = false;
        },
        addSprint(state, action) {
            const { payload } = action;
            state.list[payload.id] = {
                number: payload.number,
                dates: payload.dates,
            };
        },
        toggleActiveSprint(state, action) {
            const { payload } = action;
            state.activeSprint = payload;
            state.isFetching = false;
        },
        deleteSprint(state, action) {
            const { payload } = action;
            delete state.list[payload];
        },
    },
});

export const { addSprint, toggleActiveSprint, deleteSprint, addSprintsList, fetch } =
    sprintReducer.actions;

export const SprintReducer = sprintReducer.reducer;