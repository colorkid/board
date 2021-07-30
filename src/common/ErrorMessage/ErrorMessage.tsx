import React, { ReactElement } from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { Button } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
import useStyles from './styles';

type ErrorMessageType = {
    message: string;
    style?: React.CSSProperties;
    isSaveMarkup?: boolean;
    reload?: () => void;
};

const ErrorMessage = (props: ErrorMessageType): ReactElement => {
    const { message, style, isSaveMarkup, reload } = props;
    const classes = useStyles();

    return (
        <div className={classes.errorMessage} style={style}>
            <div className={classes.errorMessageLeft}>
                <ErrorOutlineIcon />
                {isSaveMarkup ? (
                    <pre className={classes.errorMessageTxt}>{message}</pre>
                ) : (
                    <div className={classes.errorMessageTxt}>{message}</div>
                )}
            </div>
            {reload && (
                <div className={classes.errorMessageRight}>
                    <Button
                        variant="outlined"
                        style={{ color: 'white', borderColor: 'white' }}
                        startIcon={<ReplayIcon />}
                        onClick={reload}
                    >
                        Reload
                    </Button>
                </div>
            )}
        </div>
    );
};

export default ErrorMessage;
