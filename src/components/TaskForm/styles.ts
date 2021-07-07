import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_PADDING } from '@src/styleConstants';

const useStyles = makeStyles(() =>
    createStyles({
        header: {
            padding: COMMON_PADDING,
        },
        body: {
            padding: COMMON_PADDING,
        },
    })
);

export default useStyles;
