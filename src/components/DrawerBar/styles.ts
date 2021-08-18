import {createStyles, makeStyles} from '@material-ui/core';
import {COMMON_INDENT, DRAWER_WIDTH} from '@src/constants';

const useStyles = makeStyles((theme) =>
    createStyles({
        drawer: {
            display: 'flex',
            width: DRAWER_WIDTH,
            height: '100%',
            transition: '0.2s',
            zIndex: 1,

            [theme.breakpoints.down('sm')]: {
                position: 'absolute',
                transform: `translateX(-${DRAWER_WIDTH}px)`,
            },
        },
        drawerShowed: {
            [theme.breakpoints.down('sm')]: {
                transform: `translateX(0px)`,
            }
        },
        drawerPaper: {
            width: DRAWER_WIDTH,
            padding: COMMON_INDENT,
        },
        buttons: {
            display: 'flex',
            justifyContent: 'center',
        },
        marginRight: {
            marginRight: COMMON_INDENT,
        },
        settings: {
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: COMMON_INDENT,
        },
        burger: {
            display: 'none',
            position: 'fixed',
            right: COMMON_INDENT,
            top: COMMON_INDENT,
            borderRadius: '50%',
            backgroundColor: 'white',
            width: COMMON_INDENT * 3,
            height: COMMON_INDENT * 3,
            boxShadow: theme.shadows[5],
            zIndex: 1,

            [theme.breakpoints.down('sm')]: {
                display: 'flex',
            },
        }
    })
);

export default useStyles;
