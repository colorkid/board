import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT } from '@src/constants';

const useStyles = makeStyles(() =>
    createStyles({
        settings: {
            padding: COMMON_INDENT,
        },
    })
);

export default useStyles;
