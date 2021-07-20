import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT } from '@src/constants';

const useStyles = makeStyles(() =>
    createStyles({
        body: {
            paddingLeft: COMMON_INDENT,
            paddingRight: COMMON_INDENT,
            paddingTop: COMMON_INDENT,
        },
        trigger: {
            display: 'flex',
            alignItems: 'center',
        },
        buttons: {
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: COMMON_INDENT / 2,
        },
    })
);

export default useStyles;