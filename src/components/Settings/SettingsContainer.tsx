import React, { ReactElement } from 'react';
import Settings from './Settings';
import { RootState, useAppDispatch, useAppSelector } from '@src/redux/store';
import { getColumnsStateListSelector } from '@src/redux/selectors';
import { generateUUID } from '@src/utils';
import { saveColumns } from '@src/redux/columns/columnsReducer';

const SettingsContainer = (): ReactElement => {
    const columns = useAppSelector((state: RootState) => getColumnsStateListSelector(state));
    const dispatch = useAppDispatch();

    const updateColumn = (name: string, value: string | number, key: string) => {
        const updatedColumns = columns.map((column) => {
            if (column.id === name) {
                return {
                    ...column,
                    [key]: value,
                };
            }
            return column;
        });

        dispatch(saveColumns(updatedColumns));
    };

    const deleteColumn = (name: string) => {
        const columnsWithOutItem = columns.filter((column) => column.id !== name);
        dispatch(saveColumns(columnsWithOutItem));
    };

    const addColumn = () => {
        const newColumn = {
            title: `Column-${columns?.length + 1}`,
            id: generateUUID(),
            order: 0,
        };

        dispatch(saveColumns([...columns, newColumn]));
    };

    return (
        <Settings
            columns={columns}
            deleteColumn={deleteColumn}
            updateColumn={updateColumn}
            addColumn={addColumn}
        />
    );
};

export default SettingsContainer;
