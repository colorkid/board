import { addTasksList, fetch } from '@src/redux/task/taskReducer';
import { AppThunk } from '@src/redux/store';
import { ApiController } from '@src/api/ApiController';

export const getTasks =
    (userId: string): AppThunk =>
    async (dispatch) => {
        dispatch(fetch());
        const tasks = await ApiController.getTasks(userId);
        dispatch(addTasksList(tasks));
    };