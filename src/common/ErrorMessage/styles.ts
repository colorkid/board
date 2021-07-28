import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT } from '@src/constants';

const useStyles = makeStyles((theme) =>
    createStyles({
        errorMessage: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            padding: COMMON_INDENT,
            backgroundColor: theme.palette.secondary.main,
            color: theme.palette.common.white,
            fontFamily: 'sans-serif',
        },
        errorMessageTxt: {
            marginTop: 0,
            marginBottom: 0,
            marginRight: 0,
            marginLeft: COMMON_INDENT / 2,
        },
        errorMessageLeft: {
            display: 'flex',
        },
        errorMessageRight: {

        },
    })
);

export default useStyles;