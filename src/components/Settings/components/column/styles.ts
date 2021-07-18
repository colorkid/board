import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_PADDING } from '@src/constants';

const useStyles = makeStyles((theme) =>
    createStyles({
        header: {
            display: 'flex',
        },
        headerName: {
            width: 200,
            marginRight: COMMON_PADDING,
        },
        headerOrder: {
            width: 75,
            marginRight: COMMON_PADDING,
        },
        column: {
            display: 'flex',
            paddingBottom: COMMON_PADDING / 2,
            paddingTop: COMMON_PADDING / 2,
        },
        columnDeleted: {
            filter: 'blur(5px)',
            pointerEvents: 'none',
        },
        name: {
            width: 200,
            marginRight: COMMON_PADDING,
        },
        order: {
            width: 75,
            marginRight: COMMON_PADDING,
        },
        buttons: {
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: COMMON_PADDING / 2,
        },
        delete: {
            border: `1px solid ${theme.palette.grey[400]}`,
        },
    })
);

export default useStyles;
