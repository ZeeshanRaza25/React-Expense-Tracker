import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
    const classes = useStyles();
    let income = 1000;
    let expenses = 500;
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
