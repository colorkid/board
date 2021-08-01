import React, { ReactElement } from 'react';
import Board from '@src/components/Board/Board';
import {DATA_ORDER, SPRINT_BACKLOG, TASK_MODAL} from '@src/constants';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { deleteTask, setActiveTask, updateTask } from '@src/redux/task/taskReducer';
import {
    getActiveSprintSelector,
    getColumnsErrorSelector,
    getColumnsFetchingSelector,
    getColumnsStateListSelector,
    getIsShowedMobileDrawerSelector,
    getTasksActiveSprintSelector,
    getTasksErrorSelector,
    getTasksListIsFetchingSelector,
    getUserUIdlSelector,
} from '@src/redux/selectors';
import { showModal } from '@src/redux/ui/uiReducer';
import { sortByOrderColumns, sortByOrderTasks } from '@src/utils';
import { DEMO_COLUMN_BACKLOG } from '@src/redux/demoData';
import { getTasks } from '@src/redux/task/taskThunks';
import { getColumns } from '@src/redux/columns/columnsThunks';

const BoardContainer = (): ReactElement => {
    const isShowedMobileDrawer = useAppSelector((state: RootState) =>
        getIsShowedMobileDrawerSelector(state)
    );
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

    const getOrder = (target: EventTarget) => {
        // @ts-ignore
        return target?.closest(`[${DATA_ORDER}]`)?.getAttribute(`${DATA_ORDER}`);
    };

    const moveTaskOnColumns = (column: string, touchedTaskId: string, target: EventTarget) => {
        let orderTarget = getOrder(target);
        orderTarget = orderTarget && (Number(orderTarget) - 1).toString();

        const allOrders = Object.keys(tasks).map((task) => Number(tasks[task].order));

        dispatch(
            updateTask({
                id: touchedTaskId,
                body: {
                    state: column,
                    order: orderTarget || (Math.max(...allOrders) + 1).toString(),
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
            data={sortByOrderTasks(tasks)}
            columnList={sortByOrderColumns(columnsBoard)}
            moveTaskOnColumns={moveTaskOnColumns}
            showTaskModal={showTaskModal}
            openTask={openTask}
            removeTask={removeTask}
        />
    );
};

export default BoardContainer;