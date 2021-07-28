import React, { ReactElement } from 'react';
import SprintList from './SprintList';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { deleteSprint, toggleActiveSprint } from '@src/redux/sprint/sprintReducer';
import {
    getActiveSprintSelector,
    getSprintsErrorSelector,
    getSprintsListIsFetchingSelector,
    getSprintsListSelector,
    getUserUIdlSelector,
} from '@src/redux/selectors';
import { SPRINT_BACKLOG } from '@src/constants';
import { deleteRemovedSprint } from '@src/redux/task/taskReducer';
import { getSprints } from '@src/redux/sprint/sprintThunks';

const SprintListContainer = (): ReactElement => {
    const sprints = useAppSelector((state: RootState) => getSprintsListSelector(state));
    const activeSprint = useAppSelector((state: RootState) => getActiveSprintSelector(state));
    const sprintError = useAppSelector((state: RootState) => getSprintsErrorSelector(state));
    const userId = useAppSelector((state: RootState) => getUserUIdlSelector(state));
    const isFetching = useAppSelector((state: RootState) =>
        getSprintsListIsFetchingSelector(state)
    );
    const dispatch = useAppDispatch();

    const reloadSprints = () => {
        dispatch(getSprints(userId));
    };

    const removeSprint = (id: string) => {
        if (id === activeSprint) {
            dispatch(toggleActiveSprint(SPRINT_BACKLOG));
        }

        dispatch(deleteSprint(id));
        dispatch(deleteRemovedSprint(id));
    };

    const setActiveSprint = (id: string) => {
        dispatch(toggleActiveSprint(id));
    };

    return (
        <SprintList
            reloadSprints={reloadSprints}
            error={sprintError}
            isFetching={isFetching}
            removeSprint={removeSprint}
            sprints={sprints}
            activeSprint={activeSprint}
            setActiveSprint={setActiveSprint}
        />
    );
};

export default SprintListContainer;