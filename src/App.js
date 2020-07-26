import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TableC from '@/compontens/TableC';
import Header from '@/compontens/Header/Header.js';
import HeaderSeach from '@/compontens/HeaderSeach/HeaderSeach.js';
import TableSelect from '@/compontens/TableSelect';
import { Button } from 'antd'
import './App.less';

function App() {
  return (
    <div className="App">
      {/* <TableC></TableC> */}
      <Header></Header>
      <HeaderSeach></HeaderSeach>
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
