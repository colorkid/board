import React, { memo, ReactElement } from 'react';
import { Paper, Typography } from '@material-ui/core';
import cn from 'classnames';
import { TaskType } from '@src/redux/task/taskReducer';
import { cutString } from '@src/utils';
import {
    ESTIMATION,
    MAX_DESCRIPTION_TASK_LENGTH,
    MAX_ESTIMATION_TASK_LENGTH,
    MAX_TITLE_TASK_LENGTH,
    PRIORITY,
    REMOVE_TASK_CONFIRM_MESSAGE,
} from '@src/constants';
import Confirm from '@src/common/Confirm';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';

interface ITask {
    value: string;
    data: TaskType;
    id: string;
    onDragStart: (id: string, value: string) => void;
    showTaskModal: () => void;
    openTask: (id: string) => void;
    removeTask: (id: string) => void;
}

const Task = (props: ITask): ReactElement => {
    const {
        data: { title, description, estimation, priority, order },
        value,
        id,
        onDragStart,
        showTaskModal,
        openTask,
        removeTask,
    } = props;
    const classes = useStyles();

    const onDoubleClickHandler = () => {
        openTask(id);
        showTaskModal();
    };

    const deleteHandler = () => {
        removeTask(id);
    };

    return (
        <Paper
            onTouchStart={() => onDragStart(id, value)}
            onDragStart={() => onDragStart(id, value)}
            onDoubleClick={onDoubleClickHandler}
            draggable
            // @ts-ignore
            className={cn(classes.card, classes[priority])}
            data-order={order}
        >
            <Typography variant="subtitle1">{cutString(title, MAX_TITLE_TASK_LENGTH)}</Typography>
            <Typography color="textSecondary" variant="body2">
                {cutString(description, MAX_DESCRIPTION_TASK_LENGTH)}
            </Typography>
            <footer className={classes.footer}>
                <div className={classes.footerInfo}>
                    <Typography
                        color="textSecondary"
                        variant="caption"
                        className={classes.priority}
                    >
                        {PRIORITY}: {priority}
                    </Typography>
                    {estimation && (
                        <Typography color="textSecondary" variant="caption">
                            {ESTIMATION}: {cutString(estimation, MAX_ESTIMATION_TASK_LENGTH)}
                        </Typography>
                    )}
                </div>
                <Confirm okMethod={deleteHandler} message={REMOVE_TASK_CONFIRM_MESSAGE}>
                    <DeleteIcon color="secondary" />
                </Confirm>
            </footer>
        </Paper>
    );
};

export default memo(Task);
