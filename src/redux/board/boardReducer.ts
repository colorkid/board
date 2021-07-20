import { createSlice } from '@reduxjs/toolkit';

export type ListItemType = {
    title: string;
    id: string;
    order: number;
};

export type BoardInitialStateType = {
    columns: ListItemType[];
    isFetching: boolean;
};

export const initialState: BoardInitialStateType = {
    columns: [],
    isFetching: false,
};

const boardReducer = createSlice({
    name: 'board',
    initialState,
    reducers: {
        fetch(state) {
            state.isFetching = true;
        },
        saveColumns(state, actions) {
            const { payload } = actions;
            state.columns = payload;
        },
    },
});

export const { saveColumns, fetch } = boardReducer.actions;

export const BoardReducer = boardReducer.reducer;