import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT } from '@src/constants';

const useStyles = makeStyles((theme) =>
    createStyles({
        board: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
            minHeight: '100vh',
            backgroundColor: theme.palette.background.default,

            '&:after': {
                content: '""',
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0)',
                transition: '0.2s',
                left: 0,
                top: 0,
                zIndex: '-1',
            },
        },
        boardDark: {
            [theme.breakpoints.down('sm')]: {
                '&:after': {
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: '0',
                },
            },
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
            backgroundColor: theme.palette.action.hover,
        },
        card: {
            padding: COMMON_INDENT / 2,
            marginBottom: COMMON_INDENT / 2,
            cursor: 'pointer',
        },
    })
);

export default useStyles;
