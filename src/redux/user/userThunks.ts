import {
    signInFireBase,
    signOutFireBase,
    signUpFireBase,
    userDataRequestType,
} from '@src/api/auth';
import { errorMessage, fetch, signInRequest, signOutRequest } from '@src/redux/user/userReducer';
import { AppThunk } from '@src/redux/store';

export const signIn =
    (data: userDataRequestType): AppThunk =>
        async (dispatch) => {
            dispatch(fetch());
            try {
                const response = await signInFireBase(data);
                dispatch(signInRequest(response));
            } catch (e) {
                dispatch(errorMessage(e.message));
            }
        };

export const signUp =
    (data: userDataRequestType): AppThunk =>
        async (dispatch) => {
            dispatch(fetch());
            await signUpFireBase(data);
            dispatch(signInRequest({user: data}));
        };

export const signOut = (): AppThunk => async (dispatch) => {
    dispatch(fetch());
    await signOutFireBase();
    dispatch(signOutRequest());
};