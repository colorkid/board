import React, { ReactElement, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '../redux/store';
import { signIn, signOut, signUp } from '../redux/userReducer';
import AuthUser from '../components/AuthUser';
import { SIGN_IN } from '../constants';
import { userDataRequestType } from '@src/api/auth';

const AuthUserContainer = (): ReactElement => {
    const [typeAuth, setTypeAuth] = useState<string>(SIGN_IN);
    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => state.user);
    const { isFetching, email, error } = user;

    const singUpRequest = (data: userDataRequestType) => {
        dispatch(signUp(data));
    };

    const singInRequest = (data: userDataRequestType) => {
        dispatch(signIn(data));
    };

    const signOutRequest = () => {
        dispatch(signOut());
    };

    const requestMethod = typeAuth === SIGN_IN ? singInRequest : singUpRequest;

    return (
        <AuthUser
            isFetching={isFetching}
            email={email}
            signOutRequest={signOutRequest}
            requestMethod={requestMethod}
            typeAuth={typeAuth}
            setTypeAuth={setTypeAuth}
            error={error}
        />
    );
};

export default AuthUserContainer;
