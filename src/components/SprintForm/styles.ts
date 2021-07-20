import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT } from '@src/constants';

const useStyles = makeStyles((theme) =>
    createStyles({
        header: {
            padding: COMMON_INDENT,
        },
        calendar: {
            border: '1px solid',
            borderColor: theme.palette.grey[400],
            borderRight: 'none',
            borderLeft: 'none',

            '& .MuiPickersDesktopDateRangeCalendar-calendar': {
                minHeight: 264
            }
        },
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: COMMON_INDENT,
        },
    })
);

export default useStyles;
