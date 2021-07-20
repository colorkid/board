import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT, DRAWER_WIDTH } from '@src/constants';

const useStyles = makeStyles(() =>
    createStyles({
        drawer: {
            display: 'flex',
            width: DRAWER_WIDTH,
        },
        drawerPaper: {
            width: DRAWER_WIDTH,
            padding: COMMON_INDENT,
        },
        buttons: {
            display: 'flex',
        },
        marginRight: {
            marginRight: COMMON_INDENT,
        },
    })
);

export default useStyles;
