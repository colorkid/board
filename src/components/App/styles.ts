import { createStyles, makeStyles } from '@material-ui/core';
import { DRAWER_WIDTH } from '@src/styleConstants';

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
            marginTop: 64,
        }
    })
);

export default useStyles;
