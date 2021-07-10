import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_PADDING } from '@src/constants';

const useStyles = makeStyles(() =>
    createStyles({
        body: {
            paddingLeft: COMMON_PADDING,
            paddingRight: COMMON_PADDING,
            paddingTop: COMMON_PADDING,
        },
        triggerButton: {
            backgroundColor: 'transparent',
            border: 'none',
            padding: 0,
        },
        buttons: {
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: COMMON_PADDING / 2,
        },
    })
);

export default useStyles;