import React, { ReactElement } from 'react';
import Board from '@src/components/Board/Board';
import { SPRINT_BACKLOG, TASK_MODAL } from '@src/constants';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { deleteTask, setActiveTask, updateTask } from '@src/redux/task/taskReducer';
import {
    getActiveSprintSelector,
    getColumnsStateListSelector,
    getTasksActiveSprintSelector,
} from '@src/redux/selectors';
import { showModal } from '@src/redux/ui/uiReducer';
import { sortByOrder } from '@src/utils';
import { DEMO_COLUMN_BACKLOG } from '@src/redux/demoData';

const BoardContainer = (): ReactElement => {
    const tasks = useAppSelector((state: RootState) => getTasksActiveSprintSelector(state));
    const activeSprint = useAppSelector((state: RootState) => getActiveSprintSelector(state));
    const columns = useAppSelector((state: RootState) => getColumnsStateListSelector(state));
    const dispatch = useAppDispatch();

    const columnsBoard = activeSprint === SPRINT_BACKLOG ? [DEMO_COLUMN_BACKLOG] : columns;

    const showTaskModal = () => {
        dispatch(showModal(TASK_MODAL));
    };

    const openTask = (id: string) => {
        dispatch(setActiveTask(id));
    };

    const removeTask = (id: string) => {
        dispatch(deleteTask(id));
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
            activeSprint={activeSprint}
            data={tasks}
            columnList={sortByOrder(columnsBoard)}
            moveTaskOnBoard={moveTaskOnBoard}
            showTaskModal={showTaskModal}
            openTask={openTask}
            removeTask={removeTask}
        />
    );
};

export default BoardContainer;