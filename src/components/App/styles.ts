import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: 'flex',

            [theme.breakpoints.down('sm')]: {
                flexWrap: 'wrap',
            },
        },
        body: {
            width: '100%',
        }
    })
);

export default useStyles;
