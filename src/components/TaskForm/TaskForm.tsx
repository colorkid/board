import React, { ReactElement } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { useFormik } from 'formik';
import { validationSchema } from './validationSchema';
import useStyles from './styles';
import Select from '../Select';
import { DEFAULT_VALUE_STATE, STATE_LIST } from '@src/constants';

interface ITaskForm {
    saveTask: () => void;
}

const TaskForm = (props: ITaskForm): ReactElement => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            title: '',
            description: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <header className={classes.header}>
                <Typography variant="h5" component="h2">
                    Create a new sprint
                </Typography>
            </header>
            <div className={classes.body}>
                <TextField
                    required
                    fullWidth
                    id="title"
                    name="title"
                    label="Title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                />
                <TextField
                    fullWidth
                    id="description"
                    name="description"
                    label="Description"
                    multiline
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    rows={4}
                />
                <Select
                    id="state"
                    label="State"
                    defaultValue={DEFAULT_VALUE_STATE}
                    list={STATE_LIST}
                    setFieldValue={formik.setFieldValue}
                />
            </div>
            <Button type="submit">save</Button>
        </form>
    );
};

export default TaskForm;
