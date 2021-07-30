import firebase from 'firebase';
import { BOARD_COLUMNS_KEY } from '@src/constants';
import { StateForSaveType } from '@src/components/StorageProvider/StorageProvider';

export const getColumnsRequest = async (
    userId: string
): Promise<firebase.database.DataSnapshot> => {
    return (await firebase.database().ref(`${userId}/${BOARD_COLUMNS_KEY}`).once('value')).val();
};

export const postColumnsRequest = (userId: string, data: StateForSaveType): Promise<null> => {
    return firebase.database().ref(`${userId}/${BOARD_COLUMNS_KEY}`).set(data);
};