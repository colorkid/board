import { DEMO_STATE_LIST } from '@src/constants';
import { createSlice } from '@reduxjs/toolkit';

export type ListItemType = {
    title: string;
    id: string;
    order: number;
};

export type BoardInitialStateType = {
    columns: ListItemType[];
};

export const initialState = {
    columns: DEMO_STATE_LIST,
} as BoardInitialStateType;

const boardReducer = createSlice({
    name: 'board',
    initialState,
    reducers: {
        saveColumns(state, actions) {
            const { payload } = actions;
            state.columns = payload;
        },
    },
});

export const { saveColumns } = boardReducer.actions;

export const BoardReducer = boardReducer.reducer;