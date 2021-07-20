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
    getTasks: (isAuth: boolean): DataSetType | null =>
        !isAuth ? LocalStorageApi.getLocal(TASK_LIST_KEY) : null,
    setTasks: (isAuth: boolean, data: DataSetType): void | null => {
        return !isAuth ? LocalStorageApi.setLocal(TASK_LIST_KEY, data) : null;
    },
    getSprints: (isAuth: boolean): DataSetType | null =>
        !isAuth ? LocalStorageApi.getLocal(SPRINT_LIST_KEY) : null,
    setSprints: (isAuth: boolean, data: DataSetType): void | null => {
        return !isAuth ? LocalStorageApi.setLocal(SPRINT_LIST_KEY, data) : null;
    },
    getActiveSprint: (isAuth: boolean): DataSetType | null =>
        !isAuth ? LocalStorageApi.getLocal(ACTIVE_SPRINT_KEY) : null,
    setActiveSprint: (isAuth: boolean, data: DataSetType): void | null => {
        return !isAuth ? LocalStorageApi.setLocal(ACTIVE_SPRINT_KEY, data) : null;
    },
    getColumns: (isAuth: boolean): DataSetType | null =>
        !isAuth ? LocalStorageApi.getLocal(BOARD_COLUMNS_KEY) : null,
    setColumns: (isAuth: boolean, data: DataSetType): void | null => {
        return !isAuth ? LocalStorageApi.setLocal(BOARD_COLUMNS_KEY, data) : null;
    },
};
