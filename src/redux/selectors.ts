import { createSelector } from 'reselect';
import { RootState } from '@src/redux/store';
import { SPRINT_BACKLOG } from '@src/constants';
import { SprintListType } from '@src/redux/sprint/sprintReducer';
import { userInitialStateType } from '@src/redux/user/userReducer';

export const getSprintsListSelector = (state: RootState): SprintListType => state.sprints.list;
export const getVisibleModalSelector = (state: RootState): string => state.ui.isModalVisible;
export const getUserInfoSelector = (state: RootState): userInitialStateType => state.user;

export const lastSprintNumberSelector = createSelector(getSprintsListSelector, (sprints) => {
    let numbers: number[] = [];

    Object.keys(sprints).forEach((item) => {
        if (item !== SPRINT_BACKLOG) {
            numbers = [...numbers, Number(sprints[item].number)];
        }
    });

    const maxNumber = Math.max(...numbers);
    return maxNumber === -Infinity ? 0 : maxNumber;
});
