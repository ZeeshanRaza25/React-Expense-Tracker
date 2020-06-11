import React, { useState } from 'react';
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
    let [Title, setTitle] = useState('');
    let [Income, setIncome] = useState(0);
    let [Expense, setExpense] = useState(0);

    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Title" onChange={(event) => setTitle(event.target.value)} />
            <TextField id="standard-basic" label="Income" onChange={(event) => setIncome(event.target.value)} />
            <TextField id="standard-basic" label="Expenses" onChange={(event) => setExpense(event.target.value)} />
            <Button variant="outlined" color="secondary" onClick={() => console.log(Title, Income, Expense)}>
                Create Record
            </Button>
        </form>
    );
}
