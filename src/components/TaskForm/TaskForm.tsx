import React, { ReactElement } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { FormikContextType } from 'formik';
import cn from 'classnames';
import Select from '../../common/Select';
import {
    CLEAR_BTN_TXT,
    CLEAR_TASK_CONFIRM_MESSAGE,
    CREATE_BTN_TXT,
    PRIORITY_LIST,
    SPRINT_BACKLOG,
    TASK_FORM_TITLE_CREATE,
    TASK_FORM_TITLE_UPDATE,
    UPDATE_BTN_TXT,
} from '@src/constants';
import { TaskType } from '@src/redux/task/taskReducer';
import { SprintListType } from '@src/redux/sprint/sprintReducer';
import SprintsList from './components/SprintsListTaskForm';
import Confirm from '@src/common/Confirm';
import { ColumnListType } from '@src/redux/columns/columnsReducer';
import useStyles from './styles';

interface ITaskForm {
    formik: FormikContextType<TaskType>;
    sprints: SprintListType;
    checkedSprints: string[];
    setCheckedSprints: (arg: string[]) => void;
    isOpenedTask: boolean;
    columns: ColumnListType;
}

const TaskForm = (props: ITaskForm): ReactElement => {
    const { formik, sprints, checkedSprints, setCheckedSprints, isOpenedTask, columns } = props;
    const classes = useStyles();

    const titleTxt = isOpenedTask ? TASK_FORM_TITLE_UPDATE : TASK_FORM_TITLE_CREATE;
    const submitTxt = isOpenedTask ? UPDATE_BTN_TXT : CREATE_BTN_TXT;

    const handleClear = () => {
        formik.resetForm();
        setCheckedSprints([SPRINT_BACKLOG]);
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <header className={classes.header}>
                <Typography variant="h5" component="h2">
                    {titleTxt}
                </Typography>
            </header>
            <div className={classes.body}>
                <div className={cn(classes.cell, classes.cellLeft)}>
                    <TextField
                        className={classes.field}
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
                        className={cn(classes.field, classes.textArea)}
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
                    <SprintsList
                        className={classes.field}
                        sprints={sprints}
                        checkedSprints={checkedSprints}
                        setCheckedSprints={setCheckedSprints}
                    />
                </div>
                <div className={cn(classes.cell, classes.cellRight)}>
                    <Select
                        className={classes.field}
                        id="state"
                        label="State"
                        list={columns}
                        setFieldValue={formik.setFieldValue}
                        value={formik.values.state}
                    />
                    <Select
                        className={classes.field}
                        id="priority"
                        label="Priority"
                        list={PRIORITY_LIST}
                        setFieldValue={formik.setFieldValue}
                        value={formik.values.priority}
                    />
                    <TextField
                        className={classes.field}
                        fullWidth
                        id="estimation"
                        name="estimation"
                        label="Estimation"
                        value={formik.values.estimation}
                        onChange={formik.handleChange}
                        error={formik.touched.estimation && Boolean(formik.errors.estimation)}
                        helperText={formik.touched.estimation && formik.errors.estimation}
                    />
                </div>
            </div>
            <footer className={classes.footer}>
                {!isOpenedTask && (
                    <Confirm okMethod={handleClear} message={CLEAR_TASK_CONFIRM_MESSAGE}>
                        <Button color="secondary">{CLEAR_BTN_TXT}</Button>
                    </Confirm>
                )}
                <Button color="primary" type="submit">
                    {submitTxt}
                </Button>
            </footer>
        </form>
    );
};

export default TaskForm;
