import React, { ReactElement, useEffect, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import TaskForm from './TaskForm';
import { useFormik } from 'formik';
import { DEFAULT_VALUE_PRIORITY, DEFAULT_VALUE_STATE, SPRINT_BACKLOG } from '@src/constants';
import { validationSchema } from '@src/components/TaskForm/validationSchema';
import { addTask, TaskType } from '@src/redux/task/taskReducer';
import { generateUUID } from '@src/utils';

interface ITaskFormContainer {
    handleCloseModal?: () => void;
}

const TaskFormContainer = (props: ITaskFormContainer): ReactElement => {
    const { handleCloseModal } = props;
    const sprints = useAppSelector((state: RootState) => state.sprints.list);
    const [checkedSprints, setCheckedSprints] = useState<string[]>([]);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setCheckedSprints([...checkedSprints, SPRINT_BACKLOG]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
            state: DEFAULT_VALUE_STATE.value,
            estimation: '',
            priority: DEFAULT_VALUE_PRIORITY.value,
            sprints: [SPRINT_BACKLOG],
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            saveTask(values);
        },
    });

    const saveTask = (values: TaskType) => {
        dispatch(
            addTask({
                id: generateUUID(),
                ...values,
                sprints: checkedSprints,
            })
        );

        if (handleCloseModal) {
            handleCloseModal();
        }
    };

    return (
        <TaskForm
            checkedSprints={checkedSprints}
            setCheckedSprints={setCheckedSprints}
            formik={formik}
            sprints={sprints}
        />
    );
};

export default TaskFormContainer;
