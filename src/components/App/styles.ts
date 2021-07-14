import { createStyles, makeStyles } from '@material-ui/core';
import { DRAWER_WIDTH } from '@src/constants';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${DRAWER_WIDTH}px)`,
            marginLeft: DRAWER_WIDTH,
        },
        body: {
            width: '100%',
            marginTop: 64,
        }
    })
);

export default useStyles;
