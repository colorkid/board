import React, { ReactElement, useState } from 'react';
import { format } from 'date-fns';
import SprintForm from './SprintForm';
import { DateRange } from '@material-ui/pickers';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { addSprint } from '@src/redux/sprint/sprintReducer';
import { generateUUID } from '@src/utils';

interface ISprintFormContainer {
    handleCloseModal?: () => void;
}

const SprintFormContainer = (props: ISprintFormContainer): ReactElement => {
    const { handleCloseModal } = props;
    const [dates, setDates] = useState<DateRange<Date>>([null, null]);
    const sprints = useAppSelector((state: RootState) => state.sprints);
    const dispatch = useAppDispatch();

    const saveSprint = () => {
        if (!!dates[0] && !!dates[1]) {
            dispatch(
                addSprint({
                    id: generateUUID(),
                    number: Object.keys(sprints).length,
                    dates: `${format(dates[0], 'dd.MM.yyyy')}-${format(dates[1], 'dd.MM.yyyy')}`,
                })
            );
        }
        if (handleCloseModal) {
            handleCloseModal();
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
