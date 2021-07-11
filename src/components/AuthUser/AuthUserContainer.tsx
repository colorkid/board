import React, { ReactElement, useState } from 'react';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import AuthUser from './AuthUser';
import { SIGN_IN } from '@src/constants';
import { userDataRequestType } from '@src/api/auth';
import { signIn, signOut, signUp } from '@src/redux/user/userThunks';
import { getUserInfoSelector } from '@src/redux/selectors';

const AuthUserContainer = (): ReactElement => {
    const [typeAuth, setTypeAuth] = useState<string>(SIGN_IN);
    const dispatch = useAppDispatch();
    const user = useAppSelector((state: RootState) => getUserInfoSelector(state));
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
