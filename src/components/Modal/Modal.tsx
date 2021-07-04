import React, { ReactElement, useMemo, useRef } from 'react';
import { Backdrop, Fade, Modal as ModalUI } from '@material-ui/core';
import useStyles from '@src/components/Modal/styles';
import { SPRINT_MODAL } from '@src/constants';
import SprintForm from '../SprintForm';

interface IModalContent {
    modal: string;
    handleClose: () => void;
}

const Modal = (props: IModalContent): ReactElement => {
    const { modal, handleClose } = props;
    const classes = useStyles();
    const ComponentRef = useRef<ReactElement | null>(null);

    const Component = useMemo(() => {
        switch (modal) {
            case SPRINT_MODAL:
                ComponentRef.current = <SprintForm handleCloseModal={handleClose} />;
        }
        return ComponentRef.current;
    }, [handleClose, modal]);

    return (
        <div data-testid="modal">
            <ModalUI
                className={classes.modal}
                open={!!modal}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={!!modal}>
                    <div className={classes.paper}>{Component}</div>
                </Fade>
            </ModalUI>
        </div>
    );
};

export default Modal;
