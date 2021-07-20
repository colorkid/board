import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT } from '@src/constants';

const useStyles = makeStyles((theme) =>
    createStyles({
        errorMessage: {
            display: 'flex',
            padding: COMMON_INDENT,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
        },
        errorMessageTxt: {
            marginLeft: COMMON_INDENT / 2,
        },
    })
);

export default useStyles;