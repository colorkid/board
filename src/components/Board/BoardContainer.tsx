import React, { ReactElement } from 'react';
import Board from '@src/components/Board/Board';
import { STATE_LIST } from '@src/constants';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { updateTask } from '@src/redux/task/taskReducer';
import { getTasksSelector } from '@src/redux/selectors';

const BoardContainer = (): ReactElement => {
    const tasks = useAppSelector((state: RootState) => getTasksSelector(state));
    const dispatch = useAppDispatch();

    const moveTaskOnBoard = (column: string, touchedTaskId: string) => {
        dispatch(
            updateTask({
                id: touchedTaskId,
                body: {
                    state: column,
                },
            })
        );
    };

    return (
        <Board
            data={tasks}
            columnList={STATE_LIST}
            moveTaskOnBoard={moveTaskOnBoard}
        />
    );
};

export default BoardContainer;