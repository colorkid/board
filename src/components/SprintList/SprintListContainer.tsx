import React, { ReactElement } from 'react';
import SprintList from './SprintList';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { deleteSprint, toggleActiveSprint } from '@src/redux/sprint/sprintReducer';
import { getActiveSprintSelector, getSprintsListSelector } from '@src/redux/selectors';
import { SPRINT_BACKLOG } from '@src/constants';
import { deleteRemovedSprint } from '@src/redux/task/taskReducer';

const SprintListContainer = (): ReactElement => {
    const sprints = useAppSelector((state: RootState) => getSprintsListSelector(state));
    const activeSprint = useAppSelector((state: RootState) => getActiveSprintSelector(state));
    const dispatch = useAppDispatch();

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
            removeSprint={removeSprint}
            sprints={sprints}
            activeSprint={activeSprint}
            setActiveSprint={setActiveSprint}
        />
    );
};

export default SprintListContainer;