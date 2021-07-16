import React, { ReactElement, useState } from 'react';
import SprintForm from './SprintForm';
import { DateRange } from '@material-ui/pickers';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { addSprint } from '@src/redux/sprint/sprintReducer';
import { generateUUID } from '@src/utils';
import { lastSprintNumberSelector } from '@src/redux/selectors';
import useHandleCloseModal from '@src/hooks/useHandleCloseModal';
import { SPRINT_MODAL } from '@src/constants';

const SprintFormContainer = (): ReactElement => {
    const numberLastSprint = useAppSelector((state: RootState) => lastSprintNumberSelector(state));
    const [dates, setDates] = useState<DateRange<Date>>([null, null]);
    const dispatch = useAppDispatch();
    const handleClose = useHandleCloseModal(SPRINT_MODAL);

    const saveSprint = () => {
        if (!!dates[0] && !!dates[1]) {
            dispatch(
                addSprint({
                    id: generateUUID(),
                    number: (numberLastSprint + 1).toString(),
                    dates,
                })
            );
        }
        if (handleClose) {
            handleClose();
        }
    };

    const setInitialDates = () => {
        setDates([null, null]);
    };

    const isEnableButtons = dates.every((item) => !!item);

    return (
        <SprintForm
            dates={dates}
            setDates={setDates}
            isEnableButtons={isEnableButtons}
            setInitialDates={setInitialDates}
            saveSprint={saveSprint}
        />
    );
};

export default SprintFormContainer;
