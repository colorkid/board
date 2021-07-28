import {
    signInFireBase,
    signOutFireBase,
    signUpFireBase,
    userDataRequestType,
} from '@src/api/auth';
import {
    fetch,
    setAuth,
    setErrorMessage,
    signInRequest,
    signOutRequest,
} from '@src/redux/user/userReducer';
import { AppThunk } from '@src/redux/store';
import { firebaseInstance } from '@src/index';
import { FALSE, NOT_CHECK_YET } from '@src/constants';

export const signIn =
    (data: userDataRequestType): AppThunk =>
    async (dispatch) => {
        dispatch(fetch());
        try {
            await signInFireBase(data);
        } catch (e) {
            dispatch(setErrorMessage(e.message));
        }
    };

export const signUp =
    (data: userDataRequestType): AppThunk =>
    async (dispatch) => {
        dispatch(fetch());
        try {
            await signUpFireBase(data);
        } catch (e) {
            dispatch(setErrorMessage(e.message));
        }
    };

export const signOut = (): AppThunk => async (dispatch) => {
    dispatch(fetch());
    try {
        await signOutFireBase();
        dispatch(signOutRequest());
    } catch (e) {
        dispatch(setErrorMessage(e.message));
    }
};

export const authStateObservable = (): AppThunk => async (dispatch) => {
    firebaseInstance?.auth().onAuthStateChanged((user) => {
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
