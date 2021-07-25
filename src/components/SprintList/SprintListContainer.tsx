import React, { ReactElement } from 'react';
import SprintList from './SprintList';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { deleteSprint, toggleActiveSprint } from '@src/redux/sprint/sprintReducer';
import {getActiveSprintSelector, getSprintsListIsFetchingSelector, getSprintsListSelector} from '@src/redux/selectors';
import { SPRINT_BACKLOG } from '@src/constants';
import { deleteRemovedSprint } from '@src/redux/task/taskReducer';

const SprintListContainer = (): ReactElement => {
    const sprints = useAppSelector((state: RootState) => getSprintsListSelector(state));
    const activeSprint = useAppSelector((state: RootState) => getActiveSprintSelector(state));
    const isFetching = useAppSelector((state: RootState) => getSprintsListIsFetchingSelector(state))
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

    console.log(isFetching)

    return (
        <SprintList
            isFetching={isFetching}
            removeSprint={removeSprint}
            sprints={sprints}
            activeSprint={activeSprint}
            setActiveSprint={setActiveSprint}
        />
    );
};

export default SprintListContainer;