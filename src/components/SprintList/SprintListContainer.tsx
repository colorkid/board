import React, { ReactElement } from 'react';
import SprintList from './SprintList';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { deleteSprint } from '@src/redux/sprint/sprintReducer';
import { getSprintsListSelector } from '@src/redux/selectors';

const SprintListContainer = (): ReactElement => {
    const sprints = useAppSelector((state: RootState) => getSprintsListSelector(state));
    const dispatch = useAppDispatch();

    const removeSprint = (id: string) => {
        dispatch(deleteSprint(id));
    };

    return <SprintList removeSprint={removeSprint} sprints={sprints} />;
};

export default SprintListContainer;