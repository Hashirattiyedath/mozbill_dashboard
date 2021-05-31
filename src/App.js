import React from 'react';
import {Route, Switch } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./sass/index.css";
import '../node_modules/font-awesome/css/font-awesome.min.css';
import Login from "./component/pages/Login"; 
import Dashboard from "./component/pages/Dashboard";
import Expense from "./component/pages/Expense";
import Sale from './component/pages/Sale';
import Purchase from './component/pages/Purchase';

const App = ()=> {
  return(
    <>
      <Switch>
        <Route exact path="/"  component={Login}/>
        <Route exact path="/dashboard"  component={Dashboard}/>
        <Route exact path="/sale"  component={Sale}/>
        <Route exact path="/purchase"  component={Purchase}/>
        <Route exact path="/Expense"  component={Expense}/>
      </Switch>
    </>
  )
}

export default App;