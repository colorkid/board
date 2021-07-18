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
            delete state.list[payload];
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
        },
        deleteRemovedSprint(state, action) {
            const { payload } = action;
            const cleanedStateList: TaskListType = {};

            Object.keys(state.list).forEach((id) => {
                const task = state.list[id];
                if (task.sprints.includes(payload)) {
                    cleanedStateList[id] = {
                        ...task,
                        sprints: task.sprints.filter((sprint) => sprint !== payload),
                    };
                } else {
                    cleanedStateList[id] = task;
                }
            });

            state.list = cleanedStateList;
        },
    },
});

export const { addTask, deleteTask, updateTask, setActiveTask, deleteRemovedSprint } =
    taskReducer.actions;

export const TaskReducer = taskReducer.reducer;