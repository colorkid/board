import React, { ReactElement } from 'react';
import { Button } from '@material-ui/core';
import useStyles from './styles';
import { LOG_OUT } from '@src/constants';

type UserInfoType = {
    email: string;
    signOutRequest: () => void;
};

const UserInfo = (props: UserInfoType): ReactElement => {
    const { signOutRequest, email } = props;
    const classes = useStyles();

    return (
        <div className={classes.userInfo}>
            <div className={classes.userInfoTitle}>
                <div className={classes.userInfoName}>User:</div>
                <div className={classes.userInfoEmail} data-testid="userEmail">
                    {email}
                </div>
            </div>
            <Button
                color="secondary"
                variant="outlined"
                className={classes.submit}
                onClick={signOutRequest}
            >
                {LOG_OUT}
            </Button>
        </div>
    );
};

export default UserInfo;