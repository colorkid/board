import React, { DragEvent, ReactElement, useState } from 'react';
import cn from 'classnames';
import Task from '@src/components/Board/components/Task';
import { TaskListType } from '@src/redux/task/taskReducer';
import useStyles from './styles';
import { ListItemType } from '@src/redux/board/boardReducer';

interface IBoard {
    data: TaskListType;
    columnList: ListItemType[];
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
                        key={item.id}
                        className={cn({
                            [classes.column]: true,
                            [classes.columnActive]:
                                isHoverTab === item.id && startedColumn !== item.id,
                        })}
                        onDragOver={(e) => onDragOver(e, item.id)}
                        onDrop={() => onDrop(item.id)}
                    >
                        <header className={classes.header}>{item.title}</header>
                        {Object.keys(data).map((key) => {
                            if (data[key].state === item.id) {
                                return (
                                    <Task
                                        id={key}
                                        value={item.id}
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
