import React, { ReactChild, ReactChildren, useEffect } from 'react';
import { getTasks } from '@src/redux/task/taskThunks';
import { DEMO_ACTIVE_SPRINT, DEMO_SPRINTS, DEMO_STATE_LIST, DEMO_TASKS } from '@src/redux/demoData';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import {
    getActiveSprintSelector,
    getColumnsStateListSelector,
    getSprintsListSelector,
    getTasksSelector,
    getUserEmailSelector,
} from '@src/redux/selectors';
import { ListItemType, saveColumns } from '@src/redux/board/boardReducer';
import {
    addSprintsList,
    SprintListType,
    toggleActiveSprint,
} from '@src/redux/sprint/sprintReducer';
import { addTasksList, TaskListType } from '@src/redux/task/taskReducer';
import { LocalStorageApi } from '@src/api/LocalStorageApi';
import { getActiveSprint, getSprints } from '@src/redux/sprint/sprintThunks';
import { getColumns } from '@src/redux/board/boardThunks';
import { objectToString } from '@src/utils';
import { ApiController } from '@src/api/ApiController';

export type StateForSaveType = ListItemType[] | SprintListType | TaskListType | string;

interface IStorageProvider {
    children: ReactChild | ReactChildren;
}

const StorageProvider = (props: IStorageProvider): JSX.Element => {
    const { children } = props;

    const tasks = useAppSelector((state: RootState) => getTasksSelector(state));
    const sprints = useAppSelector((state: RootState) => getSprintsListSelector(state));
    const isAuth = useAppSelector((state: RootState) => getUserEmailSelector(state));
    const activeSprint = useAppSelector((state: RootState) => getActiveSprintSelector(state));
    const columns = useAppSelector((state: RootState) => getColumnsStateListSelector(state));

    const dispatch = useAppDispatch();

    const columnsToCompare = objectToString(columns);
    const sprintsToCompare = objectToString(sprints);
    const tasksToCompare = objectToString(tasks);

    const dispatchData = () => {
        dispatch(getTasks(!!isAuth));
        dispatch(getSprints(!!isAuth));
        dispatch(getActiveSprint(!!isAuth));
        dispatch(getColumns(!!isAuth));
    };

    const dispatchDemoData = () => {
        dispatch(addTasksList(DEMO_TASKS));
        dispatch(addSprintsList(DEMO_SPRINTS));
        dispatch(toggleActiveSprint(DEMO_ACTIVE_SPRINT));
        dispatch(saveColumns(DEMO_STATE_LIST));
    };

    useEffect(() => {
        if (LocalStorageApi.isFirstSession()) {
            LocalStorageApi.recordFirstSession();
            dispatchDemoData();
        } else {
            dispatchData();
        }
    }, []);

    useEffect(() => {
        if (columns.length) {
            ApiController.setColumns(!!isAuth, columns);
        }
    }, [columnsToCompare]);

    useEffect(() => {
        if (activeSprint.length) {
            ApiController.setActiveSprint(!!isAuth, activeSprint);
        }
    }, [activeSprint]);

    useEffect(() => {
        if (Object.keys(sprints).length) {
            ApiController.setSprints(!!isAuth, sprints);
        }
    }, [sprintsToCompare]);

    useEffect(() => {
        if (Object.keys(tasks).length) {
            ApiController.setTasks(!!isAuth, tasks);
        }
    }, [tasksToCompare]);

    return <>{children}</>;
};

export default StorageProvider;
