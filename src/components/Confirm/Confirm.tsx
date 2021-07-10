import React, { ReactChild, ReactChildren, ReactElement, useState } from 'react';
import { Button, Popover, Typography } from '@material-ui/core';
import useStyles from './styles';

interface IConfirm {
    children: ReactChild | ReactChildren;
    okMethod: () => void;
    message: string;
    disabled?: boolean;
}

const Confirm = (props: IConfirm): ReactElement => {
    const { children, okMethod, message, disabled } = props;
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const classes = useStyles();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (!disabled) {
            setAnchorEl(event.currentTarget);
        }
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const id = !!anchorEl ? 'simple-popover' : undefined;

    return (
        <>
            <button className={classes.triggerButton} onClick={handleClick}>
                {children}
            </button>
            <Popover
                id={id}
                open={!!anchorEl}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <div className={classes.body}>
                    <Typography>{message}</Typography>
                    <div className={classes.buttons}>
                        <Button color="secondary" onClick={handleClose}>
                            No
                        </Button>
                        <Button color="primary" onClick={okMethod}>
                            Yes
                        </Button>
                    </div>
                </div>
            </Popover>
        </>
    );
};

export default Confirm;
