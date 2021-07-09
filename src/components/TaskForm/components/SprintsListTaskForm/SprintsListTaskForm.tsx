import React, { ReactElement } from 'react';
import { SprintItemType } from '@src/redux/sprint/sprintReducer';
import { SPRINT_BACKLOG } from '@src/constants';
import { format } from 'date-fns';
import { Checkbox, FormControlLabel, FormLabel } from '@material-ui/core';
import cn from 'classnames';
import useStyles from './styles';

interface ISprintsList {
    sprints: SprintItemType;
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
        const from = sprints[item].dates[0];
        const to = sprints[item].dates[1];

        const isBacklog = numberSprint == SPRINT_BACKLOG;

        const LabelSprint = isBacklog
            ? `№${numberSprint}`
            : `№${numberSprint} / ${format(new Date(from), 'dd.MM.yyy')} - ${format(
                  new Date(to),
                  'dd.MM.yyy'
              )}`;

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
                    label={LabelSprint}
                />
            </div>
        );
    });

    return (
        <div
            className={cn(classes.sprintsList, className, {
                [classes.overFlowY]: countSprints > 4,
            })}
        >
            <FormLabel className={classes.sprintsLabel}>Sprints:</FormLabel>
            {Sprints}
        </div>
    );
};

export default SprintsListTaskForm;
