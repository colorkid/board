import { AppThunk } from '@src/redux/store';
import { ApiController } from '@src/api/ApiController';
import { fetch, saveColumns } from '@src/redux/board/boardReducer';

export const getColumns =
    (userId: string): AppThunk =>
    async (dispatch) => {
        dispatch(fetch());
        const columns = await ApiController.getColumns(userId);
        dispatch(saveColumns(columns));
    };