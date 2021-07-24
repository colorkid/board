import { AppThunk } from '@src/redux/store';
import { ApiController } from '@src/api/ApiController';
import { addSprintsList, fetch, toggleActiveSprint } from './sprintReducer';

export const getSprints =
    (userId: string): AppThunk =>
        async (dispatch) => {
            dispatch(fetch());
            const sprints = await ApiController.getSprints(userId);
            dispatch(addSprintsList(sprints));
        };

export const getActiveSprint =
    (userId: string): AppThunk =>
        async (dispatch) => {
            dispatch(fetch());
            const activeSprint = await ApiController.getActiveSprint(userId);
            dispatch(toggleActiveSprint(activeSprint));
        };