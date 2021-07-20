import React, { ReactElement } from 'react';
import useStyles from './styles';

const AppTitle = (): ReactElement => {
    const classes = useStyles();

    return <div className={classes.title}>Board - App</div>;
};

export default AppTitle;