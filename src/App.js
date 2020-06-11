import React from 'react';
import './App.css';
import InputData from './components/Inputdata';
import TableComponent from './components/Table';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Expense Tracker</h1>
      </header>
      <div>
        <br /><br />
        <InputData />
      </div>
      <br /><br />
      <TableComponent />
    </div>
  );
}

export default App;
