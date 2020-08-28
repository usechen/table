import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TableC from '@/compontens/TableC';
import Header from '@/compontens/Header/Header.js';
import HeaderSeach from '@/compontens/HeaderSeach/HeaderSeach.js';
import Nav from '@/compontens/Nav/Nav.js';
import TableSelect from '@/compontens/TableSelect';
import ToDoList from '@/compontens/ToDoList';
import SupplierSelection from '@/compontens/SupplierSelection';
// import './App.less';

function App() {
  return (
    <div className="App">
      {/* <TableC></TableC> */}
      {/* <Header></Header>
      <HeaderSeach></HeaderSeach> */}
      <Router>
        {/* <Nav></Nav> */}

        <Route path="/duibi" component={TableC}></Route>
        <Route path="/baojia" component={TableSelect}></Route>
        <Route path="/todolist" component={ToDoList}></Route>
        <Route path="/supplier" component={SupplierSelection}></Route>
      </Router>
    </div>
  );
}

export default App;