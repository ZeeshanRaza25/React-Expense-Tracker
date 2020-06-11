import React from 'react';
import './App.css';
import InputData from './components/Inputdata';
import TableComponent from './components/Table';
import ShowResult from './components/ShowResult';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Expense Tracker</h1>
      </header>
      <ShowResult />
      <br /><br />
      <div>
        <InputData />
      </div>
      <TableComponent />
    </div>
  );
}

export default App;
