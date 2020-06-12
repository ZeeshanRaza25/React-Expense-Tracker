import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import {GlobalContext} from '../context/GlobalState';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        display: 'inline-block'
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    },
    text: {
        fontSize: 20,
        fontWeight: 'Light'
    },
});

export default function ShowResult() {
    const {transactions} = useContext(GlobalContext);

    const inc = transactions.map(transaction=> transaction.income);
    const totalIncome = inc.reduce((acc, item) => (acc += item) , 0).toFixed(2);

    const exp = transactions.map(transaction=> transaction.expenses);
    const totalExpenses = exp.reduce((acc, item) => (acc += item) , 0).toFixed(2);

    // console.log(transactions);

    const classes = useStyles();
    let income = totalIncome;
    let expenses = totalExpenses;
    let totalBalance = income - expenses;
    return (
        <div>
            <Card className={classes.root} >
                <CardContent>
                    <h1 className={classes.text}>Total Income</h1>
                    <br />
                    <Typography className={classes.title} style={{ color: "green" }} variant="body2" component="p">
                        {income} <span style={{ color: "black", fontWeight: 'bold' }}>$</span>
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root} >
                <CardContent>
                    <h1 className={classes.text}>Total Expenses</h1>
                    <br />
                    <Typography className={classes.title} style={{ color: "red" }} variant="body2" component="p">
                        {expenses} <span style={{ color: "black", fontWeight: 'bold' }}>$</span>
                    </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root} >
                <CardContent>
                    <h1 className={classes.text}>Total Balance</h1>
                    <br />
                    <Typography className={classes.title} style={{ color: "#0B0C47" }} variant="body2" component="p">
                        {totalBalance} <span style={{ color: "black", fontWeight: 'bold' }}>$</span>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
