import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT } from '@src/constants';

const useStyles = makeStyles((theme) =>
    createStyles({
        userInfo: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        },
        submit: {
            marginTop: COMMON_INDENT,
        },
        userInfoTitle: {
            display: 'flex',
        },
        userInfoName: {
            marginRight: COMMON_INDENT / 2,
            fontWeight: theme.typography.fontWeightBold,
        },
        userInfoEmail: {
            wordBreak: 'break-all',
        },
    })
);

export default useStyles;
