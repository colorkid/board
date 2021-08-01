import { ColumnListType } from '@src/redux/columns/columnsReducer';
import { TaskListType } from '@src/redux/task/taskReducer';

export const generateUUID = (): string => {
    let d = new Date().getTime();
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
};

export const cutString = (str: string, length: number): string =>
    str.length > length ? str.substring(0, length) + '...' : str;

export const sortByOrderColumns = (data: ColumnListType): ColumnListType => {
    return Array.isArray(data) ? [...data].sort((a, b) => a.order - b.order) : [];
};

export const sortByOrderTasks = (data: TaskListType): TaskListType => {
    return Object.fromEntries(
        Object.entries(data).sort((a, b) => Number(a[1].order) - Number(b[1].order))
    );
};

export const objectToString = <T>(data: T): string => {
    return JSON.stringify(data);
};