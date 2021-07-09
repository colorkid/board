import {createStyles, makeStyles} from '@material-ui/core';
import {COMMON_PADDING} from '@src/styleConstants';

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
            marginBottom: COMMON_PADDING / 2,
        },
        sprintsItem: {
            // paddingRight: COMMON_PADDING,
            // paddingLeft: COMMON_PADDING,
            display: 'flex',
            height: 30,
            '& .MuiTypography-root': {
                fontSize: 14,
            },
        },
    })
);

export default useStyles;
