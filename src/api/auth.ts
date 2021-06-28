import { firebase } from '../index';
import firebaseModule from 'firebase';

export type userDataRequestType = {
    email: string;
    password: string;
};

export const signInFireBase = async (
    data: userDataRequestType
): Promise<firebaseModule.auth.UserCredential | undefined> => {
    const { email, password } = data;
    return firebase?.auth().signInWithEmailAndPassword(email, password);
};

export const signUpFireBase = async (
    data: userDataRequestType
): Promise<firebaseModule.auth.UserCredential | undefined> => {
    const { email, password } = data;
    await firebase?.auth().createUserWithEmailAndPassword(email, password);
    return signInFireBase(data);
};

export const signOutFireBase = async (): Promise<void> => {
    return firebase?.auth().signOut();
};