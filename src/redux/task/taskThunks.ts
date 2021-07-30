import { addTasksList, fetch, setErrorMessage } from '@src/redux/task/taskReducer';
import { AppThunk } from '@src/redux/store';
import { ApiAdapter } from '@src/api/ApiAdapter';

export const getTasks =
    (userId: string): AppThunk =>
    async (dispatch) => {
        dispatch(fetch());
        try {
            const tasks = await ApiAdapter.getTasks(userId);
            dispatch(addTasksList(tasks));
        } catch (e) {
            dispatch(setErrorMessage(e.message));
        }
    };