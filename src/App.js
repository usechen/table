import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TableC from './compontens/TableC';
import TableSelect from './compontens/TableSelect';
import { Button } from 'antd'
import './App.css';

function App() {
  return (
    <div className="App">
      <TableC></TableC>
      <Button size='large'>Default</Button>
      <Router>
        <ul>
          <li>
            <Link to="/home">首页</Link>
          </li>
        </ul>
        <Route path="/home">
          <div className='dier'>
            <TableSelect></TableSelect>
          </div>
        </Route>
      </Router>
    </div>
  );
}

export default App;
