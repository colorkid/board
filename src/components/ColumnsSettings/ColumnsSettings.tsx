import React, { ReactElement } from 'react';
import { ColumnListType } from '@src/redux/columns/columnsReducer';
import Columns from './components/column';
import useStyles from './styles';

interface IColumnsSettings {
    columns: ColumnListType;
    deleteColumn: (name: string) => void;
    updateColumn: (name: string, value: string | number, key: string) => void;
    addColumn: () => void;
}

const ColumnsSettings = (props: IColumnsSettings): ReactElement => {
    const { columns, deleteColumn, updateColumn, addColumn } = props;
    const classes = useStyles();

    return (
        <div className={classes.settings}>
            <Columns
                columns={columns}
                deleteColumn={deleteColumn}
                updateColumn={updateColumn}
                addColumn={addColumn}
            />
        </div>
    );
};

export default ColumnsSettings;