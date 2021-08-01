import { createStyles, makeStyles } from '@material-ui/core';
import logo from '@src/asset/logo.png';

const useStyles = makeStyles((theme) =>
    createStyles({
        logo: {
            width: '100%',
            backgroundImage: `url(${logo})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100%',
            minHeight: '195px',

            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        }
    })
);

export default useStyles;
