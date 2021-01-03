import React from 'react';
import { Switch, Route } from 'react-router-dom'
// import SavingCards from '../containers/SavingCards'
import SavingPage from './SavingPage'
import Home from './Home'
import ExpenseContainer from '../containers/ExpenseContainer'

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/savings/:id" component={SavingPage}/>
        {/* <Route path="/savings" component={ SavingCards }/> */}
        <   Route path="/expenses" component={ ExpenseContainer }/>
      </Switch>
    );
};

export default Router;