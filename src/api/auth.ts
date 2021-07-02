import firebase from 'firebase';
import { firebaseInstance } from '../index';

export type userDataRequestType = {
    email: string;
    password: string;
};

export const signInFireBase = (
    data: userDataRequestType
): Promise<firebase.auth.UserCredential> | undefined => {
    const { email, password } = data;
    return firebaseInstance?.auth().signInWithEmailAndPassword(email, password);
};

export const signUpFireBase = (
    data: userDataRequestType
): Promise<firebase.auth.UserCredential> | undefined => {
    const { email, password } = data;
    return firebaseInstance?.auth().createUserWithEmailAndPassword(email, password);
};

export const signOutFireBase = (): Promise<void> | undefined => {
    return firebaseInstance?.auth().signOut();
};