import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_PADDING } from '@src/constants';

const useStyles = makeStyles((theme) =>
    createStyles({
        formWrapper: {
            width: '100%',
        },
        switchTypeAuth: {
            display: 'flex',
            color: theme.palette.grey[500],
        },
        switchTypeAuthItem: {
            marginRight: COMMON_PADDING,
            cursor: 'pointer',
        },
        switchTypeAuthItemActive: {
            cursor: 'inherit',
            fontWeight: theme.typography.fontWeightBold,
        },
        submit: {
            marginTop: COMMON_PADDING,
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
        }
    })
);

export default useStyles;
