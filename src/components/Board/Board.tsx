import React, { DragEvent, ReactElement, useState } from 'react';
import cn from 'classnames';
import Task from '@src/components/Board/components/Task';
import { TaskListType } from '@src/redux/task/taskReducer';
import useStyles from './styles';

// TODO - MOVE TYPES TO REDUX

type StateType = {
    title: string;
    value: string;
};

interface IBoard {
    data: TaskListType;
    columnList: StateType[];
    moveTaskOnBoard: (arg: string, arg2: string) => void;
    showTaskModal: () => void;
    openTask: (arg: string) => void;
}

const Board = (props: IBoard): ReactElement => {
    const { data, columnList, moveTaskOnBoard, showTaskModal, openTask } = props;
    const [touchedTaskId, setTouchedTaskId] = useState<string>('');
    const [startedColumn, setStartedColumn] = useState<string>('');
    const [isHoverTab, setIsHoverTab] = useState<string>('');
    const classes = useStyles();

    const maxWidthColumn = 100 / columnList.length;

    const onDragStart = (id: string, startColumn: string) => {
        setTouchedTaskId(id);
        setStartedColumn(startColumn);
    };

    const onDragOver = (e: DragEvent<HTMLDivElement>, column: string) => {
        setIsHoverTab(column);
        e.preventDefault();
    };

    const onDrop = (column: string) => {
        moveTaskOnBoard(column, touchedTaskId);
        setIsHoverTab('');
        setStartedColumn('');
    };

    return (
        <div className={classes.board}>
            {columnList.map((item) => {
                return (
                    <div
                        style={{ maxWidth: `${maxWidthColumn}%` }}
                        key={item.value}
                        className={cn({
                            [classes.column]: true,
                            [classes.columnActive]:
                                isHoverTab === item.value && startedColumn !== item.value,
                        })}
                        onDragOver={(e) => onDragOver(e, item.value)}
                        onDrop={() => onDrop(item.value)}
                    >
                        <header className={classes.header}>{item.title}</header>
                        {Object.keys(data).map((key) => {
                            if (data[key].state === item.value) {
                                return (
                                    <Task
                                        id={key}
                                        value={item.value}
                                        data={data[key]}
                                        key={key}
                                        onDragStart={onDragStart}
                                        showTaskModal={showTaskModal}
                                        openTask={openTask}
                                    />
                                );
                            }
                        })}
                    </div>
                );
            })}
        </div>
    );
};

export default Board;
