import React, { ReactElement } from 'react';
import cn from 'classnames';
import DeleteIcon from '@material-ui/icons/Delete';
import { SprintListType } from '@src/redux/sprint/sprintReducer';
import LabelSprint from '@src/common/LabelSprint';
import {
    AFTER_COUNT_SPRINTS_SHOW_SCROLL_COMMON,
    REMOVE_SPRINT_CONFIRM_MESSAGE,
    SPRINT_BACKLOG,
} from '@src/constants';
import Confirm from '@src/common/Confirm';
import Progress from '@src/common/Progress';
import ErrorMessage from '@src/common/ErrorMessage';
import useStyles from './styles';

interface ISprintList {
    sprints: SprintListType;
    removeSprint: (arg: string) => void;
    activeSprint: string;
    setActiveSprint: (arg: string) => void;
    isFetching: boolean;
    error?: string;
    reloadSprints?: () => void;
}

const SprintList = (props: ISprintList): ReactElement => {
    const {
        sprints,
        removeSprint,
        activeSprint,
        setActiveSprint,
        isFetching,
        error,
        reloadSprints,
    } = props;
    const classes = useStyles();

    const countSprints = Object.keys(sprints).length;

    const deleteHandler = (id: string) => {
        removeSprint(id);
    };

    const setSprintHandler = (id: string) => {
        setActiveSprint(id);
    };

    const Sprints = Object.keys(sprints).map((id) => {
        const numberSprint = sprints[id].number;
        const isBacklog = id === SPRINT_BACKLOG;
        const isActiveSprint = id === activeSprint;

        return (
            <div key={id} className={classes.sprintListItem}>
                <Confirm
                    disabled={isBacklog}
                    okMethod={() => deleteHandler(id)}
                    message={REMOVE_SPRINT_CONFIRM_MESSAGE}
                >
                    <DeleteIcon
                        className={classes.sprintListDelete}
                        color={isBacklog ? 'disabled' : 'secondary'}
                    />
                </Confirm>
                <div
                    className={cn({
                        [classes.sprintListItemLabel]: true,
                        [classes.sprintListItemLabelActive]: isActiveSprint,
                    })}
                    onClick={() => setSprintHandler(id)}
                >
                    <LabelSprint
                        sprint={sprints[id]}
                        isBacklog={isBacklog}
                        numberSprint={numberSprint}
                    />
                </div>
            </div>
        );
    }).reverse();

    return (
        <div
            className={cn(classes.sprintList, {
                [classes.overFlowY]: countSprints > AFTER_COUNT_SPRINTS_SHOW_SCROLL_COMMON,
            })}
        >
            {isFetching ? (
                <div className={classes.sprintListProgress}>
                    <Progress />
                </div>
            ) : error ? (
                <ErrorMessage
                    style={{ width: '100%', alignSelf: 'start' }}
                    message={error}
                    reload={reloadSprints}
                />
            ) : (
                Sprints
            )}
        </div>
    );
};

export default SprintList;
