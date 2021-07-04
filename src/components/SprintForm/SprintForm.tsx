import React, { ReactElement } from 'react';
import { LocalizationProvider, StaticDateRangePicker } from '@material-ui/pickers';
import { Button, Typography } from '@material-ui/core';
import AdapterDateFns from '@material-ui/pickers/adapter/date-fns';
import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes';
import useStyles from './styles';

interface ISprintForm {
    dates: DateRange;
    setDates: (arg: DateRange<Date>) => void;
    isEnableButtons: boolean;
    setInitialDates: () => void;
    saveSprint: () => void;
}

const SprintForm = (props: ISprintForm): ReactElement => {
    const { dates, setDates, isEnableButtons, setInitialDates, saveSprint } = props;
    const classes = useStyles();

    return (
        <form>
            <header className={classes.header}>
                <Typography variant="h5" component="h2">
                    Create a new sprint
                </Typography>
            </header>
            <div className={classes.calendar}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDateRangePicker
                        displayStaticWrapperAs="desktop"
                        value={dates}
                        // @ts-ignore
                        onChange={(newDates) => setDates(newDates)}
                        /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
                        renderInput={(startProps, endProps) => <></>}
                        minDate={new Date()}
                    />
                </LocalizationProvider>
            </div>
            <footer className={classes.footer}>
                <Button color="secondary" onClick={setInitialDates} disabled={!isEnableButtons}>
                    Clear
                </Button>
                <Button color="primary" onClick={saveSprint} disabled={!isEnableButtons}>
                    Create
                </Button>
            </footer>
        </form>
    );
};

export default SprintForm;
