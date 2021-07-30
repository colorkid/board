import React, { ReactElement } from 'react';
import { LocalizationProvider, StaticDateRangePicker } from '@material-ui/pickers';
import { Button, Typography } from '@material-ui/core';
import AdapterDateFns from '@material-ui/pickers/adapter/date-fns';
import { DateRange } from '@material-ui/pickers/DateRangePicker/RangeTypes';
import {
    CLEAR_BTN_TXT,
    CLEAR_PERIOD_CONFIRM_MESSAGE,
    CREATE_BTN_TXT, MIN_DESKTOP_WIDTH,
    SPRINT_FORM_TITLE_CREATE,
} from '@src/constants';
import Confirm from '@src/common/Confirm';
import useWindowSize from "@src/hooks/useWindowSize";
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
    const { width } = useWindowSize();
    const classes = useStyles();

    const devise = width >= MIN_DESKTOP_WIDTH ? "desktop" : 'mobile';

    return (
        <form>
            <header className={classes.header}>
                <Typography variant="h5" component="h2">
                    {SPRINT_FORM_TITLE_CREATE}
                </Typography>
            </header>
            <div className={classes.calendar}>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDateRangePicker
                        displayStaticWrapperAs={devise}
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
                <Confirm
                    disabled={!isEnableButtons}
                    okMethod={setInitialDates}
                    message={CLEAR_PERIOD_CONFIRM_MESSAGE}
                >
                    <Button color="secondary" disabled={!isEnableButtons}>
                        {CLEAR_BTN_TXT}
                    </Button>
                </Confirm>
                <Button color="primary" onClick={saveSprint} disabled={!isEnableButtons}>
                    {CREATE_BTN_TXT}
                </Button>
            </footer>
        </form>
    );
};

export default SprintForm;
