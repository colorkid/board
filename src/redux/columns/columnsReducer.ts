import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_UNDEFINED_ERROR } from '@src/constants';

export type ColumnListItemType = {
    title: string;
    id: string;
    order: number;
};

export type ColumnsInitialStateType = {
    columns: ColumnListItemType[];
    isFetching: boolean;
    error: string;
};

export const initialState: ColumnsInitialStateType = {
    columns: [],
    isFetching: false,
    error: '',
};

const columnsReducer = createSlice({
    name: 'columns',
    initialState,
    reducers: {
        fetch(state) {
            state.isFetching = true;
            state.error = initialState.error;
        },
        saveColumns(state, actions) {
            const { payload } = actions;
            state.columns = payload;
            state.isFetching = false;
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

export const { saveColumns, fetch, setErrorMessage } = columnsReducer.actions;

export const ColumnsReducer = columnsReducer.reducer;