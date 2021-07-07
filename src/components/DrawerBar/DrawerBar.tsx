import React, { ReactElement } from 'react';
import { Button, Drawer } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AppTitle from '../AppTitle';
import AuthUser from '../AuthUser/AuthUserContainer';
import useStyles from './styles';
import { SPRINT_MODAL } from '@src/constants';

interface IDrawerBar {
    showSprintModal: () => void;
    showTaskModal: () => void;
}

const DrawerBar = (props: IDrawerBar): ReactElement => {
    const { showSprintModal, showTaskModal } = props;
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
            <div className={classes.buttons}>
                <Button
                    data-testid={SPRINT_MODAL}
                    variant="contained"
                    color="primary"
                    className={classes.marginRight}
                    startIcon={<AddCircleOutlineIcon />}
                    onClick={showSprintModal}
                >
                    Sprint
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddCircleOutlineIcon />}
                    onClick={showTaskModal}
                >
                    Task
                </Button>
            </div>
            <AuthUser />
        </Drawer>
    );
};

export default DrawerBar;