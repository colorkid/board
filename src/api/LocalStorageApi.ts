import { StateForSaveType } from '@src/components/StorageProvider/StorageProvider';
import { IS_FIRST_SESSION_KEY } from '@src/constants';

type DataSetType = StateForSaveType;

export const LocalStorageApi = {
    getLocal: (key: string): string => JSON.parse(<string>localStorage.getItem(key)),
    setLocal: (key: string, data: DataSetType): void =>
        localStorage.setItem(key, JSON.stringify(data)),
    isFirstSession: (): boolean => localStorage.getItem(IS_FIRST_SESSION_KEY) === null,
    recordSession: (): void => localStorage.setItem(IS_FIRST_SESSION_KEY, 'true'),
};