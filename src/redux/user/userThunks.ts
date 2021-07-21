import {
    signInFireBase,
    signOutFireBase,
    signUpFireBase,
    userDataRequestType,
} from '@src/api/auth';
import { errorMessage, fetch, signInRequest, signOutRequest } from '@src/redux/user/userReducer';
import { AppThunk } from '@src/redux/store';
import { firebaseInstance } from '@src/index';

export const signIn =
    (data: userDataRequestType): AppThunk =>
    async (dispatch) => {
        dispatch(fetch());
        try {
            await signInFireBase(data);
        } catch (e) {
            dispatch(errorMessage(e.message));
        }
    };

export const signUp =
    (data: userDataRequestType): AppThunk =>
    async (dispatch) => {
        dispatch(fetch());
        try {
            await signUpFireBase(data);
        } catch (e) {
            dispatch(errorMessage(e.message));
        }
    };

export const signOut = (): AppThunk => async (dispatch) => {
    dispatch(fetch());
    await signOutFireBase();
    dispatch(signOutRequest());
};

export const authStateObservable = (): AppThunk => async (dispatch) => {
    firebaseInstance?.auth().onAuthStateChanged((user) => {
        if (user) {
            dispatch(signInRequest(user));
        }
    });
};
