import React from 'react'
import { Switch, Route } from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Account from './pages/Account';

const Routes = () => {
  return (
    <Switch>
        <Route path='/' exact component={Dashboard}/>
        <Route path="/accounts">
            <Account></Account>
        </Route>
    </Switch>
  )
}

export default Routes