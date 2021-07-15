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

export type TaskListType = {
    [key: string]: TaskType;
};

export type TaskInitialStateType = {
    list: TaskListType;
    activeTask: string;
};

export const initialState = {
    list: DEMO_TASKS,
    activeTask: '',
} as TaskInitialStateType;

const taskReducer = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action) {
            const { payload } = action;
            state.list[payload.id] = {
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
            delete state.list[payload.id];
        },
        updateTask(state, action) {
            const { payload } = action;
            state.list[payload.id] = {
                ...state.list[payload.id],
                ...payload.body,
            };
        },
        setActiveTask(state, action) {
            const { payload } = action;
            state.activeTask = payload;
        }
    },
});

export const { addTask, deleteTask, updateTask, setActiveTask } = taskReducer.actions;

export const TaskReducer = taskReducer.reducer;