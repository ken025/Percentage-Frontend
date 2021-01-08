import React from 'react';
import { Switch, Route } from 'react-router-dom'
// import SavingCards from '../containers/SavingCards'
// import SavingPage from './SavingPage'
import ExpenseContainer from '../containers/ExpenseContainer'
import UserContainer from '../containers/UserContainer';
import Home from './Home';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            {/* <Route path="/savings/:id" component={SavingPage}/> */}
        {/* <Route path="/savings" component={ SavingCards }/> */}
            <Route path="/expenses" component={ ExpenseContainer }/>
            {/* <Route path="/profile" component={ UserContainer } /> */}
      </Switch>
    );
};

export default Router;