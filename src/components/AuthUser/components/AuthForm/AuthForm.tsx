import React, { ReactElement } from 'react';
import { useFormik } from 'formik';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { SIGN_IN, SIGN_UP } from '@src/constants';
import useStyles from './styles';
import { IAuthForm } from '../../AuthUser';
import { validationSchema } from './validationSchema';
import ErrorMessage from '@src/components/ErrorMessage';
import { COMMON_PADDING } from '@src/styleConstants';

const authTypes = [SIGN_IN, SIGN_UP];

const AuthForm = (props: IAuthForm): ReactElement => {
    const { requestMethod, typeAuth, setTypeAuth, error } = props;
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => requestMethod(values),
    });

    return (
        <div className={classes.formWrapper} data-testid="authForm">
            <div className={classes.switchTypeAuth}>
                {authTypes.map((type) => {
                    return (
                        <div
                            data-testid={type}
                            key={type}
                            onClick={() => setTypeAuth(type)}
                            className={clsx([
                                classes.switchTypeAuthItem,
                                {
                                    [classes.switchTypeAuthItemActive]: typeAuth === type,
                                },
                            ])}
                        >
                            {type}
                        </div>
                    );
                })}
            </div>
            <form onSubmit={formik.handleSubmit} className={classes.form}>
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button color="primary" variant="outlined" type="submit" className={classes.submit}>
                    {typeAuth}
                </Button>
            </form>
            {error && (
                <ErrorMessage
                    message={error}
                    style={{
                        marginTop: COMMON_PADDING,
                    }}
                />
            )}
        </div>
    );
};

export default AuthForm;