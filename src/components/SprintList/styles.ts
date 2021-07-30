import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT, SPRINTS_LIST_HEIGHT } from '@src/constants';

const useStyles = makeStyles((theme) =>
    createStyles({
        sprintList: {
            maxHeight: SPRINTS_LIST_HEIGHT,
            minHeight: SPRINTS_LIST_HEIGHT / 3,
            marginTop: COMMON_INDENT,
            paddingTop: COMMON_INDENT / 3,
            borderTop: '1px solid',
            borderTopColor: theme.palette.grey[300],
            paddingBottom: COMMON_INDENT / 3,
        },
        sprintListItem: {
            display: 'flex',
            alignItems: 'center',
            paddingTop: COMMON_INDENT / 4,
            paddingBottom: COMMON_INDENT / 4,
        },
        sprintListDelete: {
            marginRight: COMMON_INDENT / 3,
            cursor: 'pointer',
        },
        overFlowY: {
            overflowY: 'scroll',
        },
        sprintListItemLabel: {
            cursor: 'pointer',

            '&:hover': {
                fontWeight: 600,
            },
        },
        sprintListItemLabelActive: {
            fontWeight: 600,
        },
        sprintListProgress: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: SPRINTS_LIST_HEIGHT / 2,
        },
    })
);

export default useStyles;
