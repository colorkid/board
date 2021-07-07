import React, { ReactElement, useEffect, useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select as SelectEl } from '@material-ui/core';
import useStyles from './styles';

type ListItemType = {
    title: string;
    value: string;
};

interface ISelect {
    id: string;
    label?: string;
    defaultValue?: ListItemType;
    list: ListItemType[];
    setFieldValue: (field: string, value: string, shouldValidate?: boolean) => void;
}

const Select = (props: ISelect): ReactElement => {
    const { id, defaultValue, list, setFieldValue, label } = props;
    const [state, setState] = useState<string>('');
    const classes = useStyles();

    useEffect(() => {
        if (defaultValue) {
            setChanges(defaultValue.value);
        }
    }, [defaultValue]);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setChanges(event.target.value as string);
    };

    const setChanges = (value: string) => {
        setState(value);
        setFieldValue(id, value);
    };

    return (
        <FormControl className={classes.formControl}>
            {label && <InputLabel id={`${id}-label`}>{label}</InputLabel>}
            <SelectEl labelId={`${id}-label`} id={id} value={state} onChange={handleChange}>
                {list.map((item) => (
                    <MenuItem key={item.value} value={item.value}>
                        {item.title}
                    </MenuItem>
                ))}
            </SelectEl>
        </FormControl>
    );
};

export default Select;
