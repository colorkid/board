import React, { ReactElement, useState } from 'react';
import OnBoarding from './OnBoarding';
import { LocalStorageApi } from '@src/api/LocalStorageApi';
import { ON_BOARDING_STEP_ONE } from '@src/constants';
import { useAppDispatch } from '@src/redux/store';
import { hideModal } from '@src/redux/ui/uiReducer';

const OnBoardingContainer = (): ReactElement => {
    const [step, setStep] = useState<number>(1);
    const dispatch = useAppDispatch();

    const hideOnBoarding = () => {
        dispatch(hideModal());
    };

    const incrementStep = () => {
        setStep(step + 1);
    };

    const decrementStep = () => {
        setStep(step - 1);
    };

    const finishOnBoarding = () => {
        LocalStorageApi.setLocal(ON_BOARDING_STEP_ONE, 'true');
        hideOnBoarding();
    };

    return (
        <OnBoarding
            decrementStep={decrementStep}
            incrementStep={incrementStep}
            step={step}
            finishOnBoarding={finishOnBoarding}
        />
    );
};

export default OnBoardingContainer;
