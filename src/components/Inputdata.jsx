import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { GlobalContext } from '../context/GlobalState';




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

// const useStyles = makeStyles((theme) => ({
//     mainroot: {
//         flexGrow: 1,
//     },
//     paper: {
//         padding: theme.spacing(2),
//         textAlign: 'center',
//         color: theme.palette.text.secondary,
//     },
//     root: {
//         minWidth: 275,
//         display: 'inline-block',
//     },
//     title: {
//         fontSize: 20,
//         fontWeight: "bold",
//     },
//     text: {
//         fontSize: 20,
//         // fontWeight: 'Light',
//     },
// }));

// const useStyles = makeStyles((theme) => ({
//     mainroot: {
//         '& > *': {
//             margin: theme.spacing(1.5),
//             width: '30ch',
//             // alignItems: 'center'
//             marginLeft: `3%`,
//         },
//     },
//     TextField: {
//         marginLeft: `3%`,
//     },
//     button: {
//         backgroundColor: "green",
//         border: 'none',
//         // color: 'white',
//         padding: 7,
//         textAlign: 'center',
//         // fontSize: 15,
//     }
// }));

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
        // eslint-disable-next-line no-lone-blocks
        addTransaction(newTransaction)
    }

    const classes = useStyles();

    return (
            <Grid container
                direction="row"
                justify="center"
                alignItems="center"
                styles={classes.root}
                spacing={1}>
                <Grid item xs={2}>
                    <TextField size="small" variant="outlined" label="Title" onChange={(event) => setTitle(event.target.value)} />
                </Grid>
                <Grid item xs={2}>
                    <TextField size="small" variant="outlined" label="Income" onChange={(event) => setIncome(event.target.value)} />
                </Grid>
                <Grid item xs={2}>
                    <TextField size="small" variant="outlined" label="Expenses" onChange={(event) => setExpenses(event.target.value)} />
                </Grid>
                <Grid item xs={2}>
                    <Button className={classes.button} variant="outlined" onClick={onSubmit}>
                        Add Transaction
                    </Button>
                </Grid>
            </Grid>
    );
}