import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_PADDING, DRAWER_WIDTH } from '@src/styleConstants';

const useStyles = makeStyles(() =>
    createStyles({
        drawer: {
            display: 'flex',
            width: DRAWER_WIDTH,
        },
        drawerPaper: {
            width: DRAWER_WIDTH,
            padding: COMMON_PADDING,
        },
        buttons: {
            display: 'flex',
        },
        marginRight: {
            marginRight: COMMON_PADDING,
        },
    })
);

export default useStyles;
