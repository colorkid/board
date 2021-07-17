import React, { ReactElement } from 'react';
import { ListItemType } from '@src/redux/board/boardReducer';
import { Button, TextField, Typography } from '@material-ui/core';
import { ADD_COLUMN_BTN_TXT, ORDER_KEY, TITLE_KEY } from '@src/constants';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';

interface IColumns {
    columns: ListItemType[];
    deleteColumn: (name: string) => void;
    updateColumn: (name: string, value: string | number, key: string) => void;
    addColumn: () => void;
}

const Columns = (props: IColumns): ReactElement => {
    const { columns, deleteColumn, updateColumn, addColumn } = props;
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h4" className={classes.headerName}>
                Columns
            </Typography>
            <div>
                <div className={classes.header}>
                    <Typography variant="h6" className={classes.headerName}>
                        Name
                    </Typography>
                    <Typography variant="h6" className={classes.headerOrder}>
                        Order
                    </Typography>
                </div>
                {columns.map((column) => {
                    return (
                        <div key={column.id} className={classes.column}>
                            <TextField
                                size="small"
                                variant="outlined"
                                className={classes.name}
                                required
                                name="name"
                                defaultValue={column.title}
                                onChange={(e) =>
                                    updateColumn(column.id, e.target.value, TITLE_KEY)
                                }
                            />
                            <TextField
                                size="small"
                                variant="outlined"
                                className={classes.order}
                                name="order"
                                type="number"
                                defaultValue={column.order}
                                onChange={(e) =>
                                    updateColumn(column.id, Number(e.target.value), ORDER_KEY)
                                }
                                InputProps={{ inputProps: { min: 0 } }}
                            />
                            <Button
                                className={classes.delete}
                                onClick={() => deleteColumn(column.id)}
                            >
                                <DeleteIcon color="secondary" />
                            </Button>
                        </div>
                    );
                })}
            </div>
            <div className={classes.buttons}>
                <Button color="default" onClick={addColumn}>
                    {ADD_COLUMN_BTN_TXT}
                </Button>
            </div>
        </div>
    );
};

export default Columns;
