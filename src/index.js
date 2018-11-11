import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import getRouter from "./router"
import store from './redux/store'
import Provider from './components/Provider'

ReactDOM.render(
    <Router>
        <Provider store={store}>
           <Route>{getRouter()}</Route>
        </Provider>
    </Router>,
    document.getElementById('root'));
