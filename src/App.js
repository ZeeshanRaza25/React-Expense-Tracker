import React from 'react';
import './App.css';
import InputData from './components/Inputdata';
import TableComponent from './components/Table';
import ShowResult from './components/ShowResult';
import { GlobalProvider } from './context/GlobalState';



function App() {
  return (
    <GlobalProvider className="App">
      <header className="App-header">
        <h1>React Expense Tracker</h1>
      </header>
      <ShowResult />
      <br /><br />
      <div>
        <InputData />
      </div>
      <TableComponent />
    </GlobalProvider>
  );
}

export default App;
