import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_PADDING } from '@src/styleConstants';

const useStyles = makeStyles((theme) =>
    createStyles({
        userInfo: {
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
        },
        submit: {
            marginTop: COMMON_PADDING,
        },
        userInfoTitle: {
            display: 'flex',
        },
        userInfoName: {
            marginRight: COMMON_PADDING / 2,
            fontWeight: theme.typography.fontWeightBold,
        },
        userInfoEmail: {
            wordBreak: 'break-all',
        },
    })
);

export default useStyles;
