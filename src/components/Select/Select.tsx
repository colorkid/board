import React, { ReactElement } from 'react';
import cn from 'classnames';
import { FormControl, InputLabel, MenuItem, Select as SelectEl } from '@material-ui/core';
import useStyles from './styles';

type ListItemType = {
    title: string;
    value: string;
};

interface ISelect {
    id: string;
    label?: string;
    list: ListItemType[];
    setFieldValue: (field: string, value: string, shouldValidate?: boolean) => void;
    value: string;
    className?: string;
}

const Select = (props: ISelect): ReactElement => {
    const { id, list, setFieldValue, label, value, className } = props;
    const classes = useStyles();

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setFieldValue(id, event.target.value as string);
    };

    return (
        <FormControl className={cn(classes.formControl, className)}>
            {label && <InputLabel id={`${id}-label`}>{label}</InputLabel>}
            <SelectEl labelId={`${id}-label`} id={id} value={value} onChange={handleChange}>
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
