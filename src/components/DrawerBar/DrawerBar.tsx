import React, { ReactElement } from 'react';
import { Drawer } from '@material-ui/core';
import AppTitle from '../AppTitle';
import AuthUser from '../../containers/AuthUserContainer';
import useStyles from './styles';

const DrawerBar = (): ReactElement => {
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <AppTitle />
            <AuthUser />
        </Drawer>
    );
};

export default DrawerBar;