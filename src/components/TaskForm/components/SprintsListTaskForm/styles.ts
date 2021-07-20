import {createStyles, makeStyles} from '@material-ui/core';
import {COMMON_INDENT} from '@src/constants';

const useStyles = makeStyles(() =>
    createStyles({
        sprintsList: {
            display: 'flex',
            flexDirection: 'column',
            height: 146,
        },
        overFlowY: {
            overflowY: 'scroll',
        },
        sprintsLabel: {
            marginBottom: COMMON_INDENT / 2,
        },
        sprintsItem: {
            // paddingRight: COMMON_INDENT,
            // paddingLeft: COMMON_INDENT,
            display: 'flex',
            height: 30,
            '& .MuiTypography-root': {
                fontSize: 14,
            },
        },
    })
);

export default useStyles;
