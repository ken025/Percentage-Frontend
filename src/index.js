import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// replaces window._Redux_ devtools
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/rootReducers';
import { BrowserRouter as Router } from 'react-router-dom';

// store accepts 1. reducer 2. dev tools/middleware
const store= createStore(
  rootReducer, 
  composeWithDevTools(applyMiddleware(thunk)) 
  )

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <Router>
          <App /> 
        </Router>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import {createStore, applyMiddleware, compose} from 'redux'
// import thunk from 'redux-thunk'
// import { Provider } from 'react-redux'
// import {BrowserRouter as Router} from 'react-router-dom'
// import accountReducer from './reducers/accountReducer'

// import App from './App';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// let store = createStore(accountReducer, composeEnhancers(applyMiddleware(thunk)))

// ReactDOM.render(
//   <Provider store={store}>
//     <Router>
//       <App />
//     </Router>
//   </Provider>,
//   document.getElementById('root'));