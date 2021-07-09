import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_PADDING } from '@src/constants';

const useStyles = makeStyles(() =>
    createStyles({
        header: {
            padding: COMMON_PADDING,
        },
        body: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: COMMON_PADDING,
        },
        cell: {},
        cellLeft: {
            width: `calc(70% - ${COMMON_PADDING / 2}px)`,
        },
        cellRight: {
            width: `calc(30% - ${COMMON_PADDING / 2}px)`,
        },
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: COMMON_PADDING,
        },
        field: {
            marginBottom: COMMON_PADDING,
        },
        textArea: {
            '& .MuiInputBase-root': {
                paddingBottom: 13,
            },
        },
    })
);

export default useStyles;
