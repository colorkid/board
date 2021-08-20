import firebase from 'firebase';
import {
    ACTIVE_SPRINT_KEY,
    BOARD_COLUMNS_KEY,
    SPRINT_LIST_KEY,
    TASK_LIST_KEY,
} from '@src/constants';
import { StateForSaveType } from '@src/components/StorageProvider/StorageProvider';
import { LocalStorageApi } from '@src/api/LocalStorageApi';
import { FirebaseApi } from '@src/api/FirebaseApi';

type DataSetType = StateForSaveType;

export const ApiAdapter = {
    getTasks: async (userId: string): Promise<string> =>
        !userId ? LocalStorageApi.getLocal(TASK_LIST_KEY) : FirebaseApi.getTasksRequest(userId),
    setTasks: (userId: string, data: DataSetType): void | Promise<null> =>
        !userId
            ? LocalStorageApi.setLocal(TASK_LIST_KEY, data)
            : FirebaseApi.postTasksRequest(userId, data),
    getSprints: async (userId: string): Promise<string> =>
        !userId ? LocalStorageApi.getLocal(SPRINT_LIST_KEY) : FirebaseApi.getSprintsRequest(userId),
    setSprints: (userId: string, data: DataSetType): void | Promise<null> =>
        !userId
            ? LocalStorageApi.setLocal(SPRINT_LIST_KEY, data)
            : FirebaseApi.postSprintsRequest(userId, data),
    getActiveSprint: async (
        userId: string
    ): Promise<string | Promise<firebase.database.DataSnapshot>> =>
        !userId
            ? LocalStorageApi.getLocal(ACTIVE_SPRINT_KEY)
            : FirebaseApi.getActiveSprintsRequest(userId),
    setActiveSprint: (userId: string, data: DataSetType): void | Promise<null> =>
        !userId
            ? LocalStorageApi.setLocal(ACTIVE_SPRINT_KEY, data)
            : FirebaseApi.postActiveSprintsRequest(userId, data),
    getColumns: async (userId: string): Promise<string | Promise<firebase.database.DataSnapshot>> =>
        !userId
            ? LocalStorageApi.getLocal(BOARD_COLUMNS_KEY)
            : FirebaseApi.getColumnsRequest(userId),
    setColumns: (userId: string, data: DataSetType): void | Promise<null> =>
        !userId
            ? LocalStorageApi.setLocal(BOARD_COLUMNS_KEY, data)
            : FirebaseApi.postColumnsRequest(userId, data),
};
