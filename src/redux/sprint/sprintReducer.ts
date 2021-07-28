import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_UNDEFINED_ERROR } from '@src/constants';

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
    error: string;
};

export const initialState: SprintInitialStateType = {
    list: {},
    activeSprint: '',
    isFetching: false,
    error: '',
};

const sprintReducer = createSlice({
    name: 'sprints',
    initialState,
    reducers: {
        fetch(state) {
            state.isFetching = true;
            state.error = initialState.error;
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
        setErrorMessage(state, action) {
            if (action.payload) {
                state.error = action.payload;
            } else {
                state.error = DEFAULT_UNDEFINED_ERROR;
            }
            state.isFetching = initialState.isFetching;
        },
    },
});

export const { addSprint, toggleActiveSprint, deleteSprint, addSprintsList, fetch, setErrorMessage } =
    sprintReducer.actions;

export const SprintReducer = sprintReducer.reducer;