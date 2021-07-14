import React, { ReactElement } from 'react';
import { Paper, Typography } from '@material-ui/core';
import cn from 'classnames';
import { TaskType } from '@src/redux/task/taskReducer';
import { cutString } from '@src/utils';
import { MAX_DESCRIPTION_TASK_LENGTH, MAX_TITLE_TASK_LENGTH } from '@src/constants';
import useStyles from './styles';

interface ITask {
    value: string;
    data: TaskType;
    id: string;
    onDragStart: (arg: string, arg2: string) => void;
}

const Task = (props: ITask): ReactElement => {
    const {
        data: { title, description, estimation, priority },
        value,
        id,
        onDragStart,
    } = props;
    const classes = useStyles();

    return (
        <Paper
            onDragStart={() => onDragStart(id, value)}
            draggable
            // @ts-ignore
            className={cn(classes.card, classes[priority])}
        >
            <Typography variant="subtitle1">{cutString(title, MAX_TITLE_TASK_LENGTH)}</Typography>
            <Typography color="textSecondary" variant="body2">
                {cutString(description, MAX_DESCRIPTION_TASK_LENGTH)}
            </Typography>
            <footer className={classes.footer}>
                <Typography variant="caption">{priority}</Typography>
                <Typography variant="caption">{estimation}</Typography>
            </footer>
        </Paper>
    );
};

export default Task;