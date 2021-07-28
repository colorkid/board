import { AppThunk } from '@src/redux/store';
import { ApiController } from '@src/api/ApiController';
import { addSprintsList, fetch, setErrorMessage, toggleActiveSprint } from './sprintReducer';

export const getSprints =
    (userId: string): AppThunk =>
        async (dispatch) => {
            dispatch(fetch());
            try {
                const sprints = await ApiController.getSprints(userId);
                dispatch(addSprintsList(sprints));
            } catch (e) {
                dispatch(setErrorMessage(e.message));
            }
        };

export const getActiveSprint =
    (userId: string): AppThunk =>
        async (dispatch) => {
            dispatch(fetch());
            try {
                const activeSprint = await ApiController.getActiveSprint(userId);
                dispatch(toggleActiveSprint(activeSprint));
            } catch (e) {
                dispatch(setErrorMessage(e.message));
            }
        };