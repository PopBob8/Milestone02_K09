import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root : {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const TextButtons = (button) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Button>{button.title}</Button>
        </div>
    )
}

export default TextButtons;