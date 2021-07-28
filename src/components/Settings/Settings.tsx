import React, { ReactElement } from 'react';
import { ColumnListItemType } from '@src/redux/columns/columnsReducer';
import Columns from './components/column';
import useStyles from './styles';

interface ISettings {
    columns: ColumnListItemType[];
    deleteColumn: (name: string) => void;
    updateColumn: (name: string, value: string | number, key: string) => void;
    addColumn: () => void;
}

const Settings = (props: ISettings): ReactElement => {
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

export default Settings;
