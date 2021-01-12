import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Accounts from '../components/Accounts'
import Account from '../components/Account'
import AccountInput from '../components/AccountInput'
import Home from './Home';
import ResourceContainer from '../containers/ResourceContainer';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/resources" component={ ResourceContainer }/>
            <Route path='/accounts/new' component={AccountInput}/>
            <Route path='/accounts/:id' component={Account}/>
            <Route path='/accounts' component={Accounts}/>\
      </Switch>
    );
};

export default Router;