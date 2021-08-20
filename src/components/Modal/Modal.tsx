import React, { ReactElement, useMemo } from 'react';
import { Backdrop, Fade, Modal as ModalUI } from '@material-ui/core';
import {ON_BOARDING_STEP_ONE, SETTINGS_MODAL, SPRINT_MODAL, TASK_MODAL} from '@src/constants';
import SprintForm from '../SprintForm';
import TaskForm from '../TaskForm';
import ColumnsSettings from '../ColumnsSettings';
import OnBoarding from "@src/components/OnBoarding";
import useStyles from '@src/components/Modal/styles';

interface IModalContent {
    modal: string;
    handleClose: () => void;
}

const Modal = (props: IModalContent): ReactElement => {
    const { modal, handleClose } = props;
    const classes = useStyles();

    const Component = useMemo(() => {
        switch (modal) {
            case SPRINT_MODAL:
                return <SprintForm />;
            case TASK_MODAL:
                return <TaskForm />;
            case SETTINGS_MODAL:
                return <ColumnsSettings />;
            case ON_BOARDING_STEP_ONE:
                return <OnBoarding />
            default:
                return null;
        }
    }, [modal]);

    return (
        <div>
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
