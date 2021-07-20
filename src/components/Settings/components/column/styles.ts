import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT } from '@src/constants';

const useStyles = makeStyles((theme) =>
    createStyles({
        header: {
            display: 'flex',
        },
        headerName: {
            width: 200,
            marginRight: COMMON_INDENT,
        },
        headerOrder: {
            width: 75,
            marginRight: COMMON_INDENT,
        },
        column: {
            display: 'flex',
            paddingBottom: COMMON_INDENT / 2,
            paddingTop: COMMON_INDENT / 2,
        },
        columnDeleted: {
            filter: 'blur(5px)',
            pointerEvents: 'none',
        },
        name: {
            width: 200,
            marginRight: COMMON_INDENT,
        },
        order: {
            width: 75,
            marginRight: COMMON_INDENT,
        },
        buttons: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: COMMON_INDENT / 2,
        },
        delete: {
            border: `1px solid ${theme.palette.grey[400]}`,
        },
    })
);

export default useStyles;
