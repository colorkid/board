import { AppThunk } from '@src/redux/store';
import { ApiController } from '@src/api/ApiController';
import { fetch, ListItemType, saveColumns } from '@src/redux/board/boardReducer';

export const getColumns =
    (isAuth: boolean): AppThunk =>
    async (dispatch) => {
        dispatch(fetch());
        const columns = await ApiController.getColumns(isAuth);
        dispatch(saveColumns(columns));
    };

export const setColumns =
    (columns: ListItemType[], isAuth: boolean): AppThunk =>
    async () =>
        await ApiController.setColumns(isAuth, columns);