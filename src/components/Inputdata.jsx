import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1.5),
            width: '30ch',
        },
    },
}));


export default function InputData() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Title" />
            <TextField id="standard-basic" label="Income" />
            <TextField id="standard-basic" label="Expenses" />
            <Button variant="outlined" color="secondary">
                Create Record
            </Button>
        </form>
    );
}
