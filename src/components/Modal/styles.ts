import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT } from '@src/constants';

const useStyles = makeStyles((theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: COMMON_INDENT,
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius,
            boxShadow: theme.shadows[5],
        },
    })
);

export default useStyles;
