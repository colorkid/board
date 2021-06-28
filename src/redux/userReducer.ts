import { createAsyncThunk, createSlice, PayloadAction, SerializedError } from '@reduxjs/toolkit';
import firebase from 'firebase';
import { WritableDraft } from 'immer/dist/internal';
import {
    signInFireBase,
    signOutFireBase,
    signUpFireBase,
    userDataRequestType,
} from '@src/api/auth';

export const DEFAULT_ERROR_MESSAGES = {
    fulfilled: 'User data is not defined',
    rejected: 'Error is undefined',
};

export const signUp = createAsyncThunk('users/signUp', async (data: userDataRequestType) => {
    return signUpFireBase(data);
});

export const signIn = createAsyncThunk('users/signIp', async (data: userDataRequestType) => {
    return signInFireBase(data);
});

export const signOut = createAsyncThunk('users/signOut', async () => {
    return signOutFireBase();
});

type userInitialStateType = {
    token: string;
    email: string | null;
    isFetching: boolean;
    error: string;
};

const initialState = {
    token: '',
    email: '',
    isFetching: false,
    error: '',
} as userInitialStateType;

const fulfilled = (
    state: WritableDraft<userInitialStateType>,
    action: PayloadAction<
        firebase.auth.UserCredential | undefined,
        string,
        { arg: userDataRequestType; requestId: string; requestStatus: 'fulfilled' }
    >
) => {
    if (action.payload?.user) {
        const { refreshToken, email } = action.payload.user;
        state.token = refreshToken;
        state.email = email;
    } else {
        state.error = DEFAULT_ERROR_MESSAGES.fulfilled;
    }
    state.isFetching = initialState.isFetching;
};

const rejected = (
    state: WritableDraft<userInitialStateType>,
    action: PayloadAction<
        unknown,
        string,
        {
            arg: userDataRequestType | void;
            requestId: string;
            requestStatus: 'rejected';
            aborted: boolean;
            condition: boolean;
        } & { rejectedWithValue: true | false },
        SerializedError
    >
) => {
    if (action.error?.message) {
        state.error = action.error.message;
    } else {
        state.error = DEFAULT_ERROR_MESSAGES.rejected;
    }
    state.isFetching = initialState.isFetching;
};

const pending = (state: WritableDraft<userInitialStateType>) => {
    state.error = initialState.error;
    state.isFetching = true;
};

const singOutFulfilled = (state: WritableDraft<userInitialStateType>) => {
    state.token = initialState.token;
    state.email = initialState.email;
    state.isFetching = initialState.isFetching;
    state.error = initialState.error;
};

const userReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(signUp.fulfilled, (state, action) => {
                fulfilled(state, action);
            })
            .addCase(signUp.rejected, (state, action) => {
                rejected(state, action);
            })
            .addCase(signUp.pending, (state) => {
                pending(state);
            })
            .addCase(signIn.fulfilled, (state, action) => {
                fulfilled(state, action);
            })
            .addCase(signIn.pending, (state) => {
                pending(state);
            })
            .addCase(signIn.rejected, (state, action) => {
                rejected(state, action);
            })
            .addCase(signOut.fulfilled, (state) => {
                singOutFulfilled(state);
            })
            .addCase(signOut.pending, (state) => {
                pending(state);
            })
            .addCase(signOut.rejected, (state, action) => {
                rejected(state, action);
            });
    },
});

export const UserReducer = userReducer.reducer;
