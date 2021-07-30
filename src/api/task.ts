import firebase from 'firebase';
import { TASK_LIST_KEY } from '@src/constants';
import { StateForSaveType } from '@src/components/StorageProvider/StorageProvider';

export const getTasksRequest = async (userId: string): Promise<firebase.database.DataSnapshot> => {
    return (await firebase.database().ref(`${userId}/tasksList`).once('value')).val();
};

export const postTasksRequest = (
    userId: string,
    data: StateForSaveType
): Promise<null> => {
    return firebase.database().ref(`${userId}/${TASK_LIST_KEY}`).set(data);
};