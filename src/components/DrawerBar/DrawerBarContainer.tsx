import React, { ReactElement } from 'react';
import DrawerBar from './DrawerBar';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { SETTINGS_MODAL, SPRINT_MODAL, TASK_MODAL } from '@src/constants';
import { showModal, toggleShowedMobileDrawer } from '@src/redux/ui/uiReducer';
import { getIsShowedMobileDrawerSelector } from '@src/redux/selectors';

const DrawerBarContainer = (): ReactElement => {
    const isShowedMobileDrawer = useAppSelector((state: RootState) => getIsShowedMobileDrawerSelector(state));
    const dispatch = useAppDispatch();

    const setIsShowedMobileDrawer = () => {
        dispatch(toggleShowedMobileDrawer(!isShowedMobileDrawer));
    };

    const showSprintModal = () => {
        dispatch(showModal(SPRINT_MODAL));
    };

    const showTaskModal = () => {
        dispatch(showModal(TASK_MODAL));
    };

    const showSettingsModal = () => {
        dispatch(showModal(SETTINGS_MODAL));
    };

    return (
        <DrawerBar
            showSprintModal={showSprintModal}
            showTaskModal={showTaskModal}
            showSettingsModal={showSettingsModal}
            isShowedMobileDrawer={isShowedMobileDrawer}
            setIsShowedMobileDrawer={setIsShowedMobileDrawer}
        />
    );
};

export default DrawerBarContainer;
