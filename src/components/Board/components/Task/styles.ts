import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT } from '@src/constants';

const BORDER = `${COMMON_INDENT / 4}px solid`;

const useStyles = makeStyles((theme) =>
    createStyles({
        card: {
            padding: COMMON_INDENT / 2,
            marginBottom: COMMON_INDENT / 2,
            cursor: 'pointer',
            wordBreak: 'break-all',
        },
        middle: {
            borderLeft: BORDER,
            borderLeftColor: theme.palette.warning.main,
        },
        high: {
            borderLeft: BORDER,
            borderLeftColor: theme.palette.error.main,
        },
        low: {
            borderLeft: BORDER,
            borderLeftColor: theme.palette.success.main,
        },
        footer: {
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: COMMON_INDENT / 2,
        },
        footerInfo: {
            display: 'flex',
            flexWrap: 'wrap',
        },
        priority: {
            width: '100%',
            marginRight: COMMON_INDENT / 2,
        }
    })
);

export default useStyles;