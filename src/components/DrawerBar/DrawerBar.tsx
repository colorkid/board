import React, { ReactElement } from 'react';
import { Button, Drawer } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import Logo from '../../common/Logo';
import AuthUser from '../AuthUser/AuthUserContainer';
import { SETTINGS_BTN_TXT, SPRINT_MODAL } from '@src/constants';
import SprintList from '../SprintList';
import useStyles from './styles';

interface IDrawerBar {
    showSprintModal: () => void;
    showTaskModal: () => void;
    showSettingsModal: () => void;
}

const DrawerBar = (props: IDrawerBar): ReactElement => {
    const { showSprintModal, showTaskModal, showSettingsModal } = props;
    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Logo />
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
            <SprintList />
            <div className={classes.buttons}>
                <Button variant="outlined" startIcon={<SettingsIcon />} onClick={showSettingsModal}>
                    {SETTINGS_BTN_TXT}
                </Button>
            </div>
            <AuthUser />
        </Drawer>
    );
};

export default DrawerBar;