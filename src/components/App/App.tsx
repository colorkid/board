import React, { ReactElement } from 'react';
import { AppBar, CssBaseline, Toolbar } from '@material-ui/core';
import useStyles from './styles';
import DrawerBarContainer from '../DrawerBar';

const App = (): ReactElement => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>Toolbar - Board</Toolbar>
            </AppBar>
            <DrawerBarContainer />
            <div className={classes.body}>body</div>
        </div>
    );
};

export default App;
