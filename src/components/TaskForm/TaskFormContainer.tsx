import React, { ReactElement } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import TaskForm from './TaskForm';

interface ITaskFormContainer {
    handleCloseModal?: () => void;
}

const TaskFormContainer = (props: ITaskFormContainer): ReactElement => {
    const { handleCloseModal } = props;
    const tasks = useAppSelector((state: RootState) => state.tasks);
    const dispatch = useAppDispatch();

    const saveTask = () => {
        if (handleCloseModal) {
            handleCloseModal();
        }
    };

    return <TaskForm saveTask={saveTask} />;
};

export default TaskFormContainer;
