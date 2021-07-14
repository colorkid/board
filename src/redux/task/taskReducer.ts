import { createSlice } from '@reduxjs/toolkit';
import { DEMO_TASKS } from '@src/constants';

export type TaskType = {
    title: string;
    description: string;
    state: string;
    estimation: string;
    priority: string;
    sprints: string[];
};

export type TaskInitialStateType = {
    [key: string]: TaskType;
};

export const initialState = {
    ...DEMO_TASKS,
} as TaskInitialStateType;

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
                priority: payload.priority,
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