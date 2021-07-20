import { AppThunk } from '@src/redux/store';
import { ApiController } from '@src/api/ApiController';
import { addSprintsList, fetch, SprintListType, toggleActiveSprint } from './sprintReducer';

export const getSprints =
    (isAuth: boolean): AppThunk =>
        async (dispatch) => {
            dispatch(fetch());
            const sprints = await ApiController.getSprints(isAuth);
            dispatch(addSprintsList(sprints));
        };

export const setSprints =
    (sprints: SprintListType, isAuth: boolean): AppThunk =>
        async () =>
            await ApiController.setSprints(isAuth, sprints);

export const getActiveSprint =
    (isAuth: boolean): AppThunk =>
        async (dispatch) => {
            dispatch(fetch());
            const activeSprint = await ApiController.getActiveSprint(isAuth);
            dispatch(toggleActiveSprint(activeSprint));
        };

export const setActiveSprint =
    (activeSprint: string, isAuth: boolean): AppThunk =>
        async () =>
            await ApiController.setActiveSprint(isAuth, activeSprint);