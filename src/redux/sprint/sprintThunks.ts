import { AppThunk } from '@src/redux/store';
import { ApiAdapter } from '@src/api/ApiAdapter';
import { addSprintsList, fetch, setErrorMessage, toggleActiveSprint } from './sprintReducer';

export const getSprints =
    (userId: string): AppThunk =>
    async (dispatch) => {
        dispatch(fetch());
        try {
            const sprints = await ApiAdapter.getSprints(userId);
            dispatch(addSprintsList(JSON.parse(sprints)));
        } catch (e) {
            dispatch(setErrorMessage(e.message));
        }
    };

export const getActiveSprint =
    (userId: string): AppThunk =>
    async (dispatch) => {
        dispatch(fetch());
        try {
            const activeSprint = await ApiAdapter.getActiveSprint(userId);
            dispatch(toggleActiveSprint(activeSprint));
        } catch (e) {
            dispatch(setErrorMessage(e.message));
        }
    };