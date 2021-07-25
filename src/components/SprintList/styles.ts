import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT, SPRINTS_LIST_HEIGHT } from '@src/constants';

const useStyles = makeStyles(() =>
    createStyles({
        sprintList: {
            maxHeight: SPRINTS_LIST_HEIGHT,
            minHeight: SPRINTS_LIST_HEIGHT,
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
        sprintListProgress: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: SPRINTS_LIST_HEIGHT,
        },
    })
);

export default useStyles;
