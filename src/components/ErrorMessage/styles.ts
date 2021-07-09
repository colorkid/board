import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_PADDING } from '@src/constants';

const useStyles = makeStyles((theme) =>
    createStyles({
        errorMessage: {
            display: 'flex',
            padding: COMMON_PADDING,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
        },
        errorMessageTxt: {
            marginLeft: COMMON_PADDING / 2,
        },
    })
);

export default useStyles;