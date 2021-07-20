import React, { ReactChild, ReactChildren, useCallback, useEffect } from 'react';
import { getTasks, setTasks } from '@src/redux/task/taskThunks';
import { DEMO_ACTIVE_SPRINT, DEMO_SPRINTS, DEMO_STATE_LIST, DEMO_TASKS } from '@src/redux/demoData';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import {
    getActiveSprintSelector,
    getColumnsStateListSelector,
    getSprintsListSelector,
    getTasksSelector,
    getUserEmailSelector,
} from '@src/redux/selectors';
import { ListItemType } from '@src/redux/board/boardReducer';
import { SprintListType } from '@src/redux/sprint/sprintReducer';
import { TaskListType } from '@src/redux/task/taskReducer';
import { LocalStorageApi } from '@src/api/LocalStorageApi';
import {
    getActiveSprint,
    getSprints,
    setActiveSprint,
    setSprints,
} from '@src/redux/sprint/sprintThunks';
import { getColumns, setColumns } from '@src/redux/board/boardThunks';

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

    const setDemoData = useCallback(() => {
        dispatch(setTasks(DEMO_TASKS, !!isAuth));
        dispatch(setSprints(DEMO_SPRINTS, !!isAuth));
        dispatch(setActiveSprint(DEMO_ACTIVE_SPRINT, !!isAuth));
        dispatch(setColumns(DEMO_STATE_LIST, !!isAuth));
    }, [dispatch, isAuth]);

    const getData = useCallback(() => {
        dispatch(getTasks(!!isAuth));
        dispatch(getSprints(!!isAuth));
        dispatch(getActiveSprint(!!isAuth));
        dispatch(getColumns(!!isAuth));
    }, [dispatch, isAuth]);

    const updateData = useCallback(() => {
        dispatch(setTasks(tasks, !!isAuth));
        dispatch(setSprints(sprints, !!isAuth));
        dispatch(setActiveSprint(activeSprint, !!isAuth));
        dispatch(setColumns(columns, !!isAuth));
    }, [activeSprint, columns, dispatch, isAuth, sprints, tasks]);

    useEffect(() => {
        if (LocalStorageApi.isFirstSession()) {
            LocalStorageApi.recordSession();
            setDemoData();
        }
        getData();
    }, [dispatch, getData, isAuth, setDemoData]);

    useEffect(() => {
        if (!LocalStorageApi.isFirstSession()) {
            updateData();
        }
    }, [dispatch, tasks, isAuth, sprints, updateData]);

    return <>{children}</>;
};

export default StorageProvider;
