import { CircularProgress } from '@material-ui/core';
import React, { ReactElement } from 'react';
import useStyles from "./styles";

const Progress = (): ReactElement => {
    const classes = useStyles();

    return (
        <div className={classes.progress}>
            <CircularProgress />
        </div>
    );
};

export default Progress;