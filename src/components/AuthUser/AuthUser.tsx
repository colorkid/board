import React, { ReactElement } from 'react';
import UserInfo from './components/UserInfo';
import { CircularProgress } from '@material-ui/core';
import AuthForm from './components/AuthForm';
import useStyles from './styles';
import { userDataRequestType } from '@src/api/auth';

export interface IAuthForm {
    requestMethod: (arg: userDataRequestType) => void;
    typeAuth: string;
    setTypeAuth: (arg: string) => void;
    error?: string;
}

export interface UserType extends IAuthForm {
    isFetching: boolean;
    email: string | null;
    signOutRequest: () => void;
}

const AuthUser = (props: UserType): ReactElement => {
    const { isFetching, email, signOutRequest, requestMethod, typeAuth, setTypeAuth, error } =
        props;
    const classes = useStyles();

    return (
        <div className={classes.user}>
            {isFetching ? (
                <CircularProgress />
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

