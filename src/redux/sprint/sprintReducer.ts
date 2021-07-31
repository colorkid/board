import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_UNDEFINED_ERROR } from '@src/constants';
import { DEFAULT_SPRINT_BACKLOG } from '@src/redux/demoData';

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
            state.list =
                {
                    ...DEFAULT_SPRINT_BACKLOG,
                    ...payload,
                } || initialState.list;
            state.isFetching = initialState.isFetching;
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
            state.activeSprint = payload || initialState.activeSprint;
            state.isFetching = initialState.isFetching;
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

export const {
    addSprint,
    toggleActiveSprint,
    deleteSprint,
    addSprintsList,
    fetch,
    setErrorMessage,
} = sprintReducer.actions;

export const SprintReducer = sprintReducer.reducer;