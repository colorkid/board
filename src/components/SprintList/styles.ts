import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT } from '@src/constants';

const useStyles = makeStyles(() =>
    createStyles({
        sprintList: {
            maxHeight: 221,
        },
        sprintListItem: {
            display: 'flex',
            alignItems: 'center',
            paddingTop: COMMON_INDENT / 4,
            paddingBottom: COMMON_INDENT / 4,
            cursor: 'pointer',

            '&:hover': {
                fontWeight: 600,
            },
        },
        sprintListDelete: {
            marginRight: COMMON_INDENT / 3,
            cursor: 'pointer',
        },
        overFlowY: {
            overflowY: 'scroll',
        },
        sprintListItemActive: {
            fontWeight: 600,
        },
    })
);

export default useStyles;
