import React, { ReactChild, ReactChildren, useEffect } from 'react';
import { getTasks } from '@src/redux/task/taskThunks';
import { DEMO_ACTIVE_SPRINT, DEMO_SPRINTS, DEMO_STATE_LIST, DEMO_TASKS } from '@src/redux/demoData';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import {
    getActiveSprintSelector,
    getColumnsStateListSelector,
    getIsAuthStateSelector,
    getSprintsListSelector,
    getTasksListSelector,
    getUserUIdlSelector,
} from '@src/redux/selectors';
import { ColumnListItemType, saveColumns } from '@src/redux/columns/columnsReducer';
import {
    addSprintsList,
    SprintListType,
    toggleActiveSprint,
} from '@src/redux/sprint/sprintReducer';
import { addTasksList, TaskListType } from '@src/redux/task/taskReducer';
import { getActiveSprint, getSprints } from '@src/redux/sprint/sprintThunks';
import { getColumns } from '@src/redux/columns/columnsThunks';
import { objectToString } from '@src/utils';
import { ApiController } from '@src/api/ApiController';
import { authStateObservable } from '@src/redux/user/userThunks';
import { LocalStorageApi } from '@src/api/LocalStorageApi';
import { NOT_CHECK_YET, TRUE } from '@src/constants';
import Progress from '@src/common/Progress';

export type StateForSaveType = ColumnListItemType[] | SprintListType | TaskListType | string;

interface IStorageProvider {
    children: ReactChild | ReactChildren;
}

const StorageProvider = (props: IStorageProvider): JSX.Element => {
    const { children } = props;

    const isAuth = useAppSelector((state: RootState) => getIsAuthStateSelector(state));
    const tasks = useAppSelector((state: RootState) => getTasksListSelector(state));
    const sprints = useAppSelector((state: RootState) => getSprintsListSelector(state));
    const userId = useAppSelector((state: RootState) => getUserUIdlSelector(state));
    const activeSprint = useAppSelector((state: RootState) => getActiveSprintSelector(state));
    const columns = useAppSelector((state: RootState) => getColumnsStateListSelector(state));

    const dispatch = useAppDispatch();

    const columnsToCompare = objectToString(columns);
    const sprintsToCompare = objectToString(sprints);
    const tasksToCompare = objectToString(tasks);

    const dispatchData = () => {
        dispatch(getTasks(userId));
        dispatch(getSprints(userId));
        dispatch(getActiveSprint(userId));
        dispatch(getColumns(userId));
    };

    const dispatchDemoData = () => {
        dispatch(addTasksList(DEMO_TASKS));
        dispatch(addSprintsList(DEMO_SPRINTS));
        dispatch(toggleActiveSprint(DEMO_ACTIVE_SPRINT));
        dispatch(saveColumns(DEMO_STATE_LIST));
    };

    useEffect(() => {
        dispatch(authStateObservable());
    }, []);

    useEffect(() => {
        if (isAuth === NOT_CHECK_YET) {
            return;
        } else if (isAuth === TRUE) {
            dispatchData();
        } else {
            if (LocalStorageApi.isFirstSession()) {
                LocalStorageApi.recordFirstSession();
                dispatchDemoData();
            } else {
                dispatchData();
            }
        }
    }, [isAuth]);

    useEffect(() => {
        if (columns.length) {
            ApiController.setColumns(userId, columns);
        }
    }, [columnsToCompare, userId]);

    useEffect(() => {
        if (activeSprint?.length) {
            ApiController.setActiveSprint(userId, activeSprint);
        }
    }, [activeSprint, userId]);

    useEffect(() => {
        if (Object.keys(sprints).length) {
            ApiController.setSprints(userId, sprints);
        }
    }, [sprintsToCompare, userId]);

    useEffect(() => {
        if (Object.keys(tasks).length) {
            ApiController.setTasks(userId, tasks);
        }
    }, [tasksToCompare, userId]);

    return <>{isAuth !== NOT_CHECK_YET ? children : <Progress />}</>;
};

export default StorageProvider;
