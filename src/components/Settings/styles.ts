import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_PADDING } from '@src/constants';

const useStyles = makeStyles(() =>
    createStyles({
        settings: {
            padding: COMMON_PADDING,
        },
    })
);

export default useStyles;
