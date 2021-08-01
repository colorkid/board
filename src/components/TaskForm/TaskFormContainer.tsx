import React, { ReactElement, useEffect, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import TaskForm from './TaskForm';
import { useFormik } from 'formik';
import {
    DEFAULT_ORDER_TASK,
    DEFAULT_VALUE_PRIORITY,
    SPRINT_BACKLOG,
    TASK_MODAL,
} from '@src/constants';
import { validationSchema } from '@src/components/TaskForm/validationSchema';
import { addTask, setActiveTask, TaskType, updateTask } from '@src/redux/task/taskReducer';
import { generateUUID, sortByOrderColumns } from '@src/utils';
import {
    getActiveSprintSelector,
    getColumnsStateListSelector,
    getOpenedTaskIdSelector,
    getOpenedTaskSelector,
    getSprintsListSelector,
    getTasksListSelector,
} from '@src/redux/selectors';
import useHandleCloseModal from '@src/hooks/useHandleCloseModal';

const TaskFormContainer = (): ReactElement => {
    const allTasks = useAppSelector((state: RootState) => getTasksListSelector(state));
    const sprints = useAppSelector((state: RootState) => getSprintsListSelector(state));
    const openedTask = useAppSelector((state: RootState) => getOpenedTaskSelector(state));
    const openedTaskId = useAppSelector((state: RootState) => getOpenedTaskIdSelector(state));
    const activeSprint = useAppSelector((state: RootState) => getActiveSprintSelector(state));
    const columns = useAppSelector((state: RootState) => getColumnsStateListSelector(state));
    const [checkedSprints, setCheckedSprints] = useState<string[]>([]);
    const dispatch = useAppDispatch();
    const handleClose = useHandleCloseModal(TASK_MODAL);

    const allOrders = Object.keys(allTasks).map((task) => Number(allTasks[task].order));

    const isOpenedTask = !!openedTask;

    const DEFAULT_VALUE_STATE = sortByOrderColumns(columns)[0];

    const clearActiveTask = () => {
        dispatch(setActiveTask(''));
    };

    useEffect(() => {
        if (isOpenedTask) {
            setCheckedSprints([
                ...new Set([...openedTask.sprints, ...[SPRINT_BACKLOG, activeSprint]]),
            ]);
        } else {
            setCheckedSprints([...new Set([SPRINT_BACKLOG, activeSprint])]);
        }
        return () => isOpenedTask && clearActiveTask();
    }, []);

    const formik = useFormik({
        initialValues: {
            title: openedTask?.title || '',
            description: openedTask?.description || '',
            state: openedTask?.state || DEFAULT_VALUE_STATE?.id,
            estimation: openedTask?.estimation || '',
            priority: openedTask?.priority || DEFAULT_VALUE_PRIORITY.id,
            sprints: openedTask?.sprints || [activeSprint],
            order: openedTask
                ? openedTask?.order
                : allOrders.length
                ? (Math.max(...allOrders) + 1).toString()
                : DEFAULT_ORDER_TASK,
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(isOpenedTask);
            console.log(values);
            isOpenedTask ? updateOpenedTask(values) : saveTask(values);
            if (handleClose) {
                handleClose();
            }
        },
    });

    const updateOpenedTask = (values: TaskType) => {
        dispatch(
            updateTask({
                id: openedTaskId,
                body: {
                    ...values,
                    sprints: checkedSprints,
                },
            })
        );
    };

    const saveTask = (values: TaskType) => {
        dispatch(
            addTask({
                id: generateUUID(),
                ...values,
                sprints: checkedSprints,
            })
        );
    };

    return (
        <TaskForm
            columns={sortByOrderColumns(columns)}
            checkedSprints={checkedSprints}
            setCheckedSprints={setCheckedSprints}
            formik={formik}
            sprints={sprints}
            isOpenedTask={isOpenedTask}
        />
    );
};

export default TaskFormContainer;
