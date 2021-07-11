import React, { ReactElement } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { hideModal } from '@src/redux/ui/uiReducer';
import Modal from './Modal';
import { getVisibleModalSelector } from '@src/redux/selectors';

const ModalContainer = (): ReactElement => {
    const modal = useAppSelector((state: RootState) => getVisibleModalSelector(state));
    const dispatch = useAppDispatch();

    const handleClose = () => {
        dispatch(hideModal());
    };

    return <Modal modal={modal} handleClose={handleClose} />;
};

export default ModalContainer;
