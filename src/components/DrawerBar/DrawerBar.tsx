import React, { ReactElement, useRef } from 'react';
import cn from 'classnames';
import { Button, Drawer, IconButton } from '@material-ui/core';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import Logo from '../../common/Logo';
import AuthUser from '../AuthUser/AuthUserContainer';
import { COLUMNS_BTN_TXT } from '@src/constants';
import SprintList from '../SprintList';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ThemeToggle from "@src/components/ThemeToggle/ThemeToggleContainer";
import useStyles from './styles';

interface IDrawerBar {
    showSprintModal: () => void;
    showTaskModal: () => void;
    showSettingsModal: () => void;
    isShowedMobileDrawer: boolean;
    setIsShowedMobileDrawer: () => void;
}

const DrawerBar = (props: IDrawerBar): ReactElement => {
    const {
        showSprintModal,
        showTaskModal,
        showSettingsModal,
        isShowedMobileDrawer,
        setIsShowedMobileDrawer,
    } = props;
    const classes = useStyles();

    const drawerRef = useRef(null);

    const burgerMenuHandler = () => {
        setIsShowedMobileDrawer();
    };

    return (
        <>
            <Drawer
                ref={drawerRef}
                variant="permanent"
                className={cn({
                    [classes.drawer]: true,
                    [classes.drawerShowed]: isShowedMobileDrawer,
                })}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Logo />
                <div className={classes.buttons}>
                    <Button
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
                <AuthUser />
                <div className={classes.settings}>
                    <Button
                        variant="outlined"
                        startIcon={<SettingsIcon />}
                        onClick={showSettingsModal}
                    >
                        {COLUMNS_BTN_TXT}
                    </Button>
                    <ThemeToggle />
                </div>
            </Drawer>
            <IconButton className={classes.burger} onClick={burgerMenuHandler}>
                {isShowedMobileDrawer ? (
                    <CloseIcon color="primary" />
                ) : (
                    <MenuIcon color="primary" />
                )}
            </IconButton>
        </>
    );
};

export default DrawerBar;
