import React, { ReactElement } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { hideModal } from '@src/redux/ui/uiReducer';
import Modal from './Modal';

const ModalContainer = (): ReactElement => {
    const modal = useAppSelector((state: RootState) => state.ui.isModalVisible);
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(hideModal());
    };

    return <Modal modal={modal} handleClose={handleClose} />;
};

export default ModalContainer;
