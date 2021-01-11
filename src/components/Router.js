import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Accounts from '../components/Accounts'
import Account from '../components/Account'
import AccountInput from '../components/AccountInput'
// import UserContainer from '../containers/UserContainer';
// import Resources from 
import Home from './Home';
import ResourceContainer from '../containers/ResourceContainer';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/resources" component={ ResourceContainer }/>
            <Route path='/accounts/new' component={AccountInput}/>
            <Route path='/accounts/:id' component={Account}/>
            <Route path='/accounts' component={Accounts}/>
            {/* <Route path="/savings/:id" component={SavingPage}/> */}
        {/* <Route path="/savings" component={ SavingCards }/> */}
            {/* <Route path="/expenses" component={ ExpenseContainer }/> */}
            {/* <Route path="/profile" component={ UserContainer } /> */}
      </Switch>



            // <NavigationBar/>
            // <Switch>
            //   <Route path='/accounts/new' component={AccountInput}/>
                                                                        
            //   <Route path='/accounts/:id' render={(routerProps) => <Account {...routerProps} accounts={this.props.accounts}/>}/>
            //   <Route path='/accounts' render={(routerProps) => <Accounts {...routerProps} accounts={this.props.accounts}/>}/>
            // </Switch>
    );
};

export default Router;