import React, { ReactElement } from 'react';
import cn from 'classnames';
import DeleteIcon from '@material-ui/icons/Delete';
import { SprintListType } from '@src/redux/sprint/sprintReducer';
import LabelSprint from '@src/components/LabelSprint';
import {
    AFTER_COUNT_SPRINTS_SHOW_SCROLL_COMMON,
    REMOVE_SPRINT_CONFIRM_MESSAGE,
    SPRINT_BACKLOG,
} from '@src/constants';
import useStyles from './styles';
import Confirm from '@src/components/Confirm';

interface ISprintList {
    sprints: SprintListType;
    removeSprint: (arg: string) => void;
}

const SprintList = (props: ISprintList): ReactElement => {
    const { sprints, removeSprint } = props;
    const classes = useStyles();

    const countSprints = Object.keys(sprints).length;

    const deleteHandler = (id: string) => {
        removeSprint(id);
    };

    const Sprints = Object.keys(sprints).map((item) => {
        const numberSprint = sprints[item].number;
        const isBacklog = numberSprint === SPRINT_BACKLOG;

        return (
            <div key={numberSprint} className={classes.sprintListItem}>
                <Confirm
                    disabled={isBacklog}
                    okMethod={() => deleteHandler(item)}
                    message={REMOVE_SPRINT_CONFIRM_MESSAGE}
                >
                    <DeleteIcon
                        className={classes.sprintListDelete}
                        color={isBacklog ? 'disabled' : 'secondary'}
                    />
                </Confirm>
                <LabelSprint
                    sprint={sprints[item]}
                    isBacklog={isBacklog}
                    numberSprint={numberSprint}
                />
            </div>
        );
    });

    return (
        <div
            className={cn(classes.sprintList, {
                [classes.overFlowY]: countSprints > AFTER_COUNT_SPRINTS_SHOW_SCROLL_COMMON,
            })}
        >
            {Sprints}
        </div>
    );
};

export default SprintList;
