import { ListItemType } from '@src/redux/board/boardReducer';

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

export const sortByOrder = (data: ListItemType[]): ListItemType[] => {
    return [...data].sort((a, b) => a.order - b.order);
};