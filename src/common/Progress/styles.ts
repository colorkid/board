import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        progress: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: '50%',
            marginLeft: '50%',
        }
    })
);
export default useStyles;
