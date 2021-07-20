import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT } from '@src/constants';

const useStyles = makeStyles((theme) =>
    createStyles({
        user: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: COMMON_INDENT,
            backgroundColor: theme.palette.grey[300],
            borderRadius: theme.shape.borderRadius,
        },
    })
);

export default useStyles;
