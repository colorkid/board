import React, { ReactElement } from 'react';
import UserInfo from './components/UserInfo';
import AuthForm from './components/AuthForm';
import Progress from '@src/common/Progress';
import { userDataRequestType } from '@src/api/auth';
import useStyles from './styles';

export interface IAuthForm {
    requestMethod: (arg: userDataRequestType) => void;
    typeAuth: string;
    setTypeAuth: (arg: string) => void;
    error?: string;
}

interface IUser extends IAuthForm {
    isFetching: boolean;
    email: string | null;
    signOutRequest: () => void;
}

const AuthUser = (props: IUser): ReactElement => {
    const { isFetching, email, signOutRequest, requestMethod, typeAuth, setTypeAuth, error } =
        props;
    const classes = useStyles();

    return (
        <div className={classes.user}>
            {isFetching ? (
                <Progress />
            ) : email ? (
                <UserInfo signOutRequest={signOutRequest} email={email} />
            ) : (
                <AuthForm
                    requestMethod={requestMethod}
                    typeAuth={typeAuth}
                    setTypeAuth={setTypeAuth}
                    error={error}
                />
            )}
        </div>
    );
};

export default AuthUser;

