import { addTasksList, fetch, TaskListType } from '@src/redux/task/taskReducer';
import { AppThunk } from '@src/redux/store';
import { ApiController } from '@src/api/ApiController';

export const getTasks =
    (isAuth: boolean): AppThunk =>
    async (dispatch) => {
        dispatch(fetch());
        const tasks = await ApiController.getTasks(isAuth);
        dispatch(addTasksList(tasks));
    };

export const setTasks =
    (tasks: TaskListType, isAuth: boolean): AppThunk =>
    async () =>
        await ApiController.setTasks(isAuth, tasks);