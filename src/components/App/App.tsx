import React, { ReactElement } from 'react';
import { CssBaseline } from '@material-ui/core';
import DrawerBar from '@src/components/DrawerBar';
import Modal from '@src/components/Modal';
import Board from '@src/components/Board';
import useStyles from './styles';

const App = (): ReactElement => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <DrawerBar />
            <div className={classes.body}>
                <Board />
            </div>
            <Modal />
        </div>
    );
};

export default App;