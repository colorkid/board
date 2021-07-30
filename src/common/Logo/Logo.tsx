import React, { ReactElement } from 'react';
import useStyles from './styles';

const Logo = (): ReactElement => {
    const classes = useStyles();

    return <div className={classes.logo} />;
};

export default Logo;