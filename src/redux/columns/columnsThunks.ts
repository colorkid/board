import { AppThunk } from '@src/redux/store';
import { ApiController } from '@src/api/ApiController';
import { fetch, saveColumns, setErrorMessage } from '@src/redux/columns/columnsReducer';

export const getColumns =
    (userId: string): AppThunk =>
    async (dispatch) => {
        dispatch(fetch());
        try {
            const columns = await ApiController.getColumns(userId);
            dispatch(saveColumns(columns));
        } catch (e) {
            dispatch(setErrorMessage(e.message));
        }
    };