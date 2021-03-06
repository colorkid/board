import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT } from '@src/constants';

const useStyles = makeStyles((theme) =>
    createStyles({
        header: {
            padding: COMMON_INDENT,
        },
        body: {
            display: 'flex',
            justifyContent: 'space-between',
            padding: COMMON_INDENT,

            [theme.breakpoints.down('sm')]: {
                flexWrap: 'wrap',
            },
        },
        cell: {
            [theme.breakpoints.down('sm')]: {
                width: '100%!important',
            },
        },
        cellLeft: {
            width: `calc(70% - ${COMMON_INDENT / 2}px)`,
        },
        cellRight: {
            width: `calc(30% - ${COMMON_INDENT / 2}px)`,
        },
        footer: {
            display: 'flex',
            justifyContent: 'flex-end',
            padding: COMMON_INDENT,
        },
        field: {
            marginBottom: COMMON_INDENT,
        },
        textArea: {
            '& .MuiInputBase-root': {
                paddingBottom: 13,
            },
        },
    })
);

export default useStyles;
