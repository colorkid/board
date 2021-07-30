import firebase from 'firebase';
import { ACTIVE_SPRINT_KEY, SPRINT_LIST_KEY } from '@src/constants';
import { StateForSaveType } from '@src/components/StorageProvider/StorageProvider';

export const getSprintsRequest = async (
    userId: string
): Promise<firebase.database.DataSnapshot> => {
    return (await firebase.database().ref(`${userId}/${SPRINT_LIST_KEY}`).once('value')).val();
};

export const postSprintsRequest = (userId: string, data: StateForSaveType): Promise<null> => {
    return firebase.database().ref(`${userId}/${SPRINT_LIST_KEY}`).set(data);
};

export const getActiveSprintsRequest = async (
    userId: string
): Promise<firebase.database.DataSnapshot> => {
    return (await firebase.database().ref(`${userId}/${ACTIVE_SPRINT_KEY}`).once('value')).val();
};

export const postActiveSprintsRequest = (userId: string, data: StateForSaveType): Promise<null> => {
    return firebase.database().ref(`${userId}/${ACTIVE_SPRINT_KEY}`).set(data)
};