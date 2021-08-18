import { createSelector } from 'reselect';
import { RootState } from '@src/redux/store';
import { SPRINT_BACKLOG } from '@src/constants';
import { SprintListType } from '@src/redux/sprint/sprintReducer';
import { userInitialStateType } from '@src/redux/user/userReducer';
import { TaskListType } from '@src/redux/task/taskReducer';
import { ColumnListType } from '@src/redux/columns/columnsReducer';
import { PaletteType } from '@material-ui/core';

export const getThemeSelector = (state: RootState): PaletteType | undefined => state.ui.theme;
export const getIsShowedMobileDrawerSelector = (state: RootState): boolean =>
    state.ui.isShowedMobileDrawer;
export const getVisibleModalSelector = (state: RootState): string => state.ui.isModalVisible;
export const getUserInfoSelector = (state: RootState): userInitialStateType => state.user;
export const getUserUIdlSelector = (state: RootState): string => state.user.uid;
export const getIsAuthStateSelector = (state: RootState): string => state.user.isAuth;
export const getTasksListIsFetchingSelector = (state: RootState): boolean => state.tasks.isFetching;
export const getTasksErrorSelector = (state: RootState): string => state.tasks.error;
export const getTasksListSelector = (state: RootState): TaskListType => state.tasks.list;
export const getOpenedTaskIdSelector = (state: RootState): string => state.tasks.activeTask;
export const getColumnsFetchingSelector = (state: RootState): boolean => state.columns.isFetching;
export const getColumnsErrorSelector = (state: RootState): string => state.columns.error;
export const getColumnsStateListSelector = (state: RootState): ColumnListType =>
    state.columns.columns;
export const getSprintsListIsFetchingSelector = (state: RootState): boolean =>
    state.sprints.isFetching;
export const getSprintsErrorSelector = (state: RootState): string => state.sprints.error;
export const getActiveSprintSelector = (state: RootState): string => state.sprints.activeSprint;
export const getSprintsListSelector = (state: RootState): SprintListType => state.sprints.list;

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
    getTasksListSelector,
    getOpenedTaskIdSelector,
    (tasks, id) => {
        return tasks[id];
    }
);

export const getTasksActiveSprintSelector = createSelector(
    getTasksListSelector,
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