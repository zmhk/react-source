import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './assets/css/index.css';
import store from './redux/store'
import { Provider } from 'react-redux'
import getRouter from './router/index'
import App from './TodoApp'

ReactDOM.render(
    <Provider store={store}>
        <Router>
            {getRouter()}
        </Router>
    </Provider>
    ,
    document.getElementById('root'));
