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
import { addSprintsList, toggleActiveSprint } from '@src/redux/sprint/sprintReducer';
import { addTasksList } from '@src/redux/task/taskReducer';
import { getActiveSprint, getSprints } from '@src/redux/sprint/sprintThunks';
import { getColumns } from '@src/redux/columns/columnsThunks';
import { objectToString } from '@src/utils';
import { ApiAdapter } from '@src/api/ApiAdapter';
import { authStateObservable } from '@src/redux/user/userThunks';
import { LocalStorageApi } from '@src/api/LocalStorageApi';
import { FALSE, NOT_CHECK_YET, SIGN_OUT, TRUE } from '@src/constants';
import Progress from '@src/common/Progress';

export type StateForSaveType = ColumnListItemType[] | string;

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
        } else if (isAuth === FALSE) {
            if (LocalStorageApi.isFirstSession()) {
                LocalStorageApi.recordFirstSession();
                dispatchDemoData();
            } else {
                dispatchData();
            }
        } else if (isAuth === SIGN_OUT) {
            location.reload();
        }
    }, [isAuth]);

    useEffect(() => {
        if (columns?.length) {
            ApiAdapter.setColumns(userId, columns);
        }
    }, [columnsToCompare]);

    useEffect(() => {
        if (activeSprint?.length) {
            ApiAdapter.setActiveSprint(userId, activeSprint);
        }
    }, [activeSprint]);

    useEffect(() => {
        if (Object.keys(sprints).length) {
            ApiAdapter.setSprints(userId, JSON.stringify(sprints));
        }
    }, [sprintsToCompare]);

    useEffect(() => {
        if (Object.keys(tasks).length) {
            ApiAdapter.setTasks(userId, JSON.stringify(tasks));
        }
    }, [tasksToCompare]);

    return <>{isAuth !== NOT_CHECK_YET ? children : <Progress />}</>;
};

export default StorageProvider;
