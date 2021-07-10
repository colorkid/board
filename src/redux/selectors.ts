import { createSelector } from 'reselect';
import { RootState } from '@src/redux/store';
import { SPRINT_BACKLOG } from '@src/constants';
import { SprintListType } from '@src/redux/sprint/sprintReducer';

export const getSprintsList = (state: RootState): SprintListType => state.sprints.list;

export const lastSprintNumberSelector = createSelector(getSprintsList, (sprints) => {
    let numbers: number[] = [];

    Object.keys(sprints).forEach((item) => {
        if (item !== SPRINT_BACKLOG) {
            numbers = [...numbers, Number(sprints[item].number)];
        }
    });

    const maxNumber = Math.max(...numbers);
    return maxNumber === -Infinity ? 0 : maxNumber;
});
