import React, { ReactElement } from 'react';
import { Button, Typography } from '@material-ui/core';
import { FINISH, NEXT, ONBOARDING_MESSAGES, PREV, SKIP } from '@src/constants';
import useStyles from './styles';

interface IOnBoarding {
    step: number;
    incrementStep: () => void;
    decrementStep: () => void;
    finishOnBoarding: () => void;
}

const OnBoarding = (props: IOnBoarding): ReactElement => {
    const { decrementStep, incrementStep, step, finishOnBoarding } = props;
    const classes = useStyles();

    const numberSteps = Object.keys(ONBOARDING_MESSAGES).length;

    // @ts-ignore
    const message = ONBOARDING_MESSAGES[step.toString()];

    return (
        <div className={classes.onBoarding}>
            <Typography variant="h5" component="h5">
                Step {step} of {numberSteps}
            </Typography>
            <Typography variant="subtitle1" className={classes.onBoardingBody}>
                {message}
            </Typography>
            <div className={classes.onBoardingFooter}>
                {step > 1 && (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={decrementStep}
                        className={classes.firstButton}
                    >
                        {PREV}
                    </Button>
                )}
                {step === 1 && (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={finishOnBoarding}
                        className={classes.firstButton}
                    >
                        {SKIP}
                    </Button>
                )}
                {step === numberSteps ? (
                    <Button variant="contained" color="primary" onClick={finishOnBoarding}>
                        {FINISH}
                    </Button>
                ) : (
                    <Button variant="contained" color="primary" onClick={incrementStep}>
                        {NEXT}
                    </Button>
                )}
            </div>
        </div>
    );
};

export default OnBoarding;
