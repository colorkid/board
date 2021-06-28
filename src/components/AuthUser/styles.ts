import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_PADDING } from '@src/styleConstants';

const useStyles = makeStyles((theme) =>
    createStyles({
        user: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: COMMON_PADDING,
            backgroundColor: theme.palette.grey[300],
            borderRadius: theme.shape.borderRadius,
        },
    })
);

export default useStyles;
