import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { GlobalContext } from '../context/GlobalState';
// import { Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  mainroot: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  root: {
    minWidth: 275,
    display: 'inline-block',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 20,
  },
}));

export default function ShowResult() {
  const { transactions } = useContext(GlobalContext);

  const inc = transactions.reduce(
    (result, { income }) => (result += income),
    0
  );
  // console.log(inc);
  const totalExpenses = transactions.reduce(
    (result, { expenses }) => (result += expenses),
    0
  );
  // console.log(inc, totalExpenses);

  const classes = useStyles();
  let income = inc;
  let expenses = totalExpenses;
  let totalBalance = income - expenses;
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      // spacing={0.5}
    >
      {/* <Grid item sm={3} /> */}
      <Grid
        item
        xs={7}
        sm={3}
        style={{
          margin: '10px',
        }}
      >
        <Card className={classes.paper}>
          <CardContent className={classes.content}>
            <h1 className={classes.text}>Total Income</h1>
            <br />
            <Typography
              className={classes.title}
              style={{ color: '#8AE22E' }}
              variant="body2"
              component="p"
            >
              {income}{' '}
              <span style={{ color: 'black', fontWeight: 'bold' }}>$</span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        xs={7}
        sm={3}
        style={{
          margin: '10px',
        }}
      >
        <Card className={classes.paper}>
          <CardContent className={classes.content}>
            <h1 className={classes.text}>Total Expenses</h1>
            <br />
            <Typography
              className={classes.title}
              style={{ color: 'red' }}
              variant="body2"
              component="p"
            >
              {expenses}{' '}
              <span style={{ color: 'black', fontWeight: 'bold' }}>$</span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        xs={7}
        sm={3}
        style={{
          margin: '10px',
        }}
      >
        <Card className={classes.paper}>
          <CardContent>
            <h1 className={classes.text}>Total Balance</h1>
            <br />
            <Typography
              className={classes.title}
              style={{ color: '#0B0C47' }}
              variant="body2"
              component="p"
            >
              {totalBalance}{' '}
              <span
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  marginRight: 1,
                  right: 0,
                }}
              >
                $
              </span>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* <Grid item sm={2} /> */}
    </Grid>
  );
}
