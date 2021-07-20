import React, { ReactElement } from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import useStyles from './styles';

type ErrorMessageType = {
    message: string;
    style: React.CSSProperties;
};

const ErrorMessage = (props: ErrorMessageType): ReactElement => {
    const { message, style } = props;
    const classes = useStyles();

    return (
        <div className={classes.errorMessage} style={style} data-testid="errorMessage">
            <ErrorOutlineIcon />
            <div className={classes.errorMessageTxt}>{message}</div>
        </div>
    );
};

export default ErrorMessage;
