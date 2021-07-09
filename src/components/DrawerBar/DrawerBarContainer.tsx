import React, { ReactElement } from 'react';
import DrawerBar from './DrawerBar';
import { useAppDispatch } from '@src/redux/store';
import { SPRINT_MODAL, TASK_MODAL } from '@src/constants';
import { showModal } from '@src/redux/ui/uiReducer';

const DrawerBarContainer = (): ReactElement => {
    const dispatch = useAppDispatch();

    const showSprintModal = () => {
        dispatch(showModal(SPRINT_MODAL));
    };

    const showTaskModal = () => {
        dispatch(showModal(TASK_MODAL));
    };

    return (
        <DrawerBar
            showSprintModal={showSprintModal}
            showTaskModal={showTaskModal}
        />
    );
};

export default DrawerBarContainer;
