import firebase from 'firebase';

export type userDataRequestType = {
    email: string;
    password: string;
};

export const signInFireBase = (
    data: userDataRequestType
): Promise<firebase.auth.UserCredential> | undefined => {
    const { email, password } = data;
    return firebase?.auth().signInWithEmailAndPassword(email, password);
};

export const signUpFireBase = (
    data: userDataRequestType
): Promise<firebase.auth.UserCredential> | undefined => {
    const { email, password } = data;
    return firebase?.auth().createUserWithEmailAndPassword(email, password);
};

export const signOutFireBase = (): Promise<void> | undefined => {
    return firebase?.auth().signOut();
};