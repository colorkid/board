import React, { DragEvent, ReactElement, TouchEvent, useState } from 'react';
import cn from 'classnames';
import Task from '@src/components/Board/components/Task';
import { TaskListType } from '@src/redux/task/taskReducer';
import { ColumnListType } from '@src/redux/columns/columnsReducer';
import { MIN_DESKTOP_WIDTH, SPRINT_BACKLOG } from '@src/constants';
import Progress from '@src/common/Progress';
import ErrorMessage from '@src/common/ErrorMessage';
import useWindowSize from '@src/hooks/useWindowSize';
import useStyles from './styles';

interface IBoard {
    data: TaskListType;
    columnList: ColumnListType;
    moveTaskOnColumns: (column: string, touchedTaskId: string, target: EventTarget) => void;
    showTaskModal: () => void;
    openTask: (id: string) => void;
    activeSprint: string;
    removeTask: (id: string) => void;
    isFetching: boolean;
    error?: string;
    reloadData?: () => void;
    isShowedMobileDrawer: boolean;
}

const Board = (props: IBoard): ReactElement => {
    const {
        data,
        columnList,
        moveTaskOnColumns,
        showTaskModal,
        openTask,
        activeSprint,
        removeTask,
        isFetching,
        error,
        reloadData,
        isShowedMobileDrawer,
    } = props;
    const [touchedTaskId, setTouchedTaskId] = useState<string>('');
    const [startedColumn, setStartedColumn] = useState<string>('');
    const [isHoverTab, setIsHoverTab] = useState<string>('');
    const { width } = useWindowSize();
    const classes = useStyles();

    const ratioSize = width >= MIN_DESKTOP_WIDTH ? 1 : 2;
    const maxWidthColumn = (100 / columnList.length) * ratioSize;

    const onDragStart = (id: string, startColumn: string) => {
        setTouchedTaskId(id);
        setStartedColumn(startColumn);
    };

    const onDragOver = (e: DragEvent<HTMLDivElement>, column: string) => {
        setIsHoverTab(column);
        e.preventDefault();
    };

    const onDrop = (column: string, e: DragEvent<HTMLDivElement> | TouchEvent<HTMLDivElement>) => {
        if (column !== SPRINT_BACKLOG) {
            moveTaskOnColumns(column, touchedTaskId, e.target);
        }

        setIsHoverTab('');
        setStartedColumn('');
    };

    return (
        <div className={cn({ [classes.board]: true, [classes.boardDark]: isShowedMobileDrawer })}>
            {isFetching ? (
                <Progress />
            ) : error ? (
                <ErrorMessage
                    style={{ width: '100%', alignSelf: 'start' }}
                    message={error}
                    reload={reloadData}
                />
            ) : (
                columnList.map((item) => {
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
                            onDrop={(e) => onDrop(item.id, e)}
                            onTouchEnd={(e) => onDrop(item.id, e)}
                        >
                            <header className={classes.header}>{item.title}</header>
                            {Object.keys(data).map((key) => {
                                if (
                                    activeSprint === SPRINT_BACKLOG ||
                                    (activeSprint !== SPRINT_BACKLOG && data[key].state === item.id)
                                ) {
                                    return (
                                        <Task
                                            id={key}
                                            value={item.id}
                                            data={data[key]}
                                            key={key}
                                            onDragStart={onDragStart}
                                            showTaskModal={showTaskModal}
                                            openTask={openTask}
                                            removeTask={removeTask}
                                        />
                                    );
                                }
                            })}
                        </div>
                    );
                })
            )}
        </div>
    );
};

export default Board;
