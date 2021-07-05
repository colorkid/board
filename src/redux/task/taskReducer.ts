import { createSlice } from '@reduxjs/toolkit';

export type sprintInitialStateType = {
    [key: string]: {
        title: string;
        description: string;
        state: string;
        estimation: string;
        range: string;
        sprints: string;
    };
};

export const initialState = {} as sprintInitialStateType;

const taskReducer = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action) {
            const { payload } = action;
            state[payload.id] = {
                title: payload.title,
                description: payload.description,
                state: payload.state,
                estimation: payload.estimation,
                range: payload.range,
                sprints: payload.sprints,
            };
        },
        deleteTask(state, action) {
            const { payload } = action;
            delete state[payload.id];
        },
        updateTask(state, action) {
            const { payload } = action;
            state[payload.id] = {
                ...state[payload.id],
                ...payload.body,
            };
        },
    },
});

export const { addTask, deleteTask, updateTask } = taskReducer.actions;

export const TaskReducer = taskReducer.reducer;