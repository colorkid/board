import { createSelector } from 'reselect';
import { RootState } from '@src/redux/store';
import { SPRINT_BACKLOG } from '@src/constants';
import { SprintListType } from '@src/redux/sprint/sprintReducer';
import { userInitialStateType } from '@src/redux/user/userReducer';
import { TaskListType } from '@src/redux/task/taskReducer';
import { ListItemType } from '@src/redux/board/boardReducer';

export const getIsAuthStateSelector = (state: RootState): string => state.user.isAuth;
export const getSprintsListSelector = (state: RootState): SprintListType => state.sprints.list;
export const getSprintsListIsFetchingSelector = (state: RootState): boolean => state.sprints.isFetching;
export const getTasksListIsFetchingSelector = (state: RootState): boolean => state.tasks.isFetching;
export const getActiveSprintSelector = (state: RootState): string => state.sprints.activeSprint;
export const getVisibleModalSelector = (state: RootState): string => state.ui.isModalVisible;
export const getUserInfoSelector = (state: RootState): userInitialStateType => state.user;
export const getUserUIdlSelector = (state: RootState): string => state.user.uid;
export const getTasksSelector = (state: RootState): TaskListType => state.tasks.list;
export const getOpenedTaskIdSelector = (state: RootState): string => state.tasks.activeTask;
export const getColumnsStateListSelector = (state: RootState): ListItemType[] =>
    state.board.columns;

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

export const getOpenedTaskSelector = createSelector(
    getTasksSelector,
    getOpenedTaskIdSelector,
    (tasks, id) => {
        return tasks[id];
    }
);

export const getTasksActiveSprintSelector = createSelector(
    getTasksSelector,
    getActiveSprintSelector,
    (tasksList, activeSprint) => {
        const tasks: TaskListType = {};

        Object.keys(tasksList).forEach((item) => {
            if (tasksList[item].sprints.includes(activeSprint)) {
                tasks[item] = tasksList[item];
            }
        });

        return tasks;
    }
);
