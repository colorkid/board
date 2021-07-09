import {createStyles, makeStyles} from '@material-ui/core';
import {COMMON_PADDING} from '@src/styleConstants';

const useStyles = makeStyles(() =>
    createStyles({
        sprintList: {
            maxHeight: 208,
        },
        sprintListItem: {
            display: 'flex',
            alignItems: 'center',
            marginTop: COMMON_PADDING / 3,
            marginBottom: COMMON_PADDING / 3,
        },
        sprintListDelete: {
            marginRight: COMMON_PADDING / 3,
            cursor: 'pointer',
        },
        overFlowY: {
            overflowY: 'scroll',
        }
    })
);

export default useStyles;
