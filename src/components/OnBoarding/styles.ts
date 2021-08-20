import { createStyles, makeStyles } from '@material-ui/core';
import { COMMON_INDENT } from '@src/constants';

const useStyles = makeStyles(() =>
    createStyles({
        onBoarding: {
            maxWidth: 360,
            padding: COMMON_INDENT,
        },
        firstButton: {
            marginRight: COMMON_INDENT,
        },
        onBoardingBody: {
            marginBottom: COMMON_INDENT,
            marginTop: COMMON_INDENT,
        },
        onBoardingFooter: {
            display: 'flex',
            justifyContent: 'flex-end',
        },
    })
);

export default useStyles;
