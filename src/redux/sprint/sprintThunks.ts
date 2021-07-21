import { AppThunk } from '@src/redux/store';
import { ApiController } from '@src/api/ApiController';
import { addSprintsList, fetch, toggleActiveSprint } from './sprintReducer';

export const getSprints =
    (isAuth: boolean): AppThunk =>
        async (dispatch) => {
            dispatch(fetch());
            const sprints = await ApiController.getSprints(isAuth);
            dispatch(addSprintsList(sprints));
        };

export const getActiveSprint =
    (isAuth: boolean): AppThunk =>
        async (dispatch) => {
            dispatch(fetch());
            const activeSprint = await ApiController.getActiveSprint(isAuth);
            dispatch(toggleActiveSprint(activeSprint));
        };