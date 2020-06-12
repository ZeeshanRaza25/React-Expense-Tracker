import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { GlobalContext } from '../context/GlobalState';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1.5),
            width: '30ch',
            // alignItems: 'center'
            marginLeft: `3%`,
        },
    },
    TextField: {
        marginLeft: `3%`,
    },
    button: {
        backgroundColor: "green",
        border: 'none',
        // color: 'white',
        padding: 7,
        textAlign: 'center',
        // fontSize: 15,
    }
}));

export default function InputData() {
    let [title, setTitle] = useState('');
    let [income, setIncome] = useState(0);
    let [expenses, setExpenses] = useState(0);

    const { addTransaction } = useContext(GlobalContext);
    // console.log(addTransaction , "hello");

    const onSubmit = () => {
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            title,
            income: income * 1,
            expenses: expenses * 1,
        }
        // console.log(newTransaction);
        addTransaction(newTransaction);
    }

    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField className={classes.TextField} size="small" variant="outlined" id="standard-basic" label="Title" onChange={(event) => setTitle(event.target.value)} />
            <TextField id="standard-basic" size="small" variant="outlined" label="Income" onChange={(event) => setIncome(event.target.value)} />
            <TextField id="standard-basic" size="small" variant="outlined" label="Expenses" onChange={(event) => setExpenses(event.target.value)} />
            <Button className={classes.button} variant="outlined" onClick={onSubmit}>
                Add Transaction
            </Button>
        </form>
    );
}