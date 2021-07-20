import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT } from '@src/constants';

const useStyles = makeStyles((theme) =>
    createStyles({
        board: {
            display: 'flex',
            width: '100%',
            minHeight: '100vh',
            backgroundColor: theme.palette.grey[100],
        },
        header: {
            marginBottom: COMMON_INDENT / 2,
        },
        column: {
            width: '100%',
            borderRight: '1px solid',
            borderRightColor: theme.palette.grey[300],
            padding: COMMON_INDENT / 2,
            transition: '0.2s',

            '&:last-child': {
                border: 'none',
            },
        },
        columnActive: {
            backgroundColor: theme.palette.grey[200],
        },
        card: {
            padding: COMMON_INDENT / 2,
            marginBottom: COMMON_INDENT / 2,
            cursor: 'pointer',
        },
    })
);

export default useStyles;
