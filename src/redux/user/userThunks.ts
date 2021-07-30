import { userDataRequestType } from '@src/api/auth';
import { FirebaseApi } from '@src/api/FirebaseApi';
import {
    fetch,
    setAuth,
    setErrorMessage,
    signInRequest,
    signOutRequest,
} from '@src/redux/user/userReducer';
import { AppThunk } from '@src/redux/store';
import { FALSE, NOT_CHECK_YET } from '@src/constants';
import firebase from 'firebase';

export const signIn =
    (data: userDataRequestType): AppThunk =>
    async (dispatch) => {
        dispatch(fetch());
        try {
            await FirebaseApi.signInFireBase(data);
        } catch (e) {
            dispatch(setErrorMessage(e.message));
        }
    };

export const signUp =
    (data: userDataRequestType): AppThunk =>
    async (dispatch) => {
        dispatch(fetch());
        try {
            await FirebaseApi.signUpFireBase(data);
        } catch (e) {
            dispatch(setErrorMessage(e.message));
        }
    };

export const signOut = (): AppThunk => async (dispatch) => {
    dispatch(fetch());
    try {
        await FirebaseApi.signOutFireBase();
        dispatch(signOutRequest());
    } catch (e) {
        dispatch(setErrorMessage(e.message));
    }
};

export const authStateObservable = (): AppThunk => async (dispatch) => {
    firebase?.auth().onAuthStateChanged((user) => {
        try {
            if (user) {
                dispatch(signInRequest(user));
            } else {
                dispatch(setAuth(NOT_CHECK_YET));
                dispatch(setAuth(FALSE));
            }
        } catch (e) {
            dispatch(setErrorMessage(e.message));
        }
    });
};
