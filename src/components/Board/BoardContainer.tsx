import React, { ReactElement } from 'react';
import Board from '@src/components/Board/Board';
import { STATE_LIST, TASK_MODAL } from '@src/constants';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { setActiveTask, updateTask } from '@src/redux/task/taskReducer';
import { getTasksActiveSprintSelector } from '@src/redux/selectors';
import { showModal } from '@src/redux/ui/uiReducer';

const BoardContainer = (): ReactElement => {
    const tasks = useAppSelector((state: RootState) => getTasksActiveSprintSelector(state));
    const dispatch = useAppDispatch();

    const showTaskModal = () => {
        dispatch(showModal(TASK_MODAL));
    };

    const openTask = (id: string) => {
        dispatch(setActiveTask(id));
    };

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
            showTaskModal={showTaskModal}
            openTask={openTask}
        />
    );
};

export default BoardContainer;