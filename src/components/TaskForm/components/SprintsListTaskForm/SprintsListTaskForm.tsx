import React, { ChangeEvent, ReactElement } from 'react';
import { SprintListType } from '@src/redux/sprint/sprintReducer';
import { AFTER_COUNT_SPRINTS_SHOW_SCROLL_TASK_FORM, SPRINT_BACKLOG } from '@src/constants';
import { Checkbox, FormControlLabel, FormLabel } from '@material-ui/core';
import cn from 'classnames';
import LabelSprint from '@src/components/LabelSprint';
import useStyles from './styles';

interface ISprintsList {
    sprints: SprintListType;
    checkedSprints: string[];
    setCheckedSprints: (arg: string[]) => void;
    className?: string;
}

const SprintsListTaskForm = (props: ISprintsList): ReactElement => {
    const { sprints, checkedSprints, setCheckedSprints, className } = props;
    const classes = useStyles();

    const countSprints = Object.keys(sprints).length;

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const idSprint = event.target.name;
        const updatedCheckedSprints = checkedSprints.includes(idSprint)
            ? checkedSprints.filter((item) => item !== idSprint)
            : [...checkedSprints, idSprint];

        setCheckedSprints(updatedCheckedSprints);
    };

    const Sprints = Object.keys(sprints).map((id) => {
        const numberSprint = sprints[id].number;
        const isBacklog = id === SPRINT_BACKLOG;

        return (
            <div className={classes.sprintsItem} key={id}>
                <FormControlLabel
                    control={
                        <Checkbox
                            disabled={isBacklog}
                            name={id}
                            checked={checkedSprints.includes(id)}
                            onChange={onChangeHandler}
                        />
                    }
                    label={
                        <LabelSprint
                            sprint={sprints[id]}
                            isBacklog={isBacklog}
                            numberSprint={numberSprint}
                        />
                    }
                />
            </div>
        );
    });

    return (
        <div
            className={cn(classes.sprintsList, className, {
                [classes.overFlowY]: countSprints > AFTER_COUNT_SPRINTS_SHOW_SCROLL_TASK_FORM,
            })}
        >
            <FormLabel className={classes.sprintsLabel}>Sprints:</FormLabel>
            {Sprints}
        </div>
    );
};

export default SprintsListTaskForm;
