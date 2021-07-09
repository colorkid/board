import React, { ReactElement } from 'react';
import SprintList from './SprintList';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { deleteSprint } from '@src/redux/sprint/sprintReducer';

const SprintListContainer = (): ReactElement => {
    const sprints = useAppSelector((state: RootState) => state.sprints.list);
    const dispatch = useAppDispatch();

    const removeSprint = (id: string) => {
        dispatch(deleteSprint(id));
    };

    return <SprintList removeSprint={removeSprint} sprints={sprints} />;
};

export default SprintListContainer;