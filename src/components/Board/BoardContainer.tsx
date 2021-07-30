import React, { ReactElement } from 'react';
import Board from '@src/components/Board/Board';
import { SPRINT_BACKLOG, TASK_MODAL } from '@src/constants';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { deleteTask, setActiveTask, updateTask } from '@src/redux/task/taskReducer';
import {
    getActiveSprintSelector,
    getColumnsErrorSelector,
    getColumnsFetchingSelector,
    getColumnsStateListSelector, getIsShowedMobileDrawerSelector,
    getTasksActiveSprintSelector,
    getTasksErrorSelector,
    getTasksListIsFetchingSelector,
    getUserUIdlSelector,
} from '@src/redux/selectors';
import { showModal } from '@src/redux/ui/uiReducer';
import { sortByOrder } from '@src/utils';
import { DEMO_COLUMN_BACKLOG } from '@src/redux/demoData';
import { getTasks } from '@src/redux/task/taskThunks';
import { getColumns } from '@src/redux/columns/columnsThunks';

const BoardContainer = (): ReactElement => {
    const isShowedMobileDrawer = useAppSelector((state: RootState) => getIsShowedMobileDrawerSelector(state));
    const tasks = useAppSelector((state: RootState) => getTasksActiveSprintSelector(state));
    const taskError = useAppSelector((state: RootState) => getTasksErrorSelector(state));
    const isTaskFetching = useAppSelector((state: RootState) =>
        getTasksListIsFetchingSelector(state)
    );
    const activeSprint = useAppSelector((state: RootState) => getActiveSprintSelector(state));
    const columns = useAppSelector((state: RootState) => getColumnsStateListSelector(state));
    const columnError = useAppSelector((state: RootState) => getColumnsErrorSelector(state));
    const isColumnFetching = useAppSelector((state: RootState) =>
        getColumnsFetchingSelector(state)
    );
    const userId = useAppSelector((state: RootState) => getUserUIdlSelector(state));
    const dispatch = useAppDispatch();

    const columnsBoard = activeSprint === SPRINT_BACKLOG ? [DEMO_COLUMN_BACKLOG] : columns;

    const reloadColumns = () => {
        dispatch(getColumns(userId));
    };

    const reloadTasks = () => {
        dispatch(getTasks(userId));
    };

    const reload = () => {
        if (taskError) {
            reloadTasks();
        } else if (columnError) {
            reloadColumns();
        } else {
            return null;
        }
    };

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
            isShowedMobileDrawer={isShowedMobileDrawer}
            reloadData={reload}
            error={taskError || columnError}
            isFetching={isTaskFetching || isColumnFetching}
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