import React from 'react';
import './App.css';
import InputData from './components/Inputdata';
import TableComponent from './components/Table';
import ShowResult from './components/ShowResult';
import { GlobalProvider } from './context/GlobalState';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <GlobalProvider>
      <div>
        <Grid item xs={12}>
          <header className="App-header">
            <h1>Expense Tracker</h1>
          </header>
        </Grid>
        <br />
        <ShowResult />
        <br /><br />
        <InputData />
        <TableComponent />
      </div>
    </GlobalProvider>
  );
}

export default App;
