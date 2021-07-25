import firebase from 'firebase';
import {
    ACTIVE_SPRINT_KEY,
    BOARD_COLUMNS_KEY,
    SPRINT_LIST_KEY,
    TASK_LIST_KEY,
} from '@src/constants';
import { StateForSaveType } from '@src/components/StorageProvider/StorageProvider';
import { LocalStorageApi } from '@src/api/LocalStorageApi';

type DataSetType = StateForSaveType;

export const ApiController = {
    getTasks: async (userId: string): Promise<string | Promise<firebase.database.DataSnapshot>> =>
        !userId
            ? LocalStorageApi.getLocal(TASK_LIST_KEY)
            : (await firebase.database().ref(`${userId}/${TASK_LIST_KEY}`).once('value')).val(),
    setTasks: (userId: string, data: DataSetType): void | Promise<null> =>
        !userId
            ? LocalStorageApi.setLocal(TASK_LIST_KEY, data)
            : firebase.database().ref(`${userId}/${TASK_LIST_KEY}`).set(data),
    getSprints: async (userId: string): Promise<string | Promise<firebase.database.DataSnapshot>> =>
        !userId
            ? LocalStorageApi.getLocal(SPRINT_LIST_KEY)
            : (await firebase.database().ref(`${userId}/${SPRINT_LIST_KEY}`).once('value')).val(),
    setSprints: (userId: string, data: DataSetType): void | Promise<null> =>
        !userId
            ? LocalStorageApi.setLocal(SPRINT_LIST_KEY, data)
            : firebase.database().ref(`${userId}/${SPRINT_LIST_KEY}`).set(data),
    getActiveSprint: async (
        userId: string
    ): Promise<string | Promise<firebase.database.DataSnapshot>> =>
        !userId
            ? LocalStorageApi.getLocal(ACTIVE_SPRINT_KEY)
            : (await firebase.database().ref(`${userId}/${ACTIVE_SPRINT_KEY}`).once('value')).val(),
    setActiveSprint: (userId: string, data: DataSetType): void | Promise<null> =>
        !userId
            ? LocalStorageApi.setLocal(ACTIVE_SPRINT_KEY, data)
            : firebase.database().ref(`${userId}/${ACTIVE_SPRINT_KEY}`).set(data),
    getColumns: async (userId: string): Promise<string | Promise<firebase.database.DataSnapshot>> =>
        !userId
            ? LocalStorageApi.getLocal(BOARD_COLUMNS_KEY)
            : (await firebase.database().ref(`${userId}/${BOARD_COLUMNS_KEY}`).once('value')).val(),
    setColumns: (userId: string, data: DataSetType): void | Promise<null> =>
        !userId
            ? LocalStorageApi.setLocal(BOARD_COLUMNS_KEY, data)
            : firebase.database().ref(`${userId}/${BOARD_COLUMNS_KEY}`).set(data),
};
