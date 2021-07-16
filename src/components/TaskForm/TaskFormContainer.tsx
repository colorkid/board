import React, { ReactElement, useEffect, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import TaskForm from './TaskForm';
import { useFormik } from 'formik';
import {
    DEFAULT_VALUE_PRIORITY,
    DEFAULT_VALUE_STATE,
    SPRINT_BACKLOG,
    TASK_MODAL,
} from '@src/constants';
import { validationSchema } from '@src/components/TaskForm/validationSchema';
import { addTask, setActiveTask, TaskType, updateTask } from '@src/redux/task/taskReducer';
import { generateUUID } from '@src/utils';
import {
    getActiveSprintSelector,
    getOpenedTaskIdSelector,
    getOpenedTaskSelector,
    getSprintsListSelector,
} from '@src/redux/selectors';
import useHandleCloseModal from '@src/hooks/useHandleCloseModal';

const TaskFormContainer = (): ReactElement => {
    const sprints = useAppSelector((state: RootState) => getSprintsListSelector(state));
    const openedTask = useAppSelector((state: RootState) => getOpenedTaskSelector(state));
    const openedTaskId = useAppSelector((state: RootState) => getOpenedTaskIdSelector(state));
    const activeSprint = useAppSelector((state: RootState) => getActiveSprintSelector(state));
    const [checkedSprints, setCheckedSprints] = useState<string[]>([]);
    const dispatch = useAppDispatch();
    const handleClose = useHandleCloseModal(TASK_MODAL);

    const isOpenedTask = !!openedTask;

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const formik = useFormik({
        initialValues: {
            title: openedTask?.title || '',
            description: openedTask?.description || '',
            state: openedTask?.state || DEFAULT_VALUE_STATE.value,
            estimation: openedTask?.estimation || '',
            priority: openedTask?.priority || DEFAULT_VALUE_PRIORITY.value,
            sprints: openedTask?.sprints || [activeSprint],
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
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
            checkedSprints={checkedSprints}
            setCheckedSprints={setCheckedSprints}
            formik={formik}
            sprints={sprints}
            isOpenedTask={isOpenedTask}
        />
    );
};

export default TaskFormContainer;
