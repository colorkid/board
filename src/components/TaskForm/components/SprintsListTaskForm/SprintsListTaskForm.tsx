import React, { ReactElement } from 'react';
import { SprintListType } from '@src/redux/sprint/sprintReducer';
import { AFTER_COUNT_SPRINTS_SHOW_SCROLL_TASK_FORM, SPRINT_BACKLOG } from '@src/constants';
import { Checkbox, FormControlLabel, FormLabel } from '@material-ui/core';
import cn from 'classnames';
import useStyles from './styles';
import LabelSprint from '@src/components/LabelSprint';

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

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const numberSprint = event.target.name;
        const updatedCheckedSprints = checkedSprints.includes(numberSprint)
            ? checkedSprints.filter((item) => item !== numberSprint)
            : [...checkedSprints, numberSprint];
        setCheckedSprints(updatedCheckedSprints);
    };

    const Sprints = Object.keys(sprints).map((item) => {
        const numberSprint = sprints[item].number;
        const isBacklog = numberSprint === SPRINT_BACKLOG;

        return (
            <div className={classes.sprintsItem} key={numberSprint}>
                <FormControlLabel
                    control={
                        <Checkbox
                            disabled={isBacklog}
                            name={numberSprint}
                            checked={checkedSprints.includes(numberSprint.toString())}
                            onChange={onChangeHandler}
                        />
                    }
                    label={
                        <LabelSprint
                            sprint={sprints[item]}
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
